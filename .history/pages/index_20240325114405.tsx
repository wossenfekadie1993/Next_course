export default function Users({user}:any){
  return (
    <>
    <h1>all user list</h1>
      {
        users.map((user)=>{
          return (
            <div key={user.id}>
              <p1>user</p1>
            </div>
          )
        })
      }
      
    </>
  )
}
 export async function getServerProps(){
  const response=await fetch("https://jsonplaceholder.typicode.com/users")
  const data =await response.json()

  return {
    props:data
  }
}