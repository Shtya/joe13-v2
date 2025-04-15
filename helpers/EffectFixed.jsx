'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function EffectFixed({cn , cnParent , id , overlay = true ,  image, children, z }) {
    const [isInView, setIsInView] = useState(false); // Initially, the section is not in view
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    setIsInView(entry.isIntersecting);
                });
            },
            { threshold: 0.2 }, // Trigger when 50% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Observe the section
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // Cleanup observer when the component unmounts
            }
        };
    }, []);

    return (
         <div id={id} ref={sectionRef} className=' py-[50px] section overflow-x-hidden  relative min-h-screen w-full flex flex-col gap-[30px] justify-center items-center'>
            <div className={`fixed w-full h-full top-0 left-0 ${z ? z : 'z-[-10]'} ${isInView ? 'opacity-100' : 'opacity-0 '} transition-opacity duration-300 ease-in-out`}>
                <Image className={`${!overlay && "!object-contain"} ${cn}  img-overlay`} src={image} alt='Background Image' layout='fill' objectFit='cover' />
                {overlay && <div className='bg-overlay'></div>}
            </div>
            <div className={`container  z-0 !py-[40px] max-sm:!px-[10px] !px-[20px] flex flex-col gap-[15px] justify-center items-center ${cnParent} `}> {children} </div>
        </div> 
    );
}


