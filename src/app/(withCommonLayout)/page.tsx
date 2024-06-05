import AboutUs from "@/components/UI/HomePage/AboutUs/AboutUs";
import BloodDonor from "@/components/UI/HomePage/BloodDonors/BloodDonor";
import CampaignGallery from "@/components/UI/HomePage/CampaignGallery/CampaignGallery";
import CoverageArea from "@/components/UI/HomePage/CoverageArea/CoverageArea";
import DonationProcess from "@/components/UI/HomePage/DonationProcess/DonationProcess";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <BloodDonor />
      <CoverageArea />
      <DonationProcess />
      <CampaignGallery />
    </>
  );
};

export default HomePage;
