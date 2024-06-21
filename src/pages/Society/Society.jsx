import React from 'react'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './society.css';
import firstsvg from '../../assets/images/firstsvg.svg';
import secondpic from '../../assets/images/secondpic.jpg';
import { useEffect,useState } from 'react'
const Society = () => {
    const [data,setdata]=useState([])
    //http://localhost:8080/api//computercelldata call this api when page reload and setdata
    useEffect(()=>{
        fetch('http://localhost:8080/api//computercelldata')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data[0])
            setdata(data[0])
        })
    },[])
  return (
    <div>
       <Navbar />
       <section className=" mainhomepagediv">
        <div className='container text-center pt-5 pb-5 upperTextbox'>
            <p className='h3'>Computer Science and Information Technology</p>
            <p>University of Engineering & Technology Peshawar</p>
            <p className='h3'>Computer Cell Society</p>
        </div>
      </section>
       <div className='mainhomepagediv'>
          <div className="container card-body ">
              <h5 className="color-white card-title fs-1">{data.title}</h5>
              <p className="color-gold card-text">
              {data.description}
              </p>
          </div>
          <div className=" comtainer img-center">
              <img src={data.image} className="img-center card-img-top w-50 h-25 mx-auto my-auto" alt="..." />
          </div>
          <p className="card-text color-gold pd-20">
              <small className="text-body-secondary">Last updated : {data.updatedAt}</small>
          </p>
       </div>
       
       <Footer />
    </div>

   
   


 
  )
}

export default Society