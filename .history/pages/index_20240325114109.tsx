export default function Users({user}:any){
  return (
    <>
    <h1>all user list</h1>
    
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