import { Skeleton } from '@mui/material';

import { useStores } from '@/stores/root-store';

import { HotelCard } from '../hotel-card/hotel-card';
import styles from './hotels-list.module.scss';

export const HotelsList = () => {
  const {
    hotelsStore: { sliced16HotelsList, isLoading },
  } = useStores();

  return (
    <section className={styles.hotelsList}>
      <div className="container">
        <h2 className={styles.title}>Hotels</h2>
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={327} />
        ) : (
          <div className={styles.wrapper}>
            {sliced16HotelsList()?.map((hotel) => (
              <div className={styles.hotel} key={hotel.id}>
                <HotelCard hotel={hotel} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
