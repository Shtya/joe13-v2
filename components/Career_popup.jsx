import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Input_ from "./Input_";

import { Schema } from "@/validation/careers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { X } from "lucide-react";
import { addContactUsData } from "@/services/api/common/common";

const Career_popup = ({ setShow, career, lang, id }) => {
  const t = useTranslations("career");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(Schema) });
  const [filess, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  
  const onSubmit = handleSubmit(async (e) => {
    try {
      const formData = new FormData();
      formData.append("file", filess);
      formData.append("name", e.name);
      formData.append("phone", e.phone);
      formData.append("email", e.email);
      formData.append("type", 2);
      formData.append("cont_key", id);

      await addContactUsData(formData);
      document.querySelector(".success").classList.toggle("show");
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  });

  return (
    <div className="offer">
      <div className="overlay">
        <div className="box">
          <X className="X" onClick={(_) => setShow((prev) => (prev = null))} />
          <div className="h1"> {t.raw("popup.h1")} </div>
          <div className="p"> {t.raw("popup.p")} </div>

          <div className="inner-box">
            <form onSubmit={(e) => e.preventDefault()}>
              <Input_
                place={t.raw("popup.inputs")[0].label}
                type="text"
                reg={register("name")}
                error={errors.name}
              />
              <Input_
                place={t.raw("popup.inputs")[1].label}
                type="email"
                reg={register("email")}
                error={errors.email}
              />
              <Input_
                place={t.raw("popup.inputs")[2].label}
                type="text"
                reg={register("phone")}
                error={errors.phone}
              />
              <input
                place={t.raw("popup.inputs")[3].label}
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                // reg={register("file")}
                // error={errors.file}
                // accept="application/pdf"
              />

              <button onClick={(_) => onSubmit()} className="_btn">
                {t.raw("popup.btn")}
              </button>
            </form>

            <div className="details">
              <div className="h2">
                {lang === "en" ? career?.name_en : career?.name_ar}
              </div>
            </div>
          </div>

          <div className="success">
            <img src="/success.png" alt="" />
            <div className="h1"> {t("h1_success")} </div>
            <div className="p"> {t("p_success")} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career_popup;
