'use client'
import { Container, Row, Col } from 'react-bootstrap';
import styles from './shop.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTableCells, faFilter, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";

const ShopPage = () => {
   return (
      <>
         <AnimatePresence>
            <motion.div
            initial={{opacity:0,y:30,scale:0}}
            animate={{opacity:1,y:0,scale:1}}
            exist={{opacity:1,y:30}}
            transition={{delay:0.25}}
            >
               <div className={styles.container}>
                  <Container >
                     <Row className={styles.linkshop}>
                        <Col><h3>Shop</h3> </Col>
                        <Col className='text-end'>Home /<b>Shop</b></Col>
                     </Row>
                     <Row className={styles.actionfill}>
                        <Col>Showing 1–16 of 21 results</Col>
                        <Col className='text-end'><FontAwesomeIcon icon={faFilter} /> Filters</Col>
                        <Col className='text-end'>
                           <ul className={styles.listgird}>
                              <li >
                                 <FontAwesomeIcon icon={faTableCells} />
                              </li>
                              <li >
                                 <FontAwesomeIcon icon={faList} />
                              </li>
                           </ul>
                        </Col>
                     </Row>
                     <Row className={styles.contentfill}>
                        <Col md={3} className={styles.fillitem}>
                           <h4>Filter by price</h4>
                           <ul>
                              <li>All</li>
                              <li>10000vnd</li>
                           </ul>
                        </Col>
                        <Col md={3} className={styles.fillitem}>
                           <h4>Sort by</h4>
                           <ul>
                              <li>Default</li>
                              <li>Price: Low to High</li>
                              <li>Price: High to Low</li>
                           </ul>
                        </Col>
                        <Col md={3} className={styles.fillitem}>
                           <h4>Filter by category</h4>
                           <ul>
                              <li>All</li>
                              <li>Category 1</li>
                              <li>Category 2</li>
                           </ul>
                        </Col>
                     </Row>
                     <Row className={styles.productitem}>
                        <Col md={3}>
                           <div className={styles.ationimage}>
                              <div className={styles.pdimg}>
                                 <Image src="/images/products/a-teaspoon-of-earth-and-sea.jpg" alt="" width={250} height={350}></Image>
                                 <div className={styles.actionitemtop}>
                                    <div className={styles.actiontop}>
                                       <li className={styles.iconactiontop}><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                                    </div>
                                 </div>
                                 <div className={styles.actionitembot}>
                                    <div className={styles.actionbot}>
                                       <li className={styles.iconactionbot}><FontAwesomeIcon icon={faHeart} /></li>
                                    </div>
                                 </div>
                              </div>

                           </div>
                           <div className={styles.pdinfo}>
                              <p className={styles.pdprice}>100000 VND</p>
                              <b><h4 className={styles.pdname}>A Teaspoon of Earth and Sea</h4></b>
                              <p className={styles.pdauthor}><b>By</b> SAVANNA WALKER</p>
                           </div>
                        </Col>

                     </Row>
                  </Container>
               </div>
            </motion.div>
         </AnimatePresence>
      </>
   );
}

export default ShopPage;
