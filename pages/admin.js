import Meta from '@/components/shared/Head/Head';
import { COOKIES, TABLES } from '@/utils/constants';
import React, { useState } from 'react';
import Table from '@/components/Table/Table';
import TableNav from '@/components/Table/TableNav/TableNav';
import Layout from '@/components/shared/Layout/Layout';
import Cookies from 'cookies';

export const mapTableToCustomerOrder = {
  [TABLES.MEMBERS]: [
    'firstName',
    'lastName',
    'username',
    'emailAddress',
    'created',
    'leagues',
    'brackets',
    'adminLeagues',
  ],
  [TABLES.LEAGUES]: [
    'name',
    'id',
    'created',
    'admin',
    'sport',
    'members',
    'userBrackets',
    'json',
  ],
  [TABLES.BRACKETS]: ['name', 'userName', 'created'],
  [TABLES.SNOWBOARDERS]: ['name', 'createdAt'],
};

export default function Admin() {
  const tables = Object.values(TABLES);
  const [currentTable, setCurrentTable] = useState(tables[0]);

  return (
    <>
      <Meta />
      <Layout>
        <TableNav
          tables={tables}
          currentTable={currentTable}
          setCurrentTable={setCurrentTable}
        />
        {tables.map(table => {
          if (table === currentTable)
            return <Table key={`table-${table}`} tableId={table} />;
          return;
        })}
      </Layout>
    </>
  );
}

export function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res);
  const uid = cookies.get(COOKIES.UID);
  if (!uid)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };

  return {
    props: {},
  };
}
