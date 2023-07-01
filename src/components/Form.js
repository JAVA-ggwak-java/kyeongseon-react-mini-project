import React from 'react'
import './Form.css'
const Form = ({value, setValue, handleSubmit}) => {

  const handleChange = (e) => {
    setValue(e.target.value);
  }


  return (
    <form onSubmit={handleSubmit} className='flex space-x-4 mb-8'>
      <input
        type="text"
        name="diary"
        placeholder='오늘의 한줄 일기를 작성하세요'
        onChange={handleChange}
        className='w-5/6 h-14 indent-3 bg-rose-100 
        focus:outline-none focus:border-rose-300 border
        border-rose-200  rounded-md text-sm shadow-sm drop-shadow-lg'
        value={value}
        />
        <input
          type="submit"
          value="입력"
          className='h-14 w-1/6 rounded-full bg-rose-100 hover:bg-rose-200
          drop-shadow-lg'
          />
    </form>
  )
}

export default Form
