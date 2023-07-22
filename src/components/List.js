import React,{useState} from 'react'

const List = ({handleClick, DiaryData, setDiaryData, id, content, date}) => {
  console.log('List Component')
  console.log('DiaryData : ', DiaryData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  //넘기는 인자값이 많을 경우 함수를 생성해서 할수도 있음
  // const hanldeEdit = (data) => {setIsEditing(true); setId(data.id); setEditedContent(data.content); setDate(data.date)}

  const hanldeEdit = (id) => {setIsEditing(true); };
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
    localStorage.setItem('Diary', JSON.stringify(newDiaryData));
    setIsEditing(false);
  }


  if(isEditing){
    //수정버튼을 눌렀을 때
    return (
      <div className='bg-rose-100 p-1'>
        <div className='flex items-center justify-between w-full mt-2'> 
            <div className='flex w-5/6 items-center'>
              <span className='w-1/6 text-center'>{date}</span>
              <form onSubmit={handleSubmit} className='w-5/6'>
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
      <div className='bg-rose-100 p-1'>
        <div className='flex items-center justify-between w-full mt-2'> 
          <div className='flex w-5/6 items-center'>
              <span className='w-1/6 text-center'>{date}</span>
              {/* <form onSubmit={handleSubmit} className='w-full'> */}
                <div
                  className='w-5/6 h-14  text-gray-500 break-words inline-block align-middle '
                >
                    {content}
                </div> 
              {/* </form> */}
          </div>
          <div className=" w-1/6" >
            <button className="w-1/2" onClick={() => hanldeEdit(id)}>
              수정
            </button>
            <button  onClick={() => handleClick(id)}>
              삭제
            </button>
          </div>
        </div>
      </div>
        
        
      
    )}
}

export default React.memo(List);
