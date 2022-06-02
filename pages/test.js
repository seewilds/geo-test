import Link from 'next/link'
import {Button} from 'react-bootstrap'
import { signIn, signOut, useSession, getSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return (
        <>
            <p>Not allowed to be here</p>
        </>
    )
  }
  return (
    <>
   <p>This is your page</p>     
    </>
  )
}
