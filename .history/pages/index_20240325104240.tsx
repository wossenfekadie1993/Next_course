export default function Helloworld(){
  return <>
    
      <h1>here are all the users</h1>
      <div></div>
    
  </>
}
export async function user(){
  const user = await fetch("https://jsonplaceholder.typicode.com/users");
  const data=await user.json()
  return {
    props:{
      
    }
  }
}
