# dOrg Proposal Creator and Builder Availability Calendar

## Personal Intro

Hi my name is Matthias Bakken (SleepyViking).

Things I've done (that aren't in private repos):

- [GitHub](https://github.com/MatthiasBakken)
- [LinkedIn](https://www.linkedin.com/in/MatthiasBakken/)
- [Rick&Morty](csb-6d95q.netlify.app)

## Description

With this project I want to create something that can easily be turned into a functional finished web application that is able to be used by the dOrg to update current availability to reduce friction when finding the right individuals for the job. Also, there will be a proposal creator function that allows you to populate the proposal with as many builders as the job may need and when proposal is created it sends out communication about the proposal to each builder that was selected for the job.

## Time

12 hours

## Components

[BuilderAvailability](./src/contracts/DAO/DAO.sol) - A simple contract that allows VotingCredits holders to vote on propoosals using a voting machine. These proposals are for a collection of executable calldatas.
[CreateProposal](./src/contracts/DAO/VotingCredits/VotingCredits.sol) - A non-transferable MiniMe token.
[Builders](./src/contracts/DAO/VotingMachines) - A fork of [DAOstack's infra voting machines](https://github.com/daostack/infra)
[Frontend](./src/contracts/Registry/OwnedItemRegistry.sol) - A fork of Level-K's ["Registry Builder"](https://github.com/levelkdev/registry-builder)
[Backend](./src/contracts/Registry/OwnedItemRegistry.sol) - A fork of Level-K's ["Registry Builder"](https://github.com/levelkdev/registry-builder)
[Builder](./src/contracts/Registry/OwnedItemRegistry.sol) - A fork of Level-K's ["Registry Builder"](https://github.com/levelkdev/registry-builder)
[Menu](./src/contracts/Registry/OwnedItemRegistry.sol) - A fork of Level-K's ["Registry Builder"](https://github.com/levelkdev/registry-builder)
[Settings](./src/contracts/Registry/OwnedItemRegistry.sol) - A fork of Level-K's ["Registry Builder"](https://github.com/levelkdev/registry-builder)
[Availability](./src/contracts/Registry/OwnedItemRegistry.sol) - A fork of Level-K's ["Registry Builder"](https://github.com/levelkdev/registry-builder)
[Description](./src/contracts/Registry/OwnedItemRegistry.sol) - A fork of Level-K's ["Registry Builder"](https://github.com/levelkdev/registry-builder)
[AddBuilders](./src/contracts/Registry/OwnedItemRegistry.sol) - A fork of Level-K's ["Registry Builder"](https://github.com/levelkdev/registry-builder)

## Closing Notes

This project is left in a very incomplete and experimental state. Here are some things I'd like to do in the future:

- Recreate MiniMe using OpenZeppelin primitives.
- Finish and use the newly refactored [IVotingMachine](./src/contracts/DAO/VotingMachines/interfaces/IVotingMachine.sol) interface for the voting machines.
  - Improve the interface to handle nonces & signature digests in a uniform way.
  - Find a generic way to handle both msg.sender & signature based executions in a single function signature. This would reduce code bloat.
- Move the "Generic Multi Call" proposal functionality out of the DAO smart contract, and utilize a modules pattern for all desired additive functionality.
  - Maybe use the diamond contract pattern?
- Create a test scenario of a DAO that manages a registry.
- Implement a standard upgrade & versioning pattern for all components.
  - Version upgrades should respect interfaces, and be able to deprecate old + introduce new.
- Interface specific initializers.
  - This way a user can understand what interfaces are being used, what initializers those require, and if they have all been called meaning the contract / system is fully initialized.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
