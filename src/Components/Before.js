import React from "react"
import { imgDir } from '../assets/imgDir';
import Carousel from "react-bootstrap/Carousel";

const Before = () => {
    const projectImgMapped = imgDir.assets.before.map((img, i) => {
        return(
            <Carousel.Item key={i}>
                <img className="w101" src={img} alt={`slide${i}`} />
            </Carousel.Item>
        );
    });
    return (
        <section id ="before" className="before-section">
            <Carousel className="before-carousel">{projectImgMapped}</Carousel>
        </section>

    );
};
export default Before;