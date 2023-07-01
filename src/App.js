import React, {useState, useCallback} from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Form from "./components/Form";
import List from "./components/List";

// const initiaMyDiary = localStorage.getItem("Diary") ? JSON.parse(localStorage.getItem("Diary")):[];

function App() {

  // const[DiaryData, setDiaryData] = useState(initiaMyDiary);
  let[DiaryData, setDiaryData] = useState([
    // {
    //   id:"1",
    //   date:"7/1",
    //   content: "오늘은 피부과를 갔다"
    // },
    // {
    //   id:"2",
    //   date:"7/2",
    //   content: "오늘은 용산를 갔다"
    // }

  ]);
  const[value, setValue] = useState("");


  
  // const handleClick = useCallback((id) => {
  //   let newDiaryData = DiaryData.filter((data) => data.id !== id); //id가 같다면 삭제하도록
  //   setDiaryData(newDiaryData);
  //   // console.log('newDiaryData',newDiaryData);
  //   // localStorage.setItem('Diary', JSON.stringify(newDiaryData));
  //   },
  //   [DiaryData] 
  //   )
  const handleClick = (id)=>{
    console.log("handleClick", id);
    let newDiaryData = DiaryData.filter((data) => data.id !== id);
    setDiaryData(newDiaryData);
    console.log('newDiaryData', newDiaryData);
  }

    const handleSubmit = (e) =>{
      e.preventDefault();
      let date = new Date();
      const month = date.getMonth() +1 ;
      const day = date.getDate();
      //새로운 일기
      let newDiary = {
        //날짜 내용
        id : uuidv4(),
        date : `${month}/${day}`,
        content : value,
      };
      console.log(newDiary)
      //setter에서 이전 state를 가지고 오기 위해서 인수에 함수를 이용 prev : 이전 데이터, 새로운 데이터
      setDiaryData(prev => 
        [...prev, newDiary]
        );
      //   localStorage.setItem('DiaryData', JSON.stringify([...DiaryData, newDiary]));
      setValue("");
    }
  

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <div className="w-full p-6 m-4 rounded shadow md:w-3/4 md:max-w-xl lg:w-3/4">
        <div className = "flex mb-5 justify-center">
          <h1>한줄 일기</h1>
        </div>
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
        <List handleClick={handleClick} DiaryData={DiaryData} setDiaryData={setDiaryData}/>
      </div>
    </div>
  );
}

export default App;
