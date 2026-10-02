import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Zap, Leaf, IndianRupee, Flame, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface WasteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToListing?: (details: { cropType: string; quantity: number; estimatedPrice: number }) => void;
}

export const WasteCalculatorModal: React.FC<WasteCalculatorModalProps> = ({ isOpen, onClose, onApplyToListing }) => {
  const [cropType, setCropType] = useState("Paddy Straw (Parali)");
  const [quantity, setQuantity] = useState("15");
  const [stateRegion, setStateRegion] = useState("Punjab");
  const [moisture, setMoisture] = useState("12%");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    ratePerTonne: number;
    totalEarnings: number;
    co2Saved: number;
    aqiSavedPct: number;
    bestUses: { title: string; matchPct: number; desc: string }[];
  } | null>(null);

  const handleRunAiAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    const qtyNum = parseFloat(quantity) || 10;
    
    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      let baseRate = 1800;
      if (cropType.includes("Wheat")) baseRate = 2200;
      if (cropType.includes("Sugarcane")) baseRate = 1500;
      if (cropType.includes("Cotton")) baseRate = 2400;
      if (cropType.includes("Mustard")) baseRate = 1950;

      // Adjust for moisture
      const moistureFactor = moisture === "10%" ? 1.1 : moisture === "20%" ? 0.85 : 1.0;
      const ratePerTonne = Math.round(baseRate * moistureFactor);
      const totalEarnings = ratePerTonne * qtyNum;
      const co2Saved = Math.round(qtyNum * 1.5 * 10) / 10;
      const aqiSavedPct = Math.min(95, Math.round(qtyNum * 3 + 45));

      setAnalysisResult({
        ratePerTonne,
        totalEarnings,
        co2Saved,
        aqiSavedPct,
        bestUses: [
          {
            title: "Compressed Biogas (CBG) / Bio-CNG",
            matchPct: 96,
            desc: "Highest market demand in northern industrial corridors."
          },
          {
            title: "Biomass Fuel Pellets & Briquettes",
            matchPct: 91,
            desc: "Ideal substitute for thermal power plants."
          },
          {
            title: "Mushroom Substrate & Cattle Roughage",
            matchPct: 84,
            desc: "Local dairy & agri-businesses purchasing daily."
          }
        ]
      });

      toast.success("AI Crop Waste Analysis Complete!");
    }, 1200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg bg-card border-border rounded-3xl p-6 shadow-2xl">
        <DialogHeader className="text-left space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Brain className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">AI Waste Valuation Calculator</DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Get fair market price & recommended industrial uses for your stubble.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleRunAiAnalysis} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs font-semibold">Crop Waste Type</Label>
              <Select value={cropType} onValueChange={setCropType}>
                <SelectTrigger className="rounded-xl text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Paddy Straw (Parali)">Paddy Straw (Parali)</SelectItem>
                  <SelectItem value="Wheat Stalk">Wheat Stalk</SelectItem>
                  <SelectItem value="Sugarcane Bagasse">Sugarcane Bagasse</SelectItem>
                  <SelectItem value="Cotton Stalk">Cotton Stalk</SelectItem>
                  <SelectItem value="Mustard Straw">Mustard Straw</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold">Volume (Tonnes)</Label>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="rounded-xl text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs font-semibold">State / Region</Label>
              <Select value={stateRegion} onValueChange={setStateRegion}>
                <SelectTrigger className="rounded-xl text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Punjab">Punjab</SelectItem>
                  <SelectItem value="Haryana">Haryana</SelectItem>
                  <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                  <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                  <SelectItem value="Gujarat">Gujarat</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold">Moisture Level</Label>
              <Select value={moisture} onValueChange={setMoisture}>
                <SelectTrigger className="rounded-xl text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10%">10% (Dry / High Value)</SelectItem>
                  <SelectItem value="12%">12% (Standard)</SelectItem>
                  <SelectItem value="15%">15% (Semi-Dry)</SelectItem>
                  <SelectItem value="20%">20% (Fresh Harvest)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isAnalyzing}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl py-3 flex items-center justify-center gap-2 text-sm shadow-md"
          >
            {isAnalyzing ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" /> Analyzing Stubble & Market Demand...
              </>
            ) : (
              <>
                <Brain className="w-4 h-4" /> Run AI Valuation Model
              </>
            )}
          </Button>
        </form>

        {/* AI Analysis Result View */}
        {analysisResult && (
          <div className="space-y-4 pt-2 border-t border-border/40 animate-fade-in">
            <div className="p-4 bg-gradient-to-br from-primary/10 via-accent/10 to-success/10 rounded-3xl border border-primary/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-semibold">AI Estimated Value</span>
                <span className="text-xs text-success font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> High Demand Match
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-background/80 p-3 rounded-2xl shadow-sm">
                  <span className="text-[11px] text-muted-foreground block">Fair Price / Tonne</span>
                  <span className="text-xl font-black text-primary">₹{analysisResult.ratePerTonne}</span>
                </div>
                <div className="bg-background/80 p-3 rounded-2xl shadow-sm">
                  <span className="text-[11px] text-muted-foreground block">Total Farmer Payout</span>
                  <span className="text-xl font-black text-success">₹{analysisResult.totalEarnings.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                <span className="flex items-center gap-1 text-success font-medium">
                  <Leaf className="w-3.5 h-3.5" /> {analysisResult.co2Saved} Tonnes CO2 Prevented
                </span>
                <span className="flex items-center gap-1 text-primary font-medium">
                  <Flame className="w-3.5 h-3.5" /> {analysisResult.aqiSavedPct}% Air Cleanliness
                </span>
              </div>
            </div>

            {/* Recommended Uses */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-foreground">Top AI Industrial Application Matches:</h4>
              <div className="space-y-2">
                {analysisResult.bestUses.map((use, i) => (
                  <div key={i} className="p-2.5 bg-muted/60 rounded-2xl text-xs space-y-0.5">
                    <div className="flex justify-between font-semibold text-foreground">
                      <span>{use.title}</span>
                      <span className="text-primary font-bold">{use.matchPct}% Match</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground">{use.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {onApplyToListing && (
              <Button
                onClick={() => {
                  onApplyToListing({
                    cropType,
                    quantity: parseFloat(quantity) || 10,
                    estimatedPrice: analysisResult.ratePerTonne,
                  });
                  onClose();
                }}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl text-xs font-bold py-2.5"
              >
                Publish This Valued Waste Listing <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
