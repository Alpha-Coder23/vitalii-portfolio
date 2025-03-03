// import mernblog from "../assets/mern-blog.png";
import real_state from "../assets/real-state.png";
import gitagpt from "../assets/gitagpt.png";
import blog from "../assets/blog.png";
import aisum from "../assets/ai-sum.png";
import react_image from "../assets/re.svg";
import nodejs from "../assets/nodejs-icon.svg";
import picvista from "../assets/picvista.png";
// import express from "../assets/express-109.svg";
import tailwind from "../assets/tail.svg";
import mongo from "../assets/mongodb-icon-1.svg";
import mui from "../assets/material-ui-1.svg";
import flowbite from "../assets/flowbite-logo.png";
import rapidAPi from "../assets/rapid-api.png";
import pureCSS from "../assets/css-3.svg";
import mysql from "../assets/mysql-removebg-preview.png";
import javascript from "../assets/toolkit_images/logo-javascript.svg";
import reacttech from "../assets/toolkit_images/react-2.svg";
import nodejstech from "../assets/toolkit_images/nodejs-3.svg";
import postman from "../assets/toolkit_images/postman.svg";
import material_ui from "../assets/toolkit_images/material-ui-1.svg"
import tailwindtech from "../assets/toolkit_images/tailwindcss.svg"
import html from "../assets/toolkit_images/html-1.svg"
import mysqltech from "../assets/toolkit_images/mysql-logo.svg";
import csstech from "../assets/toolkit_images/css-3.svg";
import github from "../assets/github-icon-1.svg";
import python from "../assets/toolkit_images/python-5.svg"



export const projects = [
    {
        id : 1,
        title : "Full Stack Real State App",
        desc : "Developed a comprehensive real estate application designed to streamline property listings and enhance the user experience for both buyers and sellers",
        image : real_state,
        link : "https://real-estate-app-mpmk.onrender.com",
        iconsImage: [
            {
                id : 1,
                iconData : react_image
            },
            {
                id : 2,
                iconData : mui
            },
            {
                id : 3,
                iconData : nodejs
            },
            {
                id : 4,
                iconData : mongo
            },
            {
                id : 5,
                iconData : tailwind
            },
        ]  
    },
    {
        id : 2,
        title : "Full Stack cryptocurrency trading platform",
        desc : "3Commas is a cryptocurrency trading platform that provides automated trading bots, portfolio management, and risk management tools. It is designed for both beginner and experienced traders to optimize their trading strategies across multiple exchanges.",
        image : blog,
        link : "https://3commas.io",
        iconsImage: [
            {
                id : 1,
                iconData : react_image
            },
            {
                id : 2,
                iconData : mui
            },
            {
                id : 3,
                iconData: nodejs
            },
            {
                id : 4,
                iconData : mongo
            },
            {
                id : 5,
                iconData : tailwind
            },
            {
                id: 6, 
                iconData: flowbite
            }
        ]
    },
    {
        id : 3,
        title : "Blockchain Staking Platform",
        desc : "📚 Everstake is a blockchain staking platform that provides staking services for Proof-of-Stake (PoS) blockchains. It allows users to delegate their cryptocurrency holdings to validators and earn staking rewards while helping secure blockchain networks.🕉️",
        image : gitagpt,
        link : "https://everstake.one/",
        iconsImage:[
            {
                id:1,
                iconData : react_image
            },
            {
                id:2,
                iconData : rapidAPi
            },
            {
                id:3,
                iconData : nodejs
            },
            {
                id:4,
                iconData : mysql
            },
            {
                id:5,
                iconData : pureCSS
            }
        ]
    },
    {
        id :4,
        title : "PICVISTA",
        desc : "Introducing a dynamic platform where creativity meets technology, offering a vast array of images and videos for free!",
        image : picvista,
        link : "https://picvistaprajapati.netlify.app/",
        iconsImage:[
            {
                id:1,
                iconData : react_image
            },
            {
                id:2,
                iconData : rapidAPi
            },
            {
                id:3,
                iconData : nodejs
            },
            {
                id:4,
                iconData : mysql
            },
            {
                id:5,
                iconData : pureCSS
            }
        ]
    },
    {
        id :5,
        title : "AI Summarizer",
        desc : "🌟 Introducing our AI Summarizer! 🚀Have you ever felt overwhelmed by lengthy articles or webpages? Say goodbye to information overload with our cutting-edge AI Summarizer. 📰✨",
        image : aisum,
        link : "https://aisummarydev.netlify.app/",
        iconsImage:[
            {
                id:1,
                iconData : react_image
            },
            {
                id:2,
                iconData : rapidAPi
            },
            {
                id:3,
                iconData : tailwind
            }
        ]
    }
]

export const techImages = [
    {
        id:1,
        image : javascript,
        text:"Javascript"
    },
    {
        id:2,
        image : reacttech,
        text : "ReactJS"
    },
    {
        id:3,
        image : nodejstech,
        text : "NodeJS"
    },
    {
        id:4,
        image : html,
        text : "HTML5"
    },
    {
        id:5,
        image : csstech,
        text:"CSS3"
    },
    {
        id:6,
        image : tailwindtech,
        text: "Tailwind"
    },
    {
        id:7,
        image : mysqltech,
        text : "MySQL"
    },
    {
        id:8,
        image :mongo,
        text : "MongoDB"
    },
    {
        id:9,
        image :material_ui,
        text: "Material UI"
    },
    {
        id:10,
        image :postman,
        text : "postman"
    },
    {
        id:11,
        image :github,
        text: "github"
    },
    {
        id:12,
        image :python,
        text : "python"
    },
]