# Onboarding app

## How to run locally

1. after unzipping file
2. On the project root folder, run `yarn install` or `npm install`
3. run `npx pod-install` to install iOS Pods.
4. run `yarn ios` to run on iPhone Simulator
5. run `yarn android` to run on android emulator

## Features

1. Realm database to store user data
2. Video player to play videos
3. Audio Player to record and play audio
4. Unit and Component testing with `@testing-library/react-native`
5. E2E testing with `detox` (the test was only set up and tested on iOS)

## How to run unit testing

Use the following command:

`yarn test`

To watch

`yarn test:watch`

## How to E2E testing

To run this test, you should have xcode install on your machine

1. For test build on iOS:
   `yarn e2e:build-ios`

2. Next, run the following command to start testing:
   `yarn e2e:run-ios`
