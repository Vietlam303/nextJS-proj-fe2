"use client"

import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import { use, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Links = () => {
    

    const links = [
        {
            title: "Home",
            path: "/",
        },
         {
            title: "Shop Book",
            path: "/shop",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        }
    ];
    const [open,setOpen] = useState(false)
    
    const session = true;
    const isAdmin = false;
    return (
       <div >
             <div className={styles.links}>
            {links.map((link => (
                <NavLink item = {link} key={link.title}/>
            )))}
            {/* {
                session ? (
                   <>
                     {isAdmin && <NavLink item={{title:"Admin",path:"/admin"}}/>}
                    <button className={styles.btnlogout}>Log Out</button>
                   </>
                ) : (
                    <NavLink item ={{title:"Login", path:"/login"}}/>

                )} */
                }


        </div>
            <div className={stylesdiv} onClick={() => setOpen((prev) => !prev)}><FontAwesomeIcon icon={faBars} /></div>
        {
            open && <div className={styles.mobileLinks}>
                 {links.map((link => (
                <NavLink item = {link} key={link.title}/>
                )))}
            </div>
        }
       </div>
    );
};

export default Links;
