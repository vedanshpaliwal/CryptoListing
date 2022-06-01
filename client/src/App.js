import './App.css';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import StockTable from './component/Stocktable/StockTable';
import View from './component/View/View';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const Apps = () => {
  let routes = useRoutes([
    { path: "/", element: <StockTable /> },
    { path: "view", element: <View /> },

  ]);
  return routes;
};
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Router>
        <Apps />
      </Router>
      {/* <View /> */}
    </div>
  );
}

export default App;
