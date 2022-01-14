// https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudbuildTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable description of the trigger.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#description CloudbuildTrigger#description}
  */
  readonly description?: string;
  /**
  * Whether the trigger is disabled or not. If true, the trigger will never result in a build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#disabled CloudbuildTrigger#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Path, from the source root, to a file whose contents is used for the template. Either a filename or build template must be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#filename CloudbuildTrigger#filename}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#ignored_files CloudbuildTrigger#ignored_files}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#included_files CloudbuildTrigger#included_files}
  */
  readonly includedFiles?: string[];
  /**
  * Name of the trigger. Must be unique within the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project CloudbuildTrigger#project}
  */
  readonly project?: string;
  /**
  * The service account used for all user-controlled operations including
triggers.patch, triggers.run, builds.create, and builds.cancel.

If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.

Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#service_account CloudbuildTrigger#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Substitutions data for Build resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}
  */
  readonly substitutions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Tags for annotation of a BuildTrigger
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tags CloudbuildTrigger#tags}
  */
  readonly tags?: string[];
  /**
  * build block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#build CloudbuildTrigger#build}
  */
  readonly buildAttribute?: CloudbuildTriggerBuild;
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#github CloudbuildTrigger#github}
  */
  readonly github?: CloudbuildTriggerGithub;
  /**
  * pubsub_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#pubsub_config CloudbuildTrigger#pubsub_config}
  */
  readonly pubsubConfig?: CloudbuildTriggerPubsubConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timeouts CloudbuildTrigger#timeouts}
  */
  readonly timeouts?: CloudbuildTriggerTimeouts;
  /**
  * trigger_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#trigger_template CloudbuildTrigger#trigger_template}
  */
  readonly triggerTemplate?: CloudbuildTriggerTriggerTemplate;
  /**
  * webhook_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#webhook_config CloudbuildTrigger#webhook_config}
  */
  readonly webhookConfig?: CloudbuildTriggerWebhookConfig;
}
export interface CloudbuildTriggerBuildArtifactsObjects {
  /**
  * Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".

Files in the workspace matching any path pattern will be uploaded to Cloud Storage with
this location as a prefix.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#location CloudbuildTrigger#location}
  */
  readonly location?: string;
  /**
  * Path globs used to match files in the build's workspace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#paths CloudbuildTrigger#paths}
  */
  readonly paths?: string[];
}

export function cloudbuildTriggerBuildArtifactsObjectsToTerraform(struct?: CloudbuildTriggerBuildArtifactsObjectsOutputReference | CloudbuildTriggerBuildArtifactsObjects): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.paths),
  }
}

export class CloudbuildTriggerBuildArtifactsObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerBuildArtifactsObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerBuildArtifactsObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._paths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._paths = value.paths;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}
export interface CloudbuildTriggerBuildArtifacts {
  /**
  * A list of images to be pushed upon the successful completion of all build steps.

The images will be pushed using the builder service account's credentials.

The digests of the pushed images will be stored in the Build resource's results field.

If any of the images fail to be pushed, the build is marked FAILURE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#images CloudbuildTrigger#images}
  */
  readonly images?: string[];
  /**
  * objects block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#objects CloudbuildTrigger#objects}
  */
  readonly objects?: CloudbuildTriggerBuildArtifactsObjects;
}

export function cloudbuildTriggerBuildArtifactsToTerraform(struct?: CloudbuildTriggerBuildArtifactsOutputReference | CloudbuildTriggerBuildArtifacts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    images: cdktf.listMapper(cdktf.stringToTerraform)(struct!.images),
    objects: cloudbuildTriggerBuildArtifactsObjectsToTerraform(struct!.objects),
  }
}

export class CloudbuildTriggerBuildArtifactsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerBuildArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerBuildArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._images = undefined;
      this._objects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._images = value.images;
      this._objects.internalValue = value.objects;
    }
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // objects - computed: false, optional: true, required: false
  private _objects = new CloudbuildTriggerBuildArtifactsObjectsOutputReference(this as any, "objects", true);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: CloudbuildTriggerBuildArtifactsObjects) {
    this._objects.internalValue = value;
  }
  public resetObjects() {
    this._objects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }
}
export interface CloudbuildTriggerBuildOptionsVolumes {
  /**
  * Name of the volume to mount.

Volume names must be unique per build step and must be valid names for Docker volumes.
Each named volume must be used by at least two build steps.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}
  */
  readonly name?: string;
  /**
  * Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on the same
build step or with certain reserved volume paths.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#path CloudbuildTrigger#path}
  */
  readonly path?: string;
}

