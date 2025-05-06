import { useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import { usePageTitle } from '../../context/pagetitleContext';
import ProjectCard from '../../components/ProjectCard';
import styles from './Project.module.css';

const projects = [
  { title: 'E-Commerce Platform', tech: 'React/Node.js', description: 'Full-stack shopping platform' },
  { title: 'Task Manager', tech: 'React/Firebase', description: 'Real-time task management app' },
  { title: 'AI Doctor Advice', tech: 'Python/Flask/ML', description: 'AI-powered health advice system' },
  { title: 'Chess Game', tech: 'C++', description: 'Multiplayer chess game with AI opponent' },
  { title: 'Typewriter', tech: 'HTML/CSS/JavaScript', description: 'Classic typewriter simulation' },
  { title: 'Chat Application', tech: 'React/Node.js', description: 'Real-time chat app with user authentication' },
];

export default function Projects() {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Projects');
  }, [setTitle]);

  return (
    <div className={styles.projects}>
      <Typography variant="h4" gutterBottom align="center">My Projects</Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"  // Centers the cards horizontally
        alignItems="center"      // Centers the cards vertically within the container
      >
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard 
              title={project.title}
              tech={project.tech}
              description={project.description}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
