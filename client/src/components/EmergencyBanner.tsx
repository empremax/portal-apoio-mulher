import { Phone, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { getEmergencyResources } from "@/lib/resources";

export default function EmergencyBanner() {
  const emergencyResources = getEmergencyResources();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-red-50 border-b-2 border-red-200"
    >
      <div className="container py-3">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
          <span className="text-sm font-bold text-red-700">
            Em caso de emergência, ligue agora:
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {emergencyResources.map((r) => (
            <a
              key={r.id}
              href={`tel:${r.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-red-200 text-red-700 font-bold text-sm hover:bg-red-100 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{r.phone}</span>
              <span className="text-red-500 font-normal text-xs hidden sm:inline">
                - {r.title.split("-")[0].trim()}
              </span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
