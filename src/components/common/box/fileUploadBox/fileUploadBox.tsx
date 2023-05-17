import { Box } from "@mui/material";
import React from "react";
import UploadButton from "../../button/uploadButton/uploadButton";
import RefreshButton from "../../button/refreshButton/refreshButton";
import FileBox from "../fileBox/fileBox";
import DeleteButton from "../../button/deleteButton/deleteButton";

export default function FileUploadBox() {
  return (
    <Box width="100%" maxWidth="500px" minWidth="300px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box width="56px"></Box>
        <Box>upload files</Box>
        <Box display="flex">
          <UploadButton />
          <RefreshButton />
        </Box>
      </Box>
      <Box
        sx={{
          height: "400px",
          borderRadius: "3px",
          boxShadow: 1,
          backgroundColor: "#F0F0F0",
          overflow: "auto",
        }}
      >
        <Box
          display="flex"
          flexWrap="wrap"
          sx={{
            py: 6,
            gap: "10px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
          <FileBox>
            <DeleteButton />
          </FileBox>
        </Box>
      </Box>
    </Box>
  );
}
