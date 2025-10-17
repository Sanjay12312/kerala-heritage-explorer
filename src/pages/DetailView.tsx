import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Volume2, Image as ImageIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { districtData } from "@/data/districts";

const DetailView = () => {
  const navigate = useNavigate();
  const { category, district } = useParams<{ category: "heritage" | "artform"; district: string }>();
  
  const item = district && category ? districtData[district]?.[category] : null;

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Item not found</h2>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="p-6 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <Button
            onClick={() => navigate(-1)}
            variant="ghost"
            size="lg"
            className="text-foreground hover:text-primary hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-foreground">{item.name}</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="space-y-8">
          {/* Animation section */}
          <div className="bg-card rounded-3xl shadow-[var(--shadow-elegant)] border border-border overflow-hidden animate-fadeInUp">
            <div className="p-6 border-b border-border bg-primary/5">
              <h2 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Animation
              </h2>
            </div>
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              {item.animation ? (
                <div className="w-full h-full">
                  {/* Animation will be embedded here */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">Animation preview</p>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ImageIcon className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-2 font-medium">No animation added yet</p>
                  <p className="text-sm text-muted-foreground">
                    Animation content will appear here
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Video section */}
          <div className="bg-card rounded-3xl shadow-[var(--shadow-elegant)] border border-border overflow-hidden animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <div className="p-6 border-b border-border bg-primary/5">
              <h2 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Video
              </h2>
            </div>
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              {item.video ? (
                <video
                  src={item.video}
                  controls
                  className="w-full h-full"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-10 w-10 text-secondary" />
                  </div>
                  <p className="text-muted-foreground mb-2 font-medium">No video added yet</p>
                  <p className="text-sm text-muted-foreground">
                    Video content will appear here
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Audio section */}
          <div className="bg-card rounded-3xl shadow-[var(--shadow-elegant)] border border-border overflow-hidden animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <div className="p-6 border-b border-border bg-primary/5">
              <h2 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Audio
              </h2>
            </div>
            <div className="p-8">
              {item.audio ? (
                <audio
                  src={item.audio}
                  controls
                  className="w-full"
                >
                  Your browser does not support the audio tag.
                </audio>
              ) : (
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Volume2 className="h-10 w-10 text-accent" />
                  </div>
                  <p className="text-muted-foreground mb-2 font-medium">No audio added yet</p>
                  <p className="text-sm text-muted-foreground">
                    Audio content will appear here
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Additional description */}
          <div className="bg-card rounded-3xl shadow-[var(--shadow-elegant)] border border-border p-8 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              About
            </h2>
            <p className="text-card-foreground leading-relaxed text-lg">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
