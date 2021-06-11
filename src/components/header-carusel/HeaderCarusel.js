import React from 'react'
import bgImgOne from './image/BHAZhp.jpg'
import bgImgTwo from './image/bgTwo.jpg'
import Slide from "../slide-header/Slide";


export default (props) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slides = [
        {
            id: 1,
            titleOne: "We Love ",
            titleTwo:'Modern Design',
            link:'https://preview.colorlib.com/theme/mosaic/images/xbg_2.jpg.pagespeed.ic.ElhwUpVw9_.webp',
            Htext:'A small river named Duden flows' +
                ' by their place and supplies it with' +
                ' the necessary regelialia. It is a paradisematic' +
                ' country, in which roasted parts of sentences fly into your mouth.',
        },
        {
            id: 2,
            titleOne: "We Create Amazing  ",
            titleTwo:"Architecture",
            titleThree:"Designs",
            link: 'https://preview.colorlib.com/theme/mosaic/images/xbg_1.jpg.pagespeed.ic.C3X3R0qzjM.webp',
            Htext:'A small river named Duden flows' +
                ' by their place and supplies it with' +
                ' the necessary regelialia. It is a paradisematic' +
                ' country, in which roasted parts of sentences fly into your mouth.',
        }
    ];

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prev) => {
                return prev + 1 === slides.length ? 0 : prev + 1;
            });
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <React.Fragment>
            <Slide
                image={slides[currentSlide]}
            />
        </React.Fragment>
    );
}
