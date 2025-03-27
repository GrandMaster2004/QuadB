import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { logout } from "./redux/actions/authActions";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Auth from "./components/Auth";
import "./App.css";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Task Manager</h1>
          {isAuthenticated && (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          )}
        </header>

        <main className="app-main">
          <Routes>
            <Route
              path="/login"
              element={!isAuthenticated ? <Auth /> : <Navigate to="/" />}
            />
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <>
                    <TaskInput />
                    <TaskList />
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
