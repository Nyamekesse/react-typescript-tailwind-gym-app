import { SelectedPage } from "@/shared/types";
import React from "react";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext ">
                <img src={HomePageText} alt="home page text" />
              </div>
            </div>
          </motion.div>
          <p className="mt-8 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptatem beatae enim similique mollitia. Earum officiis quidem
            nesciunt qui ea! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Animi, suscipit?
          </p>
        </div>
        {/* ACTIONS */}
        <motion.div
          className="mt-8 flex items-center gap-8 "
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
          </ActionButton>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            <p>Learn more</p>
          </AnchorLink>
        </motion.div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home page graphic" />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8 ">
              <img src={SponsorRedBull} alt="red bull sponsor" />
              <img src={SponsorFortune} alt="fortune sponsor" />
              <img src={SponsorForbes} alt="forbes sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;