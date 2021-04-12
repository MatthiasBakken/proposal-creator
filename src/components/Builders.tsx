import React from 'react';

import Frontend from './Frontend';
import Backend from './Backend';
import { IBuilderData } from '../dummy-data/builders-data';

interface IProps {
    data: IBuilderData[];
};

const Builders: React.FC<IProps> = (props) => {

    const { data } = props;

    return (
        <div className="builders-container">
            <Frontend data={data} />
            <Backend data={data} />
        </div>
    )
}

export default Builders;