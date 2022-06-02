import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
      clientId: process.env.AWS_COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    })
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
})