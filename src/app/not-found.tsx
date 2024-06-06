'use client';
 
import { Metadata } from 'next';
import Error from 'next/error';

export const metadata: Metadata = {
  title: "Not Found",
  description: "Error 404 Page not found",
};
 
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}