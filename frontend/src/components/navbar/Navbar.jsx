import Logo from '/logo.png'
import { Hamburguer } from './Hamburger';
import { Links } from './Links';

export const Navbar = () => {
  return (
    <div className="w-screen bg-mainColor py-5">
      <div className="flex justify-between items-center px-5">
        <div>
          <img className="w-16" src={Logo} />
        </div>
        <Hamburguer />
        <div className='DESKTOP-MENU hidden space-x-8 lg:flex'>
          <Links name="Homepage" />
          <Links name="Tier List" />
          <Links name="Chars" />
        </div>
      </div>
    </div>
  );
};
