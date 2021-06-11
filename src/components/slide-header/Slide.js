import React from "react";
import Fade from "react-reveal/Fade";
import './Slide.scss'
import './slide-media.scss'

export default (props) => {
    return (
        <>
            <div className="container">
                <div className="header-slider">
                    <div
                        style={{backgroundImage:`url(${props.image.link})`}}
                        className="header-slide-image"
                    >
                        <div className="header-direction">
                            <Fade bottom>
                                <h1>
                                    <span>{props.image.titleOne}</span>
                                    <span>{props.image.titleTwo}</span>
                                    <span>{props.image.titleThree}</span>
                                </h1>
                                <p>{props.image.Htext}</p>
                                <button>View Our Works</button>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}