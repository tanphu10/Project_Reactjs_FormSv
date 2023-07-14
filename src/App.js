import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Templates/Home";
import Service from "./Pages/service/Service";
import Contact from "./Pages/contact/Contact";
import ReactForm from "./Pages/reactForm/ReactForm";
import Page404 from "./Pages/Page404/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="form" element={<ReactForm />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
