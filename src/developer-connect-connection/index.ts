/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeveloperConnectConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Allows clients to store small amounts of arbitrary data.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#annotations DeveloperConnectConnection#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Required. Id of the requesting object
  * If auto-generating Id server-side, remove this field and
  * connection_id from the method_signature of Create RPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#connection_id DeveloperConnectConnection#connection_id}
  */
  readonly connectionId: string;
  /**
  * Optional. If disabled is set to true, functionality is disabled for this connection.
  * Repository based API methods and webhooks processing for repositories in
  * this connection will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#disabled DeveloperConnectConnection#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. This checksum is computed by the server based on the value of other
  * fields, and may be sent on update and delete requests to ensure the
  * client has an up-to-date value before proceeding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#etag DeveloperConnectConnection#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#id DeveloperConnectConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Labels as key value pairs
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#labels DeveloperConnectConnection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#location DeveloperConnectConnection#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#project DeveloperConnectConnection#project}
  */
  readonly project?: string;
  /**
  * bitbucket_cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#bitbucket_cloud_config DeveloperConnectConnection#bitbucket_cloud_config}
  */
  readonly bitbucketCloudConfig?: DeveloperConnectConnectionBitbucketCloudConfig;
  /**
  * bitbucket_data_center_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#bitbucket_data_center_config DeveloperConnectConnection#bitbucket_data_center_config}
  */
  readonly bitbucketDataCenterConfig?: DeveloperConnectConnectionBitbucketDataCenterConfig;
  /**
  * crypto_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#crypto_key_config DeveloperConnectConnection#crypto_key_config}
  */
  readonly cryptoKeyConfig?: DeveloperConnectConnectionCryptoKeyConfig;
  /**
  * github_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#github_config DeveloperConnectConnection#github_config}
  */
  readonly githubConfig?: DeveloperConnectConnectionGithubConfig;
  /**
  * github_enterprise_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#github_enterprise_config DeveloperConnectConnection#github_enterprise_config}
  */
  readonly githubEnterpriseConfig?: DeveloperConnectConnectionGithubEnterpriseConfig;
  /**
  * gitlab_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#gitlab_config DeveloperConnectConnection#gitlab_config}
  */
  readonly gitlabConfig?: DeveloperConnectConnectionGitlabConfig;
  /**
  * gitlab_enterprise_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#gitlab_enterprise_config DeveloperConnectConnection#gitlab_enterprise_config}
  */
  readonly gitlabEnterpriseConfig?: DeveloperConnectConnectionGitlabEnterpriseConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#timeouts DeveloperConnectConnection#timeouts}
  */
  readonly timeouts?: DeveloperConnectConnectionTimeouts;
}
export interface DeveloperConnectConnectionInstallationState {
}

