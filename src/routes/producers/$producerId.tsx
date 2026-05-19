import { createFileRoute, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Tables } from "../../lib/database.types";
import { supabase } from "../../lib/supabase";

type Producer = Tables<"producers">;

export const Route = createFileRoute("/producers/$producerId")({
  parseParams: ({ producerId }) => ({
    producerId: parseInt(producerId, 10),
  }),
  stringifyParams: ({ producerId }) => ({
    producerId: String(producerId),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { producerId } = useParams({ from: "/producers/$producerId" });
  const [producer, setProducer] = useState<Producer | null>(null);

  useEffect(() => {
    async function fetchProducer() {
      const { data, error } = await supabase
        .from("producers")
        .select("*")
        .eq("id", producerId);

      if (error) console.error(error);
      else setProducer(data[0]);
    }

    fetchProducer();
  }, []);

  console.log("producer", producer);

  return (
    <div>
      <h1 className="font-bold">{producer?.name}</h1>
      <p>Description</p>
    </div>
  );
}
