import Head from "next/head";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import React from "react";

export default function Home() {
  const [todoList, setTodoList] = React.useState<{ name: string; status: boolean }[]>([]);
  const addTodoTask = (todoTask: { name: string; status: boolean;}) => {
    setTodoList(prevTodoList => [...prevTodoList, todoTask]);
  };
  return (
    <>
      <Head>
        <title>Todo</title>
        <meta name="description" content="Generated by Todo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Todo App</h1>
        <TodoForm addTodoTask={addTodoTask} />
        <br />
        <br />
        <TodoList todoList={todoList} />
      </main>
    </>
  );
}
