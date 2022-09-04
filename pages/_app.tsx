import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import wrapper from "../store/configStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DeviceDetect from "../lib/DeviceDetect";

declare global {
  interface Window {
    kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DeviceDetect>
        <Component {...pageProps} />
      </DeviceDetect>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}
export default wrapper.withRedux(MyApp);
