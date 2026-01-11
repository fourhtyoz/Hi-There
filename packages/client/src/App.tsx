// import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Todos from './Todos';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { io } from "socket.io-client";
// import { useState, useEffect } from "react";


const queryClient = new QueryClient();
// const socket = io("http://localhost:4000");

function App() {
  // const [messages, setMessages] = useState<string[]>([]);
  // useEffect(() => {
  //   socket.emit('hello')
  //   socket.on("message", (message: string) => {
  //     setMessages((prevMessages: string[]) => [...prevMessages, message]);
  //   });

  //   return () => {
  //     socket.off("receiveMessage");
  //   };
  // }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
      <ReactQueryDevtools initialIsOpen={false} />
    {/* <div>
      {messages.map((msg, index) => (<div key={index}>{msg}</div>))}
    </div> */}
    </QueryClientProvider>
  );
}

export default App;