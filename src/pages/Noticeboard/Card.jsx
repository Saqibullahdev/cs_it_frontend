import React from 'react';

export default function Card({ id, title, description, image }) {
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = image;
//     link.download = `${title}.jpg`; // Use the title as the filename (you can modify this as needed)
//     link.target = '_blank'; // Open the link in a new tab
//     link.click();
//   };

  return (
    <div className="card" style={{ width: "22rem", height: "27rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={image} download className='text-decoration-none text-dark fw-bold' target='_blank'>View Notification</a>
      </div>
    </div>
  );
}
