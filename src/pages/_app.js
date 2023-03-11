// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import './styles/hubpage.module.css'
import "./styles/global.scss";
import "./styles/components/index.scss";
import NavbarCustom from "@/components/NavbarCustom";
import { AuthProvider } from "../util/auth";
import { QueryClientProvider } from "../util/db";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />



export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
    /*
    <QueryClientProvider>
      <AuthProvider>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="https://uploads.divjoy.com/logo.svg"
          />

          <Component {...pageProps} />
        </>
      </AuthProvider>
    </QueryClientProvider>*/
  );
}
