"use client"

import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import { use, useState } from "react";
const Links = () => {
    

    const links = [
        {
            title: "Home",
            path: "/",
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
       <div className={styles.container}>
             <div className={styles.links}>
            {links.map((link => (
                <NavLink item = {link} key={link.title}/>
            )))}{
                session ? (
                   <>
                     {isAdmin && <NavLink item={{title:"Admin",path:"/admin"}}/>}
                    <button className={styles.btnlogout}>Log Out</button>
                   </>
                ) : (
                    <NavLink item ={{title:"Login", path:"/login"}}/>

                )}


        </div>
        <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
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
