import React, { useState } from 'react';
const accordionData = [
  {
    question: 'What is a Mongoose Schema?',
    answer:
      'A Mongoose schema defines the structure of the document, default values, validators, etc. It is fundamental to managing data in MongoDB through Mongoose.',
  },
  {
    question: 'How do you generate MongoDB from CSV?',
    answer:
      'Once you input a CSV, our AI parses it using GPT and creates a Mongoose schema. We then run code in a Virtual Machine (VM) that creates your MongoDB collection and uploads all your CSV data into it.',
  },
  {
    question: 'How does the API endpoint creation work?',
    answer:
      'Based on the MongoDB collection automatically created from your CSV, we generate RESTful API endpoints with full CRUD operations. These endpoints are hosted, and the code is run in our VM for each API call.',
  },
  {
    question: 'Can I prompt new endpoints with natural language?',
    answer:
      'Yes, part of our service allows you to create custom endpoints with natural language. These user-prompted endpoints will be created, documented, and hosted for your convenience.',
  },
];

export default function Accordion({
  variant,
  accordionItemVariant,
  plusMinus,
}) {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  return (
    <div className="section-content" id="faq">
      <div className="row g-gs justify-content-center">
        <div className="col-xl-9 col-xxl-8">
          <div
            className={`accordion ${plusMinus ? 'accordion-plus-minus' : ''} ${
              variant ? variant : 'accordion-flush'
            } ${variant ? variant : 'accordion-icon-accent'}`}
          >
            {accordionData.map((item, index) => (
              <div
                className={`accordion-item ${
                  accordionItemVariant ? accordionItemVariant : ''
                }`}
                key={index}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      selected === index ? '' : 'collapsed'
                    }`}
                    onClick={() => handelToggle(index)}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    selected === index ? 'show' : ''
                  }`}
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
