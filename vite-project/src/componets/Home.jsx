import { useState } from "react";

function Home() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Home</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>{name}</h2>
    </div>
  );
}

export default Home;