import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import glassesimoji from '../../img/glassesimoji.png'
import 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const clients = [
    {
        img: glassesimoji,
        review: '1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eveniet, vitae quod temporibus error accusamus nam nobis rerum, optio veniam voluptates officia dignissimos tenetur fuga delectus sequi omnis praesentium tempora?'
    }, {
        img: glassesimoji,
        review: '2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eveniet, vitae quod temporibus error accusamus nam nobis rerum, optio veniam voluptates officia dignissimos tenetur fuga delectus sequi omnis praesentium tempora?'
    }, {
        img: glassesimoji,
        review: '3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eveniet, vitae quod temporibus error accusamus nam nobis rerum, optio veniam voluptates officia dignissimos tenetur fuga delectus sequi omnis praesentium tempora?'
    }, {
        img: glassesimoji,
        review: '4Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eveniet, vitae quod temporibus error accusamus nam nobis rerum, optio veniam voluptates officia dignissimos tenetur fuga delectus sequi omnis praesentium tempora?'
    }, {
        img: glassesimoji,
        review: '5Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eveniet, vitae quod temporibus error accusamus nam nobis rerum, optio veniam voluptates officia dignissimos tenetur fuga delectus sequi omnis praesentium tempora?'
    }, {
        img: glassesimoji,
        review: '5Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eveniet, vitae quod temporibus error accusamus nam nobis rerum, optio veniam voluptates officia dignissimos tenetur fuga delectus sequi omnis praesentium tempora?'
    },
]

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="testimonials-heading">
                <span>Clients always get</span>
                <span>Exceptional</span>
                <span>From me...</span>
                <div className="blur testimonials-blur1"></div>
                <div className="blur testimonials-blur2"></div>
            </div>
            <Swiper className="testimonials-slider"
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, key) => (
                    <SwiperSlide className='testimonial' key={key}>
                        <div className="testimonial-wrapper">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Testimonials