import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";

function SliderTemplate({ items, renderItem, autoplayDelay = 3000, slidesPerViewConfig }) {
    if (!items || items.length === 0) {
        return <p className="text-stone-300">Brak elementów do wyświetlenia.</p>;
    }

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
            }}
            breakpoints={slidesPerViewConfig}
            className="w-full"
        >
            {items.map((item, index) => (
                <SwiperSlide key={index}>
                    {renderItem(item)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderTemplate;
