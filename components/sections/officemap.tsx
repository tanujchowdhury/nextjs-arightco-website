import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function OfficeMap({ lat, lng }: { lat: number; lng: number }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      : "",
  });

  const [marker] = useState();
  const center = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  if (!isLoaded)
    return <div className="bg-white p-10 m-5 rounded-3xl">Loading...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="bg-white p-10 m-5 rounded-3xl h-96 w-auto xl:mx-32 shadow"
    >
      <MarkerF key={marker} position={center} />
    </GoogleMap>
  );
}
