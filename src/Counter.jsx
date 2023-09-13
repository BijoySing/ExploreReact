import { useState } from 'react';

const Counter = () => {
    const [count , setValue]=useState(0);
    function addFunction(count){
        const newCount= count+1;
         setValue(newCount);
     }
      function reduceFunction(count){
        const newCount= count-1;
         setValue(newCount);
     }
    return (
        <div className='border-2 bg-green-600 rounded-xl p-5'>
            <h3>Counter:{count}</h3>
            <button className='btn' onClick={()=>addFunction(count)}> add</button>
        
           <button className='btn' onClick={()=>reduceFunction(count)}> reduce</button>
        </div>
    );
};

export default Counter;