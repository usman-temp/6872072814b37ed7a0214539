/* eslint-disable */

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-orange-100 to-yellow-50 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Discover the Joy of Cooking
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Explore world-class recipes, elevate your culinary skills, and share your creations with the world.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="#recipes" className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
            Explore Recipes
          </Link>
          <Link href="#videos" className="bg-white border border-orange-500 text-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-100 transition">
            Watch Video
          </Link>
          <Link href="#submit" className="bg-yellow-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
            Submit Your Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}