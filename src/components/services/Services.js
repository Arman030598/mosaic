import {useState} from 'react'
import Fade from "react-reveal/Fade";
import 'material-icons/iconfont/material-icons.css';
import './Services.scss'
import './Services-media.scss'

export default ()=>{
    const [skils] = useState(['DESIGN','INDUSTRIAL DESIGN','ARCHITECTURE SUPPORT','RENOVATION'])

    return(
        <section id="services">
            <div className="container">
                <Fade bottom>
                    <div className="services">
                        <div className="serv-title">
                            <h1>Our Services</h1>
                            <p>
                                Even the all-powerful Pointing has no control about
                                the blind texts it is an almost unorthographic.
                            </p>
                        </div>
                        <div className="serv-main">
                            {skils.map((e,i)=>{
                                return(
                                    <div key={i} className="skils" style={i > 1 ?{marginTop:'50px'}:null}>
                                        <div className="icon-skils">
                                            <span className={'material-icons-outlined'}>layers</span>
                                        </div>
                                        <div className="skils-desc">
                                            <h2>{e}</h2>
                                            <p>
                                                Even the all-powerful Pointing has no control about
                                                the blind texts it is an almost unorthographic.
                                            </p>
                                        </div>
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