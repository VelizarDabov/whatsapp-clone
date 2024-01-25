"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "@/firebase";
import { useEffect } from "react";
import Loading from "@/components/Loading";
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";
import { serverTimestamp } from "firebase/firestore";
export default function Home() {
  const [user, loading] = useAuthState(auth);

  // Update user info
  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          timestamp: serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return (
    <main>
      <Sidebar />
    </main>
  );
}