export function developerConnectConnectionInstallationStateToTerraform(struct?: DeveloperConnectConnectionInstallationState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function developerConnectConnectionInstallationStateToHclTerraform(struct?: DeveloperConnectConnectionInstallationState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeveloperConnectConnectionInstallationStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeveloperConnectConnectionInstallationState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionInstallationState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_uri - computed: true, optional: false, required: false
  public get actionUri() {
    return this.getStringAttribute('action_uri');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}

export class DeveloperConnectConnectionInstallationStateList extends cdktf.ComplexList {

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
  public get(index: number): DeveloperConnectConnectionInstallationStateOutputReference {
    return new DeveloperConnectConnectionInstallationStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function developerConnectConnectionBitbucketCloudConfigAuthorizerCredentialToTerraform(struct?: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference | DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function developerConnectConnectionBitbucketCloudConfigAuthorizerCredentialToHclTerraform(struct?: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference | DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function developerConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialToTerraform(struct?: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference | DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function developerConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialToHclTerraform(struct?: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference | DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DeveloperConnectConnectionBitbucketCloudConfig {
  /**
  * Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook
  * events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
  * validate and create webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion: string;
  /**
  * Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#workspace DeveloperConnectConnection#workspace}
  */
  readonly workspace: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}
  */
  readonly authorizerCredential: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential;
  /**
  * read_authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}
  */
  readonly readAuthorizerCredential: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential;
}

export function developerConnectConnectionBitbucketCloudConfigToTerraform(struct?: DeveloperConnectConnectionBitbucketCloudConfigOutputReference | DeveloperConnectConnectionBitbucketCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    workspace: cdktf.stringToTerraform(struct!.workspace),
    authorizer_credential: developerConnectConnectionBitbucketCloudConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
    read_authorizer_credential: developerConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialToTerraform(struct!.readAuthorizerCredential),
  }
}


export function developerConnectConnectionBitbucketCloudConfigToHclTerraform(struct?: DeveloperConnectConnectionBitbucketCloudConfigOutputReference | DeveloperConnectConnectionBitbucketCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    webhook_secret_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecretSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace: {
      value: cdktf.stringToHclTerraform(struct!.workspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_credential: {
      value: developerConnectConnectionBitbucketCloudConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialList",
    },
    read_authorizer_credential: {
      value: developerConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialToHclTerraform(struct!.readAuthorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionBitbucketCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionBitbucketCloudConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webhookSecretSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretSecretVersion = this._webhookSecretSecretVersion;
    }
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    if (this._authorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerCredential = this._authorizerCredential?.internalValue;
    }
    if (this._readAuthorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readAuthorizerCredential = this._readAuthorizerCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionBitbucketCloudConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._webhookSecretSecretVersion = undefined;
      this._workspace = undefined;
      this._authorizerCredential.internalValue = undefined;
      this._readAuthorizerCredential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._webhookSecretSecretVersion = value.webhookSecretSecretVersion;
      this._workspace = value.workspace;
      this._authorizerCredential.internalValue = value.authorizerCredential;
      this._readAuthorizerCredential.internalValue = value.readAuthorizerCredential;
    }
  }

  // webhook_secret_secret_version - computed: false, optional: false, required: true
  private _webhookSecretSecretVersion?: string; 
  public get webhookSecretSecretVersion() {
    return this.getStringAttribute('webhook_secret_secret_version');
  }
  public set webhookSecretSecretVersion(value: string) {
    this._webhookSecretSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretSecretVersionInput() {
    return this._webhookSecretSecretVersion;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // authorizer_credential - computed: false, optional: false, required: true
  private _authorizerCredential = new DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }

  // read_authorizer_credential - computed: false, optional: false, required: true
  private _readAuthorizerCredential = new DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference(this, "read_authorizer_credential");
  public get readAuthorizerCredential() {
    return this._readAuthorizerCredential;
  }
  public putReadAuthorizerCredential(value: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential) {
    this._readAuthorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readAuthorizerCredentialInput() {
    return this._readAuthorizerCredential.internalValue;
  }
}
export interface DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function developerConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialToTerraform(struct?: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference | DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function developerConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialToHclTerraform(struct?: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference | DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function developerConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialToTerraform(struct?: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference | DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function developerConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialToHclTerraform(struct?: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference | DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig {
  /**
  * Required. The Service Directory service name.
  * Format:
  * projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}
  */
  readonly service: string;
}

export function developerConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigToTerraform(struct?: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference | DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function developerConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigToHclTerraform(struct?: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference | DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DeveloperConnectConnectionBitbucketDataCenterConfig {
  /**
  * Required. The URI of the Bitbucket Data Center host this connection is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}
  */
  readonly hostUri: string;
  /**
  * Optional. SSL certificate authority to trust when making requests to Bitbucket Data
  * Center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}
  */
  readonly sslCaCertificate?: string;
  /**
  * Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook
  * events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
  * validate webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}
  */
  readonly authorizerCredential: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential;
  /**
  * read_authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}
  */
  readonly readAuthorizerCredential: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}
  */
  readonly serviceDirectoryConfig?: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig;
}

export function developerConnectConnectionBitbucketDataCenterConfigToTerraform(struct?: DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference | DeveloperConnectConnectionBitbucketDataCenterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_uri: cdktf.stringToTerraform(struct!.hostUri),
    ssl_ca_certificate: cdktf.stringToTerraform(struct!.sslCaCertificate),
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    authorizer_credential: developerConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
    read_authorizer_credential: developerConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialToTerraform(struct!.readAuthorizerCredential),
    service_directory_config: developerConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
  }
}


export function developerConnectConnectionBitbucketDataCenterConfigToHclTerraform(struct?: DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference | DeveloperConnectConnectionBitbucketDataCenterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_uri: {
      value: cdktf.stringToHclTerraform(struct!.hostUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_secret_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecretSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_credential: {
      value: developerConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialList",
    },
    read_authorizer_credential: {
      value: developerConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialToHclTerraform(struct!.readAuthorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialList",
    },
    service_directory_config: {
      value: developerConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionBitbucketDataCenterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUri = this._hostUri;
    }
    if (this._sslCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificate = this._sslCaCertificate;
    }
    if (this._webhookSecretSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretSecretVersion = this._webhookSecretSecretVersion;
    }
    if (this._authorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerCredential = this._authorizerCredential?.internalValue;
    }
    if (this._readAuthorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readAuthorizerCredential = this._readAuthorizerCredential?.internalValue;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionBitbucketDataCenterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostUri = undefined;
      this._sslCaCertificate = undefined;
      this._webhookSecretSecretVersion = undefined;
      this._authorizerCredential.internalValue = undefined;
      this._readAuthorizerCredential.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostUri = value.hostUri;
      this._sslCaCertificate = value.sslCaCertificate;
      this._webhookSecretSecretVersion = value.webhookSecretSecretVersion;
      this._authorizerCredential.internalValue = value.authorizerCredential;
      this._readAuthorizerCredential.internalValue = value.readAuthorizerCredential;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
    }
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

  // server_version - computed: true, optional: false, required: false
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }

  // ssl_ca_certificate - computed: false, optional: true, required: false
  private _sslCaCertificate?: string; 
  public get sslCaCertificate() {
    return this.getStringAttribute('ssl_ca_certificate');
  }
  public set sslCaCertificate(value: string) {
    this._sslCaCertificate = value;
  }
  public resetSslCaCertificate() {
    this._sslCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateInput() {
    return this._sslCaCertificate;
  }

  // webhook_secret_secret_version - computed: false, optional: false, required: true
  private _webhookSecretSecretVersion?: string; 
  public get webhookSecretSecretVersion() {
    return this.getStringAttribute('webhook_secret_secret_version');
  }
  public set webhookSecretSecretVersion(value: string) {
    this._webhookSecretSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretSecretVersionInput() {
    return this._webhookSecretSecretVersion;
  }

  // authorizer_credential - computed: false, optional: false, required: true
  private _authorizerCredential = new DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }

  // read_authorizer_credential - computed: false, optional: false, required: true
  private _readAuthorizerCredential = new DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference(this, "read_authorizer_credential");
  public get readAuthorizerCredential() {
    return this._readAuthorizerCredential;
  }
  public putReadAuthorizerCredential(value: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential) {
    this._readAuthorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readAuthorizerCredentialInput() {
    return this._readAuthorizerCredential.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }
}
export interface DeveloperConnectConnectionCryptoKeyConfig {
  /**
  * Required. The name of the key which is used to encrypt/decrypt customer data. For key
  * in Cloud KMS, the key should be in the format of
  * 'projects/* /locations/* /keyRings/* /cryptoKeys/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#key_reference DeveloperConnectConnection#key_reference}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly keyReference: string;
}

export function developerConnectConnectionCryptoKeyConfigToTerraform(struct?: DeveloperConnectConnectionCryptoKeyConfigOutputReference | DeveloperConnectConnectionCryptoKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_reference: cdktf.stringToTerraform(struct!.keyReference),
  }
}


export function developerConnectConnectionCryptoKeyConfigToHclTerraform(struct?: DeveloperConnectConnectionCryptoKeyConfigOutputReference | DeveloperConnectConnectionCryptoKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_reference: {
      value: cdktf.stringToHclTerraform(struct!.keyReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionCryptoKeyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionCryptoKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyReference = this._keyReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionCryptoKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyReference = value.keyReference;
    }
  }

  // key_reference - computed: false, optional: false, required: true
  private _keyReference?: string; 
  public get keyReference() {
    return this.getStringAttribute('key_reference');
  }
  public set keyReference(value: string) {
    this._keyReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyReferenceInput() {
    return this._keyReference;
  }
}
export interface DeveloperConnectConnectionGithubConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the OAuth token that authorizes
  * the connection. Format: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#oauth_token_secret_version DeveloperConnectConnection#oauth_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly oauthTokenSecretVersion: string;
}

export function developerConnectConnectionGithubConfigAuthorizerCredentialToTerraform(struct?: DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference | DeveloperConnectConnectionGithubConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth_token_secret_version: cdktf.stringToTerraform(struct!.oauthTokenSecretVersion),
  }
}


export function developerConnectConnectionGithubConfigAuthorizerCredentialToHclTerraform(struct?: DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference | DeveloperConnectConnectionGithubConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oauth_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.oauthTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionGithubConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauthTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenSecretVersion = this._oauthTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionGithubConfigAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauthTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauthTokenSecretVersion = value.oauthTokenSecretVersion;
    }
  }

  // oauth_token_secret_version - computed: false, optional: false, required: true
  private _oauthTokenSecretVersion?: string; 
  public get oauthTokenSecretVersion() {
    return this.getStringAttribute('oauth_token_secret_version');
  }
  public set oauthTokenSecretVersion(value: string) {
    this._oauthTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenSecretVersionInput() {
    return this._oauthTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DeveloperConnectConnectionGithubConfig {
  /**
  * Optional. GitHub App installation id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#app_installation_id DeveloperConnectConnection#app_installation_id}
  */
  readonly appInstallationId?: string;
  /**
  * Required. Immutable. The GitHub Application that was installed to the GitHub user or
  * organization.
  * Possible values:
  * GIT_HUB_APP_UNSPECIFIED
  * DEVELOPER_CONNECT
  * FIREBASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#github_app DeveloperConnectConnection#github_app}
  */
  readonly githubApp: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}
  */
  readonly authorizerCredential?: DeveloperConnectConnectionGithubConfigAuthorizerCredential;
}

export function developerConnectConnectionGithubConfigToTerraform(struct?: DeveloperConnectConnectionGithubConfigOutputReference | DeveloperConnectConnectionGithubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_installation_id: cdktf.stringToTerraform(struct!.appInstallationId),
    github_app: cdktf.stringToTerraform(struct!.githubApp),
    authorizer_credential: developerConnectConnectionGithubConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
  }
}


export function developerConnectConnectionGithubConfigToHclTerraform(struct?: DeveloperConnectConnectionGithubConfigOutputReference | DeveloperConnectConnectionGithubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_installation_id: {
      value: cdktf.stringToHclTerraform(struct!.appInstallationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_app: {
      value: cdktf.stringToHclTerraform(struct!.githubApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_credential: {
      value: developerConnectConnectionGithubConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectConnectionGithubConfigAuthorizerCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionGithubConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionGithubConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appInstallationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appInstallationId = this._appInstallationId;
    }
    if (this._githubApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubApp = this._githubApp;
    }
    if (this._authorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerCredential = this._authorizerCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionGithubConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appInstallationId = undefined;
      this._githubApp = undefined;
      this._authorizerCredential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appInstallationId = value.appInstallationId;
      this._githubApp = value.githubApp;
      this._authorizerCredential.internalValue = value.authorizerCredential;
    }
  }

  // app_installation_id - computed: true, optional: true, required: false
  private _appInstallationId?: string; 
  public get appInstallationId() {
    return this.getStringAttribute('app_installation_id');
  }
  public set appInstallationId(value: string) {
    this._appInstallationId = value;
  }
  public resetAppInstallationId() {
    this._appInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstallationIdInput() {
    return this._appInstallationId;
  }

  // github_app - computed: false, optional: false, required: true
  private _githubApp?: string; 
  public get githubApp() {
    return this.getStringAttribute('github_app');
  }
  public set githubApp(value: string) {
    this._githubApp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppInput() {
    return this._githubApp;
  }

  // installation_uri - computed: true, optional: false, required: false
  public get installationUri() {
    return this.getStringAttribute('installation_uri');
  }

  // authorizer_credential - computed: false, optional: true, required: false
  private _authorizerCredential = new DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: DeveloperConnectConnectionGithubConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  public resetAuthorizerCredential() {
    this._authorizerCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }
}
export interface DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig {
  /**
  * Required. The Service Directory service name.
  * Format:
  * projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}
  */
  readonly service: string;
}

export function developerConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigToTerraform(struct?: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference | DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function developerConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigToHclTerraform(struct?: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference | DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DeveloperConnectConnectionGithubEnterpriseConfig {
  /**
  * Optional. ID of the GitHub App created from the manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#app_id DeveloperConnectConnection#app_id}
  */
  readonly appId?: string;
  /**
  * Optional. ID of the installation of the GitHub App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#app_installation_id DeveloperConnectConnection#app_installation_id}
  */
  readonly appInstallationId?: string;
  /**
  * Required. The URI of the GitHub Enterprise host this connection is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}
  */
  readonly hostUri: string;
  /**
  * Optional. SecretManager resource containing the private key of the GitHub App,
  * formatted as 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#private_key_secret_version DeveloperConnectConnection#private_key_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly privateKeySecretVersion?: string;
  /**
  * Optional. SSL certificate to use for requests to GitHub Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}
  */
  readonly sslCaCertificate?: string;
  /**
  * Optional. SecretManager resource containing the webhook secret of the GitHub App,
  * formatted as 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion?: string;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}
  */
  readonly serviceDirectoryConfig?: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig;
}

export function developerConnectConnectionGithubEnterpriseConfigToTerraform(struct?: DeveloperConnectConnectionGithubEnterpriseConfigOutputReference | DeveloperConnectConnectionGithubEnterpriseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_installation_id: cdktf.stringToTerraform(struct!.appInstallationId),
    host_uri: cdktf.stringToTerraform(struct!.hostUri),
    private_key_secret_version: cdktf.stringToTerraform(struct!.privateKeySecretVersion),
    ssl_ca_certificate: cdktf.stringToTerraform(struct!.sslCaCertificate),
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    service_directory_config: developerConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
  }
}


export function developerConnectConnectionGithubEnterpriseConfigToHclTerraform(struct?: DeveloperConnectConnectionGithubEnterpriseConfigOutputReference | DeveloperConnectConnectionGithubEnterpriseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_installation_id: {
      value: cdktf.stringToHclTerraform(struct!.appInstallationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_uri: {
      value: cdktf.stringToHclTerraform(struct!.hostUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.privateKeySecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_secret_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecretSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_directory_config: {
      value: developerConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionGithubEnterpriseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionGithubEnterpriseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appInstallationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appInstallationId = this._appInstallationId;
    }
    if (this._hostUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUri = this._hostUri;
    }
    if (this._privateKeySecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeySecretVersion = this._privateKeySecretVersion;
    }
    if (this._sslCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificate = this._sslCaCertificate;
    }
    if (this._webhookSecretSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretSecretVersion = this._webhookSecretSecretVersion;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionGithubEnterpriseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._appInstallationId = undefined;
      this._hostUri = undefined;
      this._privateKeySecretVersion = undefined;
      this._sslCaCertificate = undefined;
      this._webhookSecretSecretVersion = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._appInstallationId = value.appInstallationId;
      this._hostUri = value.hostUri;
      this._privateKeySecretVersion = value.privateKeySecretVersion;
      this._sslCaCertificate = value.sslCaCertificate;
      this._webhookSecretSecretVersion = value.webhookSecretSecretVersion;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
    }
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_installation_id - computed: false, optional: true, required: false
  private _appInstallationId?: string; 
  public get appInstallationId() {
    return this.getStringAttribute('app_installation_id');
  }
  public set appInstallationId(value: string) {
    this._appInstallationId = value;
  }
  public resetAppInstallationId() {
    this._appInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstallationIdInput() {
    return this._appInstallationId;
  }

  // app_slug - computed: true, optional: false, required: false
  public get appSlug() {
    return this.getStringAttribute('app_slug');
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

  // installation_uri - computed: true, optional: false, required: false
  public get installationUri() {
    return this.getStringAttribute('installation_uri');
  }

  // private_key_secret_version - computed: false, optional: true, required: false
  private _privateKeySecretVersion?: string; 
  public get privateKeySecretVersion() {
    return this.getStringAttribute('private_key_secret_version');
  }
  public set privateKeySecretVersion(value: string) {
    this._privateKeySecretVersion = value;
  }
  public resetPrivateKeySecretVersion() {
    this._privateKeySecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeySecretVersionInput() {
    return this._privateKeySecretVersion;
  }

  // server_version - computed: true, optional: false, required: false
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }

  // ssl_ca_certificate - computed: false, optional: true, required: false
  private _sslCaCertificate?: string; 
  public get sslCaCertificate() {
    return this.getStringAttribute('ssl_ca_certificate');
  }
  public set sslCaCertificate(value: string) {
    this._sslCaCertificate = value;
  }
  public resetSslCaCertificate() {
    this._sslCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateInput() {
    return this._sslCaCertificate;
  }

  // webhook_secret_secret_version - computed: false, optional: true, required: false
  private _webhookSecretSecretVersion?: string; 
  public get webhookSecretSecretVersion() {
    return this.getStringAttribute('webhook_secret_secret_version');
  }
  public set webhookSecretSecretVersion(value: string) {
    this._webhookSecretSecretVersion = value;
  }
  public resetWebhookSecretSecretVersion() {
    this._webhookSecretSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretSecretVersionInput() {
    return this._webhookSecretSecretVersion;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }
}
export interface DeveloperConnectConnectionGitlabConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function developerConnectConnectionGitlabConfigAuthorizerCredentialToTerraform(struct?: DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference | DeveloperConnectConnectionGitlabConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function developerConnectConnectionGitlabConfigAuthorizerCredentialToHclTerraform(struct?: DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference | DeveloperConnectConnectionGitlabConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionGitlabConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionGitlabConfigAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function developerConnectConnectionGitlabConfigReadAuthorizerCredentialToTerraform(struct?: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference | DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function developerConnectConnectionGitlabConfigReadAuthorizerCredentialToHclTerraform(struct?: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference | DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DeveloperConnectConnectionGitlabConfig {
  /**
  * Required. Immutable. SecretManager resource containing the webhook secret of a GitLab project,
  * formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
  * webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}
  */
  readonly authorizerCredential: DeveloperConnectConnectionGitlabConfigAuthorizerCredential;
  /**
  * read_authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}
  */
  readonly readAuthorizerCredential: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential;
}

export function developerConnectConnectionGitlabConfigToTerraform(struct?: DeveloperConnectConnectionGitlabConfigOutputReference | DeveloperConnectConnectionGitlabConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    authorizer_credential: developerConnectConnectionGitlabConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
    read_authorizer_credential: developerConnectConnectionGitlabConfigReadAuthorizerCredentialToTerraform(struct!.readAuthorizerCredential),
  }
}


export function developerConnectConnectionGitlabConfigToHclTerraform(struct?: DeveloperConnectConnectionGitlabConfigOutputReference | DeveloperConnectConnectionGitlabConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    webhook_secret_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecretSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_credential: {
      value: developerConnectConnectionGitlabConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectConnectionGitlabConfigAuthorizerCredentialList",
    },
    read_authorizer_credential: {
      value: developerConnectConnectionGitlabConfigReadAuthorizerCredentialToHclTerraform(struct!.readAuthorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionGitlabConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionGitlabConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webhookSecretSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretSecretVersion = this._webhookSecretSecretVersion;
    }
    if (this._authorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerCredential = this._authorizerCredential?.internalValue;
    }
    if (this._readAuthorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readAuthorizerCredential = this._readAuthorizerCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionGitlabConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._webhookSecretSecretVersion = undefined;
      this._authorizerCredential.internalValue = undefined;
      this._readAuthorizerCredential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._webhookSecretSecretVersion = value.webhookSecretSecretVersion;
      this._authorizerCredential.internalValue = value.authorizerCredential;
      this._readAuthorizerCredential.internalValue = value.readAuthorizerCredential;
    }
  }

  // webhook_secret_secret_version - computed: false, optional: false, required: true
  private _webhookSecretSecretVersion?: string; 
  public get webhookSecretSecretVersion() {
    return this.getStringAttribute('webhook_secret_secret_version');
  }
  public set webhookSecretSecretVersion(value: string) {
    this._webhookSecretSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretSecretVersionInput() {
    return this._webhookSecretSecretVersion;
  }

  // authorizer_credential - computed: false, optional: false, required: true
  private _authorizerCredential = new DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: DeveloperConnectConnectionGitlabConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }

  // read_authorizer_credential - computed: false, optional: false, required: true
  private _readAuthorizerCredential = new DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference(this, "read_authorizer_credential");
  public get readAuthorizerCredential() {
    return this._readAuthorizerCredential;
  }
  public putReadAuthorizerCredential(value: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential) {
    this._readAuthorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readAuthorizerCredentialInput() {
    return this._readAuthorizerCredential.internalValue;
  }
}
export interface DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function developerConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialToTerraform(struct?: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference | DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function developerConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialToHclTerraform(struct?: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference | DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function developerConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialToTerraform(struct?: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference | DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function developerConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialToHclTerraform(struct?: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference | DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig {
  /**
  * Required. The Service Directory service name.
  * Format:
  * projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}
  */
  readonly service: string;
}

export function developerConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigToTerraform(struct?: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference | DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function developerConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigToHclTerraform(struct?: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference | DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DeveloperConnectConnectionGitlabEnterpriseConfig {
  /**
  * Required. The URI of the GitLab Enterprise host this connection is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}
  */
  readonly hostUri: string;
  /**
  * Optional. SSL Certificate Authority certificate to use for requests to GitLab
  * Enterprise instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}
  */
  readonly sslCaCertificate?: string;
  /**
  * Required. Immutable. SecretManager resource containing the webhook secret of a GitLab project,
  * formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
  * webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}
  */
  readonly authorizerCredential: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential;
  /**
  * read_authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}
  */
  readonly readAuthorizerCredential: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}
  */
  readonly serviceDirectoryConfig?: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig;
}

export function developerConnectConnectionGitlabEnterpriseConfigToTerraform(struct?: DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference | DeveloperConnectConnectionGitlabEnterpriseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_uri: cdktf.stringToTerraform(struct!.hostUri),
    ssl_ca_certificate: cdktf.stringToTerraform(struct!.sslCaCertificate),
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    authorizer_credential: developerConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
    read_authorizer_credential: developerConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialToTerraform(struct!.readAuthorizerCredential),
    service_directory_config: developerConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
  }
}


export function developerConnectConnectionGitlabEnterpriseConfigToHclTerraform(struct?: DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference | DeveloperConnectConnectionGitlabEnterpriseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_uri: {
      value: cdktf.stringToHclTerraform(struct!.hostUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_secret_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecretSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_credential: {
      value: developerConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialList",
    },
    read_authorizer_credential: {
      value: developerConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialToHclTerraform(struct!.readAuthorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialList",
    },
    service_directory_config: {
      value: developerConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectConnectionGitlabEnterpriseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUri = this._hostUri;
    }
    if (this._sslCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificate = this._sslCaCertificate;
    }
    if (this._webhookSecretSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretSecretVersion = this._webhookSecretSecretVersion;
    }
    if (this._authorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerCredential = this._authorizerCredential?.internalValue;
    }
    if (this._readAuthorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readAuthorizerCredential = this._readAuthorizerCredential?.internalValue;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectConnectionGitlabEnterpriseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostUri = undefined;
      this._sslCaCertificate = undefined;
      this._webhookSecretSecretVersion = undefined;
      this._authorizerCredential.internalValue = undefined;
      this._readAuthorizerCredential.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostUri = value.hostUri;
      this._sslCaCertificate = value.sslCaCertificate;
      this._webhookSecretSecretVersion = value.webhookSecretSecretVersion;
      this._authorizerCredential.internalValue = value.authorizerCredential;
      this._readAuthorizerCredential.internalValue = value.readAuthorizerCredential;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
    }
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

  // server_version - computed: true, optional: false, required: false
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }

  // ssl_ca_certificate - computed: false, optional: true, required: false
  private _sslCaCertificate?: string; 
  public get sslCaCertificate() {
    return this.getStringAttribute('ssl_ca_certificate');
  }
  public set sslCaCertificate(value: string) {
    this._sslCaCertificate = value;
  }
  public resetSslCaCertificate() {
    this._sslCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateInput() {
    return this._sslCaCertificate;
  }

  // webhook_secret_secret_version - computed: false, optional: false, required: true
  private _webhookSecretSecretVersion?: string; 
  public get webhookSecretSecretVersion() {
    return this.getStringAttribute('webhook_secret_secret_version');
  }
  public set webhookSecretSecretVersion(value: string) {
    this._webhookSecretSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretSecretVersionInput() {
    return this._webhookSecretSecretVersion;
  }

  // authorizer_credential - computed: false, optional: false, required: true
  private _authorizerCredential = new DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }

  // read_authorizer_credential - computed: false, optional: false, required: true
  private _readAuthorizerCredential = new DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference(this, "read_authorizer_credential");
  public get readAuthorizerCredential() {
    return this._readAuthorizerCredential;
  }
  public putReadAuthorizerCredential(value: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential) {
    this._readAuthorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readAuthorizerCredentialInput() {
    return this._readAuthorizerCredential.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }
}
export interface DeveloperConnectConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#create DeveloperConnectConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#delete DeveloperConnectConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#update DeveloperConnectConnection#update}
  */
  readonly update?: string;
}

export function developerConnectConnectionTimeoutsToTerraform(struct?: DeveloperConnectConnectionTimeouts | cdktf.IResolvable): any {
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


export function developerConnectConnectionTimeoutsToHclTerraform(struct?: DeveloperConnectConnectionTimeouts | cdktf.IResolvable): any {
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

export class DeveloperConnectConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeveloperConnectConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeveloperConnectConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection google_developer_connect_connection}
*/
export class DeveloperConnectConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_developer_connect_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeveloperConnectConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeveloperConnectConnection to import
  * @param importFromId The id of the existing DeveloperConnectConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeveloperConnectConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_developer_connect_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/developer_connect_connection google_developer_connect_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeveloperConnectConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DeveloperConnectConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_developer_connect_connection',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.44.0',
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
    this._annotations = config.annotations;
    this._connectionId = config.connectionId;
    this._disabled = config.disabled;
    this._etag = config.etag;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._bitbucketCloudConfig.internalValue = config.bitbucketCloudConfig;
    this._bitbucketDataCenterConfig.internalValue = config.bitbucketDataCenterConfig;
    this._cryptoKeyConfig.internalValue = config.cryptoKeyConfig;
    this._githubConfig.internalValue = config.githubConfig;
    this._githubEnterpriseConfig.internalValue = config.githubEnterpriseConfig;
    this._gitlabConfig.internalValue = config.gitlabConfig;
    this._gitlabEnterpriseConfig.internalValue = config.gitlabEnterpriseConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // installation_state - computed: true, optional: false, required: false
  private _installationState = new DeveloperConnectConnectionInstallationStateList(this, "installation_state", false);
  public get installationState() {
    return this._installationState;
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // bitbucket_cloud_config - computed: false, optional: true, required: false
  private _bitbucketCloudConfig = new DeveloperConnectConnectionBitbucketCloudConfigOutputReference(this, "bitbucket_cloud_config");
  public get bitbucketCloudConfig() {
    return this._bitbucketCloudConfig;
  }
  public putBitbucketCloudConfig(value: DeveloperConnectConnectionBitbucketCloudConfig) {
    this._bitbucketCloudConfig.internalValue = value;
  }
  public resetBitbucketCloudConfig() {
    this._bitbucketCloudConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketCloudConfigInput() {
    return this._bitbucketCloudConfig.internalValue;
  }

  // bitbucket_data_center_config - computed: false, optional: true, required: false
  private _bitbucketDataCenterConfig = new DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference(this, "bitbucket_data_center_config");
  public get bitbucketDataCenterConfig() {
    return this._bitbucketDataCenterConfig;
  }
  public putBitbucketDataCenterConfig(value: DeveloperConnectConnectionBitbucketDataCenterConfig) {
    this._bitbucketDataCenterConfig.internalValue = value;
  }
  public resetBitbucketDataCenterConfig() {
    this._bitbucketDataCenterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketDataCenterConfigInput() {
    return this._bitbucketDataCenterConfig.internalValue;
  }

  // crypto_key_config - computed: false, optional: true, required: false
  private _cryptoKeyConfig = new DeveloperConnectConnectionCryptoKeyConfigOutputReference(this, "crypto_key_config");
  public get cryptoKeyConfig() {
    return this._cryptoKeyConfig;
  }
  public putCryptoKeyConfig(value: DeveloperConnectConnectionCryptoKeyConfig) {
    this._cryptoKeyConfig.internalValue = value;
  }
  public resetCryptoKeyConfig() {
    this._cryptoKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyConfigInput() {
    return this._cryptoKeyConfig.internalValue;
  }

  // github_config - computed: false, optional: true, required: false
  private _githubConfig = new DeveloperConnectConnectionGithubConfigOutputReference(this, "github_config");
  public get githubConfig() {
    return this._githubConfig;
  }
  public putGithubConfig(value: DeveloperConnectConnectionGithubConfig) {
    this._githubConfig.internalValue = value;
  }
  public resetGithubConfig() {
    this._githubConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubConfigInput() {
    return this._githubConfig.internalValue;
  }

  // github_enterprise_config - computed: false, optional: true, required: false
  private _githubEnterpriseConfig = new DeveloperConnectConnectionGithubEnterpriseConfigOutputReference(this, "github_enterprise_config");
  public get githubEnterpriseConfig() {
    return this._githubEnterpriseConfig;
  }
  public putGithubEnterpriseConfig(value: DeveloperConnectConnectionGithubEnterpriseConfig) {
    this._githubEnterpriseConfig.internalValue = value;
  }
  public resetGithubEnterpriseConfig() {
    this._githubEnterpriseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubEnterpriseConfigInput() {
    return this._githubEnterpriseConfig.internalValue;
  }

  // gitlab_config - computed: false, optional: true, required: false
  private _gitlabConfig = new DeveloperConnectConnectionGitlabConfigOutputReference(this, "gitlab_config");
  public get gitlabConfig() {
    return this._gitlabConfig;
  }
  public putGitlabConfig(value: DeveloperConnectConnectionGitlabConfig) {
    this._gitlabConfig.internalValue = value;
  }
  public resetGitlabConfig() {
    this._gitlabConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabConfigInput() {
    return this._gitlabConfig.internalValue;
  }

  // gitlab_enterprise_config - computed: false, optional: true, required: false
  private _gitlabEnterpriseConfig = new DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference(this, "gitlab_enterprise_config");
  public get gitlabEnterpriseConfig() {
    return this._gitlabEnterpriseConfig;
  }
  public putGitlabEnterpriseConfig(value: DeveloperConnectConnectionGitlabEnterpriseConfig) {
    this._gitlabEnterpriseConfig.internalValue = value;
  }
  public resetGitlabEnterpriseConfig() {
    this._gitlabEnterpriseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabEnterpriseConfigInput() {
    return this._gitlabEnterpriseConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DeveloperConnectConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DeveloperConnectConnectionTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      etag: cdktf.stringToTerraform(this._etag),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      bitbucket_cloud_config: developerConnectConnectionBitbucketCloudConfigToTerraform(this._bitbucketCloudConfig.internalValue),
      bitbucket_data_center_config: developerConnectConnectionBitbucketDataCenterConfigToTerraform(this._bitbucketDataCenterConfig.internalValue),
      crypto_key_config: developerConnectConnectionCryptoKeyConfigToTerraform(this._cryptoKeyConfig.internalValue),
      github_config: developerConnectConnectionGithubConfigToTerraform(this._githubConfig.internalValue),
      github_enterprise_config: developerConnectConnectionGithubEnterpriseConfigToTerraform(this._githubEnterpriseConfig.internalValue),
      gitlab_config: developerConnectConnectionGitlabConfigToTerraform(this._gitlabConfig.internalValue),
      gitlab_enterprise_config: developerConnectConnectionGitlabEnterpriseConfigToTerraform(this._gitlabEnterpriseConfig.internalValue),
      timeouts: developerConnectConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      bitbucket_cloud_config: {
        value: developerConnectConnectionBitbucketCloudConfigToHclTerraform(this._bitbucketCloudConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeveloperConnectConnectionBitbucketCloudConfigList",
      },
      bitbucket_data_center_config: {
        value: developerConnectConnectionBitbucketDataCenterConfigToHclTerraform(this._bitbucketDataCenterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeveloperConnectConnectionBitbucketDataCenterConfigList",
      },
      crypto_key_config: {
        value: developerConnectConnectionCryptoKeyConfigToHclTerraform(this._cryptoKeyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeveloperConnectConnectionCryptoKeyConfigList",
      },
      github_config: {
        value: developerConnectConnectionGithubConfigToHclTerraform(this._githubConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeveloperConnectConnectionGithubConfigList",
      },
      github_enterprise_config: {
        value: developerConnectConnectionGithubEnterpriseConfigToHclTerraform(this._githubEnterpriseConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeveloperConnectConnectionGithubEnterpriseConfigList",
      },
      gitlab_config: {
        value: developerConnectConnectionGitlabConfigToHclTerraform(this._gitlabConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeveloperConnectConnectionGitlabConfigList",
      },
      gitlab_enterprise_config: {
        value: developerConnectConnectionGitlabEnterpriseConfigToHclTerraform(this._gitlabEnterpriseConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeveloperConnectConnectionGitlabEnterpriseConfigList",
      },
      timeouts: {
        value: developerConnectConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeveloperConnectConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
