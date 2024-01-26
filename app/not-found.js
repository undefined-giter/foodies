import Link from 'next/link'

export default function NotFound(){
    return <main className='not-found'>
        <h1>Page not found</h1>
        <p>Please <Link href='/'>click here</Link> to back to the homepage</p>
    </main>
}