import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import keralaMap from "@/assets/kerala-map.jpg";

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="p-6">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          size="lg"
          className="text-foreground hover:text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-6 pb-12">
        <div className="grid lg:grid-cols-[300px,1fr] gap-8 items-start">
          {/* Left sidebar - Category buttons */}
          <div className="space-y-4 lg:sticky lg:top-24">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Choose Category
            </h2>
            
            <Button
              onClick={() => navigate("/map/heritage")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-8 text-lg rounded-xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
            >
              Heritage Sites
            </Button>

            <Button
              onClick={() => navigate("/map/artform")}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-8 text-lg rounded-xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
            >
              Art Forms
            </Button>

            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <h3 className="font-semibold text-card-foreground mb-2">
                Explore Kerala
              </h3>
              <p className="text-sm text-muted-foreground">
                Click on a category to explore Kerala's rich cultural heritage district by district.
              </p>
            </div>
          </div>

          {/* Right content - Kerala Map */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-2xl animate-scaleIn">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-card p-8 rounded-3xl shadow-[var(--shadow-elegant)] border border-border">
                <img
                  src={keralaMap}
                  alt="Kerala Districts Map"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
