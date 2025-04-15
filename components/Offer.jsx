import { useTranslations } from 'next-intl';
import React from 'react';
import Input_ from './Input_';

import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import Image from 'next/image';
import { X } from 'lucide-react';
import { addContactUsData } from '@/services/api/common/common';
import { useParams } from 'next/navigation';
import { Schema } from '@/validation/offer';
import toast from 'react-hot-toast';

const Offer = ({ e, setOffer }) => {
  const t = useTranslations("offer");
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(Schema),
  });
  const { locale } = useParams();
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("type", 3);
      formData.append("cont_key", e?.id);
     const res =  await addContactUsData(formData);
	 toast.success(res?.message)
     setOffer(null); 
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };
  return (
    <div className='offer'>
      <div className="overlay">
        <div className="box">
          <X className='X' onClick={() => setOffer(null)} />
          <div className="h1"> {t("h1")} </div>
          <div className="p">  {t("p")} </div>
          
          <div className="inner-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input_
                place={t.raw("inputs")[0].label}
                type="text"
                reg={register("name")}
                error={errors.name}
              />
              <Input_
                place={t.raw("inputs")[1].label}
                type="email"
                reg={register("email")}
                error={errors.email}
              />
              <Input_
                place={t.raw("inputs")[2].label}
                type="text"
                reg={register("phone")}
                error={errors.phone}
              />

              <button type="submit" className="_btn"> {t("btn")} </button>
            </form>

            <div className="details">
              <Image src={e?.image} width={400} height={300} alt='Image'/>
              <div className="h3">
                {locale === "en" ? e.name_en : e.name_ar}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