export function cloudbuildTriggerBuildOptionsVolumesToTerraform(struct?: CloudbuildTriggerBuildOptionsVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#disk_size_gb CloudbuildTrigger#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Option to specify whether or not to apply bash style string operations to the substitutions.

NOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dynamic_substitutions CloudbuildTrigger#dynamic_substitutions}
  */
  readonly dynamicSubstitutions?: boolean | cdktf.IResolvable;
  /**
  * A list of global environment variable definitions that will exist for all build steps
in this build. If a variable is defined in both globally and in a build step,
the variable will use the build step value.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#env CloudbuildTrigger#env}
  */
  readonly env?: string[];
  /**
  * Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#log_streaming_option CloudbuildTrigger#log_streaming_option}
  */
  readonly logStreamingOption?: string;
  /**
  * Option to specify the logging mode, which determines if and where build logs are stored. Possible values: ["LOGGING_UNSPECIFIED", "LEGACY", "GCS_ONLY", "STACKDRIVER_ONLY", "NONE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#logging CloudbuildTrigger#logging}
  */
  readonly logging?: string;
  /**
  * Compute Engine machine type on which to run the build. Possible values: ["UNSPECIFIED", "N1_HIGHCPU_8", "N1_HIGHCPU_32", "E2_HIGHCPU_8", "E2_HIGHCPU_32"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#machine_type CloudbuildTrigger#machine_type}
  */
  readonly machineType?: string;
  /**
  * Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#requested_verify_option CloudbuildTrigger#requested_verify_option}
  */
  readonly requestedVerifyOption?: string;
  /**
  * A list of global environment variables, which are encrypted using a Cloud Key Management
Service crypto key. These values must be specified in the build's Secret. These variables
will be available to all build steps in this build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}
  */
  readonly secretEnv?: string[];
  /**
  * Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#source_provenance_hash CloudbuildTrigger#source_provenance_hash}
  */
  readonly sourceProvenanceHash?: string[];
  /**
  * Option to specify behavior when there is an error in the substitution checks.

NOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden
in the build configuration file. Possible values: ["MUST_MATCH", "ALLOW_LOOSE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitution_option CloudbuildTrigger#substitution_option}
  */
  readonly substitutionOption?: string;
  /**
  * Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}

This field is experimental.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#worker_pool CloudbuildTrigger#worker_pool}
  */
  readonly workerPool?: string;
  /**
  * volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#volumes CloudbuildTrigger#volumes}
  */
  readonly volumes?: CloudbuildTriggerBuildOptionsVolumes[];
}

