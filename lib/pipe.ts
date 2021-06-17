import { Construct } from '@aws-cdk/core';
import * as cdk from '@aws-cdk/core';
import * as pipelines from '@aws-cdk/pipelines';
import { Artifact } from '@aws-cdk/aws-codepipeline';
import { GitHubSourceAction, GitHubTrigger } from '@aws-cdk/aws-codepipeline-actions';
import { AppStage } from './app-stage';
import { EnvProps } from './EnvProps';

export class Pipe extends Construct {
    constructor(scope: Construct, id: string, props: EnvProps) {
        super(scope, id);
        const sourceArtifact = new Artifact();
        const cloudAssemblyArtifact = new Artifact();

        const sourceAction = new GitHubSourceAction({
            actionName: 'source_github',
            owner: "nelly2k",
            repo: 'demo_cicd_crossaccount',
            oauthToken: cdk.SecretValue.secretsManager('github-token'),
            output: sourceArtifact,
            branch: 'master',
            trigger: GitHubTrigger.WEBHOOK
        });

        const synthAction = pipelines.SimpleSynthAction.standardNpmSynth({
            sourceArtifact,
            cloudAssemblyArtifact,
            installCommand: 'npm install',
            buildCommand: 'npm run build',
            actionName: 'Cdk_Build'
        });

        const pipeline = new pipelines.CdkPipeline(this, 'Pipeline', {
            pipelineName: 'CrossAccountPipeline',
            cloudAssemblyArtifact,
            sourceAction,
            synthAction,
        });

        pipeline.addApplicationStage(new AppStage(this, 'teststage', {
            stageName: 'test',
            env: props.testEnv
        }));
    }
}