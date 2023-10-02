import { useEffect, useRef } from "react";
import LiIcon from "./LiIcon";
import { motion } from "framer-motion";

const ExperienceDetail = ({ experience, key }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <div className="flex justify-between w-full">
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            {experience.position}&nbsp;
          </h3>
          <span className="font-bold text-lg text-dark/50">
            {experience.date}
          </span>
        </div>
        <span
          href={experience?.companyLink}
          target="_blank"
          className="capitalize font-xl font-bold text-dark/75 xs:text-sm"
        >
          {experience.company},{experience.location}
        </span>

        <ul className="w-full font-medium text-justify list-square ml-4 md:text-sm">
          {experience.work.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

export default ExperienceDetail;
