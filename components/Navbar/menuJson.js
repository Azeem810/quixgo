import { MdLocalShipping } from "react-icons/md";
import { AiFillRocket } from "react-icons/ai";
import {BsFillInfoCircleFill} from 'react-icons/bs'
import { FaBloggerB } from "react-icons/fa";
export const nav = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/track",
      label: "Track Order",
    },
    {
      label: "Features",
      submenu: [
        {
          path: "/service",
          label: "Services",
          icon: <MdLocalShipping />,
        },
        {
          path: "/integration",
          label: "API Integration",
          icon: <AiFillRocket />,
        },
        {
          path: "/about",
          label: "About Us",
          icon:<BsFillInfoCircleFill/>
        },
        {
          path: "/blogs",
          label: "Blogs",
          icon:<FaBloggerB/>
        },
      ],
    },
    
    
    {
      path: "/contact",
      label: "Contact",
    },
    
    {
      path: "/signup",
      label: "Sign Up",
    },

    {
      path: process.env.NEXT_PUBLIC_LOGIN_URL,
      label: "Sign In",
    },
    
  ];