// https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudbuildTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable description of the trigger.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#description CloudbuildTrigger#description}
  */
  readonly description?: string;
  /**
  * Whether the trigger is disabled or not. If true, the trigger will never result in a build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#disabled CloudbuildTrigger#disabled}
  */
  readonly disabled?: boolean;
  /**
  * Path, from the source root, to a file whose contents is used for the template. Either a filename or build template must be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#filename CloudbuildTrigger#filename}
  */
  readonly filename?: string;
  /**
  * ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
extended with support for '**'.

If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.

If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#ignored_files CloudbuildTrigger#ignored_files}
  */
  readonly ignoredFiles?: string[];
  /**
  * ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
extended with support for '**'.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is empty, then as far as this filter is concerned, we
should trigger the build.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is not empty, then we make sure that at least one of
those files matches a includedFiles glob. If not, then we do not trigger
a build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#included_files CloudbuildTrigger#included_files}
  */
  readonly includedFiles?: string[];
  /**
  * Name of the trigger. Must be unique within the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#name CloudbuildTrigger#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#project CloudbuildTrigger#project}
  */
  readonly project?: string;
  /**
  * Substitutions data for Build resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#substitutions CloudbuildTrigger#substitutions}
  */
  readonly substitutions?: { [key: string]: string };
  /**
  * Tags for annotation of a BuildTrigger
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#tags CloudbuildTrigger#tags}
  */
  readonly tags?: string[];
  /**
  * build block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#build CloudbuildTrigger#build}
  */
  readonly buildAttribute?: CloudbuildTriggerBuild[];
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#github CloudbuildTrigger#github}
  */
  readonly github?: CloudbuildTriggerGithub[];
  /**
  * pubsub_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#pubsub_config CloudbuildTrigger#pubsub_config}
  */
  readonly pubsubConfig?: CloudbuildTriggerPubsubConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#timeouts CloudbuildTrigger#timeouts}
  */
  readonly timeouts?: CloudbuildTriggerTimeouts;
  /**
  * trigger_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#trigger_template CloudbuildTrigger#trigger_template}
  */
  readonly triggerTemplate?: CloudbuildTriggerTriggerTemplate[];
  /**
  * webhook_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#webhook_config CloudbuildTrigger#webhook_config}
  */
  readonly webhookConfig?: CloudbuildTriggerWebhookConfig[];
}
export interface CloudbuildTriggerBuildArtifactsObjects {
  /**
  * Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".

Files in the workspace matching any path pattern will be uploaded to Cloud Storage with
this location as a prefix.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#location CloudbuildTrigger#location}
  */
  readonly location?: string;
  /**
  * Path globs used to match files in the build's workspace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#paths CloudbuildTrigger#paths}
  */
  readonly paths?: string[];
}

function cloudbuildTriggerBuildArtifactsObjectsToTerraform(struct?: CloudbuildTriggerBuildArtifactsObjects): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.paths),
  }
}

export interface CloudbuildTriggerBuildArtifacts {
  /**
  * A list of images to be pushed upon the successful completion of all build steps.

The images will be pushed using the builder service account's credentials.

The digests of the pushed images will be stored in the Build resource's results field.

If any of the images fail to be pushed, the build is marked FAILURE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#images CloudbuildTrigger#images}
  */
  readonly images?: string[];
  /**
  * objects block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#objects CloudbuildTrigger#objects}
  */
  readonly objects?: CloudbuildTriggerBuildArtifactsObjects[];
}

function cloudbuildTriggerBuildArtifactsToTerraform(struct?: CloudbuildTriggerBuildArtifacts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    images: cdktf.listMapper(cdktf.stringToTerraform)(struct!.images),
    objects: cdktf.listMapper(cloudbuildTriggerBuildArtifactsObjectsToTerraform)(struct!.objects),
  }
}

export interface CloudbuildTriggerBuildOptionsVolumes {
  /**
  * Name of the volume to mount.

Volume names must be unique per build step and must be valid names for Docker volumes.
Each named volume must be used by at least two build steps.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#name CloudbuildTrigger#name}
  */
  readonly name?: string;
  /**
  * Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on the same
build step or with certain reserved volume paths.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#path CloudbuildTrigger#path}
  */
  readonly path?: string;
}

