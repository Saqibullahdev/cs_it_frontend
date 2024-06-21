
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie

const Item1Content = ({ onAddEvent }) => {
  const authToken = Cookies.get('authToken');
  const[oldpassword,setOldpassword]=useState('')
  const[newpassword,setNewpassword]=useState('')
  const[confirmpassword,setConfirmpassword]=useState('')
  const [isprocessing, setIsprocessing] = useState(false);

  // Default onAddEvent function if not provided as a prop
  const defaultOnAddEvent = (eventData) => {
    console.log('Default onAddEvent:', eventData);
    // You can provide a default behavior or log a message
  };

  const handleAddEvent = async (e) => {
    // Your code to collect event data
    e.preventDefault();
    
    console.log(authToken)
    

    try {

      setIsprocessing(true)
      // Your code to send formData to server
      const response = await axios.put('http://localhost:8080/api/updatepassword', {
        oldPassword:oldpassword,
        newPassword:newpassword,
        confirmPassword:confirmpassword},
        {
          headers:{
            Authorization: `${authToken}`,
          }
        }
        
        )
      if(response.status===200){
        toast.success('Password updated successfully')
      }
      else{
        const error=new Error()
        throw error
      }

    } catch (error) {
      toast.error('Password not updated')
    }
    finally {
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
    setOldpassword('')
    setNewpassword('')
    setConfirmpassword('')
  };

  return (
    <div>
      <h1>Add Notification</h1>
      <form>
        <label htmlFor="eventName">Old Password:</label>
        <input
          type="password"
         
          name="oldpassword"
          value={oldpassword}
          onChange={(e) => setOldpassword(e.target.value)}
          required
        />

        <label htmlFor="eventName">New Passowrd:</label>
        <input
          type="password"
         
          name="newpassword"
          value={newpassword}
          onChange={(e) => setNewpassword(e.target.value)}
          required
        />

        <label htmlFor="eventName">Confirm Pasword:</label>
        <input
          type="password"
          
          name="confirmPassword"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
          required
        />



        <button className='logIn' type="button" onClick={handleAddEvent}>
          {isprocessing ? 'Processing...' : 'Update pasword'}
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

