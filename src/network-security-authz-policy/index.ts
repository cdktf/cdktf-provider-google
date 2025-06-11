/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityAuthzPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * When the action is CUSTOM, customProvider must be specified.
  * When the action is ALLOW, only requests matching the policy will be allowed.
  * When the action is DENY, only requests matching the policy will be denied.
  * 
  * When a request arrives, the policies are evaluated in the following order:
  * 1. If there is a CUSTOM policy that matches the request, the CUSTOM policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request.
  * 2. If there are any DENY policies that match the request, the request is denied.
  * 3. If there are no ALLOW policies for the resource or if any of the ALLOW policies match the request, the request is allowed.
  * 4. Else the request is denied by default if none of the configured AuthzPolicies with ALLOW action match the request. Possible values: ["ALLOW", "DENY", "CUSTOM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#action NetworkSecurityAuthzPolicy#action}
  */
  readonly action: string;
  /**
  * A human-readable description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#description NetworkSecurityAuthzPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#id NetworkSecurityAuthzPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of labels associated with the AuthzExtension resource.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#labels NetworkSecurityAuthzPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#location NetworkSecurityAuthzPolicy#location}
  */
  readonly location: string;
  /**
  * Identifier. Name of the AuthzPolicy resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#name NetworkSecurityAuthzPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#project NetworkSecurityAuthzPolicy#project}
  */
  readonly project?: string;
  /**
  * custom_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#custom_provider NetworkSecurityAuthzPolicy#custom_provider}
  */
  readonly customProvider?: NetworkSecurityAuthzPolicyCustomProvider;
  /**
  * http_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#http_rules NetworkSecurityAuthzPolicy#http_rules}
  */
  readonly httpRules?: NetworkSecurityAuthzPolicyHttpRules[] | cdktf.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#target NetworkSecurityAuthzPolicy#target}
  */
  readonly target: NetworkSecurityAuthzPolicyTarget;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#timeouts NetworkSecurityAuthzPolicy#timeouts}
  */
  readonly timeouts?: NetworkSecurityAuthzPolicyTimeouts;
}
export interface NetworkSecurityAuthzPolicyCustomProviderAuthzExtension {
  /**
  * A list of references to authorization extensions that will be invoked for requests matching this policy. Limited to 1 custom provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#resources NetworkSecurityAuthzPolicy#resources}
  */
  readonly resources: string[];
}

export function networkSecurityAuthzPolicyCustomProviderAuthzExtensionToTerraform(struct?: NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference | NetworkSecurityAuthzPolicyCustomProviderAuthzExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}


export function networkSecurityAuthzPolicyCustomProviderAuthzExtensionToHclTerraform(struct?: NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference | NetworkSecurityAuthzPolicyCustomProviderAuthzExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyCustomProviderAuthzExtension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyCustomProviderAuthzExtension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
    }
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface NetworkSecurityAuthzPolicyCustomProviderCloudIap {
  /**
  * Enable Cloud IAP at the AuthzPolicy level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#enabled NetworkSecurityAuthzPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function networkSecurityAuthzPolicyCustomProviderCloudIapToTerraform(struct?: NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference | NetworkSecurityAuthzPolicyCustomProviderCloudIap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function networkSecurityAuthzPolicyCustomProviderCloudIapToHclTerraform(struct?: NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference | NetworkSecurityAuthzPolicyCustomProviderCloudIap): any {
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

export class NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyCustomProviderCloudIap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyCustomProviderCloudIap | undefined) {
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
export interface NetworkSecurityAuthzPolicyCustomProvider {
  /**
  * authz_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#authz_extension NetworkSecurityAuthzPolicy#authz_extension}
  */
  readonly authzExtension?: NetworkSecurityAuthzPolicyCustomProviderAuthzExtension;
  /**
  * cloud_iap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#cloud_iap NetworkSecurityAuthzPolicy#cloud_iap}
  */
  readonly cloudIap?: NetworkSecurityAuthzPolicyCustomProviderCloudIap;
}

export function networkSecurityAuthzPolicyCustomProviderToTerraform(struct?: NetworkSecurityAuthzPolicyCustomProviderOutputReference | NetworkSecurityAuthzPolicyCustomProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authz_extension: networkSecurityAuthzPolicyCustomProviderAuthzExtensionToTerraform(struct!.authzExtension),
    cloud_iap: networkSecurityAuthzPolicyCustomProviderCloudIapToTerraform(struct!.cloudIap),
  }
}


