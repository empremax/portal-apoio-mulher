import { motion } from "framer-motion";
import { Equal, Users } from "lucide-react";

export default function OdsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-terracotta/15 flex items-center justify-center">
            <Equal className="w-6 h-6 text-terracotta" />
          </div>
          <div>
            <span className="text-xs font-bold text-terracotta uppercase tracking-wider">
              ODS 5
            </span>
            <h3
              className="text-lg font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Igualdade de Gênero
            </h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Alcançar a igualdade de gênero e empoderar todas as mulheres e
          meninas. Acabar com todas as formas de discriminação e violência contra
          mulheres e meninas em toda parte.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-olive/15 flex items-center justify-center">
            <Users className="w-6 h-6 text-olive" />
          </div>
          <div>
            <span className="text-xs font-bold text-olive uppercase tracking-wider">
              ODS 10
            </span>
            <h3
              className="text-lg font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Redução das Desigualdades
            </h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Reduzir a desigualdade dentro dos países e entre eles. Empoderar e
          promover a inclusão social, econômica e política de todos,
          independentemente de gênero, raça ou condição social.
        </p>
      </motion.div>
    </div>
  );
}
