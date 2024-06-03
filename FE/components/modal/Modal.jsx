import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from './modal.module.css'

function ModalDetail({ statusModal, setStatusModal, selectedProduct }) {
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);

    

    const handleImageClick = () => {
        setIsZoomed(!isZoomed);
    };
    const handleImageHover = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setZoomPosition({ x, y });
    };
    return (
        <>
            <Modal
                show={statusModal}
                onHide={() => setStatusModal(false)}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct && (
                        <div>
                            <Row>
                                <Col md={4} className={styles.col}>
                                    <div className={styles.modalimg} style={{ position: 'relative' }}>
                                        <div className={styles.img} style={{ position: 'relative' }}>
                                            <Image
                                                src={`/images/products/${selectedProduct.image}`}
                                                alt={selectedProduct.name}
                                                width={250}
                                                height={350}
                                                onMouseMove={handleImageHover}
                                                onClick={handleImageClick}
                                                style={{
                                                    position: 'absolute',
                                                    top: zoomPosition.y + '%',
                                                    left: zoomPosition.x + '%',
                                                    transformOrigin: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`,
                                                    transform: `scale(${isZoomed ? 2 : 1})`,
                                                    cursor: isZoomed ? 'zoom-out' : 'zoom-in'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <h3>{selectedProduct.name}</h3>
                                    <p>{selectedProduct.price}VND</p>
                                    <b>Publishing Year :</b>
                                    <p>{selectedProduct.publishing_year}</p>
                                    <b>Description :</b>
                                    <p>{selectedProduct.description}</p>
                                    
                                </Col>
                            </Row>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setStatusModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDetail;
