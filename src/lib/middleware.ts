// ?? взаимодействие с Kinde_Auth
import { NextRequest } from 'next/server';
import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';

export default function middleware(req: NextRequest) {
  return withAuth(req);
}

export const config = {
  matcher: ['/create-post'],
};
