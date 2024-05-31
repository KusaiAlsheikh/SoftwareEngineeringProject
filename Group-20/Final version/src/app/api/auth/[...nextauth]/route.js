import NextAuth, {getServerSession} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import users from "../../../../../public/db/users.json";

export const authOptions = {
  secret: "randomasssecret",
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        console.log("credentials: ", email, password);

        if (email && password) {
          const user = users.find(user => user.email === email && user.password === password);
          console.log("user: ", user);
          return user;
        }

        return null
      }
    })
  ],
};

export async function isAdmin() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  const user = users.find(user => user.email === userEmail);
  if (!user) {
    return false;
  }
  return user.isAdmin;
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }