import { useEffect, useState } from "react";

interface fetchInterface {
  url: string;
  options: {};
}

interface IuseFetchReturn {
  Results: {};
  Error: string;
  Loaded: boolean;
}

export const useFetch = ({ url, options }: fetchInterface): IuseFetchReturn => {
  const [Results, setResults] = useState({});
  const [Error, setError] = useState("");
  const [Loaded, setLoaded]: [boolean, Function] = useState(false);

  useEffect(() => {
    fetch(url, options)
      .then((res: Response) => res.json())
      .then((data) => setResults(data))
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoaded(true));
  }, []);

  return { Results, Error, Loaded };
};