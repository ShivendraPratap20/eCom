import Menu from '../Components/Home/Menu';
import Tab from '../Components/Home/Tab';
import CardContainer from '../Components/Home/Card/CardContainer';
import GridContainer from '../Components/Home/GridSection/GridContainer';
import Feature from '../Components/Home/Features/Feature';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import ContextProvider from '../ContextProvider';
import HeroSection2 from '../Components/Home/HeroSection2';
import Ques from '../Components/Home/Ques';
import Footer from '../Components/Footer';

export default function Home() {
    return (
        <ContextProvider>
            <Menu />
            <HeroSection2 />
            <Tab />
            <CardContainer />
            <GridContainer />
            <Feature />
            <Ques/>
            <Footer/>
        </ContextProvider>
    )
}