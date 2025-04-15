"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

function SliderAnimation({ data, Images, value = false, department }) {
  const { locale, id } = useParams();

  const sliderRef = useRef(null);
  const [text, setText] = useState(null);
  const [index, setIndex] = useState(null);
  const t = useTranslations();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === text.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? text.images.length - 1 : prevIndex - 1
    );
  };

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      sliderRef.current.slickPrev();
    } else if (e.deltaY > 0) {
      sliderRef.current.slickNext();
    }
  };

  const handleText = (e, i) => {
    console.log(e);
    setText(e);
    setIndex(i);
    document.querySelector("nav").style.zIndex = "-1";
    document.querySelector(".whats").style.zIndex = "-1";
  };
  const handleCloseText = () => {
    setText(null);
    setIndex(null);
    document.querySelector("nav").style.zIndex = "10000000";
    document.querySelector(".whats").style.zIndex = "1000000";
  };

  //! in Iphone
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    let touchEndY = e.changedTouches[0].clientY;

    if (startY > touchEndY + 10) {
      // Swiping up
      sliderRef.current.slickNext();
    } else if (startY < touchEndY - 10) {
      // Swiping down
      sliderRef.current.slickPrev();
    }
  };

  console.log("Dataaaa", data);
  // console.log("Images", e.image);
  console.log("text", text);
  return (
    <div
      className="slider-container"
      // onTouchStart={handleTouchStart}
      // onTouchEnd={handleTouchMove}
      // onWheel={handleWheel}
    >
      {/* <Slider ref={sliderRef} {...settings}> */}
      {data?.length >= 1 &&
        data.map((e, i) => (
          <div key={i}>
            <div style={{ marginTop: "50px" }}>
              {Images && (
                <div
                  className="img"
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    alt="image"
                    src={e.image}
                    width={239}
                    height={230}
                    style={{ justifyContent: "center", borderRadius: "10px" }}
                  />
                </div>
              )}
              <div
                className="h2"
                style={{
                  textAlign: "center",
                  fontWeight: "800",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                {value === true
                  ? locale === "en"
                    ? e?.name_en
                    : e?.name_ar
                  : locale === "en"
                  ? e?.title_en
                  : e?.title_ar}{" "}
              </div>
              <p
                className="p"
                style={{ textAlign: "center", width: "80%", margin: "auto" }}
              >
                {" "}
                {locale === "en" ? e?.description_en : e?.description_ar}{" "}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                {department ? (
                  <div
                    className="_btn-icon"
                    style={{ cursor: "pointer", width: "auto" }}
                    onClick={(_) => handleText(e, i)}
                  >
                    {" "}
                    {t("btn")}{" "}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      {/* </Slider> */}
      {text && (
        <div className="popup-text" style={{ zIndex: "9999999999999" }}>
          <X className="close" onClick={handleCloseText} />
          <div className="box">
            {text.images < 0 ? (
              <div>
                <img src={item.image} alt="" />
              </div>
            ) : (
              <div className="sliderrr">
                <img
                  src={text.images[currentIndex].name}
                  alt={`Slide ${currentIndex + 1}`}
                />
                <button onClick={prevSlide} className="prevv">
                  &#10094; {/* Left arrow */}
                </button>
                <button onClick={nextSlide} className="nextt">
                  &#10095; {/* Right arrow */}
                </button>
              </div>
            )}
            <div className="h2">
              {" "}
              {value === true
                ? locale === "en"
                  ? text?.name_en
                  : text?.name_ar
                : locale === "en"
                ? text?.title_en
                : text?.title_ar}{" "}
            </div>
            <p className="p">
              {" "}
              {locale === "en"
                ? text?.description_en
                : text?.description_ar}{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SliderAnimation;
