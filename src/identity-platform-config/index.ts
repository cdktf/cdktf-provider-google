/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityPlatformConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of domains authorized for OAuth redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#authorized_domains IdentityPlatformConfig#authorized_domains}
  */
  readonly authorizedDomains?: string[];
  /**
  * Whether anonymous users will be auto-deleted after a period of 30 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#autodelete_anonymous_users IdentityPlatformConfig#autodelete_anonymous_users}
  */
  readonly autodeleteAnonymousUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#id IdentityPlatformConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#project IdentityPlatformConfig#project}
  */
  readonly project?: string;
  /**
  * blocking_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#blocking_functions IdentityPlatformConfig#blocking_functions}
  */
  readonly blockingFunctions?: IdentityPlatformConfigBlockingFunctions;
  /**
  * client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#client IdentityPlatformConfig#client}
  */
  readonly client?: IdentityPlatformConfigClient;
  /**
  * mfa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#mfa IdentityPlatformConfig#mfa}
  */
  readonly mfa?: IdentityPlatformConfigMfa;
  /**
  * monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#monitoring IdentityPlatformConfig#monitoring}
  */
  readonly monitoring?: IdentityPlatformConfigMonitoring;
  /**
  * multi_tenant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#multi_tenant IdentityPlatformConfig#multi_tenant}
  */
  readonly multiTenant?: IdentityPlatformConfigMultiTenant;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#quota IdentityPlatformConfig#quota}
  */
  readonly quota?: IdentityPlatformConfigQuota;
  /**
  * sign_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#sign_in IdentityPlatformConfig#sign_in}
  */
  readonly signIn?: IdentityPlatformConfigSignIn;
  /**
  * sms_region_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#sms_region_config IdentityPlatformConfig#sms_region_config}
  */
  readonly smsRegionConfig?: IdentityPlatformConfigSmsRegionConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#timeouts IdentityPlatformConfig#timeouts}
  */
  readonly timeouts?: IdentityPlatformConfigTimeouts;
}
export interface IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials {
  /**
  * Whether to pass the user's OAuth identity provider's access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#access_token IdentityPlatformConfig#access_token}
  */
  readonly accessToken?: boolean | cdktf.IResolvable;
  /**
  * Whether to pass the user's OIDC identity provider's ID token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#id_token IdentityPlatformConfig#id_token}
  */
  readonly idToken?: boolean | cdktf.IResolvable;
  /**
  * Whether to pass the user's OAuth identity provider's refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#refresh_token IdentityPlatformConfig#refresh_token}
  */
  readonly refreshToken?: boolean | cdktf.IResolvable;
}

export function identityPlatformConfigBlockingFunctionsForwardInboundCredentialsToTerraform(struct?: IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference | IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.booleanToTerraform(struct!.accessToken),
    id_token: cdktf.booleanToTerraform(struct!.idToken),
    refresh_token: cdktf.booleanToTerraform(struct!.refreshToken),
  }
}


