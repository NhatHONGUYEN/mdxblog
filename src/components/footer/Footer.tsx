// Footer.js
"use client";

import InfiniteSliderContent from "./InfiniteSliderContent";
import FooterContent from "./FooterContent";

export default function Footer() {
  return (
    <section className="md:py-32">
      <div className="container mx-auto">
        <footer>
          <InfiniteSliderContent />
          <FooterContent />
        </footer>
      </div>
    </section>
  );
}
