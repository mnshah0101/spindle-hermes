import CardStyle5 from '../Card/CardStyle5';

export default function ContactInfo({ onClose }) {
  

  const buttonStyle = {
    marginLeft: 420
  }

  return (
  
    <div className='d-flex row contact-modal row px-4' >
      <div className='card col-lg-3 row '>

        <div className="col-lg-12 d-flex justify-content-end">


        <button type="button" className="btn-close btn-close-white btn my-4" aria-label="Close" onClick={onClose}></button>
</div>
        <ul className="pb-lg-5">
          <li className="col-lg-12 my-3">
            <CardStyle5
              title="Email"
              subTitle="hermesdevelopergroup@gmail.com"
              iconClass="mail-fill"
            />
          </li>
          <li className="col-lg-12 my-3">
            <CardStyle5
              title="Office"
              subTitle="Richmond, Virginia"
              iconClass="map-pin-fill"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
