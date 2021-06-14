import {useState} from 'react'
import './blog.scss'
import './blog-media.scss'

export default ()=>{
    const [imgBlog] = useState([
        'https://preview.colorlib.com/theme/mosaic/images/ximage_1.jpg.pagespeed.ic.cY8J7mM7KW.webp',
        'https://preview.colorlib.com/theme/mosaic/images/ximage_2.jpg.pagespeed.ic.KiEvuOw7R2.webp',
        'https://preview.colorlib.com/theme/mosaic/images/ximage_3.jpg.pagespeed.ic.-BUz1LQ4Y6.webp',
    ])
    return(
        <section id="blog">
            <div className="container">
                <div className="blog">
                    <div className="title-blog">
                        <div className="line-blog-">
                            <div className="line-blog">
                                <h1>BLOG</h1>
                                <span></span>
                            </div>
                            <h2>Recent Blog</h2>
                        </div>
                        <div className="desc-blog">
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                            </p>
                        </div>
                    </div>
                    <div className="main-blog">
                        {imgBlog.map((e,i)=>{
                            return(
                                <div key={i} className="blog-card">
                                    <img src={e} alt=""/>
                                    <div className="desc-card">
                                        <div className="t_card">
                                            <p>Jan. 20, 2019</p>
                                            <p>Admin</p>
                                            <p>
                                                <span className="iconify" data-icon="bx:bx-message" data-inline="false"></span>
                                                <span>3</span>
                                            </p>
                                        </div>
                                        <div className="d_card">
                                            <p>
                                                Even the all-powerful Pointing has no control about the blind texts
                                            </p>
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