import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, UserPlus, Stethoscope, Ambulance, Flask, XRay, Bed, Nurse, DollarSign, FileText } from 'lucide-react';

const DashboardIcon = ({ icon: Icon, label }) => (
  <Card className="w-32 h-32 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
    <CardContent className="flex flex-col items-center p-4">
      <Icon className="h-12 w-12 mb-2 text-blue-500" />
      <span className="text-xs text-center">{label}</span>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const icons = [
    { icon: Calendar, label: 'Appointment' },
    { icon: UserPlus, label: 'Patient Registration' },
    { icon: Stethoscope, label: 'Clinical Management' },
    { icon: Ambulance, label: 'Emergency' },
    { icon: Flask, label: 'Laboratory' },
    { icon: XRay, label: 'Radiology' },
    { icon: Bed, label: 'In-Patient Management' },
    { icon: Nurse, label: 'Nurse Station' },
    { icon: DollarSign, label: 'Billing and Collection' },
    { icon: FileText, label: 'MIS Reports' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {icons.map((icon, index) => (
          <DashboardIcon key={index} icon={icon.icon} label={icon.label} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;