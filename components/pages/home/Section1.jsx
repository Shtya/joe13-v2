import Button from '@/components/atoms/Button'
import TextSlide from '@/helpers/TextSlide'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function Section1() {
	const t = useTranslations()
	
  return (
	<div className=" section bg-black   " > 
		<div className="container mx-auto center min-h-screen ">

			<div className=" flex items-center gap-[20px] ltr:flex-row-reverse " >
				<Image  data-aos="zoom-out"   className=" max-sm:w-[50px] max-sm:h-[50px] " src="/assets/imgs/arrow-right.png" alt="" width={100} height={100} />
				<Image  data-aos="zoom-in"   className="object-contain  max-sm:w-[150px] max-sm:h-[50px]  "  src="/assets/imgs/logo.png" alt="" width={300} height={100} />
				<Image  data-aos="zoom-out"   className=" max-sm:w-[50px] max-sm:h-[50px] " src="/assets/imgs/arrow-left.png" alt="" width={100} height={100} />
			</div>

			{/* <TextSlide text={"wlecome"} color={"text-white"}  /> */}
			<TextSlide text={t("section1")} cn={"text24 text-white text-center  "} />
			
			<div data-aos="zoom-in" > <Button href={"/contact-us"} cn="mt-[30px]" name={t("contact us")} /> </div>
		</div>
	</div>
  )
}
