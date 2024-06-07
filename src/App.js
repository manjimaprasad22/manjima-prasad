import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div > 
        {loading ? (
        <Loader />
      ) : (
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
      )}
    </div>
  );
}

export default App;
