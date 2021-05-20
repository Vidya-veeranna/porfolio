import React,{useState} from 'react'
import image from './image.JPG'
import { GiHamburgerMenu } from "react-icons/gi";
import {links} from './NavBar'

function Banner(){
    const [showLinks,setShowLinks] = useState(false);
    return (
       <div className="banner">
            <span className="hamburger" onClick={() => setShowLinks(!showLinks)}><GiHamburgerMenu /></span>
           <ul className="links-container">
                {showLinks && links.map((link) => {
                const {id,url,text} = link;
                return <li className="links" key={id}><a href={url}>{text}</a></li>
            })}
           </ul>
            <div>
                <div className="shadow"></div>
                <img src={image} alt="person" className="person-img"/>
            </div>
            <div className="content">
                <p>Hi,</p>
                <h1>I'am Vidya</h1>
                <p>CSE pre-final year student at MRIT</p>
            </div>
            <div className="effect-wrap">
                <div className="effect effect-1"></div>
                <div className="effect effect-2"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
                <div className="effect effect-3"></div>
                <div className="effect effect-4"></div>
                <div className="effect effect-5"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    );
}

export default Banner;