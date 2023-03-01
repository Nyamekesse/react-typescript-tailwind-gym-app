import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vitae enim cumque eligendi dolor veniam eveniet quasi, minus in modi!",
    image: image1,
  },
  {
    name: "Yoga Classes",

    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vitae enim cumque eligendi dolor veniam eveniet quasi, minus in modi!",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vitae enim cumque eligendi dolor veniam eveniet quasi, minus in modi!",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vitae enim cumque eligendi dolor veniam eveniet quasi, minus in modi!",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vitae enim cumque eligendi dolor veniam eveniet quasi, minus in modi!",
    image: image6,
  },
];
const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className=" w-full bg-primary-100 py-40" id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              assumenda fugit facere architecto animi velit, ullam vel non optio
              dolorem molestias nemo aspernatur expedita, illo placeat quas
              repellendus, eligendi voluptate?
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index: number) => (
              <Class key={index} {...item} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
