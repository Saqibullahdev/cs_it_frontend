
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';

const Item1Content = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [images, setImages] = useState([]);
  const [isprocessing, setIsprocessing] = useState(false);

  // Default onAddEvent function if not provided as a prop
  const defaultOnAddEvent = (eventData) => {
    console.log('Default onAddEvent:', eventData);
    // You can provide a default behavior or log a message
  };

  const handleAddEvent = async (e) => {
      // Your code to collect event data
      e.preventDefault();

      const formData = new FormData();
      formData.append('title', eventName);
      formData.append('description', eventDescription);
      formData.append('file', images);
      // for (const [key, value] of formData.entries()) {
      //   console.log(`${key}: ${value}`);
      // }

      try {

        setIsprocessing(true)
        // Your code to send formData to server
      const response=await fetch('http://localhost:8080/api/postevent', {
        method: 'POST',
        body: formData,
      });
      const data=await response.json();
      console.log(data);
      // Your code to handle response from server
      if (response.ok) {
        toast.success('Event Added Succussfully!');
      } else {
        toast.error('This is an error!');
      }

      } catch (error) {
        console.log(error);
      }
      finally{
        setIsprocessing(false)
      }
  



      
  
// const eventData = {
      //   name: 'EventName',
      //   description: 'EventDescription',
      //   images: ['image1', 'image2'], // Your image data
      // };
    // Use the provided onAddEvent prop or the default function
    // (typeof onAddEvent === 'function' ? onAddEvent : defaultOnAddEvent)(eventData);

    // Clear form fields
    setEventName('');
    setEventDescription('');
    setImages([]);
  };

  return (
    <div>
      <h1>Add Event</h1>
      <form>
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />

        <label htmlFor="eventDescription">Event Description:</label>
        <textarea
          id="eventDescription"
          name="eventDescription"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          rows="4"
          required
        ></textarea>

        <label htmlFor="imageUpload">Upload Images:</label>
        <input
          
          type="file"
          id="imageUpload"
          name="file"
          onChange={(e) => setImages(e.target.files[0])}
        />

        <button className='logIn' type="button" onClick={handleAddEvent}>
        {isprocessing ? 'Processing...' : 'Add Event'}
        <Toaster />
        </button>
      </form>
    </div>
  );
};

Item1Content.propTypes = {
  onAddEvent: PropTypes.func,
};

export default Item1Content;

