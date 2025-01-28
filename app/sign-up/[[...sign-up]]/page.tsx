import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import SignUpSvg from "../../../public/signup.svg";

const SignUpPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side: SignUp Form */}
      <div className="flex-1 flex justify-center items-center bg-background">
        <SignUp afterSignUpUrl="/dashboard" />
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 hidden lg:block relative">
        <Image
          src={SignUpSvg}
          alt="Sign Up Image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default SignUpPage;
