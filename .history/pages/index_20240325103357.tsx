export default function Helloworld(){
  return <>
    (
      
      <h1>here are all the users</h1>
    )
  </>
}
export async function user(){
  const user = await fetch("https://jsonplaceholder.typicode.com/users")
}
