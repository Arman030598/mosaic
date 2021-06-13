import SectionOne from "../components/section-one/SectionOne";
import SectionTwo from "../components/section-two/SectionTwo";
import OurWork from "../components/our-work/OurWork";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import Testimony from "../testimony/Testimony";

export default ()=>{
    return(
        <>
            <SectionOne/>
            <SectionTwo/>
            <OurWork/>
            <Services/>
            <Projects/>
            <Testimony/>
        </>
    )
}