/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudbuildBitbucketServerConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
  * Changing this field will result in deleting/ recreating the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#api_key CloudbuildBitbucketServerConfig#api_key}
  */
  readonly apiKey: string;
  /**
  * The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#config_id CloudbuildBitbucketServerConfig#config_id}
  */
  readonly configId: string;
  /**
  * Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
  * If you need to change it, please create another BitbucketServerConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#host_uri CloudbuildBitbucketServerConfig#host_uri}
  */
  readonly hostUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#id CloudbuildBitbucketServerConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of this bitbucket server config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#location CloudbuildBitbucketServerConfig#location}
  */
  readonly location: string;
  /**
  * The network to be used when reaching out to the Bitbucket Server instance. The VPC network must be enabled for private service connection.
  * This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
  * no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
  * projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#peered_network CloudbuildBitbucketServerConfig#peered_network}
  */
  readonly peeredNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#project CloudbuildBitbucketServerConfig#project}
  */
  readonly project?: string;
  /**
  * SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#ssl_ca CloudbuildBitbucketServerConfig#ssl_ca}
  */
  readonly sslCa?: string;
  /**
  * Username of the account Cloud Build will use on Bitbucket Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#username CloudbuildBitbucketServerConfig#username}
  */
  readonly username: string;
  /**
  * connected_repositories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#connected_repositories CloudbuildBitbucketServerConfig#connected_repositories}
  */
  readonly connectedRepositories?: CloudbuildBitbucketServerConfigConnectedRepositories[] | cdktf.IResolvable;
  /**
  * secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#secrets CloudbuildBitbucketServerConfig#secrets}
  */
  readonly secrets: CloudbuildBitbucketServerConfigSecrets;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#timeouts CloudbuildBitbucketServerConfig#timeouts}
  */
  readonly timeouts?: CloudbuildBitbucketServerConfigTimeouts;
}
export interface CloudbuildBitbucketServerConfigConnectedRepositories {
  /**
  * Identifier for the project storing the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#project_key CloudbuildBitbucketServerConfig#project_key}
  */
  readonly projectKey: string;
  /**
  * Identifier for the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#repo_slug CloudbuildBitbucketServerConfig#repo_slug}
  */
  readonly repoSlug: string;
}

export function cloudbuildBitbucketServerConfigConnectedRepositoriesToTerraform(struct?: CloudbuildBitbucketServerConfigConnectedRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_key: cdktf.stringToTerraform(struct!.projectKey),
    repo_slug: cdktf.stringToTerraform(struct!.repoSlug),
  }
}


