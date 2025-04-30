import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';
import { HotelsList } from '@components/hotels-list/hotels-list';
import { Testimonials } from '@components/testimonials/testimonials';
import { Skeleton } from '@mui/material';
import { lazy, Suspense, useEffect } from 'react';

import { useStores } from '@/stores/root-store';

const BookBike = lazy(() =>
  import('@components/book-bike/book-bike').then((module) => ({
    default: module.BookBike,
  }))
);

export const TourPackagesPage = () => {
  const {
    hotelsStore: { getHotelsListAction },
    testimonialsStore: { getTestimonialsListAction },
  } = useStores();

  useEffect(() => {
    getHotelsListAction();
    getTestimonialsListAction();
  }, [getHotelsListAction, getTestimonialsListAction]);

  return (
    <>
      <Header variant="tours" />
      <HotelsList />
      <Suspense
        fallback={<Skeleton variant="rectangular" width="100%" height={500} />}
      >
        <BookBike />
      </Suspense>
      <Testimonials />
      <Footer />
    </>
  );
};
