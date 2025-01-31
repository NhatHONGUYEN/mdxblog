// InfiniteSliderContent.js

import { INFINITE_SLIDER_TEXT } from "@/lib/constants";
import { InfiniteSlider } from "../ui/infinite-slider";

export default function InfiniteSliderContent() {
  return (
    <InfiniteSlider gap={40} reverse>
      {Array(5)
        .fill(INFINITE_SLIDER_TEXT)
        .map((text, idx) => (
          <p key={idx} className="text-7xl font-extrabold">
            {text}
          </p>
        ))}
    </InfiniteSlider>
  );
}
