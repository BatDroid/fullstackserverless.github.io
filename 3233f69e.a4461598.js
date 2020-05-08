(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(6),r=(n(0),n(146)),i={id:"amplify-04",title:"DataStore - CRUD (Create Read Update Delete)",sidebar_label:"DataStore - CRUD"},c={id:"amplify-04",title:"DataStore - CRUD (Create Read Update Delete)",description:"# Goodbye Redux, MobX, Apollo! An innovative step in the evolution of state managers.\r",source:"@site/docs\\amplify04.md",permalink:"/docs/amplify-04",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/amplify04.md",sidebar_label:"DataStore - CRUD",sidebar:"someSidebar",previous:{title:"Amplify API - AppSync - CRUD (Create Read Update Delete)",permalink:"/docs/amplify-03"}},s=[{value:"Advantages of AWS Amplify DataStore over other state management libraries like Redux, MobX, Apollo, Relay:",id:"advantages-of-aws-amplify-datastore-over-other-state-management-libraries-like-redux-mobx-apollo-relay",children:[]},{value:"1. Real time out of the box.",id:"1-real-time-out-of-the-box",children:[]},{value:"2. Code generation.",id:"2-code-generation",children:[]},{value:"3. Offline data &amp; cloud sync",id:"3-offline-data--cloud-sync",children:[]},{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Register your AWS account",id:"register-your-aws-account",children:[]},{value:"Initializing AWS Amplify in a React Native Project",id:"initializing-aws-amplify-in-a-react-native-project",children:[]},{value:"Connect the authentication plugin",id:"connect-the-authentication-plugin",children:[]},{value:"ampify-app",id:"ampify-app",children:[]},{value:"Installing dependencies",id:"installing-dependencies",children:[]},{value:"Connecting the API plugin (App Sync)",id:"connecting-the-api-plugin-app-sync",children:[]},{value:"Model generation",id:"model-generation",children:[]},{value:"Updating API",id:"updating-api",children:[]},{value:"READ",id:"read",children:[]},{value:"CREATE UPDATE DELETE",id:"create-update-delete",children:[]},{value:"Navigation",id:"navigation",children:[]},{value:"Jobs Button",id:"jobs-button",children:[]},{value:"Done \u2705",id:"done-",children:[]},{value:"References:",id:"references",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"goodbye-redux-mobx-apollo-an-innovative-step-in-the-evolution-of-state-managers"},"Goodbye Redux, MobX, Apollo! An innovative step in the evolution of state managers."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/00.png",alt:"DataStore"}))),Object(r.b)("p",null,"One of the most difficult tasks in developing web and mobile applications is synchronizing data between devices and perform offline operations. Ideally, when the device is offline, your customers should be able to continue to use your application not only to access data, but also to create and modify it. When the device becomes online again, the application must reconnect to the backend, while synchronizing the data and resolve raised conflicts. In order to handle correctly all extreme cases requires a lot of undifferentiated code, even when using the AWS AppSync SDK cache on a device with autonomous mutations and delta synchronization."),Object(r.b)("p",null,"Amplify DataStore provides persistent storage on the device for recording, reading and monitoring data changes while you are connected to the Internet or not, and also makes it easy to synchronize data with the cloud and between devices."),Object(r.b)("p",null,"Amplify DataStore allows developers to write applications using distributed data without writing additional code for an offline or online script."),Object(r.b)("p",null,"You can use the Amplify DataStore for offline use in local-only mode without an AWS account or provide the entire backend using AWS AppSync and Amazon DynamoDB."),Object(r.b)("p",null,"The DataStore includes Delta Sync using your GraphQL backend and several conflict resolution strategies."),Object(r.b)("h2",{id:"advantages-of-aws-amplify-datastore-over-other-state-management-libraries-like-redux-mobx-apollo-relay"},"Advantages of AWS Amplify DataStore over other state management libraries like Redux, MobX, Apollo, Relay:"),Object(r.b)("p",null,"Comparing AWS Amplify with Redux, MobX is not correct, since AWS Amplify is not only a state manager, but also a client-server, so in the client-server class we will compare it with Apollo and Relay."),Object(r.b)("h2",{id:"1-real-time-out-of-the-box"},"1. Real time out of the box."),Object(r.b)("p",null,"I don\u2019t think that a business can be considered serious if their mobile application is not affected by subscription events implemented using web sockets technology.\nAnd how many applications nowadays work on web sockets?\nI think there is not any , due to the fact that real time is an additional work for both backend and front-end  developers.\nFor us, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://fullstackserverless.github.io/docs/amplify-01"}),"fullStack serverless")," developers on AWS Amplify, real time goes out of the box, both on the front and on the back and we don\u2019t we need to write an implementation code for integrating web sockets for each model, since it is generated automatically, as well as writing documentation for all of our generated code, implemented in our project based on the GraphQL schema instruction. In order not to scare with words, I will show you an example from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://fullstackserverless.github.io/docs/amplify-03"}),"the last lesson"),", how Store is defined in AWS Amplify:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Job\n  @model\n  @auth(\n    rules: [\n      {allow: owner, ownerField: "owner", operations: [create, update, delete]},\n    ])\n{\n  id: ID!\n  position: String!\n  rate: String!\n  description: String!\n  owner: String\n}\n')),Object(r.b)("p",null,"This determines the model in the store, not only for the frontend, but also for the backend. One source of truth for frontend and backend. Yes, yes, I see that I will repeat it  more time than one in my life, since this is a killer feature and punch line vs Redux, MobX, Apollo, Relay."),Object(r.b)("p",null,"This is exactly what differentiates it from Redux, MobX, Apollo architecture. It erases the line between the backend and frontend. And puts AWS Amplify DataStore over others."),Object(r.b)("p",null,"If you are from the backend, then you no longer need to write resolvers to the database and drag subscriptions to each data model."),Object(r.b)("p",null,"Serverless - this is when the backend developers came to learn frontend, since their services are needed exclusively for legacy projects that do not keep up with the our times, and from which they do not keep up real time."),Object(r.b)("h2",{id:"2-code-generation"},"2. Code generation."),Object(r.b)("p",null,"What is code generation you can read without me on Wikipedia, unless of course you know its meaning, which in this punch reminds us of himself.\nAre we using fetch or axios?\nBy sending requests to the deep forest API, which we also write in conjunction with Redux, MobX, Apollo, Relay.\nSo here is another news for today!\nYou no longer need to write these API calls, you only need to call them.\nThis means that you no longer need to create this rather big folder with the server request code, since in AWS Amplify DataStore they are also generated in your project based on your store, defined by the very same GraphQL diagram of their first item. And this is done using one command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run amplify-modelgen\n")),Object(r.b)("p",null,"As a result, we get the models folder with the generated code."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore09.png",alt:"DataStore"}))),Object(r.b)("p",null,"And the graphql folder after pushing to the server, with all the request in Flow, TS or vanilla JavaScript."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore08.png",alt:"DataStore"}))),Object(r.b)("h2",{id:"3-offline-data--cloud-sync"},"3. Offline data & cloud sync"),Object(r.b)("p",null,"No need to write additional code to send a request to the server after the application becomes online.\nSometimes you find yourself in an unreliable situation, but you better wait longer instead to fail the operation.\nApollo has apollo-link-retry which provides exponential rollback and server requests between default attempts. It is true that (currently) it does not handle retries for GraphQL errors in the response, it only handles for network errors.\nRedux, MobX, of course, does not have this solution under the hood, since they are not clients and you have to use third-party middleware, because REST is like a retired grandfather who looking support from his  grandchildren. Detailed analysis of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://fullstackserverless.github.io/docs/amplify-02"}),"GraphQL vs REST"),".\nAWS Amplify DataStore has not only an analog of apollo-link-retry, but also a built-in and customizable familiar programming model with automatic version control, conflict detection and resolution in the cloud."),Object(r.b)("p",null,"Among the disadvantages of AWS Amplify, I want to mention that Apollo hooks with its loading and error out of the box reduce the amount of code written on the front."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws-amplify.github.io/docs/js/datastore"}),"Official documentation")),Object(r.b)("p",null,"At the end of this lesson get this mobile application using the Amplify DataStore:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore07.png",alt:"dataStore"}))),Object(r.b)("h1",{id:"lets-go"},"Let's Go!"),Object(r.b)("p",null,"This lesson is a logical continuation of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"'https://fullstackserverless.github.io/docs/auth1-00'"}),"authentication")," lesson, since the work with the DataStore will be performed by an authenticated user. Therefore, if you did not do it, then go back a do it first."),Object(r.b)("p",null,"Support Patron ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.patreon.com/bePatron?u=34467235"}),"Chat")),Object(r.b)("p",null,"Source code for this part is available on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/fullstackserverless/startup/tree/datastore"}),"Github"),"."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/01.png",alt:"Step01"}))),Object(r.b)("h2",{id:"clone-the-repository"},"Clone the repository"),Object(r.b)("p",null,"If you coming here from previous ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"'https://fullstackserverless.github.io/docs/auth1-00'"}),"lesson"),", you can continue it from this step."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/fullstackserverless/startup.git\n")),Object(r.b)("p",null,"Go to the project folder"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd startup\n")),Object(r.b)("p",null,"Install dependencies"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"yarn")),Object(r.b)("p",null,"or"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"npm install")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/02.png",alt:"Step02"}))),Object(r.b)("h2",{id:"register-your-aws-account"},"Register your AWS account"),Object(r.b)("p",null,"This step is for those who do not have AWS account."),Object(r.b)("p",null,"Register using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws-amplify.github.io/docs/"}),"this")," instruction \ud83d\udcc3 and check out all 5 steps in the video tutorial."),Object(r.b)("h4",{id:"attention"},"Attention!!!"),Object(r.b)("div",{class:"alert alert--warning",role:"alert"},"You need a bank card \ud83d\udcb3, where should be more than 1$ \ud83d\udcb5",Object(r.b)("p",null,"Look there and put Amplify Command Line Interface (CLI)")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/03.png",alt:"Step03"}))),Object(r.b)("h2",{id:"initializing-aws-amplify-in-a-react-native-project"},"Initializing AWS Amplify in a React Native Project"),Object(r.b)("p",null,"Initialize our AWS Amplify project in the root directory."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify init\n")),Object(r.b)("p",null,"Answer these questions:\n",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/auth02.png",alt:"amplify init"}))),Object(r.b)("p",null,"The project successfully initialized \ud83d\ude80"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/04.png",alt:"Step04"}))),Object(r.b)("h2",{id:"connect-the-authentication-plugin"},"Connect the authentication plugin"),Object(r.b)("p",null,"Now that the application is in the cloud, you can add some features, such as allowing users to register with our application and log in."),Object(r.b)("p",null,"We connect the authentication function."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify add auth\n")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/auth03.png",alt:"amplify init"}))),Object(r.b)("p",null,"Submit changes to the cloud \ud83d\udcad"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify push\n")),Object(r.b)("p",null,"\u2714 All resources are updated in the cloud"),Object(r.b)("p",null,"Put together all changes and check whether authentication is working."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/auth1-04.png",alt:"Hello screen"}))),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/05.png",alt:"Step05"}))),Object(r.b)("h2",{id:"ampify-app"},"ampify-app"),Object(r.b)("p",null,"The fastest way to get started with the DataStore is to use the npx script ampify-app."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx amplify-app@latest\n")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/06.png",alt:"Step06"}))),Object(r.b)("h2",{id:"installing-dependencies"},"Installing dependencies"),Object(r.b)("p",null,"Detailed installation instruction ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws-amplify.github.io/docs/js/datastore#setup"}),"here")),Object(r.b)("p",null,"If you have a React Native Cli, then"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @aws-amplify/datastore @react-native-community/netinfo @react-native-community/async-storage\n")),Object(r.b)("p",null,"And if you use React Native> 0.60, then run the following command for iOS:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ios && pod install && cd ..\n")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/07.png",alt:"Step07"}))),Object(r.b)("h2",{id:"connecting-the-api-plugin-app-sync"},"Connecting the API plugin (App Sync)"),Object(r.b)("p",null,"If you connected it in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://fullstackserverless.github.io/docs/amplify-03"}),"the last lesson"),", then skip this step.\nIf not, connect the API plugin"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify add api\n")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore00.png",alt:"AWSAmplify"}))),Object(r.b)("p",null,"After the selected items, the GraphQL schema will open in ",Object(r.b)("inlineCode",{parentName:"p"},"amplify/backend/api/<datasourcename>/schema.graphql")," where we insert this model:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Job\n  @model\n  @auth(\n    rules: [\n      {allow: owner, ownerField: "owner", operations: [create, update, delete]},\n    ])\n{\n  id: ID!\n  position: String!\n  rate: String!\n  description: String!\n  owner: String\n}\n')),Object(r.b)("p",null,"Find out ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://fullstackserverless.github.io/docs/amplify-03#schemagraphql"}),"here")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/08.png",alt:"Step08"}))),Object(r.b)("h2",{id:"model-generation"},"Model generation"),Object(r.b)("p",null,"Modeling your data and creating the models used by the DataStore, is the first step to getting started. GraphQL is used as a common language for JavaScript, iOS and Android. For this process it is also used as a network protocol when synchronizing with the cloud. GraphQL also supports some features, such as Auto merge in AppSync. Model generation can be done using the NPX script or from the command line using the Amplify CLI."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You do not need an AWS account to run it and use DataStore locally, however, if you want to synchronize it with cloud, it is recommended to install and configure Amplify CLI as stated in the last lesson")),Object(r.b)("p",null,"Since we described the schema in the last lesson, now it\u2019s enough for us to run the command"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run amplify-modelgen\n")),Object(r.b)("p",null,"and get the generated model in the src/models folder"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/09.png",alt:"Step09"}))),Object(r.b)("h2",{id:"updating-api"},"Updating API"),Object(r.b)("p",null,"We include DataStore for all API"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify update api\n")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore03.png",alt:"amplify update api"}))),Object(r.b)("p",null,"Submit changes to the cloud \ud83d\udcad"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify push\n")),Object(r.b)("p",null,"\u2714 All resources are updated in the cloud"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/10.png",alt:"Step10"}))),Object(r.b)("h2",{id:"read"},"READ"),Object(r.b)("p",null,"Create the JobsMain src/screens/Jobs/JobsMain.js screen"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore04.png",alt:"READ"}))),Object(r.b)("p",null,"On this screen, we will make a Query request, with the pagination option, where the number is through the useQuery hook and it will return an array to us, which we will send to Flatlist."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useEffect, useState } from 'react'\nimport { FlatList } from 'react-native'\nimport { Auth } from 'aws-amplify'\nimport { AppContainer, CardVacancies, Space, Header } from 'react-native-unicorn-uikit'\nimport { DataStore } from '@aws-amplify/datastore'\nimport { Job } from '../../models'\nimport { goBack, onScreen } from '../../constants'\n\nconst JobsMain = ({ navigation }) => {\n  const [data, updateJobs] = useState([])\n\n  const fetchJobs = async () => {\n    const mess = await DataStore.query(Job)\n    updateJobs(mess)\n  }\n\n  useEffect(() => {\n    fetchJobs()\n    const subscription = DataStore.observe(Job).subscribe(() => fetchJobs())\n    return () => {\n      subscription.unsubscribe()\n    }\n  }, [data])\n\n  const _renderItem = ({ item }) => {\n    const owner = Auth.user.attributes.sub\n    const check = owner === item.owner\n    return (\n      <>\n        <CardVacancies obj={item} onPress={onScreen(check ? 'JOB_ADD' : 'JOB_DETAIL', navigation, item)} />\n        <Space height={20} />\n      </>\n    )\n  }\n\n  const _keyExtractor = (obj) => obj.id.toString()\n\n  return (\n    <AppContainer onPress={goBack(navigation)} flatlist>\n      <FlatList\n        scrollEventThrottle={16}\n        data={data}\n        renderItem={_renderItem}\n        keyExtractor={_keyExtractor}\n        onEndReachedThreshold={0.5}\n        ListHeaderComponent={\n          <Header\n            onPress={goBack(navigation)}\n            onPressRight={onScreen('JOB_ADD', navigation)}\n            iconLeft=\"angle-dobule-left\"\n            iconRight=\"plus-a\"\n          />\n        }\n        stickyHeaderIndices={[0]}\n      />\n    </AppContainer>\n  )\n}\n\nexport { JobsMain }\n")),Object(r.b)("p",null,"To reveal the details of the vacancy, create the screen JobDetail src/screens/Jobs/JobDetail.js"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore05.png",alt:null}))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { Platform } from 'react-native'\nimport { AppContainer, CardVacancies, Space, Header } from 'react-native-unicorn-uikit'\nimport { goBack } from '../../constants'\n\nconst JobDetail = ({ route, navigation }) => {\n  return (\n    <AppContainer>\n      <Header onPress={goBack(navigation)} iconLeft=\"angle-dobule-left\" />\n      <CardVacancies obj={route.params} detail />\n      <Space height={Platform.OS === 'ios' ? 100 : 30} />\n    </AppContainer>\n  )\n}\n\nexport { JobDetail }\n")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/11.png",alt:"Step11"}))),Object(r.b)("h2",{id:"create-update-delete"},"CREATE UPDATE DELETE"),Object(r.b)("p",null,"Create the screen JobAdd src/screens/Jobs/JobAdd.js, where we perform functions namely CREATE UPDATE DELETE"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dataStore/dataStore06.png",alt:null}))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useState, useEffect, useRef } from 'react'\nimport { AppContainer, Input, Space, Button, Header, ButtonLink } from 'react-native-unicorn-uikit'\nimport { DataStore } from '@aws-amplify/datastore'\nimport { Formik } from 'formik'\nimport * as Yup from 'yup'\nimport { Job } from '../../models'\nimport { goBack } from '../../constants'\n\nconst JobAdd = ({ route, navigation }) => {\n  const [loading, setLoading] = useState(false)\n  const [check, setOwner] = useState(false)\n  const [error, setError] = useState('')\n\n  const [input, setJob] = useState({\n    id: '',\n    position: '',\n    rate: '',\n    description: ''\n  })\n\n  const formikRef = useRef()\n\n  useEffect(() => {\n    const obj = route.params\n    if (typeof obj !== 'undefined') {\n      setOwner(true)\n      setJob(obj)\n      const { setFieldValue } = formikRef.current\n      const { position, rate, description } = obj\n      setFieldValue('position', position)\n      setFieldValue('rate', rate)\n      setFieldValue('description', description)\n    }\n  }, [route.params])\n\n  const createJob = async (values) => (await DataStore.save(new Job({ ...values }))) && goBack(navigation)()\n\n  const updateJob = async ({ position, rate, description }) => {\n    try {\n      setLoading(true)\n      const original = await DataStore.query(Job, input.id)\n      const update = await DataStore.save(\n        Job.copyOf(original, (updated) => {\n          updated.position = position\n          updated.rate = rate\n          updated.description = description\n        })\n      )\n      update && goBack(navigation)()\n      setLoading(false)\n    } catch (err) {\n      setError(err)\n    }\n  }\n\n  const deleteJob = async () => {\n    try {\n      setLoading(true)\n      const job = await DataStore.query(Job, input.id)\n      const del = await DataStore.delete(job)\n      del && goBack(navigation)()\n      setLoading(false)\n    } catch (err) {\n      setError(err)\n    }\n  }\n\n  return (\n    <AppContainer onPress={goBack(navigation)} loading={loading} error={error}>\n      <Header onPress={goBack(navigation)} iconLeft=\"angle-dobule-left\" />\n      <Space height={20} />\n      <Formik\n        innerRef={formikRef}\n        initialValues={input}\n        onSubmit={(values) => (check ? updateJob(values) : createJob(values))}\n        validationSchema={Yup.object().shape({\n          position: Yup.string().min(3).required(),\n          rate: Yup.string().min(3).required(),\n          description: Yup.string().min(3).required()\n        })}\n      >\n        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (\n          <>\n            <Input\n              name=\"position\"\n              value={values.position}\n              onChangeText={handleChange('position')}\n              onBlur={() => setFieldTouched('position')}\n              placeholder=\"Position\"\n              touched={touched}\n              errors={errors}\n            />\n            <Input\n              name=\"rate\"\n              keyboardType=\"numeric\"\n              value={`${values.rate}`}\n              onChangeText={handleChange('rate')}\n              onBlur={() => setFieldTouched('rate')}\n              placeholder=\"Rate\"\n              touched={touched}\n              errors={errors}\n            />\n            <Input\n              name=\"description\"\n              value={values.description}\n              onChangeText={handleChange('description')}\n              onBlur={() => setFieldTouched('description')}\n              placeholder=\"Description\"\n              touched={touched}\n              errors={errors}\n              multiline\n              numberOfLines={5}\n            />\n            <Space height={40} />\n            <Button title={check ? 'Update' : 'Create'} disabled={!isValid} onPress={handleSubmit} formik />\n            {check && (\n              <>\n                <Space height={10} />\n                <ButtonLink title=\"or\" textStyle={{ alignSelf: 'center' }} />\n                <Space height={15} />\n                <Button title=\"DELETE\" onPress={deleteJob} cancel />\n              </>\n            )}\n          </>\n        )}\n      </Formik>\n      <Space height={100} />\n    </AppContainer>\n  )\n}\n\nexport { JobAdd }\n")),Object(r.b)("p",null,"and in screens/Jobs/index.js we export screens"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export * from './JobsMain'\nexport * from './JobDetail'\nexport * from './JobAdd'\n")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/12.png",alt:"Step12"}))),Object(r.b)("h2",{id:"navigation"},"Navigation"),Object(r.b)("p",null,"Import Jobs screens and connect them to StackNavigator"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import * as React from \'react\'\nimport { createStackNavigator } from \'@react-navigation/stack\'\nimport { enableScreens } from \'react-native-screens\' // eslint-disable-line\nimport { Hello, SignUp, SignIn, ConfirmSignUp, User, Forgot, ForgotPassSubmit } from \'./screens/Authenticator\'\nimport { JobsMain, JobDetail, JobAdd } from \'./screens/Jobs\'\n\nenableScreens()\n\nconst Stack = createStackNavigator()\n\nconst AppNavigator = () => {\n  return (\n    <Stack.Navigator\n      screenOptions={{\n        headerShown: false\n      }}\n      initialRouteName="HELLO"\n    >\n      <Stack.Screen name="HELLO" component={Hello} />\n      <Stack.Screen name="SIGN_UP" component={SignUp} />\n      <Stack.Screen name="SIGN_IN" component={SignIn} />\n      <Stack.Screen name="FORGOT" component={Forgot} />\n      <Stack.Screen name="FORGOT_PASSWORD_SUBMIT" component={ForgotPassSubmit} />\n      <Stack.Screen name="CONFIRM_SIGN_UP" component={ConfirmSignUp} />\n      <Stack.Screen name="USER" component={User} />\n      <Stack.Screen name="JOBS_MAIN" component={JobsMain} />\n      <Stack.Screen name="JOB_DETAIL" component={JobDetail} />\n      <Stack.Screen name="JOB_ADD" component={JobAdd} />\n    </Stack.Navigator>\n  )\n}\n\nexport default AppNavigator\n')),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/13.png",alt:"Step13"}))),Object(r.b)("h2",{id:"jobs-button"},"Jobs Button"),Object(r.b)("p",null,"Edit User screen in screens/Authenticator/User/index.js"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useState, useEffect } from 'react'\nimport { Auth } from 'aws-amplify'\nimport * as Keychain from 'react-native-keychain'\nimport { AppContainer, Button } from 'react-native-unicorn-uikit'\nimport { goHome, onScreen } from '../../../constants'\n\nconst User = ({ navigation }) => {\n  const [loading, setLoading] = useState(false)\n  const [error, setError] = useState('')\n\n  useEffect(() => {\n    const checkUser = async () => {\n      await Auth.currentAuthenticatedUser()\n    }\n    checkUser()\n  })\n\n  const _onPress = async () => {\n    setLoading(true)\n    try {\n      await Auth.signOut()\n      await Keychain.resetInternetCredentials('auth')\n      goHome(navigation)()\n    } catch (err) {\n      setError(err.message)\n    }\n  }\n\n  const _onPressJob = () => onScreen('JOBS_MAIN', navigation)() // \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d JOBS_MAIN\n\n  return (\n    <AppContainer message={error} loading={loading}>\n      <Button title=\"Sign Out\" onPress={_onPress} />\n      <Button title=\"Jobs\" onPress={_onPressJob} />\n    </AppContainer>\n  )\n}\n\nexport { User }\n")),Object(r.b)("p",null,"Put together all changes. Build and test application"),Object(r.b)("h2",{id:"done-"},"Done \u2705"),Object(r.b)("h2",{id:"references"},"References:"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"'https://docs.amplify.aws/'"}),"AWS Amplify Documentation")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"'https://learning.oreilly.com/library/view/full-stack-serverless/9781492059882/'"}),"Full Stack Development In The Era Of Serverless")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"'https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/'"}),"Graphql Core Features")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"'https://graphql.org/learn'"}),"Graphql Documention")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"'https://engineering.fb.com/core-data/graphql-a-data-query-language/'"}),"Graphql A Data Query Language")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.patreon.com/bePatron?u=34467235"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"/img/logo/patreon.png",alt:"Become a Patron!"})))))}p.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);