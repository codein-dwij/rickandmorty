import { useState, useEffect } from "react";
export default function useGetLikedCharacters(dep) {
  const [likedCharacters, setLikedCharacters] = useState([]);
  const [keys, setKeys] = useState(null);
  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("liked"));
    const key = [];
    if (arr) {
      arr.forEach((item) => {
        key.push(item.id);
      });
    }
    setLikedCharacters(arr);
    setKeys(key);
  }, [dep]);

  return [likedCharacters, keys];
}
