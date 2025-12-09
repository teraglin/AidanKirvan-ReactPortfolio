import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-charcoal text-white">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-[96px] m-0 border-2 border-white py-4 px-8">404</h1>
        <p className="text-2xl m-0">Page not found</p>
        <Link
          href="/"
          className="text-purple text-lg no-underline py-2 px-4 border border-purple transition-colors duration-200 hover:bg-purple hover:text-white"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
