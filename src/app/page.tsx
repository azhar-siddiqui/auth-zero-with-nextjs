import { auth0 } from "@/lib/auth0";
import Link from "next/link";

export default async function Home() {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <>
        {/* Redirects to Auth0 to sign up */}
        <Link href="/auth/login?screen_hint=signup">Signup</Link>
        <br />
        {/* Redirects to Auth0 to log in */}
        <Link href="/auth/login">Login</Link>
      </>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div>
        <p>Logged in as {session.user.email}</p>

        {/* Display user info (name, email, etc.) */}
        <h1>User Profile</h1>
        <pre>{JSON.stringify(session.user, null, 2)}</pre>

        {/* Ends the session and redirects to Auth0 to log out */}
        <Link href="/auth/logout">Logout</Link>
      </div>
    </div>
  );
}
