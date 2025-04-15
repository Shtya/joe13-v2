import { activationAndEvent, erp, joe_mi, joe_x, manpowerAndHR, marketing, mosanadah, softwareAndAI, telecoms } from '@/helpers/constant';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';


const Footer = ({cn , id}) => {
    const t = useTranslations('Footer');
    const tNavbar = useTranslations('Navbar');
    const links = {
        facebook : "https://www.facebook.com/joe13ksa?mibextid=ZbWKwL",
        insta : "https://www.instagram.com/joe13ksa?igsh=NjV5Y254dWl6MGJy",
        tiktok : "https://www.tiktok.com/@joe13ksa?_t=8shIsnjbS6c&_r=1",
        linkedin : "https://www.linkedin.com/company/joe13ksa/",
        snap : "https://www.snapchat.com/add/joe13ksa?share_id=7tDt0EHfCLY&locale=en-GB",
        x : "https://x.com/joe13ksa?t=DhxUu2XNItuJNGBAAAnLEA&s=09",
    }

  
    const Footer = [
        {
            head : t("services"),
            links : [
                { link: '/services?n=' + manpowerAndHR, name: tNavbar('manpower') },
                { link: '/services?n=' + manpowerAndHR, name: tNavbar('hr-solutions') },
                { link: '/services?n=' + marketing, name: tNavbar('marketing') },
                { link: '/services?n=' + marketing, name: tNavbar('social-media') },
            ]
        },
        {
            head : t("business_units"),
            links : [
                { link: '/services?n=' + telecoms, name: tNavbar('telecom') },
                { link: '/services?n=' + manpowerAndHR, name: tNavbar('manpower-hr-solutions') },
                { link: '/services?n=' + softwareAndAI, name: tNavbar('software-and-ai') },
                { link: '/services?n=' + activationAndEvent, name: tNavbar('merchandising-activation-event-management') },
                { link: '/services?n=' + mosanadah, name: tNavbar('mosanadah') },
                { link: '/services?n=' + marketing, name: tNavbar('marketing') },]
        },

        {
            head : t("ourProduct"),
            links : [
                { link: '/services?n=' + erp   , name: tNavbar('erp') },
                { link: '/services?n=' + joe_mi, name: tNavbar('joe-mi') },
                { link: '/services?n=' + joe_x , name: tNavbar('joe-x') },
            ]
        },

    ]

    const style = {
        head : "text22  font-[600] mb-[10px] ",
        link : "text16 block font-[500] leading-[22px] cursor-pointer hover:text-primary duration-200 mb-[7px] "
    }
    
    return (
            <footer id={id} className={`  bg-white  z-[1000] text-black py-[50px] ${cn} `} >
                <div className=" lg:pr-[70px] px-[10px] max-w-[1500px] w-full mx-auto  grid grid-cols-6 gap-[40px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 ">


                    <div className="col">
                        <Image className="mt-[-15px] max-w-[200px] w-full " src="/assets/svg/logo.svg" alt="logo" width={200} height={50} />
                        <div className="flex items-center justify-between gap-[10px] max-w-[200px] w-full ">
                            <Link  href={links.facebook} > <Image className="w-full h-full hover:border-gray-400 p-[2px] border-transparent border-[1px] duration-300 "  src="/assets/social/facebook.png" alt="logo" width={20} height={20} /> </Link>
                            <Link  href={links.insta} >    <Image className="w-full h-full hover:border-gray-400 p-[2px] border-transparent border-[1px] duration-300 "   src="/assets/social/insta.png" alt="logo" width={20} height={20} /> </Link>
                            <Link  href={links.tiktok} >   <Image className="w-full h-full hover:border-gray-400 p-[2px] border-transparent border-[1px] duration-300 "   src="/assets/social/tiktok.png" alt="logo" width={20} height={20} /> </Link>
                            <Link  href={links.linkedin} > <Image className="w-full h-full hover:border-gray-400 p-[2px] border-transparent border-[1px] duration-300 "   src="/assets/social/linkedin.png" alt="logo" width={20} height={20} /> </Link>
                            <Link  href={links.snap} >     <Image className="w-full h-full hover:border-gray-400 p-[2px] border-transparent border-[1px] duration-300 "   src="/assets/social/snap.png" alt="logo" width={20} height={20} /> </Link>
                            <Link  href={links.x} >        <Image className="w-full h-full hover:border-gray-400 p-[2px] border-transparent border-[1px] duration-300 "   src="/assets/social/x.png" alt="logo" width={20} height={20} /> </Link>
                        </div>
                    </div>

                    {
                        Footer?.map((e,i)=> (
                            <div className="col" key={i} >
                                <div className={style.head}> {e.head} </div>
                                {
                                    e.links?.map((el,il)=> (
                                        <Link href={el.link} key={il} className={style.link}> {el.name} </Link>
                                    ))
                                }
                            </div>
                        ))
                    }


                    <div className="col">
                        <div className={style.head}> {t("contact_us")} </div>
                        <div className={`${style.link} hover:!text-black !cursor-context-menu `}> {t("head_office")} </div>
                        <div className={`${style.link} hover:!text-black !cursor-context-menu `}> {t("branch_office_riyadh0")} </div>
                        <hr className="my-[10px] " />
                        <div className={`${style.link} hover:!text-black !cursor-context-menu `}> {t("branch_office_jeddah")} </div>
                        <hr className="my-[10px] " />
                        <div style={{direction : "ltr"}} className={`${style.link} hover:!text-black !cursor-context-menu  rtl:text-right `}> {process.env.NEXT_PUBLIC_PHONE} </div>
                        <hr className="my-[10px] " />
                    </div>

                    <div className="col">
                        <div className={style.head}> {t("branch_office")} </div>
                        <div className={`${style.link} hover:!text-black !cursor-context-menu `}> {t("branch_office_jeddah")} </div>
                        <div className={`${style.link} hover:!text-black !cursor-context-menu `}> {t("branch_office_egypt")} </div>
                        <div className={`${style.link} hover:!text-black !cursor-context-menu `}> {t("branch_office_riyadh")} </div>
                        <div className={`${style.link} hover:!text-black !cursor-context-menu `}> {t("branch_office_makkah")} </div>
                        <div className={`${style.link} hover:!text-black !cursor-context-menu `}> {t("branch_office_dammam")} </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;
