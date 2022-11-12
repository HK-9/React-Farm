import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App(){
    const [state,setState] = useState(0)
    return(
        <div>
          <button onClick={()=> {
            setState(state+1);
          }} >button</button>
          <h1>Count {state}</h1>
        </div>
    )
}

export default App;