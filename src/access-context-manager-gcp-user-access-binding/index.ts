/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerGcpUserAccessBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * Required. Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#group_key AccessContextManagerGcpUserAccessBinding#group_key}
  */
  readonly groupKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#id AccessContextManagerGcpUserAccessBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Required. ID of the parent organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#organization_id AccessContextManagerGcpUserAccessBinding#organization_id}
  */
  readonly organizationId: string;
  /**
  * scoped_access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#scoped_access_settings AccessContextManagerGcpUserAccessBinding#scoped_access_settings}
  */
  readonly scopedAccessSettings?: AccessContextManagerGcpUserAccessBindingScopedAccessSettings[] | cdktf.IResolvable;
  /**
  * session_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#session_settings AccessContextManagerGcpUserAccessBinding#session_settings}
  */
  readonly sessionSettings?: AccessContextManagerGcpUserAccessBindingSessionSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#timeouts AccessContextManagerGcpUserAccessBinding#timeouts}
  */
  readonly timeouts?: AccessContextManagerGcpUserAccessBindingTimeouts;
}
export interface AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings {
  /**
  * Optional. How long a user is allowed to take between actions before a new access token must be issued. Only set for Google Cloud apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#max_inactivity AccessContextManagerGcpUserAccessBinding#max_inactivity}
  */
  readonly maxInactivity?: string;
  /**
  * Optional. The session length. Setting this field to zero is equal to disabling session. Also can set infinite session by flipping the enabled bit to false below. If useOidcMaxAge is true, for OIDC apps, the session length will be the minimum of this field and OIDC max_age param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length AccessContextManagerGcpUserAccessBinding#session_length}
  */
  readonly sessionLength?: string;
  /**
  * Optional. This field enables or disables Google Cloud session length. When false, all fields set above will be disregarded and the session length is basically infinite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length_enabled AccessContextManagerGcpUserAccessBinding#session_length_enabled}
  */
  readonly sessionLengthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. The session challenges proposed to users when the Google Cloud session length is up. Possible values: ["LOGIN", "SECURITY_KEY", "PASSWORD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#session_reauth_method AccessContextManagerGcpUserAccessBinding#session_reauth_method}
  */
  readonly sessionReauthMethod?: string;
  /**
  * Optional. Only useful for OIDC apps. When false, the OIDC max_age param, if passed in the authentication request will be ignored. When true, the re-auth period will be the minimum of the sessionLength field and the max_age OIDC param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#use_oidc_max_age AccessContextManagerGcpUserAccessBinding#use_oidc_max_age}
  */
  readonly useOidcMaxAge?: boolean | cdktf.IResolvable;
}

export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsToTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference | AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_inactivity: cdktf.stringToTerraform(struct!.maxInactivity),
    session_length: cdktf.stringToTerraform(struct!.sessionLength),
    session_length_enabled: cdktf.booleanToTerraform(struct!.sessionLengthEnabled),
    session_reauth_method: cdktf.stringToTerraform(struct!.sessionReauthMethod),
    use_oidc_max_age: cdktf.booleanToTerraform(struct!.useOidcMaxAge),
  }
}


