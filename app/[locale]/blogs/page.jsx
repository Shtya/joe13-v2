"use client"
import Blog from '@/components/pages/blogs/Blog';
import Text from '@/components/pages/home/Text';
import Filter from '@/components/pages/services/Filter';
import EffectFixed from '@/helpers/EffectFixed';
import { hookBlogs } from '@/hooks/hookBlogs';
import { useLocale, useTranslations } from 'next-intl';
import React , {useState} from 'react';

export default function page() {
    const t = useTranslations('Blogs');
    const [category, setcategory] = useState();
    const { blogs, loading } = hookBlogs();

    return (
        <EffectFixed image={'/assets/imgs/blogs.png'}>
            {
                category 
                ? null
                : <>
                    <div data-aos={category == null && "fade-down"} className={'w-fit mx-auto mb-[10px] text-center font-[700]  max-md:text24 text40 '} > {t("blogs")} </div>
                    <div data-aos={category == null && "fade-down"} className={` text-center  w-full text20 max-md:text16  text-balance`} > {t("blogsDescription")} </div>
                </>
            }
            {!category && <Filter skeltonCount={3}  services={blogs}  loading={loading}  setcategory={setcategory} />}

            {category && <Blog data={category} setcategory={setcategory} />}


            {/* <Text overlay={true} title={t('blogs')} description={t('blogsDescription')} component={<Filter />} /> */}
        </EffectFixed>
    );
}
