import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { usePageTitle } from '../../context/pagetitleContext';
import CustomTable from '../../components/CustomTable';
import styles from './Education.module.css';

const educationData = {
  headers: ['Degree', 'University', 'Year'],
  rows: [
    {
      Degree: 'B.Sc Computer Science',
      University: 'Tech University',
      Year: '2020-2024'
    },
    {
      Degree: 'Web Development Bootcamp',
      University: 'Code Academy',
      Year: '2019'
    }
  ]
};

export default function Education() {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Education');
  }, [setTitle]);

  return (
    <div className={styles.education}>
      <Typography variant="h4" gutterBottom className={styles.title}>
        Education History
      </Typography>
      <CustomTable data={educationData} />
    </div>
  );
}