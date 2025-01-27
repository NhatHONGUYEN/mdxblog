import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { navBurgerLinks } from "@/lib/data";

export default function BurgerHeader() {
  return (
    <>
      {/* Mobile Navigation */}
      <div className="block lg:hidden">
        <div className="flex mx-4 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl">PEDRO P.</h1>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href={"/"} className="flex items-center gap-2">
                    <p className="text-lg font-semibold">PEDRO P.</p>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Navigation Links */}
              <div className="mt-6 flex flex-col gap-4">
                {navBurgerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-semibold hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
