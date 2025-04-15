'use client';

import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function Button({ cn, loading , disabled , name, onClick, borderAll, href, color }) {
    const router = useRouter();

    return (
        <button
		disabled={disabled}
            className={` 
				pointer-events-auto
			${loading ? "bg-white border-[1px]  border-primary " : ""}
			${cn}
			${color ? color : 'text-white border-white '}
			${borderAll ? 'border-[1px]' : 'border-l-[1px]  border-r-[1px]'}
			capitalize font-[500] text18 bg-primary text-nowrap
			relative max-w-[220px] w-full  h-[55px] max-sm:max-w-fit px-[40px] max-sm:h-[45px] rounded-[40px]  hover:border-[1px] hover:border-transparent  hover:shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 ease-in-out  `}
            onClick={() => onClick?.() || (href && router.push(href))}>
            {
						loading ? <Loading /> : name
			}
        </button>
    );
}

function Loading() {
	const t = useTranslations()
    return (
		<div  className="flex items-center justify-center gap-[10px]  ">
			<span className="text-primary text18 " > {t("loading")} </span>
			<div className="w-6 h-6 flex-none rounded-full animate-spin border-4 border-solid border-primary border-t-transparent shadow-md">   </div>
		</div>
    );
}
