export default function AboutHeader() {
  return (
    <div className="mx-auto mb-24 max-w-xl">
      <h2 className="mb-6 text-center text-3xl font-semibold lg:text-5xl">
        <span className="text-muted-foreground italic">Découvrez</span> un peu
        plus sur moi.
      </h2>
      <p className="m-auto max-w-3xl text-center lg:text-lg">
        Bonjour, je m&apos;appelle{" "}
        <span className="text-muted-foreground italic font-semibold">
          HO NGUYEN Nhat-Quan
        </span>
        . Si vous souhaitez en apprendre davantage sur mon parcours, mes
        compétences et mes projets, vous êtes au bon endroit.
      </p>
    </div>
  );
}
