import AboutUs from "@/components/UI/HomePage/AboutUs/AboutUs";
import BloodDonors from "@/components/UI/HomePage/BloodDonors/BloodDonors";
import CampaignGallery from "@/components/UI/HomePage/CampaignGallery/CampaignGallery";
import DonationProcess from "@/components/UI/HomePage/DonationProcess/DonationProcess";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <BloodDonors />
      <DonationProcess />
      <CampaignGallery />
    </>
  );
};

export default HomePage;
