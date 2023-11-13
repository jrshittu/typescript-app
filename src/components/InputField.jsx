import React from 'react';
import './style.css';

const InputField = () => {
  return (
    <form className='input'>
      <input type="input" placeholder='Enter the task' className='input_box' />
      <button type='submit' className='input_submit'>Go</button>
    </form>
  )
}

export default InputField
