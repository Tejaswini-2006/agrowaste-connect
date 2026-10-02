import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Truck, CheckCircle2, Clock, ShieldCheck, Search, Phone, Leaf } from "lucide-react";
import { toast } from "sonner";

interface OrderTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({ isOpen, onClose }) => {
  const [searchOrderId, setSearchOrderId] = useState("AGRO-2024-8921");
  const [activeTracking, setActiveTracking] = useState<{
    id: string;
    farmerName: string;
    buyerName: string;
    cropType: string;
    quantityTonnes: number;
    pickupLocation: string;
    destinationFactory: string;
    currentStage: number; // 0 to 4
    driverName: string;
    driverPhone: string;
    truckNumber: string;
    eta: string;
  } | null>({
    id: "AGRO-2024-8921",
    farmerName: "Gurpreet Singh",
    buyerName: "GreenBio Energy CBG Plant",
    cropType: "Paddy Straw (Parali)",
    quantityTonnes: 25,
    pickupLocation: "Ludhiana Field #4, Punjab",
    destinationFactory: "Ludhiana Industrial Area Unit 2",
    currentStage: 2, // Logistics Dispatched
    driverName: "Sukhwinder Singh",
    driverPhone: "+91 98123 45678",
    truckNumber: "PB-10-CZ-4412",
    eta: "45 Minutes",
  });

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchOrderId) {
      toast.error("Please enter an order tracking ID");
      return;
    }
    toast.info(`Fetching live status for ${searchOrderId}...`);
  };

  const STAGES = [
    { title: "Order Confirmed", desc: "Farmer & Buyer agreed on pricing" },
    { title: "Vehicle Dispatched", desc: "Heavy transport assigned to field location" },
    { title: "Field Collection", desc: "Stubble loaded & weighed on field scale" },
    { title: "In Transit", desc: "En route to processing plant" },
    { title: "Delivered & Paid", desc: "Payment released directly to farmer" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg bg-card border-border rounded-3xl p-6 shadow-2xl">
        <DialogHeader className="text-left space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">Live Order & Pickup Tracker</DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Track field collection, transport, and automated payment disbursement
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleTrackSearch} className="flex gap-2 mt-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchOrderId}
              onChange={(e) => setSearchOrderId(e.target.value)}
              placeholder="e.g. AGRO-2024-8921"
              className="pl-9 rounded-xl text-xs font-mono"
            />
          </div>
          <Button type="submit" className="rounded-xl text-xs bg-primary text-primary-foreground font-semibold">
            Track
          </Button>
        </form>

        {activeTracking && (
          <div className="space-y-4 pt-2">
            {/* Overview Box */}
            <div className="p-4 bg-muted/60 rounded-2xl space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-foreground font-mono">{activeTracking.id}</span>
                <span className="bg-primary/15 text-primary font-bold px-2.5 py-0.5 rounded-full text-[11px]">
                  ETA: {activeTracking.eta}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-border/40">
                <div>
                  <span className="text-muted-foreground block text-[10px]">Farmer:</span>
                  <span className="font-semibold text-foreground">{activeTracking.farmerName}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px]">Buyer:</span>
                  <span className="font-semibold text-foreground">{activeTracking.buyerName}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px]">Material:</span>
                  <span className="font-semibold text-primary">{activeTracking.quantityTonnes}t {activeTracking.cropType}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px]">Truck No:</span>
                  <span className="font-semibold text-foreground font-mono">{activeTracking.truckNumber}</span>
                </div>
              </div>
            </div>

            {/* Pipeline Stage Tracker */}
            <div className="space-y-3 px-1">
              <h4 className="text-xs font-bold text-foreground">Pickup & Transport Timeline:</h4>

              <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                {STAGES.map((st, i) => {
                  const isDone = i <= activeTracking.currentStage;
                  const isCurrent = i === activeTracking.currentStage;

                  return (
                    <div key={i} className="flex items-start gap-3 relative z-10">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                          isCurrent
                            ? "bg-primary text-primary-foreground ring-4 ring-primary/20 scale-110"
                            : isDone
                            ? "bg-success text-success-foreground"
                            : "bg-muted text-muted-foreground border border-border"
                        }`}
                      >
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                      </div>

                      <div className="text-xs">
                        <p className={`font-bold ${isCurrent ? "text-primary" : isDone ? "text-foreground" : "text-muted-foreground"}`}>
                          {st.title} {isCurrent && <span className="text-[10px] text-accent font-semibold ml-1">(In Progress)</span>}
                        </p>
                        <p className="text-[11px] text-muted-foreground">{st.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Driver Contact Box */}
            <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-between text-xs">
              <div>
                <span className="text-muted-foreground text-[10px] block">Assigned Transport Driver:</span>
                <span className="font-bold text-foreground">{activeTracking.driverName}</span>
              </div>
              <a
                href={`tel:${activeTracking.driverPhone}`}
                className="px-3 py-1.5 bg-primary text-primary-foreground rounded-xl text-xs font-semibold flex items-center gap-1 hover:bg-primary/90"
              >
                <Phone className="w-3.5 h-3.5" /> Call Driver
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
