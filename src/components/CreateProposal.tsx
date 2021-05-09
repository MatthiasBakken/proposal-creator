import React, { useEffect } from 'react'
import { IBuilderData } from '../dummy-data/builders-data';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { tagCollection } from '../tagCollection';
import './create-proposal.css';
import { JsxAttribute } from "typescript";


const CREATE = "create-proposal__";

interface IProps {
    data: IBuilderData[];
    handlePageTitle: Function;
};

const SignupSchema = Yup.object().shape( {
  description: Yup.string()
    .min( 2, 'Too Short!' )
    .max( 50, 'Too Long!' )
    .required( 'Required' ),
  other: Yup.string()
} );

const CreateProposal: React.FC<IProps> = ( props ) => {

  const { data } = props;
  const { handlePageTitle } = props;

  useEffect( () => {
    handlePageTitle( "Create Proposal" );
  }, [] );

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
              <label >Description: </label>
              <Field as="textarea" name="description" />
              {errors.description && touched.description ? (
                <div className="error-div">{errors.description}</div>
              ) : null}
              <label>Skills Needed: </label>
              <div className={`${CREATE}checkbox`}>
                {
                  tagCollection.map( (checkbox) => {
                    return (
                      <label className={`${CREATE}skill-option`}>
                        <Field type="checkbox" name={`${checkbox.name}`} value={`${checkbox.value}`} />
                        {`${checkbox.label}`}
                      </label>
                    )
                  })
                }
              </div>
              <label>Other (seperate with a comma): </label>
              <Field name="other" type="text" placeholder="sometech, someother, another" />
              {errors.other && touched.other ? (
                <div className="error-div">{errors.other}</div>
              ) : null}
              <span className="button-container">
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