import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <div className="space-y-8 mb-12">
      <Card className="bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 text-white p-8 rounded-3xl shadow-2xl">
        <h3 className="text-4xl font-bold mb-4">
          IIS 멘델에 오신 것을 환영합니다! | Benvenuti all'IIS Mendel!
        </h3>
        <p className="text-xl mb-4">
          우리 연구소의 우수성을 발견하세요! 모든 질문에 답하고 미래 선택을 안내해 드립니다.
        </p>
        <p className="text-xl mb-6">
          Scoprite le eccellenze del nostro Istituto! Siamo qui per rispondere a tutte le vostre domande e guidarvi nella scelta del vostro futuro.
        </p>
        <Button 
          onClick={() => window.open('https://agrariomendel.edu.it/servizi/percorsi-di-studio', '_blank')}
          className="bg-white text-pink-600 hover:bg-pink-50 font-bold text-lg px-8 py-6 rounded-xl"
        >
          🎓 Esplora gli Indirizzi
        </Button>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
        <h4 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          농업의 미래 | Il Futuro dell'Agraria
        </h4>
        <p className="text-lg text-muted-foreground">
          L'Istituto Mendel è la scuola superiore di riferimento per l'Agraria, l'Ambiente e l'Agroindustria del territorio, unendo tradizione, innovazione e opportunità concrete di lavoro e studio.
        </p>
      </Card>
    </div>
  );
};
