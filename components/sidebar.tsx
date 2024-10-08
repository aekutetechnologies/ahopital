import React from 'react';
import Link from 'next/link';
import { Home, Users, Calendar, Clipboard, Activity } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="bg-blue-900 text-white w-16 flex flex-col items-center py-4 space-y-4">
      <Link href="/dashboard">
        <Home className="h-6 w-6" />
      </Link>
      <Link href="/patient-registration">
        <Users className="h-6 w-6" />
      </Link>
      <Link href="/doctor-appointment">
        <Calendar className="h-6 w-6" />
      </Link>
      <Link href="/clinical-management">
        <Clipboard className="h-6 w-6" />
      </Link>
      <Link href="/emergency">
        <Activity className="h-6 w-6" />
      </Link>
    </aside>
  );
};

export default Sidebar;