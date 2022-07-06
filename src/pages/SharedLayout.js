import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";

export default function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