export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsToHclTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference | AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_inactivity: {
      value: cdktf.stringToHclTerraform(struct!.maxInactivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_length: {
      value: cdktf.stringToHclTerraform(struct!.sessionLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_length_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sessionLengthEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_reauth_method: {
      value: cdktf.stringToHclTerraform(struct!.sessionReauthMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_oidc_max_age: {
      value: cdktf.booleanToHclTerraform(struct!.useOidcMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInactivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInactivity = this._maxInactivity;
    }
    if (this._sessionLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLength = this._sessionLength;
    }
    if (this._sessionLengthEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLengthEnabled = this._sessionLengthEnabled;
    }
    if (this._sessionReauthMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionReauthMethod = this._sessionReauthMethod;
    }
    if (this._useOidcMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOidcMaxAge = this._useOidcMaxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxInactivity = undefined;
      this._sessionLength = undefined;
      this._sessionLengthEnabled = undefined;
      this._sessionReauthMethod = undefined;
      this._useOidcMaxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxInactivity = value.maxInactivity;
      this._sessionLength = value.sessionLength;
      this._sessionLengthEnabled = value.sessionLengthEnabled;
      this._sessionReauthMethod = value.sessionReauthMethod;
      this._useOidcMaxAge = value.useOidcMaxAge;
    }
  }

  // max_inactivity - computed: false, optional: true, required: false
  private _maxInactivity?: string; 
  public get maxInactivity() {
    return this.getStringAttribute('max_inactivity');
  }
  public set maxInactivity(value: string) {
    this._maxInactivity = value;
  }
  public resetMaxInactivity() {
    this._maxInactivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInactivityInput() {
    return this._maxInactivity;
  }

  // session_length - computed: false, optional: true, required: false
  private _sessionLength?: string; 
  public get sessionLength() {
    return this.getStringAttribute('session_length');
  }
  public set sessionLength(value: string) {
    this._sessionLength = value;
  }
  public resetSessionLength() {
    this._sessionLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLengthInput() {
    return this._sessionLength;
  }

  // session_length_enabled - computed: false, optional: true, required: false
  private _sessionLengthEnabled?: boolean | cdktf.IResolvable; 
  public get sessionLengthEnabled() {
    return this.getBooleanAttribute('session_length_enabled');
  }
  public set sessionLengthEnabled(value: boolean | cdktf.IResolvable) {
    this._sessionLengthEnabled = value;
  }
  public resetSessionLengthEnabled() {
    this._sessionLengthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLengthEnabledInput() {
    return this._sessionLengthEnabled;
  }

  // session_reauth_method - computed: false, optional: true, required: false
  private _sessionReauthMethod?: string; 
  public get sessionReauthMethod() {
    return this.getStringAttribute('session_reauth_method');
  }
  public set sessionReauthMethod(value: string) {
    this._sessionReauthMethod = value;
  }
  public resetSessionReauthMethod() {
    this._sessionReauthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReauthMethodInput() {
    return this._sessionReauthMethod;
  }

  // use_oidc_max_age - computed: false, optional: true, required: false
  private _useOidcMaxAge?: boolean | cdktf.IResolvable; 
  public get useOidcMaxAge() {
    return this.getBooleanAttribute('use_oidc_max_age');
  }
  public set useOidcMaxAge(value: boolean | cdktf.IResolvable) {
    this._useOidcMaxAge = value;
  }
  public resetUseOidcMaxAge() {
    this._useOidcMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOidcMaxAgeInput() {
    return this._useOidcMaxAge;
  }
}
export interface AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings {
  /**
  * Optional. Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * session_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#session_settings AccessContextManagerGcpUserAccessBinding#session_settings}
  */
  readonly sessionSettings?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings;
}

export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsToTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference | AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessLevels),
    session_settings: accessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsToTerraform(struct!.sessionSettings),
  }
}


export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsToHclTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference | AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    session_settings: {
      value: accessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsToHclTerraform(struct!.sessionSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevels = this._accessLevels;
    }
    if (this._sessionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionSettings = this._sessionSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLevels = undefined;
      this._sessionSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLevels = value.accessLevels;
      this._sessionSettings.internalValue = value.sessionSettings;
    }
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[]; 
  public get accessLevels() {
    return this.getListAttribute('access_levels');
  }
  public set accessLevels(value: string[]) {
    this._accessLevels = value;
  }
  public resetAccessLevels() {
    this._accessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels;
  }

  // session_settings - computed: false, optional: true, required: false
  private _sessionSettings = new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference(this, "session_settings");
  public get sessionSettings() {
    return this._sessionSettings;
  }
  public putSessionSettings(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings) {
    this._sessionSettings.internalValue = value;
  }
  public resetSessionSettings() {
    this._sessionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSettingsInput() {
    return this._sessionSettings.internalValue;
  }
}
export interface AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings {
  /**
  * Optional. Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}
  */
  readonly accessLevels?: string[];
}

export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsToTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference | AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessLevels),
  }
}


export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsToHclTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference | AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevels = this._accessLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLevels = value.accessLevels;
    }
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[]; 
  public get accessLevels() {
    return this.getListAttribute('access_levels');
  }
  public set accessLevels(value: string[]) {
    this._accessLevels = value;
  }
  public resetAccessLevels() {
    this._accessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels;
  }
}
export interface AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication {
  /**
  * The OAuth client ID of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#client_id AccessContextManagerGcpUserAccessBinding#client_id}
  */
  readonly clientId?: string;
}

export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationToTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference | AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
  }
}


export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationToHclTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference | AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }
}
export interface AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope {
  /**
  * restricted_client_application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#restricted_client_application AccessContextManagerGcpUserAccessBinding#restricted_client_application}
  */
  readonly restrictedClientApplication?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication;
}

