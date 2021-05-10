import React, { useEffect, useState } from 'react'
import { IBuilderData, buildersData } from '../dummy-data/builders-data';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { tagCollection } from '../tagCollection';
import MatchFilter from './MatchFilter';
import './create-proposal.css';
import { values } from "cypress/types/lodash";


const CREATE = "create-proposal__";

interface IProps {
    data: IBuilderData[];
    handlePageTitle: Function;
};

const SignupSchema = Yup.object().shape( {
  description: Yup.string()
    .min( 20, 'Too Short!' )
    .max( 1000, 'Too Long!' )
    .required( 'Required' ),
  skills: Yup.array()
    .min( 1, 'Must select at least one' )
    .required('Required'),
  other: Yup.string()
} );

const CreateProposal: React.FC<IProps> = ( props ) => {

  const { data } = props;
  const { handlePageTitle } = props;
  const [ options, setOptions ] = useState<string[]>( [] );

  useEffect( () => {
    handlePageTitle( "Create Proposal" );
  }, [] );

  const saveOptionHandler = ( value: string ): void => {
    if ( options.includes( value ) ) {
      let tempArr = [ ...options ];
      console.log('tempArr before', tempArr)
      tempArr.splice( tempArr.indexOf( value ), 1 )
      console.log('tempArr After', tempArr)
      setOptions( tempArr );
    } else {
      setOptions( [ ...options, value ] );
    }
  };
  return (
    <div className={`${CREATE}container`}>
      <div className={`${CREATE}form-container`}>
        <Formik
          initialValues={{
            description: '',
            skills: [],
            other: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={( values ) => {
            console.log( values );
          }}
        >
          {( { errors, touched, isValid, dirty } ) => (
            <Form className={`${CREATE}form`}>
              <label className={`${CREATE}description-label`}>Description: </label>
              <Field as="textarea" name="description" className={`${CREATE}description`} />
              {errors.description && touched.description ? (
                <div className="error-div">{errors.description}</div>
              ) : null}
              <label>Skills Needed: </label>
              <div className={`${CREATE}checkbox`}>
                {
                  tagCollection.map( (checkbox) => {
                    return (
                      <label className={`${CREATE}skill-option`} key={checkbox.value}>
                        <Field type="checkbox" name={`${checkbox.name}`} value={`${checkbox.value}`} onClick={() => saveOptionHandler(checkbox.value.replace(/\s+/g, "").toLocaleLowerCase())} />
                        {`${checkbox.label}`}
                      </label>
                    )
                  })
                }
              </div>
              {errors.skills && touched.skills ? (
                <div className="error-div">{errors.skills}</div>
              ) : null}
              <label>Other Skills (separate with a comma): </label>
              <Field className={`${CREATE}other-skill`} name="other" type="text" placeholder="Jelly, Chef, COW, Whitespace" />
              {errors.other && touched.other ? (
                <div className="error-div">{errors.other}</div>
              ) : null}
              <MatchFilter builders={data} skillsRequired={options}/>
              <span className={`${CREATE}button-container`}>
                <button className="signup_button" type="submit" disabled={!( dirty && isValid )} >Send Proposal</button>
              </span>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateProposal;