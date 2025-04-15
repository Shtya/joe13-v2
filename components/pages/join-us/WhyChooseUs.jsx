'use client';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/input/Input';
import UploadFile from '@/components/atoms/input/UploadFile';
import Select from '@/components/atoms/select/Select';
import { Cities } from '@/data/Data';
import TextSlide from '@/helpers/TextSlide';
import { hookJoinUs } from '@/hooks/hookJoinUs';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function WhyChooseUs() {
    const t = useTranslations('JoinUs');

    const data = [t('innovativeCulture'), t('careerGrowth'), t('collaborativeEnvironment'), t('workLifeBalance'), t('inclusiveWorkplace')];
	const { register, errors , trigger , clearErrors, setError, getValues, setValue, submit , watch, reset , loading } = hookJoinUs()
   
	
    return (
        <div className='w-screen'>
            <div className='container  md:!px-[40px] '>
                <TextSlide cnParent={`w-fit ltr:mr-auto rtl:ml-auto`} cn={` text-left w-full text40 text-primary font-[600] `} text={t('whyChooseTitle')} />

                <ul className={` mx-auto !px-[10px] md:!px-[40px] list-decimal flex flex-col gap-[10px] mt-[30px] `}>
                    {data.map((item, index) => (
                        <li key={index} className='text-white  text20 mb-[10px] font-[500] w-fit '>
                            {' '}
                            <TextSlide text={item} />{' '}
                        </li>
                    ))}
                </ul>

                <TextSlide cnParent={`mt-[60px] w-fit ltr:mr-auto rtl:ml-auto mb-[30px] `} cn={` text-left  text40 text-white font-[700] `} text={t('applyNow')} />

				<form className={`grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-[40px] gap-x-[60px]  `} >
					<Input register={register("name")}        error={errors?.name}        type={"text"}  KEY={"fullName"}        cnInput={""}  label={""} place={t("fullName")} />
					<Input register={register("phone")}           error={errors?.phone}           type={"email"} KEY={"phone"}           cnInput={""}  label={""} place={t("phoneNumber")} />
					<Input register={register("email")}           error={errors?.email}           type={"text"}  KEY={"email"}           cnInput={""}  label={""} place={t("email")} />
					{/* <Input register={register("city")}            error={errors?.city}            type={"text"}  KEY={"city"}            cnInput={""}  label={""} place={} /> */}
					
					<Select data={Cities} icon={true} place={t("city")} trigger={trigger} watch={watch} setValue={setValue} error={errors?.city} KEY={"city"}  />
					<Input register={register("major")}           error={errors?.major}           type={"text"}  KEY={"major"}           cnInput={""}  label={""} place={t("major")} />
					<Input register={register("currentJopTitle")} error={errors?.currentJopTitle} type={"text"}  KEY={"currentJopTitle"} cnInput={""}  label={""} place={t("currentJobTitle")} />
					<UploadFile setValue={setValue} watch={watch} trigger={trigger}  error={errors?.CV}   KEY={"CV"}              cnInput={""}  label={""} place={t("uploadCV")} />
				
				</form>
				<div className="flex items-center justify-center "> <Button disabled={loading} loading={loading} name={t("sendNow")} onClick={submit} borderAll={true}  cn={"mb-[150px] mt-[40px]   "} /> </div>
				
            </div>
        </div>
    );
}
