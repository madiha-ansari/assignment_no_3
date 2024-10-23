import React from 'react'

const Form = () => {
  return (
    <div>
        <div className='p-8 bg-zinc-600'>
      <input className='bg-slate-500' required type="text" name="" id="" placeholder='Enter your name' />
      <br />
      <br />
      <input className='bg-slate-500' required type="text" name="" id="" placeholder='Enter your Father name' />
      <br /><br />
      <textarea name="" id="" placeholder='feedback' className='bg-slate-500 h-30 w-40'></textarea>
<br /><br />
<input className='bg-zinc-700  w-20 text-white' type="submit" name="" id="" />

      </div>
    </div>
  )
}

export default Form
