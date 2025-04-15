import Filter from '@/components/pages/blogs/Filter';
import Text from '@/components/pages/home/Text';
import WhyChooseUs from '@/components/pages/join-us/WhyChooseUs';
import EffectFixed from '@/helpers/EffectFixed';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function page() {
    const t = useTranslations('JoinUs');
    
    return (
        <EffectFixed image={'/assets/imgs/joinus.png'}  >
            <Text hidden={true} img={'/assets/imgs/joinus.png'} more={t("viewMore")} less={t("viewLess")} overlay={true} title={t('joinUs')} description={t('aboutJoe13th')} component={<WhyChooseUs />} />
        </EffectFixed>
    );
}

