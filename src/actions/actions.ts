'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import prisma from '@/lib/db';

export async function createPost(formData: FormData) {
  // * Check if user is authenticated
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login');
  }

  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  // * Insert into database
  await prisma.post.create({ data: { title, body } });

  // * Revalidate
  revalidatePath('/posts');
}
