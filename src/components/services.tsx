import React from 'react';
import services from '../constants/services';
import Title from './title';

const Services: React.FC<IProps> = (props: IProps) => {
    return (
        <>
            {services.map((service, idx) => {
                console.log(service);
                const { icon, text, title } = service;
                return (
                    <div className='service-card'>
                        <Title title={title} />
                        <div className='service-card-body'>
                            {icon}
                            {title}
                            {text}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Services;
