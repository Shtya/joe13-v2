'use client';
import Button from '@/components/atoms/Button';
import EffectFixed from '@/helpers/EffectFixed';
import TextSlide from '@/helpers/TextSlide';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl';
import Popup from '@/components/molecules/Popup';

export default function TextCopy({closeTab , setcloseTab,  more, btn = true, overlay = true, hidden, component, list, data, grid, img, icon, title, description }) {
    const t = useTranslations();
    const [isExpanded, setIsExpanded] = useState(false); // State to track if the list is expanded

    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
        setIsAnimating(true);
        setcloseTab?.(false)

        document.querySelector("nav").style.zIndex = "1"
        const ele = document.querySelector(".swiper-pagination")
        if(ele) ele.style.zIndex = "-1"
        document.querySelector(".whatsapp").style.zIndex = "-1"
        
        // document.querySelectorAll("body *").forEach(element => {
        //     element.style.zIndex = "-1";
        // });
        // document.body.classList.add('overflow-hidden'); 
    };

    return (
        <EffectFixed overlay={overlay} image={img}  >
            {icon && (
                <div className={`${isExpanded ? ' h-0 overflow-hidden ' : ''}  transition-all duration-300 `}>
                    <Image className=' object-contain ' src='/assets/imgs/logo2.png' alt='' width={200} height={80} />
                </div>
            )}

            {!icon && <TextSlide cnParent={` ${hidden && isExpanded && 'hidden'}   ${isExpanded ? 'w-full flex items-start justify-start text-primary  ' : ''}   `} cn={` ${!isExpanded ? 'text-center' : '!text-primary rtl:text-right ltr:text-left'} w-full text40 text-white `} text={title} />}
            {icon && <div className={`${isExpanded ? 'w-full flex items-start justify-start !text-primary rtl:text-right ltr:text-left' : 'hidden'} text-center duration-300 transition-all w-full text40 text-white `}> {title} </div>}
            <TextSlide cnParent={` !mt-[-5px] ${hidden && isExpanded && 'hidden'} ${isExpanded ? '  z-[1] w-full flex items-start justify-start ' : ''}`} cn={` ${!isExpanded ? 'text-center' : 'text18 rtl:text-right ltr:text-left'} w-full text22 text-white `} text={description} />

            <Popup closeTab={closeTab} isOpen={isOpen} setIsOpen={setIsOpen} isAnimating={isAnimating} setIsAnimating={setIsAnimating}>
                {list && (
                    <ul className={`md:container mx-auto list-disc grid ${grid ? 'grid-cols-2' : 'grid-cols-1'} max-md:grid-cols-1 gap-y-[10px] gap-x-[50px] `}>
                        {list.map((item, index) => (
                            <li key={index} className='!text-black  text18 mb-[5px] font-[500] w-fit '>
                                <TextSlide text={item} /> 
                            </li>
                        ))}
                    </ul>
                )}

                {data && (
                    <ul className={`md:container mx-auto grid grid-cols-${grid} max-md:grid-cols-1 gap-[20px] max-md:gap-[10px] `}>
                        {data.map((item, index) => (
                            <li key={index} className='md:mb-[10px]'>
                                <div className='mb-[10px] grid grid-cols-[150px,1fr] max-md:grid-cols-1 items-start md:gap-[5px] text-black  text22 font-[500] w-fit'>
                                    <TextSlide cnParent={'flex-none w-fit '} cn="text18" text={item?.title} />
                                    <TextSlide cnParent={'text16 font-[400] opacity-70  '} text={item?.desc} />
                                </div>
                                {item?.data?.map((item, index) => (
                                    <div key={index} className='text-black  text18 opacity-70 list-disc mx-[20px]  font-[500] w-fit '>
                                        <li> <TextSlide cn={"text14"} text={item} /> </li>
                                    </div>
                                ))}
                            </li>
                        ))}
                    </ul>
                )}

                {component && <div className=''>{component}</div>}
            </Popup>

            {btn && <Button onClick={openPopup} borderAll={true} cn=' z-[100] mt-[15px]' name={isExpanded ? t('showLess') : more || t('readMore')} />}
        </EffectFixed>
    );
}
