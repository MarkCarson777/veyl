import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Tables } from "../../lib/database.types";
import { supabase } from "../../lib/supabase";

type Producer = Tables<"producers">;

export const Route = createFileRoute("/producers/")({
  component: RouteComponent,
});

function RouteComponent() {
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
      <h1 className="font-bold">Producers</h1>
      <ul>
        {producers.map((producer) => (
          <Link
            key={producer.id}
            to="/producers/$producerId"
            params={{ producerId: producer.id }}
          >
            {producer.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
