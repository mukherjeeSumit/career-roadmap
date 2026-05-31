import "./globals.css";

export const metadata = {
  title: "Data Engineering Roadmap Generator",
  description:
    "Generate a personalized Data Engineering roadmap based on your current skills and career goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}