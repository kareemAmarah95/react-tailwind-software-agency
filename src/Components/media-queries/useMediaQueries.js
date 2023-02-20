import { useState } from "react";
import { useEffect } from "react";
const useMediaQueries = (query, defaultMatches = window.matchMedia(query)) => {
  const [matches, setMatches] = useState(defaultMatches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener(listener);
    return () => media.removeEventListener(listener);
  }, [query]);
};

export default useMediaQueries;
