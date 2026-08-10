import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', display: 'flex', gap: '1rem', background: '#f5f5f5' }}>
      <Link href="/">Home</Link>
    </nav>
  );
}
