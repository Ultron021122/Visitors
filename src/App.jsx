import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EnterOne } from './screens/EnterOne';
import { EnterTwo } from './screens/EnterTwo';
import { EnterThree } from './screens/EnterThree';
import { PageNotFound } from './screens/PageNotFound';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/1" exact element={<EnterOne />} />
        <Route path="/2" element={<EnterTwo />} />
        <Route path="/3" element={<EnterThree />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
