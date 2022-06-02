import Link from 'next/link'

export default function Menu(){
    return (
        <>
        <Link href='/'><a>Home</a></Link> | <Link href='/about'><a>About</a></Link> | <Link href='/login'><a>Login</a></Link>
        </>

    )
}