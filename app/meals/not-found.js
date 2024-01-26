import Link from 'next/link'
export default function NotFound(){
    return <main className='not-found'>
        <h1>Meal Not Found</h1>
        <p>Unfortunatly, we could not find this meal, did you type it correctly ?</p>
        <Link href='/meals'>Back to all meals</Link>
    </main>
}