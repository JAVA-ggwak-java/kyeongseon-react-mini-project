import React from 'react'

const List = ({handleClick, DiaryData, setDiaryData}) => {


  
  return (
    <div className='bg-rose-100 p-8'>
      <div className='flex mb-3 '>
        <span className='w-1/6 text-center'>날짜</span><span className='w-5/6 text-left'>내용</span>
      </div>
      <hr className='bg-gray-950 h-px border-0'/>
    { DiaryData.map((data) => (
      <div key={data.id} className='flex mt-3 '>
        <span className='w-1/6 text-center'>{data.date}</span>
        <span className='w-4/6 text-left'>
          {data.content} 
        </span>
        <button className="w-1/6" onClick={() => handleClick(data.id)}>
          삭제
        </button>
        
        
      </div>
      ))}
    </div>
  )
}

export default List
