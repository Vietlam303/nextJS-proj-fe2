'use client'
import { Container, Row, Col } from 'react-bootstrap';
import styles from './shop.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTableCells, faFilter, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

const variants = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.3,
      },
   },
}
const producti = {
   hidden: { opacity: 0, x: 50 },
   show: {
      opacity: 1,
      x: 0,
      transition: {
         duration: 1,
      }
   }
}
const itop = {
   hidden: { opacity: 0, y: -30 },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: .4,
         ease: [.61, .61, .72, 1.59]
      }
   }
}
const ibot = {
   hidden: { opacity: 0, y: 30 },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: .4,
         ease: [.61, .61, .72, 1.59]
      }
   }
}

const ShopPage = () => {
   const [hoveredProduct, setHoveredProduct] = useState(null);

   const handleMouseEnter = (index) => {
      setHoveredProduct(index);
   };

   const handleMouseLeave = () => {
      setHoveredProduct(null);
   };
   return (
      <>
         <AnimatePresence>
            <motion.div
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0 }}
               transition={{ delay: 0.3 }}
            >
               <div className={styles.container}>
                  <Container>
                     <Row className={styles.linkshop}>
                        <Col><h3>Shop</h3> </Col>
                        <Col className='text-end'>Home /<b>Shop</b></Col>
                     </Row>
                     <Row className={styles.actionfill}>
                        <Col>Showing 1–16 of 21 results</Col>
                        <Col className='text-end'><FontAwesomeIcon icon={faFilter} /> Filters</Col>
                        <Col className='text-end'>
                           <ul className={styles.listgird}>
                              <li><FontAwesomeIcon icon={faTableCells} /></li>
                              <li><FontAwesomeIcon icon={faList} /></li>
                           </ul>
                        </Col>
                     </Row>
                     <Row className={styles.contentfill}>
                        <Col md={3} sm={6} className={styles.fillitem}>
                           <h4>Filter by price</h4>
                           <ul>
                              <li>All</li>
                              <li>10000vnd</li>
                           </ul>
                        </Col>
                        <Col md={3} sm={6} className={styles.fillitem}>
                           <h4>Sort by</h4>
                           <ul>
                              <li>Default</li>
                              <li>Price: Low to High</li>
                              <li>Price: High to Low</li>
                           </ul>
                        </Col>
                        <Col md={3} sm={6} className={styles.fillitem}>
                           <h4>Filter by category</h4>
                           <ul>
                              <li>All</li>
                              <li>Category 1</li>
                              <li>Category 2</li>
                           </ul>
                        </Col>
                     </Row>

                     <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="show"
                     >
                        <Row className={styles.productitem}>
                           {[1, 2, 3, 4].map((product, index) => (
                              <Col key={index} md={3} sm={6} className={styles.productItem}>
                                 <motion.div
                                    className={styles.ationimage}
                                    variants={producti}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                    whileHover={{ scale: 1.05 }}
                                 >
                                    <div className={styles.pdimg}>
                                       <Image src="/images/products/a-teaspoon-of-earth-and-sea.jpg" alt="A Teaspoon of Earth and Sea book cover" width={250} height={350}></Image>
                                       {hoveredProduct === index && (
                                          <>
                                             <motion.div
                                                className={styles.actionitemtop}
                                                initial="hidden"
                                                animate="show"
                                                variants={itop}
                                             >
                                                <div className={styles.actiontop}>
                                                   <li className={styles.iconactiontop}><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                                                </div>
                                             </motion.div>
                                             <motion.div
                                                className={styles.actionitembot}
                                                initial="hidden"
                                                animate="show"
                                                variants={ibot}
                                             >
                                                <div className={styles.actionbot}>
                                                   <li className={styles.iconactionbot}><FontAwesomeIcon icon={faHeart} /></li>
                                                </div>
                                             </motion.div>
                                          </>
                                       )}
                                    </div>
                                 </motion.div>
                                 <div className={styles.pdinfo}>
                                    <p className={styles.pdprice}>100000 VND</p>
                                    <b><h4 className={styles.pdname}>A Teaspoon of Earth and Sea</h4></b>
                                    <p className={styles.pdauthor}><b>By</b> SAVANNA WALKER</p>
                                 </div>
                              </Col>
                           ))}
                        </Row>
                     </motion.div>



                  </Container>
               </div>
            </motion.div>
         </AnimatePresence>
      </>
   );
}

export default ShopPage;
