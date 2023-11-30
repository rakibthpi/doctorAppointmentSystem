import Articles from "./Articles/Articles";
import Banner from "./Banner/Banner";
import BestDoctor from "./BestDoctor/BestDoctor";
// import Faq from "./Faq/Faq";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestDoctor></BestDoctor>
            <Articles></Articles>
            {/* <Faq></Faq> */}
        </div>
    );
};

export default Home;