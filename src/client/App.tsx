import { ContextWrapper } from "./Context";
import { RecoilRoot } from "recoil";
import axios from "axios";

axios.defaults.baseURL = "http://austeread-api.grendy.dev/api/";
axios.defaults.withCredentials = true;
export const App = ({ children }: any) => {
  return (
    <RecoilRoot>
      <ContextWrapper>{children}</ContextWrapper>
    </RecoilRoot>
  );
};

export default App;
