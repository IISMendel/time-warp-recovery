import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapComponent } from "@/components/MapComponent";
import { useState } from "react";
import { toast } from "sonner";

export const ContactsSection = () => {
  const [mapboxToken, setMapboxToken] = useState(localStorage.getItem('mapbox_token') || '');
  const [tempToken, setTempToken] = useState('');

  const handleSaveToken = () => {
    if (tempToken.trim()) {
      localStorage.setItem('mapbox_token', tempToken.trim());
      setMapboxToken(tempToken.trim());
      toast.success("Mapbox token salvato!");
    }
  };

  return (
    <div className="space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          📍 연락처 | Contatti
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">IIS Gregorio Mendel</h3>
            <p className="text-lg mb-2">📍 Via Ruffini, 1 - 20020 Villa Cortese (MI)</p>
            <p className="text-lg mb-2">📞 Tel: +39 0331 431280</p>
            <p className="text-lg mb-2">📧 Email: miis043003@istruzione.it</p>
            <p className="text-lg">🌐 Web: <a href="https://agrariomendel.edu.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">agrariomendel.edu.it</a></p>
          </div>

          {!mapboxToken && (
            <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-xl">
              <h4 className="font-bold mb-3 text-lg">🗺️ Inserisci il tuo Mapbox Token</h4>
              <p className="text-sm mb-4">
                Per visualizzare la mappa, inserisci il tuo token Mapbox pubblico. Puoi ottenerlo su{" "}
                <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                  mapbox.com
                </a>
              </p>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIi..."
                  value={tempToken}
                  onChange={(e) => setTempToken(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSaveToken} className="bg-gradient-to-r from-primary to-secondary text-white">
                  Salva
                </Button>
              </div>
            </div>
          )}

          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <MapComponent mapboxToken={mapboxToken} />
          </div>
        </div>
      </Card>
    </div>
  );
};
