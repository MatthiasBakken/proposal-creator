import React, { useEffect, useState } from 'react';
import { Field } from 'formik';

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

  return (
    <div className={`${MATCH}container`}>
      {
        skillsRequired.length ?
        builderArr.map( builder => {
          return (
            <div key={builder.id} className={`${MATCH}builder`}>
              <label className={`${MATCH}builder-label`}>
                <span className={`${MATCH}checkbox`}>
                  <Field type="checkbox" name="builders" value={`${builder.email}`} />
                </span>
                <h1 className={`${MATCH}builder-name`}>{`Name: ${builder.firstName} ${builder.lastName}`}</h1>
                <p className={`${MATCH}builder-availability`}>{`Available: ${builder.availability.currentlyAvail}`}</p>
                <p className={`${MATCH}builder-availability`}>{`Available On: ${builder.availability.availableOn}`}</p>
                <label>Skills: </label>
                <div className={`${MATCH}builder-skills`}>
                  {
                    builder.skills.map( skill => {
                      return (
                        <p key={`${skill}${Math.floor(Math.random() * 1000) + 1}`} className={`${MATCH}skill`}>{`${skill}`}</p>
                      )
                    })
                  }
                </div>
              </label>
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