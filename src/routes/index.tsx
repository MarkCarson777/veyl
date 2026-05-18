import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Tables } from "../lib/database.types";
import { supabase } from "../lib/supabase";

type Producer = Tables<"producers">;

export const Route = createFileRoute("/")({
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

  return <div className="text-red-500">Veyl</div>;
}
