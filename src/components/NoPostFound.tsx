export default function NoPostFound() {
  return (
    <section className="grid place-items-center  px-6 py-24  lg:px-8">
      <div className="text-center">
        <p className="text-muted-foreground">Oups</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight  sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-muted-foreground ">
          No posts found for the selected category or tag.
        </p>
      </div>
    </section>
  );
}