function cloudbuildTriggerBuildOptionsVolumesToTerraform(struct?: CloudbuildTriggerBuildOptionsVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface CloudbuildTriggerBuildOptions {
  /**
  * Requested disk size for the VM that runs the build. Note that this is NOT "disk free";
some of the space will be used by the operating system and build utilities.
Also note that this is the minimum disk size that will be allocated for the build --
the build may run with a larger disk than requested. At present, the maximum disk size
is 1000GB; builds that request more than the maximum are rejected with an error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#disk_size_gb CloudbuildTrigger#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Option to specify whether or not to apply bash style string operations to the substitutions.

NOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#dynamic_substitutions CloudbuildTrigger#dynamic_substitutions}
  */
  readonly dynamicSubstitutions?: boolean;
  /**
  * A list of global environment variable definitions that will exist for all build steps
in this build. If a variable is defined in both globally and in a build step,
the variable will use the build step value.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#env CloudbuildTrigger#env}
  */
  readonly env?: string[];
  /**
  * Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#log_streaming_option CloudbuildTrigger#log_streaming_option}
  */
  readonly logStreamingOption?: string;
  /**
  * Option to specify the logging mode, which determines if and where build logs are stored. Possible values: ["LOGGING_UNSPECIFIED", "LEGACY", "GCS_ONLY", "STACKDRIVER_ONLY", "NONE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#logging CloudbuildTrigger#logging}
  */
  readonly logging?: string;
  /**
  * Compute Engine machine type on which to run the build. Possible values: ["UNSPECIFIED", "N1_HIGHCPU_8", "N1_HIGHCPU_32", "E2_HIGHCPU_8", "E2_HIGHCPU_32"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#machine_type CloudbuildTrigger#machine_type}
  */
  readonly machineType?: string;
  /**
  * Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#requested_verify_option CloudbuildTrigger#requested_verify_option}
  */
  readonly requestedVerifyOption?: string;
  /**
  * A list of global environment variables, which are encrypted using a Cloud Key Management
Service crypto key. These values must be specified in the build's Secret. These variables
will be available to all build steps in this build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#secret_env CloudbuildTrigger#secret_env}
  */
  readonly secretEnv?: string[];
  /**
  * Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#source_provenance_hash CloudbuildTrigger#source_provenance_hash}
  */
  readonly sourceProvenanceHash?: string[];
  /**
  * Option to specify behavior when there is an error in the substitution checks.

NOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden
in the build configuration file. Possible values: ["MUST_MATCH", "ALLOW_LOOSE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#substitution_option CloudbuildTrigger#substitution_option}
  */
  readonly substitutionOption?: string;
  /**
  * Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}

This field is experimental.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#worker_pool CloudbuildTrigger#worker_pool}
  */
  readonly workerPool?: string;
  /**
  * volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#volumes CloudbuildTrigger#volumes}
  */
  readonly volumes?: CloudbuildTriggerBuildOptionsVolumes[];
}

function cloudbuildTriggerBuildOptionsToTerraform(struct?: CloudbuildTriggerBuildOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    dynamic_substitutions: cdktf.booleanToTerraform(struct!.dynamicSubstitutions),
    env: cdktf.listMapper(cdktf.stringToTerraform)(struct!.env),
    log_streaming_option: cdktf.stringToTerraform(struct!.logStreamingOption),
    logging: cdktf.stringToTerraform(struct!.logging),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    requested_verify_option: cdktf.stringToTerraform(struct!.requestedVerifyOption),
    secret_env: cdktf.listMapper(cdktf.stringToTerraform)(struct!.secretEnv),
    source_provenance_hash: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceProvenanceHash),
    substitution_option: cdktf.stringToTerraform(struct!.substitutionOption),
    worker_pool: cdktf.stringToTerraform(struct!.workerPool),
    volumes: cdktf.listMapper(cloudbuildTriggerBuildOptionsVolumesToTerraform)(struct!.volumes),
  }
}

