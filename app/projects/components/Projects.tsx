import ListProjects from "./ListProjects";

export default function Projects() {
  return (
    <>
      <section className="py-32">
        <div className="container px-4 lg:px-0">
          <div>
            <h1 className="mb-6  text-3xl font-semibold lg:text-5xl">
              Découvrez{" "}
              <span className="text-muted-foreground italic">mes projets</span>
            </h1>
            <p className=" text-lg">
              Si vous êtes intéressé, n&apos;hésitez pas à jeter un coup
              d&apos;œil à mes réalisations.
            </p>
          </div>
          <ListProjects />
        </div>
      </section>
    </>
  );
}
