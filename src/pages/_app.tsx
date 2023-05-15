import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import Layout from "~/components/Layout";
import Modal from "~/components/Modal";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Modal
        isOpen
        title="Testing modal"
        actionLabel="Submit"
        onSubmit={() => console.log("submit")}
        onClose={() => console.log("close")}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