export function identityPlatformConfigBlockingFunctionsForwardInboundCredentialsToHclTerraform(struct?: IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference | IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.booleanToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id_token: {
      value: cdktf.booleanToHclTerraform(struct!.idToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_token: {
      value: cdktf.booleanToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._idToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.idToken = this._idToken;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._idToken = undefined;
      this._refreshToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._idToken = value.idToken;
      this._refreshToken = value.refreshToken;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: boolean | cdktf.IResolvable; 
  public get accessToken() {
    return this.getBooleanAttribute('access_token');
  }
  public set accessToken(value: boolean | cdktf.IResolvable) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // id_token - computed: false, optional: true, required: false
  private _idToken?: boolean | cdktf.IResolvable; 
  public get idToken() {
    return this.getBooleanAttribute('id_token');
  }
  public set idToken(value: boolean | cdktf.IResolvable) {
    this._idToken = value;
  }
  public resetIdToken() {
    this._idToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenInput() {
    return this._idToken;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: boolean | cdktf.IResolvable; 
  public get refreshToken() {
    return this.getBooleanAttribute('refresh_token');
  }
  public set refreshToken(value: boolean | cdktf.IResolvable) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }
}
export interface IdentityPlatformConfigBlockingFunctionsTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#event_type IdentityPlatformConfig#event_type}
  */
  readonly eventType: string;
  /**
  * HTTP URI trigger for the Cloud Function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#function_uri IdentityPlatformConfig#function_uri}
  */
  readonly functionUri: string;
}

export function identityPlatformConfigBlockingFunctionsTriggersToTerraform(struct?: IdentityPlatformConfigBlockingFunctionsTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    function_uri: cdktf.stringToTerraform(struct!.functionUri),
  }
}


export function identityPlatformConfigBlockingFunctionsTriggersToHclTerraform(struct?: IdentityPlatformConfigBlockingFunctionsTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_uri: {
      value: cdktf.stringToHclTerraform(struct!.functionUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigBlockingFunctionsTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityPlatformConfigBlockingFunctionsTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._functionUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionUri = this._functionUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigBlockingFunctionsTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._functionUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._functionUri = value.functionUri;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // function_uri - computed: false, optional: false, required: true
  private _functionUri?: string; 
  public get functionUri() {
    return this.getStringAttribute('function_uri');
  }
  public set functionUri(value: string) {
    this._functionUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionUriInput() {
    return this._functionUri;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class IdentityPlatformConfigBlockingFunctionsTriggersList extends cdktf.ComplexList {
  public internalValue? : IdentityPlatformConfigBlockingFunctionsTriggers[] | cdktf.IResolvable

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
  public get(index: number): IdentityPlatformConfigBlockingFunctionsTriggersOutputReference {
    return new IdentityPlatformConfigBlockingFunctionsTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityPlatformConfigBlockingFunctions {
  /**
  * forward_inbound_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#forward_inbound_credentials IdentityPlatformConfig#forward_inbound_credentials}
  */
  readonly forwardInboundCredentials?: IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials;
  /**
  * triggers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#triggers IdentityPlatformConfig#triggers}
  */
  readonly triggers: IdentityPlatformConfigBlockingFunctionsTriggers[] | cdktf.IResolvable;
}

export function identityPlatformConfigBlockingFunctionsToTerraform(struct?: IdentityPlatformConfigBlockingFunctionsOutputReference | IdentityPlatformConfigBlockingFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_inbound_credentials: identityPlatformConfigBlockingFunctionsForwardInboundCredentialsToTerraform(struct!.forwardInboundCredentials),
    triggers: cdktf.listMapper(identityPlatformConfigBlockingFunctionsTriggersToTerraform, true)(struct!.triggers),
  }
}


export function identityPlatformConfigBlockingFunctionsToHclTerraform(struct?: IdentityPlatformConfigBlockingFunctionsOutputReference | IdentityPlatformConfigBlockingFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_inbound_credentials: {
      value: identityPlatformConfigBlockingFunctionsForwardInboundCredentialsToHclTerraform(struct!.forwardInboundCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsList",
    },
    triggers: {
      value: cdktf.listMapperHcl(identityPlatformConfigBlockingFunctionsTriggersToHclTerraform, true)(struct!.triggers),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityPlatformConfigBlockingFunctionsTriggersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigBlockingFunctionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigBlockingFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardInboundCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardInboundCredentials = this._forwardInboundCredentials?.internalValue;
    }
    if (this._triggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggers = this._triggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigBlockingFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardInboundCredentials.internalValue = undefined;
      this._triggers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardInboundCredentials.internalValue = value.forwardInboundCredentials;
      this._triggers.internalValue = value.triggers;
    }
  }

  // forward_inbound_credentials - computed: false, optional: true, required: false
  private _forwardInboundCredentials = new IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference(this, "forward_inbound_credentials");
  public get forwardInboundCredentials() {
    return this._forwardInboundCredentials;
  }
  public putForwardInboundCredentials(value: IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials) {
    this._forwardInboundCredentials.internalValue = value;
  }
  public resetForwardInboundCredentials() {
    this._forwardInboundCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInboundCredentialsInput() {
    return this._forwardInboundCredentials.internalValue;
  }

  // triggers - computed: false, optional: false, required: true
  private _triggers = new IdentityPlatformConfigBlockingFunctionsTriggersList(this, "triggers", true);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: IdentityPlatformConfigBlockingFunctionsTriggers[] | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }
}
export interface IdentityPlatformConfigClientPermissions {
  /**
  * When true, end users cannot delete their account on the associated project through any of our API methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#disabled_user_deletion IdentityPlatformConfig#disabled_user_deletion}
  */
  readonly disabledUserDeletion?: boolean | cdktf.IResolvable;
  /**
  * When true, end users cannot sign up for a new account on the associated project through any of our API methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#disabled_user_signup IdentityPlatformConfig#disabled_user_signup}
  */
  readonly disabledUserSignup?: boolean | cdktf.IResolvable;
}

export function identityPlatformConfigClientPermissionsToTerraform(struct?: IdentityPlatformConfigClientPermissionsOutputReference | IdentityPlatformConfigClientPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_user_deletion: cdktf.booleanToTerraform(struct!.disabledUserDeletion),
    disabled_user_signup: cdktf.booleanToTerraform(struct!.disabledUserSignup),
  }
}


export function identityPlatformConfigClientPermissionsToHclTerraform(struct?: IdentityPlatformConfigClientPermissionsOutputReference | IdentityPlatformConfigClientPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled_user_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.disabledUserDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled_user_signup: {
      value: cdktf.booleanToHclTerraform(struct!.disabledUserSignup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigClientPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigClientPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledUserDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledUserDeletion = this._disabledUserDeletion;
    }
    if (this._disabledUserSignup !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledUserSignup = this._disabledUserSignup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigClientPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabledUserDeletion = undefined;
      this._disabledUserSignup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabledUserDeletion = value.disabledUserDeletion;
      this._disabledUserSignup = value.disabledUserSignup;
    }
  }

  // disabled_user_deletion - computed: false, optional: true, required: false
  private _disabledUserDeletion?: boolean | cdktf.IResolvable; 
  public get disabledUserDeletion() {
    return this.getBooleanAttribute('disabled_user_deletion');
  }
  public set disabledUserDeletion(value: boolean | cdktf.IResolvable) {
    this._disabledUserDeletion = value;
  }
  public resetDisabledUserDeletion() {
    this._disabledUserDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledUserDeletionInput() {
    return this._disabledUserDeletion;
  }

  // disabled_user_signup - computed: false, optional: true, required: false
  private _disabledUserSignup?: boolean | cdktf.IResolvable; 
  public get disabledUserSignup() {
    return this.getBooleanAttribute('disabled_user_signup');
  }
  public set disabledUserSignup(value: boolean | cdktf.IResolvable) {
    this._disabledUserSignup = value;
  }
  public resetDisabledUserSignup() {
    this._disabledUserSignup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledUserSignupInput() {
    return this._disabledUserSignup;
  }
}
export interface IdentityPlatformConfigClient {
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#permissions IdentityPlatformConfig#permissions}
  */
  readonly permissions?: IdentityPlatformConfigClientPermissions;
}

export function identityPlatformConfigClientToTerraform(struct?: IdentityPlatformConfigClientOutputReference | IdentityPlatformConfigClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permissions: identityPlatformConfigClientPermissionsToTerraform(struct!.permissions),
  }
}


export function identityPlatformConfigClientToHclTerraform(struct?: IdentityPlatformConfigClientOutputReference | IdentityPlatformConfigClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permissions: {
      value: identityPlatformConfigClientPermissionsToHclTerraform(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityPlatformConfigClientPermissionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissions.internalValue = value.permissions;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // firebase_subdomain - computed: true, optional: false, required: false
  public get firebaseSubdomain() {
    return this.getStringAttribute('firebase_subdomain');
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new IdentityPlatformConfigClientPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: IdentityPlatformConfigClientPermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }
}
export interface IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig {
  /**
  * The allowed number of adjacent intervals that will be used for verification to avoid clock skew.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#adjacent_intervals IdentityPlatformConfig#adjacent_intervals}
  */
  readonly adjacentIntervals?: number;
}

export function identityPlatformConfigMfaProviderConfigsTotpProviderConfigToTerraform(struct?: IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference | IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjacent_intervals: cdktf.numberToTerraform(struct!.adjacentIntervals),
  }
}


export function identityPlatformConfigMfaProviderConfigsTotpProviderConfigToHclTerraform(struct?: IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference | IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjacent_intervals: {
      value: cdktf.numberToHclTerraform(struct!.adjacentIntervals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjacentIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjacentIntervals = this._adjacentIntervals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjacentIntervals = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjacentIntervals = value.adjacentIntervals;
    }
  }

  // adjacent_intervals - computed: false, optional: true, required: false
  private _adjacentIntervals?: number; 
  public get adjacentIntervals() {
    return this.getNumberAttribute('adjacent_intervals');
  }
  public set adjacentIntervals(value: number) {
    this._adjacentIntervals = value;
  }
  public resetAdjacentIntervals() {
    this._adjacentIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjacentIntervalsInput() {
    return this._adjacentIntervals;
  }
}
export interface IdentityPlatformConfigMfaProviderConfigs {
  /**
  * Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#state IdentityPlatformConfig#state}
  */
  readonly state?: string;
  /**
  * totp_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#totp_provider_config IdentityPlatformConfig#totp_provider_config}
  */
  readonly totpProviderConfig?: IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig;
}

export function identityPlatformConfigMfaProviderConfigsToTerraform(struct?: IdentityPlatformConfigMfaProviderConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
    totp_provider_config: identityPlatformConfigMfaProviderConfigsTotpProviderConfigToTerraform(struct!.totpProviderConfig),
  }
}


export function identityPlatformConfigMfaProviderConfigsToHclTerraform(struct?: IdentityPlatformConfigMfaProviderConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    totp_provider_config: {
      value: identityPlatformConfigMfaProviderConfigsTotpProviderConfigToHclTerraform(struct!.totpProviderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigMfaProviderConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityPlatformConfigMfaProviderConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._totpProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totpProviderConfig = this._totpProviderConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigMfaProviderConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._totpProviderConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._totpProviderConfig.internalValue = value.totpProviderConfig;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // totp_provider_config - computed: false, optional: true, required: false
  private _totpProviderConfig = new IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference(this, "totp_provider_config");
  public get totpProviderConfig() {
    return this._totpProviderConfig;
  }
  public putTotpProviderConfig(value: IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig) {
    this._totpProviderConfig.internalValue = value;
  }
  public resetTotpProviderConfig() {
    this._totpProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totpProviderConfigInput() {
    return this._totpProviderConfig.internalValue;
  }
}

export class IdentityPlatformConfigMfaProviderConfigsList extends cdktf.ComplexList {
  public internalValue? : IdentityPlatformConfigMfaProviderConfigs[] | cdktf.IResolvable

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
  public get(index: number): IdentityPlatformConfigMfaProviderConfigsOutputReference {
    return new IdentityPlatformConfigMfaProviderConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityPlatformConfigMfa {
  /**
  * A list of usable second factors for this project. Possible values: ["PHONE_SMS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#enabled_providers IdentityPlatformConfig#enabled_providers}
  */
  readonly enabledProviders?: string[];
  /**
  * Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#state IdentityPlatformConfig#state}
  */
  readonly state?: string;
  /**
  * provider_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#provider_configs IdentityPlatformConfig#provider_configs}
  */
  readonly providerConfigs?: IdentityPlatformConfigMfaProviderConfigs[] | cdktf.IResolvable;
}

export function identityPlatformConfigMfaToTerraform(struct?: IdentityPlatformConfigMfaOutputReference | IdentityPlatformConfigMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledProviders),
    state: cdktf.stringToTerraform(struct!.state),
    provider_configs: cdktf.listMapper(identityPlatformConfigMfaProviderConfigsToTerraform, true)(struct!.providerConfigs),
  }
}


export function identityPlatformConfigMfaToHclTerraform(struct?: IdentityPlatformConfigMfaOutputReference | IdentityPlatformConfigMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_configs: {
      value: cdktf.listMapperHcl(identityPlatformConfigMfaProviderConfigsToHclTerraform, true)(struct!.providerConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityPlatformConfigMfaProviderConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigMfaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigMfa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledProviders = this._enabledProviders;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._providerConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfigs = this._providerConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigMfa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledProviders = undefined;
      this._state = undefined;
      this._providerConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledProviders = value.enabledProviders;
      this._state = value.state;
      this._providerConfigs.internalValue = value.providerConfigs;
    }
  }

  // enabled_providers - computed: false, optional: true, required: false
  private _enabledProviders?: string[]; 
  public get enabledProviders() {
    return this.getListAttribute('enabled_providers');
  }
  public set enabledProviders(value: string[]) {
    this._enabledProviders = value;
  }
  public resetEnabledProviders() {
    this._enabledProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledProvidersInput() {
    return this._enabledProviders;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // provider_configs - computed: false, optional: true, required: false
  private _providerConfigs = new IdentityPlatformConfigMfaProviderConfigsList(this, "provider_configs", false);
  public get providerConfigs() {
    return this._providerConfigs;
  }
  public putProviderConfigs(value: IdentityPlatformConfigMfaProviderConfigs[] | cdktf.IResolvable) {
    this._providerConfigs.internalValue = value;
  }
  public resetProviderConfigs() {
    this._providerConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigsInput() {
    return this._providerConfigs.internalValue;
  }
}
export interface IdentityPlatformConfigMonitoringRequestLogging {
  /**
  * Whether logging is enabled for this project or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function identityPlatformConfigMonitoringRequestLoggingToTerraform(struct?: IdentityPlatformConfigMonitoringRequestLoggingOutputReference | IdentityPlatformConfigMonitoringRequestLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function identityPlatformConfigMonitoringRequestLoggingToHclTerraform(struct?: IdentityPlatformConfigMonitoringRequestLoggingOutputReference | IdentityPlatformConfigMonitoringRequestLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigMonitoringRequestLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigMonitoringRequestLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigMonitoringRequestLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IdentityPlatformConfigMonitoring {
  /**
  * request_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#request_logging IdentityPlatformConfig#request_logging}
  */
  readonly requestLogging?: IdentityPlatformConfigMonitoringRequestLogging;
}

export function identityPlatformConfigMonitoringToTerraform(struct?: IdentityPlatformConfigMonitoringOutputReference | IdentityPlatformConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_logging: identityPlatformConfigMonitoringRequestLoggingToTerraform(struct!.requestLogging),
  }
}


export function identityPlatformConfigMonitoringToHclTerraform(struct?: IdentityPlatformConfigMonitoringOutputReference | IdentityPlatformConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_logging: {
      value: identityPlatformConfigMonitoringRequestLoggingToHclTerraform(struct!.requestLogging),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityPlatformConfigMonitoringRequestLoggingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestLogging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLogging = this._requestLogging?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestLogging.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestLogging.internalValue = value.requestLogging;
    }
  }

  // request_logging - computed: false, optional: true, required: false
  private _requestLogging = new IdentityPlatformConfigMonitoringRequestLoggingOutputReference(this, "request_logging");
  public get requestLogging() {
    return this._requestLogging;
  }
  public putRequestLogging(value: IdentityPlatformConfigMonitoringRequestLogging) {
    this._requestLogging.internalValue = value;
  }
  public resetRequestLogging() {
    this._requestLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLoggingInput() {
    return this._requestLogging.internalValue;
  }
}
export interface IdentityPlatformConfigMultiTenant {
  /**
  * Whether this project can have tenants or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#allow_tenants IdentityPlatformConfig#allow_tenants}
  */
  readonly allowTenants?: boolean | cdktf.IResolvable;
  /**
  * The default cloud parent org or folder that the tenant project should be created under.
  * The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456".
  * If the value is not set, the tenant will be created under the same organization or folder as the agent project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#default_tenant_location IdentityPlatformConfig#default_tenant_location}
  */
  readonly defaultTenantLocation?: string;
}

export function identityPlatformConfigMultiTenantToTerraform(struct?: IdentityPlatformConfigMultiTenantOutputReference | IdentityPlatformConfigMultiTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_tenants: cdktf.booleanToTerraform(struct!.allowTenants),
    default_tenant_location: cdktf.stringToTerraform(struct!.defaultTenantLocation),
  }
}


export function identityPlatformConfigMultiTenantToHclTerraform(struct?: IdentityPlatformConfigMultiTenantOutputReference | IdentityPlatformConfigMultiTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_tenants: {
      value: cdktf.booleanToHclTerraform(struct!.allowTenants),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_tenant_location: {
      value: cdktf.stringToHclTerraform(struct!.defaultTenantLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigMultiTenantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigMultiTenant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTenants !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTenants = this._allowTenants;
    }
    if (this._defaultTenantLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTenantLocation = this._defaultTenantLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigMultiTenant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowTenants = undefined;
      this._defaultTenantLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowTenants = value.allowTenants;
      this._defaultTenantLocation = value.defaultTenantLocation;
    }
  }

  // allow_tenants - computed: false, optional: true, required: false
  private _allowTenants?: boolean | cdktf.IResolvable; 
  public get allowTenants() {
    return this.getBooleanAttribute('allow_tenants');
  }
  public set allowTenants(value: boolean | cdktf.IResolvable) {
    this._allowTenants = value;
  }
  public resetAllowTenants() {
    this._allowTenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTenantsInput() {
    return this._allowTenants;
  }

  // default_tenant_location - computed: false, optional: true, required: false
  private _defaultTenantLocation?: string; 
  public get defaultTenantLocation() {
    return this.getStringAttribute('default_tenant_location');
  }
  public set defaultTenantLocation(value: string) {
    this._defaultTenantLocation = value;
  }
  public resetDefaultTenantLocation() {
    this._defaultTenantLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTenantLocationInput() {
    return this._defaultTenantLocation;
  }
}
export interface IdentityPlatformConfigQuotaSignUpQuotaConfig {
  /**
  * A sign up APIs quota that customers can override temporarily. Value can be in between 1 and 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#quota IdentityPlatformConfig#quota}
  */
  readonly quota?: number;
  /**
  * How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#quota_duration IdentityPlatformConfig#quota_duration}
  */
  readonly quotaDuration?: string;
  /**
  * When this quota will take affect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#start_time IdentityPlatformConfig#start_time}
  */
  readonly startTime?: string;
}

export function identityPlatformConfigQuotaSignUpQuotaConfigToTerraform(struct?: IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference | IdentityPlatformConfigQuotaSignUpQuotaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quota: cdktf.numberToTerraform(struct!.quota),
    quota_duration: cdktf.stringToTerraform(struct!.quotaDuration),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function identityPlatformConfigQuotaSignUpQuotaConfigToHclTerraform(struct?: IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference | IdentityPlatformConfigQuotaSignUpQuotaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quota: {
      value: cdktf.numberToHclTerraform(struct!.quota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quota_duration: {
      value: cdktf.stringToHclTerraform(struct!.quotaDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigQuotaSignUpQuotaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    if (this._quotaDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaDuration = this._quotaDuration;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigQuotaSignUpQuotaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._quota = undefined;
      this._quotaDuration = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._quota = value.quota;
      this._quotaDuration = value.quotaDuration;
      this._startTime = value.startTime;
    }
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: number; 
  public get quota() {
    return this.getNumberAttribute('quota');
  }
  public set quota(value: number) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // quota_duration - computed: false, optional: true, required: false
  private _quotaDuration?: string; 
  public get quotaDuration() {
    return this.getStringAttribute('quota_duration');
  }
  public set quotaDuration(value: string) {
    this._quotaDuration = value;
  }
  public resetQuotaDuration() {
    this._quotaDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaDurationInput() {
    return this._quotaDuration;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface IdentityPlatformConfigQuota {
  /**
  * sign_up_quota_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#sign_up_quota_config IdentityPlatformConfig#sign_up_quota_config}
  */
  readonly signUpQuotaConfig?: IdentityPlatformConfigQuotaSignUpQuotaConfig;
}

export function identityPlatformConfigQuotaToTerraform(struct?: IdentityPlatformConfigQuotaOutputReference | IdentityPlatformConfigQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sign_up_quota_config: identityPlatformConfigQuotaSignUpQuotaConfigToTerraform(struct!.signUpQuotaConfig),
  }
}


export function identityPlatformConfigQuotaToHclTerraform(struct?: IdentityPlatformConfigQuotaOutputReference | IdentityPlatformConfigQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sign_up_quota_config: {
      value: identityPlatformConfigQuotaSignUpQuotaConfigToHclTerraform(struct!.signUpQuotaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityPlatformConfigQuotaSignUpQuotaConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signUpQuotaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signUpQuotaConfig = this._signUpQuotaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._signUpQuotaConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._signUpQuotaConfig.internalValue = value.signUpQuotaConfig;
    }
  }

  // sign_up_quota_config - computed: false, optional: true, required: false
  private _signUpQuotaConfig = new IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference(this, "sign_up_quota_config");
  public get signUpQuotaConfig() {
    return this._signUpQuotaConfig;
  }
  public putSignUpQuotaConfig(value: IdentityPlatformConfigQuotaSignUpQuotaConfig) {
    this._signUpQuotaConfig.internalValue = value;
  }
  public resetSignUpQuotaConfig() {
    this._signUpQuotaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signUpQuotaConfigInput() {
    return this._signUpQuotaConfig.internalValue;
  }
}
export interface IdentityPlatformConfigSignInHashConfig {
}

export function identityPlatformConfigSignInHashConfigToTerraform(struct?: IdentityPlatformConfigSignInHashConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityPlatformConfigSignInHashConfigToHclTerraform(struct?: IdentityPlatformConfigSignInHashConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityPlatformConfigSignInHashConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityPlatformConfigSignInHashConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigSignInHashConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // memory_cost - computed: true, optional: false, required: false
  public get memoryCost() {
    return this.getNumberAttribute('memory_cost');
  }

  // rounds - computed: true, optional: false, required: false
  public get rounds() {
    return this.getNumberAttribute('rounds');
  }

  // salt_separator - computed: true, optional: false, required: false
  public get saltSeparator() {
    return this.getStringAttribute('salt_separator');
  }

  // signer_key - computed: true, optional: false, required: false
  public get signerKey() {
    return this.getStringAttribute('signer_key');
  }
}

export class IdentityPlatformConfigSignInHashConfigList extends cdktf.ComplexList {

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
  public get(index: number): IdentityPlatformConfigSignInHashConfigOutputReference {
    return new IdentityPlatformConfigSignInHashConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityPlatformConfigSignInAnonymous {
  /**
  * Whether anonymous user auth is enabled for the project or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function identityPlatformConfigSignInAnonymousToTerraform(struct?: IdentityPlatformConfigSignInAnonymousOutputReference | IdentityPlatformConfigSignInAnonymous): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function identityPlatformConfigSignInAnonymousToHclTerraform(struct?: IdentityPlatformConfigSignInAnonymousOutputReference | IdentityPlatformConfigSignInAnonymous): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigSignInAnonymousOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigSignInAnonymous | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigSignInAnonymous | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IdentityPlatformConfigSignInEmail {
  /**
  * Whether email auth is enabled for the project or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Whether a password is required for email auth or not. If true, both an email and
  * password must be provided to sign in. If false, a user may sign in via either
  * email/password or email link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#password_required IdentityPlatformConfig#password_required}
  */
  readonly passwordRequired?: boolean | cdktf.IResolvable;
}

export function identityPlatformConfigSignInEmailToTerraform(struct?: IdentityPlatformConfigSignInEmailOutputReference | IdentityPlatformConfigSignInEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password_required: cdktf.booleanToTerraform(struct!.passwordRequired),
  }
}


export function identityPlatformConfigSignInEmailToHclTerraform(struct?: IdentityPlatformConfigSignInEmailOutputReference | IdentityPlatformConfigSignInEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_required: {
      value: cdktf.booleanToHclTerraform(struct!.passwordRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigSignInEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigSignInEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._passwordRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRequired = this._passwordRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigSignInEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._passwordRequired = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._passwordRequired = value.passwordRequired;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // password_required - computed: false, optional: true, required: false
  private _passwordRequired?: boolean | cdktf.IResolvable; 
  public get passwordRequired() {
    return this.getBooleanAttribute('password_required');
  }
  public set passwordRequired(value: boolean | cdktf.IResolvable) {
    this._passwordRequired = value;
  }
  public resetPasswordRequired() {
    this._passwordRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequiredInput() {
    return this._passwordRequired;
  }
}
export interface IdentityPlatformConfigSignInPhoneNumber {
  /**
  * Whether phone number auth is enabled for the project or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * A map of <test phone number, fake code> that can be used for phone auth testing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#test_phone_numbers IdentityPlatformConfig#test_phone_numbers}
  */
  readonly testPhoneNumbers?: { [key: string]: string };
}

export function identityPlatformConfigSignInPhoneNumberToTerraform(struct?: IdentityPlatformConfigSignInPhoneNumberOutputReference | IdentityPlatformConfigSignInPhoneNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    test_phone_numbers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.testPhoneNumbers),
  }
}


export function identityPlatformConfigSignInPhoneNumberToHclTerraform(struct?: IdentityPlatformConfigSignInPhoneNumberOutputReference | IdentityPlatformConfigSignInPhoneNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    test_phone_numbers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.testPhoneNumbers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigSignInPhoneNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigSignInPhoneNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._testPhoneNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.testPhoneNumbers = this._testPhoneNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigSignInPhoneNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._testPhoneNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._testPhoneNumbers = value.testPhoneNumbers;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // test_phone_numbers - computed: false, optional: true, required: false
  private _testPhoneNumbers?: { [key: string]: string }; 
  public get testPhoneNumbers() {
    return this.getStringMapAttribute('test_phone_numbers');
  }
  public set testPhoneNumbers(value: { [key: string]: string }) {
    this._testPhoneNumbers = value;
  }
  public resetTestPhoneNumbers() {
    this._testPhoneNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testPhoneNumbersInput() {
    return this._testPhoneNumbers;
  }
}
export interface IdentityPlatformConfigSignIn {
  /**
  * Whether to allow more than one account to have the same email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#allow_duplicate_emails IdentityPlatformConfig#allow_duplicate_emails}
  */
  readonly allowDuplicateEmails?: boolean | cdktf.IResolvable;
  /**
  * anonymous block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#anonymous IdentityPlatformConfig#anonymous}
  */
  readonly anonymous?: IdentityPlatformConfigSignInAnonymous;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#email IdentityPlatformConfig#email}
  */
  readonly email?: IdentityPlatformConfigSignInEmail;
  /**
  * phone_number block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#phone_number IdentityPlatformConfig#phone_number}
  */
  readonly phoneNumber?: IdentityPlatformConfigSignInPhoneNumber;
}

export function identityPlatformConfigSignInToTerraform(struct?: IdentityPlatformConfigSignInOutputReference | IdentityPlatformConfigSignIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_duplicate_emails: cdktf.booleanToTerraform(struct!.allowDuplicateEmails),
    anonymous: identityPlatformConfigSignInAnonymousToTerraform(struct!.anonymous),
    email: identityPlatformConfigSignInEmailToTerraform(struct!.email),
    phone_number: identityPlatformConfigSignInPhoneNumberToTerraform(struct!.phoneNumber),
  }
}


export function identityPlatformConfigSignInToHclTerraform(struct?: IdentityPlatformConfigSignInOutputReference | IdentityPlatformConfigSignIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_duplicate_emails: {
      value: cdktf.booleanToHclTerraform(struct!.allowDuplicateEmails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    anonymous: {
      value: identityPlatformConfigSignInAnonymousToHclTerraform(struct!.anonymous),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityPlatformConfigSignInAnonymousList",
    },
    email: {
      value: identityPlatformConfigSignInEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityPlatformConfigSignInEmailList",
    },
    phone_number: {
      value: identityPlatformConfigSignInPhoneNumberToHclTerraform(struct!.phoneNumber),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityPlatformConfigSignInPhoneNumberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigSignInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigSignIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDuplicateEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDuplicateEmails = this._allowDuplicateEmails;
    }
    if (this._anonymous?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymous = this._anonymous?.internalValue;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._phoneNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigSignIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowDuplicateEmails = undefined;
      this._anonymous.internalValue = undefined;
      this._email.internalValue = undefined;
      this._phoneNumber.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowDuplicateEmails = value.allowDuplicateEmails;
      this._anonymous.internalValue = value.anonymous;
      this._email.internalValue = value.email;
      this._phoneNumber.internalValue = value.phoneNumber;
    }
  }

  // allow_duplicate_emails - computed: false, optional: true, required: false
  private _allowDuplicateEmails?: boolean | cdktf.IResolvable; 
  public get allowDuplicateEmails() {
    return this.getBooleanAttribute('allow_duplicate_emails');
  }
  public set allowDuplicateEmails(value: boolean | cdktf.IResolvable) {
    this._allowDuplicateEmails = value;
  }
  public resetAllowDuplicateEmails() {
    this._allowDuplicateEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateEmailsInput() {
    return this._allowDuplicateEmails;
  }

  // hash_config - computed: true, optional: false, required: false
  private _hashConfig = new IdentityPlatformConfigSignInHashConfigList(this, "hash_config", false);
  public get hashConfig() {
    return this._hashConfig;
  }

  // anonymous - computed: false, optional: true, required: false
  private _anonymous = new IdentityPlatformConfigSignInAnonymousOutputReference(this, "anonymous");
  public get anonymous() {
    return this._anonymous;
  }
  public putAnonymous(value: IdentityPlatformConfigSignInAnonymous) {
    this._anonymous.internalValue = value;
  }
  public resetAnonymous() {
    this._anonymous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousInput() {
    return this._anonymous.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new IdentityPlatformConfigSignInEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: IdentityPlatformConfigSignInEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber = new IdentityPlatformConfigSignInPhoneNumberOutputReference(this, "phone_number");
  public get phoneNumber() {
    return this._phoneNumber;
  }
  public putPhoneNumber(value: IdentityPlatformConfigSignInPhoneNumber) {
    this._phoneNumber.internalValue = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber.internalValue;
  }
}
export interface IdentityPlatformConfigSmsRegionConfigAllowByDefault {
  /**
  * Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#disallowed_regions IdentityPlatformConfig#disallowed_regions}
  */
  readonly disallowedRegions?: string[];
}

export function identityPlatformConfigSmsRegionConfigAllowByDefaultToTerraform(struct?: IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference | IdentityPlatformConfigSmsRegionConfigAllowByDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disallowed_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disallowedRegions),
  }
}


export function identityPlatformConfigSmsRegionConfigAllowByDefaultToHclTerraform(struct?: IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference | IdentityPlatformConfigSmsRegionConfigAllowByDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disallowed_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disallowedRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigSmsRegionConfigAllowByDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disallowedRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowedRegions = this._disallowedRegions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigSmsRegionConfigAllowByDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disallowedRegions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disallowedRegions = value.disallowedRegions;
    }
  }

  // disallowed_regions - computed: false, optional: true, required: false
  private _disallowedRegions?: string[]; 
  public get disallowedRegions() {
    return this.getListAttribute('disallowed_regions');
  }
  public set disallowedRegions(value: string[]) {
    this._disallowedRegions = value;
  }
  public resetDisallowedRegions() {
    this._disallowedRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedRegionsInput() {
    return this._disallowedRegions;
  }
}
export interface IdentityPlatformConfigSmsRegionConfigAllowlistOnly {
  /**
  * Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#allowed_regions IdentityPlatformConfig#allowed_regions}
  */
  readonly allowedRegions?: string[];
}

export function identityPlatformConfigSmsRegionConfigAllowlistOnlyToTerraform(struct?: IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference | IdentityPlatformConfigSmsRegionConfigAllowlistOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRegions),
  }
}


export function identityPlatformConfigSmsRegionConfigAllowlistOnlyToHclTerraform(struct?: IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference | IdentityPlatformConfigSmsRegionConfigAllowlistOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigSmsRegionConfigAllowlistOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRegions = this._allowedRegions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigSmsRegionConfigAllowlistOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedRegions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedRegions = value.allowedRegions;
    }
  }

  // allowed_regions - computed: false, optional: true, required: false
  private _allowedRegions?: string[]; 
  public get allowedRegions() {
    return this.getListAttribute('allowed_regions');
  }
  public set allowedRegions(value: string[]) {
    this._allowedRegions = value;
  }
  public resetAllowedRegions() {
    this._allowedRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegionsInput() {
    return this._allowedRegions;
  }
}
export interface IdentityPlatformConfigSmsRegionConfig {
  /**
  * allow_by_default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#allow_by_default IdentityPlatformConfig#allow_by_default}
  */
  readonly allowByDefault?: IdentityPlatformConfigSmsRegionConfigAllowByDefault;
  /**
  * allowlist_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#allowlist_only IdentityPlatformConfig#allowlist_only}
  */
  readonly allowlistOnly?: IdentityPlatformConfigSmsRegionConfigAllowlistOnly;
}

export function identityPlatformConfigSmsRegionConfigToTerraform(struct?: IdentityPlatformConfigSmsRegionConfigOutputReference | IdentityPlatformConfigSmsRegionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_by_default: identityPlatformConfigSmsRegionConfigAllowByDefaultToTerraform(struct!.allowByDefault),
    allowlist_only: identityPlatformConfigSmsRegionConfigAllowlistOnlyToTerraform(struct!.allowlistOnly),
  }
}


export function identityPlatformConfigSmsRegionConfigToHclTerraform(struct?: IdentityPlatformConfigSmsRegionConfigOutputReference | IdentityPlatformConfigSmsRegionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_by_default: {
      value: identityPlatformConfigSmsRegionConfigAllowByDefaultToHclTerraform(struct!.allowByDefault),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityPlatformConfigSmsRegionConfigAllowByDefaultList",
    },
    allowlist_only: {
      value: identityPlatformConfigSmsRegionConfigAllowlistOnlyToHclTerraform(struct!.allowlistOnly),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityPlatformConfigSmsRegionConfigAllowlistOnlyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformConfigSmsRegionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformConfigSmsRegionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowByDefault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowByDefault = this._allowByDefault?.internalValue;
    }
    if (this._allowlistOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistOnly = this._allowlistOnly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformConfigSmsRegionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowByDefault.internalValue = undefined;
      this._allowlistOnly.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowByDefault.internalValue = value.allowByDefault;
      this._allowlistOnly.internalValue = value.allowlistOnly;
    }
  }

  // allow_by_default - computed: false, optional: true, required: false
  private _allowByDefault = new IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference(this, "allow_by_default");
  public get allowByDefault() {
    return this._allowByDefault;
  }
  public putAllowByDefault(value: IdentityPlatformConfigSmsRegionConfigAllowByDefault) {
    this._allowByDefault.internalValue = value;
  }
  public resetAllowByDefault() {
    this._allowByDefault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowByDefaultInput() {
    return this._allowByDefault.internalValue;
  }

  // allowlist_only - computed: false, optional: true, required: false
  private _allowlistOnly = new IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference(this, "allowlist_only");
  public get allowlistOnly() {
    return this._allowlistOnly;
  }
  public putAllowlistOnly(value: IdentityPlatformConfigSmsRegionConfigAllowlistOnly) {
    this._allowlistOnly.internalValue = value;
  }
  public resetAllowlistOnly() {
    this._allowlistOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistOnlyInput() {
    return this._allowlistOnly.internalValue;
  }
}
export interface IdentityPlatformConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#create IdentityPlatformConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#delete IdentityPlatformConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#update IdentityPlatformConfig#update}
  */
  readonly update?: string;
}

export function identityPlatformConfigTimeoutsToTerraform(struct?: IdentityPlatformConfigTimeouts | cdktf.IResolvable): any {
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


export function identityPlatformConfigTimeoutsToHclTerraform(struct?: IdentityPlatformConfigTimeouts | cdktf.IResolvable): any {
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

export class IdentityPlatformConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityPlatformConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityPlatformConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config google_identity_platform_config}
*/
export class IdentityPlatformConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_identity_platform_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityPlatformConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityPlatformConfig to import
  * @param importFromId The id of the existing IdentityPlatformConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityPlatformConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_identity_platform_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/identity_platform_config google_identity_platform_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityPlatformConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IdentityPlatformConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
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
    this._authorizedDomains = config.authorizedDomains;
    this._autodeleteAnonymousUsers = config.autodeleteAnonymousUsers;
    this._id = config.id;
    this._project = config.project;
    this._blockingFunctions.internalValue = config.blockingFunctions;
    this._client.internalValue = config.client;
    this._mfa.internalValue = config.mfa;
    this._monitoring.internalValue = config.monitoring;
    this._multiTenant.internalValue = config.multiTenant;
    this._quota.internalValue = config.quota;
    this._signIn.internalValue = config.signIn;
    this._smsRegionConfig.internalValue = config.smsRegionConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_domains - computed: true, optional: true, required: false
  private _authorizedDomains?: string[]; 
  public get authorizedDomains() {
    return this.getListAttribute('authorized_domains');
  }
  public set authorizedDomains(value: string[]) {
    this._authorizedDomains = value;
  }
  public resetAuthorizedDomains() {
    this._authorizedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedDomainsInput() {
    return this._authorizedDomains;
  }

  // autodelete_anonymous_users - computed: false, optional: true, required: false
  private _autodeleteAnonymousUsers?: boolean | cdktf.IResolvable; 
  public get autodeleteAnonymousUsers() {
    return this.getBooleanAttribute('autodelete_anonymous_users');
  }
  public set autodeleteAnonymousUsers(value: boolean | cdktf.IResolvable) {
    this._autodeleteAnonymousUsers = value;
  }
  public resetAutodeleteAnonymousUsers() {
    this._autodeleteAnonymousUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodeleteAnonymousUsersInput() {
    return this._autodeleteAnonymousUsers;
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

  // blocking_functions - computed: false, optional: true, required: false
  private _blockingFunctions = new IdentityPlatformConfigBlockingFunctionsOutputReference(this, "blocking_functions");
  public get blockingFunctions() {
    return this._blockingFunctions;
  }
  public putBlockingFunctions(value: IdentityPlatformConfigBlockingFunctions) {
    this._blockingFunctions.internalValue = value;
  }
  public resetBlockingFunctions() {
    this._blockingFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingFunctionsInput() {
    return this._blockingFunctions.internalValue;
  }

  // client - computed: false, optional: true, required: false
  private _client = new IdentityPlatformConfigClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
  public putClient(value: IdentityPlatformConfigClient) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // mfa - computed: false, optional: true, required: false
  private _mfa = new IdentityPlatformConfigMfaOutputReference(this, "mfa");
  public get mfa() {
    return this._mfa;
  }
  public putMfa(value: IdentityPlatformConfigMfa) {
    this._mfa.internalValue = value;
  }
  public resetMfa() {
    this._mfa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new IdentityPlatformConfigMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: IdentityPlatformConfigMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // multi_tenant - computed: false, optional: true, required: false
  private _multiTenant = new IdentityPlatformConfigMultiTenantOutputReference(this, "multi_tenant");
  public get multiTenant() {
    return this._multiTenant;
  }
  public putMultiTenant(value: IdentityPlatformConfigMultiTenant) {
    this._multiTenant.internalValue = value;
  }
  public resetMultiTenant() {
    this._multiTenant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTenantInput() {
    return this._multiTenant.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new IdentityPlatformConfigQuotaOutputReference(this, "quota");
  public get quota() {
    return this._quota;
  }
  public putQuota(value: IdentityPlatformConfigQuota) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // sign_in - computed: false, optional: true, required: false
  private _signIn = new IdentityPlatformConfigSignInOutputReference(this, "sign_in");
  public get signIn() {
    return this._signIn;
  }
  public putSignIn(value: IdentityPlatformConfigSignIn) {
    this._signIn.internalValue = value;
  }
  public resetSignIn() {
    this._signIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInInput() {
    return this._signIn.internalValue;
  }

  // sms_region_config - computed: false, optional: true, required: false
  private _smsRegionConfig = new IdentityPlatformConfigSmsRegionConfigOutputReference(this, "sms_region_config");
  public get smsRegionConfig() {
    return this._smsRegionConfig;
  }
  public putSmsRegionConfig(value: IdentityPlatformConfigSmsRegionConfig) {
    this._smsRegionConfig.internalValue = value;
  }
  public resetSmsRegionConfig() {
    this._smsRegionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsRegionConfigInput() {
    return this._smsRegionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityPlatformConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityPlatformConfigTimeouts) {
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
      authorized_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedDomains),
      autodelete_anonymous_users: cdktf.booleanToTerraform(this._autodeleteAnonymousUsers),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      blocking_functions: identityPlatformConfigBlockingFunctionsToTerraform(this._blockingFunctions.internalValue),
      client: identityPlatformConfigClientToTerraform(this._client.internalValue),
      mfa: identityPlatformConfigMfaToTerraform(this._mfa.internalValue),
      monitoring: identityPlatformConfigMonitoringToTerraform(this._monitoring.internalValue),
      multi_tenant: identityPlatformConfigMultiTenantToTerraform(this._multiTenant.internalValue),
      quota: identityPlatformConfigQuotaToTerraform(this._quota.internalValue),
      sign_in: identityPlatformConfigSignInToTerraform(this._signIn.internalValue),
      sms_region_config: identityPlatformConfigSmsRegionConfigToTerraform(this._smsRegionConfig.internalValue),
      timeouts: identityPlatformConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      autodelete_anonymous_users: {
        value: cdktf.booleanToHclTerraform(this._autodeleteAnonymousUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      blocking_functions: {
        value: identityPlatformConfigBlockingFunctionsToHclTerraform(this._blockingFunctions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityPlatformConfigBlockingFunctionsList",
      },
      client: {
        value: identityPlatformConfigClientToHclTerraform(this._client.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityPlatformConfigClientList",
      },
      mfa: {
        value: identityPlatformConfigMfaToHclTerraform(this._mfa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityPlatformConfigMfaList",
      },
      monitoring: {
        value: identityPlatformConfigMonitoringToHclTerraform(this._monitoring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityPlatformConfigMonitoringList",
      },
      multi_tenant: {
        value: identityPlatformConfigMultiTenantToHclTerraform(this._multiTenant.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityPlatformConfigMultiTenantList",
      },
      quota: {
        value: identityPlatformConfigQuotaToHclTerraform(this._quota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityPlatformConfigQuotaList",
      },
      sign_in: {
        value: identityPlatformConfigSignInToHclTerraform(this._signIn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityPlatformConfigSignInList",
      },
      sms_region_config: {
        value: identityPlatformConfigSmsRegionConfigToHclTerraform(this._smsRegionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityPlatformConfigSmsRegionConfigList",
      },
      timeouts: {
        value: identityPlatformConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityPlatformConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
