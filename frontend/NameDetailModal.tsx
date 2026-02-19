import { BusinessName } from "@/data/businessNames";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface NameDetailModalProps {
  name: BusinessName;
  onClose: () => void;
}

export default function NameDetailModal({ name, onClose }: NameDetailModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(name.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900">
            {name.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Badges */}
          <div className="flex gap-2 flex-wrap">
            <Badge className="bg-orange-100 text-orange-700 border border-orange-300">
              {name.category}
            </Badge>
            <Badge variant="outline" className="border-blue-300 text-blue-700">
              {name.linguisticRoot}
            </Badge>
          </div>

          {/* Origin & Meaning */}
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-4 border border-orange-200">
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-1">Origin</p>
              <p className="text-lg text-gray-900 font-semibold">{name.origin}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-1">Meaning</p>
              <p className="text-lg text-gray-900">{name.meaning}</p>
            </div>
          </div>

          {/* Brand Personality */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Brand Personality</h3>
            <p className="text-gray-800 leading-relaxed">{name.personality}</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{name.description}</p>
          </div>

          {/* Suitable For */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Suitable For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {name.suitableFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 p-2 bg-emerald-50 rounded-lg border border-emerald-200"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="text-sm text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {name.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <Button
              onClick={handleCopy}
              className="flex-1 gap-2 bg-orange-600 hover:bg-orange-700 text-white"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy Name
                </>
              )}
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
