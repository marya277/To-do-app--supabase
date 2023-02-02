import './App.css'
import { useNavigate } from "react-router-dom";
import AppRouter from './AppRouter'
import { supabaseClient } from './supabase/Client'
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, [navigate]);


  return (
    <div className="App">
     
 <AppRouter />
    </div>
  )
}

export default App
