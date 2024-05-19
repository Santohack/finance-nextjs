
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          
         <div className='h-screen justify-center  items-center flex '>
          
         {children}
         </div>
        </body>
      </html>
    </ClerkProvider>
  )
}