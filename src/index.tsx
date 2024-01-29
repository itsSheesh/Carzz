// ========== packages ========== \\
import ReactDOM from "react-dom/client";

// ========== styles ========== \\
import "./index.css";

// ========== components ========== \\
import App from "./App";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <main className="font-Poppins">
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <App />
    </DevSupport>
  </main>
);
