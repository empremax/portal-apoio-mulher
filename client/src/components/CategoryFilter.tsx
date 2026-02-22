import {
  Shield,
  Heart,
  GraduationCap,
  HeartPulse,
  Scale,
  Smartphone,
  LayoutGrid,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ResourceCategory } from "@/lib/resources";
import { categoryInfo } from "@/lib/resources";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Heart,
  GraduationCap,
  HeartPulse,
  Scale,
  Smartphone,
};

interface CategoryFilterProps {
  selected: ResourceCategory | "all";
  onSelect: (cat: ResourceCategory | "all") => void;
}

export default function CategoryFilter({
  selected,
  onSelect,
}: CategoryFilterProps) {
  const categories = Object.entries(categoryInfo) as [
    ResourceCategory,
    (typeof categoryInfo)[ResourceCategory],
  ][];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => onSelect("all")}
        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
          selected === "all"
            ? "bg-terracotta text-white shadow-md"
            : "bg-card text-muted-foreground hover:bg-cream-dark border border-border/50"
        }`}
      >
        <LayoutGrid className="w-4 h-4" />
        Todos
      </motion.button>

      {categories.map(([key, info]) => {
        const Icon = iconMap[info.icon];
        return (
          <motion.button
            key={key}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onSelect(key)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              selected === key
                ? "bg-terracotta text-white shadow-md"
                : "bg-card text-muted-foreground hover:bg-cream-dark border border-border/50"
            }`}
          >
            {Icon && <Icon className="w-4 h-4" />}
            <span className="hidden sm:inline">{info.label}</span>
            <span className="sm:hidden">{info.label.split(" ")[0]}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
