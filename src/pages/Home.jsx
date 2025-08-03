import Header from "../components/Header";
import Choir from "./homeSections/Choir";
import Expectation from "./homeSections/Expectation";
import Landing from "./homeSections/Landing";
import OurVision from "./homeSections/OurVision";
import WeeklyActivities from "./homeSections/WeeklyActivities";

const Home = ()=>{
    return(
        <div>
            <Header/>
            <Landing/>
            <WeeklyActivities/>
            <Expectation/>
            <Choir/>
            <OurVision/>
        </div>
    )
}

export default Home;