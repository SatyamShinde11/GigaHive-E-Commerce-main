import React from 'react'
import HeroSlide from './components/HeroSlide'
import Category from './components/Category'
import TrendingCard from './components/TrendingCard'
import BardOfferSlide from './components/BardOfferSlide'
import Collection from './components/Collection'
import LookbookCard from './components/LookbookCard'
import CustomersReview from './components/CustomersReview'
import FeaturedCollection from './components/FeaturedCollection'



const index = () => {
  return (
   <div className="mt-14   relative overflow-hidden flex flex-col    gap-20">
    <HeroSlide/>
    <Category />
    <TrendingCard /> 
    <BardOfferSlide />
    <Collection />
    <LookbookCard />
    <CustomersReview />
    <FeaturedCollection />
    </div>
  )
}

export default index