import './globals.css';
import Header from '@/components/header/header'

export const metadata = {
  title: 'Foodies',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
