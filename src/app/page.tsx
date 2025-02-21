export const metadata = {
  title: 'My First NextJS App',
  description: 'Welcome to my first NextJS application using the app router with TailwindCSS!',
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello, NextJS App Router!</h1>
      <p className="text-lg text-gray-600">
        Building your first web application with NextJS using the app routing and TailwindCSS.
      </p>
    </main>
  );
}