import React, { useEffect,useState} from 'react'
import {fetchFromAPI} from './fetch.js'
import "./about.css"
function About() {
  // const getResp=async ()=>{
  //   const res=await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr',{
  //        "method":"get",
  //     "headers": {
  //         'X-RapidAPI-Key': 'c4493e580amsh0eeb41ccf9c3becp1948bfjsnab9bb1f0b824',
  //         'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  //       }
  //     })
  //     const data=await res.json();
  //     console.log(data)
  //   // fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr',{
  //   //   "method":"get",
  //   //   "headers": {
  //   //     'X-RapidAPI-Key': 'c4493e580amsh0eeb41ccf9c3becp1948bfjsnab9bb1f0b824',
  //   //     'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  //   //   }
  //   // })
  //   // .then(response=>{
  //   //   console.log(response);
  //   // })
  //   // .catch(err=>{
  //   //   console.log(err);
  //   // });
  // }
// useEffect(()=>{
//     getResp();
//  },[]) 
const [d,setD] = useState(null);

useEffect(() => {
  setD(null);
  fetchFromAPI()
    .then((data) => setD(data.items))
    console.log(d)
  }, []);
  return (
    <div className="main bg-black w-full text-white flex flex-col gap-10">
    <div className='nav fixed w-full bg-slate-600'>navbar</div>
      <div className='container flex items-center flex-row w-full py-8'>
      <div className='side p-8 flex flex-col gap-16'>
        <div className='flex flex-col gap-8'>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        </div>
        <div className='flex flex-col gap-8'>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        </div>

        <div className='flex flex-col gap-8'>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        </div>
        <div className='flex flex-col gap-8'>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        </div>
        <div className='flex flex-col gap-8'>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        </div>
        <div className='flex flex-col gap-8'>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        <div className='sideB flex flex-row gap-2 hover:bg-slate-400'>
          <img className="w-6" vsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU" alt="" />
          <span className=''>Home</span>
        </div>
        </div>
      </div>
      <div className='hero bg-white text-black'>
     
      <div>

      </div>
      </div>
      </div>
    </div>
  )
}


export default About