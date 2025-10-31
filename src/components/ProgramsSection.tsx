import { Card } from "@/components/ui/card";

export const ProgramsSection = () => {
  const programs = [
    {
      title: "기술 연구소 | Istituto Tecnico",
      korean: "환경 및 영토 관리(GAT) 또는 생산 및 가공(PT) 전문화를 갖춘 농업 전문가 학위",
      italian: "Diploma di Perito Agrario con specializzazioni in Gestione Ambiente e Territorio (GAT) o Produzioni e Trasformazioni (PT)",
    },
    {
      title: "국립 직업학교 | Professionale Statale",
      korean: "농업, 농촌 개발, 제품 및 영토 강화, 산림 및 산악 자원 관리",
      italian: "Indirizzo: Agricoltura, sviluppo rurale, valorizzazione dei prodotti e del territorio e gestione delle risorse forestali e montane",
    },
    {
      title: "직업 훈련 (IEFP) | Formazione Professionale (IEFP)",
      korean: "농업 운영자 자격증 및 농업 기술자 학위 (지역 IEFP)",
      italian: "Qualifica di Operatore Agricolo e Diploma di Tecnico Agricolo (IEFP Regionale)",
    },
    {
      title: "야간 과정 (IDA) | Corsi Serali (IDA)",
      korean: "성인 및 근로자를 위한 기술 및 전문 교육 과정",
      italian: "Percorsi per adulti e lavoratori, tecnici e professionali",
    },
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl mb-8">
      <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        🎯 우리의 교육 프로그램 | 🎯 La nostra offerta formativa
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((program, index) => (
          <div 
            key={index} 
            className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
          >
            <h4 className="text-xl font-bold mb-3 text-primary">{program.title}</h4>
            <p className="text-sm mb-2 font-semibold">{program.korean}</p>
            <p className="text-sm text-muted-foreground">{program.italian}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
