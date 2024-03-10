import { useState } from "react";
import { Routes, useLocation } from "react-router-dom";

// TopBarProgress.config({
//   barColors: {
//     0: "#fff",
//     "1.0": "#fff",
//   },
//   shadowBlur: 5,
// });

export default function CustomRouter({ children }) {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  return (
    <>
      {/* {progress && <TopBarProgress />} */}
      <Routes>{children}</Routes>
    </>
  );
}
