export default function Helloworld({users}:any){
  return  <>
  <h1>Here are all the users</h1>
  {users.map((users) => {
    return (
      <div key={user.id}>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    );
  })}
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
