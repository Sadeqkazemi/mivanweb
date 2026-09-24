export type BlogPost = {
  slug: string;
  cat: "Nutrition" | "Travel" | "Product" | "Research";
  title: string;
  excerpt: string;
  meta: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  { slug:"stress-cortisol-cravings", cat:"Research", title:"How stress quietly changes what your body needs", excerpt:"We dug into the science of stress, cortisol and cravings, and what it means for meals that actually help you recover.", meta:"8 min read · June 2026", image:"/images/blog-stress-cortisol-cravings.webp" },
  { slug:"eating-in-a-new-city", cat:"Travel", title:"Eating well in a city you have never visited", excerpt:"Five practical ways to order with confidence while leaving room for discovery.", meta:"5 min read · June 2026", image:"/images/blog-eating-new-city.webp" },
  { slug:"low-sodium-flavor", cat:"Nutrition", title:"Low-sodium does not mean low-flavor", excerpt:"How acidity, aromatics and texture can keep heart-smart meals exciting.", meta:"4 min read · May 2026", image:"/images/blog-low-sodium-flavor.webp" },
  { slug:"stress-aware-picks", cat:"Product", title:"Introducing stress-aware recovery picks", excerpt:"How a live signal from your watch becomes a calmer, more useful meal choice.", meta:"3 min read · May 2026", image:"/images/blog-smartwatch-recovery-loop-v4.webp" },
  { slug:"diabetes-dining-out", cat:"Nutrition", title:"Eating with diabetes when you dine out", excerpt:"A simple framework for navigating portions, timing and unfamiliar menus.", meta:"6 min read · April 2026", image:"/images/blog-diabetes-dining-out.webp" },
  { slug:"3-million-meals", cat:"Research", title:"What 3 million matched meals taught us", excerpt:"Patterns in how people actually choose food when time and place keep changing.", meta:"7 min read · April 2026", image:"/images/blog-three-million-meals-v2.webp" },
  { slug:"smartwatch-recovery-loop", cat:"Travel", title:"Smartwatch and food: the recovery loop", excerpt:"Why live body signals belong in the way we think about the next meal.", meta:"4 min read · March 2026", image:"/images/blog-smartwatch-recovery-loop-v4.webp" },
  { slug:"protein-timing", cat:"Nutrition", title:"The protein timing myth, settled", excerpt:"When you eat protein matters less than the quality and rhythm of your whole day.", meta:"5 min read · March 2026", image:"/images/blog-protein-timing-v2.webp" },
  { slug:"menus-read-themselves", cat:"Product", title:"Menus that read themselves", excerpt:"Inside the scanner that turns a restaurant photo into personal guidance.", meta:"4 min read · February 2026", image:"/images/food-herb-chicken-plate.webp" },
  { slug:"sleep-debt-appetite", cat:"Research", title:"How sleep debt reshapes appetite", excerpt:"What one short night changes about hunger, energy and the choices that follow.", meta:"6 min read · February 2026", image:"/images/blog-sleep-debt-appetite-v3.webp" },
  { slug:"three-time-zones", cat:"Travel", title:"A week of eating across three time zones", excerpt:"A field note on jet lag, routine and staying flexible without losing balance.", meta:"5 min read · January 2026", image:"/images/blog-three-time-zones.webp" },
];

export function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}
