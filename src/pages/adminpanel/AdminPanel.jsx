import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';
import './adminPanel.css'
import Item1Content from "./Item1Content";
import Item2Content from "./Item2Content";
import Item3Content from "./Item3Content";
import Item4Content from './Item4Content';
import { useEffect } from 'react';
import axios from 'axios';

export default function AdminPanel() {

     const handleLogout = async () => {
          try {
           
            const response= await axios.get("http://localhost:8080/api/logout",{
              withCredentials:true
            }); 
            console.log(response)
            if (response.status == 200) {
              window.location.href = "/";
            }
            else{ 
             alert("Logout failed")
            }
          } catch (error) {
            
            alert("Logout failed " + error.message )
      
        
          }
        };
      

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
               if(res.status!=200){
                    const error = new Error(res.error);
                    throw error;
               }
              
          } catch (error) {
               console.log("saqib");
              window.location.href = "/";
          }
     }


    useEffect(() => {
           isLoggedin();
    }, []);

     const menuItems = [
          "Gallery",
          "Notifications",
          "Society",
          "Settings",
          
          ];
          
          const [selectedItem, setSelectedItem] = useState(null);
          
          const handleMenuItemClick = (item) => {
          setSelectedItem(item);
          };
          const contentComponents = {
               "Gallery": <Item1Content />,
               "Notifications": <Item2Content />,
               "Settings": <Item3Content />,
               "Society": <Item4Content />
               // Add components for other menu items as needed
          };

     return (
     <div>
          <Navbar />
          <div className='BG-blue'>
               <div className="container admin-page">
                    <div className="menu">
                         <ul className='admin-menu'>
                              <div className='mt-20'>
                                   {menuItems.map((item, index) => (
                                   <li
                                   key={index}
                                   onClick={() => handleMenuItemClick(item)}
                                   className={selectedItem === item ? "selected" : ""}
                                   >
                                   {item}
                                   </li>
                                   ))}
                              </div>
                              <div>
                                   <button className='logOut'  onClick={handleLogout}>Log out</button>
                              </div>
                              
                         
                         </ul>
                    </div>
                    <div className="content">
                         {selectedItem && contentComponents[selectedItem]}
                    </div>
               </div>
          </div>
          

     </div>
     
     );
}
