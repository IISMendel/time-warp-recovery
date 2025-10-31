import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navItems = [
    { id: "home", emoji: "🏠", korean: "홈", italian: "HOME" },
    { id: "storia", emoji: "📖", korean: "역사", italian: "STORIA" },
    { id: "tecnico", emoji: "🎓", korean: "기술", italian: "TECNICO" },
    { id: "professionale", emoji: "🔧", korean: "전문", italian: "PROFESSIONALE" },
    { id: "formazione", emoji: "💼", korean: "학교-직장 교육", italian: "FORMAZIONE SCUOLA-LAVORO" },
    { id: "internazionalizzazione", emoji: "🌍", korean: "국제화", italian: "INTERNAZIONALIZZAZIONE" },
    { id: "contatti", emoji: "📍", korean: "연락처", italian: "CONTATTI" },
    { id: "galleria", emoji: "📸", korean: "갤러리", italian: "GALLERIA" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div 
          className="text-center py-8 mb-4 rounded-2xl shadow-xl"
          style={{
            background: "var(--gradient-hero)",
          }}
        >
          <h1 className="text-5xl font-bold text-white mb-2">
            그레고리오 멘델 고등학교
          </h1>
          <h2 className="text-4xl font-bold text-white/90">
            IIS Gregorio Mendel
          </h2>
          <p className="text-white/80 mt-4 text-lg">
            빌라 코르테세(밀라노) - 농업과 환경의 미래를 발견하세요!
          </p>
          <p className="text-white/80 text-lg">
            Benvenuti al nostro Open Day! Scoprite il futuro dell'Agraria e dell'Ambiente a Villa Cortese (MI)
          </p>
        </div>

        <nav className="flex flex-wrap gap-2 justify-center">
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              variant={activeSection === item.id ? "default" : "outline"}
              className={`
                px-4 py-2 rounded-xl font-semibold transition-all duration-300
                ${activeSection === item.id 
                  ? "bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg scale-105" 
                  : "bg-white/50 hover:bg-white/80 hover:scale-105"
                }
              `}
            >
              <span className="mr-2">{item.emoji}</span>
              <span className="hidden sm:inline">{item.korean}</span>
              <span className="text-xs block sm:inline sm:ml-1">{item.italian}</span>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};
