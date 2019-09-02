import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDarkLanding"
      height={['35vh', '40vh']}
      width={['100vw', '60vw']}
    />

    <Triangle
      color="secondaryLanding"
      height={['28vh', '40vh']}
      width={['30vw', '25vw']}
    />

    <Triangle
      color="primaryDarkLanding"
      height={['25vh', '20vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query SliderQuery {
        contentfulSlider {
          title
          background {
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.contentfulSlider.background.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Section.Container id="home" Background={Background}>
            <Fragment>
              <Heading
                textAlign="center"
                as="h2"
                color="primary"
                fontSize={[5, 6, 8]}
                mb={[3, 4, 5]}
              >
                {data.contentfulSlider.title}
              </Heading>

              <SectionLink section="about">
                {({ onClick }) => <MouseIcon onClick={onClick} />}
              </SectionLink>
            </Fragment>
          </Section.Container>
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
