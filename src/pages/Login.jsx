/*import React, { useState } from "react";
//import { Client } from "../supabase/Client";
import { createClient } from "@supabase/supabase-js";


const Login = () => {
    const [email, setEmail] = useState("");
    const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
        const resultado = await createClient.auth.signIn({
        email,
        });
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
    };
    return (
    <div className="container-auth">
        <form onSubmit={HandleSubmit}>
        <input
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">send</button>
    </form>
    </div>
    );
};
export default Login;*/
import { useState, useEffect } from 'react'
import { supabaseClient } from '../supabase/Client'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabaseClient.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (supabaseClient.auth.user()) {
      navigate("/");
    }
    console.log("called");
  }, [navigate]);

  return (
    <div className=" row container mx-auto  my-5 wrapper">
      <div className="col my-5 form-widget" aria-live="polite">
        <h1 className="text-center text-3xl text-primary py-3">LOGIN</h1>
        <p className="text-xs pb-3">Sign in via magic link with your email below</p>
        {loading ? (
          'Sending magic link...'
        ) : (
          <form onSubmit={handleLogin}>
            <input type="email" 
              name="email" 
              className="mt-1 px-3 py-2" 
              placeholder="your@email.com"
              id="website"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
               <button className=" btn btn-primary my-3  text-xs magic" >
               Send magic link
              </button>
            
          </form>
          
        )}
        
      </div>
      <div  className="col bg-login "></div>
    </div>
  )
}

export default Login;