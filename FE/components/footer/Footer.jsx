import style from "@/components/footer/footer.module.css"
import { Container, Row, Col, NavItem } from 'react-bootstrap';
import Image from "next/image";
import { FaCopyright } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
const Footer = () => {
  return (

    <div className={style.footer}>
      <div className={style.category}>
        <Container>
          <Row>
            <Col>
              <div className={style.item}>
                <div className={style.itemTitle} style={{ margin: "2px 0", fontSize: "20px" }}>funny</div>


                <div className={style.image}>
                  <Row>
                    <Col md={3}>
                      <Image src="/vercel.svg" alt="" width={50} height={50} ></Image>
                    </Col>
                    <Col md={9}>
                      <div className={style.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nulla.
                      </div>
                    </Col>
                  </Row>
                </div>


              </div>
            </Col>


            <Col>
              <div className={style.item}>
                <div className={style.itemTitle} style={{ margin: "2px 0", fontSize: "20px" }}>funny</div>


                <div className={style.image}>
                  <Row>
                    <Col md={3}>
                      <Image src="/vercel.svg" alt="" width={50} height={50} ></Image>
                    </Col>
                    <Col md={9}>
                      <div className={style.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nulla.
                      </div>
                    </Col>
                  </Row>
                </div>


              </div>
            </Col>

            <Col>
              <div className={style.item}>
                <div className={style.itemTitle} style={{ margin: "2px 0", fontSize: "20px" }}>funny</div>


                <div className={style.image}>
                  <Row>
                    <Col md={3}>
                      <Image src="/vercel.svg" alt="" width={50} height={50} ></Image>
                    </Col>
                    <Col md={9}>
                      <div className={style.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nulla.
                      </div>
                    </Col>
                  </Row>
                </div>


              </div></Col>
          </Row>
        </Container>
      </div>

      <div className={style.footerItem}>
        <Container>
          <Row>
            <Col>
              <div className={style.title}>ABOUT ME</div>
              <p href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus earum minima provident cumque, dolor sit?</p>
              <h6>Address</h6>
              <p>
                123 Main Street
                New York</p>
            </Col>
            <Col>
              <div className={style.title}>ITEM 1

              </div>
              <p className={style.contents}>
                <Link href='#'>Content1</Link>
                <Link href='#'>Content1</Link>
                <Link href='#'>Content1</Link>
              </p>
            </Col>
            <Col>
              <div className={style.title}>ITEM 2</div>
              <p className={style.contents}>  <Link href='#'>Content1</Link>
                <Link href='#'>Content1</Link>
                <Link href='#'>Content1</Link></p>
            </Col>
            <Col>
              <div className={style.title}>ITEM 3</div>
              <p className={style.contents}> <Link href='#'>Content1</Link>
                <Link href='#'>Content1</Link>
                <Link href='#'>Content1</Link></p>
            </Col>
          </Row>

        </Container>

      </div>

      <div className={style.wave}>


        <div className={style.wave1}></div>
        <div className={style.wave2}></div>
        <div className={style.wave3}></div>

      </div>
      <div className={style.copyright}>
        <p> <FaCopyright style={{ marginTop: '5px', marginRight: '5px' }} /> 2024 , Book store</p>

        <p>Design by nhom 10</p>
      </div>
    </div>
  )
}

export default Footer