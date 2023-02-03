import { ContextWrapper } from "./Context";
import { RecoilRoot } from "recoil";
import axios from "axios";
import { CookiesProvider } from "react-cookie";

axios.defaults.baseURL = "http://austeread-api.grendy.dev/api/";
axios.defaults.withCredentials = true;
export const App = ({ children }: any) => {
  return (
    <RecoilRoot>
      <CookiesProvider>
        <ContextWrapper>{children}</ContextWrapper>
      </CookiesProvider>
    </RecoilRoot>
  );
};

export default App;
