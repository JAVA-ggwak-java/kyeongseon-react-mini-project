import React from 'react'
import List from './List'

const Lists = ({handleClick, DiaryData, setDiaryData}) => {
  console.log("Lists DiaryData : ", DiaryData);
  return (
    <div>
      <div className='bg-rose-100 p-8'>
        <div className='flex mb-3 '>
          <span className='w-1/6 text-center'>날짜</span><span className='w-5/6 text-left'>내용</span>
        </div>
        <hr className='bg-gray-950 h-px border-0'/>
      { DiaryData.map((data) => (
        <List
          id={data.id}
          date = {data.date}
          content = {data.content}
          setDiaryData={setDiaryData}
          handleClick={handleClick}
          DiaryData={DiaryData}
        />
        ))}
      </div>
    </div>
  )
}

export default React.memo(Lists);
