import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function USOfficeMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      : "",
  });

  const [marker] = useState();

  if (!isLoaded)
    return (
      <div className="bg-white p-10 m-5 mt-20 rounded-3xl">Loading...</div>
    );
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 37.369616519260816, lng: -121.91899865996622 }}
      mapContainerClassName="bg-white p-10 m-5 mt-20 rounded-3xl h-96 w-auto"
    >
        <MarkerF key={marker} position={{ lat: 37.369616519260816, lng: -121.91899865996622 }} />
    </GoogleMap>
  );
}
