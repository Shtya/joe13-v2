'use client';

import Button from '@/components/atoms/Button';
import EffectFixed from '@/helpers/EffectFixed';
import TextAnimation from '@/helpers/TextAnimation';
import TextSlide from '@/helpers/TextSlide';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Section2() {
    const t = useTranslations();

    const data = [

        { name: t('cities'), value: 47},
        { name: t('Successful Projects'), value: 180 },
        { name: t('Clients'), value: 100 },
        { name: t('Team Members'), value: 70 },
        { name: t('Growth'), value: 31, unit: '%' },
    ];

    const locale = useLocale();

    const downloadPDF = () => {
        const pdfURL = `/joe-pdf-${locale}.pdf`;
        const link = document.createElement('a');
        link.href = pdfURL;
        link.download = 'JOE13 Profile'; // File name for the downloaded file
        link.click();
    };

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <EffectFixed image={'/assets/imgs/section2.jpeg'} z={'z-[-100]'}>
            <TextSlide cn={' text-[30px] max-xl:text24 text-white text-center  '} text={t('section2')} />

            <div ref={ref} className='grid grid-cols-5 max-lg:grid-cols-2 max-sm:grid-cols-1 items-start gap-[40px] justify-center mt-[30px]'>
                {data?.map((e, i) => (
                    <div key={i} className='max-w-full w-full h-full  relative p-[10px] flex flex-col justify-center items-center'>
                        <span className='absolute bg-gradient-to-b from-white to-transparent left-0 top-0 h-full w-[3px]' />
                        <span className='absolute bg-gradient-to-r from-white to-transparent left-0 top-0 w-full h-[2.5px]' />
                        <div className='text18 text-center text-white'>
                            <TextSlide cn={''} text={e.name} />
                        </div>
                        <div className='text-[40px] max-xl:text24 text-center text-primary font-[700]'>
                            {inView && (
                                <div className='flex gap-[2px] ' style={{ direction: 'ltr' }}>
                                    + <CountUp start={0} end={e.value} duration={5} useEasing={true} delay={0.1} />
                                    <span> {e?.unit} </span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <Button onClick={downloadPDF} borderAll={true} cn='mt-[30px]' name={t('Download PDF')} />
        </EffectFixed>
    );
}
