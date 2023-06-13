import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import Banner from '@/components/partials/Landing/Banner/Banner'
import ProcessSteps from '@/components/partials/Landing/ProcessSteps/ProcessSteps'
import AboutTextPartial from '@/components/partials/Landing/TextPartials/AboutTextPartial/AboutTextPartial'
import AppFeaturesTabs from '@/components/partials/Landing/AppFeaturesTabs/AppFeaturesTabs'
import AboutTextPartialSecond from '@/components/partials/Landing/TextPartials/AboutTextPartialSecond/AboutTextPartialSecond'
import BlogPostsSection from '@/components/partials/Landing/BlogPostsSection/BlogPostsSection'
import SubscriptionBox from '@/components/UI/SubscriptionBox/SubscriptionBox'
import PricingPartial from '@/components/partials/Landing/PricingPartial/PricingPartial'

export default function Home() {
  return (
    <>
      <MainLayout pageTitle='Clicky - SaaS template | NextJS'>
        <Banner />
        <ProcessSteps />
        <AboutTextPartial />
        <AppFeaturesTabs />
        <AboutTextPartialSecond />
        <PricingPartial />
        <BlogPostsSection />
        <SubscriptionBox />
      </MainLayout>
    </>
  )
}
