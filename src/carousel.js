import React from 'react';

import Carousel from 'react-bootstrap/Carousel'

import GraphImg from './carousel-graph.png'
import LogsImg from './carousel-logs.png'
import YamlImg from './carousel-yaml.png'

function ImgCarousel() {
    return (
        <div id="carousel-box">
            <Carousel
                controls={false}
                interval={3000}
                indicators={false}
                width={800}
            >
                <Carousel.Item>
                    <img className="carousel-image" src={GraphImg} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-image" src={LogsImg} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-image" src={YamlImg} />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImgCarousel