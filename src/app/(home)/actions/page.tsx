import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { Container } from "postcss";
import { CustomButton } from "./CustomButton";
import AddButton from "./AddTodoClient";
// vulnerabilities
// Next.js will include it in the headers if we do closure
export default async function Page() {
  const c = await fetchCredentials();

  async function serverAction(fd: FormData) {
    "use server";
    const items = processStuff(c.userSecret);
  }
}

const todos: string[] = ["SERVER TODO"];

export const metadata = {
  title: "Server Actions",
  description: "Actions",
};

export default function Home() {
  async function addTodo(data: FormData) {
    "use server";
    const todo = data.get("todo") as string;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    todos.push(todo);
    revalidatePath("/actions");
  }

  async function addTodo2(todo: string) {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 1000));

    todos.push(todo);
    revalidatePath("/");
  }

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action={addTodo}>
        <input
          type="text"
          name="todo"
          className="border border-gray-300 rounded-lg py-4 px-4 text-base font-normal text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Add Todo
        </button>
        {/* <CustomButton /> */}
      </form>
      {/* <AddButton addTodo={addTodo2} /> */}
    </main>
  );
}
function fetchCredentials() {
  throw new Error("Function not implemented.");
}

function processStuff(userSecret: any) {
  throw new Error("Function not implemented.");
}
