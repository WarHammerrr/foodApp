export default function Footer() {
  return (
    <footer className="bg-teal-500 text-white text-center py-4 fixed bottom-0 left-0 w-full">
      <p className="text-sm">&copy; {new Date().getFullYear()} EatNow. All rights reserved.</p>
    </footer>
  );
}
