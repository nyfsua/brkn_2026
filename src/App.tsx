import {
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SessionsPage from "./pages/SessionsPage";
import ArchivePage from "./pages/ArchivePage";
import DryStuffPage from "./pages/DryStuffPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/shop"
        element={<ShopPage />}
      />

      <Route
        path="/sessions"
        element={<SessionsPage />}
      />

      <Route
        path="/archive"
        element={<ArchivePage />}
      />

      <Route
        path="/dry-stuff"
        element={<DryStuffPage />}
      />
    </Routes>
  );
}