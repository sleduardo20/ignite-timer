import { HeaderContainer } from './styles';
import logoIgnite from '../../assets/logo-ignite.svg';
import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <img src={logoIgnite} alt="Logo Ignite" />
        <nav>
          <NavLink to="/" title="Timer" end>
            <Timer size={24} />
          </NavLink>
          <NavLink to="/history" title="Historico" end>
            <Scroll size={24} />
          </NavLink>
        </nav>
      </HeaderContainer>
    </div>
  );
}
