export default function Helloworld({user}){
  return <>
      <h1>here are all the users</h1>
  </>
}
export async function getStaticProps(){
  const user = await fetch("https://jsonplaceholder.typicode.com/users");
  const data=await user.json()
  return {
    props:{
      users:data
    }
  }
}
