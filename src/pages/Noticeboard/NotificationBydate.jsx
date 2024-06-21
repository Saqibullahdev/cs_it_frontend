import React from 'react';
import { useLocation } from 'react-router-dom';
import './NotificationBydate.css'; // Import the custom CSS file for additional styling

function NotificationBydate() {
  const location = useLocation();
  const { data } = location.state || { data: [] };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const openImageInNewTab = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Notifications</h1>
      {data.length > 0 ? (
        <div className="row">
          {data?.map((item) => (
            <div className="col-md-4" key={item._id}>
              <div 
                className="card mb-4 notification-card" 
                onClick={() => openImageInNewTab(item.image)}
              >
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h5 className="card-date">{formatDate(item.createdAt)}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No data found</p>
      )}
    </div>
  );
}

export default NotificationBydate;
