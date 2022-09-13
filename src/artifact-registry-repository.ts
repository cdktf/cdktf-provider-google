// https://www.terraform.io/docs/providers/google/r/artifact_registry_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArtifactRegistryRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user-provided description of the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#description ArtifactRegistryRepository#description}
  */
  readonly description?: string;
  /**
  * The format of packages that are stored in the repository. Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#format ArtifactRegistryRepository#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#id ArtifactRegistryRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Cloud KMS resource name of the customer managed encryption key that’s
used to encrypt the contents of the Repository. Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
This value may not be changed after the Repository has been created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#kms_key_name ArtifactRegistryRepository#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Labels with user-defined metadata.
This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#labels ArtifactRegistryRepository#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location this repository is located in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#location ArtifactRegistryRepository#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#project ArtifactRegistryRepository#project}
  */
  readonly project?: string;
  /**
  * The last part of the repository name, for example:
"repo1"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#repository_id ArtifactRegistryRepository#repository_id}
  */
  readonly repositoryId: string;
  /**
  * maven_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#maven_config ArtifactRegistryRepository#maven_config}
  */
  readonly mavenConfig?: ArtifactRegistryRepositoryMavenConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#timeouts ArtifactRegistryRepository#timeouts}
  */
  readonly timeouts?: ArtifactRegistryRepositoryTimeouts;
}
export interface ArtifactRegistryRepositoryMavenConfig {
  /**
  * The repository with this flag will allow publishing the same
snapshot versions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#allow_snapshot_overwrites ArtifactRegistryRepository#allow_snapshot_overwrites}
  */
  readonly allowSnapshotOverwrites?: boolean | cdktf.IResolvable;
  /**
  * Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#version_policy ArtifactRegistryRepository#version_policy}
  */
  readonly versionPolicy?: string;
}

export function artifactRegistryRepositoryMavenConfigToTerraform(struct?: ArtifactRegistryRepositoryMavenConfigOutputReference | ArtifactRegistryRepositoryMavenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_snapshot_overwrites: cdktf.booleanToTerraform(struct!.allowSnapshotOverwrites),
    version_policy: cdktf.stringToTerraform(struct!.versionPolicy),
  }
}

export class ArtifactRegistryRepositoryMavenConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryMavenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSnapshotOverwrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSnapshotOverwrites = this._allowSnapshotOverwrites;
    }
    if (this._versionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionPolicy = this._versionPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryMavenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSnapshotOverwrites = undefined;
      this._versionPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSnapshotOverwrites = value.allowSnapshotOverwrites;
      this._versionPolicy = value.versionPolicy;
    }
  }

  // allow_snapshot_overwrites - computed: false, optional: true, required: false
  private _allowSnapshotOverwrites?: boolean | cdktf.IResolvable; 
  public get allowSnapshotOverwrites() {
    return this.getBooleanAttribute('allow_snapshot_overwrites');
  }
  public set allowSnapshotOverwrites(value: boolean | cdktf.IResolvable) {
    this._allowSnapshotOverwrites = value;
  }
  public resetAllowSnapshotOverwrites() {
    this._allowSnapshotOverwrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSnapshotOverwritesInput() {
    return this._allowSnapshotOverwrites;
  }

  // version_policy - computed: false, optional: true, required: false
  private _versionPolicy?: string; 
  public get versionPolicy() {
    return this.getStringAttribute('version_policy');
  }
  public set versionPolicy(value: string) {
    this._versionPolicy = value;
  }
  public resetVersionPolicy() {
    this._versionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionPolicyInput() {
    return this._versionPolicy;
  }
}
export interface ArtifactRegistryRepositoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#create ArtifactRegistryRepository#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#delete ArtifactRegistryRepository#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository#update ArtifactRegistryRepository#update}
  */
  readonly update?: string;
}

export function artifactRegistryRepositoryTimeoutsToTerraform(struct?: ArtifactRegistryRepositoryTimeoutsOutputReference | ArtifactRegistryRepositoryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ArtifactRegistryRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ArtifactRegistryRepositoryTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository google_artifact_registry_repository}
*/
export class ArtifactRegistryRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_artifact_registry_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository google_artifact_registry_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArtifactRegistryRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: ArtifactRegistryRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_artifact_registry_repository',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._format = config.format;
    this._id = config.id;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._repositoryId = config.repositoryId;
    this._mavenConfig.internalValue = config.mavenConfig;
    this._timeouts.internalValue = config.timeouts;
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

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // maven_config - computed: false, optional: true, required: false
  private _mavenConfig = new ArtifactRegistryRepositoryMavenConfigOutputReference(this, "maven_config");
  public get mavenConfig() {
    return this._mavenConfig;
  }
  public putMavenConfig(value: ArtifactRegistryRepositoryMavenConfig) {
    this._mavenConfig.internalValue = value;
  }
  public resetMavenConfig() {
    this._mavenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenConfigInput() {
    return this._mavenConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ArtifactRegistryRepositoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ArtifactRegistryRepositoryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      maven_config: artifactRegistryRepositoryMavenConfigToTerraform(this._mavenConfig.internalValue),
      timeouts: artifactRegistryRepositoryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