export interface CloudbuildTriggerBuildSecret {
  /**
  * Cloud KMS key name to use to decrypt these envs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#kms_key_name CloudbuildTrigger#kms_key_name}
  */
  readonly kmsKeyName: string;
  /**
  * Map of environment variable name to its encrypted value.
Secret environment variables must be unique across all of a build's secrets, 
and must be used by at least one build step. Values can be at most 64 KB in size. 
There can be at most 100 secret values across all of a build's secrets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#secret_env CloudbuildTrigger#secret_env}
  */
  readonly secretEnv?: { [key: string]: string };
}

function cloudbuildTriggerBuildSecretToTerraform(struct?: CloudbuildTriggerBuildSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    secret_env: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.secretEnv),
  }
}

export interface CloudbuildTriggerBuildSourceRepoSource {
  /**
  * Regex matching branches to build. Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and 
described at https://github.com/google/re2/wiki/Syntax
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#branch_name CloudbuildTrigger#branch_name}
  */
  readonly branchName?: string;
  /**
  * Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#commit_sha CloudbuildTrigger#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * Directory, relative to the source root, in which to run the build.
This must be a relative path. If a step's dir is specified and is an absolute path, 
this value is ignored for that step's execution.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#dir CloudbuildTrigger#dir}
  */
  readonly dir?: string;
  /**
  * Only trigger a build if the revision regex does NOT match the revision regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#invert_regex CloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean;
  /**
  * ID of the project that owns the Cloud Source Repository. 
If omitted, the project ID requesting the build is assumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#project_id CloudbuildTrigger#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the Cloud Source Repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#repo_name CloudbuildTrigger#repo_name}
  */
  readonly repoName: string;
  /**
  * Substitutions to use in a triggered build. Should only be used with triggers.run
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#substitutions CloudbuildTrigger#substitutions}
  */
  readonly substitutions?: { [key: string]: string };
  /**
  * Regex matching tags to build. Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and 
described at https://github.com/google/re2/wiki/Syntax
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#tag_name CloudbuildTrigger#tag_name}
  */
  readonly tagName?: string;
}

function cloudbuildTriggerBuildSourceRepoSourceToTerraform(struct?: CloudbuildTriggerBuildSourceRepoSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    commit_sha: cdktf.stringToTerraform(struct!.commitSha),
    dir: cdktf.stringToTerraform(struct!.dir),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    repo_name: cdktf.stringToTerraform(struct!.repoName),
    substitutions: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.substitutions),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}

export interface CloudbuildTriggerBuildSourceStorageSource {
  /**
  * Google Cloud Storage bucket containing the source.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#bucket CloudbuildTrigger#bucket}
  */
  readonly bucket: string;
  /**
  * Google Cloud Storage generation for the object. 
If the generation is omitted, the latest generation will be used
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#generation CloudbuildTrigger#generation}
  */
  readonly generation?: string;
  /**
  * Google Cloud Storage object containing the source.
This object must be a gzipped archive file (.tar.gz) containing source to build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#object CloudbuildTrigger#object}
  */
  readonly object: string;
}

function cloudbuildTriggerBuildSourceStorageSourceToTerraform(struct?: CloudbuildTriggerBuildSourceStorageSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.stringToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface CloudbuildTriggerBuildSource {
  /**
  * repo_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#repo_source CloudbuildTrigger#repo_source}
  */
  readonly repoSource?: CloudbuildTriggerBuildSourceRepoSource[];
  /**
  * storage_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#storage_source CloudbuildTrigger#storage_source}
  */
  readonly storageSource?: CloudbuildTriggerBuildSourceStorageSource[];
}

function cloudbuildTriggerBuildSourceToTerraform(struct?: CloudbuildTriggerBuildSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    repo_source: cdktf.listMapper(cloudbuildTriggerBuildSourceRepoSourceToTerraform)(struct!.repoSource),
    storage_source: cdktf.listMapper(cloudbuildTriggerBuildSourceStorageSourceToTerraform)(struct!.storageSource),
  }
}

export interface CloudbuildTriggerBuildStepVolumes {
  /**
  * Name of the volume to mount.

Volume names must be unique per build step and must be valid names for
Docker volumes. Each named volume must be used by at least two build steps.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#name CloudbuildTrigger#name}
  */
  readonly name: string;
  /**
  * Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on
the same build step or with certain reserved volume paths.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#path CloudbuildTrigger#path}
  */
  readonly path: string;
}

