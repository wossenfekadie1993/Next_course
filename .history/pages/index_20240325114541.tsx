export default function Users({users}:any){
  return (
    <>
    <h1>all user list</h1>
      {
        users.map((user:any)=>{
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
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