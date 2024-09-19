"use client";
import { ClipLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "100px auto",
};
const Loading = () => {
  return (
    <ClipLoader
      color="#3b82fb"
      size={150}
      aria-label="loading spinner"
      cssOverride={override}
    />
  );
};

export default Loading;
