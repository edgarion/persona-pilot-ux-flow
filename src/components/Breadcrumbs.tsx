import { ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  href: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 animate-fade-in">
      <Home className="w-4 h-4" />
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-600" />}
          {index === items.length - 1 ? (
            <span className="text-white font-medium">{item.label}</span>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={item.onClick}
              className="text-gray-400 hover:text-white p-0 h-auto font-normal hover:bg-transparent"
            >
              {item.label}
            </Button>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;