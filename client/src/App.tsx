import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="px-[60px]">
      <ToastContainer />

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
