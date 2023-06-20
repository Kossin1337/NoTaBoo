import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider, type SessionProviderProps } from "next-auth/react"

/* COMPONENTS */
import Layout from "~/components/Layout";
import LoginModal from "~/components/modals/LoginModal";
import RegisterModal from "~/components/modals/RegisterModal";

import "~/styles/globals.css";

// interface CustomAppProps extends AppProps {
//   pageProps: {
//     session: {   
//       session: {
//         expires: Date // This is the expiry of the session, not any of the tokens within the session
//       }
//       user: {
//         name: string
//         email: string
//         image: string
//       },
//       token: string;
//     };
//     // ... other properties
//   };
// }

interface Props extends AppProps {
  // Component: NextComponentType<NextPageContext, any, any>;
  pageProps: SessionProviderProps
}


const App: React.FC<Props> = ({ Component, pageProps }) => {
  const { session, ...otherPageProps } = pageProps;

  return (
    <SessionProvider session={session}>
      <Toaster />
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...otherPageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default App

// AppType<{ session: Session | null }> = ({
//   Component,
//   pageProps: { session, ...pageProps },
// })
