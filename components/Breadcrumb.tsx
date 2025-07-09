'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const categoryNames: { [key: string]: string } = {
  pc: 'เกม PC เนื้อหาดี',
  mobile: 'เกมมือถือน่าเล่น',
  'all-time-popular': 'เกมยอดนิยม',
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  const items = [
    { name: 'หน้าแรก >', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
      let name = segment;

      if (segment === 'popular-games') {
        name = 'เกมยอดนิยม';
      } else if (categoryNames[segment]) {
        name = categoryNames[segment];
      }

      return { name, href };
    }),
  ];

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center space-x-2 text-x text-gray-600">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index < items.length - 1 ? (
              <>
                <Link
                  href={item.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
                <span className="mx-2"></span>
              </>
            ) : (
              <span className="font-semibold text-gray-800">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}