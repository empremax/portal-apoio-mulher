import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Busque por tipo de problema (ex: fotos íntimas, ameaça, golpe...)"
        className="w-full pl-12 pr-12 py-4 rounded-2xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/60 text-base focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all shadow-sm"
        style={{ fontFamily: "var(--font-body)" }}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-terracotta/20 transition-colors"
        >
          <X className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
      )}
    </div>
  );
}
