import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import "aos/dist/aos.css";

export const metadata: Metadata = {
    title: "Perkpro",
    description: "Find, Rent, or Buy Your Dream Property— Easier & Faster!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}

