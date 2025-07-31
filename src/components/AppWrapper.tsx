import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ReactNode } from "react";

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  useScrollToTop();
  return <>{children}</>;
};

export default AppWrapper;