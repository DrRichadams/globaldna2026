import Banner from "@/components/banner/banner";
import styles from "./page.module.css";
import Centers from "@/components/centers/centers";
import Navigation from "@/components/navigation/navigation";
import Services from "@/components/services/services";
import WhyChooseUs from "@/components/why-choose-us/why-choose-us";
import HowItWorks from "@/components/how-it-works/how-it-works";
import DnaTestingOptions from "@/components/dna-testing-options/dna-testing-options";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/footer/footer";

export default function App() {
  return (
    <main>
      <Navigation />
      <Banner />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Centers />
      <DnaTestingOptions />
      <FAQ />
      <Footer />
    </main>
  );
}
