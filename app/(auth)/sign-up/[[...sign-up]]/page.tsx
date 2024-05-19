import { SignUp,ClerkLoading,ClerkLoaded } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid min-h-screen items-center justify-center grid-cols-1 lg:grid-cols-2">
     <div  className=" flex h-full  lg:flex flex-col items-center justify-center">
     <ClerkLoading >
        <Loader2 className="h-8 w-8 animate-spin" />
      </ClerkLoading>
     <ClerkLoaded>
     <SignUp path="/sign-up" />
     </ClerkLoaded>
     </div>
     <div className="h-full hidden lg:flex items-center bg-orange-300 justify-center">
    <Image src="/fin.svg" alt="login" width={500} height={500} />
     </div>
    </div>

  )
}