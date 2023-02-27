import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { DataContext } from "./componente2/contexto/DataContext";
import Unplash from "./componente2/Unplash/Unplash";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContext>
      <Unplash />
    </DataContext>
  </React.StrictMode>
);
