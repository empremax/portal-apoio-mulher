import { useState } from "react";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Phone,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Resource } from "@/lib/resources";

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

export default function ResourceCard({ resource, index }: ResourceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-border/50 hover:border-terracotta-light/40">
        <div className="p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                {resource.isEmergency && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                    <AlertTriangle className="w-3 h-3" />
                    Emergência
                  </span>
                )}
                {resource.phone && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-terracotta-light/20 text-terracotta-dark">
                    <Phone className="w-3 h-3" />
                    {resource.phone}
                  </span>
                )}
              </div>
              <h3
                className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-terracotta transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {resource.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
            {resource.description}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-terracotta text-white rounded-xl text-sm font-semibold hover:bg-terracotta-dark transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Acessar
            </a>

            {resource.steps && resource.steps.length > 0 && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-cream-dark text-foreground rounded-xl text-sm font-medium hover:bg-cream transition-all duration-200"
              >
                {isOpen ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Fechar passo a passo
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Como usar
                  </>
                )}
              </button>
            )}
          </div>

          {/* Steps accordion */}
          <AnimatePresence>
            {isOpen && resource.steps && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-2">
                  {resource.steps.map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-cream/80"
                    >
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <p className="text-sm text-foreground pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