export function cloudbuildTriggerBuildOptionsToTerraform(struct?: CloudbuildTriggerBuildOptionsOutputReference | CloudbuildTriggerBuildOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class CloudbuildTriggerBuildOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerBuildOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._dynamicSubstitutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicSubstitutions = this._dynamicSubstitutions;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._logStreamingOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamingOption = this._logStreamingOption;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._requestedVerifyOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedVerifyOption = this._requestedVerifyOption;
    }
    if (this._secretEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEnv = this._secretEnv;
    }
    if (this._sourceProvenanceHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceProvenanceHash = this._sourceProvenanceHash;
    }
    if (this._substitutionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitutionOption = this._substitutionOption;
    }
    if (this._workerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPool = this._workerPool;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerBuildOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeGb = undefined;
      this._dynamicSubstitutions = undefined;
      this._env = undefined;
      this._logStreamingOption = undefined;
      this._logging = undefined;
      this._machineType = undefined;
      this._requestedVerifyOption = undefined;
      this._secretEnv = undefined;
      this._sourceProvenanceHash = undefined;
      this._substitutionOption = undefined;
      this._workerPool = undefined;
      this._volumes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeGb = value.diskSizeGb;
      this._dynamicSubstitutions = value.dynamicSubstitutions;
      this._env = value.env;
      this._logStreamingOption = value.logStreamingOption;
      this._logging = value.logging;
      this._machineType = value.machineType;
      this._requestedVerifyOption = value.requestedVerifyOption;
      this._secretEnv = value.secretEnv;
      this._sourceProvenanceHash = value.sourceProvenanceHash;
      this._substitutionOption = value.substitutionOption;
      this._workerPool = value.workerPool;
      this._volumes = value.volumes;
    }
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // dynamic_substitutions - computed: false, optional: true, required: false
  private _dynamicSubstitutions?: boolean | cdktf.IResolvable; 
  public get dynamicSubstitutions() {
    return this.getBooleanAttribute('dynamic_substitutions') as any;
  }
  public set dynamicSubstitutions(value: boolean | cdktf.IResolvable) {
    this._dynamicSubstitutions = value;
  }
  public resetDynamicSubstitutions() {
    this._dynamicSubstitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSubstitutionsInput() {
    return this._dynamicSubstitutions;
  }

  // env - computed: false, optional: true, required: false
  private _env?: string[]; 
  public get env() {
    return this.getListAttribute('env');
  }
  public set env(value: string[]) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // log_streaming_option - computed: false, optional: true, required: false
  private _logStreamingOption?: string; 
  public get logStreamingOption() {
    return this.getStringAttribute('log_streaming_option');
  }
  public set logStreamingOption(value: string) {
    this._logStreamingOption = value;
  }
  public resetLogStreamingOption() {
    this._logStreamingOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamingOptionInput() {
    return this._logStreamingOption;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // requested_verify_option - computed: false, optional: true, required: false
  private _requestedVerifyOption?: string; 
  public get requestedVerifyOption() {
    return this.getStringAttribute('requested_verify_option');
  }
  public set requestedVerifyOption(value: string) {
    this._requestedVerifyOption = value;
  }
  public resetRequestedVerifyOption() {
    this._requestedVerifyOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedVerifyOptionInput() {
    return this._requestedVerifyOption;
  }

  // secret_env - computed: false, optional: true, required: false
  private _secretEnv?: string[]; 
  public get secretEnv() {
    return this.getListAttribute('secret_env');
  }
  public set secretEnv(value: string[]) {
    this._secretEnv = value;
  }
  public resetSecretEnv() {
    this._secretEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEnvInput() {
    return this._secretEnv;
  }

  // source_provenance_hash - computed: false, optional: true, required: false
  private _sourceProvenanceHash?: string[]; 
  public get sourceProvenanceHash() {
    return this.getListAttribute('source_provenance_hash');
  }
  public set sourceProvenanceHash(value: string[]) {
    this._sourceProvenanceHash = value;
  }
  public resetSourceProvenanceHash() {
    this._sourceProvenanceHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceProvenanceHashInput() {
    return this._sourceProvenanceHash;
  }

  // substitution_option - computed: false, optional: true, required: false
  private _substitutionOption?: string; 
  public get substitutionOption() {
    return this.getStringAttribute('substitution_option');
  }
  public set substitutionOption(value: string) {
    this._substitutionOption = value;
  }
  public resetSubstitutionOption() {
    this._substitutionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionOptionInput() {
    return this._substitutionOption;
  }

  // worker_pool - computed: false, optional: true, required: false
  private _workerPool?: string; 
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
  public set workerPool(value: string) {
    this._workerPool = value;
  }
  public resetWorkerPool() {
    this._workerPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolInput() {
    return this._workerPool;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: CloudbuildTriggerBuildOptionsVolumes[]; 
  public get volumes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volumes') as any;
  }
  public set volumes(value: CloudbuildTriggerBuildOptionsVolumes[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }
}
export interface CloudbuildTriggerBuildSecret {
  /**
  * Cloud KMS key name to use to decrypt these envs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#kms_key_name CloudbuildTrigger#kms_key_name}
  */
  readonly kmsKeyName: string;
  /**
  * Map of environment variable name to its encrypted value.
Secret environment variables must be unique across all of a build's secrets, 
and must be used by at least one build step. Values can be at most 64 KB in size. 
There can be at most 100 secret values across all of a build's secrets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}
  */
  readonly secretEnv?: { [key: string]: string } | cdktf.IResolvable;
}

export function cloudbuildTriggerBuildSecretToTerraform(struct?: CloudbuildTriggerBuildSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch_name CloudbuildTrigger#branch_name}
  */
  readonly branchName?: string;
  /**
  * Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#commit_sha CloudbuildTrigger#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * Directory, relative to the source root, in which to run the build.
This must be a relative path. If a step's dir is specified and is an absolute path, 
this value is ignored for that step's execution.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dir CloudbuildTrigger#dir}
  */
  readonly dir?: string;
  /**
  * Only trigger a build if the revision regex does NOT match the revision regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
  /**
  * ID of the project that owns the Cloud Source Repository. 
If omitted, the project ID requesting the build is assumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project_id CloudbuildTrigger#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the Cloud Source Repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_name CloudbuildTrigger#repo_name}
  */
  readonly repoName: string;
  /**
  * Substitutions to use in a triggered build. Should only be used with triggers.run
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}
  */
  readonly substitutions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Regex matching tags to build. Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and 
described at https://github.com/google/re2/wiki/Syntax
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag_name CloudbuildTrigger#tag_name}
  */
  readonly tagName?: string;
}

export function cloudbuildTriggerBuildSourceRepoSourceToTerraform(struct?: CloudbuildTriggerBuildSourceRepoSourceOutputReference | CloudbuildTriggerBuildSourceRepoSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class CloudbuildTriggerBuildSourceRepoSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerBuildSourceRepoSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._commitSha !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitSha = this._commitSha;
    }
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    if (this._substitutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitutions = this._substitutions;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerBuildSourceRepoSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchName = undefined;
      this._commitSha = undefined;
      this._dir = undefined;
      this._invertRegex = undefined;
      this._projectId = undefined;
      this._repoName = undefined;
      this._substitutions = undefined;
      this._tagName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchName = value.branchName;
      this._commitSha = value.commitSha;
      this._dir = value.dir;
      this._invertRegex = value.invertRegex;
      this._projectId = value.projectId;
      this._repoName = value.repoName;
      this._substitutions = value.substitutions;
      this._tagName = value.tagName;
    }
  }

  // branch_name - computed: false, optional: true, required: false
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  public resetBranchName() {
    this._branchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // commit_sha - computed: false, optional: true, required: false
  private _commitSha?: string; 
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }
  public set commitSha(value: string) {
    this._commitSha = value;
  }
  public resetCommitSha() {
    this._commitSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitShaInput() {
    return this._commitSha;
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktf.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex') as any;
  }
  public set invertRegex(value: boolean | cdktf.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repo_name - computed: false, optional: false, required: true
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // substitutions - computed: false, optional: true, required: false
  private _substitutions?: { [key: string]: string } | cdktf.IResolvable; 
  public get substitutions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('substitutions') as any;
  }
  public set substitutions(value: { [key: string]: string } | cdktf.IResolvable) {
    this._substitutions = value;
  }
  public resetSubstitutions() {
    this._substitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionsInput() {
    return this._substitutions;
  }

  // tag_name - computed: false, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}
export interface CloudbuildTriggerBuildSourceStorageSource {
  /**
  * Google Cloud Storage bucket containing the source.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#bucket CloudbuildTrigger#bucket}
  */
  readonly bucket: string;
  /**
  * Google Cloud Storage generation for the object. 
If the generation is omitted, the latest generation will be used
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#generation CloudbuildTrigger#generation}
  */
  readonly generation?: string;
  /**
  * Google Cloud Storage object containing the source.
This object must be a gzipped archive file (.tar.gz) containing source to build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#object CloudbuildTrigger#object}
  */
  readonly object: string;
}

export function cloudbuildTriggerBuildSourceStorageSourceToTerraform(struct?: CloudbuildTriggerBuildSourceStorageSourceOutputReference | CloudbuildTriggerBuildSourceStorageSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.stringToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class CloudbuildTriggerBuildSourceStorageSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerBuildSourceStorageSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerBuildSourceStorageSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface CloudbuildTriggerBuildSource {
  /**
  * repo_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_source CloudbuildTrigger#repo_source}
  */
  readonly repoSource?: CloudbuildTriggerBuildSourceRepoSource;
  /**
  * storage_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#storage_source CloudbuildTrigger#storage_source}
  */
  readonly storageSource?: CloudbuildTriggerBuildSourceStorageSource;
}

export function cloudbuildTriggerBuildSourceToTerraform(struct?: CloudbuildTriggerBuildSourceOutputReference | CloudbuildTriggerBuildSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repo_source: cloudbuildTriggerBuildSourceRepoSourceToTerraform(struct!.repoSource),
    storage_source: cloudbuildTriggerBuildSourceStorageSourceToTerraform(struct!.storageSource),
  }
}

export class CloudbuildTriggerBuildSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerBuildSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repoSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoSource = this._repoSource?.internalValue;
    }
    if (this._storageSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSource = this._storageSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerBuildSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repoSource.internalValue = undefined;
      this._storageSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repoSource.internalValue = value.repoSource;
      this._storageSource.internalValue = value.storageSource;
    }
  }

  // repo_source - computed: false, optional: true, required: false
  private _repoSource = new CloudbuildTriggerBuildSourceRepoSourceOutputReference(this as any, "repo_source", true);
  public get repoSource() {
    return this._repoSource;
  }
  public putRepoSource(value: CloudbuildTriggerBuildSourceRepoSource) {
    this._repoSource.internalValue = value;
  }
  public resetRepoSource() {
    this._repoSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoSourceInput() {
    return this._repoSource.internalValue;
  }

  // storage_source - computed: false, optional: true, required: false
  private _storageSource = new CloudbuildTriggerBuildSourceStorageSourceOutputReference(this as any, "storage_source", true);
  public get storageSource() {
    return this._storageSource;
  }
  public putStorageSource(value: CloudbuildTriggerBuildSourceStorageSource) {
    this._storageSource.internalValue = value;
  }
  public resetStorageSource() {
    this._storageSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSourceInput() {
    return this._storageSource.internalValue;
  }
}
export interface CloudbuildTriggerBuildStepVolumes {
  /**
  * Name of the volume to mount.

Volume names must be unique per build step and must be valid names for
Docker volumes. Each named volume must be used by at least two build steps.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}
  */
  readonly name: string;
  /**
  * Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on
the same build step or with certain reserved volume paths.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#path CloudbuildTrigger#path}
  */
  readonly path: string;
}

export function cloudbuildTriggerBuildStepVolumesToTerraform(struct?: CloudbuildTriggerBuildStepVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#args CloudbuildTrigger#args}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dir CloudbuildTrigger#dir}
  */
  readonly dir?: string;
  /**
  * Entrypoint to be used instead of the build step image's
default entrypoint.
If unset, the image's default entrypoint is used
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#entrypoint CloudbuildTrigger#entrypoint}
  */
  readonly entrypoint?: string;
  /**
  * A list of environment variable definitions to be used when
running a step.

The elements are of the form "KEY=VALUE" for the environment variable
"KEY" being given the value "VALUE".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#env CloudbuildTrigger#env}
  */
  readonly env?: string[];
  /**
  * Unique identifier for this build step, used in 'wait_for' to
reference this build step as a dependency.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#id CloudbuildTrigger#id}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}
  */
  readonly name: string;
  /**
  * A list of environment variables which are encrypted using
a Cloud Key
Management Service crypto key. These values must be specified in
the build's 'Secret'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}
  */
  readonly secretEnv?: string[];
  /**
  * Time limit for executing this build step. If not defined,
the step has no
time limit and will be allowed to continue to run until either it
completes or the build itself times out.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timeout CloudbuildTrigger#timeout}
  */
  readonly timeout?: string;
  /**
  * Output only. Stores timing information for executing this
build step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timing CloudbuildTrigger#timing}
  */
  readonly timing?: string;
  /**
  * The ID(s) of the step(s) that this build step depends on.

This build step will not start until all the build steps in 'wait_for'
have completed successfully. If 'wait_for' is empty, this build step
will start when all previous build steps in the 'Build.Steps' list
have completed successfully.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#wait_for CloudbuildTrigger#wait_for}
  */
  readonly waitFor?: string[];
  /**
  * volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#volumes CloudbuildTrigger#volumes}
  */
  readonly volumes?: CloudbuildTriggerBuildStepVolumes[];
}

export function cloudbuildTriggerBuildStepToTerraform(struct?: CloudbuildTriggerBuildStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#images CloudbuildTrigger#images}
  */
  readonly images?: string[];
  /**
  * Google Cloud Storage bucket where logs should be written. 
Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#logs_bucket CloudbuildTrigger#logs_bucket}
  */
  readonly logsBucket?: string;
  /**
  * TTL in queue for this build. If provided and the build is enqueued longer than this value, 
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#queue_ttl CloudbuildTrigger#queue_ttl}
  */
  readonly queueTtl?: string;
  /**
  * Substitutions data for Build resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}
  */
  readonly substitutions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Tags for annotation of a Build. These are not docker tags.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tags CloudbuildTrigger#tags}
  */
  readonly tags?: string[];
  /**
  * Amount of time that this build should be allowed to run, to second granularity.
If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timeout CloudbuildTrigger#timeout}
  */
  readonly timeout?: string;
  /**
  * artifacts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#artifacts CloudbuildTrigger#artifacts}
  */
  readonly artifacts?: CloudbuildTriggerBuildArtifacts;
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#options CloudbuildTrigger#options}
  */
  readonly options?: CloudbuildTriggerBuildOptions;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret CloudbuildTrigger#secret}
  */
  readonly secret?: CloudbuildTriggerBuildSecret[];
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#source CloudbuildTrigger#source}
  */
  readonly source?: CloudbuildTriggerBuildSource;
  /**
  * step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#step CloudbuildTrigger#step}
  */
  readonly step: CloudbuildTriggerBuildStep[];
}

export function cloudbuildTriggerBuildToTerraform(struct?: CloudbuildTriggerBuildOutputReference | CloudbuildTriggerBuild): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    images: cdktf.listMapper(cdktf.stringToTerraform)(struct!.images),
    logs_bucket: cdktf.stringToTerraform(struct!.logsBucket),
    queue_ttl: cdktf.stringToTerraform(struct!.queueTtl),
    substitutions: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.substitutions),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    artifacts: cloudbuildTriggerBuildArtifactsToTerraform(struct!.artifacts),
    options: cloudbuildTriggerBuildOptionsToTerraform(struct!.options),
    secret: cdktf.listMapper(cloudbuildTriggerBuildSecretToTerraform)(struct!.secret),
    source: cloudbuildTriggerBuildSourceToTerraform(struct!.source),
    step: cdktf.listMapper(cloudbuildTriggerBuildStepToTerraform)(struct!.step),
  }
}

export class CloudbuildTriggerBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._logsBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsBucket = this._logsBucket;
    }
    if (this._queueTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueTtl = this._queueTtl;
    }
    if (this._substitutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitutions = this._substitutions;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._artifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifacts = this._artifacts?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._step !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._images = undefined;
      this._logsBucket = undefined;
      this._queueTtl = undefined;
      this._substitutions = undefined;
      this._tags = undefined;
      this._timeout = undefined;
      this._artifacts.internalValue = undefined;
      this._options.internalValue = undefined;
      this._secret = undefined;
      this._source.internalValue = undefined;
      this._step = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._images = value.images;
      this._logsBucket = value.logsBucket;
      this._queueTtl = value.queueTtl;
      this._substitutions = value.substitutions;
      this._tags = value.tags;
      this._timeout = value.timeout;
      this._artifacts.internalValue = value.artifacts;
      this._options.internalValue = value.options;
      this._secret = value.secret;
      this._source.internalValue = value.source;
      this._step = value.step;
    }
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // logs_bucket - computed: false, optional: true, required: false
  private _logsBucket?: string; 
  public get logsBucket() {
    return this.getStringAttribute('logs_bucket');
  }
  public set logsBucket(value: string) {
    this._logsBucket = value;
  }
  public resetLogsBucket() {
    this._logsBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsBucketInput() {
    return this._logsBucket;
  }

  // queue_ttl - computed: false, optional: true, required: false
  private _queueTtl?: string; 
  public get queueTtl() {
    return this.getStringAttribute('queue_ttl');
  }
  public set queueTtl(value: string) {
    this._queueTtl = value;
  }
  public resetQueueTtl() {
    this._queueTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTtlInput() {
    return this._queueTtl;
  }

  // substitutions - computed: false, optional: true, required: false
  private _substitutions?: { [key: string]: string } | cdktf.IResolvable; 
  public get substitutions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('substitutions') as any;
  }
  public set substitutions(value: { [key: string]: string } | cdktf.IResolvable) {
    this._substitutions = value;
  }
  public resetSubstitutions() {
    this._substitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionsInput() {
    return this._substitutions;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // artifacts - computed: false, optional: true, required: false
  private _artifacts = new CloudbuildTriggerBuildArtifactsOutputReference(this as any, "artifacts", true);
  public get artifacts() {
    return this._artifacts;
  }
  public putArtifacts(value: CloudbuildTriggerBuildArtifacts) {
    this._artifacts.internalValue = value;
  }
  public resetArtifacts() {
    this._artifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsInput() {
    return this._artifacts.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new CloudbuildTriggerBuildOptionsOutputReference(this as any, "options", true);
  public get options() {
    return this._options;
  }
  public putOptions(value: CloudbuildTriggerBuildOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: CloudbuildTriggerBuildSecret[]; 
  public get secret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: CloudbuildTriggerBuildSecret[]) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // source - computed: false, optional: true, required: false
  private _source = new CloudbuildTriggerBuildSourceOutputReference(this as any, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: CloudbuildTriggerBuildSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // step - computed: false, optional: false, required: true
  private _step?: CloudbuildTriggerBuildStep[]; 
  public get step() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('step') as any;
  }
  public set step(value: CloudbuildTriggerBuildStep[]) {
    this._step = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }
}
export interface CloudbuildTriggerGithubPullRequest {
  /**
  * Regex of branches to match.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch CloudbuildTrigger#branch}
  */
  readonly branch: string;
  /**
  * Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#comment_control CloudbuildTrigger#comment_control}
  */
  readonly commentControl?: string;
  /**
  * If true, branches that do NOT match the git_ref will trigger a build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
}

export function cloudbuildTriggerGithubPullRequestToTerraform(struct?: CloudbuildTriggerGithubPullRequestOutputReference | CloudbuildTriggerGithubPullRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    comment_control: cdktf.stringToTerraform(struct!.commentControl),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
  }
}

export class CloudbuildTriggerGithubPullRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerGithubPullRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._commentControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentControl = this._commentControl;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerGithubPullRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._commentControl = undefined;
      this._invertRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._commentControl = value.commentControl;
      this._invertRegex = value.invertRegex;
    }
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // comment_control - computed: false, optional: true, required: false
  private _commentControl?: string; 
  public get commentControl() {
    return this.getStringAttribute('comment_control');
  }
  public set commentControl(value: string) {
    this._commentControl = value;
  }
  public resetCommentControl() {
    this._commentControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentControlInput() {
    return this._commentControl;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktf.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex') as any;
  }
  public set invertRegex(value: boolean | cdktf.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }
}
export interface CloudbuildTriggerGithubPush {
  /**
  * Regex of branches to match.  Specify only one of branch or tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch CloudbuildTrigger#branch}
  */
  readonly branch?: string;
  /**
  * When true, only trigger a build if the revision regex does NOT match the git_ref regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
  /**
  * Regex of tags to match.  Specify only one of branch or tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag CloudbuildTrigger#tag}
  */
  readonly tag?: string;
}

export function cloudbuildTriggerGithubPushToTerraform(struct?: CloudbuildTriggerGithubPushOutputReference | CloudbuildTriggerGithubPush): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export class CloudbuildTriggerGithubPushOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerGithubPush | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerGithubPush | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._invertRegex = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._invertRegex = value.invertRegex;
      this._tag = value.tag;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktf.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex') as any;
  }
  public set invertRegex(value: boolean | cdktf.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface CloudbuildTriggerGithub {
  /**
  * Name of the repository. For example: The name for
https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}
  */
  readonly name?: string;
  /**
  * Owner of the repository. For example: The owner for
https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#owner CloudbuildTrigger#owner}
  */
  readonly owner?: string;
  /**
  * pull_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#pull_request CloudbuildTrigger#pull_request}
  */
  readonly pullRequest?: CloudbuildTriggerGithubPullRequest;
  /**
  * push block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#push CloudbuildTrigger#push}
  */
  readonly push?: CloudbuildTriggerGithubPush;
}

export function cloudbuildTriggerGithubToTerraform(struct?: CloudbuildTriggerGithubOutputReference | CloudbuildTriggerGithub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    pull_request: cloudbuildTriggerGithubPullRequestToTerraform(struct!.pullRequest),
    push: cloudbuildTriggerGithubPushToTerraform(struct!.push),
  }
}

export class CloudbuildTriggerGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._push?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.push = this._push?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._owner = undefined;
      this._pullRequest.internalValue = undefined;
      this._push.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._owner = value.owner;
      this._pullRequest.internalValue = value.pullRequest;
      this._push.internalValue = value.push;
    }
  }

  // name - computed: false, optional: true, required: false
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
    return this._name;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new CloudbuildTriggerGithubPullRequestOutputReference(this as any, "pull_request", true);
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: CloudbuildTriggerGithubPullRequest) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // push - computed: false, optional: true, required: false
  private _push = new CloudbuildTriggerGithubPushOutputReference(this as any, "push", true);
  public get push() {
    return this._push;
  }
  public putPush(value: CloudbuildTriggerGithubPush) {
    this._push.internalValue = value;
  }
  public resetPush() {
    this._push.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push.internalValue;
  }
}
export interface CloudbuildTriggerPubsubConfig {
  /**
  * Service account that will make the push request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#service_account_email CloudbuildTrigger#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The name of the topic from which this subscription is receiving messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#topic CloudbuildTrigger#topic}
  */
  readonly topic: string;
}

export function cloudbuildTriggerPubsubConfigToTerraform(struct?: CloudbuildTriggerPubsubConfigOutputReference | CloudbuildTriggerPubsubConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class CloudbuildTriggerPubsubConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerPubsubConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerPubsubConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccountEmail = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._topic = value.topic;
    }
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface CloudbuildTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#create CloudbuildTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#delete CloudbuildTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#update CloudbuildTrigger#update}
  */
  readonly update?: string;
}

export function cloudbuildTriggerTimeoutsToTerraform(struct?: CloudbuildTriggerTimeoutsOutputReference | CloudbuildTriggerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CloudbuildTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface CloudbuildTriggerTriggerTemplate {
  /**
  * Name of the branch to build. Exactly one a of branch name, tag, or commit SHA must be provided.
This field is a regular expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch_name CloudbuildTrigger#branch_name}
  */
  readonly branchName?: string;
  /**
  * Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#commit_sha CloudbuildTrigger#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and
is an absolute path, this value is ignored for that step's
execution.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dir CloudbuildTrigger#dir}
  */
  readonly dir?: string;
  /**
  * Only trigger a build if the revision regex does NOT match the revision regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
  /**
  * ID of the project that owns the Cloud Source Repository. If
omitted, the project ID requesting the build is assumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project_id CloudbuildTrigger#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the Cloud Source Repository. If omitted, the name "default" is assumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_name CloudbuildTrigger#repo_name}
  */
  readonly repoName?: string;
  /**
  * Name of the tag to build. Exactly one of a branch name, tag, or commit SHA must be provided.
This field is a regular expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag_name CloudbuildTrigger#tag_name}
  */
  readonly tagName?: string;
}

export function cloudbuildTriggerTriggerTemplateToTerraform(struct?: CloudbuildTriggerTriggerTemplateOutputReference | CloudbuildTriggerTriggerTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class CloudbuildTriggerTriggerTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerTriggerTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._commitSha !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitSha = this._commitSha;
    }
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerTriggerTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchName = undefined;
      this._commitSha = undefined;
      this._dir = undefined;
      this._invertRegex = undefined;
      this._projectId = undefined;
      this._repoName = undefined;
      this._tagName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchName = value.branchName;
      this._commitSha = value.commitSha;
      this._dir = value.dir;
      this._invertRegex = value.invertRegex;
      this._projectId = value.projectId;
      this._repoName = value.repoName;
      this._tagName = value.tagName;
    }
  }

  // branch_name - computed: false, optional: true, required: false
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  public resetBranchName() {
    this._branchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // commit_sha - computed: false, optional: true, required: false
  private _commitSha?: string; 
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }
  public set commitSha(value: string) {
    this._commitSha = value;
  }
  public resetCommitSha() {
    this._commitSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitShaInput() {
    return this._commitSha;
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktf.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex') as any;
  }
  public set invertRegex(value: boolean | cdktf.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repo_name - computed: false, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // tag_name - computed: false, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}
export interface CloudbuildTriggerWebhookConfig {
  /**
  * Resource name for the secret required as a URL parameter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret CloudbuildTrigger#secret}
  */
  readonly secret: string;
}

export function cloudbuildTriggerWebhookConfigToTerraform(struct?: CloudbuildTriggerWebhookConfigOutputReference | CloudbuildTriggerWebhookConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}

export class CloudbuildTriggerWebhookConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudbuildTriggerWebhookConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildTriggerWebhookConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
    }
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger google_cloudbuild_trigger}
*/
export class CloudbuildTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_cloudbuild_trigger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger google_cloudbuild_trigger} Resource
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
    this._serviceAccount = config.serviceAccount;
    this._substitutions = config.substitutions;
    this._tags = config.tags;
    this._build.internalValue = config.buildAttribute;
    this._github.internalValue = config.github;
    this._pubsubConfig.internalValue = config.pubsubConfig;
    this._timeouts.internalValue = config.timeouts;
    this._triggerTemplate.internalValue = config.triggerTemplate;
    this._webhookConfig.internalValue = config.webhookConfig;
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
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
  public set ignoredFiles(value: string[]) {
    this._ignoredFiles = value;
  }
  public resetIgnoredFiles() {
    this._ignoredFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredFilesInput() {
    return this._ignoredFiles;
  }

  // included_files - computed: false, optional: true, required: false
  private _includedFiles?: string[]; 
  public get includedFiles() {
    return this.getListAttribute('included_files');
  }
  public set includedFiles(value: string[]) {
    this._includedFiles = value;
  }
  public resetIncludedFiles() {
    this._includedFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedFilesInput() {
    return this._includedFiles;
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
    return this._name;
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
    return this._project;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // substitutions - computed: false, optional: true, required: false
  private _substitutions?: { [key: string]: string } | cdktf.IResolvable; 
  public get substitutions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('substitutions') as any;
  }
  public set substitutions(value: { [key: string]: string } | cdktf.IResolvable) {
    this._substitutions = value;
  }
  public resetSubstitutions() {
    this._substitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionsInput() {
    return this._substitutions;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // trigger_id - computed: true, optional: false, required: false
  public get triggerId() {
    return this.getStringAttribute('trigger_id');
  }

  // build - computed: false, optional: true, required: false
  private _build = new CloudbuildTriggerBuildOutputReference(this as any, "build", true);
  public get buildAttribute() {
    return this._build;
  }
  public putBuildAttribute(value: CloudbuildTriggerBuild) {
    this._build.internalValue = value;
  }
  public resetBuildAttribute() {
    this._build.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new CloudbuildTriggerGithubOutputReference(this as any, "github", true);
  public get github() {
    return this._github;
  }
  public putGithub(value: CloudbuildTriggerGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // pubsub_config - computed: false, optional: true, required: false
  private _pubsubConfig = new CloudbuildTriggerPubsubConfigOutputReference(this as any, "pubsub_config", true);
  public get pubsubConfig() {
    return this._pubsubConfig;
  }
  public putPubsubConfig(value: CloudbuildTriggerPubsubConfig) {
    this._pubsubConfig.internalValue = value;
  }
  public resetPubsubConfig() {
    this._pubsubConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubConfigInput() {
    return this._pubsubConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudbuildTriggerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudbuildTriggerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trigger_template - computed: false, optional: true, required: false
  private _triggerTemplate = new CloudbuildTriggerTriggerTemplateOutputReference(this as any, "trigger_template", true);
  public get triggerTemplate() {
    return this._triggerTemplate;
  }
  public putTriggerTemplate(value: CloudbuildTriggerTriggerTemplate) {
    this._triggerTemplate.internalValue = value;
  }
  public resetTriggerTemplate() {
    this._triggerTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTemplateInput() {
    return this._triggerTemplate.internalValue;
  }

  // webhook_config - computed: false, optional: true, required: false
  private _webhookConfig = new CloudbuildTriggerWebhookConfigOutputReference(this as any, "webhook_config", true);
  public get webhookConfig() {
    return this._webhookConfig;
  }
  public putWebhookConfig(value: CloudbuildTriggerWebhookConfig) {
    this._webhookConfig.internalValue = value;
  }
  public resetWebhookConfig() {
    this._webhookConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookConfigInput() {
    return this._webhookConfig.internalValue;
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
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      substitutions: cdktf.hashMapper(cdktf.anyToTerraform)(this._substitutions),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      build: cloudbuildTriggerBuildToTerraform(this._build.internalValue),
      github: cloudbuildTriggerGithubToTerraform(this._github.internalValue),
      pubsub_config: cloudbuildTriggerPubsubConfigToTerraform(this._pubsubConfig.internalValue),
      timeouts: cloudbuildTriggerTimeoutsToTerraform(this._timeouts.internalValue),
      trigger_template: cloudbuildTriggerTriggerTemplateToTerraform(this._triggerTemplate.internalValue),
      webhook_config: cloudbuildTriggerWebhookConfigToTerraform(this._webhookConfig.internalValue),
    };
  }
}
