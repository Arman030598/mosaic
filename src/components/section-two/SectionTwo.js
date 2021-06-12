import {useState,useEffect} from 'react'
import './SectionTwo.scss'
import './SectionTwo-media.scss'
import ImgSec from '../../sections/image/xbg_3.jpg.pagespeed.ic.82DGT9-Qlm.webp'
import Fade from "react-reveal/Fade";

export default ()=>{
    const [viewers,setViewers]=useState([
        {
            id:0,
            title:'Years of Experienced',
            count:18,
            x:0,
        },
        {
            id:1,
            title:'Happy Clients',
            count:351,
            x:0,
        },
        {
            id:2,
            title:'Finished Projects',
            count:564,
            x:0,
        },
        {
            id:3,
            title:'Working Days',
            count:300,
            x:0,
        },
    ])
    useEffect(()=>{
        var z = document.getElementsByClassName('numSec')
        var timeOne = setInterval(()=>{
            if(viewers[0].count > viewers[0].x){
                viewers[0].x++
                z[0].innerHTML = viewers[0].x
            }else{
                clearInterval(timeOne)
            }
        },10)
        var timeTwo = setInterval(()=>{
            if(viewers[1].count > viewers[1].x){
                viewers[1].x++
                z[1].innerHTML = viewers[1].x
            }else{
                clearInterval(timeTwo)
            }
        },10)
        var timeThree = setInterval(()=>{
            if(viewers[2].count > viewers[2].x){
                viewers[2].x++
                z[2].innerHTML = viewers[2].x
            }else{
                clearInterval(timeThree)
            }
        },10)
        var timeFour = setInterval(()=>{
            if(viewers[3].count > viewers[3].x){
                viewers[3].x++
                z[3].innerHTML = viewers[3].x
            }else{
                clearInterval(timeFour)
            }
        },10)
    },[])
    return(
        <section id="section-two" style={{backgroundImage:`url(${ImgSec})`}}>

            <div className="sec-two-main">
                <div className="container ">
                    <Fade bottom>
                        <div className="parent-sectwo">
                            {viewers.map( e => {
                                return(

                                    <div key={e.id} className="child-sec-two">
                                        <h1 className={'numSec'}>{e.x}</h1>
                                        <h3>{e.title}</h3>
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