import styles from './Table.module.scss';
import { db } from '@/lib/firebase-db';
import React, { useState } from 'react';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { camelToRegularCase } from '@/utils/utils';
import Loader from '../shared/Loader/Loader';
import { formatIsoDateWithTime, isIsoTimestamp } from './table-utils';
import useFetchTableData from './useFetchTableData';

export default function Table({ tableId }) {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: 'created',
    direction: 'desc',
  });
  useFetchTableData({
    sortConfig,
    tableId,
    setTableData,
    setColumns,
  });

  // Handle row deletion
  const handleDelete = async id => {
    try {
      await deleteDoc(doc(collection(db, tableId), id));
      setTableData(prevData => prevData.filter(row => row.id !== id)); // Remove deleted row from local state
    } catch (error) {
      console.error('Error deleting document:', error.message);
    }
  };
  // Handle column header click to toggle sorting
  const handleSort = key => {
    setSortConfig(prevConfig => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === 'asc'
          ? 'desc'
          : 'asc',
    }));
  };
  if (!columns.length) return <Loader isFullPage />;
  return (
    <div className={styles.container}>
      <p>Number of records: {tableData.length}</p>
      <table border="1" className={styles.table}>
        <thead>
          <tr>
            <th>Actions</th>
            {columns.map(column => (
              <th
                key={column}
                onClick={() => handleSort(column)}
                className={styles.titleHeading}
              >
                {camelToRegularCase(column)}{' '}
                {sortConfig.key === column
                  ? sortConfig.direction === 'asc'
                    ? '↑'
                    : '↓'
                  : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => {
            return (
              <tr key={row.id}>
                <td>
                  <button onClick={() => handleDelete(row.id)}>Delete</button>
                </td>
                {columns.map(column => {
                  let cellData = row[column];
                  if (!cellData)
                    return <td className={styles.tableData} key={column} />;

                  const cellDataType = typeof cellData;
                  const isString = cellDataType === 'string';
                  const isTimeStamp = isIsoTimestamp(cellData);
                  const isObject = cellDataType === 'object';
                  if (isTimeStamp) {
                    cellData = formatIsoDateWithTime(cellData);
                  }
                  if (isString) {
                    cellData = cellData;
                  }
                  if (isObject) {
                    cellData = JSON.stringify(cellData);
                  }
                  return (
                    <td key={column} className={styles.tableData}>
                      {cellData}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
