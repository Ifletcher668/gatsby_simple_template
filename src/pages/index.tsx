import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Services from '../components/services';
// import Image from '../components/image';
// import SEO from '../components/seo';

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <Services />
        </Layout>
    );
};

export default IndexPage;
