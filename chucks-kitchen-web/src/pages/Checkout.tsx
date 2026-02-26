import { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/lib/store';

type Step = 'delivery' | 'payment' | 'confirmation';

const Checkout = () => {
  const [step, setStep] = useState<Step>('delivery');
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const subtotal = total();
  const deliveryFee = 1500;
  const grandTotal = subtotal + deliveryFee + Math.round(subtotal * 0.05);
  const orderId = `#TM${Date.now().toString().slice(-8)}`;

  const handlePlaceOrder = () => {
    clearCart();
    setStep('confirmation');
  };

  if (step === 'confirmation') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success">
            <Check className="h-8 w-8 text-success-foreground" />
          </div>
          <h2 className="font-display text-xl font-bold text-foreground">Order Placed Successfully!</h2>
          <p className="mt-2 text-sm text-muted-foreground">Your order {orderId} is on its way!</p>
          <div className="mt-6 space-y-3">
            <Button
              onClick={() => navigate('/menu')}
              className="w-full rounded-full bg-primary text-primary-foreground"
            >
              Track Order
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/menu')}
              className="w-full rounded-full border-primary text-primary"
            >
              Continue Shopping
            </Button>
          </div>
          <button onClick={() => navigate('/menu')} className="mt-4 text-sm text-primary">
            Need help with your order?
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-8">
      <header className="flex items-center gap-3 border-b px-5 py-4">
        <button onClick={() => (step === 'payment' ? setStep('delivery') : navigate(-1))}>
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <h1 className="font-display text-lg font-bold text-foreground">
          {step === 'delivery' ? 'Delivery Details' : 'Payment'}
        </h1>
      </header>

      {step === 'delivery' && (
        <div className="px-5 pt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">Delivery Address</label>
            <Input placeholder="House 123 Wuse Street, Abuja" className="mt-1 rounded-lg border-border" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Delivery Time</label>
            <Input placeholder="As soon as possible" className="mt-1 rounded-lg border-border" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Delivery Instructions (Optional)</label>
            <Textarea
              placeholder="E.g. use the back of the door, make it a surprise, leave by gate..."
              className="mt-1 rounded-lg border-border"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Contact Address</label>
            <Input placeholder="+234 812 345 6789" className="mt-1 rounded-lg border-border" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Special Instructions for restaurant</label>
            <Textarea
              placeholder="E.g. I'd like it super spicy, make the meat tender..."
              className="mt-1 rounded-lg border-border"
            />
          </div>
          <Button
            onClick={() => setStep('payment')}
            className="mt-4 w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Proceed to Checkout
          </Button>
        </div>
      )}

      {step === 'payment' && (
        <div className="px-5 pt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">Pay with</label>
            <div className="mt-2 flex gap-3">
              {['Card', 'Bank', 'Transfer'].map((m) => (
                <button
                  key={m}
                  className="flex-1 rounded-lg border border-border py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Card Number</label>
            <Input placeholder="1234 5678 9012 3456" className="mt-1 rounded-lg border-border" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-foreground">Expiration Date</label>
              <Input placeholder="MM/YY" className="mt-1 rounded-lg border-border" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">CVV</label>
              <Input placeholder="123" className="mt-1 rounded-lg border-border" />
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-card p-4 text-center">
            <p className="text-sm text-muted-foreground">Order Total</p>
            <p className="text-2xl font-bold text-primary">₦{grandTotal.toLocaleString()}</p>
          </div>
          <Button
            onClick={handlePlaceOrder}
            className="mt-4 w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Place Order
          </Button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
