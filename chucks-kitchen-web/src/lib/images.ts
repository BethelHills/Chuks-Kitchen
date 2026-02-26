// Asset images - imported for Vite bundling
import hero from "@/assets/images/Home screen.png";
import logo from "@/assets/images/Logo.png";
import featuredMeal from "@/assets/images/Featured meal.png";
import meal1 from "@/assets/images/Desktop - 6.png";
import meal2 from "@/assets/images/Desktop - 6-2.png";
import meal3 from "@/assets/images/Desktop - 6-3.png";
import meal4 from "@/assets/images/Desktop - 6-4.png";
import meal5 from "@/assets/images/Desktop - 6-5.png";
import meal6 from "@/assets/images/Desktop - 6-6.png";
import meal7 from "@/assets/images/Desktop - 6-7.png";
import categories from "@/assets/images/Categories.png";
import exploreImage from "@/assets/images/Explore - image.png";
import signupImage from "@/assets/images/signup.jpg";
import onboardingImage from "@/assets/images/onboarding.jpg";

export const IMAGES = {
  hero,
  logo,
  categories,
  explore: exploreImage,
  // Meal images - mapped to menu categories
  jollof: featuredMeal,
  soup: meal2,
  grilled: meal3,
  plantain: meal4,
  snack: meal5,
  drink: meal6,
  // Fallback/extra
  meal1,
  meal7,
  signup: signupImage,
  onboarding: onboardingImage,
};
