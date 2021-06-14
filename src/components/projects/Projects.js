import {useState} from 'react'
import Fade from "react-reveal/Fade";
import 'material-icons/iconfont/material-icons.css';
import './Projects.scss'
import './Projects-media.scss'

export default ()=>{
    const [imgProjects] = useState([
        'https://preview.colorlib.com/theme/mosaic/images/work-1.jpg.webp',
        'https://preview.colorlib.com/theme/mosaic/images/work-2.jpg.webp',
        'https://preview.colorlib.com/theme/mosaic/images/work-3.jpg.webp',
        'https://preview.colorlib.com/theme/mosaic/images/work-4.jpg.webp',
        'https://preview.colorlib.com/theme/mosaic/images/work-5.jpg.webp',
        'https://preview.colorlib.com/theme/mosaic/images/work-6.jpg.webp',
        'https://preview.colorlib.com/theme/mosaic/images/work-7.jpg.webp',
        'https://preview.colorlib.com/theme/mosaic/images/work-8.jpg.webp'
    ])
    return(
        <section id="projects">
                <div className="project">
                    <div className="container">
                        <Fade bottom>
                            <div className="projects-title">
                                <div className="pro-title">
                                    <div className="line-project">
                                        <h1>PROJECTS</h1>
                                        <span className={'line-title'}></span>
                                    </div>
                                    <h2>Featured Projects</h2>
                                </div>
                                <div className="pro-desc">
                                    <p>
                                        Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts. Separated they live
                                        in. A small river named Duden flows by their place and supplies it with
                                        the necessary regelialia. It is a paradisematic country, in which roasted
                                        parts of sentences fly into your mouth.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </div>


                    <div className="projects-bottom">
                        <Fade bottom>
                            <div className="list-skils">
                                <ul>
                                    <li><a className={'active'} href="">All Work</a></li>
                                    <li><a href="">Interior</a></li>
                                    <li><a href="">Exterior</a></li>
                                    <li><a href="">Landscape</a></li>
                                </ul>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="same-projects">
                                {imgProjects.map((e,i)=>{
                                    return(
                                        <div key={i} className="card-project">
                                            <img src={e} alt=""/>
                                            <div className="opasity-card">
                                                <div className="top-opcard">
                                                    <h3>INTERIOR DESIGN</h3>
                                                    <h1>Office Interior Design</h1>
                                                </div>
                                                <div className="bottom-opcard">
                                                    <span className="material-icons-outlined">open_in_full</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Fade>
                    </div>
                </div>
        </section>
    )
}