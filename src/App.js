import logo from './logo.svg';
import './App.css';
import HomeHeading from './components/HomeHeading';
import Carousel_1 from './components/Carousel_1';
import BelowCard from './components/BelowCard';
import Carousel_midde from './components/Carousel_midde';
import imgCar1 from './images/imgCar1.jpg'

function App() {
  return (
    <div>
      <HomeHeading />
      <div className='flex'>
        {/* left side */}
        <div className="px-6 ml-4">
          <div className='mt-10'>
            <Carousel_1 text="Algorithmic trading for multiple commodities markets, like Forex, Metals, Energy, etc."/>
          </div>
          <div className='mt-2'>
            <Carousel_1 text="Trading Bot for FOREX"/>
          </div>
        </div>
        {/* middle part */}
        <div className='mt-10'>
          <Carousel_midde text="Ranking customer behaviours for business strategy" name="yashvardhan" date = "13 February,2022"/>
        </div>
        {/* lower side */}
        <div className="px-6">
          <div className='mt-10'>
            <Carousel_1 text="Python model for the analysis of sector-specific stock ETFs for investment purposes" image={imgCar1}/>
          </div>
          <div className='mt-2'>
            <Carousel_1 text="Medical Classification"/>
          </div>
        </div>
      </div>
      <div className='mt-24 flex space-x-12 ml-12'>
        <BelowCard text = "Design & Develop BERT Question Answering model explanations with visualization" name="Aditya P" date="September 17 2022"/>
        <BelowCard text="Design and develop solution to anomaly detection classification problems" name="Ajay B" date = "October 17 2022"/>
        <BelowCard text="Design & Develop BERT Question Answering model explanations with visualization" name = "Aditya P" date="October 17 2022"/>

      </div>
    </div>
  );
}

export default App;
