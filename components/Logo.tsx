import { PenTool } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">

      <div className="leading-tight">
        <div className="font-semibold text-lg winky-font">King's Signing</div>
        <div className="text-sm tracking-wide winky-font">Mobile Notary</div>
      </div>
      <PenTool size={36} strokeWidth={2.5} className="text-foreground" />
    </div>
  );
};


export default Logo; 
