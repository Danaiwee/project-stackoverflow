import { auth, signOut } from "@/auth";
import React from "react";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <main className='pt-[100px]'>
      <h1 className='h1-bold'>Welcome to the world of Next.js</h1>
    </main>
  );
};

export default Home;
