import { Badge } from "@/components/ui/badge";
import { TextLoop } from "@/components/ui/text-loop";
import { textLoopItems } from "@/lib/data";

export default function HeaderHome() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto items-center gap-6 text-center">
      <Badge variant="secondary">
        <TextLoop>
          {textLoopItems.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </TextLoop>
      </Badge>
      <h1 className="text-4xl max-w-xs font-bold md:max-w-md lg:text-6xl">
        <span className="text-muted-foreground italic">Bienvenue</span> sur mon
        blog !
      </h1>
      <p className="lg:text-lg">
        Si tu envisages de changer de carrière ou de te lancer dans un nouveau
        projet, tu es au bon endroit. Ici, je partage mes conseils, mes
        expériences et tout ce qui peut t&apos;aider à avancer sereinement dans
        ta transition.
      </p>
    </div>
  );
}
