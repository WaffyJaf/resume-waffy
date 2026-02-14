import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-gradient-to-b bg-slate-950 text-white">
        <div className="relative">
          {/* Starfield Background */}
          <div
            className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%22100%22%20height=%22100%22%20viewBox=%220%200%20100%20100%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22%23FFFFFF%22%20fill-opacity=%220.2%22%3E%3Ccircle%20cx=%2210%22%20cy=%2210%22%20r=%221%22/%3E%3Ccircle%20cx=%2250%22%20cy=%2230%22%20r=%221.5%22/%3E%3Ccircle%20cx=%2280%22%20cy=%2260%22%20r=%221%22/%3E%3Ccircle%20cx=%2220%22%20cy=%2280%22%20r=%221.2%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30 pointer-events-none"
          ></div>
          <main className="flex-grow container  relative z-10">
            {children}
          </main>
          <footer className="p-4 text-center text-white bg-black/50 backdrop-blur-sm relative z-10">
            <p>© {new Date().getFullYear()} Waffy Portfolio. สงวนลิขสิทธิ์.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}