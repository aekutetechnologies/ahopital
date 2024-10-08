import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-8">Hospital Management System</h1>
      <div className="space-y-4">
        <Link href="/login">
          <Button className="w-full">Login</Button>
        </Link>
      </div>
    </div>
  );
}