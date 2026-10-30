// import "./globals.css";
// import { Geist, Geist_Mono } from "next/font/google";



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (


    
    <html
      lang="en"
    //   className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        <h1>this is a products section</h1>
        {children}</body>
        {/* <h1>this is footer</h1> */}
    </html>
  );
}
