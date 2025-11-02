import { clsx } from "clsx";
import { User } from "./lib/interfaces/user-interfaces";
import styles from "../app/ui/home.module.css"
import Image from "next/image";

export default async function App() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json() as User[];
  return (
    <div className="h-screen bg-linear-[145deg] from-gray-300 via-gray-700 to-gray-950">
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* <div className="h-[2100px]">
        <div className="relative bg-red-300 h-56 overflow-hidden">
        <Image 
          src={"https://picsum.photos/seed/picsum/2000"}
          alt="Hero"
          // width={500}
          // height={500}
          objectFit="cover"
          objectPosition="right"
          fill
          className="bg-red-200 z-0"
        />

        </div>
      </div> */}
    </div>
  );
}
