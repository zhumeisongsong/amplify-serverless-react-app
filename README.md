This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.htmlaws configure get

Adding backend environment dev to AWS Amplify Console app: d3gkrw4px67m1e

"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

aws configure set region ap-northeast-1 --profile appSyncUser
aws configure list
aws configure get region --profile appSyncUser

amplify remove api postComment

which aws
aws --version
vi ~/.aws/config
https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html#cliv2-mac-install-cmd

https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html

https://github.com/aws-amplify/amplify-js/issues/3703

https://github.com/praveen001/react-clean-architecture

https://aws.amazon.com/cn/premiumsupport/knowledge-center/dynamodb-table-throttled/?nc1=h_ls

https://docs.aws.amazon.com/zh_cn/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.AtomicCounters

https://juejin.im/post/5e0968ed51882549766f3b9b

## How to Create Amplify App

### 1 Install Amplify CLI

https://docs.amplify.aws/start/getting-started/installation/q/integration/react

`npm install -g @aws-amplify/cli`

 Configure Amplify by running the following command:

 `amplify configure`

### 2 Initialize a new backend

 Before you run init command, please delete old amplify app files:

`rm -rf amplify`

`rm -rf .graphqlconfig.yml`

https://docs.amplify.aws/start/getting-started/setup/q/integration/react#create-a-new-react-app

`amplify init` 

### 3 Add API and Deploy the API 
https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js

Run `amplify add api` to add the api schema under `./src/api/schema.graphql`

To deploy the API, you can use the Amplify push command: `amplify push`


