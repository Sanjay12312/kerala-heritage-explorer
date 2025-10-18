import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import keralaMap from "@/assets/kerala-map.svg";
import { districtData } from "@/data/districts";
import ItemDetailPanel from "@/components/ItemDetailPanel";

const MapView = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: "heritage" | "artform" }>();
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const categoryTitle = category === "heritage" ? "Heritage Sites" : "Art Forms";

  // District pin positions (positioned below district names based on map coordinates)
  const districtPins = [
    { id: "kasaragod", name: "Kasaragod", top: "10.8%", left: "11.1%" },
    { id: "kannur", name: "Kannur", top: "20.7%", left: "24.9%" },
    { id: "wayanad", name: "Wayanad", top: "26.3%", left: "44.7%" },
    { id: "kozhikode", name: "Kozhikode", top: "30.6%", left: "34.6%" },
    { id: "malappuram", name: "Malappuram", top: "39.5%", left: "45.2%" },
    { id: "palakkad", name: "Palakkad", top: "45.9%", left: "63.8%" },
    { id: "thrissur", name: "Thrissur", top: "54.6%", left: "53.2%" },
    { id: "ernakulam", name: "Ernakulam", top: "62.5%", left: "58.0%" },
    { id: "idukki", name: "Idukki", top: "65.0%", left: "78.9%" },
    { id: "kottayam", name: "Kottayam", top: "71.7%", left: "65.9%" },
    { id: "alappuzha", name: "Alappuzha", top: "78.8%", left: "60.9%" },
    { id: "pathanamthitta", name: "Pathanamthitta", top: "79.2%", left: "74.3%" },
    { id: "kollam", name: "Kollam", top: "85.8%", left: "74.3%" },
    { id: "thiruvananthapuram", name: "Thiruvananthapuram", top: "92.2%", left: "74.6%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-[hsl(var(--kerala-emerald))]">
      {/* Header */}
      <header className="p-6 border-b border-white/20 bg-white/10 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <Button
            onClick={() => navigate("/explore")}
            variant="ghost"
            size="lg"
            className="text-primary-foreground hover:text-secondary hover:bg-secondary/10"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-primary-foreground">{categoryTitle}</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr,400px] gap-8">
          {/* Map section */}
          <div className="flex items-start justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-3xl shadow-[var(--shadow-elegant)] border border-white/20">
                <div className="relative">
                  <img
                    src={keralaMap}
                    alt="Kerala Districts Map"
                    className="w-full h-auto rounded-xl opacity-90"
                  />
                  
                  {/* District pins */}
                  {districtPins.map((district) => (
                    <button
                      key={district.id}
                      onClick={() => setSelectedDistrict(district.id)}
                      className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 group"
                      style={{ top: district.top, left: district.left }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75"></div>
                        <div className="relative w-8 h-8 bg-secondary rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-200 flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                        </div>
                      </div>
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-card px-3 py-1 rounded-lg shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium">
                        {district.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <p className="text-center text-primary-foreground/90 mt-6">
                Click on any district pin to explore
              </p>
            </div>
          </div>

          {/* Detail panel */}
          {selectedDistrict ? (
            <ItemDetailPanel
              district={selectedDistrict}
              category={category || "heritage"}
              onClose={() => setSelectedDistrict(null)}
            />
          ) : (
            <div className="hidden lg:flex items-center justify-center">
              <div className="text-center p-12 bg-white/10 rounded-3xl border-2 border-dashed border-white/20">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-secondary rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  Select a District
                </h3>
                <p className="text-primary-foreground/90">
                  Click on any pin on the map to view details
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapView;
