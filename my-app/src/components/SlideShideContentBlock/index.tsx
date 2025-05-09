import { useState } from "react";
import { Row, Col } from "antd";
import { Fade, Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
    ContentSection,
    Content,
    ContentWrapper,
    StyledRow,
    TopImage,
    ImageRow,
    IconWrapper,
} from "./styles";
import { useEffect, useRef } from "react";

interface Slide {
    icon: string;
    title: string;
    content: string;
    topImage?: string;
    button?: {
        color?: string;
        title: string;
        navLink?: string;
    }[];
    section?: {
        title: string;
        content: string;
        icon: string;
    }[];
}

interface SlideShowBlockProps {
    slides: Slide[];
    id?: string;
    direction?: "left" | "right";
    interval?: number;
    pauseDuration?: number;
}

const SlideShowBlock = ({ slides, id, direction = "left", interval = 5000, pauseDuration = 10000 }: SlideShowBlockProps) => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();
    const lastInteractionRef = useRef(Date.now());

    const INTERVAL = interval; // 5 seconds
    const PAUSE_DURATION = pauseDuration; // pause autoscroll for 10s after interaction

    const currentSlide = slides[current];

    const next = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
        lastInteractionRef.current = Date.now();
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
        lastInteractionRef.current = Date.now();
    };

    const goToSlide = (index: number) => {
        setCurrent(index);
        lastInteractionRef.current = Date.now();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            if (now - lastInteractionRef.current > PAUSE_DURATION) {
                setCurrent((prev) => (prev + 1) % slides.length);
            }
        }, INTERVAL);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <ContentSection>
            {/* Top Full-Width Image */}
            {currentSlide.topImage && (
                <TopImage src={currentSlide.topImage} alt="Top visual" />
            )}

            {/* Image Row with Prev/Next */}
            <ImageRow>
                <Button onClick={prev}>Previous</Button>
                {slides.map((slide, idx) => (
                    <IconWrapper
                        key={idx}
                        isActive={idx === current}
                        onClick={() => goToSlide(idx)}
                    >
                        <SvgIcon src={slide.icon} width="50" height="50" />
                    </IconWrapper>
                ))}
                <Button onClick={next}>Next</Button>
            </ImageRow>

            {/* Slide Text + Buttons */}
            <Fade direction={direction} triggerOnce>
                <StyledRow justify="center" align="middle" id={id} direction={direction}>
                    <Col span={24}>
                        <Slide direction="up" triggerOnce>
                            <Row justify="center" align="middle">
                                <ContentWrapper>
                                    <Col lg={24} md={24} sm={24} xs={24}>
                                        <h2>{currentSlide.title}</h2>
                                        <Content>{currentSlide.content}</Content>
                                    </Col>
                                </ContentWrapper>
                            </Row>
                        </Slide>
                    </Col>
                </StyledRow>
            </Fade>
        </ContentSection>
    );
};


export default SlideShowBlock;
