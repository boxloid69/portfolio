import { Container, Navbar, Nav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import profileImg from '../../assets/profile.jpeg';
import styles from './Home.module.css';

const Home = () => {
  const roles = [
    { title: "Web Developer", description: "Building responsive and modern websites using the latest technologies." },
    { title: "UI/UX Designer", description: "Creating user-friendly interfaces with an emphasis on design and accessibility." },
    { title: "Software Engineer", description: "Developing scalable and efficient software solutions to solve real-world problems." }
  ];

  const skills = [
    { title: "HTML & CSS", description: "Expert in building structured and stylish web pages with modern CSS techniques." },
    { title: "JavaScript", description: "Proficient in adding interactivity and functionality to websites using JavaScript." },
    { title: "React.js", description: "Developing dynamic and high-performance applications with React.js." }
  ];

  const achievements = [
    { title: "LeetCode Problems", value: "200+ Solved" },
    { title: "Programming Fundamentals", value: "Grade: A+" },
    { title: "Data Structures & Algorithms", value: "Grade: A+" },
    { title: "Object-Oriented Programming", value: "Grade: A+" },
    { title: "Design & Analysis of Algorithms", value: "Grade: A+" }
  ];

  return (
    <div className={styles.home}>
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i className="bi bi-code-slash me-2"></i>
            Ahmed Abdullah Hashmi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/" className="active">Home</Nav.Link>
              <Nav.Link as={Link} to="/education">Education</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Profile Section */}
      <Container className="text-center my-5">
        <img src={profileImg} alt="Profile" className={styles.profileImg} />
        <h2 className="mt-4">Ahmed Abdullah Hashmi</h2>
        <p className="lead">Web Developer | UI/UX Designer | Software Engineer</p>
      </Container>

      {/* Roles Section */}
      <Container className="my-5">
        <Row className="g-4 justify-content-center">
          {roles.map((role, index) => (
            <Col md={4} key={index}>
              <Card className={styles.floatingBox}>
                <Card.Body>
                  <Card.Title>{role.title}</Card.Title>
                  <Card.Text>{role.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Skills Section */}
      <Container className="my-5">
        <h3 className="text-center mb-4">Skills</h3>
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col md={4} key={index}>
              <Card className={styles.skillBox}>
                <Card.Body>
                  <Card.Title>{skill.title}</Card.Title>
                  <Card.Text>{skill.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Achievements Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">My Achievements</h2>
        <Row className="g-4 justify-content-center">
          {achievements.map((achievement, index) => (
            <Col md={3} key={index}>
              <Card className={styles.floatingBox}>
                <Card.Body>
                  <Card.Title>{achievement.title}</Card.Title>
                  <Card.Text>{achievement.value}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className={styles.footer}>
        <Container className="text-center py-4">
          <p>Connect with me:</p>
          <div className={styles.socialLinks}>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
          </div>
          <p className="mt-3">© 2025 Ahmed Abdullah Hashmi | All Rights Reserved</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;