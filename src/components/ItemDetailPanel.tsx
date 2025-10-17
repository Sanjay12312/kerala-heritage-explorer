import { Button } from "@/components/ui/button";
import { X, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { districtData } from "@/data/districts";

interface ItemDetailPanelProps {
  district: string;
  category: "heritage" | "artform";
  onClose: () => void;
}

const ItemDetailPanel = ({ district, category, onClose }: ItemDetailPanelProps) => {
  const navigate = useNavigate();
  const item = districtData[district]?.[category];

  if (!item) {
    return null;
  }

  const handleKnowMore = () => {
    navigate(`/detail/${category}/${district}`);
  };

  return (
    <div className="lg:sticky lg:top-24 animate-scaleIn">
      <div className="bg-card rounded-3xl shadow-[var(--shadow-elegant)] border border-border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-primary/5">
          <h2 className="text-xl font-bold text-card-foreground">{item.name}</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Image section */}
        <div className="aspect-video bg-muted/50 flex items-center justify-center border-b border-border">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                Image will be added soon
              </p>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="p-6">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Description
          </h3>
          <p className="text-card-foreground leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Know More button */}
        <div className="p-6 pt-0">
          <Button
            onClick={handleKnowMore}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
          >
            Know More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPanel;
