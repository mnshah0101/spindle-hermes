import React, { useState } from 'react';
const accordionData = [
  {
    question: 'What is a copy?',
    answer:
      "Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!",
  },
  {
    question: 'Does CopyGen to write long articles?',
    answer:
      "Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!",
  },
  {
    question: 'Is the generated content original?',
    answer:
      "Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!",
  },
  {
    question: 'Do you have wordpress plugin?',
    answer:
      "Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!",
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