function cloudbuildTriggerBuildStepVolumesToTerraform(struct?: CloudbuildTriggerBuildStepVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface CloudbuildTriggerBuildStep {
  /**
  * A list of arguments that will be presented to the step when it is started.

If the image used to run the step's container has an entrypoint, the args
are used as arguments to that entrypoint. If the image does not define an
entrypoint, the first element in args is used as the entrypoint, and the
remainder will be used as arguments.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#args CloudbuildTrigger#args}
  */
  readonly args?: string[];
  /**
  * Working directory to use when running this step's container.

If this value is a relative path, it is relative to the build's working
directory. If this value is absolute, it may be outside the build's working
directory, in which case the contents of the path may not be persisted
across build step executions, unless a 'volume' for that path is specified.

If the build specifies a 'RepoSource' with 'dir' and a step with a
'dir',
which specifies an absolute path, the 'RepoSource' 'dir' is ignored
for the step's execution.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#dir CloudbuildTrigger#dir}
  */
  readonly dir?: string;
  /**
  * Entrypoint to be used instead of the build step image's
default entrypoint.
If unset, the image's default entrypoint is used
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#entrypoint CloudbuildTrigger#entrypoint}
  */
  readonly entrypoint?: string;
  /**
  * A list of environment variable definitions to be used when
running a step.

The elements are of the form "KEY=VALUE" for the environment variable
"KEY" being given the value "VALUE".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#env CloudbuildTrigger#env}
  */
  readonly env?: string[];
  /**
  * Unique identifier for this build step, used in 'wait_for' to
reference this build step as a dependency.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#id CloudbuildTrigger#id}
  */
  readonly id?: string;
  /**
  * The name of the container image that will run this particular build step.

If the image is available in the host's Docker daemon's cache, it will be
run directly. If not, the host will attempt to pull the image first, using
the builder service account's credentials if necessary.

The Docker daemon's cache will already have the latest versions of all of
the officially supported build steps (see https://github.com/GoogleCloudPlatform/cloud-builders 
for images and examples).
The Docker daemon will also have cached many of the layers for some popular
images, like "ubuntu", "debian", but they will be refreshed at the time
you attempt to use them.

If you built an image in a previous build step, it will be stored in the
host's Docker daemon's cache and is available to use as the name for a
later build step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#name CloudbuildTrigger#name}
  */
  readonly name: string;
  /**
  * A list of environment variables which are encrypted using
a Cloud Key
Management Service crypto key. These values must be specified in
the build's 'Secret'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#secret_env CloudbuildTrigger#secret_env}
  */
  readonly secretEnv?: string[];
  /**
  * Time limit for executing this build step. If not defined,
the step has no
time limit and will be allowed to continue to run until either it
completes or the build itself times out.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#timeout CloudbuildTrigger#timeout}
  */
  readonly timeout?: string;
  /**
  * Output only. Stores timing information for executing this
build step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#timing CloudbuildTrigger#timing}
  */
  readonly timing?: string;
  /**
  * The ID(s) of the step(s) that this build step depends on.

This build step will not start until all the build steps in 'wait_for'
have completed successfully. If 'wait_for' is empty, this build step
will start when all previous build steps in the 'Build.Steps' list
have completed successfully.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#wait_for CloudbuildTrigger#wait_for}
  */
  readonly waitFor?: string[];
  /**
  * volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#volumes CloudbuildTrigger#volumes}
  */
  readonly volumes?: CloudbuildTriggerBuildStepVolumes[];
}

function cloudbuildTriggerBuildStepToTerraform(struct?: CloudbuildTriggerBuildStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    dir: cdktf.stringToTerraform(struct!.dir),
    entrypoint: cdktf.stringToTerraform(struct!.entrypoint),
    env: cdktf.listMapper(cdktf.stringToTerraform)(struct!.env),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    secret_env: cdktf.listMapper(cdktf.stringToTerraform)(struct!.secretEnv),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    timing: cdktf.stringToTerraform(struct!.timing),
    wait_for: cdktf.listMapper(cdktf.stringToTerraform)(struct!.waitFor),
    volumes: cdktf.listMapper(cloudbuildTriggerBuildStepVolumesToTerraform)(struct!.volumes),
  }
}

