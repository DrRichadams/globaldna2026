import type { Metadata } from "next";
import Pricing from "@/components/pricing/pricing";

export const metadata: Metadata = {
  title: "DNA Testing Prices & Quotes | Global DNA",
  description:
    "Explore Global DNA testing services and request a personalised quote for paternity, relationship, legal, immigration, and other DNA testing enquiries.",
};

export default function PricingPage() {
  return <Pricing />;
}
