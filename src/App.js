import React, {useState, useCallback} from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Form from "./components/Form";
import List from "./components/List";
//만약 localStorage에 key(Diary)로 저장된 value가 있을 경우 그것을 가져오도록 
//텍스트 형태로 저장되어있으므로 JSON.parse()로 바꿔줌
const initiaMyDiary = localStorage.getItem("Diary") ? JSON.parse(localStorage.getItem("Diary")):[];

function App() {
  console.log('App Component')
  const[DiaryData, setDiaryData] = useState(initiaMyDiary);
  // const[DiaryData, setDiaryData] = useState([]);
  const[value, setValue] = useState("");

  //List에서 handleClick를 사용하기 때문에 리랜더링발생 --> 성능저하
  //useCallback() : DiaryData가 변하지 않는다면 함수는 새로 생성되지 않음(새로 생성되지 않으므로 메모리에 새로 할당되지 않고 동일 참조값을 사용)
  const handleClick = useCallback((id) => {
    let newDiaryData = DiaryData.filter((data) => data.id !== id); //id가 같다면 삭제하도록
    setDiaryData(newDiaryData);
    console.log('newDiaryData',newDiaryData);
    //setDiaryData를 이용해서 DiaryData를 바꿔줄 떄, localStorage도 같이 바꿔주기
    //객체나 배열을 저장해줄시에는 JSON.stringify를 이용해서 텍스트로 변환해준 후 저장
    //setItem('key', 'value') -> value가 객체일때 Object로 저장되므로 아래와 같이 JSON.stringify()를 사용해주기
    localStorage.setItem('Diary', JSON.stringify(newDiaryData));
    },
    [DiaryData] 
    )
  // const handleClick = (id)=>{
  //   console.log("handleClick", id);
  //   let newDiaryData = DiaryData.filter((data) => data.id !== id);
  //   setDiaryData(newDiaryData);
  //   console.log('newDiaryData', newDiaryData);
  // }

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
        //원래있던 DiaryData를 넣어준 후 newDiary를 넣어줌
        localStorage.setItem('Diary', JSON.stringify([...DiaryData, newDiary]));
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
