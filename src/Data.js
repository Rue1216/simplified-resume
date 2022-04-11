import { IoSchoolOutline, IoBrushOutline } from 'react-icons/io5'
import {RiCodeSSlashFill} from 'react-icons/ri'
import { MdOutlineDraw } from 'react-icons/md'
// images
import ping2Thumb from './components/images/pingping.png'
import sweetasteThumb from './components/images/sweetaste.png'
import deliciousssThumb from './components/images/deliciousss.png'
import pacmanThumb from './components/images/pacman.png'

export const Experience =[
    {
        id: 1,
        date: "2021/8 - present",
        iconSrc: <RiCodeSSlashFill/>,
        title: "自學前端",
        location: "線上課程/書籍/社群",
        description:
            "目前最喜歡的 stack 是 React + Tailwind CSS",
    },
    {
        id: 2,
        date: "2020/9 - 2021/6",
        iconSrc: <MdOutlineDraw/>,
        title: "設計長",
        location: "成大合唱團第 64 屆",
        description:
            "和團內成員討論活動的視覺元素，製作宣傳品",
    },
    {
        id: 3,
        date: "2019/9 - 2020/6",
        iconSrc: <IoBrushOutline/>,
        title: "美宣長",
        location: "航太系學會",
        description:
            "負責粉絲專頁的宣傳、設計活動主視覺",
    },
    {
        id: 4,
        date: "September 2018",
        iconSrc: <IoSchoolOutline/>,
        title: "大學入學",
        location: "NCKU, Tainan City, Taiwan.",
        description:
            "開始就讀航空太空工程學系",
    },
]



export const PetProjects =[
    {
        id: 1,
        name: "Deliciousss",
        imageSrc: deliciousssThumb,
        techs: "React.js, framer motion",
        github: "https://github.com/Rue1216/deliciousss-recipe",
        demo: "https://deliciousss-recipe.herokuapp.com/",
    },
    {
        id: 2,
        name: "Sweetaste*",
        imageSrc: sweetasteThumb,
        techs: "HTML, CSS, Bootstrap 5",
        github: "https://github.com/Rue1216/sweetaste--practice",
        demo: "https://rue1216.github.io/sweetaste--practice/",
    },
    {
        id: 3,
        name: "Ping-ping Fund-Raising",
        imageSrc: ping2Thumb,
        techs: "Bootstrap 5, JavaScript",
        github: "https://github.com/Rue1216/bs5-fund-raising-website-pingping",
        demo: "https://rue1216.github.io/bs5-fund-raising-website-pingping/",
    },
    {
        id: 4,
        name: "Pacman",
        imageSrc: pacmanThumb,
        techs: "Canvas, JavaScript",
        github: "https://github.com/Rue1216/pacman-demo",
        demo: "https://gleaming-duckanoo-4b1c37.netlify.app/",
    },
]