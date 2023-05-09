import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <Box sx={{ width: 1, height: 1, display: "flex" }}>
      <Sidebar />
      <Box sx={{ width: 'calc(100% - 40px)', height: 1 }}>
        <Header />
        {children}
      </Box>
    </Box>
  );
}
