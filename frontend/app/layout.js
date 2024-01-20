import "./globals.css";

export const metadata = {
  title: "Netflix Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-0 m-0 bg-[#141414]">{children}</body>
    </html>
  );
}
