import styled from "styled-components";
import { Flex } from "grid-styled";

export const Photo = styled(Flex)`
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  width: ${props => `${(2 * props.radius).toString()}px`};
  height: ${props => `${(2 * props.radius).toString()}px`};
  border-radius: ${props => `${props.radius.toString()}px`};
  flex: 1;
`;

export const PhotoContainer = styled(Flex)`
  width: ${props => `${(2 * props.radius).toString()}px`};
  height: ${props => `${(2 * props.radius).toString()}px`};
`;
