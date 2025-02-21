// app/about/page.tsx
export const metadata = {
    title: 'About - My First NextJS App',
    description: 'Learn more about our application using app routing and TailwindCSS.',
  };
  
  export default function AboutPage() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-3">About Page</h1>
        <p className="text-base text-gray-600">
          This page was created using NextJS's app routing system with TailwindCSS styling.
        </p>
      </main>
    );
  }