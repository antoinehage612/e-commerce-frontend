import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer; /* Adding cursor pointer for indicating it's clickable */
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const CartIcon = styled.div`
  position: relative;
  margin-left: 25px;
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background-color: red;
  color: white;
  border-radius: 100%;
  padding: 6px;
  font-size: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Use parent color */
  &:hover {
    color: inherit; /* Use parent color on hover */
  }
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer></SearchContainer>
        </Left>
        <Center>
          <StyledLink to="/">
            <Logo>NutriHub.</Logo>
          </StyledLink>
        </Center>
        <Right>
          <StyledLink to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </StyledLink>
          <StyledLink to="/cart">
            <CartIcon>
              <FaShoppingCart style={{ fontSize: 22 }} />
              {quantity > 0 && <CartBadge>{quantity}</CartBadge>}
            </CartIcon>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
