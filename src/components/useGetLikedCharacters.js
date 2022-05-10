import { useState, useEffect } from "react";
export default function useGetLikedCharacters(dep) {
  const [likedCharacters, setLikedCharacters] = useState([]);
  const [keys, setKeys] = useState(null);
  useEffect(() => {
    let key = Object.keys(localStorage);
    let arr = [],
      i = key.length;

    while (i--) {
      arr.push(JSON.parse(localStorage.getItem(key[i])));
    }

    setLikedCharacters(arr);
    setKeys(key);
  }, [dep]);

  return [likedCharacters, keys];
}
