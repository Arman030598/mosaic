import {useState} from 'react'
import Fade from "react-reveal/Fade";
import 'material-icons/iconfont/material-icons.css';
import './OurTeam.scss'
import './OurTeam-media.scss'

export default ()=>{
    const [ourTeam] = useState([
        {
            id:0,
            img:'https://preview.colorlib.com/theme/mosaic/images/xteam-1.jpg.pagespeed.ic.e9rH06n9-0.webp',
            name:'John Wilson',
            profession:'Co-Founder / CEO',
            desc:'I am an ambitious workaholic, but apart from that, pretty simple person.',
        },
        {
            id:1,
            img:'https://preview.colorlib.com/theme/mosaic/images/xteam-2.jpg.pagespeed.ic.336NftRDi2.webp',
            name:'David Smith',
            profession:'Achitect',
            desc:'I am an ambitious workaholic, but apart from that, pretty simple person.',
        },
        {
            id:2,
            img:'https://preview.colorlib.com/theme/mosaic/images/xteam-3.jpg.pagespeed.ic.uXRWIVCMLJ.webp',
            name:'David Smith',
            profession:'Achitect',
            desc:'I am an ambitious workaholic, but apart from that, pretty simple person.',
        },
        {
            id:3,
            img:'https://preview.colorlib.com/theme/mosaic/images/xteam-4.jpg.pagespeed.ic.2_UfwsTLbL.webp',
            name:'David Smith',
            profession:'Achitect',
            desc:'I am an ambitious workaholic, but apart from that, pretty simple person.',
        },
    ])
    return(
        <section id="our-team">
            <div className="container">
                <div className="our-team">
                    <div className="title-out-team">
                        <div className="line-ot">
                            <h1>EXPERT TEAM</h1>
                            <span></span>
                        </div>
                        <div className="desc-our-team">
                            <h1>
                                Our Architect Team
                            </h1>
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in
                            </p>
                        </div>
                    </div>
                    <div className="main-our-team">
                        {ourTeam.map(e=>{
                            return(
                                <div className="members" key={e.id}>
                                    <div className="image-member">
                                        <img src={e.img} alt=""/>
                                    </div>
                                    <div className="about-his">
                                        <h1>{e.name}</h1>
                                        <h3>{e.profession}</h3>
                                        <p>{e.desc}</p>
                                        <div className="icons-social">
                                            <span className="iconify" data-icon="akar-icons:twitter-fill"  data-inline="false"></span>
                                            <span className="iconify" data-icon="brandico:facebook" data-inline="false"></span>
                                            <span className="iconify" data-icon="akar-icons:instagram-fill" data-inline="false"></span>
                                            <span className="iconify" data-icon="ant-design:google-plus-outlined" data-inline="false"></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}