import logo from './logo.svg';
import './App.css';
import HomeHeading from './components/HomeHeading';
import Carousel_1 from './components/Carousel_1';
import BelowCard from './components/BelowCard';

function App() {
  return (
    <div>
      <HomeHeading />
      <div className='flex'>
        <div className="px-12">
          <Carousel_1 />
          <Carousel_1 />
        </div>
        <Carousel_1 />
        <div className="px-12">
          <Carousel_1 />
          <Carousel_1 />
        </div>
      </div>
      <div className='mt-24 flex space-x-12 ml-12'>
        <BelowCard/>
        <BelowCard/>
        <BelowCard/>

      </div>
    </div>
  );
}

export default App;
