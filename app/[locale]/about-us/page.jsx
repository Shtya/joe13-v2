'use client';

import BoardMembers from '@/components/pages/aboutus/BoardMembers';
import Text from '@/components/pages/home/Text';
import { useLocale, useTranslations } from 'next-intl';
import React, { useRef , useState , useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative, Autoplay, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import Footer from '@/components/molecules/Footer';
import VerticalSlider from '@/helpers/VerticalSlider';
import { hookAboutus } from '@/hooks/hookAboutus';


export default function Page() {
    const swiperRef = useRef(null);
    const {handleScrollInside} = VerticalSlider()
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [showall , setshowall] = useState(false);

    const {data , loading} = hookAboutus()

    useEffect(() => {
        const ele = document.querySelectorAll(".swiper-pagination-bullet")
        if (isLastSlide) {
            if(ele)
                 ele.forEach(element => {
                    element.classList.add("black")
                    });
        }
        else if(ele) {
            ele.forEach(element => {
                element.classList?.remove("black")
                });
        }
    
    }, [isLastSlide ]);

    
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;
            handleScrollInside(swiperInstance);
        }
    }, [showall]);

    const config = {
        modules: [EffectCreative, Pagination, Navigation, Autoplay, Mousewheel],
        effect: 'creative',
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, '-100%', -100],
            },
            next: {
                translate: [0, '100%', 0],
            },
        },
        direction: 'vertical',
        speed: 1200,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        onSlideChange: swiper => {
            const isLast = swiper.activeIndex === swiper.slides.length - 1;
            setIsLastSlide(isLast);
        },
        on: {
            init: (swiper) => {
                handleScrollInside(swiper);
            },
        },
    };

    const t = useTranslations('aboutUs');
    const locale = useLocale()

    return (
        <div>
            <Swiper {...config} ref={swiperRef} className='mySwiper h-screen'>
                <SwiperSlide> <Text useLoading={true} loading={loading} btn={false} overlay={false} img={`/assets/aboutus/1.png`} title={ data[2]?.[`name_${locale}`]} description={data[2]?.[`description_${locale}`]} /> </SwiperSlide>
                <SwiperSlide className='overflow-auto py-[100px] '> <BoardMembers setshowall={setshowall} /> </SwiperSlide>
                <SwiperSlide> <Text useLoading={true} loading={loading} btn={false} img={`/assets/aboutus/2.png`} title={data[0]?.[`name_${locale}`]} description={data[0]?.[`description_${locale}`]} /> </SwiperSlide>
                <SwiperSlide> <Text useLoading={true} loading={loading} btn={false} img={`/assets/aboutus/3.png`} title={data[1]?.[`name_${locale}`]} description={data[1]?.[`description_${locale}`]} /> </SwiperSlide>
                <SwiperSlide className='footer-slide bg-white overflow-auto px-[50px] py-[100px] !flex flex-col md:justify-center max-md:pt-[50px] items-center'> <Footer id={'footer2'} /> </SwiperSlide>
            </Swiper>

            <div className='swiper-pagination'></div>
        </div>
    );
}