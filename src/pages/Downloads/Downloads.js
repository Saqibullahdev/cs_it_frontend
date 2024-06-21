import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './download.css';
import wajiddoc from '../../assets/document/wajiddoc.docx';

const DownloadButtonDiv = (props)=>{
    return(
        <div className="col-lg-6 col-sm-12 text-center downloadButtonDiv">
        <a href={props.document} download={props.document} target='_blank'>
        <button className='btn btn-primary'>{props.name}</button>
        </a>
       
         </div>
    )
}

export default function Downloads() {
    const DownloadData = [
        {
            name:"Rechecking Form 2023",
            document: wajiddoc
        },
        {
            name:"Admission Form 2023",
            document: wajiddoc
        },
        {
            name:"Rechecking Form 2023",
            document: wajiddoc
        },
        {
            name:"Admission Form 2023",
            document: wajiddoc
        },
        {
            name:"Rechecking Form 2023",
            document: wajiddoc
        },
        {
            name:"Admission Form 2023",
            document: wajiddoc
        },
        {
            name:"Rechecking Form 2023",
            document: wajiddoc
        },
        {
            name:"Admission Form 2023",
            document: wajiddoc
        },
        {
            name:"Rechecking Form 2023",
            document: wajiddoc
        },
        {
            name:"Admission Form 2023",
            document: wajiddoc
        },
       
    ];
  return (
    <>
        <Navbar />
        <section className=" mainhomepagediv">
        <div className='container text-center pt-5 pb-5 upperTextbox'>
            <p className='h3'>Computer Science and Information Technology</p>
            <p>University of Engineering & Technology Peshawar</p>
            <p className='h3'>Important Documents</p>
        </div>
      </section>
        <section className='container-fluid  downloadsection'>
            <div className='container '>
                    <h3 className=' text-center'>Downloads</h3>
                    <div className='forms'>
                        <div>
                            <h4 className='text-center form-item'>Undergraduate</h4>
                           {
                            DownloadData.map((value)=>{
                                return <DownloadButtonDiv name={value.name} document={value.document} />
                            })
                           }

                        </div>
                        <div>
                            <h4 className='text-center form-item'>Post-Graduate</h4>
                            {
                            DownloadData.map((value)=>{
                                return <DownloadButtonDiv name={value.name} document={value.document} />
                            })
                           }

                        </div>
                           
                    </div>
                  
            </div>
        </section>

        <Footer />
    </>
  )
}
