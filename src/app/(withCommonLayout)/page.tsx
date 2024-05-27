import AboutUs from "@/components/UI/HomePage/AboutUs/AboutUs";
import BloodDonor from "@/components/UI/HomePage/BloodDonors/BloodDonor";
import BloodDonors from "@/components/UI/HomePage/BloodDonors/BloodDonors";
import SearchBloodDonor from "@/components/UI/HomePage/BloodDonors/SearchBloodDonor";
import CampaignGallery from "@/components/UI/HomePage/CampaignGallery/CampaignGallery";
import DonationProcess from "@/components/UI/HomePage/DonationProcess/DonationProcess";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <BloodDonor />
      <DonationProcess />
      <CampaignGallery />
    </>
  );
};

export default HomePage;
