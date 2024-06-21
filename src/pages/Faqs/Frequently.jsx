import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './faqs.css';


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('h3');
  const answer = item.querySelector('.answer');

  question.addEventListener('click', () => {
    answer.className.toggle('active');
  });
});

const Frequently = () => {
     return (
          <div>
               <Navbar/>
               <section className=" mainhomepagediv">
                    <div className="container">
                         <div className='container text-center pt-5 pb-5 upperTextbox'>
                              <p className='h3'>Computer Science and Information Technology</p>
                              <p>University of Engineering & Technology Peshawar</p>
                              <p className='h3'>Frequently Asked Questions</p>
                         </div>
                         <div className="faq-container">
                              <div className="faq-item">
                                   <h3>Who can Re-Register the subjects in Regular (Fall/Spring) or Summer Semester?</h3>
                                   <div className="answer">
                                   - A student receiving F or W grade in any course shall be required to re-register in that course.
                                   </div>
                                   <div className='answer'>- A student receiving less than or equal to C+ grade in a course may also re-register in that course, to improve his/her grade.</div>
                              </div>
                              <div className="faq-item">
                                   <h3>How many times a subject can be registered and what is the deadline for improving grades?</h3>
                                   <div className="answer">
                                   - If a student with “F” grade re-registers a course and score “F” again, he/she can register the course again until he/she passes the course.

                                   </div>
                                   <div className="answer">
                                   - A student receiving less than or equal to C+ grade in a course may also re-register in that course, to improve his/her grade subject to a maximum of one chance within one year of the declaration of final semester result.

                                   </div>
                                   <div className="answer">
                                   - The improvement of grade(s) is allowed within one year of the training, the coordinator’s office shall send the declaration of result.
                                   </div>
                              </div>

                         </div>
                    </div>
               </section>
               <Footer/>
          </div>
     );
};
export default Frequently;