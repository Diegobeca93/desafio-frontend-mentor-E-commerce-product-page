
import NextIcon from "../icons/NextIcon";
import PrevIcon from "../icons/PrevIcon";


import imgProductSmall1 from "../../assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "../../assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "../../assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "../../assets/images/image-product-4-thumbnail.jpg";

import imgProduct1 from "../../assets/images/image-product-1.jpg";
import imgProduct2 from "../../assets/images/Image-Product-2.jpg";
import imgProduct3 from "../../assets/images/Image-Product-3.jpg";
import imgProduct4 from "../../assets/images/Image-Product-4.jpg";
import { useState } from "react";

const ARRAY_Imgs = [ imgProduct1, imgProduct2, imgProduct3, imgProduct4];

export default () => {
  const [index, setIndex ]= useState(0)

  const HandleClickNext = () => {
    index === ARRAY_Imgs.length - 1 ? setIndex(0) : setIndex(index + 1);
  }
  const HandleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_Imgs.length - 1) : setIndex(index - 1);
  }

  return (
    <section className="grid md:grid-cols-4 md:gap-6">
      <div className=" col-span-4 mb-4 relative">
        <img className=" aspect-[16/12]" src={ARRAY_Imgs[index]} alt=''/>
        <div className=" absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
            <button className=" bg-white h-10 w-10 rounded-full flex justify-center items-center md:hidden"
            onClick={HandleClickPrev}
          >
            <NextIcon />
          </button>  
          <button className=" bg-white h-10 w-10 rounded-full flex justify-center items-center md:hidden"
            onClick={HandleClickNext}
          >
            <PrevIcon />
          </button>
        </div>
      </div>
      <img src={imgProductSmall2} alt='' className="hidden md:block" />
      <img src={imgProductSmall1} alt='' className="hidden md:block" />
      <img src={imgProductSmall3} alt='' className="hidden md:block" />
      <img src={imgProductSmall4} alt='' className="hidden md:block" />
    </section>
  );
};
