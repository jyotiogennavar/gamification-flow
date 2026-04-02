import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/app/layout/AppLayout";
import { GamificationPage } from "@/features/gamification/pages/GamificationPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<GamificationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}