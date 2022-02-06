import { Route, Routes } from "react-router";

import { Main } from "./Main";

export const Pages = () => (
  <Routes>
    <Route path="/" element={<Main />} />
  </Routes>
);
