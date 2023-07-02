import React,{useState} from 'react'

const List = ({handleClick, DiaryData, setDiaryData}) => {

  console.log('DiaryData : ', DiaryData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  //글 수정
  const handleEditChange = (event) => {
    setEditedContent(event.target.value);
  }

  //수정된 글 저장
  const handleSubmit = (event) =>{
    event.preventDefault();
    let newDiaryData = DiaryData.map(data =>{
      if(data.id === id){
        data.content = editedContent;
      }
      return data;
    })
    setDiaryData(newDiaryData);
    localStorage.setItem('DiaryData', JSON.stringify(newDiaryData));
    setIsEditing(false);
  }


  if(isEditing){
    //수정버튼을 눌렀을 때
    return (
      <div className='bg-rose-100 p-8'>
        <div className='flex mb-3 '>
          <span className='w-1/6 text-center'>날짜</span><span className='w-5/6 text-left'>내용</span>
        </div>
        <hr className='bg-gray-950 h-px border-0'/>
        <div className='flex items-center justify-between w-full mt-2'> 
            <div className='flex w-5/6 items-center'>
              <span className='w-1/6 text-center'>{date}</span>
              <form onSubmit={handleSubmit} className='w-full'>
                <input 
                  value={editedContent}
                  onChange={handleEditChange}
                  className='w-full px-3 py-2 text-gray-500 rounded'
                  />
              </form>
            </div>
            <div className="w-1/6 " >
              <button className="w-1/2" onClick={handleSubmit}>
                저장
              </button>
              <button  onClick={() => {setIsEditing(false); handleClick(id)}}>
                삭제
              </button>
            </div>
          </div>
      </div>
    )
  }else{
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
          <div className="w-1/6" >
          <button className="w-1/2" onClick={() => {setIsEditing(true); setId(data.id); setEditedContent(data.content); setDate(data.date)}}>
            수정
          </button>
          <button  onClick={() => handleClick(data.id)}>
            삭제
          </button>
          </div>
        </div>
        ))}
      </div>
    )
  }
}

export default List
