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
import { Separator } from "@/components/ui/separator";
import { Github, Gitlab, Slack } from "lucide-react";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            You need to login in order to access the application
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

          <Button>Login</Button>

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
          <Button variant="outline" type="button">
            <Slack className="w-4 h-4 mr-2" />
            Slack
          </Button>
        </CardContent>
        <CardFooter className="">
          <span className="text-sm bg-background text-muted-foreground">
            Dont have an account{" "}
            <span className="font-semibold underline">Sign up</span>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