export interface CloudbuildTriggerBuild {
  /**
  * A list of images to be pushed upon the successful completion of all build steps.
The images are pushed using the builder service account's credentials.
The digests of the pushed images will be stored in the Build resource's results field.
If any of the images fail to be pushed, the build status is marked FAILURE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#images CloudbuildTrigger#images}
  */
  readonly images?: string[];
  /**
  * Google Cloud Storage bucket where logs should be written. 
Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#logs_bucket CloudbuildTrigger#logs_bucket}
  */
  readonly logsBucket?: string;
  /**
  * TTL in queue for this build. If provided and the build is enqueued longer than this value, 
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#queue_ttl CloudbuildTrigger#queue_ttl}
  */
  readonly queueTtl?: string;
  /**
  * Substitutions data for Build resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#substitutions CloudbuildTrigger#substitutions}
  */
  readonly substitutions?: { [key: string]: string };
  /**
  * Tags for annotation of a Build. These are not docker tags.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#tags CloudbuildTrigger#tags}
  */
  readonly tags?: string[];
  /**
  * Amount of time that this build should be allowed to run, to second granularity.
If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#timeout CloudbuildTrigger#timeout}
  */
  readonly timeout?: string;
  /**
  * artifacts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#artifacts CloudbuildTrigger#artifacts}
  */
  readonly artifacts?: CloudbuildTriggerBuildArtifacts[];
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#options CloudbuildTrigger#options}
  */
  readonly options?: CloudbuildTriggerBuildOptions[];
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#secret CloudbuildTrigger#secret}
  */
  readonly secret?: CloudbuildTriggerBuildSecret[];
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#source CloudbuildTrigger#source}
  */
  readonly source?: CloudbuildTriggerBuildSource[];
  /**
  * step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#step CloudbuildTrigger#step}
  */
  readonly step: CloudbuildTriggerBuildStep[];
}

function cloudbuildTriggerBuildToTerraform(struct?: CloudbuildTriggerBuild): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    images: cdktf.listMapper(cdktf.stringToTerraform)(struct!.images),
    logs_bucket: cdktf.stringToTerraform(struct!.logsBucket),
    queue_ttl: cdktf.stringToTerraform(struct!.queueTtl),
    substitutions: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.substitutions),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    artifacts: cdktf.listMapper(cloudbuildTriggerBuildArtifactsToTerraform)(struct!.artifacts),
    options: cdktf.listMapper(cloudbuildTriggerBuildOptionsToTerraform)(struct!.options),
    secret: cdktf.listMapper(cloudbuildTriggerBuildSecretToTerraform)(struct!.secret),
    source: cdktf.listMapper(cloudbuildTriggerBuildSourceToTerraform)(struct!.source),
    step: cdktf.listMapper(cloudbuildTriggerBuildStepToTerraform)(struct!.step),
  }
}

export interface CloudbuildTriggerGithubPullRequest {
  /**
  * Regex of branches to match.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#branch CloudbuildTrigger#branch}
  */
  readonly branch: string;
  /**
  * Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#comment_control CloudbuildTrigger#comment_control}
  */
  readonly commentControl?: string;
  /**
  * If true, branches that do NOT match the git_ref will trigger a build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#invert_regex CloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean;
}

function cloudbuildTriggerGithubPullRequestToTerraform(struct?: CloudbuildTriggerGithubPullRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    comment_control: cdktf.stringToTerraform(struct!.commentControl),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
  }
}

export interface CloudbuildTriggerGithubPush {
  /**
  * Regex of branches to match.  Specify only one of branch or tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#branch CloudbuildTrigger#branch}
  */
  readonly branch?: string;
  /**
  * When true, only trigger a build if the revision regex does NOT match the git_ref regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#invert_regex CloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean;
  /**
  * Regex of tags to match.  Specify only one of branch or tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#tag CloudbuildTrigger#tag}
  */
  readonly tag?: string;
}

