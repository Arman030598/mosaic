import {useState} from 'react'
import Fade from "react-reveal/Fade";
import 'material-icons/iconfont/material-icons.css';
import './OurWork.scss'
import './OurWork-media.scss'

export default () => {
    const [ourWorks] = useState([
        {
            id: 0,
            icon: 'emoji_objects',
            title: 'PERFECTLY DESIGN',
            desc: 'Even the all-powerful Pointing has no control' +
                ' about the blind texts it is an almost unorthographic',
        },
        {
            id: 1,
            icon: 'architecture',
            title: 'CAREFULLY PLANNED',
            desc: 'Even the all-powerful Pointing has no control' +
                ' about the blind texts it is an almost unorthographic',
        },
        {
            id: 2,
            icon: 'layers',
            title: 'SMARTLY EXECUTE',
            desc: 'Even the all-powerful Pointing has no control' +
                ' about the blind texts it is an almost unorthographic',
        }
    ])
    return (
        <section id={'our-work'}>
            <div className="container">
                <Fade bottom>
                    <div className="our-work">
                        <div className="top-ourwork">
                            <div className="title-ow">
                                <h1>Our Work Flow</h1>
                            </div>
                            <div className="owd">
                                <p>
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia, there
                                    live the blind texts. Separated they live in.
                                </p>
                            </div>
                        </div>
                        <div className="bottom-ourwork">
                            {ourWorks.map((e, i) => {
                                return (
                                    <div className="ourWorks">
                                        <div className="icon_arrow">
                                            <div className="icon">
                                                <span className="material-icons-outlined">{e.icon}</span>
                                            </div>
                                            <div className="arrow-ow">
                                                <span className="arrow-right"></span>
                                                <span className="material-icons-outlined">arrow_right</span>
                                            </div>
                                        </div>
                                        <h1>{e.title}</h1>
                                        <p>{e.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}