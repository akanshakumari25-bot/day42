import { useQuery } from "@tanstack/react-query";

async function fetchTodos() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  const todos = await response.json();
  return todos.slice(0, 10);
}

function ModernDashboard() {
  const {
    data = [],
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return <p>Loading todos...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="dashboard">
      <h2>Modern Dashboard</h2>
      <p>Using React Query</p>

      {isFetching && <p>Refreshing data...</p>}

      {data.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <span>{todo.id}. </span>
          {todo.title}
          <span>{todo.completed ? " ✅" : " ⏳"}</span>
        </div>
      ))}
    </div>
  );
}

export default ModernDashboard;