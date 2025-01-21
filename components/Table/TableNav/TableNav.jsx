import Button from '@/components/shared/Button/Button';
import styles from './TableNav.module.scss';

export default function TableNav({ tables, currentTable, setCurrentTable }) {
  if (!tables) return null;
  return (
    <div className={styles.container}>
      {tables.map(table => {
        return (
          <Button
            key={table}
            handleClick={() => setCurrentTable(table)}
            isLight={table === currentTable}
          >
            {table}
          </Button>
        );
      })}
    </div>
  );
}
