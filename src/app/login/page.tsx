
import { PageContainer } from '@/components/page-container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Login | የአማርኛ መማሪያ',
  description: 'Login to your Amharic Learning account.',
};

export default function LoginPage() {
  return (
    <PageContainer title="Login" titleAm="ግባ">
      <div className="flex justify-center items-center py-8 md:py-12">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary" lang="am">ግባ</CardTitle>
            <CardDescription>Enter your credentials to access your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email or Username</Label>
              <Input id="email" type="email" placeholder="you@example.com" required className="text-base"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required className="text-base"/>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 p-6 pt-0">
            <Button className="w-full text-base py-3">Login</Button>
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageContainer>
  );
}
