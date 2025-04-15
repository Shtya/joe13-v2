import { SchemaJoinUs } from '@/schema/JoinUsSchema';
import { api } from '@/helpers/axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useTranslations } from 'next-intl';


export const hookJoinUs = () => {
  const { register , trigger , handleSubmit,formState: { errors }, clearErrors, setError, getValues, setValue , watch, reset } = useForm({ resolver: yupResolver(SchemaJoinUs) });
  const [loading ,  setisloading] = useState(false)
  const t = useTranslations()


const submit = handleSubmit(async (data) => {
  setisloading(true)

  const handleData = {
    "file": data?.CV,
    "name": data?.name,
    "phone": data?.phone,
    "email": data?.email,
    "currentJopTitle": data?.currentJopTitle,
    "major": data?.major,
    "city": data?.city,
}

  const toastId = toast.loading(t("submitting"));
  try {
    api.post("contact/create", handleData);
    toast.success(t("contactSuccess"), { id: toastId });
    reset();
  } 
  catch (error) {
    toast.error(t("contactError")  , { id: toastId });
  }
  finally {
    setisloading(false)
  }
});

  return { loading , register, errors , trigger , clearErrors, setError, getValues, setValue, submit , watch, reset };
};

