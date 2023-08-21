import './App.css';
import Home from './views/Home';
import AppNav from './components/AppNav';
import Post from './components/Post';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <div className="App">
      <AppNav />
      <AppRoutes />
      <Post />
      <Home />
    </div>
  );
}

export default App;
