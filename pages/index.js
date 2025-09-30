import { Inter } from 'next/font/google'
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [name, setName] = useState("");

  const postHandler = async () => {
    const res = await fetch("/api/data", {
      method: "POST",
      body: JSON.stringify({name}),
      headers: {"Content-Type": "application/json"}
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Data Base</h1>
      <div>
        <input placeholder="Eter name" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={postHandler}>Post</button>
      </div>
    </div>
  )
}
