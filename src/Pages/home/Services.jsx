import React from "react";
import { motion } from "framer-motion";
import { FiTruck } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiExchangeDollarFill } from "react-icons/ri";

const serviceData = [
  {
    icon: <FiTruck />,
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#fdefe6",
  },
  {
    icon: <HiOutlineRefresh />,
    title: "Easy Returns",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#ceebe9",
  },
  {
    icon: <RiSecurePaymentLine />,
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#e2f2b2",
  },
  {
    icon: <RiExchangeDollarFill />,
    title: " Back Guarantee",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#d6e5fb",
  },
];

const Services = () => {
  return (
    <section className="flex flex-wrap py-5 lg:px-40 md:px-10 px-5 justify-center gap-4">
      {serviceData.map((v, key) => (
        <div key={key}>
          <motion.div
            whileHover={{ scale: 0.9 }}
            className="md:flex items-center px-7 py-4"
            style={{ background: `${v.bg}` }}
          >
            <span className="text-4xl mr-4">{v.icon}</span>
            <div>
              <h3>{v.title}</h3>
              <p>{v.subtitle}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Services;
