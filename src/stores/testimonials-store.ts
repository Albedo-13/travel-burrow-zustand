import { create } from 'zustand';

import { getTestimonialsList } from '@/api/get-testimonials-list';
import { Testimonial } from '@/types/testimonial';

type TestimonialsStore = {
  testimonialsList: Testimonial[];
  isLoading: boolean;
  getTestimonialsListAction: () => Promise<void>;
};

export const useTestimonialsStore = create<TestimonialsStore>((set) => ({
  testimonialsList: [],
  isLoading: false,
  getTestimonialsListAction: async () => {
    try {
      set(() => ({
        isLoading: true,
      }));

      const res = await getTestimonialsList();
      const groups = res.data.reviews.body.reviewContent.reviews.hermes.groups;

      console.log('from zustand', groups);

      set(() => ({
        testimonialsList: [...groups[0].items, ...groups[1].items],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
      set(() => ({
        isLoading: false,
      }));
    }
  },
}));
