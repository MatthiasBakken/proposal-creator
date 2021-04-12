import React from 'react';

import Builder from './Builder';
import { IBuilderData } from '../dummy-data/builders-data';

interface IProps {
    data: IBuilderData[];
}

const Frontend: React.FC<IProps> = ( props ) => {

    const { data } = props;

    return (
        <div className="frontend-container">
            {
                data.map( builder => {
                    if ( builder.designation.toLowerCase() === 'frontend' || builder.designation.toLowerCase() === 'fullstack' ) {
                        return (
                            <Builder data={builder} key={builder.id} />
                        );
                    }
                    return;
                } )
            }
        </div>
    );
};

export default Frontend;