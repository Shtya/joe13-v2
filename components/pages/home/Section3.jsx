'use client';

import Button from '@/components/atoms/Button';
import EffectFixed from '@/helpers/EffectFixed';
import TextAnimation from '@/helpers/TextAnimation';
import TextSlide from '@/helpers/TextSlide';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";



export const settings = {
	dots: false, // Hide dots
    infinite: true, // Enable infinite looping
    arrows: false, // Hide arrows
    speed: 3000, // Transition speed between slides (1 second)
    autoplaySpeed: 0, // No delay between slides
    slidesToShow: 2, // Default number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    pauseOnHover: false, // Don't pause on hover
    pauseOnFocus: false, // Don't pause on focus
    cssEase: 'linear', // Linear transition for smooth animation
    responsive: [
        {
            breakpoint: 1920, // Large desktop screens
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1300, // Medium desktop screens
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 830, // Tablets
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600, // Small tablets
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ],
};


export default function Section3() {
	const t = useTranslations()

    const data = [
        { name: 'Brand 1', value: '/assets/brands/1.png' },
        { name: 'Brand 2', value: '/assets/brands/2.png' },
        { name: 'Brand 3', value: '/assets/brands/3.png' },
        { name: 'Brand 4', value: '/assets/brands/4.png' },
        { name: 'Brand 5', value: '/assets/brands/5.png' },
        { name: 'Brand 6', value: '/assets/brands/6.png' },
        { name: 'Brand 7', value: '/assets/brands/7.png' },
        { name: 'Brand 8', value: '/assets/brands/8.png' },
        { name: 'Brand 9', value: '/assets/brands/9.png' },
        { name: 'Brand 10', value: '/assets/brands/10.png' },
        { name: 'Brand 11', value: '/assets/brands/11.png' },
        { name: 'Brand 12', value: '/assets/brands/12.png' },
        { name: 'Brand 13', value: '/assets/brands/13.png' },
        { name: 'Brand 14', value: '/assets/brands/14.png' },
        { name: 'Brand 15', value: '/assets/brands/15.png' },
        { name: 'Brand 16', value: '/assets/brands/16.png' },
    ];

    return (
        <EffectFixed id="ourPartners" image={'/assets/imgs/section3.jpeg'} z={'z-[-150]'}>
			<TextSlide  cn={"text40 font-[600] text-white text-center  "} text={t("Our Partners")} />

            {/* <div className=""> <TextAnimation text={} /> </div> */}
            <Slider {...settings} className='w-full bg-[#FFFFFF17] py-[5px]'>
                {data?.slice(0,8).map((e, i) => (
                    <div key={i} className="w-[100px] h-[80px]">
                        <Image src={e.value} alt={e.name} width={80} height={80} className="mx-auto h-full w-[80px] object-contain" />
                    </div>
                ))}
            </Slider>
            <Slider rtl={true} {...settings} className='w-full bg-[#FFFFFF17] py-[5px] mt-[30px]'>
                {data?.slice(8,16).map((e, i) => (
                    <div key={i} className="w-[100px] h-[80px]">
                        <Image src={e.value} alt={e.name} width={80} height={80} className="mx-auto h-full w-[80px] object-contain" />
                    </div>
                ))}
            </Slider>
        </EffectFixed>
    );
}

