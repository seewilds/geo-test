import Link from 'next/link'
import {Button} from 'react-bootstrap'
import { signIn, signOut, useSession, getSession } from 'next-auth/react'
// https://darrenwhite.dev/blog/nextjs-authentication-with-next-auth-and-aws-cognito

export default function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return (
        <>
            <p>Access Denied</p>
                <Button
                  //type="submit"
                  variant="warning"
                  //className="inline-flex items-center justify-center w-1/2 mt-12 rounded-md border border-transparent px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => signIn('cognito')}
                >
                  Sign In
                </Button>
        </>
    )
  }
  return (
    <>
   <p>Starting to work with NextJs</p>
   <Button
      //type="submit"
      variant="danger"
      //className="inline-flex items-center justify-center w-1/2 mt-12 rounded-md border border-transparent px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={() => signOut('cognito')}
    >
      Sign Out
    </Button>        
    </>
  )
}