function cloudbuildTriggerGithubPushToTerraform(struct?: CloudbuildTriggerGithubPush): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export interface CloudbuildTriggerGithub {
  /**
  * Name of the repository. For example: The name for
https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#name CloudbuildTrigger#name}
  */
  readonly name?: string;
  /**
  * Owner of the repository. For example: The owner for
https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#owner CloudbuildTrigger#owner}
  */
  readonly owner?: string;
  /**
  * pull_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#pull_request CloudbuildTrigger#pull_request}
  */
  readonly pullRequest?: CloudbuildTriggerGithubPullRequest[];
  /**
  * push block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#push CloudbuildTrigger#push}
  */
  readonly push?: CloudbuildTriggerGithubPush[];
}

function cloudbuildTriggerGithubToTerraform(struct?: CloudbuildTriggerGithub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    pull_request: cdktf.listMapper(cloudbuildTriggerGithubPullRequestToTerraform)(struct!.pullRequest),
    push: cdktf.listMapper(cloudbuildTriggerGithubPushToTerraform)(struct!.push),
  }
}

export interface CloudbuildTriggerPubsubConfig {
  /**
  * Service account that will make the push request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#service_account_email CloudbuildTrigger#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The name of the topic from which this subscription is receiving messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#topic CloudbuildTrigger#topic}
  */
  readonly topic: string;
}

function cloudbuildTriggerPubsubConfigToTerraform(struct?: CloudbuildTriggerPubsubConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface CloudbuildTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#create CloudbuildTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#delete CloudbuildTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#update CloudbuildTrigger#update}
  */
  readonly update?: string;
}

