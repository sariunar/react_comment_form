import './App.css';
import React, { useState } from 'react';

function App() {
  const [arr, setArr] = useState([]);
  const [value, setValue] = useState('');

  const result = arr.map((element, index) => {
    return <p key={index} className='addCom'>{element}</p>;
  });

  function checkSpam() {
    let comment = { value }.value;
    comment = comment.replace(/viagra/gi, "***");
    comment = comment.replace(/xxx/gi, "***");
    return comment;
  }

  return (
    <div className="App" >
      <form className="form">
        <div className='form_greeting'>
          <p>Hi</p>
          <p>how are you?</p>
          <div id="container"></div>
        </div>
        <div>{result}</div>
        <div className="divComment">
          <textarea name="comment" className="comment" value={value} onChange={event => setValue(event.target.value)}></textarea>
          <input type="button" className="btn" value="Send" onClick={event => setArr([...arr, checkSpam()], setValue(''))} />
        </div>
      </form>
    </div >
  )
}

export default App;