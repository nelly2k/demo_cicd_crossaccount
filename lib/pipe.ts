import { Construct } from '@aws-cdk/core';
import * as pipelines from '@aws-cdk/pipelines';
import { Artifact } from '@aws-cdk/aws-codepipeline';
import { CodeCommitSourceAction } from '@aws-cdk/aws-codepipeline-actions';
import { Repository } from '@aws-cdk/aws-codecommit';
export interface PipeProps {
    repo: Repository
}

export class Pipe extends Construct {
    constructor(scope: Construct, id: string, props: PipeProps) {
        super(scope, id);
        const sourceArtifact = new Artifact();
        const cloudAssemblyArtifact = new Artifact();

        const sourceAction = new CodeCommitSourceAction({
            actionName: 'source',
            repository: props.repo,
            output: sourceArtifact
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

    }
}