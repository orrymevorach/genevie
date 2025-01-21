import { setupFirestoreListener } from '@/lib/firebase-db';
import { useEffect } from 'react';
import { mapTableToCustomerOrder } from '@/pages/admin';
import { orderColumns } from './table-utils';

const sortDataAndSetState = (
  collectionData,
  tableId,
  setTableData,
  setColumns,
  sortConfig
) => {
  const allColumns = Array.from(
    new Set(collectionData.flatMap(row => Object.keys(row)))
  );

  const customOrder = mapTableToCustomerOrder[tableId];
  const orderedColumns = orderColumns(allColumns, customOrder);

  // Apply sorting based on sortConfig
  const sortedData = [...collectionData].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (sortConfig.direction === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  setTableData(sortedData);
  setColumns(orderedColumns);
};

export default function useFetchTableData({
  sortConfig,
  tableId,
  setTableData,
  setColumns,
  setNewItems,
}) {
  const fetchTableData = async () => {
    try {
      const unsubscribe = setupFirestoreListener({
        collectionName: tableId,
        onDataUpdate: data => {
          sortDataAndSetState(
            data,
            tableId,
            setTableData,
            setColumns,
            sortConfig,
            setNewItems
          );
        },
      });

      return () => unsubscribe();
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, [sortConfig]);
}
