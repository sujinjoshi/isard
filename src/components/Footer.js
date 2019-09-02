import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Text, Box, Link, Flex } from 'rebass';
import Fade from 'react-reveal/Fade';

const FooterContainer = styled.footer`
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const TextFooter = styled(Text)`
  color: ${props => props.theme.colors.background};

  & a {
    color: ${props => props.theme.colors.background};
  }
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        contentfulAbout {
          name
        }
      }
    `}
    render={data => {
      const { name } = data.contentfulAbout;

      return (
        <Box p={3} backgroundColor="primaryDark">
          <FooterContainer>
            <Fade left>
              <TextFooter fontSize={[2, 3]}>
                <span>{`${name} - Proudly Powered by `}</span>
                <Link href="https://www.tsokendesigns.com/">
                  tsokén designs
                </Link>
              </TextFooter>
            </Fade>
          </FooterContainer>
        </Box>
      );
    }}
  />
);

export default Footer;
