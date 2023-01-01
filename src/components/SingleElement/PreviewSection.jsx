import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

export default function PreviewSection({ images }) {
  const swiperRef = useRef(null);
  const goLeft = () => swiperRef.current.swiper.slidePrev();
  const goRight = () => swiperRef.current.swiper.slideNext();
  const [currentImage, setCurrentImage] = useState(images ? images[0] : null);

  return (
    <div className="space-y-8">
      <div>
        <img
          src={currentImage}
          className="h-56 md:h-72 lg:h-80 xl:h-112 mx-auto w-full object-cover rounded-md"
          alt="current preview image"
        />
      </div>
      <div className="text-5xl text-blue gap-x-4 flex items-center">
        <button onClick={goLeft}>
          <AiFillLeftCircle className="hover:text-hover duration-300" />
        </button>
        <Swiper
          slidesPerView={4}
          ref={swiperRef}
          loop={true}
          breakpoints={{
            1: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide>
              <div
                key={index}
                className="mx-4 cursor-pointer"
                onClick={() => setCurrentImage(image)}
              >
                <img
                  className="h-20 md:h-20 xl:h-24 mx-auto object-cover w-full rounded-md"
                  src={image}
                  alt="house preview"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={goRight}>
          <AiFillRightCircle className="hover:text-hover duration-300" />
        </button>
      </div>
    </div>
  );
}
