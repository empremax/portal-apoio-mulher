/**
 * Portal de Apoio e Proteção à Mulher
 * Design: "Acolhimento Orgânico" - tons terrosos quentes, formas suaves, tipografia acolhedora
 * Fonts: Playfair Display (display) + Nunito (body)
 * Colors: Terracotta, Cream, Olive, Warm Brown
 */

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  GraduationCap,
  HeartPulse,
  Scale,
  Smartphone,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import EmergencyBanner from "@/components/EmergencyBanner";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import ResourceCard from "@/components/ResourceCard";
import WaveDivider from "@/components/WaveDivider";
import OdsSection from "@/components/OdsSection";
import {
  resources,
  searchResources,
  categoryInfo,
  type ResourceCategory,
} from "@/lib/resources";

const HERO_IMG =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030213103/qmcEWXilyYSyxQjb.jpg";

const DENUNCIA_IMG =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030213103/AHtXAAixHbnmbQSe.jpg";

const CAPACITACAO_IMG =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030213103/npAblsOzUlzcwdTC.jpg";

const SAUDE_IMG =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030213103/aAbwUveUtrZJgqCH.jpg";

const DIREITOS_IMG =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030213103/WbEdVpYAiIrSkjEy.jpg";

const sectionImages: Partial<Record<ResourceCategory, string>> = {
  denuncia: DENUNCIA_IMG,
  capacitacao: CAPACITACAO_IMG,
  saude: SAUDE_IMG,
  direitos: DIREITOS_IMG,
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Heart,
  GraduationCap,
  HeartPulse,
  Scale,
  Smartphone,
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    ResourceCategory | "all"
  >("all");

  const filteredResources = useMemo(() => {
    let result = searchQuery ? searchResources(searchQuery) : resources;
    if (selectedCategory !== "all") {
      result = result.filter((r) => r.category === selectedCategory);
    }
    return result;
  }, [searchQuery, selectedCategory]);

  const groupedResources = useMemo(() => {
    if (selectedCategory !== "all" || searchQuery) return null;
    const groups: Partial<Record<ResourceCategory, typeof resources>> = {};
    for (const r of filteredResources) {
      if (!groups[r.category]) groups[r.category] = [];
      groups[r.category]!.push(r);
    }
    return groups;
  }, [filteredResources, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Emergency Banner */}
      <EmergencyBanner />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-terracotta-dark">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-terracotta-dark/80 via-terracotta-dark/70 to-terracotta-dark/90" />
        </div>

        <div className="relative container py-16 sm:py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-cream" />
              <span className="text-cream/80 text-sm font-semibold tracking-wider uppercase">
                Igualdade e Proteção para Todas
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Portal de Apoio e{" "}
              <span className="text-cream/90 italic">Proteção</span> à Mulher
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-cream/80 leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Guias simples, explicações passo a passo e links diretos para
              denunciar violência, buscar apoio jurídico e psicológico, acessar
              cursos gratuitos e conhecer seus direitos.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#recursos"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-cream text-terracotta-dark rounded-2xl font-bold text-base hover:bg-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                <ArrowDown className="w-5 h-5" />
                Ver Recursos
              </a>
              <a
                href="tel:180"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border-2 border-cream/40 text-cream rounded-2xl font-bold text-base hover:bg-cream/10 transition-all duration-200"
              >
                <Shield className="w-5 h-5" />
                Ligue 180
              </a>
            </div>
          </motion.div>
        </div>

        <WaveDivider flip color="oklch(0.97 0.01 85)" />
      </section>

      {/* ODS Section */}
      <section className="py-12 sm:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-sm font-bold text-terracotta uppercase tracking-wider">
              Objetivos de Desenvolvimento Sustentável
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-foreground mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nosso Compromisso
            </h2>
          </motion.div>
          <OdsSection />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-terracotta/5 py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { number: "25", label: "Recursos Disponíveis", icon: Sparkles },
              { number: "6", label: "Categorias", icon: Shield },
              { number: "100%", label: "Gratuito", icon: Heart },
              { number: "24h", label: "Linhas de Emergência", icon: HeartPulse },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-4 sm:p-6 bg-card rounded-2xl border border-border/50 shadow-sm"
              >
                <stat.icon className="w-6 h-6 text-terracotta mx-auto mb-2" />
                <div
                  className="text-2xl sm:text-3xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="recursos" className="py-12 sm:py-16 scroll-mt-4">
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-sm font-bold text-terracotta uppercase tracking-wider">
              Encontre Ajuda
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Recursos e Ferramentas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Busque pelo tipo de problema ou navegue pelas categorias abaixo.
              Todos os recursos são gratuitos e acessíveis.
            </p>
          </motion.div>

          {/* Search */}
          <div className="mb-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          {/* Category Filter */}
          <div className="mb-10">
            <CategoryFilter
              selected={selectedCategory}
              onSelect={(cat) => {
                setSelectedCategory(cat);
                setSearchQuery("");
              }}
            />
          </div>

          {/* Results */}
          {filteredResources.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-lg text-muted-foreground mb-2">
                Nenhum recurso encontrado para sua busca.
              </p>
              <p className="text-sm text-muted-foreground">
                Tente outros termos ou selecione uma categoria diferente.
              </p>
            </motion.div>
          ) : groupedResources ? (
            /* Grouped by category */
            Object.entries(groupedResources).map(([cat, items]) => {
              const info = categoryInfo[cat as ResourceCategory];
              const Icon = iconMap[info.icon];
              const sectionImg = sectionImages[cat as ResourceCategory];

              return (
                <div key={cat} className="mb-12 last:mb-0">
                  {/* Category header with optional image */}
                  {sectionImg && (
                    <div className="relative rounded-2xl overflow-hidden mb-6 h-40 sm:h-48">
                      <img
                        src={sectionImg}
                        alt={info.label}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
                      <div className="absolute inset-0 flex items-center p-6 sm:p-8">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            {Icon && (
                              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                            )}
                            <h3
                              className="text-xl sm:text-2xl font-bold text-white"
                              style={{ fontFamily: "var(--font-display)" }}
                            >
                              {info.label}
                            </h3>
                          </div>
                          <p className="text-white/80 text-sm sm:text-base max-w-lg">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {!sectionImg && (
                    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/50">
                      {Icon && (
                        <div className="w-10 h-10 rounded-xl bg-terracotta/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-terracotta" />
                        </div>
                      )}
                      <div>
                        <h3
                          className="text-xl font-bold text-foreground"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {info.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items!.map((resource, i) => (
                      <ResourceCard
                        key={resource.id}
                        resource={resource}
                        index={i}
                      />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            /* Flat list (filtered) */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredResources.map((resource, i) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How to use section */}
      <section className="bg-terracotta/5 py-12 sm:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-sm font-bold text-olive uppercase tracking-wider">
              Guia Rápido
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-foreground mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Como Usar Este Portal
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Identifique o Problema",
                desc: "Use a barra de busca ou selecione uma categoria para encontrar o recurso certo para sua situação.",
              },
              {
                step: "2",
                title: "Siga o Passo a Passo",
                desc: "Cada recurso tem um guia simples com instruções claras. Clique em 'Como usar' para ver os passos.",
              },
              {
                step: "3",
                title: "Acesse o Recurso",
                desc: "Clique no botão 'Acessar' para ser direcionada ao site ou serviço. Todos são gratuitos.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3
                  className="text-lg font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 sm:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <span className="text-sm font-bold text-terracotta uppercase tracking-wider">
                Dicas Importantes
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-foreground mt-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Como Reunir Provas
              </h2>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border/50 shadow-sm">
              <div className="space-y-4">
                {[
                  "Tire capturas de tela (prints) de todas as mensagens, publicações ou conteúdos ofensivos",
                  "Salve os links (URLs) das páginas onde o conteúdo aparece",
                  "Anote nomes de usuário, números de telefone e perfis envolvidos",
                  "Registre datas e horários de cada ocorrência",
                  "Guarde áudios, vídeos e fotos em local seguro (nuvem ou pen drive)",
                  "Não apague as conversas originais - elas são provas",
                  "Leve todo o material reunido à delegacia ou ao advogado",
                ].map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-cream/60"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-olive/15 text-olive flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <p className="text-sm text-foreground pt-0.5">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-terracotta-dark text-cream/80 py-10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3
              className="text-xl font-bold text-cream mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Portal de Apoio e Proteção à Mulher
            </h3>
            <p className="text-sm leading-relaxed mb-6 max-w-2xl mx-auto">
              Este portal reúne caminhos de denúncia, apoio e orientação básica
              para mulheres em situação de vulnerabilidade. Em caso de
              emergência, procure ajuda imediata ligando para o{" "}
              <a href="tel:180" className="text-cream font-bold underline">
                180
              </a>{" "}
              ou{" "}
              <a href="tel:190" className="text-cream font-bold underline">
                190
              </a>
              .
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-cream/60">
              <span>Igualdade de Gênero</span>
              <span>·</span>
              <span>Redução das Desigualdades</span>
              <span>·</span>
              <span>Empoderamento Feminino</span>
            </div>
            <p className="text-xs text-cream/40 mt-4">
              As informações deste portal são de caráter orientativo. Procure
              sempre assistência profissional qualificada.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
