import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((cur) => [...cur, route.params.place]);
    }
  }, [isFocused, route.params]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
