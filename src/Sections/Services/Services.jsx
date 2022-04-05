import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import ServiceSection, {
    ServiceCardDiv,
    ServiceIcon,
    ServiceTitle,
    TitleDiv,
    WrapperServiceCards,
} from "./Services.style";

import Code from "../../assets/icons/code.svg";
import SmartPhone from "../../assets/icons/smartphone.svg";

const Services = () => {
    return (
        <>
            <ServiceSection id="services">
                <SectionTitle>Serviços</SectionTitle>
                <WrapperServiceCards>
                    <ServiceCard
                        width="7.875rem"
                        src={Code}
                        title="Criação de sites"
                    />
                    <ServiceCard
                        width="11.375rem"
                        src={SmartPhone}
                        title="Sites responsivos"
                    />
                </WrapperServiceCards>
            </ServiceSection>
        </>
    );
};

export default Services;

export const ServiceCard = (props) => {
    return (
        <>
            <ServiceCardDiv>
                <ServiceIcon src={props.src} />
                <TitleDiv width={props.width}>
                    <ServiceTitle>{props.title}</ServiceTitle>
                </TitleDiv>
            </ServiceCardDiv>
        </>
    );
};
