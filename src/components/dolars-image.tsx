"use client";

import styled from "styled-components";

const Image = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background-image: url(/assets/dolar-image.png);
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export default function DolarsImage() {
  return <Image />;
}
