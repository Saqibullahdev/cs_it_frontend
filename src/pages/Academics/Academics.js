import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './academics.css'
import prosprectus from '../../assets/images/pros.jpg';

export default function Academics() {
  return (
    <div>
        <Navbar />
        <section className='container-fluid facultySection'>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className=' mb-5'>
                  <p className='visionText'>Score</p>
                  <p>To produce graduates who are able to advance computing knowledge and contribute to the IT industry and society through excellence in educa- tion, learning and research.</p>
                </div>

                <div className='mt-5'>
                  <p className='visionText'>CS & DS</p>
                  <p>The Department of Computer Science & Information Technology offers undergraduate and graduate courses leading to the award of Bachelor of Science and Master of Science in Computer Science respectively. It owes its emer- gence to the relentlessly growing demand of professionals with expertise in areas of comput- ers, communications and information processing technologies. The Department of CS & IT enjoys full support of the engineering departments. Students work in laboratories equipped with state-of-art computer systems running a wide range of applications and specialized software supporting the courses. The department strongly supports the idea of using modern audio-visual aids to enhance the learning capabilities of stu- dents and provides them a stimulating and chal- lenging environment essential for high quality education. The Department of Computer Science & Information Technology is concerned with the theory, design, development and application of computer science and information processing techniques. The department has also gotten accreditation from the National Computing Education and Accreditation Council (NCEAC).</p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12">
                <div className='imagedivPros'>
                  <img src={prosprectus} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </div>
  )
}
