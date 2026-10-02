import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Volume2, Sparkles, Languages, CheckCircle2, MessageSquare } from "lucide-react";
import { toast } from "sonner";

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SAMPLE_QUERIES = [
  {
    lang: "Hindi",
    query: "पंजाब में धान की पराली का ताज़ा रेट क्या है?",
    englishTranslation: "What is the latest rate for paddy straw in Punjab?",
    answer: "पंजाब (लुधियाना/पटियाला) में धान की पराली का रेट ₹1,800 से ₹2,200 प्रति टन है। बायो-सीएनजी और पेलेट प्लांट सबसे ज्यादा खरीदारी कर रहे हैं।",
  },
  {
    lang: "Punjabi",
    query: "ਮੈਂ 20 ਟਨ ਕਣਕ ਦੇ ਨਾੜ ਦੀ ਪਿਕਅੱਪ ਕਿਵੇਂ ਬੁੱਕ ਕਰਾਂ?",
    englishTranslation: "How do I book a pickup for 20 tonnes of wheat straw?",
    answer: "ਤੁਸੀਂ ਐਪ 'ਚ 'List Crop Waste' ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰਕੇ ਖੇਤ ਦੀ ਲੋਕੇਸ਼ਨ ਅਤੇ ਫੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ। ਸਾਡੀ ਟੀਮ 24 ਘੰਟਿਆਂ ਵਿੱਚ ਪਿਕਅੱਪ ਵਾਹਨ ਭੇਜੇਗੀ।",
  },
  {
    lang: "Marathi",
    query: "ऊस बागासचे दर काय चालू आहेत?",
    englishTranslation: "What are the current rates for sugarcane bagasse?",
    answer: "महाराष्ट्रात उसाच्या बागासचा भाव ₹1,500 ते ₹1,700 प्रति टन आहे. कागद उद्योग व बॉयलर कारखान्यांकडून मोठी मागणी आहे.",
  },
  {
    lang: "English",
    query: "How does payment reach my bank account after waste pickup?",
    englishTranslation: "Payment process explanation",
    answer: "Once the waste is loaded and weighed at the field scale, the buyer approves the digital receipt and payment is transferred directly via UPI/NEFT within 2 hours.",
  }
];

export const VoiceAssistantModal: React.FC<VoiceAssistantModalProps> = ({ isOpen, onClose }) => {
  const [selectedLang, setSelectedLang] = useState<string>("Hindi");
  const [activeQueryIndex, setActiveQueryIndex] = useState<number | null>(null);
  const [isListening, setIsListening] = useState(false);

  const handleSimulateVoiceInput = () => {
    setIsListening(true);
    toast.info("Listening... Speak your query in Hindi, Punjabi, Marathi, or English");

    setTimeout(() => {
      setIsListening(false);
      setActiveQueryIndex(0);
      toast.success("Voice recognized successfully!");
    }, 1800);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg bg-card border-border rounded-3xl p-6 shadow-2xl">
        <DialogHeader className="text-left space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-accent/20 text-accent-foreground flex items-center justify-center">
              <Mic className="w-5 h-5 text-accent animate-pulse" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">Multilingual Voice Assistant</DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Ask in your native language without typing (Hindi, Punjabi, Marathi, English)
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          {/* Voice Record Button */}
          <div className="p-6 bg-muted/40 rounded-3xl border border-border/50 text-center space-y-3">
            <button
              onClick={handleSimulateVoiceInput}
              disabled={isListening}
              className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all shadow-lg ${
                isListening
                  ? "bg-destructive text-destructive-foreground animate-ping"
                  : "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground hover:scale-105"
              }`}
            >
              {isListening ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
            </button>
            <p className="text-xs text-muted-foreground font-semibold">
              {isListening ? "Listening to your voice..." : "Tap microphone to speak or choose a sample query below"}
            </p>
          </div>

          {/* Sample Queries */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5">
              <Languages className="w-4 h-4 text-primary" /> Try Sample Voice Queries:
            </h4>

            <div className="space-y-2">
              {SAMPLE_QUERIES.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveQueryIndex(idx)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all text-xs space-y-1 ${
                    activeQueryIndex === idx
                      ? "bg-primary/10 border-primary text-foreground shadow-sm"
                      : "bg-card border-border/60 hover:bg-muted text-muted-foreground"
                  }`}
                >
                  <div className="flex justify-between items-center font-bold text-foreground">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-accent" /> {q.query}
                    </span>
                    <span className="text-[10px] bg-muted px-2 py-0.5 rounded-full font-semibold">{q.lang}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground italic">({q.englishTranslation})</p>
                </button>
              ))}
            </div>
          </div>

          {/* AI Voice Response Output */}
          {activeQueryIndex !== null && (
            <div className="p-4 bg-primary/10 rounded-2xl border border-primary/30 space-y-2 animate-fade-in">
              <div className="flex items-center justify-between text-xs text-primary font-bold">
                <span className="flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4" /> AI Audio Response:
                </span>
                <span className="text-[10px] bg-primary/20 px-2 py-0.5 rounded-full">Voice Simulated</span>
              </div>
              <p className="text-xs text-foreground font-medium leading-relaxed">
                "{SAMPLE_QUERIES[activeQueryIndex].answer}"
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
