
import {client} from "@repo/db/client"


export default async function Home() {
  const user = await client.user.findFirst()
  return (
    <>
      <h1>User Information</h1>
      <p>Username: {user?.username}</p>
      <p>Password: {user?.password}</p>
    </>
  );
}
