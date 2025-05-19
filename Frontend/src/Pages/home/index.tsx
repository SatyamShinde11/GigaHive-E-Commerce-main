import HeroSlide from "./components/HeroSlide";
import Category from "./components/Category";
import BardOfferSlide from "./components/BardOfferSlide";
import Collection from "./components/Collection";
import CustomersReview from "./components/CustomersReview";
import FeaturedCollectionAndHotDeals from "./components/FeaturedCollectionAndHotDeals";
import Blog from "./components/Blog";

const index = () => {
  return (
    <div className="mt-14   relative overflow-hidden flex flex-col items-center    gap-20">
      <HeroSlide />
      <Category />
      <BardOfferSlide />
      <Collection />
      <CustomersReview />
      <FeaturedCollectionAndHotDeals />
      <Blog />
    </div>
  );
};

export default index;
