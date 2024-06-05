'use client'
import style from "./review.module.css"
import useSWR from 'swr'
import Image from "next/image";
import Link from "next/link";
import { FcShare } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";


const reviewPage = () => {
 

    const [hovered, setHovered] = useState(false); // Sử dụng useState để theo dõi trạng thái hover
    return (
       
        <div className={style.container}>
        
            <h1>Books Review</h1>
            <div className={style.indexing}>
                <Link href="/" style={{ textDecoration: "none" }}> Home</Link> <FaAngleRight fontSize={10} /> Books Review
            </div>

            <div className={style.postReview}>

                <div className={style.viewPost}>
                    <div className={style.imgContainer}>

                        <Link href="review/singlePost-1"> <Image src="/book.jpg" alt="book" width={360} height={250} /> </Link>
                        <div className={style.share}>
                            <div className={style.shareIcon}>     <FcShare />

                                <div className={style.item}> <Link href="" style={{ textDecoration: "none" }}> <FaTwitter color="#55b4eb" /> </Link></div>
                                <div className={style.item}> <Link href="" style={{ textDecoration: "none" }}><FaFacebook color="blue" /> </Link></div>

                            </div>
                        </div>


                    </div>
                    <div className={style.textContainer}>

                        <Link className={style.type} href="#" style={{ color: "rgb(0, 225, 255)", textDecoration: "none" }}>funny</Link>


                        <div className={style.title} style={{ maxWidth: '400px', paddingBottom: "15px" }}>
                            <h3>   <Link href="review/singlePost-1" style={{ textDecoration: "none" }}>       Cupiditate repellendus perferendis hic, itaque quisquam in ipsa.</Link>
                            </h3>
                            <div className={style.readPostContain} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                {hovered ? (
                                    <div className={style.readPost}>
                                        {/* Nội dung sau khi hover */}
                                        <Link href="review/singlePost-1">
                                        Read now <FaArrowRight  fontSize={10} />
                                        </Link>
                                    </div>
                                ) : (
                                    <div className={style.readPost}>
                                        {/* Nội dung mặc định */}
                                        <Link href="review/singlePost-1">
                                            Read now <FaAngleRight fontSize={10} />
                                        </Link>

                                    </div>
                                )}
                            </div>

                        </div>
                        <div className={style.box}>
                            <p>27 AUGUST</p>

                            <p>3003 VIEWS</p>
                        </div>
                    </div>
                </div>
                <div className={style.viewPost}>
                    <div className={style.imgContainer}>

                        <Link href="review/singlePost-2" style={{ textDecoration: "none" }}> <Image src="/book.jpg" alt="book" width={360} height={250} /> </Link>
                        <div className={style.share}>
                            <div className={style.shareIcon}>     <FcShare />

                                <div className={style.item}> <Link href="" style={{ textDecoration: "none" }}> <FaTwitter color="#55b4eb" /> </Link></div>
                                <div className={style.item}> <Link href="" style={{ textDecoration: "none" }}><FaFacebook color="blue" /> </Link></div>

                            </div>
                        </div>


                    </div>
                    <div className={style.textContainer}>

                        <Link className={style.type} href="#" style={{ color: "rgb(0, 225, 255)", textDecoration: "none" }}>funny</Link>


                        <div className={style.title} style={{ maxWidth: '400px', paddingBottom: "15px" }}>
                            <h3>   <Link href="review/singlePost-2" style={{ textDecoration: "none" }}>       Cupiditate repellendus perferendis hic, itaque quisquam in ipsa.</Link>
                            </h3>
                            <div className={style.readPostContain} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                {hovered ? (
                                  <div className={style.readPost}>
                                  {/* Nội dung sau khi hover */}
                                  <Link href="review/singlePost-2">
                                  Read now <FaArrowRight  fontSize={10} />
                                  </Link>
                              </div>
                          ) : (
                              <div className={style.readPost}>
                                  {/* Nội dung mặc định */}
                                  <Link href="review/singlePost-2">
                                      Read now <FaAngleRight fontSize={10} />
                                  </Link>

                              </div>
                                )}
                            </div>

                        </div>
                        <div className={style.box}>
                            <p>27 AUGUST</p>

                            <p>3003 VIEWS</p>
                        </div>
                    </div>
                </div>
                <div className={style.viewPost}>
                    <div className={style.imgContainer}>

                        <Link href="review/singlePost-3"> <Image src="/book.jpg" alt="book" width={360} height={250} /> </Link>
                        <div className={style.share}>
                            <div className={style.shareIcon}>     <FcShare />

                                <div className={style.item}> <Link href="" style={{ textDecoration: "none" }}> <FaTwitter color="#55b4eb" /> </Link></div>
                                <div className={style.item}> <Link href="" style={{ textDecoration: "none" }}><FaFacebook color="blue" /> </Link></div>

                            </div>
                        </div>


                    </div>
                    <div className={style.textContainer}>

                        <Link className={style.type} href="#" style={{ color: "rgb(0, 225, 255)", textDecoration: "none" }}>funny</Link>


                        <div className={style.title} style={{ maxWidth: '400px', paddingBottom: "15px" }}>
                            <h3>   <Link href="review/singlePost-3" style={{ textDecoration: "none" }}>       Cupiditate repellendus perferendis hic, itaque quisquam in ipsa.</Link>
                            </h3>

                            <div className={style.readPostContain} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                {hovered ? (
                                    <div className={style.readPost}>
                                    {/* Nội dung sau khi hover */}
                                    <Link href="review/singlePost-3">
                                    Read now <FaArrowRight  fontSize={10} />
                                    </Link>
                                </div>
                            ) : (
                                <div className={style.readPost}>
                                    {/* Nội dung mặc định */}
                                    <Link href="review/singlePost-3">
                                        Read now <FaAngleRight fontSize={10} />
                                    </Link>

                                </div>
                                )}
                            </div>

                        </div>
                        <div className={style.box}>
                            <p>27 AUGUST</p>

                            <p>3003 VIEWS</p>
                        </div>

                    </div>
                </div>

            </div>
            {/* pagination */}
            <div className={style.pagination} style={{ textDecoration: "none" }}>
                <Link href="#" class="active">1 </Link>
                <Link href="#">2</Link>
                <Link href="#">3</Link>
                <Link href="#">4</Link>
                <Link href="#">5</Link>
                <Link href="#">Next</Link>
            </div>
        </div>

        //pa


    );
};
export default reviewPage
