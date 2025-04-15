import Button from '@/components/atoms/Button';
import EffectFixed from '@/helpers/EffectFixed';
import TextSlide from '@/helpers/TextSlide';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl';

export default function BoardMembers({setshowall}) {
    const t = useTranslations('aboutUs');
    const tBtn = useTranslations('');

    const listRef = useRef(null); // Reference to the list
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMore = () => {
        if (!isExpanded) {
            // Animate the list to show
            gsap.to(listRef.current, {
                height: 'auto',
                duration: 0.5,
                opacity: 1,
                ease: 'power2.out',
            });
        } else {
            // Animate the list to hide
            gsap.to(listRef.current, {
                height: 0,
                duration: 0.5,
                opacity: 0,
                ease: 'power2.in',
            });
        }
        setIsExpanded(!isExpanded);
        setshowall(!isExpanded);
    };

    
    return (
        <EffectFixed cnParent={""} overlay={false} image={'/assets/aboutus/1.png'} z={'z-[-100]'}>
            {<TextSlide cnParent={`  ${isExpanded ? '  text-primary  ' : ''}  mb-[60px] max-md:mb-[30px]  `} cn={` ${!isExpanded ? '' : '!text-primary  '} w-full text40 text-white `} text={t('boardMembersTitle')} />}

            <div className=' founders w-full flex flex-col gap-[50px] justify-start items-start md:px-[20px] '>
                {t
                    .raw('boardMembers')
                    .slice(0, isExpanded ? 20 : 4)
                    .map((e, i) => (
                        <div key={i} className='flex max-md:flex-col items-center text-white gap-[40px] max-md:gap-[20px] '>
                            <div className='cover  w-full max-w-[150px] max-sm:w-[100px] max-sm:h-[100px] h-[150px] max-md:max-w-[150px] max-md:h-[150px] rounded-[50%] overflow-hidden ' style={{ boxShadow: '1px 8px 18px 0px #FFFFFF1A , 5px 32px 32px 0px #FFFFFF17 ,10px 71px 43px 0px #FFFFFF0D , 19px 127px 51px 0px #FFFFFF03' }}>
                                <Image className=' object-contain bg-white w-full h-full' src={`/assets/aboutus/person${i + 1}.png`} alt={e.name} width={200} height={200} />{' '}
                            </div>
                            <div className=' flex flex-col gap-[3px] items-start '>
                                <div className="flex max-sm:flex-col max-sm:gap-[0px] items-center gap-[10px]  max-md:mx-auto " >
                                    <TextSlide cnParent={'text20 text-center  '} text={e?.name} />
                                    <TextSlide cnParent={'text16 font-[400]  text-primary  '}  text={`( ${e?.position} )`} />
                                </div>
                                <TextSlide cnParent={'text14 max-md:text-center max-w-[700px] opacity-50  w-full  '} text={e?.description} />
                            </div>
                        </div>
                    ))}
            </div>
            
            {/* <div className='founders grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1  gap-[50px] justify-center px-[20px] '>
                {t
                    .raw('boardMembers')
                    .slice(0, 4)
                    .map((e, i) => (
                        <div key={i} className='flex flex-col items-center text-white gap-[10px] '>
                            <div className='cover  w-full max-w-[200px] h-[200px] max-lg:max-w-[200px] max-lg:h-[200px] max-md:max-w-[150px] max-md:h-[150px] rounded-[50%] overflow-hidden ' style={{ boxShadow: '1px 8px 18px 0px #FFFFFF1A , 5px 32px 32px 0px #FFFFFF17 ,10px 71px 43px 0px #FFFFFF0D , 19px 127px 51px 0px #FFFFFF03' }}>
                                <Image className=' object-contain bg-white w-full h-full' src={`/assets/aboutus/person${i + 1}.png`} alt={e.name} width={200} height={200} />{' '}
                            </div>
							<TextSlide cn={'text20 text-center '} text={e.name}   />
							<TextSlide cn={"text14 text-center  "} cnParent={"mt-[-10px] "}  text={e.position}   />
                        </div>
                    ))}
            </div> */}

            {/* <div ref={listRef} className=' mt-[100px] text-white overflow-hidden opacity-0' style={{ height: 0 }}>
                <div className='w-screen'>
                    <div className={`container mx-auto flex flex-col gap-[60px]  `}>
                        {t.raw('boardMembers').map((item, index) => (
                            <div key={index} className=' flex flex-col gap-[3px] items-center '>
                                <TextSlide cnParent={'text20 '} text={item?.name} />
                                <TextSlide cnParent={'text18 font-[400] opacity-70  '} text={item?.position} />
                                <TextSlide cnParent={'text14 max-w-[700px] w-full text-center '} text={item?.description} />
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            <Button onClick={handleReadMore} borderAll={true} cn='mt-[20px]' name={isExpanded ? tBtn("showLess") : tBtn("readMore")} />
        </EffectFixed>
    );
}
