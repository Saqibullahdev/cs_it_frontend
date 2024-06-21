import React from 'react';
import { useState, useEffect } from "react";
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import AdminPanel from '../adminpanel/AdminPanel';
import { useHistory } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import './admin.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"; 
import axios from 'axios';
export default function Admin() {
  const history = useHistory();
  const isLoggedin =async ()=>{
    try {
         const res = await fetch('http://localhost:8080/api/isLoggedin',{
              method:"GET",
              headers:{
                   Accept:"application/json",
                   "Content-Type":"application/json"
              },
              credentials:"include"
         });
         const data = await res.json();
         console.log(res.status);
         if(res.status===200){
              const error = new Error(res.error);
              throw error;
         }
        
    } catch (error) {
        window.location.href = "/adminpanel";
    }
}


useEffect(() => {
     isLoggedin();
}, []);

  const[isprocessing,setIsprocessing]=useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (username, password) => {
    try {
      setIsprocessing(true);
      const response = await axios.post('http://localhost:8080/api/login', {
        email: username,
        password: password,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
     
      
      );

      console.log(response);
      if (response.status === 200) {
        setLoggedIn(true); // Set loggedIn to true upon successful login
        setError('');
      } else {
       
        setError('Incorrect username or password.');
        
      }
    } catch (error) {
      // Handle Axios errors here
      if (error.response) {
        toast.error('Please Check Email and Password!');
        setError('Server Error: ' + error.response.data.message);
      } else {
        setError('Network Error: Please check your connection.');
      }
    }finally{
      setIsprocessing(false);
    }
  };
 

  const LoginForm = ({ onLogin, error }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      onLogin(username, password);
    };

    return (
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='logIn' type="submit">{isprocessing ? "Processing..." : "Login"}</button>
          <Toaster />
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    );
  }


    return (
      <div>
        <Navbar />
        <section className=" mainhomepagediv">
        <div className='container text-center pt-5 pb-5 upperTextbox'>
            <p className='h3'>Computer Science and Information Technology</p>
            <p>University of Engineering & Technology Peshawar</p>
        </div>
      </section>
        
        <Router>
          <section className='.login-bg'>
            <div className="App">
              <div className="login-card">
                {loggedIn ? (
                  // history.push('/adminpanel/AdminPanel')
                  // navigate('adminpanel/AdminPanel')
                  <Redirect to="../adminpanel/AdminPanel" /> // Redirect to the home page upon successful login
                ) : (
                  <LoginForm onLogin={handleLogin} error={error} />
                )}
              </div>

              {/* Define a route for the home page */}
              <Route path="../adminpanel/AdminPanel" component={AdminPanel} />
            </div>
          </section>
        </Router>
        

      </div>
    );
  
  
}
