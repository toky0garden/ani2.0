import { UpdateCard } from '@/src/components/shared';
import { Typography } from '@/src/components/ui';
import { LATEST_UPDATES } from '@/src/constants';

export const LatestUpdatesSection = () => (
  <section className='flex flex-col gap-4'>
    <Typography as='h2' className='text-[17px]/6 font-bold' variant='body-md'>
      Последние обновления
    </Typography>

    <div className='grid gap-3 md:grid-cols-2 md:gap-x-6'>
      {LATEST_UPDATES.map((update) => (
        <UpdateCard key={`${update.anime.slug}-${update.season}-${update.episode}`} update={update} />
      ))}
    </div>
  </section>
);
