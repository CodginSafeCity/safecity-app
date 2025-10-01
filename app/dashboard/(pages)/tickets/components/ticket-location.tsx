import { Button } from "@/components/ui/button";
import { Loader2, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { TicketLocationInterface } from "../types/ticket";

interface TicketLocationProps {
  // You can add props here if needed, e.g., ticket details
  onLocationChange?: (location: TicketLocationInterface) => void;
}

export const TicketLocation = ({ onLocationChange }: TicketLocationProps) => {
  const [location, setLocation] = useState<TicketLocationInterface>({
    type: "Point",
    coordinates: [0, 0],
  });
  const [loadingLocation, setLoadingLocation] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getCurrentLocation = () => {
    setLoadingLocation(true);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          setLocation({
            type: "Point",
            coordinates: [latitude, longitude],
          });

          if (onLocationChange) {
            onLocationChange({
              type: "Point",
              coordinates: [longitude, latitude],
            });
          }
        } catch (err) {
          console.log(err);
        } finally {
          setLoadingLocation(false);
        }
      },
      (err) => {
        setError(err.message);
        setLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="flex items-center gap-2 p-3 border rounded-md bg-muted/50">
      <MapPin className="h-4 w-4 text-primary" />
      {loadingLocation ? (
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="text-sm">Obteniendo ubicación...</span>
        </div>
      ) : location.coordinates[0] && location.coordinates[1] ? (
        <div className="flex-1">
          <p className="text-sm font-medium">Ubicación actual</p>
          <p className="text-xs text-muted-foreground">{`${location.coordinates[0]}, ${location.coordinates[1]}`}</p>
        </div>
      ) : (
        <div className="flex-1">
          <p className="text-sm text-red-400">
            No se pudo obtener la ubicación
          </p>
          <Button
            type="button"
            variant="link"
            size="sm"
            className="p-0 h-auto cursor-pointer"
            onClick={getCurrentLocation}
          >
            Intentar de nuevo
          </Button>
        </div>
      )}
    </div>
  );
};

export default TicketLocation;
