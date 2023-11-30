"use client";

import Link from "next/link";

import { useUserAuth } from "./_utils/auth-context";
 
export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    
    
    
    async function handleSignIn(){
        await gitHubSignIn();
    }
    

    async function handleSignOut(){
        await firebaseSignOut();
    }

    return(
        <main>
            <div>
                {user ? (
                    <div>
                        <p>
                        Welcome, {user.displayName} ({user.email})
                        </p>
                        <Link href="/week8/shopping-list"> The Shopping List</Link>
                        <button onClick={handleSignOut}> Sign Out </button>
                    </div>
                    
                ) :(
                    <button onCLick={handleSignIn} > Sign In </button>
                )
            }

                
            </div>
            

        </main>
       
        
    )
    
}