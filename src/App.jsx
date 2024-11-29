import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./components/pages/frontend/Quiz";
import Question from "./components/pages/backend/questions/Question";
import { StoreProvider } from "./components/store/storeContext";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Quiz />} />
          <Route path="/admin/questions" element={<Question />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
