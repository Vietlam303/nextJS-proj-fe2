import { Container, Row, Col } from 'react-bootstrap';
import style from "./contact.module.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { FaEarthAsia } from "react-icons/fa6";

const ContactPage = () =>{
   return (
      <Container>
         <div className={style.contact}>
         <Row>
            <Col>
               <div className={style.form}>
                  <h4>Write us</h4>
                  <input type="text" name="name" placeholder="Name" />
                  <input type="email" name="email" id="" placeholder="Email" />
                  <input type="text" name="subject" id="" placeholder="Subject"/>
                  <textarea name="message" id="" cols={5} rows={3} placeholder="Message"></textarea>
                  <button type='submit' className={style.submit}>Submit</button>
               </div>
            </Col>
            
            <Col>
               <div className={style.infor}>
                  <h5>Contact information</h5>
                  <p>We're open for any suggestion or just to have a chat</p>
                  <p><FaLocationDot style={{paddingRight : '5px',fontSize: "17px" }}/>    123 Main Street
New York </p>
                  <p><FaPhone style={{paddingRight : '5px' ,fontSize: "17px"}} />1234567890</p>
                  <p><SiMinutemailer style={{paddingRight : '5px',fontSize: "17px"}}/>bookstoer.vn@gmail.com</p>
                  <p><FaEarthAsia style={{paddingRight : '5px',fontSize: "17px"}}/>www.bookstore.vn</p>
               </div>
            </Col>
         </Row>
         </div>
      </Container>
   )
}

export default ContactPage