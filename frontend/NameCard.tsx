import { BusinessName } from "@/data/businessNames";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface NameCardProps {
  name: BusinessName;
  onClick: () => void;
}

export default function NameCard({ name, onClick }: NameCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
          {name.name}
        </h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-300">
            {name.category}
          </Badge>
          <Badge variant="outline" className="border-blue-300 text-blue-700">
            {name.linguisticRoot}
          </Badge>
        </div>
      </div>

      {/* Meaning */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 font-medium mb-1">Meaning</p>
        <p className="text-gray-900 font-semibold">{name.meaning}</p>
      </div>

      {/* Personality */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 font-medium mb-1">Brand Personality</p>
        <p className="text-gray-800">{name.personality}</p>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {name.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
        View Details
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}
