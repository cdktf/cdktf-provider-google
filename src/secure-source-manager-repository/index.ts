/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecureSourceManagerRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the repository, which cannot exceed 500 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#description SecureSourceManagerRepository#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#id SecureSourceManagerRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the instance in which the repository is hosted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#instance SecureSourceManagerRepository#instance}
  */
  readonly instance: string;
  /**
  * The location for the Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#location SecureSourceManagerRepository#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#project SecureSourceManagerRepository#project}
  */
  readonly project?: string;
  /**
  * The ID for the Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#repository_id SecureSourceManagerRepository#repository_id}
  */
  readonly repositoryId: string;
  /**
  * initial_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#initial_config SecureSourceManagerRepository#initial_config}
  */
  readonly initialConfig?: SecureSourceManagerRepositoryInitialConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#timeouts SecureSourceManagerRepository#timeouts}
  */
  readonly timeouts?: SecureSourceManagerRepositoryTimeouts;
}
export interface SecureSourceManagerRepositoryUris {
}

export function secureSourceManagerRepositoryUrisToTerraform(struct?: SecureSourceManagerRepositoryUris): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function secureSourceManagerRepositoryUrisToHclTerraform(struct?: SecureSourceManagerRepositoryUris): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecureSourceManagerRepositoryUrisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecureSourceManagerRepositoryUris | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureSourceManagerRepositoryUris | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api - computed: true, optional: false, required: false
  public get api() {
    return this.getStringAttribute('api');
  }

  // git_https - computed: true, optional: false, required: false
  public get gitHttps() {
    return this.getStringAttribute('git_https');
  }

  // html - computed: true, optional: false, required: false
  public get html() {
    return this.getStringAttribute('html');
  }
}

export class SecureSourceManagerRepositoryUrisList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecureSourceManagerRepositoryUrisOutputReference {
    return new SecureSourceManagerRepositoryUrisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecureSourceManagerRepositoryInitialConfig {
  /**
  * Default branch name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#default_branch SecureSourceManagerRepository#default_branch}
  */
  readonly defaultBranch?: string;
  /**
  * List of gitignore template names user can choose from.
  * Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#gitignores SecureSourceManagerRepository#gitignores}
  */
  readonly gitignores?: string[];
  /**
  * License template name user can choose from.
  * Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#license SecureSourceManagerRepository#license}
  */
  readonly license?: string;
  /**
  * README template name.
  * Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#readme SecureSourceManagerRepository#readme}
  */
  readonly readme?: string;
}

export function secureSourceManagerRepositoryInitialConfigToTerraform(struct?: SecureSourceManagerRepositoryInitialConfigOutputReference | SecureSourceManagerRepositoryInitialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_branch: cdktf.stringToTerraform(struct!.defaultBranch),
    gitignores: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gitignores),
    license: cdktf.stringToTerraform(struct!.license),
    readme: cdktf.stringToTerraform(struct!.readme),
  }
}


export function secureSourceManagerRepositoryInitialConfigToHclTerraform(struct?: SecureSourceManagerRepositoryInitialConfigOutputReference | SecureSourceManagerRepositoryInitialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_branch: {
      value: cdktf.stringToHclTerraform(struct!.defaultBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gitignores: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gitignores),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readme: {
      value: cdktf.stringToHclTerraform(struct!.readme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureSourceManagerRepositoryInitialConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecureSourceManagerRepositoryInitialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBranch = this._defaultBranch;
    }
    if (this._gitignores !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitignores = this._gitignores;
    }
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._readme !== undefined) {
      hasAnyValues = true;
      internalValueResult.readme = this._readme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureSourceManagerRepositoryInitialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultBranch = undefined;
      this._gitignores = undefined;
      this._license = undefined;
      this._readme = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultBranch = value.defaultBranch;
      this._gitignores = value.gitignores;
      this._license = value.license;
      this._readme = value.readme;
    }
  }

  // default_branch - computed: false, optional: true, required: false
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // gitignores - computed: false, optional: true, required: false
  private _gitignores?: string[]; 
  public get gitignores() {
    return this.getListAttribute('gitignores');
  }
  public set gitignores(value: string[]) {
    this._gitignores = value;
  }
  public resetGitignores() {
    this._gitignores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitignoresInput() {
    return this._gitignores;
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // readme - computed: false, optional: true, required: false
  private _readme?: string; 
  public get readme() {
    return this.getStringAttribute('readme');
  }
  public set readme(value: string) {
    this._readme = value;
  }
  public resetReadme() {
    this._readme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readmeInput() {
    return this._readme;
  }
}
export interface SecureSourceManagerRepositoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#create SecureSourceManagerRepository#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#delete SecureSourceManagerRepository#delete}
  */
  readonly delete?: string;
}

export function secureSourceManagerRepositoryTimeoutsToTerraform(struct?: SecureSourceManagerRepositoryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function secureSourceManagerRepositoryTimeoutsToHclTerraform(struct?: SecureSourceManagerRepositoryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureSourceManagerRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecureSourceManagerRepositoryTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureSourceManagerRepositoryTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository google_secure_source_manager_repository}
*/
export class SecureSourceManagerRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_secure_source_manager_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecureSourceManagerRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecureSourceManagerRepository to import
  * @param importFromId The id of the existing SecureSourceManagerRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecureSourceManagerRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_secure_source_manager_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/secure_source_manager_repository google_secure_source_manager_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecureSourceManagerRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: SecureSourceManagerRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secure_source_manager_repository',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.11.0',
        providerVersionConstraint: '~> 6.0'
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
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._project = config.project;
    this._repositoryId = config.repositoryId;
    this._initialConfig.internalValue = config.initialConfig;
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // uris - computed: true, optional: false, required: false
  private _uris = new SecureSourceManagerRepositoryUrisList(this, "uris", false);
  public get uris() {
    return this._uris;
  }

  // initial_config - computed: false, optional: true, required: false
  private _initialConfig = new SecureSourceManagerRepositoryInitialConfigOutputReference(this, "initial_config");
  public get initialConfig() {
    return this._initialConfig;
  }
  public putInitialConfig(value: SecureSourceManagerRepositoryInitialConfig) {
    this._initialConfig.internalValue = value;
  }
  public resetInitialConfig() {
    this._initialConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialConfigInput() {
    return this._initialConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecureSourceManagerRepositoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecureSourceManagerRepositoryTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      initial_config: secureSourceManagerRepositoryInitialConfigToTerraform(this._initialConfig.internalValue),
      timeouts: secureSourceManagerRepositoryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_config: {
        value: secureSourceManagerRepositoryInitialConfigToHclTerraform(this._initialConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecureSourceManagerRepositoryInitialConfigList",
      },
      timeouts: {
        value: secureSourceManagerRepositoryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecureSourceManagerRepositoryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
