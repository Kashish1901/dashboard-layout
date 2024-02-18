import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Help from "./Help";
import Articles from "./Articles";
import Book from "./Book";
import People from "./People";
import Sidebar from "./Sidebar";
import Article from "./Article";
ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Sidebar />
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/articles" exact element={<Articles />} />
      <Route path="/help" exact element={<Help />} />
      <Route path="/books" exact element={<Book />} />
      <Route path="/people" exact element={<People />} />
      <Route path="/articles/:slug" element={<Article />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
