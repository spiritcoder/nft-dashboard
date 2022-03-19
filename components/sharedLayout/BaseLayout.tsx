import React, { Fragment, ReactNode, useContext } from "react";
import { TheHeader } from "../layout/TheHeader";
import TheSideBar from "../layout/TheSideBar";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="bg-admin-blue">
      <TheSideBar />
      <TheHeader />
      <div className="ml-[250px] bg-white p-10 border-l border-white/50">{children}</div>
    </div>
  );
};
