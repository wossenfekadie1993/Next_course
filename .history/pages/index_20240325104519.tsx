export default function Helloworld({users}){
  return <>
      <h1>here are all the users</h1>
  </>
}
export async function user(){
  const user = await fetch("https://jsonplaceholder.typicode.com/users");
  const data=await user.json()
  return {
    props:{
      users:data
    }
  }
}
