'use client';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './shop.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTableCells, faFilter, faHeart, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Form } from 'react-bootstrap';
import useSWR from "swr";
import { getCsrfToken, postDataWithCsrf } from '@/lib/axios';
import axios from 'axios'
import loading from '../shopbook/loading/loading'
import ModalDetaill from '@/components/modal/Modal'
// Animation variants
export const variants = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.3,
      },
   },
}
export const producti = {
   hidden: { opacity: 0, x: 50 },
   show: {
      opacity: 1,
      x: 0,
      transition: {
         duration: 1,
      }
   }
}
export const itop = {
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
export const ibot = {
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


const ShopBookPage = () =>{
   getCsrfToken()
   //ani
   // Fetcher function to fetch data from API
   const fetcher = url => axios.get(url).then(res => res.data);

   const [products, setProducts] = useState([]);
   const [categories, setCategories] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [fillToPrice, setFillToPrice] = useState(0);
   const [fillToSort, setFillToSort] = useState(0);
   const [fillToCategory, setFillToCategory] = useState(0);
   const [dataFill, setDataFill] = useState({
      toPrice: '',
      toSort: '',
      toCategory: '',
   });
   const [statusModal, setStatusModal] = useState(false)
   const [selectedProduct, setSelectedProduct] = useState(null);

   const [objects, setObjects] = useState([]);

   const handleChangePriceFill = (event) => {
      const value = event.target.value;
      setFillToPrice(value);
      setDataFill(prevState => ({
         ...prevState,
         toPrice: value,
      }));
   };
   const handleChangeSortFill = (event) => {
      const value = event.target.value;
      setFillToSort(value);
      setDataFill(prevState => ({
         ...prevState,
         toSort: value,
      }));
   };
   const handleChangeCategoryFill = (event) => {
      const value = event.target.value;
      setFillToCategory(value);
      setDataFill(prevState => ({
         ...prevState,
         toCategory: value,
      }));
   };
   const generateRandomObjects = (numObjects) => {
      const newObjects = [];
      for (let i = 0; i < numObjects; i++) {
         const newX = Math.random() * window.innerWidth;
         const newY = Math.random() * window.innerHeight;
         const newNumber = Math.floor(Math.random() * 100) + 1;
         const newTranslateZ = Math.random() * 1000 - 500;

         newObjects.push({
            id: i,
            position: { x: newX, y: newY },
            number: newNumber,
            translateZ: newTranslateZ,
         });
      }

      setObjects(newObjects);
   };

   // Fetch data for products and categories
   const { data: data1, error: error1, isValidating: isLoading1 } = useSWR(`http://127.0.0.1:8000/api/products?page=${currentPage}`, fetcher);
   const { data: data2, error: error2, isValidating: isLoading2 } = useSWR('http://127.0.0.1:8000/api/categories', fetcher);

   // Add products to state when data1 is available
   useEffect(() => {
      if (data1) {
         if (data1.data) {
            console.log("Products in data:", data1.data);
            setProducts((prevProducts) => [...prevProducts, ...data1.data]);
         } else {
            console.log("No products found in data");
         }
      }
   }, [data1, currentPage]);

   useEffect(() => {

      if (data2) {
         console.log("Categories in data:", data2);
         setCategories(data2);
      } else {
         console.log("No categories found in data");
      }

   }, [data2]);

   useEffect(() => {
      generateRandomObjects(30);
   }, []);
   // State for controlling the open/close state of the filter
   const [open, setOpen] = useState(false);

   // State for tracking hovered product
   const [hoveredProduct, setHoveredProduct] = useState(null);

   // Handle click event to open/close filter
   const handleClick = () => {
      setOpen(!open);
   };

   // Handle mouse enter event for products
   const handleMouseEnter = (index) => {
      setHoveredProduct(index);
   };

   // Handle mouse leave event for products
   const handleMouseLeave = () => {
      setHoveredProduct(null);
   };

   // Handle load more products
   const handleLoadMore = () => {
      setCurrentPage((prevPage) => prevPage + 1);
   };

   // Check if all products are loaded
   const isAllProductsLoaded = data1 && data1.to === data1.total;

   // Render loading state if necessary
   if (error1 || error2) {
      return <div>Error loading data</div>;
   }

   if (!data1 || !data2) {
      return loading();
   }

   if (isLoading1 && currentPage === 1) return loading()
   const handleSubmit = async (event) => {
      event.preventDefault();
      await postDataWithCsrf(dataFill);
   };


   const handleClickProduct = (product) => {
      setSelectedProduct(product);
      setStatusModal(true);
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
                     <div className={styles.containerbanner}>
                        <Row className={styles.rowbanner}>
                           <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                              transition={{ delay: .5 }}
                           >
                              {objects.map((object) => (
                                 <div className={styles.star} key={object.id} style={{ position: 'absolute', left: object.position.x, top: object.position.y, transform: `translate3d(0, 0, ${object.translateZ})` }}>
                                    <FontAwesomeIcon icon={faStar} />
                                 </div>
                              ))}
                           </motion.div>
                           <Col>
                              <motion.div
                                 initial={{ opacity: 0, x: 0 }}
                                 animate={{ opacity: 1, x: 100 }}
                                 exit={{ opacity: 0, x: 0 }}
                                 transition={{ delay: .5 }}
                              >
                                 <>
                                    <div className={styles.imgbanner}>

                                       <Image src='/images/products/bulle-und-pelle.jpg' alt="bulle-und-pelle" width={250} height={350} />
                                    </div>
                                 </>

                              </motion.div>
                           </Col>
                           <Col>
                              <motion.div
                                 initial={{ opacity: 0, scale: 2 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 exit={{ opacity: 0, scale: 1 }}
                                 transition={{ delay: 1 }}
                              >
                                 <>
                                    <div className={styles.infobanner}>
                                       <h1>Bulle und Pelle</h1>
                                       <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate</p>
                                       <Button variant="outline">Shop Now</Button>
                                    </div>
                                 </>
                              </motion.div>
                           </Col>

                        </Row>
                     </div>
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
                           <>
                              <Form>
                                 <Row className={styles.contentfill}>
                                    <Col md={3} sm={6} className={styles.fillitem}>
                                       <h4>Filter by price</h4>
                                       <Form.Group controlId="exampleForm.SelectCustom">
                                          {/* <Form.Label>Select Example</Form.Label> */}
                                          <Form.Select value={fillToPrice} onChange={handleChangePriceFill} >
                                             <option value="0" >Select one</option>
                                             <option value="1">50000 - 80000</option>
                                             <option value="2">80000 - 150000</option>
                                             <option value="3">150000 tro len</option>
                                          </Form.Select>
                                       </Form.Group>
                                    </Col>
                                    <Col md={3} sm={6} className={styles.fillitem}>
                                       <h4>Sort by</h4>
                                       <Form.Group controlId="exampleForm.SelectCustom">
                                          {/* <Form.Label>Select Example</Form.Label> */}
                                          <Form.Select value={fillToSort} onChange={handleChangeSortFill}>
                                             <option value="0">Default</option>
                                             <option value="1">Price: Low to High</option>
                                             <option value="2">Price: High to Low</option>
                                          </Form.Select>
                                       </Form.Group>
                                    </Col>
                                    <Col md={3} sm={6} className={styles.fillitem}>
                                       <h4>Filter by category</h4>

                                       <Form.Group controlId="exampleForm.SelectCustom">
                                          {/* <Form.Label>Select Example</Form.Label> */}
                                          <Form.Select value={fillToCategory} onChange={handleChangeCategoryFill}>
                                             <option value="0">Select one</option>
                                             {categories.map((category, index) => (
                                                <option key={category.id} value={category.id}>{category.category_name}</option>
                                             ))}
                                          </Form.Select>
                                       </Form.Group>
                                    </Col>
                                    <Col md={3} sm={6} className={styles.fillitem}>
                                       <Button onClick={handleSubmit} variant="outline" type="submit" >Search</Button>
                                    </Col>
                                 </Row>
                              </Form>
                           </>
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
                                                   <li onClick={() => handleClickProduct(product)} className={styles.iconactiontop}><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
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
                                    <p className={styles.pdprice}>{product.price} VND</p>
                                    <b><h4 className={styles.pdname}>{product.name}</h4></b>
                                    <p className={styles.pdauthor}><b>By</b> SAVANNA WALKER</p>
                                 </div>
                              </Col>
                           ))}
                           <div className={styles.pagination}>
                              {!isAllProductsLoaded && (
                                 <Button variant="outline" onClick={handleLoadMore} disabled={isLoading1}>
                                    Load More
                                 </Button>
                              )}
                           </div>
                        </Row>
                     </motion.div>


                     <ModalDetaill
                        statusModal={statusModal}
                        setStatusModal={setStatusModal}
                        selectedProduct={selectedProduct}
                     />

                  </Container>
               </div>
            </motion.div>
         </AnimatePresence>
      </>
   )
}

export default ShopBookPage