export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeToTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference | AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restricted_client_application: accessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationToTerraform(struct!.restrictedClientApplication),
  }
}


export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeToHclTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference | AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restricted_client_application: {
      value: accessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationToHclTerraform(struct!.restrictedClientApplication),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedClientApplication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedClientApplication = this._restrictedClientApplication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictedClientApplication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictedClientApplication.internalValue = value.restrictedClientApplication;
    }
  }

  // restricted_client_application - computed: false, optional: true, required: false
  private _restrictedClientApplication = new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference(this, "restricted_client_application");
  public get restrictedClientApplication() {
    return this._restrictedClientApplication;
  }
  public putRestrictedClientApplication(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication) {
    this._restrictedClientApplication.internalValue = value;
  }
  public resetRestrictedClientApplication() {
    this._restrictedClientApplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedClientApplicationInput() {
    return this._restrictedClientApplication.internalValue;
  }
}
export interface AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope {
  /**
  * client_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#client_scope AccessContextManagerGcpUserAccessBinding#client_scope}
  */
  readonly clientScope?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope;
}

export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeToTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference | AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_scope: accessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeToTerraform(struct!.clientScope),
  }
}


export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeToHclTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference | AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_scope: {
      value: accessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeToHclTerraform(struct!.clientScope),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientScope = this._clientScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientScope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientScope.internalValue = value.clientScope;
    }
  }

  // client_scope - computed: false, optional: true, required: false
  private _clientScope = new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference(this, "client_scope");
  public get clientScope() {
    return this._clientScope;
  }
  public putClientScope(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope) {
    this._clientScope.internalValue = value;
  }
  public resetClientScope() {
    this._clientScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientScopeInput() {
    return this._clientScope.internalValue;
  }
}
export interface AccessContextManagerGcpUserAccessBindingScopedAccessSettings {
  /**
  * active_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#active_settings AccessContextManagerGcpUserAccessBinding#active_settings}
  */
  readonly activeSettings?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings;
  /**
  * dry_run_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#dry_run_settings AccessContextManagerGcpUserAccessBinding#dry_run_settings}
  */
  readonly dryRunSettings?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#scope AccessContextManagerGcpUserAccessBinding#scope}
  */
  readonly scope?: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope;
}

export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsToTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_settings: accessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsToTerraform(struct!.activeSettings),
    dry_run_settings: accessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsToTerraform(struct!.dryRunSettings),
    scope: accessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeToTerraform(struct!.scope),
  }
}


