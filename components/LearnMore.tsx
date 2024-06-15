"use client";

import { IconCubeFill } from "@irsyadadl/paranoid";
import { Button } from "./ui/button";
import Image from "next/image";

import i1 from "@/public/assets/images/1.jpg";
import i2 from "@/public/assets/images/2.png";
import i3 from "@/public/assets/images/3.jpg";
import i4 from "@/public/assets/images/4.jpg";

import popupimg from "@/public/assets/images/popup.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { anim_reveal_child, anim_reveal_parent } from "@/lib/anims";
import { useTranslations } from "next-intl";

const LearnMoreComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const t = useTranslations("Index");

  return (
    <section>
      <motion.section
        initial="hidden"
        animate="show"
        variants={anim_reveal_parent}
        className="relative flex flex-col"
      >
        <div className="gradient-background absolute -bottom-6 z-[5] h-[110px] w-full sm:h-[170px]" />
        <motion.div
          variants={anim_reveal_child}
          className="inline-flex items-end -space-x-[55px] sm:-space-x-20"
        >
          <Image
            src={i1}
            alt="Image"
            placeholder="blur"
            quality={100}
            className="size-[120px] -rotate-[8.14deg] rounded-[10px] border-4 border-white drop-shadow-image sm:size-[180px] sm:rounded-[16px]"
          />
          <Image
            src={i2}
            alt="Image"
            placeholder="blur"
            quality={100}
            className="z-[2] h-[162px] w-[121px] -rotate-[3.26deg] rounded-[10px] border-4 border-white drop-shadow-image sm:h-[250px] sm:w-[187px] sm:rounded-[16px]"
          />
          <Image
            src={i3}
            alt="Image"
            placeholder="blur"
            quality={100}
            className="z-[1] h-[144px] w-[121px] rotate-[5.16deg] rounded-[10px] border-4 border-white drop-shadow-image sm:h-[222px] sm:w-[186px] sm:rounded-[16px]"
          />
          <Image
            src={i4}
            alt="Image"
            placeholder="blur"
            quality={100}
            className="h-[124px] w-[121px] rotate-[8.03deg] rounded-[10px] border-4 border-white drop-shadow-image sm:h-[200px] sm:w-[186px] sm:rounded-[16px]"
          />
        </motion.div>
        <motion.div
          variants={anim_reveal_child}
          className="absolute -bottom-4 z-[5] mx-auto flex w-full justify-center sm:bottom-2"
        >
          <Button onClick={openPopup}>
            <IconCubeFill className="size-[18px] sm:size-5" />{" "}
            {t("learn_more.button")}
          </Button>
        </motion.div>
      </motion.section>
      <AnimatePresence mode="wait">
        {isPopupOpen && (
          <motion.div className="fixed left-1/2 top-1/2 z-10 mx-auto flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)", y: 1000, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -0.87, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 1000 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="fixed z-10 flex w-full max-w-[350px] -rotate-[0.87deg] transform flex-col items-center justify-start rounded-[24px] border-[6px] border-white bg-app-background pt-6 sm:h-full sm:max-h-[865px] sm:max-w-[723px] sm:pt-[42px]"
            >
              <p className="z-[1] max-w-[300px] whitespace-pre-wrap pb-[180px] text-paragraph-sm text-app-text sm:max-w-[481px] sm:text-[17px] sm:text-paragraph-md sm:leading-[25px]">
                {t("learn_more.text")}
              </p>
              <Image
                src={popupimg}
                quality={100}
                alt="popup"
                placeholder="blur"
                className="absolute bottom-0 w-full rounded-[24px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={closePopup}
              className="z-5 fixed left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform cursor-pointer bg-black/[0.01] backdrop-blur-[2px] transition duration-300 ease-in-out"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LearnMoreComponent;
