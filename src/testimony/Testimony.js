import CaruselTestimony from '../components/carusel-testimony/carusel-testimony'
import TestyMonyTop from "../components/testimony-top-sec/TestyMonyTop";

export default ()=>{
    const stl={
        backgroundColor:'#FAFAFA',
        padding:'100px 0'
    }
    return(
        <section style={stl} id={'testimony'}>
            <TestyMonyTop/>
            <CaruselTestimony/>
        </section>
    )
}