import SectionAlg from "../components/SectionAlg/SectionAlg";
import Compartilhe from "../components/Compartilhe/Compartilhe";
import Selection from "../components/Selection/Selection";

function Home(){
    return(
        <div className="Home">
            <SectionAlg />
            <Selection />
            <Compartilhe />
        </div>
    )
}

export default Home