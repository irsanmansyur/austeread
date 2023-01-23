import { ContextWrapper } from "./Context";
import { RecoilRoot } from "recoil";
import IndexRoute from "./routes/index-route";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://149.102.136.93:3023/api/";
export const App = () => {
  return (
    <RecoilRoot>
      <ContextWrapper>
        <IndexRoute />
      </ContextWrapper>
    </RecoilRoot>
  );
};

export default App;
