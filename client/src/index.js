import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./home/HomePage";
import CreatePage from "./create/CreatePage";
import RoomPage from "./room/RoomPage";
import NotFoundPage from "./NotFoundPage";
import JoinPage from "./room/JoinPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="room/:room_id" element={<RoomPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
