import {useState,useEffect} from "react"
import "./App.css";
import User from "./components/User";

function App() {
  //TASK 1 COUNTER
  const [counter,setCounter] = useState<number>(0)
  const [users,setUsers] = useState([])

 function increment() {
   setCounter(prevCount => prevCount + 1)
 }

 function decrement() {
  setCounter(prevCount => prevCount - 1)
}

useEffect(() => {
   const fetchUsers = async () => {
      try{
       const response = await fetch("https://randomuser.me/api") 
       const reponseUsers = await response.json()
       setUsers(reponseUsers)
      }catch(err) {
        console.log(err)
      }
   }
   fetchUsers()
},[])



  //TEST 2 FETCHING USER
  // https://randomuser.me/api

  //TEST 3 FETCHING USER WITH PAGINATION
  // https://randomuser.me/api?page=1&result=1

  return (
    <div className="App">
      <p>COUNTER: {counter} </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
     <User counter={counter}/>
      
    </div>
  );
}

export default App;
