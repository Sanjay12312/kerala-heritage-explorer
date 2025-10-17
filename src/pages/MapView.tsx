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

  // District pin positions (positioned below district names based on map analysis)
  const districtPins = [
    { id: "kasaragod", name: "Kasaragod", top: "12%", left: "32%" },
    { id: "kannur", name: "Kannur", top: "20%", left: "35%" },
    { id: "wayanad", name: "Wayanad", top: "26%", left: "52%" },
    { id: "kozhikode", name: "Kozhikode", top: "33%", left: "30%" },
    { id: "malappuram", name: "Malappuram", top: "41%", left: "35%" },
    { id: "palakkad", name: "Palakkad", top: "51%", left: "42%" },
    { id: "thrissur", name: "Thrissur", top: "58%", left: "28%" },
    { id: "ernakulam", name: "Ernakulam", top: "65%", left: "32%" },
    { id: "idukki", name: "Idukki", top: "69%", left: "50%" },
    { id: "kottayam", name: "Kottayam", top: "75%", left: "34%" },
    { id: "alappuzha", name: "Alappuzha", top: "78%", left: "23%" },
    { id: "pathanamthitta", name: "Pathanamthitta", top: "83%", left: "40%" },
    { id: "kollam", name: "Kollam", top: "90%", left: "30%" },
    { id: "thiruvananthapuram", name: "Thiruvananthapuram", top: "97%", left: "32%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="p-6 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <Button
            onClick={() => navigate("/explore")}
            variant="ghost"
            size="lg"
            className="text-foreground hover:text-primary hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-foreground">{categoryTitle}</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr,400px] gap-8">
          {/* Map section */}
          <div className="flex items-start justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="relative bg-card p-6 rounded-3xl shadow-[var(--shadow-elegant)] border border-border">
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
              
              <p className="text-center text-muted-foreground mt-6">
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
              <div className="text-center p-12 bg-muted/30 rounded-3xl border-2 border-dashed border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Select a District
                </h3>
                <p className="text-muted-foreground">
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
