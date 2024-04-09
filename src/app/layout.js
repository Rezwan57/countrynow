import "./globals.css";
import Header from "./components/header";

export const metadata = {
  title: "CountryNow",
  description: "Search for the Countries of the World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header/>

        {children}

      </body>
      
    </html>
  );
}
