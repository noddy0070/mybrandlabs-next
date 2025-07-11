export default function Services() {
  return (
    <main className="min-h-screen bg-background  text-foreground flex flex-col items-center justify-center px-4 bg-[url('/images/services/serviceBackground.png')] bg-cover bg-center">
      <h1 className="text-4xl font-bold text-brand-purple mb-4">Our Services</h1>
      <ul className="max-w-xl text-lg text-foreground/80 list-disc list-inside">
        <li>Website & App Development</li>
        <li>Digital Marketing & Ads</li>
        <li>Content Creation</li>
        <li>Social Media Management</li>
        <li>SEO & Analytics</li>
        <li>Brand Strategy</li>
        <li>And more...</li>
      </ul>
    </main>
  );
} 