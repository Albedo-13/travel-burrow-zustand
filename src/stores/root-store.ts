import { useHotelsStore } from './hotels-store';
import { useTestimonialsStore } from './testimonials-store';

export const useStores = () => {
  const testimonialsStore = useTestimonialsStore();
  const hotelsStore = useHotelsStore();

  return {
    hotelsStore,
    testimonialsStore,
  };
};
