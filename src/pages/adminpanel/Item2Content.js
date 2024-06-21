
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';

const Item1Content = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [images, setImages] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [semester, setSemester] = useState('');
  const [isprocessing, setIsprocessing] = useState(false);

  // Default onAddEvent function if not provided as a prop
  const defaultOnAddEvent = (eventData) => {
    console.log('Default onAddEvent:', eventData);
    // You can provide a default behavior or log a message
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleAddEvent = async (e) => {
      // Your code to collect event data
      e.preventDefault();

      const formData = new FormData();
      formData.append('title', eventName);
      formData.append('description', eventDescription);
      formData.append('file', images);
      formData.append('semester', selectedOption);
      formData.append('year', semester);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }


      try {

        setIsprocessing(true)
        // Your code to send formData to server
      const response=await fetch('http://localhost:8080/api/postNotification', {
        method: 'POST',
        body: formData,
      });
      const data=await response.json();
      console.log(data);
      // Your code to handle response from server
      if (response.ok) {
        toast.success('Notification Added Succuessfully');
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
      <h1>Add Notification </h1>
      <form>
        <label htmlFor="eventName">Title:</label>
        <input
          type="text"
          className='form-control'
          name="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
          <label htmlFor="year" className="form-label">Semester:</label>
          <input
            type="text"
            name="year"
            className="form-control"
            required
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />

        <label htmlFor="eventDescription">Description:</label>
        <textarea
          id="eventDescription"
          name="eventDescription"
          className='form-control'
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          rows="4"
          required
        ></textarea>

          <select className="form-select mt-2" value={selectedOption} onChange={handleSelectChange}>
            <option value="">This Notification is for Semester</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
          </select>
          <p className="mt-2">Selected option: {selectedOption}</p>
        <label htmlFor="imageUpload">Upload Images:</label>
        <input
          type="file"
          id="imageUpload"
          name="file"
          onChange={(e) => setImages(e.target.files[0])}
        />

        <button className='logIn' type="button" onClick={handleAddEvent}>
        {isprocessing ? 'Processing...' : 'Add Notification'}
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

