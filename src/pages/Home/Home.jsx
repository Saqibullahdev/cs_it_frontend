import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './home.css';
import firstsvg from '../../assets/images/firstsvg.svg';
import secondpic from '../../assets/images/secondpic.jpg';
import uet from '../../assets/images/uet.jpg';



export default function Home() {
  return (
    <div>
      <Navbar />

      <section className='mainhomepagediv'>
        <div className='contianer'>
          {/* // first hero section */}
          <div className='container text-center pt-5 pb-5 upperTextbox'>
            <p>Welcome to the Department of</p>
            <p className='h2'>Computer Science and Information Technology</p>
            <p>University of Engineering & Technology Peshawar</p>
          </div>

          {/* // second hero section */}
          <div className='container pt-5 pb-5'>
            <div className='row firstherodiv'>
              <div className='col-sm-12  col-lg-6'>

                <p className='departmentText'>The Department of Computer Science & Information Technology at the Univeristy of Engineering & Technology Peshawar id dedicated to providing students with a comprehensive education in the field of computing. Our faculty are highly qualified and skills and knowledge they need to succeed in the rapidly-evolving field of technologu. We offer a range of degree programs, including a Bachelor of Science in Computer Science and a Bachelor of Science in information Technology, as well as a variety of elctive courses and hands-on research </p>
                <p> opportunities.. Our department is commiteed to staying up-to-date with the latest technoloies and best practices, and we strive to provide our students with the tools and resources they need to succeed in their careers.</p>

                <div className='threeHeading'>
                  <h4>COMPUTING </h4>
                  <h4>TECHNOLOGY</h4>
                  <h4>EDUCATION</h4>
                </div>
              </div>
              <div className='col-4 offset-sm-1 svgdiv'>
                <img src={firstsvg} alt="" className='img-fluid '  />
              </div>
            </div>
          </div>


          {/* // third hero section */}
          <div className='container pt-5 pb-5'>
            <div className='row firstherodiv'>
              <div className='col-sm-12 col-lg-6 '>
                <h3 className='visionText'>VISION & GOALS</h3>

                <p className='departmentText'>The Department of Computer Science & Information Technology at the University of Engineering & Technology Peshawar aims to be a leading provider of quality education in the field of computing, known for its innovative and practical approach to teaching and research. We envision a future where our graduates are highly sought after by employers for their technical expertise and problem-solving skills, and where our department is recognized as a center of excellence in the region.
                </p><p className='departmentText'>
                  To provide students with a solid foundation in computer science and information technology, through a curriculum that is both rigorous and relevant to industry needs.
                  To encourage students to think critically and creatively, and to develop problem-solving skills that will enable them to succeed in their careers.
                  </p>
                  <p className='departmentText'>
                  To foster a culture of innovation and continuous improvement, both within the department and the wider university
                  community.
                  </p>
                  <p className='departmentText'>
                  To provide students with opportunities to engage in hands-on research and real-world projects, in order to prepare them for success in the workforce.</p>
                <p className='departmentText'>  To build strong partnerships with industry and other stakeholders, in order to enhance the employability of our graduates and the impact of our research.</p>

               
              </div>
              <div className='col-4 offset-sm-1 svgdiv'>
                <img src={secondpic} alt="" className='img-fluid' />
              </div>
            </div>
          </div>

        {/* forth hero section  */}
        <div className='container pt-5 pb-5'>
            <div className='row firstherodiv'>
              <div className='col-sm-12 col-lg-6'>
                <h3 className='visionText'>CHAIRPERSON'S & MESSAGE</h3>

                <p className='departmentText'>Dear Students, Faculty, and Staff of the Department of Computer Science & Information Technology,
                I am honored to serve as the Chairman of this outstanding department, and I am committed to supporting the success of all of our students, faculty, and staff. As we embark on another academic year, I am confident that we will continue to build on our tradition of excellence in teaching and research.
                Our department is home to a talented and diverse community of scholars, who are dedicated to advancing the field of computing and making a positive impact in the world. We are fortunate to have access to state-of-the-art facilities and
                resources, which enable us to provide our students with a first- class education.</p>
                <p>
                I encourage all of our students to take full advantage of the opportunities that are available to them at the Department of Computer Science & Information, and to work hard to achieve their goals. And to our faculty and staff, I thank you for your tireless efforts in supporting our students and advancing the mission of the department.
                Together, we will continue to strive for excellence and make a meaningful contribution to the field of computer science and information technology.</p>
                <p>
                Sincerely,
                </p>
                <p>
                Prof. Dr. Syed Adeel
                </p>
                <p>
                Chairman, Department of Computer Science & Information Technology</p>

               
              </div>
              <div className='col-4  svgdiv1'>
                <img src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="image not loaded" className='img-fluid' />
              </div>
            </div>
          </div>


        </div>

      </section>

      <Footer />


    </div>
  )
}
