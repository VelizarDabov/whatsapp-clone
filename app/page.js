'use client'
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";
import { auth } from "@/firebase";

import { useAuthState } from "react-firebase-hooks/auth";


export default function Home() {
  const [user] = useAuthState(auth)

  if(!user) return <Login />
  return (
    
    <main >
    <Sidebar />
    </main>
  );
}
