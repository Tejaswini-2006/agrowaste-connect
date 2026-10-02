import React, { useState } from "react";
import { Search, Filter, MapPin, Truck, ShieldCheck, Plus, Leaf, CheckCircle2, Phone, Calendar, ArrowUpRight, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export interface WasteListing {
  id: string;
  farmerName: string;
  cropType: string;
  quantityTonnes: number;
  pricePerTonne: number;
  location: string;
  state: string;
  moistureContent: string;
  idealFor: string;
  image: string;
  verified: boolean;
  datePosted: string;
  co2SavedTonnes: number;
}

const INITIAL_LISTINGS: WasteListing[] = [
  {
    id: "LIST-901",
    farmerName: "Gurpreet Singh",
    cropType: "Paddy Straw (Parali)",
    quantityTonnes: 25,
    pricePerTonne: 1800,
    location: "Ludhiana",
    state: "Punjab",
    moistureContent: "12%",
    idealFor: "Biofuel Pellets / Compressed Biogas",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
    verified: true,
    datePosted: "Today",
    co2SavedTonnes: 37.5,
  },
  {
    id: "LIST-902",
    farmerName: "Harinder Gill",
    cropType: "Wheat Stalk",
    quantityTonnes: 40,
    pricePerTonne: 2200,
    location: "Karnal",
    state: "Haryana",
    moistureContent: "10%",
    idealFor: "Cattle Feed / Mushroom Substrate",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80",
    verified: true,
    datePosted: "Yesterday",
    co2SavedTonnes: 56.0,
  },
  {
    id: "LIST-903",
    farmerName: "Rajendra Sharma",
    cropType: "Sugarcane Bagasse",
    quantityTonnes: 60,
    pricePerTonne: 1500,
    location: "Muzaffarnagar",
    state: "Uttar Pradesh",
    moistureContent: "15%",
    idealFor: "Paper Packaging / Cogeneration Boiler",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    verified: true,
    datePosted: "2 days ago",
    co2SavedTonnes: 90.0,
  },
  {
    id: "LIST-904",
    farmerName: "Bhavesh Patel",
    cropType: "Cotton Stalk",
    quantityTonnes: 30,
    pricePerTonne: 2400,
    location: "Rajkot",
    state: "Gujarat",
    moistureContent: "14%",
    idealFor: "Particle Board / Bio-char Briquettes",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
    verified: true,
    datePosted: "3 days ago",
    co2SavedTonnes: 42.0,
  },
  {
    id: "LIST-905",
    farmerName: "Vikram Rathore",
    cropType: "Mustard Straw",
    quantityTonnes: 18,
    pricePerTonne: 1950,
    location: "Bharatpur",
    state: "Rajasthan",
    moistureContent: "11%",
    idealFor: "Power Plant Biomass / Organic Fertilizer",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    verified: true,
    datePosted: "4 days ago",
    co2SavedTonnes: 27.0,
  }
];

interface MarketplaceProps {
  onOpenCreateListing?: () => void;
}

export const Marketplace: React.FC<MarketplaceProps> = () => {
  const [listings, setListings] = useState<WasteListing[]>(INITIAL_LISTINGS);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState<string>("all");
  const [selectedCrop, setSelectedCrop] = useState<string>("all");
  
  // Order Modal State
  const [selectedListing, setSelectedListing] = useState<WasteListing | null>(null);
  const [orderQuantity, setOrderQuantity] = useState<number>(10);
  const [buyerCompany, setBuyerCompany] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    id: string;
    listing: WasteListing;
    quantity: number;
    totalAmount: number;
    co2Saved: number;
  } | null>(null);

  // New Listing Modal State
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newFarmerName, setNewFarmerName] = useState("");
  const [newCropType, setNewCropType] = useState("Paddy Straw (Parali)");
  const [newQuantity, setNewQuantity] = useState("20");
  const [newPrice, setNewPrice] = useState("1800");
  const [newLocation, setNewLocation] = useState("");
  const [newState, setNewState] = useState("Punjab");
  const [newMoisture, setNewMoisture] = useState("12%");

  // Filtering logic
  const filteredListings = listings.filter((item) => {
    const matchesSearch =
      item.cropType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.farmerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.idealFor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesState = selectedState === "all" || item.state === selectedState;
    const matchesCrop = selectedCrop === "all" || item.cropType.toLowerCase().includes(selectedCrop.toLowerCase());

    return matchesSearch && matchesState && matchesCrop;
  });

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedListing) return;
    if (!buyerCompany || !buyerPhone || !deliveryAddress) {
      toast.error("Please fill in all buyer information fields");
      return;
    }

    setIsSubmittingOrder(true);
    setTimeout(() => {
      setIsSubmittingOrder(false);
      const totalAmount = orderQuantity * selectedListing.pricePerTonne;
      const co2Saved = Math.round(orderQuantity * 1.5 * 10) / 10;
      const orderId = `AGRO-${Math.floor(100000 + Math.random() * 900000)}`;

      setConfirmedOrder({
        id: orderId,
        listing: selectedListing,
        quantity: orderQuantity,
        totalAmount,
        co2Saved,
      });

      toast.success(`Order ${orderId} placed successfully!`);
      setSelectedListing(null);
    }, 1000);
  };

  const handleCreateListing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFarmerName || !newLocation) {
      toast.error("Please fill in farmer name and district");
      return;
    }

    const created: WasteListing = {
      id: `LIST-${Math.floor(900 + Math.random() * 100)}`,
      farmerName: newFarmerName,
      cropType: newCropType,
      quantityTonnes: parseFloat(newQuantity) || 10,
      pricePerTonne: parseFloat(newPrice) || 1500,
      location: newLocation,
      state: newState,
      moistureContent: newMoisture,
      idealFor: newCropType.includes("Paddy")
        ? "Biofuel Pellets / Biogas"
        : newCropType.includes("Wheat")
        ? "Cattle Feed / Substrate"
        : "Industrial Raw Material",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
      verified: true,
      datePosted: "Just now",
      co2SavedTonnes: Math.round((parseFloat(newQuantity) || 10) * 1.5 * 10) / 10,
    };

    setListings([created, ...listings]);
    setIsCreateOpen(false);
    toast.success("Crop waste listing added to live marketplace!");
  };

  return (
    <section id="marketplace" className="section-padding bg-muted/20">
      <div className="container-custom space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-accent" /> Live Waste Marketplace
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Browse & Source Crop Waste Direct from Farms
            </h2>
            <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
              Verified crop stubble listings with moisture details, AI pricing, and automated field logistics.
            </p>
          </div>

          <Button
            onClick={() => setIsCreateOpen(true)}
            className="btn-primary-hero px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg"
          >
            <Plus className="w-5 h-5" /> List Crop Waste
          </Button>
        </div>

        {/* Filter Controls */}
        <div className="bg-card p-4 rounded-3xl border border-border/60 shadow-sm flex flex-col md:flex-row gap-4 items-center">
          {/* Search bar */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by crop, farmer, location, or industrial use..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-2xl border-border/80 text-sm"
            />
          </div>

          {/* State Filter */}
          <div className="flex gap-2 w-full md:w-auto">
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="w-full md:w-44 rounded-2xl text-xs font-medium">
                <Filter className="w-3.5 h-3.5 mr-1 text-muted-foreground" />
                <SelectValue placeholder="State: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                <SelectItem value="Punjab">Punjab</SelectItem>
                <SelectItem value="Haryana">Haryana</SelectItem>
                <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                <SelectItem value="Gujarat">Gujarat</SelectItem>
                <SelectItem value="Rajasthan">Rajasthan</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCrop} onValueChange={setSelectedCrop}>
              <SelectTrigger className="w-full md:w-44 rounded-2xl text-xs font-medium">
                <SelectValue placeholder="Crop: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Crop Types</SelectItem>
                <SelectItem value="Paddy">Paddy Straw (Parali)</SelectItem>
                <SelectItem value="Wheat">Wheat Stalk</SelectItem>
                <SelectItem value="Sugarcane">Sugarcane Bagasse</SelectItem>
                <SelectItem value="Cotton">Cotton Stalk</SelectItem>
                <SelectItem value="Mustard">Mustard Straw</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Listing Grid */}
        {filteredListings.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-3xl border border-border/50 space-y-3">
            <Leaf className="w-12 h-12 text-muted-foreground mx-auto opacity-50" />
            <h3 className="text-lg font-semibold text-foreground">No Crop Waste Listings Found</h3>
            <p className="text-xs text-muted-foreground">Try clearing your search query or filters.</p>
            <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedState("all"); setSelectedCrop("all"); }} className="rounded-xl text-xs mt-2">
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <div
                key={listing.id}
                className="bg-card border border-border/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Banner */}
                <div className="relative h-44 overflow-hidden bg-muted">
                  <img
                    src={listing.image}
                    alt={listing.cropType}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold">
                      {listing.cropType}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <Badge variant="secondary" className="bg-background/90 text-foreground backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold shadow-md">
                      ₹{listing.pricePerTonne} / tonne
                    </Badge>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {listing.location}, {listing.state}
                      </div>
                      <span className="text-[11px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {listing.datePosted}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground flex items-center gap-1.5">
                      {listing.farmerName}
                      {listing.verified && <CheckCircle2 className="w-4 h-4 text-success" title="Verified Farmer" />}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 text-xs py-2 px-3 bg-muted/50 rounded-2xl">
                      <div>
                        <span className="text-muted-foreground block text-[11px]">Available Volume</span>
                        <span className="font-bold text-foreground">{listing.quantityTonnes} Tonnes</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-[11px]">Moisture Level</span>
                        <span className="font-bold text-primary">{listing.moistureContent}</span>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground pt-1">
                      <span className="font-semibold text-foreground">Recommended Use: </span>
                      {listing.idealFor}
                    </div>
                  </div>

                  {/* Actions & Environmental Tag */}
                  <div className="pt-3 border-t border-border/40 space-y-3">
                    <div className="flex items-center justify-between text-xs text-success font-medium">
                      <span className="flex items-center gap-1">
                        <Leaf className="w-3.5 h-3.5" /> Saves {listing.co2SavedTonnes}t CO2
                      </span>
                      <span className="text-muted-foreground text-[11px]">{listing.id}</span>
                    </div>

                    <Button
                      onClick={() => {
                        setSelectedListing(listing);
                        setOrderQuantity(Math.min(10, listing.quantityTonnes));
                      }}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl py-2.5 flex items-center justify-center gap-1.5 text-sm shadow-md"
                    >
                      <Truck className="w-4 h-4" /> Request Pickup / Order
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ORDER PICKUP MODAL */}
        <Dialog open={!!selectedListing} onOpenChange={(open) => !open && setSelectedListing(null)}>
          <DialogContent className="sm:max-w-lg bg-card border-border rounded-3xl p-6 shadow-2xl">
            <DialogHeader className="text-left space-y-1">
              <DialogTitle className="text-xl font-bold flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" /> Place Crop Waste Order
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Connecting with farmer <span className="font-semibold text-foreground">{selectedListing?.farmerName}</span> in {selectedListing?.location}, {selectedListing?.state}
              </DialogDescription>
            </DialogHeader>

            {selectedListing && (
              <form onSubmit={handlePlaceOrder} className="space-y-4 mt-2">
                <div className="p-3 bg-muted/60 rounded-2xl text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Crop Material:</span>
                    <span className="font-bold text-foreground">{selectedListing.cropType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rate:</span>
                    <span className="font-bold text-primary">₹{selectedListing.pricePerTonne} / tonne</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max Available:</span>
                    <span className="font-bold text-foreground">{selectedListing.quantityTonnes} Tonnes</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="orderQty" className="text-xs font-semibold">
                    Select Quantity (Tonnes): <span className="text-primary font-bold">{orderQuantity} T</span>
                  </Label>
                  <input
                    id="orderQty"
                    type="range"
                    min={1}
                    max={selectedListing.quantityTonnes}
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(parseInt(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs font-medium">Buyer / Business Name</Label>
                    <Input
                      placeholder="e.g. BioEnergy Plant"
                      value={buyerCompany}
                      onChange={(e) => setBuyerCompany(e.target.value)}
                      required
                      className="rounded-xl text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs font-medium">Contact Phone</Label>
                    <Input
                      placeholder="e.g. 9876543210"
                      value={buyerPhone}
                      onChange={(e) => setBuyerPhone(e.target.value)}
                      required
                      className="rounded-xl text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-medium">Delivery Factory Address</Label>
                  <Input
                    placeholder="Enter factory/processing unit address..."
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    required
                    className="rounded-xl text-xs"
                  />
                </div>

                {/* Price & Environmental Summary */}
                <div className="p-4 bg-primary/10 rounded-2xl space-y-2 border border-primary/20">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Material Cost ({orderQuantity} tonnes):</span>
                    <span className="font-semibold text-foreground">₹{(orderQuantity * selectedListing.pricePerTonne).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Field Pickup & Logistics Fee:</span>
                    <span className="font-semibold text-success">Included (Free Logistics)</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-foreground pt-1 border-t border-primary/20">
                    <span>Total Amount Payable:</span>
                    <span className="text-primary text-base">₹{(orderQuantity * selectedListing.pricePerTonne).toLocaleString()}</span>
                  </div>
                </div>

                <DialogFooter className="gap-2 sm:gap-0">
                  <Button type="button" variant="outline" onClick={() => setSelectedListing(null)} className="rounded-xl text-xs">
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmittingOrder} className="bg-primary text-primary-foreground rounded-xl text-xs font-semibold">
                    {isSubmittingOrder ? "Confirming Order..." : "Confirm & Schedule Pickup"}
                  </Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>

        {/* CONFIRMED ORDER RECEIPT MODAL */}
        <Dialog open={!!confirmedOrder} onOpenChange={() => setConfirmedOrder(null)}>
          <DialogContent className="sm:max-w-md bg-card border-border rounded-3xl p-6 text-center shadow-2xl">
            <div className="w-16 h-16 bg-success/15 rounded-full flex items-center justify-center mx-auto text-success mb-2">
              <CheckCircle2 className="w-10 h-10 animate-bounce-gentle" />
            </div>
            <DialogHeader className="text-center">
              <DialogTitle className="text-xl font-bold text-foreground">Order Successfully Booked!</DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Tracking ID: <span className="font-bold text-primary font-mono">{confirmedOrder?.id}</span>
              </DialogDescription>
            </DialogHeader>

            {confirmedOrder && (
              <div className="space-y-4 my-3 text-left">
                <div className="p-4 bg-muted/60 rounded-2xl space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Farmer Name:</span>
                    <span className="font-bold text-foreground">{confirmedOrder.listing.farmerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-bold text-foreground">{confirmedOrder.listing.location}, {confirmedOrder.listing.state}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity Booked:</span>
                    <span className="font-bold text-primary">{confirmedOrder.quantity} Tonnes</span>
                  </div>
                  <div className="flex justify-between border-t border-border/40 pt-1 font-bold text-sm">
                    <span>Total Amount:</span>
                    <span className="text-primary">₹{confirmedOrder.totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                <div className="p-3 bg-success/10 border border-success/30 rounded-2xl flex items-center gap-2 text-xs text-success">
                  <Leaf className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Environmental Impact:</span> Prevented {confirmedOrder.co2Saved} tonnes of CO2 stubble burning emissions!
                  </div>
                </div>
              </div>
            )}

            <Button onClick={() => setConfirmedOrder(null)} className="w-full rounded-2xl bg-primary text-primary-foreground">
              Close & Track Delivery
            </Button>
          </DialogContent>
        </Dialog>

        {/* CREATE LISTING MODAL FOR FARMERS */}
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogContent className="sm:max-w-md bg-card border-border rounded-3xl p-6 shadow-2xl">
            <DialogHeader className="text-left space-y-1">
              <DialogTitle className="text-xl font-bold flex items-center gap-2">
                <Leaf className="w-5 h-5 text-primary" /> List Your Crop Waste
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Get instant buyers and fair market pricing for your stubble.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleCreateListing} className="space-y-4 mt-2">
              <div className="space-y-1">
                <Label className="text-xs font-medium">Your Name</Label>
                <Input
                  placeholder="e.g. Ramesh Kumar"
                  value={newFarmerName}
                  onChange={(e) => setNewFarmerName(e.target.value)}
                  required
                  className="rounded-xl text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs font-medium">Crop Type</Label>
                  <Select value={newCropType} onValueChange={setNewCropType}>
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
                  <Label className="text-xs font-medium">Volume (Tonnes)</Label>
                  <Input
                    type="number"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(e.target.value)}
                    required
                    className="rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs font-medium">Price per Tonne (₹)</Label>
                  <Input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    required
                    className="rounded-xl text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-medium">Moisture Content</Label>
                  <Select value={newMoisture} onValueChange={setNewMoisture}>
                    <SelectTrigger className="rounded-xl text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10%">10% (Dry / Best Quality)</SelectItem>
                      <SelectItem value="12%">12% (Standard)</SelectItem>
                      <SelectItem value="15%">15% (Semi-Dry)</SelectItem>
                      <SelectItem value="20%">20% (Fresh Harvest)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs font-medium">District / Town</Label>
                  <Input
                    placeholder="e.g. Ludhiana"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    required
                    className="rounded-xl text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-medium">State</Label>
                  <Select value={newState} onValueChange={setNewState}>
                    <SelectTrigger className="rounded-xl text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Punjab">Punjab</SelectItem>
                      <SelectItem value="Haryana">Haryana</SelectItem>
                      <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="Gujarat">Gujarat</SelectItem>
                      <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <DialogFooter className="gap-2 sm:gap-0 pt-2">
                <Button type="button" variant="outline" onClick={() => setIsCreateOpen(false)} className="rounded-xl text-xs">
                  Cancel
                </Button>
                <Button type="submit" className="bg-primary text-primary-foreground rounded-xl text-xs font-semibold">
                  Publish Crop Waste Listing
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
