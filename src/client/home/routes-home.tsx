import { Route, Routes } from "react-router";
import IndexPage from "./index-page";

export default function RoutesHome() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
}
