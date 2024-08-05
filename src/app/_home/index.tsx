import React from "react";
import Desktop from "./desktop";
import DesktopLayout from "@/components/layout/desktop";
import MobileLayout from "@/components/layout/mobile";
import Mobile from "./mobile";

function Home() {
  return (
    <div>
      <DesktopLayout>
        <Desktop />
      </DesktopLayout>
      <MobileLayout>
        <Mobile />
      </MobileLayout>
    </div>
  );
}

export default Home;
