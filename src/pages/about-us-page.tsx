import { Advantages } from '@components/advantages/advantages';
import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';
import { Statistics } from '@components/statistics/statistics';
import { Testimonials } from '@components/testimonials/testimonials';
import { WelcomeAboutUs } from '@components/welcome-about-us/welcome-about-us';
import { useEffect } from 'react';

import { useStores } from '@/stores/root-store';

export const AboutUsPage = () => {
  const {
    testimonialsStore: { getTestimonialsListAction },
  } = useStores();

  useEffect(() => {
    getTestimonialsListAction();
  }, [getTestimonialsListAction]);

  return (
    <>
      <Header variant="about" />
      <WelcomeAboutUs />
      <Statistics variant="about" />
      <Advantages />
      <Testimonials />
      <Footer />
    </>
  );
};
