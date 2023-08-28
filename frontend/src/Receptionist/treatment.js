import './receptionist.css';
import { useState } from 'react';
const treatment = [{medicine:'Dolo', quantity: 3, dose: '1-0-1', bill: 25},{medicine:'Crocin', quantity: 1, dose: '2-1-0', bill: 125},{medicine:'para', quantity: 5, dose: '1-1-1', bill: 225}]
function Treatment() {
  const [onClick, setOnClick] = useState(true);
  const [count, , setCount] = useState(1);

  const handleClick = () => {
    setOnClick(!onClick); // Toggle the state value
  };
  const countNumber = () => {};
  return (
    <>
      {onClick ? (
        <div className='treatment_notClick' onClick={handleClick}>
          <div className='count'>{count}</div>
          <div className='treatment_notClick_date'>12-Aug</div>
          <div className='treatment_notClick_reason'></div>
        </div>
      ) : (
        <div className='treatment_Click' onClick={handleClick}>
          <div className='treatment_notClick' onClick={handleClick} style={{width:'100%', marginLeft:'-2px', border:'0'}}>
            <div className='count'>{count}</div>
            <div className='treatment_notClick_date'>12-Aug</div>
            <div className='treatment_notClick_reason'>Fever</div>
          </div>
          <div className='doctor_name' style={{ textAlign: 'center' }}>
            Doctor: Surendra
          </div>
          {(() => {
            const elements = [];
            for (let i = 0; i < 3; i++) {
              elements.push(
                <div className='tablet' key={i}>
                  <div>{i+1}</div>
                  <div>{treatment[i].medicine}</div>
                  <div>{treatment[i].quantity}</div>
                  <div>{treatment[i].bill}</div>
                </div>
              );
            }
            return elements;
          })()}
        </div>
      )}
    </>
  );
}

export default Treatment;
