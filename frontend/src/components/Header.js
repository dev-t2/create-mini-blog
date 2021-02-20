import { memo } from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Header = ({ title, navItems }) => {
  return (
    <header className="bg-blue-800">
      <div className="h-14 sm:h-16 max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center sm:justify-start">
          <Logo title={title} />
          <Nav items={navItems} />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
