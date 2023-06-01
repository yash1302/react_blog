import React from 'react'
import { Link } from "react-router-dom";
import ArticleHeading from './ArticleHeading';
import images from '../images';

export default function heading() {
  return (
    <div>
      <div>
        <p className='pl-14 pt-12 tracking-tight'>Category &gt; Geo Politics</p>
        <h1 className='pl-14 pt-8 tracking-wider font-bold text-3xl'>Design & Develop BERT Question Answering model<br />
          explanations with visualization</h1>
        <p className='pl-14 pt-8 tracking-tight'>23 May 2023</p>
        <div className='flex justify-center'>
        <img src={images.img3} alt="" className='h-[400px] mt-12 w-7/12 flex justify-center align-center rounded-lg' />
        </div>
        <div className='flex justify-center'>
        <p className='mt-12 tracking-normal w-[800px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>

        <div className='flex justify-between mx-80 mt-12'>
          <h2>by yashvardhan jadhav</h2>
          <h2>1259 likes</h2>
        </div>
      </div>

      <Link to="/">home</Link>
    </div>
  )
}
