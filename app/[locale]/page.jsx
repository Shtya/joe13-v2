'use client';
import { useState, useEffect, useRef } from 'react';
import Section1 from '@/components/pages/home/Section1';
import Section2 from '@/components/pages/home/Section2';
import Section3 from '@/components/pages/home/Section3';
import Section4 from '@/components/pages/home/Section4';
import TextCopy from '@/components/pages/home/TextCopy';
import PreLoading from '@/components/atoms/PreLoading';
// import { hookAnimation } from '@/hooks/hookAnimation';
import { useTranslations } from 'next-intl';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative, Autoplay, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import Footer from '@/components/molecules/Footer';
import { useSearchParams } from 'next/navigation';
import VerticalSlider from '@/helpers/VerticalSlider';

export default function Page() {
    const t = useTranslations();
    const data5 = t.raw('data5');
    const data6 = t.raw('data6');
    const data7 = t.raw('data7');
    const data8 = t.raw('data8');
    const data9 = t.raw('data9');
    const data10 = t.raw('data10');
    const data11 = t.raw('data11');

    const swiperRef = useRef(null);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [closeTab , setcloseTab] = useState(true);

    const {handleScrollInside} = VerticalSlider()
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;
            handleScrollInside(swiperInstance);
        }
    }, []);

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
        onSlideChange: (swiper) => {
            const isLast = swiper.activeIndex === swiper.slides.length - 1;
            setIsLastSlide(isLast);

            document.querySelector("nav").style.zIndex = "1000000"
            const ele = document.querySelector(".swiper-pagination")
            if(ele) ele.style.zIndex = "10"
            document.querySelector(".whatsapp").style.zIndex = "100000000"
            setcloseTab(true)
        },
        on: {
            init: (swiper) => {
                handleScrollInside(swiper);
            },
        },
    };

    const searchParams = useSearchParams();
    const name = searchParams.get('section');

    const goToSlide = index => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    useEffect(() => {
        if (name === 'partners') {
            goToSlide(2);
        }
        if (name === 'home') {
            goToSlide(0);
        }
    }, [name]);

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

    return (
        
            <div className="bg-black" >
            <Swiper {...config} ref={swiperRef} className='mySwiper h-screen'>
                <SwiperSlide> <Section1 /> </SwiperSlide>
                <SwiperSlide> <Section2 /> </SwiperSlide>
                <SwiperSlide> <Section3 /> </SwiperSlide>
                <SwiperSlide> <Section4 /> </SwiperSlide>
                <SwiperSlide> <TextCopy closeTab={closeTab} setcloseTab={setcloseTab} img={`/assets/imgs/section5.png`} title={t('Marketing')} description={t('section5')} list={data5} grid={2} /> </SwiperSlide>
                <SwiperSlide> <TextCopy closeTab={closeTab} setcloseTab={setcloseTab} img={`/assets/imgs/section6.png`} title={t('Software & AI')} description={t('section6')} list={data6} /> </SwiperSlide>
                <SwiperSlide> <TextCopy closeTab={closeTab} setcloseTab={setcloseTab} img={`/assets/imgs/mosandah.jpg`} title={t('Masanadah')} description={t('section7')} list={data7} icon={'/assets/imgs/logo2.png'} /> </SwiperSlide>
                <SwiperSlide> <TextCopy closeTab={closeTab} setcloseTab={setcloseTab} img={`/assets/imgs/section8.png`} title={t('Telecoms')} description={t('section8')} list={data8} /> </SwiperSlide>
                <SwiperSlide> <TextCopy closeTab={closeTab} setcloseTab={setcloseTab} img={`/assets/imgs/section9.png`} title={t('Manpower & HR Solutions')} description={t('section9')} data={data9} /> </SwiperSlide>
                <SwiperSlide> <TextCopy closeTab={closeTab} setcloseTab={setcloseTab} img={`/assets/imgs/section10.png`} title={t('Merchandising, Activation and Event Management')} description={t('section10')} data={data10} /> </SwiperSlide>
                <SwiperSlide> <TextCopy closeTab={closeTab} setcloseTab={setcloseTab} img={`/assets/imgs/section11.png`} title={t('Our Products')} description={t('section11')} list={data11} /> </SwiperSlide>
                <SwiperSlide className='footer-slide overflow-auto py-[100px] bg-white !flex flex-col justify-center items-center '> <Footer id={'footer2'} /> </SwiperSlide>
            </Swiper>
            <div className='swiper-pagination'></div>

            </div>

    );
}
