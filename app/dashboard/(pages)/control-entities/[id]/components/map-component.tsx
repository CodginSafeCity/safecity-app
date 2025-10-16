"use client";
import { useRef } from "react";
import { TileLayer, FeatureGroup, Circle, MapContainer } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

type MapComponentProps = {
  onCreate?: (e: any) => void;
  onEditPath?: (e: any) => void;
  onDeleted?: (e: any) => void;
};

export default function MapComponent({
  onCreate,
  onEditPath,
  onDeleted,
}: MapComponentProps) {
  const handleCreated = (e: any) => {
    onCreate &&
      onCreate({
        coordinates: e.layer
          .getLatLngs()[0]
          .map((latlng: any) => [latlng.lng, latlng.lat]),
      });
  };
  return (
    <MapContainer
      center={[3.9333333, -76.5166666]} //colombia [4.570868, -74.297333]
      zoom={10}
      scrollWheelZoom={true}
      maxZoom={18}
      className="w-full h-96 md:h-[400px] rounded-lg mb-4"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <FeatureGroup>
        <EditControl
          position="topright"
          draw={{
            circlemarker: false,
            polyline: false,
            rectangle: false,
            circle: false,
            marker: false,
            polygon: true,
          }}
          edit={{
            edit: true,
            remove: true,
          }}
          onEdited={onEditPath}
          onDeleted={onDeleted}
          onCreated={handleCreated}
        />
      </FeatureGroup>
    </MapContainer>
  );
}