export function networkSecurityAuthzPolicyCustomProviderToHclTerraform(struct?: NetworkSecurityAuthzPolicyCustomProviderOutputReference | NetworkSecurityAuthzPolicyCustomProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authz_extension: {
      value: networkSecurityAuthzPolicyCustomProviderAuthzExtensionToHclTerraform(struct!.authzExtension),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionList",
    },
    cloud_iap: {
      value: networkSecurityAuthzPolicyCustomProviderCloudIapToHclTerraform(struct!.cloudIap),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyCustomProviderCloudIapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyCustomProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyCustomProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authzExtension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzExtension = this._authzExtension?.internalValue;
    }
    if (this._cloudIap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudIap = this._cloudIap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyCustomProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authzExtension.internalValue = undefined;
      this._cloudIap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authzExtension.internalValue = value.authzExtension;
      this._cloudIap.internalValue = value.cloudIap;
    }
  }

  // authz_extension - computed: false, optional: true, required: false
  private _authzExtension = new NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference(this, "authz_extension");
  public get authzExtension() {
    return this._authzExtension;
  }
  public putAuthzExtension(value: NetworkSecurityAuthzPolicyCustomProviderAuthzExtension) {
    this._authzExtension.internalValue = value;
  }
  public resetAuthzExtension() {
    this._authzExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzExtensionInput() {
    return this._authzExtension.internalValue;
  }

  // cloud_iap - computed: false, optional: true, required: false
  private _cloudIap = new NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference(this, "cloud_iap");
  public get cloudIap() {
    return this._cloudIap;
  }
  public putCloudIap(value: NetworkSecurityAuthzPolicyCustomProviderCloudIap) {
    this._cloudIap.internalValue = value;
  }
  public resetCloudIap() {
    this._cloudIap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIapInput() {
    return this._cloudIap.internalValue;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet {
  /**
  * A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. The match follows AND semantics which means all the ids must match.
  * Limited to 5 matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#ids NetworkSecurityAuthzPolicy#ids}
  */
  readonly ids?: string[];
}

export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ids = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ids = value.ids;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources {
  /**
  * iam_service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#iam_service_account NetworkSecurityAuthzPolicy#iam_service_account}
  */
  readonly iamServiceAccount?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount;
  /**
  * tag_value_id_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#tag_value_id_set NetworkSecurityAuthzPolicy#tag_value_id_set}
  */
  readonly tagValueIdSet?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet;
}

export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_service_account: networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountToTerraform(struct!.iamServiceAccount),
    tag_value_id_set: networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetToTerraform(struct!.tagValueIdSet),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_service_account: {
      value: networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountToHclTerraform(struct!.iamServiceAccount),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountList",
    },
    tag_value_id_set: {
      value: networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetToHclTerraform(struct!.tagValueIdSet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamServiceAccount = this._iamServiceAccount?.internalValue;
    }
    if (this._tagValueIdSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValueIdSet = this._tagValueIdSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamServiceAccount.internalValue = undefined;
      this._tagValueIdSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamServiceAccount.internalValue = value.iamServiceAccount;
      this._tagValueIdSet.internalValue = value.tagValueIdSet;
    }
  }

  // iam_service_account - computed: false, optional: true, required: false
  private _iamServiceAccount = new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference(this, "iam_service_account");
  public get iamServiceAccount() {
    return this._iamServiceAccount;
  }
  public putIamServiceAccount(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount) {
    this._iamServiceAccount.internalValue = value;
  }
  public resetIamServiceAccount() {
    this._iamServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServiceAccountInput() {
    return this._iamServiceAccount.internalValue;
  }

  // tag_value_id_set - computed: false, optional: true, required: false
  private _tagValueIdSet = new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference(this, "tag_value_id_set");
  public get tagValueIdSet() {
    return this._tagValueIdSet;
  }
  public putTagValueIdSet(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet) {
    this._tagValueIdSet.internalValue = value;
  }
  public resetTagValueIdSet() {
    this._tagValueIdSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueIdSetInput() {
    return this._tagValueIdSet.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromNotSources {
  /**
  * principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#principals NetworkSecurityAuthzPolicy#principals}
  */
  readonly principals?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#resources NetworkSecurityAuthzPolicy#resources}
  */
  readonly resources?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources[] | cdktf.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principals: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsToTerraform, true)(struct!.principals),
    resources: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesToTerraform, true)(struct!.resources),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principals: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsToHclTerraform, true)(struct!.principals),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList",
    },
    resources: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromNotSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principals.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principals.internalValue = value.principals;
      this._resources.internalValue = value.resources;
    }
  }

  // principals - computed: false, optional: true, required: false
  private _principals = new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals[] | cdktf.IResolvable) {
    this._principals.internalValue = value;
  }
  public resetPrincipals() {
    this._principals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromNotSources[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet {
  /**
  * A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. The match follows AND semantics which means all the ids must match.
  * Limited to 5 matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#ids NetworkSecurityAuthzPolicy#ids}
  */
  readonly ids?: string[];
}

export function networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ids = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ids = value.ids;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources {
  /**
  * iam_service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#iam_service_account NetworkSecurityAuthzPolicy#iam_service_account}
  */
  readonly iamServiceAccount?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount;
  /**
  * tag_value_id_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#tag_value_id_set NetworkSecurityAuthzPolicy#tag_value_id_set}
  */
  readonly tagValueIdSet?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet;
}

export function networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_service_account: networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountToTerraform(struct!.iamServiceAccount),
    tag_value_id_set: networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetToTerraform(struct!.tagValueIdSet),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_service_account: {
      value: networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountToHclTerraform(struct!.iamServiceAccount),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountList",
    },
    tag_value_id_set: {
      value: networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetToHclTerraform(struct!.tagValueIdSet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamServiceAccount = this._iamServiceAccount?.internalValue;
    }
    if (this._tagValueIdSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValueIdSet = this._tagValueIdSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamServiceAccount.internalValue = undefined;
      this._tagValueIdSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamServiceAccount.internalValue = value.iamServiceAccount;
      this._tagValueIdSet.internalValue = value.tagValueIdSet;
    }
  }

  // iam_service_account - computed: false, optional: true, required: false
  private _iamServiceAccount = new NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference(this, "iam_service_account");
  public get iamServiceAccount() {
    return this._iamServiceAccount;
  }
  public putIamServiceAccount(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount) {
    this._iamServiceAccount.internalValue = value;
  }
  public resetIamServiceAccount() {
    this._iamServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServiceAccountInput() {
    return this._iamServiceAccount.internalValue;
  }

  // tag_value_id_set - computed: false, optional: true, required: false
  private _tagValueIdSet = new NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference(this, "tag_value_id_set");
  public get tagValueIdSet() {
    return this._tagValueIdSet;
  }
  public putTagValueIdSet(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet) {
    this._tagValueIdSet.internalValue = value;
  }
  public resetTagValueIdSet() {
    this._tagValueIdSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueIdSetInput() {
    return this._tagValueIdSet.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromSources {
  /**
  * principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#principals NetworkSecurityAuthzPolicy#principals}
  */
  readonly principals?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#resources NetworkSecurityAuthzPolicy#resources}
  */
  readonly resources?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources[] | cdktf.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesFromSourcesToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principals: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsToTerraform, true)(struct!.principals),
    resources: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesToTerraform, true)(struct!.resources),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromSourcesToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principals: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsToHclTerraform, true)(struct!.principals),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList",
    },
    resources: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principals.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principals.internalValue = value.principals;
      this._resources.internalValue = value.resources;
    }
  }

  // principals - computed: false, optional: true, required: false
  private _principals = new NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals[] | cdktf.IResolvable) {
    this._principals.internalValue = value;
  }
  public resetPrincipals() {
    this._principals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromSources[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFrom {
  /**
  * not_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#not_sources NetworkSecurityAuthzPolicy#not_sources}
  */
  readonly notSources?: NetworkSecurityAuthzPolicyHttpRulesFromNotSources[] | cdktf.IResolvable;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#sources NetworkSecurityAuthzPolicy#sources}
  */
  readonly sources?: NetworkSecurityAuthzPolicyHttpRulesFromSources[] | cdktf.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesFromToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromOutputReference | NetworkSecurityAuthzPolicyHttpRulesFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_sources: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesFromNotSourcesToTerraform, true)(struct!.notSources),
    sources: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromOutputReference | NetworkSecurityAuthzPolicyHttpRulesFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_sources: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromNotSourcesToHclTerraform, true)(struct!.notSources),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList",
    },
    sources: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSources = this._notSources?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notSources.internalValue = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notSources.internalValue = value.notSources;
      this._sources.internalValue = value.sources;
    }
  }

  // not_sources - computed: false, optional: true, required: false
  private _notSources = new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList(this, "not_sources", false);
  public get notSources() {
    return this._notSources;
  }
  public putNotSources(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSources[] | cdktf.IResolvable) {
    this._notSources.internalValue = value;
  }
  public resetNotSources() {
    this._notSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSourcesInput() {
    return this._notSources.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new NetworkSecurityAuthzPolicyHttpRulesFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: NetworkSecurityAuthzPolicyHttpRulesFromSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference | NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference | NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders {
  /**
  * Specifies the name of the header in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#name NetworkSecurityAuthzPolicy#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#value NetworkSecurityAuthzPolicy#value}
  */
  readonly value?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue;
}

export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueToTerraform(struct!.value),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value = new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#headers NetworkSecurityAuthzPolicy#headers}
  */
  readonly headers?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders[] | cdktf.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersToTerraform, true)(struct!.headers),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHostsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHostsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToNotOperationsPathsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToNotOperationsPathsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToNotOperations {
  /**
  * A list of HTTP methods to match against. Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#methods NetworkSecurityAuthzPolicy#methods}
  */
  readonly methods?: string[];
  /**
  * header_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#header_set NetworkSecurityAuthzPolicy#header_set}
  */
  readonly headerSet?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#hosts NetworkSecurityAuthzPolicy#hosts}
  */
  readonly hosts?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts[] | cdktf.IResolvable;
  /**
  * paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#paths NetworkSecurityAuthzPolicy#paths}
  */
  readonly paths?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths[] | cdktf.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesToNotOperationsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    header_set: networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetToTerraform(struct!.headerSet),
    hosts: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesToNotOperationsHostsToTerraform, true)(struct!.hosts),
    paths: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesToNotOperationsPathsToTerraform, true)(struct!.paths),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToNotOperationsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header_set: {
      value: networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetToHclTerraform(struct!.headerSet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetList",
    },
    hosts: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToNotOperationsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList",
    },
    paths: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToNotOperationsPathsToHclTerraform, true)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToNotOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._headerSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSet = this._headerSet?.internalValue;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._headerSet.internalValue = undefined;
      this._hosts.internalValue = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._headerSet.internalValue = value.headerSet;
      this._hosts.internalValue = value.hosts;
      this._paths.internalValue = value.paths;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // header_set - computed: false, optional: true, required: false
  private _headerSet = new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference(this, "header_set");
  public get headerSet() {
    return this._headerSet;
  }
  public putHeaderSet(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet) {
    this._headerSet.internalValue = value;
  }
  public resetHeaderSet() {
    this._headerSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSetInput() {
    return this._headerSet.internalValue;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToNotOperations[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference | NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference | NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders {
  /**
  * Specifies the name of the header in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#name NetworkSecurityAuthzPolicy#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#value NetworkSecurityAuthzPolicy#value}
  */
  readonly value?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueToTerraform(struct!.value),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value = new NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#headers NetworkSecurityAuthzPolicy#headers}
  */
  readonly headers?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders[] | cdktf.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersToTerraform, true)(struct!.headers),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsHostsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsHostsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsPathsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsPathsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperations {
  /**
  * A list of HTTP methods to match against. Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#methods NetworkSecurityAuthzPolicy#methods}
  */
  readonly methods?: string[];
  /**
  * header_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#header_set NetworkSecurityAuthzPolicy#header_set}
  */
  readonly headerSet?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#hosts NetworkSecurityAuthzPolicy#hosts}
  */
  readonly hosts?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts[] | cdktf.IResolvable;
  /**
  * paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#paths NetworkSecurityAuthzPolicy#paths}
  */
  readonly paths?: NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths[] | cdktf.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    header_set: networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetToTerraform(struct!.headerSet),
    hosts: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesToOperationsHostsToTerraform, true)(struct!.hosts),
    paths: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesToOperationsPathsToTerraform, true)(struct!.paths),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header_set: {
      value: networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetToHclTerraform(struct!.headerSet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetList",
    },
    hosts: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToOperationsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList",
    },
    paths: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToOperationsPathsToHclTerraform, true)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._headerSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSet = this._headerSet?.internalValue;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._headerSet.internalValue = undefined;
      this._hosts.internalValue = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._headerSet.internalValue = value.headerSet;
      this._hosts.internalValue = value.hosts;
      this._paths.internalValue = value.paths;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // header_set - computed: false, optional: true, required: false
  private _headerSet = new NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference(this, "header_set");
  public get headerSet() {
    return this._headerSet;
  }
  public putHeaderSet(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet) {
    this._headerSet.internalValue = value;
  }
  public resetHeaderSet() {
    this._headerSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSetInput() {
    return this._headerSet.internalValue;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToOperations[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesTo {
  /**
  * not_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#not_operations NetworkSecurityAuthzPolicy#not_operations}
  */
  readonly notOperations?: NetworkSecurityAuthzPolicyHttpRulesToNotOperations[] | cdktf.IResolvable;
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#operations NetworkSecurityAuthzPolicy#operations}
  */
  readonly operations?: NetworkSecurityAuthzPolicyHttpRulesToOperations[] | cdktf.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesToToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOutputReference | NetworkSecurityAuthzPolicyHttpRulesTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_operations: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesToNotOperationsToTerraform, true)(struct!.notOperations),
    operations: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesToOperationsToTerraform, true)(struct!.operations),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOutputReference | NetworkSecurityAuthzPolicyHttpRulesTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_operations: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToNotOperationsToHclTerraform, true)(struct!.notOperations),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList",
    },
    operations: {
      value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notOperations = this._notOperations?.internalValue;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notOperations.internalValue = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notOperations.internalValue = value.notOperations;
      this._operations.internalValue = value.operations;
    }
  }

  // not_operations - computed: false, optional: true, required: false
  private _notOperations = new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList(this, "not_operations", false);
  public get notOperations() {
    return this._notOperations;
  }
  public putNotOperations(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperations[] | cdktf.IResolvable) {
    this._notOperations.internalValue = value;
  }
  public resetNotOperations() {
    this._notOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notOperationsInput() {
    return this._notOperations.internalValue;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new NetworkSecurityAuthzPolicyHttpRulesToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: NetworkSecurityAuthzPolicyHttpRulesToOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRules {
  /**
  * CEL expression that describes the conditions to be satisfied for the action. The result of the CEL expression is ANDed with the from and to. Refer to the CEL language reference for a list of available attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#when NetworkSecurityAuthzPolicy#when}
  */
  readonly when?: string;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#from NetworkSecurityAuthzPolicy#from}
  */
  readonly from?: NetworkSecurityAuthzPolicyHttpRulesFrom;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#to NetworkSecurityAuthzPolicy#to}
  */
  readonly to?: NetworkSecurityAuthzPolicyHttpRulesTo;
}

export function networkSecurityAuthzPolicyHttpRulesToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    when: cdktf.stringToTerraform(struct!.when),
    from: networkSecurityAuthzPolicyHttpRulesFromToTerraform(struct!.from),
    to: networkSecurityAuthzPolicyHttpRulesToToTerraform(struct!.to),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    when: {
      value: cdktf.stringToHclTerraform(struct!.when),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: networkSecurityAuthzPolicyHttpRulesFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromList",
    },
    to: {
      value: networkSecurityAuthzPolicyHttpRulesToToHclTerraform(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._when !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when;
    }
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._when = undefined;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._when = value.when;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
  }

  // when - computed: false, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }

  // from - computed: false, optional: true, required: false
  private _from = new NetworkSecurityAuthzPolicyHttpRulesFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: NetworkSecurityAuthzPolicyHttpRulesFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new NetworkSecurityAuthzPolicyHttpRulesToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: NetworkSecurityAuthzPolicyHttpRulesTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyTarget {
  /**
  * All gateways and forwarding rules referenced by this policy and extensions must share the same load balancing scheme.
  * For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED", "INTERNAL_SELF_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#load_balancing_scheme NetworkSecurityAuthzPolicy#load_balancing_scheme}
  */
  readonly loadBalancingScheme: string;
  /**
  * A list of references to the Forwarding Rules on which this policy will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#resources NetworkSecurityAuthzPolicy#resources}
  */
  readonly resources?: string[];
}

export function networkSecurityAuthzPolicyTargetToTerraform(struct?: NetworkSecurityAuthzPolicyTargetOutputReference | NetworkSecurityAuthzPolicyTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancing_scheme: cdktf.stringToTerraform(struct!.loadBalancingScheme),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}


export function networkSecurityAuthzPolicyTargetToHclTerraform(struct?: NetworkSecurityAuthzPolicyTargetOutputReference | NetworkSecurityAuthzPolicyTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancing_scheme: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancingScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingScheme = this._loadBalancingScheme;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadBalancingScheme = undefined;
      this._resources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadBalancingScheme = value.loadBalancingScheme;
      this._resources = value.resources;
    }
  }

  // load_balancing_scheme - computed: false, optional: false, required: true
  private _loadBalancingScheme?: string; 
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string) {
    this._loadBalancingScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingSchemeInput() {
    return this._loadBalancingScheme;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface NetworkSecurityAuthzPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#create NetworkSecurityAuthzPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#delete NetworkSecurityAuthzPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#update NetworkSecurityAuthzPolicy#update}
  */
  readonly update?: string;
}

export function networkSecurityAuthzPolicyTimeoutsToTerraform(struct?: NetworkSecurityAuthzPolicyTimeouts | cdktf.IResolvable): any {
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


export function networkSecurityAuthzPolicyTimeoutsToHclTerraform(struct?: NetworkSecurityAuthzPolicyTimeouts | cdktf.IResolvable): any {
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

export class NetworkSecurityAuthzPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkSecurityAuthzPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy google_network_security_authz_policy}
*/
export class NetworkSecurityAuthzPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_authz_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSecurityAuthzPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecurityAuthzPolicy to import
  * @param importFromId The id of the existing NetworkSecurityAuthzPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecurityAuthzPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_security_authz_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_authz_policy google_network_security_authz_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityAuthzPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityAuthzPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_authz_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.39.0',
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
    this._action = config.action;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._customProvider.internalValue = config.customProvider;
    this._httpRules.internalValue = config.httpRules;
    this._target.internalValue = config.target;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // custom_provider - computed: false, optional: true, required: false
  private _customProvider = new NetworkSecurityAuthzPolicyCustomProviderOutputReference(this, "custom_provider");
  public get customProvider() {
    return this._customProvider;
  }
  public putCustomProvider(value: NetworkSecurityAuthzPolicyCustomProvider) {
    this._customProvider.internalValue = value;
  }
  public resetCustomProvider() {
    this._customProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProviderInput() {
    return this._customProvider.internalValue;
  }

  // http_rules - computed: false, optional: true, required: false
  private _httpRules = new NetworkSecurityAuthzPolicyHttpRulesList(this, "http_rules", false);
  public get httpRules() {
    return this._httpRules;
  }
  public putHttpRules(value: NetworkSecurityAuthzPolicyHttpRules[] | cdktf.IResolvable) {
    this._httpRules.internalValue = value;
  }
  public resetHttpRules() {
    this._httpRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRulesInput() {
    return this._httpRules.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new NetworkSecurityAuthzPolicyTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: NetworkSecurityAuthzPolicyTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkSecurityAuthzPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkSecurityAuthzPolicyTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      custom_provider: networkSecurityAuthzPolicyCustomProviderToTerraform(this._customProvider.internalValue),
      http_rules: cdktf.listMapper(networkSecurityAuthzPolicyHttpRulesToTerraform, true)(this._httpRules.internalValue),
      target: networkSecurityAuthzPolicyTargetToTerraform(this._target.internalValue),
      timeouts: networkSecurityAuthzPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      custom_provider: {
        value: networkSecurityAuthzPolicyCustomProviderToHclTerraform(this._customProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityAuthzPolicyCustomProviderList",
      },
      http_rules: {
        value: cdktf.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToHclTerraform, true)(this._httpRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityAuthzPolicyHttpRulesList",
      },
      target: {
        value: networkSecurityAuthzPolicyTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityAuthzPolicyTargetList",
      },
      timeouts: {
        value: networkSecurityAuthzPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkSecurityAuthzPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
