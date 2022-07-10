import { CardContainer } from "./styles";

type CardProps = {
    text: string
}

export const Card = ({ text }: CardProps) => {
    return (
        <CardContainer>{text}</CardContainer>
    )
}
