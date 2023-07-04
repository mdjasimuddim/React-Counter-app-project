import React from 'react'

export default function Index() {
    const handleChildClick = (event) => {
        event.stopPropagation();
        console.log('call from child', event);
      }
      const handleParentClick = (event) => {
        console.log('call from parent', event);
      }
  return (
    <div className='parent' onClick={handleParentClick}>
      <h1>welcome to my world</h1>
      <button onClick={handleChildClick}>+</button>
    </div>
  )
}
