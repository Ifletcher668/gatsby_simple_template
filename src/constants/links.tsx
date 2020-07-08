import React from 'react';
import { Link } from 'gatsby';

const data = [
    {
        text: 'home',
        url: '/',
    },
    {
        text: 'about',
        url: '/about-me',
    },
    {
        text: 'blogs',
        url: '/blogs/',
    },
    {
        text: 'projects',
        url: '/projects/',
    },
    {
        text: 'contact',
        url: '/contact-me',
    },
];

const links = data.map((link, idx) => {
    const { text, url } = link;
    return (
        <li key={idx}>
            <Link to={url}>{text}</Link>
        </li>
    );
});

export default (props: IProps) => {
    const { className } = props;
    return <ul className={`page-links ${className ? className : ''}`}>{links}</ul>;
};
