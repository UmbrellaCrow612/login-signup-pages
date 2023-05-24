import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gitlab } from "lucide-react";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>
            Craete an account to acess this application
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" placeholder="Username" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>

          <Button>Sign up</Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-background text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button variant="outline" type="button">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
          <Button variant="outline" type="button">
            <Gitlab className="w-4 h-4 mr-2" />
            GitLab
          </Button>
        </CardContent>
        <CardFooter className="">
          <span className="text-sm bg-background text-muted-foreground">
            Already have an account{" "}
            <Link href="/" className="font-semibold underline">
              Sign in
            </Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
