import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Immagini dalla galleria locale
  const galleryImages = Array.from({ length: 43 }, (_, i) => 
    `/mendel-korea-bridge/gallery/IMG_${String(i + 1).padStart(4, '0')}.JPG`
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#f093fb] via-[#4facfe] to-[#667eea] animate-gradient p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="bg-gradient-to-r from-primary to-secondary rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center mb-6 shadow-2xl overflow-hidden relative animate-fade-in">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 animate-float">
              <div className="text-3xl md:text-5xl mb-2">그레고리오 멘델 고등학교</div>
              <div>IIS Gregorio Mendel</div>
            </h1>
            <p className="text-lg md:text-2xl text-white/95 font-medium">
              <div className="mb-1">빌라 코르테세(밀라노) - 농업과 환경의 미래를 발견하세요!</div>
              <div>Benvenuti al nostro Open Day! Scoprite il futuro dell'Agraria e dell'Ambiente a Villa Cortese (MI)</div>
            </p>
          </div>
        </header>

        {/* Main Content Card */}
        <Card className="bg-white/95 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden">
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="w-full overflow-x-auto flex flex-nowrap justify-start md:justify-center gap-3 p-4 md:p-6 bg-white sticky top-0 z-50 shadow-lg scrollbar-hide">
              <TabsTrigger value="home" className="flex-shrink-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold rounded-xl border-2 bg-red-500 text-white border-red-600 data-[state=active]:bg-red-600 data-[state=active]:shadow-xl hover:bg-red-600 transition-all">
                <div className="text-center whitespace-nowrap">
                  <div className="text-xs md:text-sm">🏠 홈</div>
                  <div className="text-[10px] md:text-xs">HOME</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="storia" className="flex-shrink-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold rounded-xl border-2 bg-blue-500 text-white border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:shadow-xl hover:bg-blue-600 transition-all">
                <div className="text-center whitespace-nowrap">
                  <div className="text-xs md:text-sm">📖 역사</div>
                  <div className="text-[10px] md:text-xs">STORIA</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="tecnico" className="flex-shrink-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold rounded-xl border-2 bg-red-500 text-white border-red-600 data-[state=active]:bg-red-600 data-[state=active]:shadow-xl hover:bg-red-600 transition-all">
                <div className="text-center whitespace-nowrap">
                  <div className="text-xs md:text-sm">🎓 기술</div>
                  <div className="text-[10px] md:text-xs">TECNICO</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="professionale" className="flex-shrink-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold rounded-xl border-2 bg-blue-500 text-white border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:shadow-xl hover:bg-blue-600 transition-all">
                <div className="text-center whitespace-nowrap">
                  <div className="text-xs md:text-sm">🔧 전문</div>
                  <div className="text-[10px] md:text-xs">PROFESSIONALE</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="pcto" className="flex-shrink-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold rounded-xl border-2 bg-red-500 text-white border-red-600 data-[state=active]:bg-red-600 data-[state=active]:shadow-xl hover:bg-red-600 transition-all">
                <div className="text-center whitespace-nowrap">
                  <div className="text-xs md:text-sm">💼 학교-직장 교육</div>
                  <div className="text-[10px] md:text-xs">FORMAZIONE SCUOLA-LAVORO</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="internazionalizzazione" className="flex-shrink-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold rounded-xl border-2 bg-blue-500 text-white border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:shadow-xl hover:bg-blue-600 transition-all">
                <div className="text-center whitespace-nowrap">
                  <div className="text-xs md:text-sm">🌍 국제화</div>
                  <div className="text-[10px] md:text-xs">INTERNAZIONALIZZAZIONE</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="contatti" className="flex-shrink-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold rounded-xl border-2 bg-red-500 text-white border-red-600 data-[state=active]:bg-red-600 data-[state=active]:shadow-xl hover:bg-red-600 transition-all">
                <div className="text-center whitespace-nowrap">
                  <div className="text-xs md:text-sm">📍 연락처</div>
                  <div className="text-[10px] md:text-xs">CONTATTI</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="galleria" className="flex-shrink-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold rounded-xl border-2 bg-blue-500 text-white border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:shadow-xl hover:bg-blue-600 transition-all">
                <div className="text-center whitespace-nowrap">
                  <div className="text-xs md:text-sm">📸 갤러리</div>
                  <div className="text-[10px] md:text-xs">GALLERIA</div>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* HOME */}
            <TabsContent value="home" className="p-6 md:p-12 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  멘델에 오신 것을 환영합니다!
                </h2>
                <h3 className="text-2xl md:text-4xl font-bold text-primary">
                  Benvenuti al Mendel!
                </h3>
              </div>

              {/* Highlight Box */}
              <Card className="bg-gradient-to-br from-[#FF512F] via-[#DD2476] to-[#F46B45] animate-gradient p-8 md:p-12 text-white rounded-3xl shadow-xl border-0">
                <h4 className="text-2xl md:text-4xl font-bold mb-4">
                  <div className="mb-2">IIS 멘델에 오신 것을 환영합니다!</div>
                  <div>Benvenuti all'IIS Mendel!</div>
                </h4>
                <p className="text-lg md:text-xl mb-6 opacity-95">
                  <div className="mb-2">우리 연구소의 우수성을 발견하세요! 모든 질문에 답하고 미래 선택을 안내해 드립니다.</div>
                  <div>Scoprite le eccellenze del nostro Istituto! Siamo qui per rispondere a tutte le vostre domande e guidarvi nella scelta del vostro futuro.</div>
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#FF512F] hover:bg-white/90 text-lg font-bold rounded-full px-8 shadow-lg">
                    <a href="https://agrariomendel.edu.it/servizi/percorsi-di-studio" target="_blank" rel="noopener noreferrer">
                      🎓 Esplora gli Indirizzi
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Info Section */}
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border-l-4 border-primary">
                <h4 className="text-2xl font-bold text-primary mb-3">
                  <div className="text-xl mb-1">농업의 미래</div>
                  <div>Il Futuro dell'Agraria</div>
                </h4>
                <p className="text-lg text-foreground/80">
                  <div className="mb-2">멘델 연구소는 전통, 혁신 및 구체적인 노동 및 학습 기회를 결합하여 농업, 환경 및 농업 산업 분야에서 이 지역의 참조 고등학교입니다.</div>
                  <div>L'Istituto Mendel è la scuola superiore di riferimento per l'Agraria, l'Ambiente e l'Agroindustria del territorio, unendo tradizione, innovazione e opportunità concrete di lavoro e studio.</div>
                </p>
              </Card>

              {/* Orario */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  <div className="text-xl mb-1">🕰️ 일일 시간표 (주간)</div>
                  <div>🕰️ Scansione Oraria Giornaliera (Diurno)</div>
                </h3>
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 border-l-4 border-green-500">
                  <p className="text-center font-bold text-green-800 text-lg mb-4">
                    ORARIO INIZIO LEZIONI: 8.30 (Classi Prime: 33h | Classi 2ª-5ª: 32h)
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-center">
                      <thead>
                        <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                          <th className="p-3 rounded-tl-lg">
                            <div className="text-sm">시간</div>
                            <div className="text-xs">Ora</div>
                          </th>
                          <th className="p-3 rounded-tr-lg">
                            <div className="text-sm">시간대</div>
                            <div className="text-xs">Fascia Oraria</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm md:text-base">
                        <tr className="border-b hover:bg-green-100/50 transition-colors">
                          <td className="p-3 font-semibold">
                            <div>1교시 | Prima ora</div>
                          </td>
                          <td className="p-3">8:30-9:20</td>
                        </tr>
                        <tr className="border-b hover:bg-green-100/50 transition-colors">
                          <td className="p-3 font-semibold">
                            <div>2교시 | Seconda ora</div>
                          </td>
                          <td className="p-3">9:20-10:10</td>
                        </tr>
                        <tr className="border-b hover:bg-green-100/50 transition-colors">
                          <td className="p-3 font-semibold">
                            <div>3교시 | Terza ora</div>
                          </td>
                          <td className="p-3">10:10-11:00</td>
                        </tr>
                        <tr className="bg-orange-100 border-b">
                          <td className="p-3 font-bold text-orange-700">
                            <div>휴식 | Intervallo</div>
                          </td>
                          <td className="p-3 font-bold text-orange-700">11:00-11:15</td>
                        </tr>
                        <tr className="border-b hover:bg-green-100/50 transition-colors">
                          <td className="p-3 font-semibold">
                            <div>4교시 | Quarta ora</div>
                          </td>
                          <td className="p-3">11:15-12:10</td>
                        </tr>
                        <tr className="border-b hover:bg-green-100/50 transition-colors">
                          <td className="p-3 font-semibold">
                            <div>5교시 | Quinta ora</div>
                          </td>
                          <td className="p-3">12:10-13:00</td>
                        </tr>
                        <tr className="border-b hover:bg-green-100/50 transition-colors">
                          <td className="p-3 font-semibold">
                            <div>6교시 | Sesta ora</div>
                          </td>
                          <td className="p-3">13:00-13:50</td>
                        </tr>
                        <tr className="bg-orange-100 border-b">
                          <td className="p-3 font-bold text-orange-700">
                            <div>휴식 | Intervallo</div>
                          </td>
                          <td className="p-3 font-bold text-orange-700">13:50-14:00</td>
                        </tr>
                        <tr className="border-b hover:bg-green-100/50 transition-colors">
                          <td className="p-3 font-semibold">
                            <div>7교시 | Settima ora</div>
                          </td>
                          <td className="p-3">14:00-14:50</td>
                        </tr>
                        <tr className="hover:bg-green-100/50 transition-colors">
                          <td className="p-3 font-semibold">
                            <div>8교시 | Ottava ora</div>
                          </td>
                          <td className="p-3">14:50-15:40</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>

              {/* Offerta Formativa */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  <div className="text-xl mb-1">🎯 우리의 교육 프로그램</div>
                  <div>🎯 La nostra offerta formativa</div>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 border-l-4 border-primary">
                    <h4 className="text-xl font-bold text-primary mb-2">
                      <div className="text-lg mb-1">기술 연구소</div>
                      <div>Istituto Tecnico</div>
                    </h4>
                    <p className="text-foreground/70 mb-2">
                      <div className="text-sm mb-1">환경 및 영토 관리(GAT) 또는 생산 및 가공(PT) 전문화를 갖춘 농업 전문가 학위</div>
                      <div>Diploma di Perito Agrario con specializzazioni in Gestione Ambiente e Territorio (GAT) o Produzioni e Trasformazioni (PT)</div>
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 border-l-4 border-secondary">
                    <h4 className="text-xl font-bold text-primary mb-2">
                      <div className="text-lg mb-1">국립 직업학교</div>
                      <div>Professionale Statale</div>
                    </h4>
                    <p className="text-foreground/70">
                      <div className="text-sm mb-1">농업, 농촌 개발, 제품 및 영토 강화, 산림 및 산악 자원 관리</div>
                      <div>Indirizzo: Agricoltura, sviluppo rurale, valorizzazione dei prodotti e del territorio e gestione delle risorse forestali e montane</div>
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 border-l-4 border-primary">
                    <h4 className="text-xl font-bold text-primary mb-2">
                      <div className="text-lg mb-1">직업 훈련 (IEFP)</div>
                      <div>Formazione Professionale (IEFP)</div>
                    </h4>
                    <p className="text-foreground/70">
                      <div className="text-sm mb-1">농업 운영자 자격증 및 농업 기술자 학위 (지역 IEFP)</div>
                      <div>Qualifica di Operatore Agricolo e Diploma di Tecnico Agricolo (IEFP Regionale)</div>
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 border-l-4 border-secondary">
                    <h4 className="text-xl font-bold text-primary mb-2">
                      <div className="text-lg mb-1">야간 과정 (IDA)</div>
                      <div>Corsi Serali (IDA)</div>
                    </h4>
                    <p className="text-foreground/70">
                      <div className="text-sm mb-1">성인 및 근로자를 위한 기술 및 전문 교육 과정</div>
                      <div>Percorsi per adulti e lavoratori, tecnici e professionali</div>
                    </p>
                  </Card>
                </div>
              </div>

              {/* Laboratori */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-center text-primary">
                  <div className="text-xl mb-1">🔬 최첨단 실험실 및 시설</div>
                  <div>🔬 Laboratori e Strutture di Eccellenza</div>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold text-blue-700 mb-3">
                      <div className="text-lg mb-1">최첨단 실험실</div>
                      <div>Laboratori All'Avanguardia</div>
                    </h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li><div className="text-sm">• 화학 및 생물학/생명공학 실험실</div><div className="text-xs">• Laboratorio di chimica e biologia/biotecnologie</div></li>
                      <li><div className="text-sm">• 분열조직 실험실</div><div className="text-xs">• Laboratorio di meristematica</div></li>
                      <li><div className="text-sm">• 제품 가공 실험실</div><div className="text-xs">• Laboratorio di trasformazione dei prodotti</div></li>
                      <li><div className="text-sm">• 감각 차단 교실</div><div className="text-xs">• Aula con deprivazione sensoriale</div></li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500">
                    <h4 className="text-xl font-bold text-purple-700 mb-3">
                      <div className="text-lg mb-1">혁신적인 공간 및 교육</div>
                      <div>Spazi e Didattica Innovativa</div>
                    </h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li><div className="text-sm">• 디지털 보드가 있는 30개 교실</div><div className="text-xs">• 30 aule con Digital Board</div></li>
                      <li><div className="text-sm">• TEAL 교실 2개</div><div className="text-xs">• 2 aule TEAL</div></li>
                      <li><div className="text-sm">• 온실이 있는 Ferrazzi Cova 농장</div><div className="text-xs">• Azienda Ferrazzi Cova con serra</div></li>
                      <li><div className="text-sm">• 체육관 및 강당</div><div className="text-xs">• Palestra e Aula Magna</div></li>
                    </ul>
                  </Card>
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  <div className="text-xl mb-1">🔗 빠른 연락처 및 소셜 미디어</div>
                  <div>🔗 Contatti Rapidi e Social</div>
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full px-6">
                    <a href="https://agrariomendel.edu.it/" target="_blank" rel="noopener noreferrer">
                      <div className="text-center">
                        <div className="text-sm">🌐 공식 웹사이트</div>
                        <div className="text-xs">SITO UFFICIALE</div>
                      </div>
                    </a>
                  </Button>
                  <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:opacity-90 rounded-full px-6">
                    <a href="https://agrariomendel.edu.it/comunicati/1619-canale-youtube-delliis-mendel" target="_blank" rel="noopener noreferrer">
                      <div className="text-center">
                        <div className="text-sm">🎥 유튜브</div>
                        <div className="text-xs">YOUTUBE</div>
                      </div>
                    </a>
                  </Button>
                  <Button asChild size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 rounded-full px-6">
                    <a href="https://agrariomendel.edu.it/comunicati/740-canale-instagram-iis-mendel" target="_blank" rel="noopener noreferrer">
                      <div className="text-center">
                        <div className="text-sm">📷 인스타그램</div>
                        <div className="text-xs">INSTAGRAM</div>
                      </div>
                    </a>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* STORIA */}
            <TabsContent value="storia" className="p-6 md:p-12 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  IIS 멘델의 간략한 역사
                </h2>
                <h3 className="text-2xl md:text-4xl font-bold text-primary">
                  Breve Storia dell'IIS Mendel
                </h3>
              </div>

              <Card className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl border-0">
                <h4 className="text-2xl font-bold text-purple-700 mb-3">
                  <div className="text-xl mb-1">깊은 뿌리, 미래 비전</div>
                  <div>Radici Profonde, Visione Futura</div>
                </h4>
                <p className="text-lg text-foreground/80 mb-2">
                  <div className="mb-2">멘델 연구소는 현대 농업의 과제에 부합하는 전문가를 양성하면서 영토의 풍부한 농촌 전통과 과학 및 교육 혁신을 결합합니다.</div>
                  <div>L'Istituto Mendel unisce la ricca tradizione rurale del territorio con l'innovazione scientifica e didattica, formando professionisti in linea con le sfide dell'agricoltura moderna.</div>
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border-l-4 border-amber-500">
                <h4 className="text-2xl font-bold text-amber-700 mb-4">
                  <div className="text-xl mb-1">학교와 그 맥락</div>
                  <div>La scuola e il suo contesto</div>
                </h4>
                <p className="text-base text-foreground/80 leading-relaxed">
                  1988년에 국립 농업 기술 연구소가 설립되었으며, 2년 후 유전학의 아버지인 그레고리오 멘델의 이름을 따서 명명되었습니다. 2011년부터 학교의 교육 프로그램은 새로운 교육 요구에 부응하기 위해 확대되었습니다. 같은 해에 롬바르디아 지역의 제안으로 직업 교육 및 훈련 과정의 첫 번째 섹션이 개설되었습니다. 2014/2015 학년도부터는 기술 연구소의 야간 과정이 시작되었으며, 2018/2019 학년도에는 직업 연구소의 야간 과정이 추가되어 현재까지 성인 교육을 위해 운영되고 있습니다. 이 모든 해 동안 페라치 재단과 멘델 학교 간의 협력은 혁신, 연구, 그리고 동시에 지역 농촌 전통에 대한 존중을 바라보며 유익하게 계속되었습니다.
                </p>
              </Card>

              {/* Timeline */}
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-primary hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      1935
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">
                        <div className="text-lg mb-1">설립</div>
                        <div>La Nascita</div>
                      </h4>
                      <p className="text-foreground/70">
                        <div className="text-sm mb-1">Francesco Ferrazzi의 뜻으로 농업 연구소를 설립하고 본부 및 부속 농업 회사(현재 Ferrazzi-Cova)를 개관했으며, "현장 실습에서 과학의 가르침을 실행하고 실험한다"는 목표를 세웠습니다.</div>
                        <div>Fondazione dell'Istituto Agrario per volere di Francesco Ferrazzi e inaugurazione della sede e dell'Azienda Agraria annessa (oggi Ferrazzi-Cova), con l'obiettivo di "attuare e sperimentare nella pratica dei campi gli insegnamenti della scienza".</div>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-secondary hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary text-secondary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold flex-shrink-0">
                      '70
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">
                        <div className="text-lg mb-1">기술 연구소</div>
                        <div>L'Istituto Tecnico</div>
                      </h4>
                      <p className="text-foreground/70">
                        <div className="text-sm mb-1">농업 기술 연구소 과정을 도입하여 교육 프로그램을 확대하고 기관의 과학적 및 전문적 소명을 공고히 했습니다.</div>
                        <div>Ampliamento dell'offerta formativa con l'introduzione del percorso di Istituto Tecnico Agrario, consolidando la vocazione scientifica e professionale dell'ente.</div>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-primary hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      1990
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">
                        <div className="text-lg mb-1">공식 명칭</div>
                        <div>Intitolazione Ufficiale</div>
                      </h4>
                      <p className="text-foreground/70">
                        <div className="text-sm mb-1">연구소는 유전학의 아버지인 Gregor Johann Mendel의 이름을 따서 명명되어 농업과 현대 과학 분야 간의 연결을 강조했습니다.</div>
                        <div>L'Istituto viene intitolato a Gregor Johann Mendel, padre della genetica, sottolineando il legame tra l'agricoltura e le discipline scientifiche moderne.</div>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-secondary hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary text-secondary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold flex-shrink-0">
                      Oggi
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">
                        <div className="text-lg mb-1">혁신과 PNRR</div>
                        <div>Innovazione e PNRR</div>
                      </h4>
                      <p className="text-foreground/70">
                        <div className="text-sm mb-1">PNRR 자금 덕분에 새로운 실험실(분열조직, 생명공학)을 활성화하고 최첨단 교육 방법론(TEAL 교실, 디지털 보드)을 채택하여 연구소가 혁신되었습니다.</div>
                        <div>L'Istituto si rinnova con l'attivazione di nuovi laboratori (meristematica, biotecnologie) e l'adozione di metodologie didattiche all'avanguardia (aule TEAL, Digital Board) grazie ai finanziamenti PNRR.</div>
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* TECNICO */}
            <TabsContent value="tecnico" className="p-6 md:p-12 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  농업 기술 연구소
                </h2>
                <h3 className="text-2xl md:text-4xl font-bold text-primary">
                  Istituto Tecnico Agrario
                </h3>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full px-8">
                  <a href="https://agrariomendel.edu.it/la-scuola/organizzazione/112-istituto-tecnico" target="_blank" rel="noopener noreferrer">
                    🌐 Visita la pagina ufficiale
                  </a>
                </Button>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                <h4 className="text-2xl font-bold text-primary mb-3">
                  <div className="text-xl mb-1">방향: 농업, 농식품 및 농산업</div>
                  <div>Indirizzo: Agraria, Agroalimentare e Agroindustria</div>
                </h4>
                <p className="text-lg">
                  <div className="mb-1"><strong>기간:</strong> 5년 | <strong>학위:</strong> 농업 전문가 | <strong>시간:</strong> 33시간 (1학년), 32시간 (이후 학년)</div>
                  <div><strong>Durata:</strong> 5 anni | <strong>Diploma:</strong> Perito Agrario | <strong>Orario:</strong> 33 ore (1° anno), 32 ore (anni successivi)</div>
                </p>
              </Card>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  <div className="text-xl mb-1">🎓 2년차와 5년차 전문 분야</div>
                  <div>🎓 Articolazioni del Secondo Biennio e Quinto Anno</div>
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-l-4 border-emerald-600">
                    <h4 className="text-xl font-bold text-emerald-700 mb-3">
                      <div className="text-lg mb-1">GAT - 환경 및 영토 관리</div>
                      <div>GAT - Gestione Ambiente e Territorio</div>
                    </h4>
                    <p className="text-foreground/70">
                      <div className="text-sm mb-1">영토 관리, 환경 통제, 천연 자원 보호 및 보호 구역 강화에 대한 교육</div>
                      <div>Formazione su gestione territoriale, controllo ambientale, tutela delle risorse naturali e valorizzazione delle aree protette.</div>
                    </p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border-l-4 border-amber-600">
                    <h4 className="text-xl font-bold text-amber-700 mb-3">
                      <div className="text-lg mb-1">PT - 생산 및 가공</div>
                      <div>PT - Produzioni e Trasformazioni</div>
                    </h4>
                    <p className="text-foreground/70">
                      <div className="text-sm mb-1">품질 및 식품 안전에 중점을 둔 농산업 제품의 생산, 가공 및 상업화 전문화</div>
                      <div>Specializzazione in produzione, trasformazione e commercializzazione dei prodotti agroindustriali, con focus su qualità e sicurezza alimentare.</div>
                    </p>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* PROFESSIONALE */}
            <TabsContent value="professionale" className="p-6 md:p-12 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  국립 직업 연구소
                </h2>
                <h3 className="text-2xl md:text-4xl font-bold text-primary">
                  Istituto Professionale Statale
                </h3>
              </div>

              <Card className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl">
                <h4 className="text-2xl font-bold text-green-700 mb-3">
                  <div className="text-xl mb-1">농업, 농촌 개발, 제품 및 영토 강화</div>
                  <div>Agricoltura, sviluppo rurale, valorizzazione dei prodotti del territorio</div>
                </h4>
                <p className="text-lg text-foreground/80">
                  <div className="mb-1">농업, 산림 및 농촌 개발 활동 관리를 전문으로 하는 기술자를 양성하는 5년 과정</div>
                  <div>Percorso quinquennale che forma tecnici specializzati nella gestione delle attività agricole, forestali e dello sviluppo rurale.</div>
                </p>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-green-500">
                  <h4 className="text-xl font-bold text-green-700 mb-2">
                    <div className="text-lg mb-1">핵심 역량</div>
                    <div>Competenze Chiave</div>
                  </h4>
                  <ul className="space-y-2 text-foreground/70">
                    <li><div className="text-sm">• 농업 경영 관리</div><div className="text-xs">• Gestione aziendale agricola</div></li>
                    <li><div className="text-sm">• 지역 제품 강화</div><div className="text-xs">• Valorizzazione dei prodotti locali</div></li>
                    <li><div className="text-sm">• 영토의 지속 가능한 개발</div><div className="text-xs">• Sviluppo sostenibile del territorio</div></li>
                    <li><div className="text-sm">• 산림 자원 관리</div><div className="text-xs">• Gestione risorse forestali</div></li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-emerald-500">
                  <h4 className="text-xl font-bold text-emerald-700 mb-2">
                    <div className="text-lg mb-1">진로</div>
                    <div>Sbocchi Professionali</div>
                  </h4>
                  <ul className="space-y-2 text-foreground/70">
                    <li><div className="text-sm">• 자격을 갖춘 농업 운영자</div><div className="text-xs">• Operatore agricolo qualificato</div></li>
                    <li><div className="text-sm">• 농식품 부문 기술자</div><div className="text-xs">• Tecnico del settore agroalimentare</div></li>
                    <li><div className="text-sm">• 농업 기업 관리</div><div className="text-xs">• Gestione imprese agricole</div></li>
                    <li><div className="text-sm">• 1차 산업 컨설팅</div><div className="text-xs">• Consulenza nel settore primario</div></li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            {/* FORMAZIONE SCUOLA-LAVORO */}
            <TabsContent value="pcto" className="p-6 md:p-12 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  학교-직장 연계 교육
                </h2>
                <h3 className="text-2xl md:text-4xl font-bold text-primary">
                  Formazione Scuola-Lavoro
                </h3>
              </div>

              <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl">
                <h4 className="text-2xl font-bold text-blue-700 mb-3">
                  <div className="text-xl mb-1">실무 교육</div>
                  <div>Formazione Pratica e Orientamento</div>
                </h4>
                <p className="text-lg text-foreground/80">
                  <div className="mb-2">학교-직장 교육(이전 PCTO - 학교-직장 교대)을 통해 학생들은 해당 분야의 회사에서 직접 전문 기술을 습득하여 노동 시장 진입을 촉진할 수 있습니다.</div>
                  <div>La Formazione Scuola-Lavoro (ex PCTO - Alternanza Scuola-Lavoro) permette agli studenti di acquisire competenze professionali direttamente in aziende del settore, favorendo l'inserimento nel mondo del lavoro.</div>
                </p>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center hover:shadow-xl transition-all">
                  <div className="text-4xl mb-3">🏢</div>
                  <h4 className="font-bold text-primary mb-2">
                    <div className="text-base mb-1">파트너 회사</div>
                    <div className="text-sm">Aziende Partner</div>
                  </h4>
                  <p className="text-foreground/70">
                    <div className="text-sm mb-1">영토의 농업 및 농산업 기업과의 협력</div>
                    <div className="text-xs">Collaborazioni con imprese agricole e agroindustriali del territorio</div>
                  </p>
                </Card>

                <Card className="p-6 text-center hover:shadow-xl transition-all">
                  <div className="text-4xl mb-3">⏰</div>
                  <h4 className="font-bold text-primary mb-2">
                    <div className="text-base mb-1">인턴십 시간</div>
                    <div className="text-sm">Ore di Tirocinio</div>
                  </h4>
                  <p className="text-foreground/70">
                    <div className="text-sm mb-1">고등학교 최소 150시간, 기술 및 전문 과정 210시간</div>
                    <div className="text-xs">Minimo 150 ore per licei, 210 ore per tecnici e professionali</div>
                  </p>
                </Card>

                <Card className="p-6 text-center hover:shadow-xl transition-all">
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="font-bold text-primary mb-2">
                    <div className="text-base mb-1">목표</div>
                    <div className="text-sm">Obiettivi</div>
                  </h4>
                  <p className="text-foreground/70">
                    <div className="text-sm mb-1">범분야 역량 개발 및 진로 지도</div>
                    <div className="text-xs">Sviluppo competenze trasversali e orientamento professionale</div>
                  </p>
                </Card>
              </div>
            </TabsContent>

            {/* INTERNAZIONALIZZAZIONE */}
            <TabsContent value="internazionalizzazione" className="p-6 md:p-12 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  국제화
                </h2>
                <h3 className="text-2xl md:text-4xl font-bold text-primary">
                  Internazionalizzazione
                </h3>
              </div>

              <Card className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
                <h4 className="text-2xl font-bold text-purple-700 mb-3">
                  <div className="text-xl mb-1">세계와 연결</div>
                  <div>Apertura al Mondo</div>
                </h4>
                <p className="text-lg text-foreground/80">
                  <div className="mb-2">멘델 연구소는 학생들에게 유럽 및 글로벌 교육 경험을 제공하기 위해 문화 교류, Erasmus+ 프로젝트 및 국제 협력을 촉진합니다.</div>
                  <div>L'Istituto Mendel promuove scambi culturali, progetti Erasmus+ e collaborazioni internazionali per offrire agli studenti un'esperienza formativa europea e globale.</div>
                </p>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold text-blue-700 mb-3">
                    <div className="text-lg mb-1">🌍 에라스무스+ 프로그램</div>
                    <div>🌍 Programmi Erasmus+</div>
                  </h4>
                  <p className="text-foreground/70">
                    <div className="text-sm mb-1">학생과 교사를 위한 유럽 이동 기회, 해외 학습 및 인턴십 경험 제공</div>
                    <div>Opportunità di mobilità europea per studenti e docenti, con esperienze di studio e tirocinio all'estero.</div>
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500">
                  <h4 className="text-xl font-bold text-green-700 mb-3">
                    <div className="text-lg mb-1">🤝 국제 파트너십</div>
                    <div>🤝 Partnership Internazionali</div>
                  </h4>
                  <p className="text-foreground/70">
                    <div className="text-sm mb-1">공동 교육 프로젝트 및 문화 교류를 위한 유럽 학교 및 기관과의 협력</div>
                    <div>Collaborazioni con scuole e istituzioni europee per progetti didattici congiunti e scambi culturali.</div>
                  </p>
                </Card>
              </div>
            </TabsContent>

            {/* CONTATTI */}
            <TabsContent value="contatti" className="p-6 md:p-12 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  📍 우리의 위치 및 연락처
                </h2>
                <h3 className="text-2xl md:text-4xl font-bold text-primary">
                  📍 Dove Siamo e Contatti
                </h3>
              </div>

              <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500">
                <h4 className="text-xl font-bold text-green-700 mb-4">
                  <div className="text-lg mb-1">주소</div>
                  <div>Indirizzo</div>
                </h4>
                <p className="text-lg mb-2">
                  <strong>IIS Gregorio Mendel</strong>
                </p>
                <p className="text-foreground/70">
                  Via Ferrazzi 15<br />
                  20035 Villa Cortese (MI)<br />
                  Italia
                </p>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-primary">
                  <h4 className="text-xl font-bold text-primary mb-3">
                    <div className="text-lg mb-1">📞 전화</div>
                    <div>📞 Telefono</div>
                  </h4>
                  <p className="text-lg">
                    <a href="tel:+390331434311" className="text-primary hover:underline">
                      0331434311
                    </a>
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-secondary">
                  <h4 className="text-xl font-bold text-primary mb-3">
                    <div className="text-lg mb-1">✉️ 이메일</div>
                    <div>✉️ Email</div>
                  </h4>
                  <div className="text-lg space-y-2">
                    <div>
                      <div className="text-sm text-muted-foreground">일반:</div>
                      <a href="mailto:miis08300x@istruzione.it" className="text-primary hover:underline break-all">
                        miis08300x@istruzione.it
                      </a>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">PEC:</div>
                      <a href="mailto:miis08300x@pec.istruzione.it" className="text-primary hover:underline break-all">
                        miis08300x@pec.istruzione.it
                      </a>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Codice meccanografico:</div>
                      <span className="font-mono">MIIS08300X</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Mappa */}
              <Card className="overflow-hidden rounded-2xl">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.234!2d8.897!3d45.574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786a0dcb1234567%3A0xabcdef1234567890!2sVia%20Ferrazzi%2C%2015%2C%2020020%20Villa%20Cortese%20MI!5e0!3m2!1sit!2sit!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa IIS Mendel - Via Ferrazzi 15, Villa Cortese"
                  ></iframe>
                </div>
              </Card>

              {/* Trasporti */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  <div className="text-xl mb-1">🚌 교통편</div>
                  <div>🚌 Come Raggiungerci</div>
                </h3>

                <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-2">
                    <div className="mb-1">기차 + 버스</div>
                    <div className="text-sm">Treno + Autobus</div>
                  </h4>
                  <p className="text-foreground/70">
                    <div className="text-sm mb-1">Parabiago 또는 Legnano 역, 그런 다음 Villa Cortese 방향 지역 버스</div>
                    <div className="text-xs">Stazione di Parabiago o Legnano, poi autobus linee locali verso Villa Cortese</div>
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-2">
                    <div className="mb-1">자동차</div>
                    <div className="text-sm">Auto</div>
                  </h4>
                  <p className="text-foreground/70">
                    <div className="text-sm mb-1">A8/A4 고속도로, Legnano 출구, 그런 다음 SS527 Villa Cortese 방향</div>
                    <div className="text-xs">Autostrada A8/A4, uscita Legnano, poi SS527 direzione Villa Cortese</div>
                  </p>
                </Card>
              </div>
            </TabsContent>

            {/* GALLERIA */}
            <TabsContent value="galleria" className="p-6 md:p-12 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  📸 사진 갤러리
                </h2>
                <h3 className="text-2xl md:text-4xl font-bold text-primary">
                  📸 Galleria Fotografica
                </h3>
              </div>

              {/* Slideshow */}
              <Card className="p-4 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="relative aspect-video bg-black/5 rounded-xl overflow-hidden">
                  <img
                    src={galleryImages[currentImageIndex]}
                    alt={`Foto ${currentImageIndex + 1} - IIS Mendel`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback se l'immagine non carica
                      e.currentTarget.src = "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=450&fit=crop";
                    }}
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    aria-label="Immagine precedente"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    aria-label="Immagine successiva"
                  >
                    →
                  </button>

                  {/* Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-primary scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Vai alla foto ${index + 1}`}
                    />
                  ))}
                </div>
              </Card>

              {/* Grid Thumbnails */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.slice(0, 12).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className="aspect-video bg-gray-100 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=225&fit=crop";
                      }}
                    />
                  </button>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Footer */}
          <div className="p-8 text-center border-t border-muted">
            <p className="text-muted-foreground">
              <div className="text-sm mb-1">이 페이지는 IIS MENDEL - Villa Cortese (MI)에서 제작되었습니다</div>
              <div>Questa pagina è stata creata dall'IIS MENDEL - Villa Cortese (MI)</div>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
