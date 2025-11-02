import React from "react";
import "./globals.css";
import { inter } from "./ui/fonts";
interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* <Header/> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
