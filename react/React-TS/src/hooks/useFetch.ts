import { useEffect, useState } from "react";

interface fetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): fetchState<T> {
  const [state, setState] = useState<fetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        if (!data.ok) throw new Error(`HTTP error: ${data.status}`);
        const json: T = await data.json();
        setState({ data: json, isLoading: false, error: null });
      } catch (error) {
        if (error instanceof Error) {
          setState({ data: null, isLoading: false, error: error.message });
        } else {
          setState({ data: null, isLoading: false, error: String(error) });
        }
      }
    };
    fetchData();
  }, []);
  return state;
}
