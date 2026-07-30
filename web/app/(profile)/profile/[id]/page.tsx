import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { AnimeCard } from '@/src/components/shared';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui';
import { USERS } from '@/src/constants';

import {
  ProfileActivity,
  ProfileGenres,
  ProfileHeader,
  ProfileHistory,
  ProfileLists,
  ProfileReviews,
  ProfileStats
} from './_components';

export const generateStaticParams = () => USERS.map((user) => ({ id: user.username }));

export const generateMetadata = async ({ params }: PageProps<'/profile/[id]'>): Promise<Metadata> => {
  const { id } = await params;
  const user = USERS.find((item) => item.username === id);

  if (!user) return {};

  return {
    title: `${user.username} — профиль | Animi Club`,
    description: user.bio,
    openGraph: { title: user.username, description: user.bio, images: [user.avatar] }
  };
};

const ProfilePage = async ({ params }: PageProps<'/profile/[id]'>) => {
  const { id } = await params;
  const user = USERS.find((item) => item.username === id);

  if (!user) notFound();

  return (
    <main className='content-container flex flex-col gap-6 py-7'>
      <ProfileHeader user={user} />

      <ProfileStats user={user} />

      <div className='grid gap-4 lg:grid-cols-2'>
        <ProfileLists user={user} />

        <ProfileGenres user={user} />
      </div>

      <Card className='gap-4'>
        <CardHeader>
          <CardTitle className='text-[15px] font-bold'>Любимые тайтлы</CardTitle>
        </CardHeader>

        <CardContent className='grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-5 lg:grid-cols-9'>
          {user.favorites.map((anime) => (
            <AnimeCard key={anime.slug} anime={anime} />
          ))}
        </CardContent>
      </Card>

      <div className='grid gap-4 lg:grid-cols-2'>
        <ProfileHistory user={user} />

        <ProfileActivity user={user} />
      </div>

      <ProfileReviews user={user} />
    </main>
  );
};

export const revalidate = 7200;

export default ProfilePage;
