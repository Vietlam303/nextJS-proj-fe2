'use client';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './shop.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTableCells, faFilter, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';
import useSWR from "swr";

// Animation variants
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
   // Fetcher function to fetch data from API
   const fetcher = (url) => fetch(url).then((res) => res.json());

   const [products, setProducts] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);

   const { data, error, isLoading } = useSWR(
      `http://127.0.0.1:8000/api/products?page=${currentPage}`,
      fetcher
   );

   useEffect(() => {
      console.log("Fetched data:", data); 
      if (data) {
         if (data.data) {  
            console.log("Products in data:", data.data); 
            setProducts((prevProducts) => [...prevProducts, ...data.data]);
         } else {
            console.log("No products found in data");
         }
      }
   }, [data]);

   const handleLoadMore = () => {
      setCurrentPage((prevPage) => prevPage + 1);
   };

   const [open, setOpen] = useState(false);
   const [hoveredProduct, setHoveredProduct] = useState(null);

   const handleClick = () => {
      setOpen(!open);
   };
   const handleMouseEnter = (index) => {
      setHoveredProduct(index);
   };

   const handleMouseLeave = () => {
      setHoveredProduct(null);
   };
   // Kiểm tra xem đã hết sản phẩm để load hay không
   const isAllProductsLoaded = data && data.to === data.total;

   if (isLoading && currentPage === 1) return <div>Loading...</div>;
   if (error) return <div>Error loading data</div>;
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
                        <Col>Showing {products?.length} results</Col>
                        <Col className='text-end' onClick={handleClick} style={{ color: open ? 'green' : 'black' }}>
                           <div className={styles.fillbtn} onClick={() => setOpen((prev) => !prev)}>
                              <FontAwesomeIcon icon={faFilter} /> Filters
                           </div>
                        </Col>
                        <Col className='text-end'>
                           <ul className={styles.listgird}>
                              <li><FontAwesomeIcon icon={faTableCells} /></li>
                              <li><FontAwesomeIcon icon={faList} /></li>
                           </ul>
                        </Col>
                     </Row>
                     {open && (
                        <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: 0 }}
                           transition={{ delay: 0.3 }}
                        >
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
                        </motion.div>
                     )}

                     <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="show"
                     >
                        <Row className={styles.productitem}>
                           {products.map((product, index) => (
                              <Col key={index} md={3} sm={6} className={styles.productItem}>
                                 <motion.div
                                    className={styles.ationimage}
                                    variants={producti}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                    whileHover={{ scale: 1.05 }}
                                 >
                                    <div className={styles.pdimg}>
                                       <Image src={`/images/products/${product.image}`} alt={product.name} width={250} height={350} />
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
                                    <p className={styles.pdprice}>{product.reduced_price} VND</p>
                                    <b><h4 className={styles.pdname}>{product.name}</h4></b>
                                    <p className={styles.pdauthor}><b>By</b> SAVANNA WALKER</p>
                                 </div>
                              </Col>
                           ))}
                        </Row>
                     </motion.div>

                     <div className={styles.pagination}>
                        {!isAllProductsLoaded && (
                           <button onClick={handleLoadMore} disabled={isLoading}>
                              Load More
                           </button>
                        )}
                     </div>

                  </Container>
               </div>
            </motion.div>
         </AnimatePresence>
      </>
   );
}

export default ShopPage;
