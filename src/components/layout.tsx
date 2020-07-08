import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';

const Layout: React.FC<IProps> = (props: IProps) => {
    const { children } = props;
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header title={data.site.siteMetadata.title} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}>
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
