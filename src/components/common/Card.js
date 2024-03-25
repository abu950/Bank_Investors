import styled from "styled-components";

const StyledCard = styled.div`
  ${(props) => props.isFlex && props.flexStyles && props.flexStyles};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.minWidth || "275px"};
  height: ${(props) => props.height || "auto"};
  
  margin: ${(props) => props.margin || "0"};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
`;

export const Card = ({
    children,
    isFlex,
    flexStyles,
    justifyContent,
    alignItems,
    flexDirection,
    background,
    color,
    width,
    minWidth,
    height,
    minHeight,
    padding,
    margin,
    border,
    borderRadius
}) => {
    return (
        <StyledCard
            isFlex={isFlex}
            flexDirection={flexDirection}
            alignItems={alignItems}
            justifyContent={justifyContent}
            background={background}
            color={color}
            width={width}
            minWidth={minWidth}
            // height={height}
            // minHeight={minHeight}
            padding={padding}
            margin={margin}
            border={border}
            borderRadius={borderRadius}
            flexStyles={flexStyles}
        >
            {children}
        </StyledCard>
    );
};

export default Card;