import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const navigate = useNavigate()

  const onClickHandler = (value: string) => {
    navigate(`/${value}`)
  }
  
  const MenuItem = () => {

    return (
      <>
        <CustomNavLinkSmall onClick={() => onClickHandler("contract-work")}>
          <Span>{"Contract Work"}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => onClickHandler("tasks")}>
          <Span>{"Tasks"}</Span>
        </CustomNavLinkSmall>
        {/* <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>{"Product"}</Span>
        </CustomNavLinkSmall> */}
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => onClickHandler("recommendation")}
        >
          <Span>
            <Button>{"Recommendation"}</Button>
          </Span>
        </CustomNavLinkSmall> 
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
