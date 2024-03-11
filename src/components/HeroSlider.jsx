// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import Swiper core and required modules
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper/modules";
import { heroSliderImages } from "../../constants/index";

export default function HeroSlider() {
  return (
    <section className={"py-24"}>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
          Thumbs,
        ]}
        spaceBetween={20}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 1500,
        }}
        grabCursor={true}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {heroSliderImages.map((slide) => (
          <SwiperSlide key={slide.id} className={"w-full"}>
            <div className={"aspect-h-1 aspect-w-1 h-96"}>
              <img
                src={slide.image}
                alt={slide.altText}
                width={"1920"}
                height={"700"}
                loading={"eager"}
                className={"h-full w-full object-cover"}
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
