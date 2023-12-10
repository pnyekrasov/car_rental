import { List, StyledLink } from './MainNav.styled';

export const MainNav = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/catalog">Catalog</StyledLink>
        </li>
        <li>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </li>
      </List>
    </nav>
  );
};
