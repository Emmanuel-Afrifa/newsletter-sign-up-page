import React from "react";
import desktopImg from '../assets/images/illustration-sign-up-desktop.svg';
import mobileImg from '../assets/images/illustration-sign-up-mobile.svg';

const DisplayImages = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const resizeHandler = () => setWidth(window.innerWidth);
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    let desiredImage = width <= 600 ? mobileImg : desktopImg;

    return (
       <img src={desiredImage} alt="illustration-sign-up" className="illustration-image"/>
    )

}

export default DisplayImages;