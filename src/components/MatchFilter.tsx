import React, { useEffect, useState } from 'react';

import { IBuilderData } from '../dummy-data/builders-data';


interface IProps {
    builders: IBuilderData[];
    skillsRequired: string[];
};

const MATCH = "match__";

const MatchFilter: React.FC<IProps> = ( props ) => {
  let { builders, skillsRequired } = props;
  const [ builderArr, setBuilderArr ] = useState<IBuilderData[]>( [] );
  const [ builderEmailArr, setBuilderEmailArr ] = useState<string[]>([])

  useEffect( () => {
    builders.forEach( ( builder: IBuilderData ): void => {
      builder.match = 0;
      for ( let i = 0; i < builder.skills.length; i++ ) {
        if ( skillsRequired.includes( `${builder.skills[ i ].replace( /\s+/g, "" ).toLowerCase()}` ) ) {
          builder.match = builder.match + 1;
        }
      }
    } );
    let tempArr = builders.sort( function ( a:IBuilderData, b:IBuilderData ) {
      return a.match - b.match;
    } ).reverse();
    setBuilderArr( tempArr );
  }, [ props ] )
  
  const addBuilderHandler = ( email: string ): void => {
    if ( builderEmailArr.includes( email.toLocaleLowerCase() ) ) {
      let tempArr = [ ...builderEmailArr ];
      tempArr.splice( tempArr.indexOf( email ), 1 );
      setBuilderEmailArr( tempArr );
      console.log( builderEmailArr );
    } else {
      let tempArr = [ ...builderEmailArr ];
      setBuilderEmailArr( [ ...tempArr, email ] );
      console.log( builderEmailArr );
    };
  };

  return (
    <div className={`${MATCH}container`}>
      {
        skillsRequired.length ?
        builderArr.map( builder => {
          return (
            <div key={builder.id} className={`${MATCH}builder`}>
              <h1 className={`${MATCH}builder-name`}>{`${builder.firstName} ${builder.lastName}`}</h1>
              <p className={`${MATCH}builder-availability`}>{`Available: ${builder.availability.currentlyAvail}`}</p>
              <p className={`${MATCH}builder-availability`}>{`Available On: ${builder.availability.availableOn}`}</p>
              <div className={`${MATCH}builder-skills`}>
                {
                  builder.skills.map( skill => {
                    return (
                      <p key={`${skill}${Math.floor(Math.random() * 1000) + 1}`} className={`${MATCH}skill`}>{`${skill}`}</p>
                    )
                  })
                }
              </div>
              <span className={`${MATCH}button-container`}>
                <button className={`${MATCH}button`} onClick={() => addBuilderHandler(builder.email)}>Add</button>
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