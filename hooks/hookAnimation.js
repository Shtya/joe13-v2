"use client"
import React, { useEffect, useState } from 'react';

const FullPage = () => {
    if (typeof window !== 'undefined') {
        const fullpage = require('fullpage.js');
        require('fullpage.js/dist/fullpage.css');
        return fullpage;
    }
    return null;
};


export function hookAnimation() {

	let fullpageInstance;
    useEffect(() => {
        const FullPageLib = FullPage();

        if (FullPageLib) {
            fullpageInstance = new FullPageLib('#fullpage', {
                licenseKey: '',
                navigation: true,
                navigationPosition: 'right',
                scrollingSpeed: 1000,
                autoScrolling: true,
                scrollBar: true,
                fitToSection: true,
                fitToSectionDelay: 200,

                responsiveWidth: 768,
                responsiveHeight: 600,
                scrollOverflow: false,
                css3: true,

                easing: 'easeInOutCubic',
                easingcss3: 'ease',
                cards: true,
                cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },
            });
        }

        return () => {
            if (fullpageInstance) {
                fullpageInstance.destroy('all');
            }
        };
    }, ['d']);
  
	
	return {fullpageInstance}
}
