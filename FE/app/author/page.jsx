import style from "./author.module.css"
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const authorPage = () => {

   return (

      <div className={style.container}>
         <h1>Author</h1>
         <div className={style.indexing}>
            <Link href="/" > Home</Link> <FaAngleRight fontSize={10} /> Author
         </div>
         <div className={style.container1}>
            <div>
               <div className={style.content}>
               </div>
            </div>
            <div>
               <div className={style.content}>
               </div>
            </div>
            <div>
               <div className={style.content}>
               </div>
            </div>
            <div>
               <div className={style.content}>
               </div>
            </div>
            <div>
               <div className={style.content}>
               </div>
            </div>
            <div>
               <div className={style.content}>
               </div>
            </div>
         </div>
         <div>
            <div className={style.filter}>
               <select>
                  <option value="">Select an author</option>
                  <option value="1">Tố Hữu</option>
                  <option value="2">Gegor Canegi</option>
                  <option value="3">Ông Thọ</option>
                  <option value="4">Napoleon Hill</option>
               </select>
            </div>
         </div>
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
         <div className={style.cardAuthor}>
            <div className={style.card}>
               <div className={style.imgBox}>
                  <Image src="/book5.png" alt="book" width={220} height={300} />
               </div>
               <div className={style.contentBox}>
                  <h3>Đắc nhân tâm</h3>
                  <h2 className={style.price}>61.<small>98</small> €</h2>
                  <a href="#" className={style.buy}>Buy Now</a>
               </div>
            </div>
            <div className={style.card}>
               <div className={style.imgBox}>
                  <Image src="/book6.png" alt="book" width={220} height={300} />
               </div>
               <div className={style.contentBox}>
                  <h3>Đắc nhân tâm</h3>
                  <h2 className={style.price}>61.<small>98</small> €</h2>
                  <a href="#" className={style.buy}>Buy Now</a>
               </div>
            </div>
            <div className={style.card}>
               <div className={style.imgBox}>
                  <Image src="/book7.png" alt="book" width={220} height={300} />
               </div>
               <div className={style.contentBox}>
                  <h3>Đắc nhân tâm</h3>
                  <h2 className={style.price}>61.<small>98</small> €</h2>
                  <a href="#" className={style.buy}>Buy Now</a>
               </div>
            </div>
            <div className={style.card}>
               <div className={style.imgBox}>
                  <Image src="/book8.png" alt="book" width={220} height={300} />
               </div>
               <div className={style.contentBox}>
                  <h3>Đắc nhân tâm</h3>
                  <h2 className={style.price}>61.<small>98</small> €</h2>
                  <a href="#" className={style.buy}>Buy Now</a>
               </div>
            </div>
         </div>
         <div className={style.pagination}>
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
         </div>
      </div>



   );
};
export default authorPage
