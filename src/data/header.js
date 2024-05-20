import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

import { PiBowlFoodFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";

import { GiPalmTree } from "react-icons/gi";

export const headerMenus = [
    {
        title: "맛집",
        icon: <PiBowlFoodFill />,
        src: "/Famousplace"
    }, {
        title: "서울",
        icon: <IoLocationSharp />,
        src: "/Seoul"
    }, {
        title: "경기도",
        icon: <IoLocationSharp />,
        src: "/Gyeonggi"
    }, {
        title: "대전",
        icon: <IoLocationSharp />,
        src: "/Daejeon"
    }, {
        title: "강원도",
        icon: <IoLocationSharp />,
        src: "/Gangwondo"
    }, {
        title: "제주",
        icon: <GiPalmTree />,
        src: "/jeju"
    }, {
        title: "다이어트 레시피",
        icon: <GiPalmTree />,
        src: "/Diet"
    }
]

export const searchKeyword = [
    {
        title: "다이어트",
        src: "/search/다이어트"
    }, {
        title: "현지인 맛집",
        src: "/search/현지인 맛집"
    }, {
        title: "한식",
        src: "/search/한식"
    }, {
        title: "일식",
        src: "/search/일식"
    }, {
        title: "중식",
        src: "/search/중식"
    }, {
        title: "양식",
        src: "/search/양식"
    }
]

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/hyeji1364",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "",
        icon: <AiFillYoutube />
    },
    {
        title: "instagram",
        url: "",
        icon: <AiFillInstagram />
    },
    {
        title: "gmail",
        url: "mailto: hyeji1364@gmail.com",
        icon: <AiFillMail />
    }
]