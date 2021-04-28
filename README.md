# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

test
env CDK_NEW_BOOTSTRAP=1 npx cdk bootstrap --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess  --trust 562845778379 aws://991589444784/ap-southeast-2
root
env CDK_NEW_BOOTSTRAP=1 npx cdk bootstrap --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://562845778379/ap-southeast-2

  7/17 | 10:52:29 AM | UPDATE_FAILED        | AWS::CodePipeline::Pipeline | deployment.piepline/Pipeline/Pipeline (deploymentpieplinePipeline7E159279) arn:aws:iam::562845778379:role/DemoCicdCrossAccountStack-deploymentpieplinePipeli-P0VE5EBT67XV is not authorized to perform AssumeRole on role arn:aws:iam::991589444784:role/cdk-hnb659fds-deploy-role-991589444784-ap-southeast-2 (Service: AWSCodePipeline; Status Code: 400; Error Code: InvalidStructureException; Request ID: 1a893d82-c633-4ade-9773-4ae862ee4c04; Proxy: null)


  