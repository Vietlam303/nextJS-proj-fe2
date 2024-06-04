import { Container, Row, Col } from 'react-bootstrap';
import style from "./singlePost.module.css"
import Image from 'next/image';

const singlePost = () => {
    return (
    <div className={style.container}>
        <Container>
            <Row>
                <div className={style.author}>
                    <Image></Image>
                </div>
            </Row>
        <Row>
            {/*  */}
            <div className={style.title}>  Cupiditate repellendus perferendis hic, itaque quisquam in ipsa.</div>
    </Row>
    <Row>
        <Col>
        <div className={style.image}>
    <Image src="/book.jpg" alt="book" width={100} height={100} />
    </div>
        </Col>
        <Col style={{fontSize:'25px'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, deleniti est. Sit harum at dolor inventore nulla, iure aliquam repudiandae aperiam, consequuntur hic, doloremque error. Consequuntur, totam quas. Non, culpa.
        </Col>
    </Row>
    <Row>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptas aspernatur, nobis assumenda mollitia amet quidem itaque iste debitis ipsum ab voluptates architecto laborum fuga magni, minus sint ipsam nam?
        Hic maiores incidunt ipsa neque fugit iure maxime optio tempore impedit et non eius minima labore velit rem in, eaque nisi, architecto facere necessitatibus, dicta minus quia. Praesentium, similique placeat.
    </Row>
    </Container>
    </div>
    );
}
 
export default singlePost;