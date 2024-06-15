"use client";

import LearnMoreComponent from "@/components/LearnMore";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  RoadmapItem,
  Roadmap,
  RoadmapItemProps,
} from "@/components/ui/roadmap";
import Image from "next/image";

import IconMap from "@/public/assets/icons/map.png";
import { Button } from "@/components/ui/button";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconCubeFill,
} from "@irsyadadl/paranoid";
import { motion } from "framer-motion";
import { anim_reveal_parent, anim_reveal_child } from "@/lib/anims";
import LanguageSwitch from "@/components/LanguageSwitch";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Index");
  const faqQuestions = [
    {
      value: "q1",
      trigger: t("faq.questions.q1.q"),
      content: t("faq.questions.q1.a"),
    },
    {
      value: "q2",
      trigger: t("faq.questions.q2.q"),
      content: t("faq.questions.q2.a"),
    },
    {
      value: "q3",
      trigger: t("faq.questions.q3.q"),
      content: t("faq.questions.q3.a"),
    },
    {
      value: "q4",
      trigger: t("faq.questions.q4.q"),
      content: t("faq.questions.q4.a"),
    },
  ];

  const roadmapItems: RoadmapItemProps[] = [
    { date: "01.06", title: t("roadmap.items.i1"), isCompleted: true },
    { date: "15.06", title: t("roadmap.items.i2") },
    { date: "21.06", title: t("roadmap.items.i3") },
    { date: "01.07", title: t("roadmap.items.i4") },
    { date: "15.07", title: t("roadmap.items.i5") },
    { date: "01.08", title: t("roadmap.items.i6") },
    { date: "???", title: t("roadmap.items.i7") },
    { date: "???", title: t("roadmap.items.i8"), isDashedBorderHidden: true },
  ];
  return (
    <main className="mx-auto mb-4 mt-16 flex w-full max-w-[543px] flex-col items-center gap-y-24 px-6 sm:mb-6 sm:mt-[120px] sm:px-0">
      <div className="relative flex flex-col items-center gap-y-12">
        <div className="absolute right-0">
          <LanguageSwitch />
        </div>
        <motion.section
          initial="hidden"
          animate="show"
          variants={anim_reveal_parent}
          className="flex w-full flex-col items-center gap-y-3"
        >
          <motion.div className="flex flex-col items-center gap-y-1.5 mix-blend-multiply">
            <motion.video
              variants={anim_reveal_child}
              src="./assets/videos/Main_2.mp4"
              className="size-20 mix-blend-multiply"
              autoPlay
              loop
              preload="auto"
              playsInline
            />
            <motion.h1
              variants={anim_reveal_child}
              className="text-heading-lg sm:text-heading-xl"
            >
              120 BLOCK
            </motion.h1>
          </motion.div>
          <motion.p
            variants={anim_reveal_child}
            className="whitespace-pre-wrap text-paragraph-md text-app-text sm:text-paragraph-lg"
          >
            {t("hero.i1")}
          </motion.p>
          <motion.p
            variants={anim_reveal_child}
            className="whitespace-pre-wrap text-paragraph-md text-app-text sm:text-paragraph-lg"
          >
            {t("hero.i2")}
          </motion.p>
        </motion.section>
        <LearnMoreComponent />
      </div>
      <motion.section
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        variants={anim_reveal_parent}
        className="flex w-full flex-col items-start gap-y-5"
      >
        <motion.h2
          variants={anim_reveal_child}
          className="text-paragraph-md text-app-text sm:text-paragraph-lg"
        >
          {t("faq.heading")}
        </motion.h2>
        <Accordion
          className="flex w-full flex-col gap-y-2.5"
          type="single"
          collapsible
        >
          {faqQuestions.map((i, index) => {
            return (
              <motion.div variants={anim_reveal_child} key={index}>
                <AccordionItem value={i.value}>
                  <AccordionTrigger className="text-start">
                    {i.trigger}
                  </AccordionTrigger>
                  <AccordionContent>{i.content}</AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </motion.section>
      <motion.section
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        variants={anim_reveal_parent}
        className="flex w-full flex-col items-start gap-y-5"
      >
        <motion.h2
          variants={anim_reveal_child}
          className="text-paragraph-md text-app-text sm:text-paragraph-lg"
        >
          {t("roadmap.heading")}
        </motion.h2>
        <Roadmap>
          {roadmapItems.map((i, index) => {
            return (
              <motion.div variants={anim_reveal_child} key={index}>
                <RoadmapItem
                  title={i.title}
                  date={i.date}
                  isCompleted={i.isCompleted}
                  isDashedBorderHidden={i.isDashedBorderHidden}
                  number={index + 1}
                  key={index}
                />
              </motion.div>
            );
          })}
        </Roadmap>
      </motion.section>
      <motion.section
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        variants={anim_reveal_parent}
        className="flex h-[70vh] flex-col items-center gap-y-1.5"
      >
        <motion.div variants={anim_reveal_child}>
          <Image
            src={IconMap}
            alt="Map Icon"
            placeholder="blur"
            quality={100}
            className="size-[52px] sm:size-[72px]"
          />
        </motion.div>
        <motion.div className="flex flex-col items-center gap-y-1">
          <motion.h2
            variants={anim_reveal_child}
            className="whitespace-pre-wrap text-center text-heading-md sm:text-heading-lg"
          >
            {t("calltoaction.heading")}
          </motion.h2>
          <motion.p
            variants={anim_reveal_child}
            className="whitespace-pre-wrap text-center text-paragraph-md text-app-text sm:max-w-[338px] sm:text-paragraph-lg"
          >
            {t("calltoaction.text")}
          </motion.p>
        </motion.div>
        <motion.div className="flex flex-col items-center gap-y-3 pt-3">
          <motion.div
            variants={anim_reveal_child}
            className="inline-flex items-center gap-x-1.5"
          >
            <Link href={"https://t.me/block_120"}>
              <Button className="rotate-[-4deg]" variant={"icon"} size={"icon"}>
                <IconBrandTelegram className="size-[18px] rotate-0 sm:size-5" />
              </Button>
            </Link>
            <Link href={"https://www.instagram.com/120.blockk?igsh=cWJydTBreG95YWcz&utm_source=qr"}>
              <Button className="rotate-[2deg]" variant={"icon"} size={"icon"}>
                <IconBrandInstagram className="size-[18px] rotate-0 sm:size-5" />
              </Button>
            </Link>
            <Link href={"https://t.me/block_120en"}>
              <Button className="rotate-[4deg]" variant={"icon"} size={"icon"}>
                <IconBrandTelegram className="size-[18px] rotate-0 sm:size-5" />
              </Button>
            </Link>
          </motion.div>
          <motion.p
            variants={anim_reveal_child}
            className="text-paragraph-md text-app-text sm:text-paragraph-lg"
          >
            {t("calltoaction.or")}
          </motion.p>
          <motion.div variants={anim_reveal_child}>
            <Button onClick={() => alert("The app is not finished!")}>
              <IconCubeFill className="size-[18px] sm:size-5" />{" "}
              {t("calltoaction.button")}
            </Button>
          </motion.div>
        </motion.div>
        <p className="pt-6 text-paragraph-sm text-black/20 sm:text-paragraph-md">
          © 120BLOCK 2024
        </p>
      </motion.section>
    </main>
  );
}

//TODO: better animation for learn more component, styles for english & russian telegram channels, alert for launch the application
