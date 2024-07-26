'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/create-post', label: 'Create post' },
];

export default function Header() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <header className='flex justify-between items-center py-4 px-3 border-b'>
      <Link href='/'>
        <Image
          src='https://bytegrad.com/course-assets/youtube/example-logo.png'
          alt='Logo'
          className='w-[35px] h-[35px]'
          width={35}
          height={35}
        />
      </Link>
      <nav>
        <ul className='flex gap-x-5 text-[14px]'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${pathname === link.href ? 'text-zinc-900' : 'text-zinc-400'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}




