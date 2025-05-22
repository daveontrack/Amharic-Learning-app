
import { PageContainer } from '@/components/page-container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Profile | የአማርኛ መማሪያ',
  description: 'View and manage your user profile.',
};

export default function ProfilePage() {
  // Placeholder user data - in a real app, this would come from auth state
  const user = {
    name: 'Dawit Mengesha',
    email: 'dawit@example.com',
    joinDate: 'January 1, 2024',
    avatarUrl: 'https://placehold.co/150x150.png', 
  };

  return (
    <PageContainer title="Profile" titleAm="የግል መረጃ">
      <div className="flex justify-center items-start py-8 md:py-12">
        <Card className="w-full max-w-2xl shadow-xl">
          <CardHeader className="items-center text-center">
            <Avatar className="w-24 h-24 mb-4 border-4 border-primary">
              <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="profile person" />
              <AvatarFallback className="text-3xl">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl font-bold text-primary">{user.name}</CardTitle>
            <CardDescription>Manage your account details and preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue={user.name} className="text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue={user.email} readOnly className="text-base bg-muted cursor-not-allowed" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="joinDate">Joined On</Label>
              <Input id="joinDate" defaultValue={user.joinDate} readOnly className="text-base bg-muted cursor-not-allowed" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" placeholder="Enter current password" className="text-base"/>
            </div>
             <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" placeholder="Enter new password" className="text-base"/>
            </div>
             <div className="space-y-2">
              <Label htmlFor="confirm-new-password">Confirm New Password</Label>
              <Input id="confirm-new-password" type="password" placeholder="Confirm new password" className="text-base"/>
            </div>
            <div className="pt-4 flex justify-end">
              <Button className="text-base py-3">Update Profile</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
