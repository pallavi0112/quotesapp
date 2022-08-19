import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper'
import '../../../node_modules/swiper/swiper-bundle.css';
SwiperCore.use([Pagination]);
function Quotes() {
  return (
     <section>
        <div>
        <Swiper Pagination={true}>
            <SwiperSlide>
               <h1>Hello</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>Welcome</h1>
            </SwiperSlide>
            <SwiperSlide>
                 <h1>With</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>Love</h1>
            </SwiperSlide>
        </Swiper>
        </div>
     </section>
  )
}

export default Quotes