import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './gallery.css';
import '../adminpanel/Item1Content';
import { useEffect } from 'react';

export default function Gallery({ events }) {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    // Call the API here
    fetch('http://localhost:8080/api/fetchEvent')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        // Handle the error here
        console.log(error);
        // Display an error message to the user
        alert('Error fetching data from API');
      });
  }, []);

  console.log(data);
  console.log('Events in Gallery:', events);
  return (
    <div>
      <Navbar />
      <section className=" mainhomepagediv">
        <div className='container text-center pt-5 pb-5 upperTextbox'>
            <p className='h3'>Computer Science and Information Technology</p>
            <p>University of Engineering & Technology Peshawar</p>
            <p className='h3'>Take a Glance on the Events</p>
        </div>
      </section>
     

      {/* //map through data and display having title description*/}
    
    {
      data.map((item, index) => (
        <div className='gallerySection' key={index}>
          <div className='container galleryComp flexRow'>
            <div className='textContainer'>
              <h2 className='pd-20 eventName mb-0'> {item.title}</h2>
              <p className='pd-20 eventDescription mb-0'>{item.description}</p>
            </div>
            <div className='imageContainer imageDivUpper flexRowdiv'>
              <a href={item.image} target='_blank'><img className='' src={item.image}  alt="image" /></a>
            </div>
            
          </div>
        </div>
      ))
    }
      {/* <div>
        <h1>Event Gallery</h1>
        <div id="gallery">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div className="event-card" key={index}>
                <h2>{event.name}</h2>
                <p>{event.description}</p>
                {event.images.length > 0 &&
                  event.images.map((image, i) => (
                    <img
                      className="event-image"
                      key={i}
                      src={URL.createObjectURL(image)}
                      alt={`Event ${event.name} Image ${i + 1}`}
                    />
                  ))}
              </div>
            ))
          ) : (
            <p>No events to display.</p>
          )}
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

