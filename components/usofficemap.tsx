import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function USOfficeMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      : "",
  });

  if (!isLoaded)
    return (
      <div className="bg-white p-10 m-5 mt-20 rounded-3xl">Loading...</div>
    );
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="bg-white p-10 m-5 mt-20 rounded-3xl h-96 w-auto"
    ></GoogleMap>
  );
}
