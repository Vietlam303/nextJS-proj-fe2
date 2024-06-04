import Links from "./links/Links"
import styles from "./navbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import Image from "next/image";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (

    <div>
      <Row>
        <Col md={2} sm={3} className={styles.navitem}>
          <div herf="/" className={styles.logo}><Image src="/logo.jpg" alt="book" width={80} height={90} /></div>
        </Col>
        <Col md={2} sm={3} className={styles.navitem}>
          Search
        </Col>
        <Col md={6} sm={3} className={styles.navitem}>
          <Links />
        </Col>

        <Col md={2} sm={3} className={styles.navitem}>
          <Link href="">
            <div className={styles.icon}>
              <FaUser style={{ fontSize: "2em", marginLeft: "50px" }} />
            </div>
          </Link>

          <Link href="">
            <div className={styles.icon}>
              <FaShoppingCart style={{ fontSize: "2em", marginLeft: "50px" }} />
            </div>
          </Link>
        </Col>
      </Row>
    </div >

  )
}

export default Navbar