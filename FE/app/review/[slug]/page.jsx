import { Container, Row, Col } from 'react-bootstrap';
import style from "./singlePost.module.css"
import Image from 'next/image';

const singlePost = () => {
    return (
    <div className={style.container}>
        <Container>
            <Row>
                <div className={style.author}>
                    <Image src="/images/authors/user.png" alt='author' width={30} height={30}></Image>
                    <span> by Kristian </span>
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
        <div className={style.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, deleniti est. Sit harum at dolor inventore nulla, iure aliquam repudiandae aperiam, consequuntur hic, doloremque error. Consequuntur, totam quas. Non, culpa.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis doloremque error, sint temporibus ratione deserunt pariatur! Est odio dolorum quos eligendi voluptate. Neque dolor ipsum odio obcaecati eaque maiores consequuntur!loreme
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid facilis quidem dolore veniam error consectetur officiis accusantium aliquam? Deserunt iusto suscipit accusantium voluptate sunt quis impedit labore perferendis iste quam.
        Incidunt voluptatem quis aperiam provident dolorum voluptate autem at ducimus nihil totam itaque optio quae porro, ratione perspiciatis assumenda! Libero dicta exercitationem mollitia laborum harum consequatur magnam culpa porro dolorum!
        Fugit natus temporibus repellat ratione dolorem? Ipsam asperiores libero odio autem rerum temporibus cum vero soluta odit. Sunt animi ipsa neque odit autem inventore, sequi doloribus similique repellat impedit voluptatum.
        Facilis dolor nulla temporibus alias eius laboriosam enim earum voluptatum recusandae ipsam, expedita magni pariatur hic, sapiente ab maxime consectetur! Odit blanditiis quidem at libero veritatis illo veniam eius unde?
        </div>
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