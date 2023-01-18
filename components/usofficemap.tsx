import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function USOfficeMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      : "",
  });

  const [marker] = useState();
  const center = useMemo(
    () => ({ lat: 37.369616519260816, lng: -121.91899865996622 }),
    []
  );

  if (!isLoaded)
    return (
      <div className="bg-white p-10 m-5 mt-20 rounded-3xl">Loading...</div>
    );
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="bg-white p-10 m-5 mt-20 rounded-3xl h-96 w-auto xl:mx-32 shadow"
    >
      <MarkerF
        key={marker}
        position={center}
      />
    </GoogleMap>
  );
}
