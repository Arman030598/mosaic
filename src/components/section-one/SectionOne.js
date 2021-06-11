import './SectionOne.scss'
import './SectionOne-media.scss'
import ImgOne from '../../sections/image/xbg_3.jpg.pagespeed.ic.82DGT9-Qlm.webp'
import Fade from "react-reveal/Fade";

export default ()=>{
    return(
        <section id="section-one">
            <div className="container">
                    <div className="sec-one-main">
                        <div className="img-sec-one">
                            <img height={'100%'} width={'140%'} src={ImgOne} alt=""/>
                        </div>
                        <div className="sec-one-desc">
                            <Fade bottom>
                                <div className="title-sec-one">
                                    <div className="container-sec">
                                        <div className=" about-line">
                                            <h3>About</h3>
                                            <div className="line-sec"></div>
                                        </div>
                                    </div>
                                    <div className="title_secone">
                                        <div className="container-sec">
                                            <h1>We are the best Interior, Exterior & Architecture Firm</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="desc-sec-one">
                                    <div className="">
                                        <p>
                                            On her way she met a copy. The copy warned the Little Blind Text,
                                            that where it came from it would have been rewritten a thousand
                                            times and everything that was left from its origin would be the
                                            word "and" and the Little Blind Text should turn around and return
                                            to its own, safe country. But nothing the copy said could convince her
                                            and so it didn’t take long until a few insidious Copy Writers ambushed
                                            her, made her drunk with Longe and Parole and dragged her into their
                                            agency, where they abused her for their.
                                        </p>
                                        <p>
                                            When she reached the first hills of the Italic Mountains, she had a
                                            last view back on the skyline of her hometown Bookmarksgrove, the headline
                                            of Alphabet Village and the subline of her own road, the Line Lane. Pityful
                                            a rethoric question ran over her cheek, then she continued her way.
                                        </p>
                                        <a href="" className="learn-more">Learn More > </a>
                                    </div>
                                </div>
                            </Fade>

                        </div>
                    </div>
            </div>
        </section>
    )
}