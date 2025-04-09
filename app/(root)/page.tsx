import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import React from "react";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <main className='pt-[100px]'>
      <h1 className='h1-bold'>Welcome to the world of Next.js</h1>

      <form
        action={async () => {
          "use server"
          
          await signOut({redirectTo: ROUTES.SIGN_IN}); 
        }}
      >
        <Button type='submit'>Log out</Button>
      </form>
    </main>
  );
};

export default Home;
