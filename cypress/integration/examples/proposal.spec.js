describe( 'Quotes App', () => {
  beforeEach( () => {
    cy.visit( 'http://localhost:3000' );
    cy.viewport('iphone-8')
  } )
  
  it ( 'sanity checks', () => {
    expect( 10 ).to.equal( 10 );
    expect( 1 + 2 ).to.equal( 3 );
    expect( {} ).to.eql( {} );
    expect( 1 + 2 ).to.equal( 4 - 1 );
  } );

  const bldrsAvailContainer = () => cy.get( `div[class="builders-availability-container"]` );
  const menuContainer = () => cy.get( `div[class="menu-container"]` );
  const buildersContainer = () => cy.get( `div[class="builders-container"]` );
  const frontendContainer = () => cy.get( `div[class="frontend-container"]` );
  const backendContainer = () => cy.get( `div[class="backend-container"]` );
  const builderMain = () => cy.get( `div[class="builder__main"]` );
  const builderContainer = () => cy.get( `div[class="builder__container"]` );
  const builderHeader = () => cy.get( `div[class="builder__header"]` );
  const builderDetails = () => cy.get( `div[class="builder__details"]` );
  const bldrSkillsContainer = () => cy.get( `div[class="builder__skills-container"]` );
  const builderSkills = () => cy.get( `div[class="builder__skills"]` );
  const bldrAvailContainer = () => cy.get( `div[class="builder__availability-container"]` );
  const bldrProjectContainer = () => cy.get( `div[class="builder__project-container"]` );

  it( 'containers/divs exist', () => {
    bldrsAvailContainer().should( 'exist' );
    menuContainer().should( 'exist' );
    buildersContainer().should( 'exist' );
    frontendContainer().should( 'exist' );
    backendContainer().should( 'exist' );
    builderMain().should( 'exist' );
    builderContainer().should( 'exist' );
    builderHeader().should( 'exist' );
    builderDetails().should( 'exist' );
    bldrSkillsContainer().should( 'exist' );
    builderSkills().should( 'exist' );
    bldrAvailContainer().should( 'exist' );
    bldrProjectContainer().should( 'exist' );
  } );
  
} );