import { useEffect, useState } from "react";

import './header.css';


const Header = ( props: {propsTitle: string} ) => {
  
  let propsTitle = props.propsTitle;
  const [ title, setTitle ] = useState( "Proposal Creator" );

  useEffect( () => {
    setTitle( propsTitle );
  }, [ props.propsTitle ] );

  return (
    <div className="header">
      <h1 className="headerLogo">{`${title}`}</h1>
    </div>
  );
};

export default Header;