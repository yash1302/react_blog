import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './App.css';
import HomeHeading from './components/HomeHeading';
import Carousel_1 from './components/Carousel_1';
import BelowCard from './components/BelowCard';
import Carousel_midde from './components/Carousel_midde';
import Images from './images/index.js';
import { Link } from 'react-router-dom';
import HomeMobile from './components/HomeMobile';

function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <HomeHeading />
      <div className='flex'>
        {/* left side */}
        <div className=" hidden sm:flex flex-col px-6 ml-4">
          <div className='mt-10'>
            <Carousel_1 text="Algorithmic trading for multiple commodities markets, like Forex, Metals, Energy, etc." image={Images.img4} />
          </div>
          <div className='mt-2'>
            <Carousel_1 text="Trading Bot for FOREX" image={Images.img3} />
          </div>
        </div>
        {/* middle part */}
        <div className='mt-10 hidden sm:flex'>
          <Carousel_midde text="Ranking customer behaviours for business strategy" name="yashvardhan" date="13 February,2022" image={Images.img5} />
        </div>
        {/* lower side */}
        <div className="px-6 hidden sm:flex flex-col">
          <div className='mt-10'>
            <Carousel_1 text="Python model for the analysis of sector-specific stock ETFs for investment purposes" image={Images.img1} />
          </div>
          <div className='mt-2'>
            <Carousel_1 text="Medical Classification" image={Images.img2} />
          </div>
        </div>
      </div>
      {/* <div className='mt-24 flex space-x-12 ml-12'>
        <BelowCard text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="September 17 2022" image={Images.img3} />
        <BelowCard text="Design and develop solution to anomaly detection classification problems" name="Ajay B" date="October 17 2022" image={Images.img2} />
        <BelowCard text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img1} />

      </div> */}
      <div className='hidden md:block mx-12 mt-4'>
        <Carousel responsive={responsive}>
          <div><BelowCard text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="September 17 2022" image={Images.img3} /></div>
          <div><BelowCard text="Design and develop solution to anomaly detection classification problems" name="Ajay B" date="October 17 2022" image={Images.img2} /></div>
          <div><BelowCard text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img1} /></div>
          <div><BelowCard text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img1} /></div>
        </Carousel>
      </div>
      <div className='flex flex-col sm:hidden'>
        <HomeMobile text="Ranking customer behaviours for business strategy" name="yashvardhan" date="13 February,2022" image={Images.img5} />
        <HomeMobile text="Design and develop solution to anomaly detection classification problems" name="Ajay B" date="October 17 2022" image={Images.img2} />
        <HomeMobile text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img1} />
        <HomeMobile text="Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="October 17 2022" image={Images.img4} />
      </div>

    </div>
  );
}

export default App;
