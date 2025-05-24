import HeroSlide from "./components/HeroSlide";
import Category from "./components/Category";
import BardOfferSlide from "./components/BardOfferSlide";
import Collection from "./components/Collection";
import CustomersReview from "./components/CustomersReview";
import FeaturedCollectionAndHotDeals from "./components/FeaturedCollectionAndHotDeals";
import Blog from "./components/Blog";
import AnimationLogo from "../../assets/AnimationLogo";

const index = () => {
  return (
    <div>
      <div className="absolute flex  svgBOX justify-center items-center h-[110vh]  w-full top-[-60px] z-50 ">
        <AnimationLogo />
      </div>
      <div className="mt-14   relative overflow-hidden flex flex-col items-center    gap-20">
        <HeroSlide />
        <Category />
        <BardOfferSlide />
        <Collection />
        <CustomersReview />
        <FeaturedCollectionAndHotDeals />
        <Blog />
      </div>
    </div>
  );
};

export default index;
