
import EffectFixed from '@/helpers/EffectFixed';
import TextAnimation from '@/helpers/TextAnimation';
import TextSlide from '@/helpers/TextSlide';
import { useTranslations } from 'next-intl';

export default function Section4() {
    const t = useTranslations()

    return (
        <EffectFixed image={'/assets/imgs/tours.jpg'} >

            <TextSlide  cn={"text40 font-[600] text-white text-center"} text={t("section4")} />
           
        </EffectFixed>
    );
}

