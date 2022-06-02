import '../styles/globals.css'
import Better from '../src/components/better'
import 'bootstrap/dist/css/bootstrap.css'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps:{session, ...pageProps} }) {
  return(
    <> 
    <Better/>
    <SessionProvider session={session}>
    
    <Component {...pageProps} />
    </SessionProvider>
    </>

  )
}

export default MyApp
