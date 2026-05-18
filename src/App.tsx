import { useEffect, useState } from "react";
import "./App.css";
import type { Tables } from "./lib/database.types";
import { supabase } from "./lib/supabase";

type Producer = Tables<"producers">;

function App() {
  const [producers, setProducers] = useState<Producer[]>([]);

  useEffect(() => {
    async function fetchProducers() {
      const { data, error } = await supabase.from("producers").select("*");
      if (error) console.error(error);
      else setProducers(data);
    }

    fetchProducers();
  }, []);

  console.log("producers", producers);
  return (
    <div>
      <h1 className="text-red-500">Veyl</h1>
    </div>
  );
}

export default App;
