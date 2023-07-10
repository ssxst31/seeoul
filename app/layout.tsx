export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head></head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
