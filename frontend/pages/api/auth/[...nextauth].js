import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
dotenv.config();

const uri = process.env.MONGO_URI


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" }      },

     async authorize (credentials, req) {
  if (typeof credentials !== "undefined") {
    const {  username, password } = credentials;
    let new_user = null


    try{
      const client = await MongoClient.connect(uri || '')
      const users =  client.db().collection('users');


      const user = await users.findOne({ username : username });

      if (!user) {
        throw new Error("No user found");
      }

      const isMatch =  await bcrypt.compare(password, user.password);
        if (!isMatch) {

          throw new Error("Invalid Password");
        }


      if (user) {
        new_user = {
          username: user.username
        };
      }
      else{
        throw new Error("No user found")
      }
    } catch (error) {
       throw new Error("Either the user does not exist or the password is incorrect");
    }

    return new_user;
  }
  return null; // Return null if credentials is undefined
}



    })
    
  ],
  session: { strategy: "jwt" },
  secret: "secret",
  callbacks: {
    async jwt({ token, user }) {
        if (user) {
            token.username = user.username;
            token.id = user.id;
                  return token;

        }

      return token;
    },
    async session({ session, token }) {
      if (token?.username) {
        session.user = { username: token.username};
        
      }
      return session;
    }
    
  }

}


const handler = NextAuth(authOptions)

export default handler
