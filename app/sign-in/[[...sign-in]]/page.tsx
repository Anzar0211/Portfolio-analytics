import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import SignInSvg from "../../../public/signin.svg";

export default function SignInPage() {
  return (
    <div className="flex h-screen">
      {/* Left Side: SignIn Form */}
      <div className="flex-1 flex justify-center items-center bg-background">
        <SignIn afterSignInUrl="/dashboard" />
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 hidden lg:block relative">
        <Image
          src={SignInSvg}
          alt="Sign In Image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
