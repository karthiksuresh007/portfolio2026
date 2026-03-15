import { ArrowLeft } from "lucide-react";

import { LiquidLinkButton } from "@/components/ui/liquid-glass-button";
import { SectionShell } from "@/components/ui/section-shell";

export default function NotFound() {
  return (
    <SectionShell
      eyebrow="404"
      title="This chapter does not exist yet."
      intro="The portfolio routes are content-driven, so missing pages usually mean the case study has not been added to the content model."
      className="pt-20"
    >
      <div className="rounded-[2rem] border border-black/5 bg-white/72 p-8 shadow-panel backdrop-blur-xl">
        <LiquidLinkButton href="/work" size="lg" className="px-6">
          <ArrowLeft className="size-4" />
          Return to work
        </LiquidLinkButton>
      </div>
    </SectionShell>
  );
}
