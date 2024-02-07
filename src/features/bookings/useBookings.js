import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // { field: "status", value: filterValue, method: "gte" };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter], // works as a dependency array
    // And so now, basically whenever this [filter] changes, then React Query will re-fetch the data.
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, bookings, error };
}
