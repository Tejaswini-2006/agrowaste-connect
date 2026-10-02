import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Leaf, Building2, Phone, CheckCircle2, ArrowRight, ShieldCheck, UserCheck } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: "farmer" | "buyer";
  onSuccess?: (user: { name: string; role: "farmer" | "buyer"; phone: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultRole = "farmer", onSuccess }) => {
  const [role, setRole] = useState<"farmer" | "buyer">(defaultRole);
  const [step, setStep] = useState<"details" | "otp" | "complete">("details");
  
  // Form State
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [cropOrIndustry, setCropOrIndustry] = useState("");
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!fullName) {
      toast.error("Please enter your name");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep("otp");
      toast.success(`Verification code sent to +91 ${phone} (Use 1234 for demo)`);
    }, 800);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp !== "1234" && otp !== "4321" && otp.length !== 4) {
      toast.error("Invalid code. Please enter 1234 for demo mode.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep("complete");
      toast.success(`Welcome to AgroWaste Connect, ${fullName}! 🎉`);
      if (onSuccess) {
        onSuccess({ name: fullName, role, phone });
      }
    }, 600);
  };

  const resetAndClose = () => {
    setStep("details");
    setOtp("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetAndClose()}>
      <DialogContent className="sm:max-w-md bg-card border-border shadow-2xl rounded-3xl p-6">
        <DialogHeader className="text-left space-y-2">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${role === "farmer" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
              {role === "farmer" ? <Leaf className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">
                {role === "farmer" ? "Farmer Registration" : "Industry / Buyer Portal"}
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                {role === "farmer" ? "Sell your stubble & crop waste easily" : "Source raw crop waste directly from farmers"}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Role Toggle Selector */}
        {step === "details" && (
          <div className="grid grid-cols-2 gap-2 p-1 bg-muted rounded-2xl mb-4 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setRole("farmer")}
              className={`py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                role === "farmer"
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Leaf className="w-3.5 h-3.5" /> I am a Farmer
            </button>
            <button
              type="button"
              onClick={() => setRole("buyer")}
              className={`py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                role === "buyer"
                  ? "bg-background text-secondary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" /> Industry Buyer
            </button>
          </div>
        )}

        {/* STEP 1: Details */}
        {step === "details" && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className="text-xs font-medium">
                {role === "farmer" ? "Full Name / Farmer Name" : "Company / Representative Name"}
              </Label>
              <Input
                id="fullName"
                placeholder={role === "farmer" ? "e.g. Ramesh Kumar" : "e.g. GreenBio Energy Pvt Ltd"}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="rounded-xl"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-xs font-medium">
                Mobile Number (for OTP verification)
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-semibold">
                  +91
                </span>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  required
                  className="pl-12 rounded-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="location" className="text-xs font-medium">
                  State / Region
                </Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="rounded-xl text-xs">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Punjab">Punjab</SelectItem>
                    <SelectItem value="Haryana">Haryana</SelectItem>
                    <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                    <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                    <SelectItem value="Gujarat">Gujarat</SelectItem>
                    <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="cropOrIndustry" className="text-xs font-medium">
                  {role === "farmer" ? "Main Crop Waste" : "Industry Sector"}
                </Label>
                <Select value={cropOrIndustry} onValueChange={setCropOrIndustry}>
                  <SelectTrigger className="rounded-xl text-xs">
                    <SelectValue placeholder={role === "farmer" ? "Select Crop" : "Select Industry"} />
                  </SelectTrigger>
                  <SelectContent>
                    {role === "farmer" ? (
                      <>
                        <SelectItem value="Paddy Straw">Paddy Straw (Parali)</SelectItem>
                        <SelectItem value="Wheat Stalk">Wheat Stalk</SelectItem>
                        <SelectItem value="Sugarcane Bagasse">Sugarcane Bagasse</SelectItem>
                        <SelectItem value="Cotton Stalk">Cotton Stalk</SelectItem>
                        <SelectItem value="Mustard Straw">Mustard Straw</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="Biofuel & Pellets">Biofuel / Pellet Manufacturer</SelectItem>
                        <SelectItem value="Biogas / CNG Plant">Compressed Biogas (CBG)</SelectItem>
                        <SelectItem value="Paper & Packaging">Paper & Pulp Industry</SelectItem>
                        <SelectItem value="Cattle Feed Unit">Cattle Feed Producer</SelectItem>
                        <SelectItem value="Compost Manufacturer">Organic Fertilizer / Compost</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-5 rounded-2xl font-semibold shadow-md ${
                role === "farmer" ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              }`}
            >
              {isSubmitting ? "Sending OTP..." : "Continue with OTP Verification"}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        )}

        {/* STEP 2: OTP Verification */}
        {step === "otp" && (
          <form onSubmit={handleVerifyOtp} className="space-y-4 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
              <Phone className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">Enter 4-Digit Verification Code</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Sent to <span className="font-semibold text-foreground">+91 {phone}</span> (Demo code: <span className="text-primary font-bold">1234</span>)
              </p>
            </div>

            <div className="flex justify-center gap-2 my-2">
              <Input
                type="text"
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="1234"
                className="w-36 text-center text-xl font-bold tracking-widest rounded-xl"
                autoFocus
              />
            </div>

            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={() => setStep("details")} className="flex-1 rounded-xl text-xs">
                Back
              </Button>
              <Button type="submit" disabled={isSubmitting} className="flex-1 rounded-xl text-xs bg-primary text-primary-foreground">
                {isSubmitting ? "Verifying..." : "Verify & Complete"}
              </Button>
            </div>
          </form>
        )}

        {/* STEP 3: Complete */}
        {step === "complete" && (
          <div className="text-center space-y-4 py-4">
            <div className="w-16 h-16 bg-success/15 rounded-full flex items-center justify-center mx-auto text-success">
              <CheckCircle2 className="w-10 h-10 animate-scale-in" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Account Verified!</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Welcome <span className="font-semibold text-foreground">{fullName}</span>. You can now list crop waste, request AI valuations, and place direct orders.
              </p>
            </div>

            <div className="p-3 bg-muted/60 rounded-2xl text-xs text-left space-y-1">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <UserCheck className="w-4 h-4 text-primary" /> Verified Profile: {role.toUpperCase()}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-success" /> Guaranteed Zero Burning & Direct Payment
              </div>
            </div>

            <Button onClick={resetAndClose} className="w-full rounded-2xl bg-primary text-primary-foreground">
              Go to Marketplace & Tools
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
