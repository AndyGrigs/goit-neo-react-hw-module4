const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} My React Homework 4.
        </p>
        <p className="text-sm mt-1">
          Built with ❤️ by <a href="https://github.com/AndyGrigs" className="text-yellow-400 hover:underline">AndyGrigs</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;