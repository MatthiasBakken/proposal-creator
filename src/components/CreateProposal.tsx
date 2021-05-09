import React, { useEffect } from 'react'
import { IBuilderData } from '../dummy-data/builders-data';


const CREATE = "create-proposal__";

interface IProps {
    data: IBuilderData[];
    handlePageTitle: Function;
};

const CreateProposal: React.FC<IProps> = ( props ) => {

  const { data } = props;
  const { handlePageTitle } = props;

  useEffect( () => {
    handlePageTitle("Create Proposal")
  }, [])

  return (
      <div className={`${CREATE}container`}>
        <div className={`${CREATE}content`}>

        </div>
      </div>
    )
}

export default CreateProposal;