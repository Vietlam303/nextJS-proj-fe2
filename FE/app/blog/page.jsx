import React from 'react';
import Image from "next/image";
import Link from "next/link";
import style from "./about.module.css"
import { FaAngleRight } from "react-icons/fa6";


const BlogPage = () => {
   return (
      <div className={style.container}>
         <h1>BLOG</h1>
         <div className={style.indexing}>
            <Link href="/" > Home</Link> <FaAngleRight fontSize={10} /> Blog
         </div>
         <Image src="/banner3.jpg" alt="book" width={1740} height={650} />
         <h2>DANH SÁCH BÀI VIẾT</h2>
         <div className={style.wrapper}>
            <div className={style.card}>
               <div className={style.cardbanner}>
                  <Image src="/blog1.jpg" alt="book" width={440} height={250} />
               </div>
               <div className={style.cardbody}>
                  <p className={style.bloghashtag}>#Food #Pizza</p>
                  <h2 className={style.blogtitle}>What is the tastiest pizza in Pizza Hut?</h2>
                  <p className={style.blogdescription}>My thoughts on the future of front end web development</p>


                  <div className={style.cardprofileinfo}>
                     <p className={style.profilefollowers}>5.2k followers</p>
                  </div>
               </div>
            </div>
            <div className={style.card}>
               <div className={style.cardbanner}>
                  <Image src="/blog1.jpg" alt="book" width={440} height={250} />
               </div>
               <div className={style.cardbody}>
                  <p className={style.bloghashtag}>#Food #Pizza</p>
                  <h2 className={style.blogtitle}>What is the tastiest pizza in Pizza Hut?</h2>
                  <p className={style.blogdescription}>My thoughts on the future of front end web development</p>


                  <div className={style.cardprofileinfo}>
                     <p className={style.profilefollowers}>5.2k followers</p>
                  </div>
               </div>
            </div>
            <div className={style.card}>
               <div className={style.cardbanner}>
                  <Image src="/blog1.jpg" alt="book" width={440} height={250} />
               </div>
               <div className={style.cardbody}>
                  <p className={style.bloghashtag}>#Food #Pizza</p>
                  <h2 className={style.blogtitle}>What is the tastiest pizza in Pizza Hut?</h2>
                  <p className={style.blogdescription}>My thoughts on the future of front end web development</p>


                  <div className={style.cardprofileinfo}>
                     <p className={style.profilefollowers}>5.2k followers</p>
                  </div>
               </div>
            </div>
            <div className={style.card}>
               <div className={style.cardbanner}>
                  <Image src="/blog1.jpg" alt="book" width={440} height={250} />
               </div>
               <div className={style.cardbody}>
                  <p className={style.bloghashtag}>#Food #Pizza</p>
                  <h2 className={style.blogtitle}>What is the tastiest pizza in Pizza Hut?</h2>
                  <p className={style.blogdescription}>My thoughts on the future of front end web development</p>


                  <div className={style.cardprofileinfo}>
                     <p className={style.profilefollowers}>5.2k followers</p>
                  </div>
               </div>
            </div>
         </div>
         <div className={style.wrapper}>
            <div className={style.card}>
               <div className={style.cardbanner}>
                  <Image src="/blog1.jpg" alt="book" width={440} height={250} />
               </div>
               <div className={style.cardbody}>
                  <p className={style.bloghashtag}>#Food #Pizza</p>
                  <h2 className={style.blogtitle}>What is the tastiest pizza in Pizza Hut?</h2>
                  <p className={style.blogdescription}>My thoughts on the future of front end web development</p>


                  <div className={style.cardprofileinfo}>
                     <p className={style.profilefollowers}>5.2k followers</p>
                  </div>
               </div>
            </div>
            <div className={style.card}>
               <div className={style.cardbanner}>
                  <Image src="/blog1.jpg" alt="book" width={440} height={250} />
               </div>
               <div className={style.cardbody}>
                  <p className={style.bloghashtag}>#Food #Pizza</p>
                  <h2 className={style.blogtitle}>What is the tastiest pizza in Pizza Hut?</h2>
                  <p className={style.blogdescription}>My thoughts on the future of front end web development</p>


                  <div className={style.cardprofileinfo}>
                     <p className={style.profilefollowers}>5.2k followers</p>
                  </div>
               </div>
            </div>
            <div className={style.card}>
               <div className={style.cardbanner}>
                  <Image src="/blog1.jpg" alt="book" width={440} height={250} />
               </div>
               <div className={style.cardbody}>
                  <p className={style.bloghashtag}>#Food #Pizza</p>
                  <h2 className={style.blogtitle}>What is the tastiest pizza in Pizza Hut?</h2>
                  <p className={style.blogdescription}>My thoughts on the future of front end web development</p>


                  <div className={style.cardprofileinfo}>
                     <p className={style.profilefollowers}>5.2k followers</p>
                  </div>
               </div>
            </div>
            <div className={style.card}>
               <div className={style.cardbanner}>
                  <Image src="/blog1.jpg" alt="book" width={440} height={250} />
               </div>
               <div className={style.cardbody}>
                  <p className={style.bloghashtag}>#Food #Pizza</p>
                  <h2 className={style.blogtitle}>What is the tastiest pizza in Pizza Hut?</h2>
                  <p className={style.blogdescription}>My thoughts on the future of front end web development</p>


                  <div className={style.cardprofileinfo}>
                     <p className={style.profilefollowers}>5.2k followers</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogPage