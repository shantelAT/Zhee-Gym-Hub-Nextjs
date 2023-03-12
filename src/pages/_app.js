// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import './styles/hubpage.module.css'
import "./styles/global.scss";
import "./styles/components/index.scss";
import NavbarCustom from "@/components/NavbarCustom";
import { AuthProvider } from "../util/auth";
import { QueryClientProvider } from "../util/db";



export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>

    <Component {...pageProps} />
    </AuthProvider>

    /*
    <QueryClientProvider>
      <AuthProvider>
       
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
