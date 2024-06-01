import Links from "./links/Links"
import styles from "./navbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {
  return (

    <div>
      <Row>
        <Col md={3} sm={4} className={styles.navitem}>
          <div herf="/" className={styles.logo}>logo</div>
        </Col>
        <Col md={3} sm={4} className={styles.navitem}>
          Search
        </Col>
        <Col md={6} sm={4} className={styles.navitem}>
            <Links />
        </Col>
      </Row>
    </div>

  )
}

export default Navbar