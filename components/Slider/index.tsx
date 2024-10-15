import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide,  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import { UserCart } from './userCart';

const SliderUser = () => {
    return  <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
  >
    <SwiperSlide>
        <UserCart/>
    </SwiperSlide>
    <SwiperSlide>
        <UserCart/>
    </SwiperSlide>
    <SwiperSlide>
        <UserCart/>
    </SwiperSlide>
    <SwiperSlide>
        <UserCart/>
    </SwiperSlide>
    <SwiperSlide>
        <UserCart/>
    </SwiperSlide>
    <SwiperSlide>
        <UserCart/>
    </SwiperSlide>
    <SwiperSlide>
        <UserCart/>
    </SwiperSlide>
    <SwiperSlide>
        <UserCart/>
    </SwiperSlide>
  </Swiper>
}

export default SliderUser