import Link from "next/link"
import classes from './page.module.css'
import MealsGrid from "@/componentss/meals/meals-grid"
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: 'Meals You Like',
  description: 'Delicious meals, shared by a food-loving community.',
};


async function Meals(){
  const meals = await getMeals();
  return <MealsGrid meals = {meals}/>
}

export default function Store (){

  return (
   <>
   <header className={classes.header}>
    <h1>Delicious meals, created{''}
      <span className={classes.highlight}>by you</span>
    </h1>
    <p>
      choose your favourite reciepie nd coock it yourself. It is easy and fun!
    </p>
    <p className={classes.cta}>
      <Link href="/meals/share">
        Share your Favourite Recipe
      </Link>
    </p>
   </header>
   <main className={classes.main}>
    <Suspense fallback={<p className={classes.loading}>loading page wait...</p>}>
     <Meals />
    </Suspense>
   </main>
   </>
  );
}