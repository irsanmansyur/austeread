import React from "react";
import { ContextWrapper } from "./Context";
import { RecoilRoot } from "recoil";
import IndexRoute from "./routes/index-route";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://0.0.0.0:3000/";
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
