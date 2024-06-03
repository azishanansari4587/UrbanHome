import ClientLogo from "@/components/ClientLogo";
import ContactLogo from "@/components/ContactLogo";
import InteriorCat from "@/components/InteriorCat";
import PartnerLogo from "@/components/PartnerLogo";
import Referral from "@/components/Referral";
import Services from "@/components/Services";
import Sliders from "@/components/Sliders";
import Speciality from "@/components/Speciality";
import Testmonial from "@/components/Testmonial";
import React from "react";




export default function Home() {
  return (
    <div>
      <Sliders/>
      <ContactLogo/>
      <InteriorCat/>
      <Speciality/>
      <Services/>
      <Referral/>
      <Testmonial/>
      <ClientLogo/>
      <PartnerLogo/>
    </div>
  );
}
