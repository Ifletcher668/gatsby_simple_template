import React from 'react';

const Title: React.FC<IProps> = (props: IProps) => {
    const { title } = props;
    const defaultTitle = 'A cool dude';

    return <h2 className='title'>{title ? title : defaultTitle}</h2>;
};

export default Title;
