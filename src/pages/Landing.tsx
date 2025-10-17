import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import keralaMap from "@/assets/kerala-map.svg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-[hsl(var(--kerala-emerald))] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-12 min-h-screen flex flex-col">
        {/* Header */}
        <header className="animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-2">
            Echoes of Kerala
          </h1>
          <div className="h-1 w-24 bg-secondary rounded-full"></div>
        </header>

        {/* Hero section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
            {/* Left content */}
            <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
                Discover the Soul of
                <span className="block text-secondary mt-2">God's Own Country</span>
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Explore the rich tapestry of Kerala's cultural heritage and timeless art forms.
                Journey through centuries of tradition, artistry, and stories.
              </p>
            </div>

            {/* Right content - Map */}
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-2xl"></div>
              <img
                src={keralaMap}
                alt="Kerala Map"
                className="relative w-full h-auto drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Start button */}
        <div className="flex justify-end pb-12 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={() => navigate("/explore")}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-12 py-8 rounded-2xl shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
