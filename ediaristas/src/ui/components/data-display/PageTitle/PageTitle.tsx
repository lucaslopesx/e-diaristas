import React from "react";
import { PageTitleContainer } from "./PageTitle.style";
import { PageTitleStyled } from "./PageTitle.style";
import { PageSubTitleStyled } from "./PageTitle.style";

interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <div>
            <PageTitleContainer>
                <PageTitleStyled>{props.title}</PageTitleStyled>
                <PageSubTitleStyled>{props.subtitle}</PageSubTitleStyled>
            </PageTitleContainer>
        </div>
    );
};

export default PageTitle;
