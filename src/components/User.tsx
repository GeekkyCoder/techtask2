import {useState,useEffect} from "react"

type UserType = {
   firstName:string,
   lastName:string,
   city:string,
   state:string,
   country:string   
}

type CounterProp = {
  counter:number
}

const User = (prop:CounterProp) => {

  const [paginatedUsers,setPaginatedUsers] = useState<UserType[] | []>([])


  useEffect(() => {
    const fetchPagintedUsers = async () => {
      try{
       const response = await fetch(`https://randomuser.me/api?page=${prop.counter}&result=${prop.counter}`) 
       const reponseUsers = await response.json()
       const modfifiedUsers = reponseUsers.results.map((result:any) => {
           return {
             firstName:result?.name?.first,
             lastName:result?.name?.last,
             city:result?.city,
             state:result?.state,
             country:result?.country,
             street:result?.location?.street?.name
           }
       })
       setPaginatedUsers(modfifiedUsers)
      }catch(err) {
        console.log(err)
      }
   }
   fetchPagintedUsers()
  }, [prop.counter])
  

  return (
    <div>
      {paginatedUsers?.map((user:any) => {
        return <div> 
           <p>FirstName: {user?.firstName}</p>
           <p>LastName: {user?.lastName}</p>
           <p>city: {user?.city}</p>
           <p>state: {user?.state}</p>
           <p>country: {user?.country}</p>
           <p>country: {user?.street}</p>
        </div>
      })}
    </div>
  );
};

export default User;
