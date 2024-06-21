import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './contact.css';
import contact from '../../assets/images/contact.svg';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [message, setmessage] = useState("")
  const [subject, setSubject] = useState('')
  const [Email, setEmail] = useState('email')
  const [isLoading,setLoading]=useState(false)

  const UpdateEmail = (e) => {
    let email = e.target.value

    if (email == 'Chairman') setEmail("saqibregi43@gmail.com")
    else setEmail("computercellofficial@gmail.com")
    console.log(Email)

  }


  const sendMail = async (e) => {
    e.preventDefault()
   
   
    try {
      setLoading(true)
      const response = await axios.post('http://localhost:8080/api/sendmail', {
        destination: Email,
        subject: subject,
        message: message
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
    
      // Check the status code of the response
      if (response.status !== 200) {
        throw new Error(`Failed to send email: ${response.status}`)
      }
    
      // The email was sent successfully
      toast.success('Email Send Succussfully!');
    } catch (error) {
      // Handle the error here
      toast.error('This is an error!');
    }finally{
      setLoading(false)
    }
   
  }
  console.log(Email)
  return (
    <div>
      <Navbar />
      <section className=" mainhomepagediv">
        <div className='container text-center pt-5 pb-5 upperTextbox'>
            <p className='h3'>Computer Science and Information Technology</p>
            <p>University of Engineering & Technology Peshawar</p>
            <p className='h3'>Contact Us For Any Furthur Assistance</p>
        </div>
      </section>
      <section className='container-fluid contactSection'>
        <div className='container'>
          <div className='imageDivContact'>
            <img src={contact} className="img-fluid" alt="" />
          </div>

          <h1>{Email}</h1>

          <form>

            <div className="form-group mb-5">
              <label htmlFor="exampleFormControlSelect1">Email To :</label>
              <select onChange={UpdateEmail} className="form-control" id="exampleFormControlSelect1" >
                <option>Select</option>
                <option id='1'>Chairman</option>
                <option id='2'>Computer Cell Society</option>

              </select>
            </div>



            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Enter subject :</label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Enter Message :</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
                onChange={(e) => setmessage(e.target.value)}

              />
            </div>
            <div className='mt-5 mb-5 '>

              <button onClick={sendMail} className='btn btn-warning pe-3 ps-3 '>

               {isLoading ? "Sending..." : "Send Mail"  }


              </button>
              <Toaster
  position="top-center"
  reverseOrder={false}
/>
            </div>
          </form>


        </div>
      </section>
      <Footer />
    </div>
  )
}
