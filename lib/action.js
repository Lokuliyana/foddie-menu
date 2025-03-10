'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalid(text){
  return !text || text.trim() === '';
}

export async function ShareMeal(prevState, formData){
    'use server';
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get("name"),
      creator_email: formData.get('email')
    }

    if (
      isInvalid(meal.title) || isInvalid(meal.title) ||
      !meal.image || meal.image.size == 0
    ) {
      return{
        message: 'Invalid Input'
      };
    }

    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
  }