function cloudbuildTriggerTimeoutsToTerraform(struct?: CloudbuildTriggerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface CloudbuildTriggerTriggerTemplate {
  /**
  * Name of the branch to build. Exactly one a of branch name, tag, or commit SHA must be provided.
This field is a regular expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#branch_name CloudbuildTrigger#branch_name}
  */
  readonly branchName?: string;
  /**
  * Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#commit_sha CloudbuildTrigger#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and
is an absolute path, this value is ignored for that step's
execution.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#dir CloudbuildTrigger#dir}
  */
  readonly dir?: string;
  /**
  * Only trigger a build if the revision regex does NOT match the revision regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#invert_regex CloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean;
  /**
  * ID of the project that owns the Cloud Source Repository. If
omitted, the project ID requesting the build is assumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#project_id CloudbuildTrigger#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the Cloud Source Repository. If omitted, the name "default" is assumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#repo_name CloudbuildTrigger#repo_name}
  */
  readonly repoName?: string;
  /**
  * Name of the tag to build. Exactly one of a branch name, tag, or commit SHA must be provided.
This field is a regular expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#tag_name CloudbuildTrigger#tag_name}
  */
  readonly tagName?: string;
}

function cloudbuildTriggerTriggerTemplateToTerraform(struct?: CloudbuildTriggerTriggerTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    commit_sha: cdktf.stringToTerraform(struct!.commitSha),
    dir: cdktf.stringToTerraform(struct!.dir),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    repo_name: cdktf.stringToTerraform(struct!.repoName),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}

export interface CloudbuildTriggerWebhookConfig {
  /**
  * Resource name for the secret required as a URL parameter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html#secret CloudbuildTrigger#secret}
  */
  readonly secret: string;
}

function cloudbuildTriggerWebhookConfigToTerraform(struct?: CloudbuildTriggerWebhookConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html google_cloudbuild_trigger}
*/
export class CloudbuildTrigger extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html google_cloudbuild_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudbuildTriggerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudbuildTriggerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_cloudbuild_trigger',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._disabled = config.disabled;
    this._filename = config.filename;
    this._ignoredFiles = config.ignoredFiles;
    this._includedFiles = config.includedFiles;
    this._name = config.name;
    this._project = config.project;
    this._substitutions = config.substitutions;
    this._tags = config.tags;
    this._build = config.buildAttribute;
    this._github = config.github;
    this._pubsubConfig = config.pubsubConfig;
    this._timeouts = config.timeouts;
    this._triggerTemplate = config.triggerTemplate;
    this._webhookConfig = config.webhookConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean;
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean ) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string;
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string ) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignored_files - computed: false, optional: true, required: false
  private _ignoredFiles?: string[];
  public get ignoredFiles() {
    return this.getListAttribute('ignored_files');
  }
  public set ignoredFiles(value: string[] ) {
    this._ignoredFiles = value;
  }
  public resetIgnoredFiles() {
    this._ignoredFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredFilesInput() {
    return this._ignoredFiles
  }

  // included_files - computed: false, optional: true, required: false
  private _includedFiles?: string[];
  public get includedFiles() {
    return this.getListAttribute('included_files');
  }
  public set includedFiles(value: string[] ) {
    this._includedFiles = value;
  }
  public resetIncludedFiles() {
    this._includedFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedFilesInput() {
    return this._includedFiles
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // substitutions - computed: false, optional: true, required: false
  private _substitutions?: { [key: string]: string };
  public get substitutions() {
    return this.interpolationForAttribute('substitutions') as any;
  }
  public set substitutions(value: { [key: string]: string } ) {
    this._substitutions = value;
  }
  public resetSubstitutions() {
    this._substitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionsInput() {
    return this._substitutions
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // trigger_id - computed: true, optional: false, required: false
  public get triggerId() {
    return this.getStringAttribute('trigger_id');
  }

  // build - computed: false, optional: true, required: false
  private _build?: CloudbuildTriggerBuild[];
  public get buildAttribute() {
    return this.interpolationForAttribute('build') as any;
  }
  public set buildAttribute(value: CloudbuildTriggerBuild[] ) {
    this._build = value;
  }
  public resetBuildAttribute() {
    this._build = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build
  }

  // github - computed: false, optional: true, required: false
  private _github?: CloudbuildTriggerGithub[];
  public get github() {
    return this.interpolationForAttribute('github') as any;
  }
  public set github(value: CloudbuildTriggerGithub[] ) {
    this._github = value;
  }
  public resetGithub() {
    this._github = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github
  }

  // pubsub_config - computed: false, optional: true, required: false
  private _pubsubConfig?: CloudbuildTriggerPubsubConfig[];
  public get pubsubConfig() {
    return this.interpolationForAttribute('pubsub_config') as any;
  }
  public set pubsubConfig(value: CloudbuildTriggerPubsubConfig[] ) {
    this._pubsubConfig = value;
  }
  public resetPubsubConfig() {
    this._pubsubConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubConfigInput() {
    return this._pubsubConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudbuildTriggerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudbuildTriggerTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // trigger_template - computed: false, optional: true, required: false
  private _triggerTemplate?: CloudbuildTriggerTriggerTemplate[];
  public get triggerTemplate() {
    return this.interpolationForAttribute('trigger_template') as any;
  }
  public set triggerTemplate(value: CloudbuildTriggerTriggerTemplate[] ) {
    this._triggerTemplate = value;
  }
  public resetTriggerTemplate() {
    this._triggerTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTemplateInput() {
    return this._triggerTemplate
  }

  // webhook_config - computed: false, optional: true, required: false
  private _webhookConfig?: CloudbuildTriggerWebhookConfig[];
  public get webhookConfig() {
    return this.interpolationForAttribute('webhook_config') as any;
  }
  public set webhookConfig(value: CloudbuildTriggerWebhookConfig[] ) {
    this._webhookConfig = value;
  }
  public resetWebhookConfig() {
    this._webhookConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookConfigInput() {
    return this._webhookConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      filename: cdktf.stringToTerraform(this._filename),
      ignored_files: cdktf.listMapper(cdktf.stringToTerraform)(this._ignoredFiles),
      included_files: cdktf.listMapper(cdktf.stringToTerraform)(this._includedFiles),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      substitutions: cdktf.hashMapper(cdktf.anyToTerraform)(this._substitutions),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      build: cdktf.listMapper(cloudbuildTriggerBuildToTerraform)(this._build),
      github: cdktf.listMapper(cloudbuildTriggerGithubToTerraform)(this._github),
      pubsub_config: cdktf.listMapper(cloudbuildTriggerPubsubConfigToTerraform)(this._pubsubConfig),
      timeouts: cloudbuildTriggerTimeoutsToTerraform(this._timeouts),
      trigger_template: cdktf.listMapper(cloudbuildTriggerTriggerTemplateToTerraform)(this._triggerTemplate),
      webhook_config: cdktf.listMapper(cloudbuildTriggerWebhookConfigToTerraform)(this._webhookConfig),
    };
  }
}
