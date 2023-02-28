import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Arts Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, perspiciatis adipisci totam eligendi officia cum explicabo deserunt",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100s of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, perspiciatis adipisci totam eligendi officia cum explicabo deserunt",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expect and Trained Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, perspiciatis adipisci totam eligendi officia cum explicabo deserunt",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      {/* HEADING */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            perspiciatis adipisci totam eligendi officia cum explicabo deserunt
            rerum alias. Delectus mollitia eum ratione labore soluta at quas
            pariatur amet dolorem?
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType, index: number) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div>
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                tenetur autem vero aperiam perspiciatis illum voluptate cumque
                tempora debitis quaerat, eligendi, qui excepturi. Modi,
                veritatis esse libero dolore nisi asperiores. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Distinctio, consequuntur
                nesciunt perferendis saepe itaque ipsa corporis, sed nobis
                consectetur excepturi quas dolorem suscipit nulla dolores!
                Obcaecati ratione perspiciatis corporis asperiores.
              </p>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                tenetur autem vero aperiam perspiciatis illum voluptate cumque
                tempora debitis quaerat, eligendi, qui excepturi. Modi,
                veritatis esse libero dolore nisi asperiores. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Distinctio, consequuntu
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
