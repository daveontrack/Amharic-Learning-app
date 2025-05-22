
import { PageContainer } from '@/components/page-container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Settings | የአማርኛ መማሪያ',
  description: 'Manage your application settings and preferences.',
};

export default function SettingsPage() {
  // In a real app, these values would come from user preferences or context
  const currentTheme = 'light'; // or 'dark'
  const currentLanguage = 'am'; // or 'en'

  return (
    <PageContainer title="Settings" titleAm="ቅንብሮች">
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Appearance</CardTitle>
              <CardDescription>Customize the look and feel of the application.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                <div>
                  <Label htmlFor="theme-mode" className="font-semibold">Theme Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Switch between light and dark themes.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="theme-mode" className="text-sm text-muted-foreground">Light</Label>
                  <Switch
                    id="theme-mode"
                    checked={currentTheme === 'dark'}
                    // onCheckedChange would handle theme switching
                    aria-label="Toggle theme mode"
                  />
                  <Label htmlFor="theme-mode" className="text-sm text-muted-foreground">Dark</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Language Preferences</CardTitle>
              <CardDescription>Choose your preferred language for the interface.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="interface-language">Interface Language</Label>
                <Select defaultValue={currentLanguage}>
                  <SelectTrigger id="interface-language" className="w-full md:w-[280px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="am">አማርኛ (Amharic)</SelectItem>
                    <SelectItem value="en">English (English)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Note: Dictionary content will remain in its original language.</p>
              </div>
            </CardContent>
            <CardFooter>
               <Button variant="outline">Save Language Preferences</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Account</CardTitle>
              <CardDescription>Manage your account details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div>
                <Label htmlFor="manage-subscription" className="font-medium">Subscription</Label>
                <Button variant="link" id="manage-subscription" className="p-0 h-auto block text-primary hover:underline">Manage Subscription</Button>
                <p className="text-xs text-muted-foreground">View or update your current plan.</p>
              </div>
              <Separator />
              <div>
                <Label htmlFor="delete-account" className="font-medium">Delete Account</Label>
                 <Button variant="destructive" className="w-full mt-2">Delete Account</Button>
                <p className="text-xs text-muted-foreground mt-1">Permanently remove your account and all data.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
