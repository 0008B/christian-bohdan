import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Datenschutzerklärung · Christian Bohdan",
  description:
    "Datenschutzerklärung — diese private Bewerbungsseite erhebt, speichert und verarbeitet keine personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return <LegalPage doc="datenschutz" />;
}
