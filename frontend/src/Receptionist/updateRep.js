import './receptionist.css';
import { useState } from 'react';

function Treatment() {
  const [onClick, setOnClick] = useState(true);
  const [data, setData] = useState({
    tabletName: '',
    tabletQuantity: '',
    tabletBill: '',
    tabletReason: '',
  });
  // const myData = '';

  const onSubmit = () => {
    fetch('http://127.0.0.1:9000/receptionist/updateUser', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Fetch error:', error));
  };

  const handleClick = () => {
    setOnClick(!onClick);
  };
  const countNumber = () => {};
  return (
    <>
      {onClick ? (
        <div
          className=''
          onClick={handleClick}
          style={{
            textAlign: 'center',
            border: '1px solid black',
            width: '62%',
            marginLeft: '20%',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          +
        </div>
      ) : (
        <>
          <div
            className='treatment_Click'
            onClick={(e) => e.target.className === 'touch' || handleClick}
          >
            <input
              className='touch'
              placeholder='Tablet Name'
              onChange={(e) => setData({ ...data, tabletName: e.target.value })}
            ></input>
            <input
              className='touch'
              placeholder='Tablet Quantity'
              onChange={(e) =>
                setData({ ...data, tabletQuantity: e.target.value })
              }
            ></input>
            <input
              className='touch'
              placeholder='Tablet Price'
              onChange={(e) => setData({ ...data, tabletBill: e.target.value })}
            ></input>
            <input
              className='touch'
              placeholder='Reason'
              onChange={(e) =>
                setData({ ...data, tabletReason: e.target.value })
              }
            ></input>
            <input
              className='touch'
              placeholder='Doctor'
              onChange={(e) =>
                setData({ ...data, tabletDoctor: e.target.value })
              }
            ></input>
            <div
              className=''
              style={{
                padding: '10px',
                border: '1px solid black',
                textAlign: 'center',
                width: '20%',
                marginLeft: '35%',
                marginTop: '5%',
              }}
              onClick={onSubmit}
            >
              Submit
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Treatment;
