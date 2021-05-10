import React, { useEffect, useState } from 'react';

import { IBuilderData } from '../dummy-data/builders-data';


interface IProps {
    builders: IBuilderData[];
    skillsRequired: string[];
};

const MatchFilter: React.FC<IProps> = ( props ) => {
  let { builders, skillsRequired } = props;
  const [ builderArr, setBuilderArr ] = useState<IBuilderData[]>( [] );
  const [ builderEmailArr, setBuilderEmailArr ] = useState<string[]>([])

  useEffect( () => {
    builders.forEach( ( builder: IBuilderData ): void => {
      builder.match = 0;
      console.log( skillsRequired );
      for ( let i = 0; i < builder.skills.length; i++ ) {
        console.log('lowercase', `${builder.skills[ i ].replace( /\s+/g, "" ).toLowerCase()}`)
        if ( skillsRequired.includes( `${builder.skills[ i ].replace( /\s+/g, "" ).toLowerCase()}` ) ) {
          builder.match = builder.match + 1;
        }
      }
    } );
    let tempArr = builders.sort( function ( a:IBuilderData, b:IBuilderData ) {
      return a.match - b.match;
    } ).reverse();
    setBuilderArr( tempArr );
    console.log( tempArr );
  }, [ props ] )
  
  const addBuilderHandler = ( email: string ): void => {
    if ( builderEmailArr.includes( email.toLocaleLowerCase() ) ) {
      let tempArr = [ ...builderEmailArr ];
      tempArr.splice( tempArr.indexOf( email ), 1 );
      setBuilderEmailArr( tempArr );
    } else {
      let tempArr = [ ...builderEmailArr ];
      setBuilderEmailArr( [ ...tempArr, email ] );
    };
  };

  return (
    <div>
      {
        skillsRequired.length ?
        builderArr.map( builder => {
          return (
            <div key={builder.id}>
              <h1>{`${builder.firstName} ${builder.lastName}`}</h1>
              <p>{`Available: ${builder.availability.currentlyAvail}`}</p>
              <p>{`Available On: ${builder.availability.availableOn}`}</p>
              <div>
                {
                  builder.skills.map( skill => {
                    return (
                      <p key={`${skill}${Math.floor(Math.random() * 1000) + 1}`}>{`${skill}`}</p>
                    )
                  })
                }
              </div>
              <span>
                <button onClick={() => addBuilderHandler(builder.email)}>Add</button>
              </span>
            </div>
          )
        } ) :
          <div>
            Builders
          </div>
      }
    </div>
  )
}

export default MatchFilter;