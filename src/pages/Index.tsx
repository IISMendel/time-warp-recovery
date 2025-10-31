import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TimeTable } from "@/components/TimeTable";
import { ProgramsSection } from "@/components/ProgramsSection";
import { LabsSection } from "@/components/LabsSection";
import { ContactsSection } from "@/components/ContactsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: "var(--gradient-hero)",
        }}
      />
      
      <div className="relative z-10">
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
        
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {activeSection === "home" && (
            <>
              <HeroSection />
              <TimeTable />
              <ProgramsSection />
              <LabsSection />
            </>
          )}
          
          {activeSection === "contatti" && <ContactsSection />}
          
          {activeSection === "storia" && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                📖 역사 | Storia
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                L'Istituto Mendel rappresenta una lunga tradizione di eccellenza nell'educazione agraria.
              </p>
              <p className="text-lg text-muted-foreground">
                멘델 연구소는 농업 교육의 우수성에 대한 오랜 전통을 나타냅니다.
              </p>
            </div>
          )}
          
          {activeSection === "tecnico" && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                🎓 기술 | Tecnico
              </h2>
              <div className="space-y-4">
                <p className="text-lg font-semibold">환경 및 영토 관리(GAT) 또는 생산 및 가공(PT) 전문화를 갖춘 농업 전문가 학위</p>
                <p className="text-lg">Diploma di Perito Agrario con specializzazioni in Gestione Ambiente e Territorio (GAT) o Produzioni e Trasformazioni (PT)</p>
              </div>
            </div>
          )}
          
          {activeSection === "professionale" && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                🔧 전문 | Professionale
              </h2>
              <div className="space-y-4">
                <p className="text-lg font-semibold">농업, 농촌 개발, 제품 및 영토 강화, 산림 및 산악 자원 관리</p>
                <p className="text-lg">Indirizzo: Agricoltura, sviluppo rurale, valorizzazione dei prodotti e del territorio e gestione delle risorse forestali e montane</p>
              </div>
            </div>
          )}
          
          {activeSection === "formazione" && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                💼 학교-직장 교육 | Formazione Scuola-Lavoro
              </h2>
              <div className="space-y-4">
                <p className="text-lg font-semibold">농업 운영자 자격증 및 농업 기술자 학위 (지역 IEFP)</p>
                <p className="text-lg">Qualifica di Operatore Agricolo e Diploma di Tecnico Agricolo (IEFP Regionale)</p>
                <p className="text-lg mt-6 font-semibold">성인 및 근로자를 위한 기술 및 전문 교육 과정</p>
                <p className="text-lg">Percorsi per adulti e lavoratori, tecnici e professionali</p>
              </div>
            </div>
          )}
          
          {activeSection === "internazionalizzazione" && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                🌍 국제화 | Internazionalizzazione
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                L'IIS Mendel promuove opportunità di scambio internazionale e collaborazioni con istituti all'estero.
              </p>
              <p className="text-lg text-muted-foreground">
                IIS Mendel은 국제 교류 기회와 해외 기관과의 협력을 촉진합니다.
              </p>
            </div>
          )}
          
          {activeSection === "galleria" && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                📸 갤러리 | Galleria
              </h2>
              <p className="text-lg text-muted-foreground">
                Gallery coming soon... | 갤러리 준비 중...
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
