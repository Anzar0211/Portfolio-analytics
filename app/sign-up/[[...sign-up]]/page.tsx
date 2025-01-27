import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

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
          src="https://www.freepik.com/free-vector/group-people-holding-crypto-currency-market-concept-flat-cartoon-illustration_21106221.htm#fromView=keyword&page=1&position=20&uuid=bbdc0ae8-bc23-4264-afcd-21d00cb4e3b5&new_detail=true&query=Trading+Png"
          alt="Stock Exchange Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default SignUpPage;
