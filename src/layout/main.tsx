// ========== packages ========== \\
import React, { ReactNode } from "react";

// ========== components ========== \\
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
