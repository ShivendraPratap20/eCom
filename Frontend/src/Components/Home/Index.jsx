import Menu from './Menu';
import Tab from './TAb';
import CardContainer from './Card/CardContainer';
import GridContainer from './GridSection/GridContainer';
import Feature from './Features/Feature';
import SideBar from '../SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import ContextProvider from '../../ContextProvider';
import HeroSection2 from './HeroSection2';
import Ques from './Ques';
import Footer from '../Footer';

export default function Index() {
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