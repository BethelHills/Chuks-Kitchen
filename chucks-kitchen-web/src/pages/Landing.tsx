import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IMAGES } from '@/lib/store';

const features = [
  'Freshly Cooked',
  'Freshly Prepared',
  'Freshly Prepared',
];

const Landing = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-5 pt-6">
        <div />
        <Link to="/login">
          <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Sign in
          </Button>
        </Link>
      </header>

      {/* Logo */}
      <div className="mt-6 flex justify-center">
        <img src={IMAGES.logo} alt="Chuka's Kitchen" className="h-12 object-contain" />
      </div>

      {/* Hero */}
      <div className="px-5 pt-6 text-center">
        <h1 className="font-display text-3xl font-bold leading-tight text-foreground">
          Your Authentic Taste<br />of Nigeria
        </h1>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Explore our range of freshly made Nigerian dishes,
          <br />culinary heritage of Nigerian food for you.
        </p>
      </div>

      {/* Features */}
      <div className="mt-6 flex flex-col gap-2 px-8">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
              <Check className="h-3 w-3 text-primary-foreground" />
            </div>
            <span className="text-sm text-foreground">{f}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 px-5">
        <Link to="/menu">
          <Button className="w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90">
            Start Your Order
          </Button>
        </Link>
        <Link to="/menu" className="mt-3 block text-center text-sm text-primary font-medium">
          Learn More About Us →
        </Link>
      </div>

      {/* Hero image */}
      <div className="mt-8 flex justify-center px-5 pb-6">
        <div className="relative h-48 w-48">
          <div className="absolute inset-0 rounded-full bg-primary/10" />
          <img
            src={IMAGES.hero}
            alt="Nigerian food spread"
            className="absolute inset-2 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f3f4f6' width='200' height='200'/%3E%3Ctext fill='%239ca3af' font-size='14' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EFood%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
