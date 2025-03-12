import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md p-4 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
            {isLogin ? "Login" : "Sign Up"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <Input type="text" placeholder="Enter your name" required />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <Input type="email" placeholder="Enter your email" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <Input type="password" placeholder="Enter your password" required />
            </div>
            <Button className="w-full" type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </form>
          <p className="mt-4 text-center text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
