import { Card } from "@/components/ui/card";

export const LabsSection = () => {
  const labs = [
    { korean: "화학 및 생물학/생명공학 실험실", italian: "Laboratorio di chimica e biologia/biotecnologie" },
    { korean: "분열조직 실험실", italian: "Laboratorio di meristematica" },
    { korean: "제품 가공 실험실", italian: "Laboratorio di trasformazione dei prodotti" },
    { korean: "감각 차단 교실", italian: "Aula con deprivazione sensoriale" },
  ];

  const spaces = [
    { korean: "디지털 보드가 있는 30개 교실", italian: "30 aule con Digital Board" },
    { korean: "TEAL 교실 2개", italian: "2 aule TEAL" },
    { korean: "온실이 있는 Ferrazzi Cova 농장", italian: "Azienda Ferrazzi Cova con serra" },
    { korean: "체육관 및 강당", italian: "Palestra e Aula Magna" },
  ];

  const socials = [
    { emoji: "🌐", title: "공식 웹사이트 | SITO UFFICIALE", url: "https://agrariomendel.edu.it/" },
    { emoji: "🎥", title: "유튜브 | YOUTUBE", url: "https://agrariomendel.edu.it/comunicati/1619-canale-youtube-delliis-mendel" },
    { emoji: "📷", title: "인스타그램 | INSTAGRAM", url: "https://agrariomendel.edu.it/comunicati/740-canale-instagram-iis-mendel" },
  ];

  return (
    <>
      <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl mb-8">
        <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          🔬 최첨단 실험실 및 시설 | 🔬 Laboratori e Strutture di Eccellenza
        </h3>
        
        <div className="mb-8">
          <h4 className="text-2xl font-bold mb-4 text-primary">최첨단 실험실 | Laboratori All'Avanguardia</h4>
          <ul className="space-y-3">
            {labs.map((lab, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-2xl">•</span>
                <div>
                  <p className="font-semibold">{lab.korean}</p>
                  <p className="text-muted-foreground">{lab.italian}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-bold mb-4 text-secondary">혁신적인 공간 및 교육 | Spazi e Didattica Innovativa</h4>
          <ul className="space-y-3">
            {spaces.map((space, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-2xl">•</span>
                <div>
                  <p className="font-semibold">{space.korean}</p>
                  <p className="text-muted-foreground">{space.italian}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-3xl shadow-2xl mb-8">
        <h3 className="text-3xl font-bold mb-6">
          🔗 빠른 연락처 및 소셜 미디어 | 🔗 Contatti Rapidi e Social
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-2">{social.emoji}</div>
              <div className="font-semibold">{social.title}</div>
            </a>
          ))}
        </div>
      </Card>

      <div className="text-center text-muted-foreground mt-12 mb-8">
        <p className="text-lg">이 페이지는 IIS MENDEL - Villa Cortese (MI)에서 제작되었습니다</p>
        <p className="text-lg">Questa pagina è stata creata dall'IIS MENDEL - Villa Cortese (MI)</p>
      </div>
    </>
  );
};
