const NavBar = () => {

  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <a className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" href="/">
        <FrameIcon className="w-6 h-6" />
        <span className="sr-only">Portal</span>
      </a>
    </header>
  );
};


function FrameIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
};

export default NavBar;

