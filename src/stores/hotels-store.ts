import { create } from 'zustand';

import { getHotelsList } from '@/api/get-hotels-list';
import { Currency } from '@/types/currency';
import { Hotel } from '@/types/hotel';

type HotelsStore = {
  hotelsList: Hotel[];
  selectedHotel: Hotel | null;
  currency: Currency;
  isLoading: boolean;
  getHotelsListAction: () => Promise<void>;
  getHotelByIdAction: (id: number) => Promise<void>;
  sliced16HotelsList: () => Hotel[];
};

export const useHotelsStore = create<HotelsStore>((set) => ({
  hotelsList: [],
  selectedHotel: null,
  currency: {
    code: '',
    format: '',
    separators: '',
    symbol: '?',
  },
  isLoading: false,

  getHotelsListAction: async () => {
    try {
      set(() => ({
        isLoading: true,
      }));
      const res = await getHotelsList();

      set(() => ({
        hotelsList: res.data.body.searchResults.results,
        currency: res.data.body.pointOfSale.currency,
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
      set(() => ({
        isLoading: false,
      }));
    }
  },

  getHotelByIdAction: async (id: number) => {
    await useHotelsStore.getState().getHotelsListAction();

    set((state) => ({
      selectedHotel: state.hotelsList.find((hotel) => hotel.id === id) ?? null,
    }));
  },

  sliced16HotelsList: (): Hotel[] => {
    const hotelsList = useHotelsStore.getState().hotelsList ?? [];
    return hotelsList.slice(0, 16);
  },
}));