export function accessContextManagerGcpUserAccessBindingScopedAccessSettingsToHclTerraform(struct?: AccessContextManagerGcpUserAccessBindingScopedAccessSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_settings: {
      value: accessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsToHclTerraform(struct!.activeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsList",
    },
    dry_run_settings: {
      value: accessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsToHclTerraform(struct!.dryRunSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsList",
    },
    scope: {
      value: accessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerGcpUserAccessBindingScopedAccessSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSettings = this._activeSettings?.internalValue;
    }
    if (this._dryRunSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRunSettings = this._dryRunSettings?.internalValue;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeSettings.internalValue = undefined;
      this._dryRunSettings.internalValue = undefined;
      this._scope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeSettings.internalValue = value.activeSettings;
      this._dryRunSettings.internalValue = value.dryRunSettings;
      this._scope.internalValue = value.scope;
    }
  }

  // active_settings - computed: false, optional: true, required: false
  private _activeSettings = new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference(this, "active_settings");
  public get activeSettings() {
    return this._activeSettings;
  }
  public putActiveSettings(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings) {
    this._activeSettings.internalValue = value;
  }
  public resetActiveSettings() {
    this._activeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSettingsInput() {
    return this._activeSettings.internalValue;
  }

  // dry_run_settings - computed: false, optional: true, required: false
  private _dryRunSettings = new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference(this, "dry_run_settings");
  public get dryRunSettings() {
    return this._dryRunSettings;
  }
  public putDryRunSettings(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings) {
    this._dryRunSettings.internalValue = value;
  }
  public resetDryRunSettings() {
    this._dryRunSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunSettingsInput() {
    return this._dryRunSettings.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}

export class AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerGcpUserAccessBindingScopedAccessSettings[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference {
    return new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerGcpUserAccessBindingSessionSettings {
  /**
  * Optional. How long a user is allowed to take between actions before a new access token must be issued. Only set for Google Cloud apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#max_inactivity AccessContextManagerGcpUserAccessBinding#max_inactivity}
  */
  readonly maxInactivity?: string;
  /**
  * Optional. The session length. Setting this field to zero is equal to disabling session. Also can set infinite session by flipping the enabled bit to false below. If useOidcMaxAge is true, for OIDC apps, the session length will be the minimum of this field and OIDC max_age param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length AccessContextManagerGcpUserAccessBinding#session_length}
  */
  readonly sessionLength?: string;
  /**
  * Optional. This field enables or disables Google Cloud session length. When false, all fields set above will be disregarded and the session length is basically infinite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length_enabled AccessContextManagerGcpUserAccessBinding#session_length_enabled}
  */
  readonly sessionLengthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. The session challenges proposed to users when the Google Cloud session length is up. Possible values: ["LOGIN", "SECURITY_KEY", "PASSWORD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#session_reauth_method AccessContextManagerGcpUserAccessBinding#session_reauth_method}
  */
  readonly sessionReauthMethod?: string;
  /**
  * Optional. Only useful for OIDC apps. When false, the OIDC max_age param, if passed in the authentication request will be ignored. When true, the re-auth period will be the minimum of the sessionLength field and the max_age OIDC param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#use_oidc_max_age AccessContextManagerGcpUserAccessBinding#use_oidc_max_age}
  */
  readonly useOidcMaxAge?: boolean | cdktf.IResolvable;
}

export function accessContextManagerGcpUserAccessBindingSessionSettingsToTerraform(struct?: AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference | AccessContextManagerGcpUserAccessBindingSessionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_inactivity: cdktf.stringToTerraform(struct!.maxInactivity),
    session_length: cdktf.stringToTerraform(struct!.sessionLength),
    session_length_enabled: cdktf.booleanToTerraform(struct!.sessionLengthEnabled),
    session_reauth_method: cdktf.stringToTerraform(struct!.sessionReauthMethod),
    use_oidc_max_age: cdktf.booleanToTerraform(struct!.useOidcMaxAge),
  }
}


export function accessContextManagerGcpUserAccessBindingSessionSettingsToHclTerraform(struct?: AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference | AccessContextManagerGcpUserAccessBindingSessionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_inactivity: {
      value: cdktf.stringToHclTerraform(struct!.maxInactivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_length: {
      value: cdktf.stringToHclTerraform(struct!.sessionLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_length_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sessionLengthEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_reauth_method: {
      value: cdktf.stringToHclTerraform(struct!.sessionReauthMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_oidc_max_age: {
      value: cdktf.booleanToHclTerraform(struct!.useOidcMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerGcpUserAccessBindingSessionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInactivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInactivity = this._maxInactivity;
    }
    if (this._sessionLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLength = this._sessionLength;
    }
    if (this._sessionLengthEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLengthEnabled = this._sessionLengthEnabled;
    }
    if (this._sessionReauthMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionReauthMethod = this._sessionReauthMethod;
    }
    if (this._useOidcMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOidcMaxAge = this._useOidcMaxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerGcpUserAccessBindingSessionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxInactivity = undefined;
      this._sessionLength = undefined;
      this._sessionLengthEnabled = undefined;
      this._sessionReauthMethod = undefined;
      this._useOidcMaxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxInactivity = value.maxInactivity;
      this._sessionLength = value.sessionLength;
      this._sessionLengthEnabled = value.sessionLengthEnabled;
      this._sessionReauthMethod = value.sessionReauthMethod;
      this._useOidcMaxAge = value.useOidcMaxAge;
    }
  }

  // max_inactivity - computed: false, optional: true, required: false
  private _maxInactivity?: string; 
  public get maxInactivity() {
    return this.getStringAttribute('max_inactivity');
  }
  public set maxInactivity(value: string) {
    this._maxInactivity = value;
  }
  public resetMaxInactivity() {
    this._maxInactivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInactivityInput() {
    return this._maxInactivity;
  }

  // session_length - computed: false, optional: true, required: false
  private _sessionLength?: string; 
  public get sessionLength() {
    return this.getStringAttribute('session_length');
  }
  public set sessionLength(value: string) {
    this._sessionLength = value;
  }
  public resetSessionLength() {
    this._sessionLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLengthInput() {
    return this._sessionLength;
  }

  // session_length_enabled - computed: false, optional: true, required: false
  private _sessionLengthEnabled?: boolean | cdktf.IResolvable; 
  public get sessionLengthEnabled() {
    return this.getBooleanAttribute('session_length_enabled');
  }
  public set sessionLengthEnabled(value: boolean | cdktf.IResolvable) {
    this._sessionLengthEnabled = value;
  }
  public resetSessionLengthEnabled() {
    this._sessionLengthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLengthEnabledInput() {
    return this._sessionLengthEnabled;
  }

  // session_reauth_method - computed: false, optional: true, required: false
  private _sessionReauthMethod?: string; 
  public get sessionReauthMethod() {
    return this.getStringAttribute('session_reauth_method');
  }
  public set sessionReauthMethod(value: string) {
    this._sessionReauthMethod = value;
  }
  public resetSessionReauthMethod() {
    this._sessionReauthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReauthMethodInput() {
    return this._sessionReauthMethod;
  }

  // use_oidc_max_age - computed: false, optional: true, required: false
  private _useOidcMaxAge?: boolean | cdktf.IResolvable; 
  public get useOidcMaxAge() {
    return this.getBooleanAttribute('use_oidc_max_age');
  }
  public set useOidcMaxAge(value: boolean | cdktf.IResolvable) {
    this._useOidcMaxAge = value;
  }
  public resetUseOidcMaxAge() {
    this._useOidcMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOidcMaxAgeInput() {
    return this._useOidcMaxAge;
  }
}
export interface AccessContextManagerGcpUserAccessBindingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#create AccessContextManagerGcpUserAccessBinding#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#delete AccessContextManagerGcpUserAccessBinding#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#update AccessContextManagerGcpUserAccessBinding#update}
  */
  readonly update?: string;
}

export function accessContextManagerGcpUserAccessBindingTimeoutsToTerraform(struct?: AccessContextManagerGcpUserAccessBindingTimeouts | cdktf.IResolvable): any {
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


export function accessContextManagerGcpUserAccessBindingTimeoutsToHclTerraform(struct?: AccessContextManagerGcpUserAccessBindingTimeouts | cdktf.IResolvable): any {
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

export class AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessContextManagerGcpUserAccessBindingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerGcpUserAccessBindingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding google_access_context_manager_gcp_user_access_binding}
*/
export class AccessContextManagerGcpUserAccessBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_gcp_user_access_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessContextManagerGcpUserAccessBinding to import
  * @param importFromId The id of the existing AccessContextManagerGcpUserAccessBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessContextManagerGcpUserAccessBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_access_context_manager_gcp_user_access_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/access_context_manager_gcp_user_access_binding google_access_context_manager_gcp_user_access_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerGcpUserAccessBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerGcpUserAccessBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_gcp_user_access_binding',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.32.0',
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
    this._accessLevels = config.accessLevels;
    this._groupKey = config.groupKey;
    this._id = config.id;
    this._organizationId = config.organizationId;
    this._scopedAccessSettings.internalValue = config.scopedAccessSettings;
    this._sessionSettings.internalValue = config.sessionSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[]; 
  public get accessLevels() {
    return this.getListAttribute('access_levels');
  }
  public set accessLevels(value: string[]) {
    this._accessLevels = value;
  }
  public resetAccessLevels() {
    this._accessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels;
  }

  // group_key - computed: false, optional: false, required: true
  private _groupKey?: string; 
  public get groupKey() {
    return this.getStringAttribute('group_key');
  }
  public set groupKey(value: string) {
    this._groupKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupKeyInput() {
    return this._groupKey;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // scoped_access_settings - computed: false, optional: true, required: false
  private _scopedAccessSettings = new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList(this, "scoped_access_settings", false);
  public get scopedAccessSettings() {
    return this._scopedAccessSettings;
  }
  public putScopedAccessSettings(value: AccessContextManagerGcpUserAccessBindingScopedAccessSettings[] | cdktf.IResolvable) {
    this._scopedAccessSettings.internalValue = value;
  }
  public resetScopedAccessSettings() {
    this._scopedAccessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopedAccessSettingsInput() {
    return this._scopedAccessSettings.internalValue;
  }

  // session_settings - computed: false, optional: true, required: false
  private _sessionSettings = new AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference(this, "session_settings");
  public get sessionSettings() {
    return this._sessionSettings;
  }
  public putSessionSettings(value: AccessContextManagerGcpUserAccessBindingSessionSettings) {
    this._sessionSettings.internalValue = value;
  }
  public resetSessionSettings() {
    this._sessionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSettingsInput() {
    return this._sessionSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessContextManagerGcpUserAccessBindingTimeouts) {
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
      access_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessLevels),
      group_key: cdktf.stringToTerraform(this._groupKey),
      id: cdktf.stringToTerraform(this._id),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      scoped_access_settings: cdktf.listMapper(accessContextManagerGcpUserAccessBindingScopedAccessSettingsToTerraform, true)(this._scopedAccessSettings.internalValue),
      session_settings: accessContextManagerGcpUserAccessBindingSessionSettingsToTerraform(this._sessionSettings.internalValue),
      timeouts: accessContextManagerGcpUserAccessBindingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_levels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessLevels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group_key: {
        value: cdktf.stringToHclTerraform(this._groupKey),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scoped_access_settings: {
        value: cdktf.listMapperHcl(accessContextManagerGcpUserAccessBindingScopedAccessSettingsToHclTerraform, true)(this._scopedAccessSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList",
      },
      session_settings: {
        value: accessContextManagerGcpUserAccessBindingSessionSettingsToHclTerraform(this._sessionSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessContextManagerGcpUserAccessBindingSessionSettingsList",
      },
      timeouts: {
        value: accessContextManagerGcpUserAccessBindingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessContextManagerGcpUserAccessBindingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
