import Fade from "react-reveal/Fade";
import './TestyMonyTop.scss'
import './TestyMonyTop-media.scss'

export default ()=>{
    return(
        <div className="container">
            <Fade bottom>
                <div className="top-testy">
                    <div className="top-testu-line">
                        <h1>TESTIMONY</h1>
                        <span className="linetesty"></span>
                    </div>
                    <div className="title-testy">
                        <h1>
                            Our satisfied customer says
                        </h1>
                    </div>
                    <div className="bottom-testy">
                        <p>
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the
                            blind texts. Separated they live in
                        </p>
                    </div>
                </div>
            </Fade>
        </div>

    )
}