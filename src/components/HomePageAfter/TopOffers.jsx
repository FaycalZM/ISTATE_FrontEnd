import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HouseCard from "../shared/HouseCard";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

import "swiper/css";
import "swiper/css/free-mode";

export default function TopOffers() {
  const swiperRef = useRef(null);
  const goLeft = () => swiperRef.current.swiper.slidePrev();
  const goRight = () => swiperRef.current.swiper.slideNext();

  const houses = [
    {
      image:
        "https://myfancyhouse.com/wp-content/uploads/2015/03/Exquisite-Private-Home-In-Florida-By-Harwick-Homes-14.jpg",
      title: "Large 4-room apartment with a beautiful terrace",
      price: 320000,
      location: "Barcelona IX.",
    },
    {
      image:
        "https://myfancyhouse.com/wp-content/uploads/2015/03/Exquisite-Private-Home-In-Florida-By-Harwick-Homes-14.jpg",
      title: "Large 4-room apartment with a beautiful terrace",
      price: 320000,
      location: "Barcelona IX.",
    },
    {
      image:
        "https://myfancyhouse.com/wp-content/uploads/2015/03/Exquisite-Private-Home-In-Florida-By-Harwick-Homes-14.jpg",
      title: "Large 4-room apartment with a beautiful terrace",
      price: 320000,
      location: "Barcelona IX.",
    },
    {
      image:
        "https://myfancyhouse.com/wp-content/uploads/2015/03/Exquisite-Private-Home-In-Florida-By-Harwick-Homes-14.jpg",
      title: "Large 4-room apartment with a beautiful terrace",
      price: 320000,
      location: "Barcelona IX.",
    },
    {
      image:
        "https://myfancyhouse.com/wp-content/uploads/2015/03/Exquisite-Private-Home-In-Florida-By-Harwick-Homes-14.jpg",
      title: "Large 4-room apartment with a beautiful terrace",
      price: 320000,
      location: "Barcelona IX.",
    },
  ];

  return (
    <section className="section-layout bg-white-blue">
      <h2 className="title-lg">Top offers</h2>
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between my-4">
        <p className="text-dark-blue md:text-lg w-full md:w-1/2">
          Fullfil your career dreams, enjoy all the achievements of the city
          center and luxury housing the fullest.
        </p>
        <button className="secondary-btn-lg">Show all offers</button>
      </div>
      <div>
        <div className="text-5xl text-blue flex items-center gap-x-2 md:gap-x-4">
          <div className="w-full h-px bg-blue opacity-30" />
          <button onClick={goLeft}>
            <AiFillLeftCircle />
          </button>
          <button onClick={goRight}>
            <AiFillRightCircle />
          </button>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          className="mySwiper py-2"
          loop={true}
          breakpoints={{
            1: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          ref={swiperRef}
        >
          {houses &&
            houses.map((house) => (
              <SwiperSlide>
                <HouseCard house={house} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
