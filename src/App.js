import './App.css';
import Home from './views/Home';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <div className="App">
      <AppNav />
      <AppRoutes />
      <Home />
    </div>
  );
}

export default App;
