'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavTabs.module.css'; 

const tabs = [
  { href: '/audio', label: 'audio' },
  { href: '/form', label: 'form' },
  { href: '/stock', label: 'stock' },
];

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <div className={styles.tabGroup}>
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`${styles.tabButton} ${
            pathname === tab.href ? styles.active : ''
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}