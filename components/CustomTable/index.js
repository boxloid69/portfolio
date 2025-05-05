import { Typography } from '@mui/material';
import styles from './CustomTable.module.css';

export default function CustomTable({ data }) {
  if (!data || !data.headers || !data.rows) return (
    <Typography variant="body1" color="error">
      No table data available
    </Typography>
  );

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <th key={index} className={styles.headerCell}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.bodyRow}>
              {data.headers.map((header, cellIndex) => (
                <td key={cellIndex} className={styles.bodyCell}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}