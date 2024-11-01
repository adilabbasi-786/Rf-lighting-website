// Hero.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero section light-background ">
        <Swiper
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          className="mySwiper"
          style={{ height: "inherit" }}
        >
          <SwiperSlide>
            <img
              src={`${window.location.protocol}//${window.location.host}/banner1.png`}
              alt="Banner 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${window.location.protocol}//${window.location.host}/banner2.png`}
              alt="Banner 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${window.location.protocol}//${window.location.host}/banner1.png`}
              alt="Banner 3"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <div style={{ margin: "2%" }}></div>
      <section
        id="hero-second"
        className="hero-second section light-background"
        style={{ marginLeft: "2rem", marginRight: "2rem", height: "auto" }}
      >
        <Swiper
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          slidesPerView={window.innerWidth < 700 ? 3 : 8}
          spaceBetween={20}
          className="mySwiper"
          style={{ height: "100px" }}
        >
          {[
            { productId: "1", image: "5w COB.jpg" },
            { productId: "2", image: "7w deluxe.jpg" },
            { productId: "4", image: "12w bubble.jpg" },
            { productId: "5", image: "12w moon Adjustable.jpg" },
            { productId: "3", image: "7w Supreme.jpg" },
            { productId: "1", image: "5w COB.jpg" },
            { productId: "2", image: "7w deluxe.jpg" },
            { productId: "6", image: "12w royal moon.jpg" },
          ].map((each) => (
            <SwiperSlide key={each.productId}>
              <Link href={`/product/${each.productId}`}>
                <img src={`/${each.image}`} alt={`Product ${each.productId}`} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}