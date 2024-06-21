import React from 'react';
import { useState } from 'react';


const FAQs = () => {
  const faqData = [
    {
      question: 'What is JavaScript?',
      answer: 'JavaScript is a programming language that allows you to add interactivity and dynamic behavior to websites. It\'s commonly used for creating interactive web pages, web applications, and more.'
    },
    {
      question: 'How do I declare a variable in JavaScript?',
      answer: 'You can declare a variable in JavaScript using the \'var\', \'let\', or \'const\' keywords. For example:\n\nvar name = "John";\nlet age = 25;\nconst PI = 3.14159;'
    },
    // Add more FAQ items here
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <div className="faq-item" key={index}>
          <h3 onClick={() => toggleAnswer(index)}>{faq.question}</h3>
          {activeIndex === index && <div className="answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
