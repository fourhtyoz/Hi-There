// import React from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { io } from "socket.io-client";
import { useState, useEffect } from "react";


// const queryClient = new QueryClient();
const socket = io("http://localhost:4000");

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.emit('hello')
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);
  return (
    <div>
      {messages.map((msg, index) => (<div key={index}>{msg}</div>))}
    </div>
  //   <QueryClientProvider client={queryClient}>
  //   </QueryClientProvider>
  );
}

export default App;