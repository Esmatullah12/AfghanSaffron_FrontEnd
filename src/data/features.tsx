import { BiLeaf } from "react-icons/bi";
import { BsCupHot } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiMentalHealthLine } from "react-icons/ri";

const features = [
  {
    icon: <RiMentalHealthLine className="text-2xl text-primary" />,
    title: "Mood Support",
  },
  {
    icon: <FaRegCircleCheck className="text-2xl text-primary" />,
    title: "Premium Purity",
  },
  {
    icon: <BsCupHot className="text-2xl text-primary" />,
    title: "Premium Aroma",
  },
  {
    icon: <BiLeaf className="text-2xl text-primary" />,
    title: "Natural & Sustainable",
  },
];

export default features;