import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { urlFor } from "../lib/sanity";
import Image from "next/image";

export default class DemoCarousel extends Component {
  render() {
    const { images } = this.props;
    const imageElement = images.slice(1).map((i) => (
      <div className="carousel-wrapper relative h-full" key={i.caption}>
        <Image
          className="carousel-image"
          layout="fill"
          objectfit="cover"
          objectPosition="center"
          src={urlFor(i.image).url()}
          alt={i.caption}
        />
      </div>
    ));

    return (
      <div>
        <Carousel
          interval={18000}
          transitionTime={1500}
          // autoPlay
          infiniteLoop
          stopOnHover
          useKeyboardArrows
          swipeable
          emulateTouch
          showArrows={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
        >
          {imageElement}
          <div className="carousel-wrapper relative h-full">
            <img
              className="carousel-image"
              src={urlFor(images[0].image).url()}
              alt={images[0].caption}
            />
          </div>
        </Carousel>
      </div>
    );
  }
}
