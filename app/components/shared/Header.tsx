"use client";

import { FC } from "react";
import { Container, Typography } from "@mui/material";

interface IHeaderProps {
  text: string;
}

const Header: FC<IHeaderProps> = ({ text }: IHeaderProps) => {
  return (
    <Container>
      <Typography variant="h4" mt={10} color="textPrimary">
        {text}
      </Typography>
    </Container>
  );
};

export default Header;