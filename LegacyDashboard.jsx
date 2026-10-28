import { useEffect, useState } from "react";

function LegacyDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }

        const todos = await response.json();
        setData(todos.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  if (loading) {
    return <p>Loading todos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="dashboard">
      <h2>Legacy Dashboard</h2>
      <p>Using useEffect + useState</p>

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

export default LegacyDashboard;