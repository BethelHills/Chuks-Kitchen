import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-background px-5 pt-12">
      <h1 className="font-display text-2xl font-bold text-foreground">
        {isLogin ? 'Login your Account' : 'Create Your Account'}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {isLogin ? 'Enter your details to sign in' : 'Fill in your details to get started'}
      </p>

      <div className="mt-8 space-y-4">
        {!isLogin && (
          <div>
            <label className="text-sm font-medium text-foreground">Username</label>
            <Input placeholder="Your full name" className="mt-1 rounded-lg border-border" />
          </div>
        )}
        <div>
          <label className="text-sm font-medium text-foreground">Email</label>
          <Input type="email" placeholder="you@email.com" className="mt-1 rounded-lg border-border" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">
            {isLogin ? 'Password' : 'Phone number'}
          </label>
          <Input
            type={isLogin ? 'password' : 'tel'}
            placeholder={isLogin ? '••••••••' : '+234 812 345 6789'}
            className="mt-1 rounded-lg border-border"
          />
        </div>
        {!isLogin && (
          <>
            <div>
              <label className="text-sm font-medium text-foreground">Create password</label>
              <Input type="password" placeholder="••••••••" className="mt-1 rounded-lg border-border" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Confirm password</label>
              <Input type="password" placeholder="••••••••" className="mt-1 rounded-lg border-border" />
            </div>
          </>
        )}
      </div>

      <Button
        onClick={() => navigate('/menu')}
        className="mt-6 w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
      >
        {isLogin ? 'Login' : 'Continue'}
      </Button>

      <div className="mt-6 space-y-3">
        <Button variant="outline" className="w-full rounded-full border-border py-5 text-foreground">
          Continue with Google
        </Button>
        <Button variant="outline" className="w-full rounded-full border-border py-5 text-foreground">
          Continue with Apple
        </Button>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="font-semibold text-primary"
        >
          {isLogin ? 'Sign Up' : 'Sign In'}
        </button>
      </p>
    </div>
  );
};

export default Login;
