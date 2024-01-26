'use server'

import { saveMeal } from './meals'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'


function isInvalidValue(inputValue){
    return !inputValue || inputValue === ''
}

export async function shareMeal(prevState, formData){
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),   
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if(isInvalidValue(meal.title) || 
    isInvalidValue(meal.summary) || 
    isInvalidValue(meal.instructions) ||
    isInvalidValue(meal.creator) ||
    isInvalidValue(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || meal.image.size === 0){
        return {
            message: 'Invalid input'
        }
    }

    await saveMeal(meal)

    revalidatePath('/meals')
    // add 'layout' as second argument revalidate nested pages
    // while 'page' (dafault paramettre) will revalidate only this path-page
    // Use revalidatePath('/', 'layout') to revalidate all pages and 
    // use fetch functionsinstead of using the cache of the navigator
    redirect('/meals')
}
