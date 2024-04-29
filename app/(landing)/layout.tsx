import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full overflow-auto">
      <div className="">{children}</div>
    </main>
  );
};

export default LandingLayout;
