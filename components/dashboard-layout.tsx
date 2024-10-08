import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type DashboardLayoutProps = {
  children: ReactNode;
  userType: string;
};

export default function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4 capitalize">{userType} Dashboard</h2>
        <nav className="space-y-2">
          <Link href={`/dashboard/${userType}`}>
            <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
          </Link>
          <Link href={`/dashboard/${userType}/profile`}>
            <Button variant="ghost" className="w-full justify-start">Profile</Button>
          </Link>
          {userType === 'admin' && (
            <>
              <Link href="/dashboard/admin/users">
                <Button variant="ghost" className="w-full justify-start">Manage Users</Button>
              </Link>
              <Link href="/dashboard/admin/departments">
                <Button variant="ghost" className="w-full justify-start">Departments</Button>
              </Link>
            </>
          )}
          {userType === 'doctor' && (
            <>
              <Link href="/dashboard/doctor/appointments">
                <Button variant="ghost" className="w-full justify-start">Appointments</Button>
              </Link>
              <Link href="/dashboard/doctor/patients">
                <Button variant="ghost" className="w-full justify-start">Patients</Button>
              </Link>
            </>
          )}
          {userType === 'nurse' && (
            <>
              <Link href="/dashboard/nurse/patients">
                <Button variant="ghost" className="w-full justify-start">Patients</Button>
              </Link>
              <Link href="/dashboard/nurse/tasks">
                <Button variant="ghost" className="w-full justify-start">Tasks</Button>
              </Link>
            </>
          )}
          {userType === 'patient' && (
            <>
              <Link href="/dashboard/patient/appointments">
                <Button variant="ghost" className="w-full justify-start">Appointments</Button>
              </Link>
              <Link href="/dashboard/patient/medical-records">
                <Button variant="ghost" className="w-full justify-start">Medical Records</Button>
              </Link>
            </>
          )}
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start">Logout</Button>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}