import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Add any global styles or components here */}
      <div className="flex flex-col min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
