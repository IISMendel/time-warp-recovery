import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const TimeTable = () => {
  const schedule = [
    { ora: "1교시 | Prima ora", orario: "8:30-9:20" },
    { ora: "2교시 | Seconda ora", orario: "9:20-10:10" },
    { ora: "3교시 | Terza ora", orario: "10:10-11:00" },
    { ora: "휴식 | Intervallo", orario: "11:00-11:15" },
    { ora: "4교시 | Quarta ora", orario: "11:15-12:10" },
    { ora: "5교시 | Quinta ora", orario: "12:10-13:00" },
    { ora: "6교시 | Sesta ora", orario: "13:00-13:50" },
    { ora: "휴식 | Intervallo", orario: "13:50-14:00" },
    { ora: "7교시 | Settima ora", orario: "14:00-14:50" },
    { ora: "8교시 | Ottava ora", orario: "14:50-15:40" },
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl mb-8">
      <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        🕰️ 일일 시간표 (주간) | 🕰️ Scansione Oraria Giornaliera (Diurno)
      </h3>
      <p className="text-lg mb-6 font-semibold">
        ORARIO INIZIO LEZIONI: 8.30 (Classi Prime: 33h | Classi 2ª-5ª: 32h)
      </p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg font-bold">시간 | Ora</TableHead>
            <TableHead className="text-lg font-bold">시간대 | Fascia Oraria</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((row, index) => (
            <TableRow key={index} className={row.ora.includes("휴식") ? "bg-accent/10" : ""}>
              <TableCell className="font-medium">{row.ora}</TableCell>
              <TableCell>{row.orario}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