export function cloudbuildBitbucketServerConfigConnectedRepositoriesToHclTerraform(struct?: CloudbuildBitbucketServerConfigConnectedRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_key: {
      value: cdktf.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_slug: {
      value: cdktf.stringToHclTerraform(struct!.repoSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudbuildBitbucketServerConfigConnectedRepositories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    if (this._repoSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoSlug = this._repoSlug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildBitbucketServerConfigConnectedRepositories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectKey = undefined;
      this._repoSlug = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectKey = value.projectKey;
      this._repoSlug = value.repoSlug;
    }
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // repo_slug - computed: false, optional: false, required: true
  private _repoSlug?: string; 
  public get repoSlug() {
    return this.getStringAttribute('repo_slug');
  }
  public set repoSlug(value: string) {
    this._repoSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoSlugInput() {
    return this._repoSlug;
  }
}

export class CloudbuildBitbucketServerConfigConnectedRepositoriesList extends cdktf.ComplexList {
  public internalValue? : CloudbuildBitbucketServerConfigConnectedRepositories[] | cdktf.IResolvable

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
  public get(index: number): CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference {
    return new CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudbuildBitbucketServerConfigSecrets {
  /**
  * The resource name for the admin access token's secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#admin_access_token_version_name CloudbuildBitbucketServerConfig#admin_access_token_version_name}
  */
  readonly adminAccessTokenVersionName: string;
  /**
  * The resource name for the read access token's secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#read_access_token_version_name CloudbuildBitbucketServerConfig#read_access_token_version_name}
  */
  readonly readAccessTokenVersionName: string;
  /**
  * Immutable. The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.
  * Changing this field will result in deleting/ recreating the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#webhook_secret_version_name CloudbuildBitbucketServerConfig#webhook_secret_version_name}
  */
  readonly webhookSecretVersionName: string;
}

export function cloudbuildBitbucketServerConfigSecretsToTerraform(struct?: CloudbuildBitbucketServerConfigSecretsOutputReference | CloudbuildBitbucketServerConfigSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_access_token_version_name: cdktf.stringToTerraform(struct!.adminAccessTokenVersionName),
    read_access_token_version_name: cdktf.stringToTerraform(struct!.readAccessTokenVersionName),
    webhook_secret_version_name: cdktf.stringToTerraform(struct!.webhookSecretVersionName),
  }
}


export function cloudbuildBitbucketServerConfigSecretsToHclTerraform(struct?: CloudbuildBitbucketServerConfigSecretsOutputReference | CloudbuildBitbucketServerConfigSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_access_token_version_name: {
      value: cdktf.stringToHclTerraform(struct!.adminAccessTokenVersionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_access_token_version_name: {
      value: cdktf.stringToHclTerraform(struct!.readAccessTokenVersionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_secret_version_name: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecretVersionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudbuildBitbucketServerConfigSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudbuildBitbucketServerConfigSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminAccessTokenVersionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminAccessTokenVersionName = this._adminAccessTokenVersionName;
    }
    if (this._readAccessTokenVersionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.readAccessTokenVersionName = this._readAccessTokenVersionName;
    }
    if (this._webhookSecretVersionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretVersionName = this._webhookSecretVersionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudbuildBitbucketServerConfigSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminAccessTokenVersionName = undefined;
      this._readAccessTokenVersionName = undefined;
      this._webhookSecretVersionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminAccessTokenVersionName = value.adminAccessTokenVersionName;
      this._readAccessTokenVersionName = value.readAccessTokenVersionName;
      this._webhookSecretVersionName = value.webhookSecretVersionName;
    }
  }

  // admin_access_token_version_name - computed: false, optional: false, required: true
  private _adminAccessTokenVersionName?: string; 
  public get adminAccessTokenVersionName() {
    return this.getStringAttribute('admin_access_token_version_name');
  }
  public set adminAccessTokenVersionName(value: string) {
    this._adminAccessTokenVersionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAccessTokenVersionNameInput() {
    return this._adminAccessTokenVersionName;
  }

  // read_access_token_version_name - computed: false, optional: false, required: true
  private _readAccessTokenVersionName?: string; 
  public get readAccessTokenVersionName() {
    return this.getStringAttribute('read_access_token_version_name');
  }
  public set readAccessTokenVersionName(value: string) {
    this._readAccessTokenVersionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readAccessTokenVersionNameInput() {
    return this._readAccessTokenVersionName;
  }

  // webhook_secret_version_name - computed: false, optional: false, required: true
  private _webhookSecretVersionName?: string; 
  public get webhookSecretVersionName() {
    return this.getStringAttribute('webhook_secret_version_name');
  }
  public set webhookSecretVersionName(value: string) {
    this._webhookSecretVersionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretVersionNameInput() {
    return this._webhookSecretVersionName;
  }
}
export interface CloudbuildBitbucketServerConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#create CloudbuildBitbucketServerConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#delete CloudbuildBitbucketServerConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#update CloudbuildBitbucketServerConfig#update}
  */
  readonly update?: string;
}

export function cloudbuildBitbucketServerConfigTimeoutsToTerraform(struct?: CloudbuildBitbucketServerConfigTimeouts | cdktf.IResolvable): any {
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


export function cloudbuildBitbucketServerConfigTimeoutsToHclTerraform(struct?: CloudbuildBitbucketServerConfigTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudbuildBitbucketServerConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudbuildBitbucketServerConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudbuildBitbucketServerConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config google_cloudbuild_bitbucket_server_config}
*/
export class CloudbuildBitbucketServerConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloudbuild_bitbucket_server_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudbuildBitbucketServerConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudbuildBitbucketServerConfig to import
  * @param importFromId The id of the existing CloudbuildBitbucketServerConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudbuildBitbucketServerConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloudbuild_bitbucket_server_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/cloudbuild_bitbucket_server_config google_cloudbuild_bitbucket_server_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudbuildBitbucketServerConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CloudbuildBitbucketServerConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudbuild_bitbucket_server_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.3.0',
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
    this._apiKey = config.apiKey;
    this._configId = config.configId;
    this._hostUri = config.hostUri;
    this._id = config.id;
    this._location = config.location;
    this._peeredNetwork = config.peeredNetwork;
    this._project = config.project;
    this._sslCa = config.sslCa;
    this._username = config.username;
    this._connectedRepositories.internalValue = config.connectedRepositories;
    this._secrets.internalValue = config.secrets;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // config_id - computed: false, optional: false, required: true
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // host_uri - computed: false, optional: false, required: true
  private _hostUri?: string; 
  public get hostUri() {
    return this.getStringAttribute('host_uri');
  }
  public set hostUri(value: string) {
    this._hostUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUriInput() {
    return this._hostUri;
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

  // peered_network - computed: false, optional: true, required: false
  private _peeredNetwork?: string; 
  public get peeredNetwork() {
    return this.getStringAttribute('peered_network');
  }
  public set peeredNetwork(value: string) {
    this._peeredNetwork = value;
  }
  public resetPeeredNetwork() {
    this._peeredNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeredNetworkInput() {
    return this._peeredNetwork;
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

  // ssl_ca - computed: false, optional: true, required: false
  private _sslCa?: string; 
  public get sslCa() {
    return this.getStringAttribute('ssl_ca');
  }
  public set sslCa(value: string) {
    this._sslCa = value;
  }
  public resetSslCa() {
    this._sslCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaInput() {
    return this._sslCa;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // webhook_key - computed: true, optional: false, required: false
  public get webhookKey() {
    return this.getStringAttribute('webhook_key');
  }

  // connected_repositories - computed: false, optional: true, required: false
  private _connectedRepositories = new CloudbuildBitbucketServerConfigConnectedRepositoriesList(this, "connected_repositories", true);
  public get connectedRepositories() {
    return this._connectedRepositories;
  }
  public putConnectedRepositories(value: CloudbuildBitbucketServerConfigConnectedRepositories[] | cdktf.IResolvable) {
    this._connectedRepositories.internalValue = value;
  }
  public resetConnectedRepositories() {
    this._connectedRepositories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedRepositoriesInput() {
    return this._connectedRepositories.internalValue;
  }

  // secrets - computed: false, optional: false, required: true
  private _secrets = new CloudbuildBitbucketServerConfigSecretsOutputReference(this, "secrets");
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: CloudbuildBitbucketServerConfigSecrets) {
    this._secrets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudbuildBitbucketServerConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudbuildBitbucketServerConfigTimeouts) {
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      config_id: cdktf.stringToTerraform(this._configId),
      host_uri: cdktf.stringToTerraform(this._hostUri),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      peered_network: cdktf.stringToTerraform(this._peeredNetwork),
      project: cdktf.stringToTerraform(this._project),
      ssl_ca: cdktf.stringToTerraform(this._sslCa),
      username: cdktf.stringToTerraform(this._username),
      connected_repositories: cdktf.listMapper(cloudbuildBitbucketServerConfigConnectedRepositoriesToTerraform, true)(this._connectedRepositories.internalValue),
      secrets: cloudbuildBitbucketServerConfigSecretsToTerraform(this._secrets.internalValue),
      timeouts: cloudbuildBitbucketServerConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_id: {
        value: cdktf.stringToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_uri: {
        value: cdktf.stringToHclTerraform(this._hostUri),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peered_network: {
        value: cdktf.stringToHclTerraform(this._peeredNetwork),
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
      ssl_ca: {
        value: cdktf.stringToHclTerraform(this._sslCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connected_repositories: {
        value: cdktf.listMapperHcl(cloudbuildBitbucketServerConfigConnectedRepositoriesToHclTerraform, true)(this._connectedRepositories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudbuildBitbucketServerConfigConnectedRepositoriesList",
      },
      secrets: {
        value: cloudbuildBitbucketServerConfigSecretsToHclTerraform(this._secrets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudbuildBitbucketServerConfigSecretsList",
      },
      timeouts: {
        value: cloudbuildBitbucketServerConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudbuildBitbucketServerConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
