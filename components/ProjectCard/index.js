import { Card, CardContent, Typography } from '@mui/material';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, tech, description }) {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography color="textSecondary" gutterBottom>{tech}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}