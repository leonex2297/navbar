import { MdDashboard } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
const SidebarData = [
  {
    id: 1,
    title: "Dashboard",
    url: "./",
    icon: <MdDashboard color="gray" />,
  },
  {
    id: 2,
    title: "Project Manager",
    url: "./",
    icon: <BsPeopleCircle color="gray" />,
  },
  {
    id: 3,
    title: "Course",
    url: "./",
    icon: <FaBook color="gray" />,
  },
  {
    id: 4,
    title: "Cantact",
    url: "./",
    icon: <AiFillContacts color="gray" />,
  },
];

export default SidebarData;
