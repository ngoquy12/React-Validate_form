import { Component, useState } from "react";
import Form from "./components/ListUSer";
import ListUSer from "./components/ListUSer";
import DemoReducer from "./components/DemoReducer";
import FocusForm from "./components/FocusForm";
import ChatRoom from "./components/ChatRoom";
import TodoList from "./components/TodoList";
import TodoApp from "./components/TodoApp";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const toggle = () => {
    setShowForm(!showForm);
  };
  return (
    <div style={{ padding: 20 }}>
      {/* <ListUSer/> */}
      {/* <DemoReducer/> */}
      {/* {showForm && <FocusForm />} */}
      {/* <button onClick={toggle}>Toggle</button> */}
      {/* <ChatRoom/> */}
      {/* <TodoList/> */}
      <TodoApp/>
    </div>
  );
}
