import React from 'react';
import Image from "next/image";
import Link from "next/link";
import style from "./home.module.css"
import { MdInfoOutline } from "react-icons/md";
import { FaShoppingCart, FaBolt, FaCheck, FaTimes } from "react-icons/fa";
import { FaBook } from 'react-icons/fa';
import {Container, Row, Col } from 'react-bootstrap';


const Home = () => {

  return (
    <div className={style.main}>
      <div className={style.slider}>
        <div className={style.slidetrack}>
          <div className={style.slide}>
            <Image src="/book1.png" alt="book" width={220} height={300} />
          </div>
          <div className={style.slide}>
            <Image src="/book2.png" alt="book" width={220} height={300} />
          </div>
          <div className={style.slide}>
            <Image src="/book3.png" alt="book" width={220} height={300} />
          </div>
          <div className={style.slide}>
            <Image src="/book4.png" alt="book" width={220} height={300} />
          </div>
          <div className={style.slide}>
            <Image src="/book5.png" alt="book" width={220} height={300} />
          </div>
          <div className={style.slide}>
            <Image src="/book6.png" alt="book" width={220} height={300} />
          </div>
          <div className={style.slide}>
            <Image src="/book7.png" alt="book" width={220} height={300} />
          </div>
          <div className={style.slide}>
            <Image src="/book8.png" alt="book" width={220} height={300} />
          </div>
          <div className={style.slide}>
            <Image src="/book9.png" alt="book" width={220} height={300} />
          </div>
          <div className={style.slide}>
            <Image src="/book10.png" alt="book" width={220} height={300} />
          </div>
          <div className={style.slide}>
            <Image src="/book11.png" alt="book" width={220} height={300} />
          </div>
          <div className={style.slide}>
            <Image src="/book12.png" alt="book" width={220} height={300} />
          </div>
        </div>
      </div>
      <hr />
      <h2>Super Sale <FaBolt color="yellow" style={{ fontSize: "1.5em" }} /></h2>
        <Row>
          <Col md={12} sm={12} className={style.navitem}>
            <div className={style.link}>
              <Link href="" > Xem tất cả</Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} className={style.navitem}>
            <div className={style.cardAuthor}>
              <div className={style.wrapper}>
                <div className={style.container}>
                  <div className={style.top}></div>
                  <div className={style.bottom}>
                    <div className={style.left}>
                      <div className={style.details}>
                        <h1>Book1</h1>
                        <p>£250</p>
                      </div>
                      <div className={style.buy}>
                        <FaShoppingCart className={style.icon} style={{ fontSize: "1.5em", marginTop: "50%" }} />
                      </div>
                    </div>
                    <div className={style.right}>
                      <div className={style.done}>
                        <FaCheck className={style.icon} />
                      </div>
                      <div className={style.details}>
                        <h1>Book</h1>
                        <p>Added to your cart</p>
                      </div>
                      <div className={style.remove}>
                        <FaTimes className={style.icon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.inside}>
                  <div className={style.icon}>
                    <i className={style.materialicons}>-47%</i>
                  </div>
                  <div className={style.contents}>
                    <table>
                      <tbody>
                        <tr>
                          <th>Width</th>
                          <th>Height</th>
                        </tr>
                        <tr>
                          <td>3000mm</td>
                          <td>4000mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className={style.wrapper}>
                <div className={style.container}>
                  <div className={style.top}></div>
                  <div className={style.bottom}>
                    <div className={style.left}>
                      <div className={style.details}>
                        <h1>Influen</h1>
                        <p>£250</p>
                      </div>
                      <div className={style.buy}>
                        <FaShoppingCart className={style.icon} style={{ fontSize: "1.5em", marginTop: "50%" }} />
                      </div>
                    </div>
                    <div className={style.right}>
                      <div className={style.done}>
                        <FaCheck className={style.icon} />
                      </div>
                      <div className={style.details}>
                        <h1>Chair</h1>
                        <p>Added to your cart</p>
                      </div>
                      <div className={style.remove}>
                        <FaTimes className={style.icon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.inside}>
                  <div className={style.icon}>
                    <i className={style.materialicons}>-47%</i>
                  </div>
                  <div className={style.contents}>
                    <table>
                      <tbody>
                        <tr>
                          <th>Width</th>
                          <th>Height</th>
                        </tr>
                        <tr>
                          <td>3000mm</td>
                          <td>4000mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className={style.wrapper}>
                <div className={style.container}>
                  <div className={style.top}></div>
                  <div className={style.bottom}>
                    <div className={style.left}>
                      <div className={style.details}>
                        <h1>Influen</h1>
                        <p>£250</p>
                      </div>
                      <div className={style.buy}>
                        <FaShoppingCart className={style.icon} style={{ fontSize: "1.5em", marginTop: "50%" }} />
                      </div>
                    </div>
                    <div className={style.right}>
                      <div className={style.done}>
                        <FaCheck className={style.icon} />
                      </div>
                      <div className={style.details}>
                        <h1>Chair</h1>
                        <p>Added to your cart</p>
                      </div>
                      <div className={style.remove}>
                        <FaTimes className={style.icon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.inside}>
                  <div className={style.icon}>
                    <i className={style.materialicons}>-47%</i>
                  </div>
                  <div className={style.contents}>
                    <table>
                      <tbody>
                        <tr>
                          <th>Width</th>
                          <th>Height</th>
                        </tr>
                        <tr>
                          <td>3000mm</td>
                          <td>4000mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className={style.wrapper}>
                <div className={style.container}>
                  <div className={style.top}></div>
                  <div className={style.bottom}>
                    <div className={style.left}>
                      <div className={style.details}>
                        <h1>Influen</h1>
                        <p>£250</p>
                      </div>
                      <div className={style.buy}>
                        <FaShoppingCart className={style.icon} style={{ fontSize: "1.5em", marginTop: "50%" }} />
                      </div>
                    </div>
                    <div className={style.right}>
                      <div className={style.done}>
                        <FaCheck className={style.icon} />
                      </div>
                      <div className={style.details}>
                        <h1>Chair</h1>
                        <p>Added to your cart</p>
                      </div>
                      <div className={style.remove}>
                        <FaTimes className={style.icon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.inside}>
                  <div className={style.icon}>
                    <i className={style.materialicons}>-47%</i>
                  </div>
                  <div className={style.contents}>
                    <table>
                      <tbody>
                        <tr>
                          <th>Width</th>
                          <th>Height</th>
                        </tr>
                        <tr>
                          <td>3000mm</td>
                          <td>4000mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </Col>

        </Row>
        <hr />
        <h2>Sách nên đọc <FaBook color="black" style={{ fontSize: "1 em" }} /></h2>
        <Row>
          <Col md={12} sm={12} className={style.navitem}>
            <div className={style.link}>
              <Link href="" > Xem tất cả</Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} className={style.navitem}>
            <div className={style.cardAuthor}>
              <div className={style.card}>
                <div className={style.imgBox}>
                  <Image src="/book1.png" alt="book" width={220} height={300} />
                </div>
                <div className={style.contentBox}>
                  <h3>Đắc nhân tâm</h3>
                  <h2 className={style.price}>61.<small>98</small> €</h2>
                  <a href="#" className={style.buy}>Buy Now</a>
                </div>
              </div>
              <div className={style.card}>
                <div className={style.imgBox}>
                  <Image src="/book2.png" alt="book" width={220} height={300} />
                </div>
                <div className={style.contentBox}>
                  <h3>Đắc nhân tâm</h3>
                  <h2 className={style.price}>61.<small>98</small> €</h2>
                  <a href="#" className={style.buy}>Buy Now</a>
                </div>
              </div>
              <div className={style.card}>
                <div className={style.imgBox}>
                  <Image src="/book3.png" alt="book" width={220} height={300} />
                </div>
                <div className={style.contentBox}>
                  <h3>Đắc nhân tâm</h3>
                  <h2 className={style.price}>61.<small>98</small> €</h2>
                  <a href="#" className={style.buy}>Buy Now</a>
                </div>
              </div>
              <div className={style.card}>
                <div className={style.imgBox}>
                  <Image src="/book4.png" alt="book" width={220} height={300} />
                </div>
                <div className={style.contentBox}>
                  <h3>Đắc nhân tâm</h3>
                  <h2 className={style.price}>61.<small>98</small> €</h2>
                  <a href="#" className={style.buy}>Buy Now</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <hr />
        <h2>Tuyển tập sách tháng 6 <FaBook color="black" style={{ fontSize: "1 em" }} /></h2>
        <div className={style.link}>
          <Link href="" > Xem tất cả</Link>
        </div>
        <Row>
          <Col md={6} sm={6} className={style.navitem}>
            <div className={style.image}><Image src="/banner1.jpg" alt="book" width={730} height={150} /> </div>
          </Col>
          <Col md={6} sm={6} className={style.navitem}>
            <div className={style.image}><Image src="/banner2.jpg" alt="book" width={730} height={150} /> </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6} className={style.navitem}>
            <div className={style.container2}>
              <div className={style.card2}>
                <div className={style.imgBx}>
                  <Image src="/book6.png" alt="book" width={220} height={300} />
                </div>
                <div className={style.contentBx}>
                  <h2>Nike Shoes</h2>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
            <div className={style.container2}>
              <div className={style.card2}>
                <div className={style.imgBx}>
                  <Image src="/book5.png" alt="book" width={220} height={300} />
                </div>
                <div className={style.contentBx}>
                  <h2>Nike Shoes</h2>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} sm={6} className={style.navitem}>
            <div className={style.container2}>
              <div className={style.card2}>
                <div className={style.imgBx}>
                  <Image src="/book7.png" alt="book" width={220} height={300} />
                </div>
                <div className={style.contentBx}>
                  <h2>Nike Shoes</h2>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
            <div className={style.container2}>
              <div className={style.card2}>
                <div className={style.imgBx}>
                  <Image src="/book8.png" alt="book" width={220} height={300} />
                </div>
                <div className={style.contentBx}>
                  <h2>Nike Shoes</h2>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
    </div>
  );
};

export default Home;