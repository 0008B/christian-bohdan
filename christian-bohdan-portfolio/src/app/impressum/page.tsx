import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Impressum · Christian Bohdan",
  description:
    "Impressum und Anbieterkennzeichnung gemäß § 5 DDG — Christian Bohdan, Norikerstraße 27, 90402 Nürnberg.",
};

export default function ImpressumPage() {
  return <LegalPage doc="impressum" />;
}
