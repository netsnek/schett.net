import { LayoutProps } from "@atsnek/jaen";
import { useLocation } from "@reach/router";
import AppLayout from "../../components/AppLayout";
import { ContactModalProvider } from "../../services/contact";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const path = useLocation().pathname;

  return (
    <ContactModalProvider location={{ pathname: path, search: "" }}>
      <AppLayout path={path}>{children}</AppLayout>
    </ContactModalProvider>
  );
};

export default Layout;
