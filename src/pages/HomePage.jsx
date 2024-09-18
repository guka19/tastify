import React, { useState, useEffect } from 'react';
import Avatar from "../assets/avatar.svg";
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import RecipeCard from '@/components/ui/RecipeCard';

const HomePage = () => {
  const [defaultRecipes, setDefaultRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDefaultRecipes = async () => {
      setLoading(true);

      try {
        const response = await fetch("https://api.spoonacular.com/recipes/random?number=3&apiKey=753d43d70d01403abe876d7923cdef84");
        const data = await response.json();
        setDefaultRecipes(data.recipes); 
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDefaultRecipes(); // Call the function to fetch recipes
  }, []); // Add an empty dependency array to run once on mount

  return (
    <div>
      <div className='flex flex-col justify-center items-center py-12 px-6 text-center lg:flex-row lg:space-x-20'>
        <div className='flex flex-col justify-center items-center text-center'>
          <span className='font-bebas font-semibold text-3xl text-[#6C63FF] lg:text-4xl'>Welcome</span>
          <span className='font-bebas font-semibold text-3xl lg:text-4xl'>To Your Culinary Journey</span>
          <Link to="/recipes" className='hidden lg:flex'>
            <Button className="mt-4 hover:bg-[#6C63FF]">Check Recipes</Button>
          </Link>
        </div>
        <img src={Avatar} alt="avatar" className='w-72 mt-6' />
        <Link to="/recipes" className='lg:hidden'>
          <Button className="mt-8 hover:bg-[#6C63FF]">Check Recipes</Button>
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <span className=' font-poppins font-semibold text-2xl'>Random Recipes</span>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            defaultRecipes.map(recipe => (
              <RecipeCard recipe={recipe}  />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
