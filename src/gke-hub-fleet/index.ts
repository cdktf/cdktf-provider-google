/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeHubFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A user-assigned display name of the Fleet. When present, it must be between 4 to 30 characters.
  * Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#display_name GkeHubFleet#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#id GkeHubFleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#project GkeHubFleet#project}
  */
  readonly project?: string;
  /**
  * default_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#default_cluster_config GkeHubFleet#default_cluster_config}
  */
  readonly defaultClusterConfig?: GkeHubFleetDefaultClusterConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#timeouts GkeHubFleet#timeouts}
  */
  readonly timeouts?: GkeHubFleetTimeouts;
}
export interface GkeHubFleetState {
}

export function gkeHubFleetStateToTerraform(struct?: GkeHubFleetState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeHubFleetStateToHclTerraform(struct?: GkeHubFleetState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeHubFleetStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeHubFleetState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFleetState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }
}

export class GkeHubFleetStateList extends cdktf.ComplexList {

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
  public get(index: number): GkeHubFleetStateOutputReference {
    return new GkeHubFleetStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings {
  /**
  * The relative resource name of the binauthz platform policy to audit. GKE
  * platform policies have the following format:
  * 'projects/{project_number}/platforms/gke/policies/{policy_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#name GkeHubFleet#name}
  */
  readonly name?: string;
}

export function gkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsToTerraform(struct?: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function gkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsToHclTerraform(struct?: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList extends cdktf.ComplexList {
  public internalValue? : GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings[] | cdktf.IResolvable

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
  public get(index: number): GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference {
    return new GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig {
  /**
  * Mode of operation for binauthz policy evaluation. Possible values: ["DISABLED", "POLICY_BINDINGS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#evaluation_mode GkeHubFleet#evaluation_mode}
  */
  readonly evaluationMode?: string;
  /**
  * policy_bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#policy_bindings GkeHubFleet#policy_bindings}
  */
  readonly policyBindings?: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings[] | cdktf.IResolvable;
}

export function gkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigToTerraform(struct?: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference | GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_mode: cdktf.stringToTerraform(struct!.evaluationMode),
    policy_bindings: cdktf.listMapper(gkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsToTerraform, true)(struct!.policyBindings),
  }
}


export function gkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigToHclTerraform(struct?: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference | GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_mode: {
      value: cdktf.stringToHclTerraform(struct!.evaluationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_bindings: {
      value: cdktf.listMapperHcl(gkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsToHclTerraform, true)(struct!.policyBindings),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMode = this._evaluationMode;
    }
    if (this._policyBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyBindings = this._policyBindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationMode = undefined;
      this._policyBindings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationMode = value.evaluationMode;
      this._policyBindings.internalValue = value.policyBindings;
    }
  }

  // evaluation_mode - computed: false, optional: true, required: false
  private _evaluationMode?: string; 
  public get evaluationMode() {
    return this.getStringAttribute('evaluation_mode');
  }
  public set evaluationMode(value: string) {
    this._evaluationMode = value;
  }
  public resetEvaluationMode() {
    this._evaluationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationModeInput() {
    return this._evaluationMode;
  }

  // policy_bindings - computed: false, optional: true, required: false
  private _policyBindings = new GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList(this, "policy_bindings", false);
  public get policyBindings() {
    return this._policyBindings;
  }
  public putPolicyBindings(value: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings[] | cdktf.IResolvable) {
    this._policyBindings.internalValue = value;
  }
  public resetPolicyBindings() {
    this._policyBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBindingsInput() {
    return this._policyBindings.internalValue;
  }
}
export interface GkeHubFleetDefaultClusterConfigSecurityPostureConfig {
  /**
  * Sets which mode to use for Security Posture features. Possible values: ["DISABLED", "BASIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#mode GkeHubFleet#mode}
  */
  readonly mode?: string;
  /**
  * Sets which mode to use for vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_BASIC", "VULNERABILITY_ENTERPRISE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#vulnerability_mode GkeHubFleet#vulnerability_mode}
  */
  readonly vulnerabilityMode?: string;
}

export function gkeHubFleetDefaultClusterConfigSecurityPostureConfigToTerraform(struct?: GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference | GkeHubFleetDefaultClusterConfigSecurityPostureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    vulnerability_mode: cdktf.stringToTerraform(struct!.vulnerabilityMode),
  }
}


export function gkeHubFleetDefaultClusterConfigSecurityPostureConfigToHclTerraform(struct?: GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference | GkeHubFleetDefaultClusterConfigSecurityPostureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vulnerability_mode: {
      value: cdktf.stringToHclTerraform(struct!.vulnerabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFleetDefaultClusterConfigSecurityPostureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._vulnerabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityMode = this._vulnerabilityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFleetDefaultClusterConfigSecurityPostureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._vulnerabilityMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._vulnerabilityMode = value.vulnerabilityMode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // vulnerability_mode - computed: false, optional: true, required: false
  private _vulnerabilityMode?: string; 
  public get vulnerabilityMode() {
    return this.getStringAttribute('vulnerability_mode');
  }
  public set vulnerabilityMode(value: string) {
    this._vulnerabilityMode = value;
  }
  public resetVulnerabilityMode() {
    this._vulnerabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityModeInput() {
    return this._vulnerabilityMode;
  }
}
export interface GkeHubFleetDefaultClusterConfig {
  /**
  * binary_authorization_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#binary_authorization_config GkeHubFleet#binary_authorization_config}
  */
  readonly binaryAuthorizationConfig?: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig;
  /**
  * security_posture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#security_posture_config GkeHubFleet#security_posture_config}
  */
  readonly securityPostureConfig?: GkeHubFleetDefaultClusterConfigSecurityPostureConfig;
}

export function gkeHubFleetDefaultClusterConfigToTerraform(struct?: GkeHubFleetDefaultClusterConfigOutputReference | GkeHubFleetDefaultClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_authorization_config: gkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigToTerraform(struct!.binaryAuthorizationConfig),
    security_posture_config: gkeHubFleetDefaultClusterConfigSecurityPostureConfigToTerraform(struct!.securityPostureConfig),
  }
}


export function gkeHubFleetDefaultClusterConfigToHclTerraform(struct?: GkeHubFleetDefaultClusterConfigOutputReference | GkeHubFleetDefaultClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_authorization_config: {
      value: gkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigToHclTerraform(struct!.binaryAuthorizationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigList",
    },
    security_posture_config: {
      value: gkeHubFleetDefaultClusterConfigSecurityPostureConfigToHclTerraform(struct!.securityPostureConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFleetDefaultClusterConfigSecurityPostureConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFleetDefaultClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFleetDefaultClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryAuthorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryAuthorizationConfig = this._binaryAuthorizationConfig?.internalValue;
    }
    if (this._securityPostureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityPostureConfig = this._securityPostureConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFleetDefaultClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._binaryAuthorizationConfig.internalValue = undefined;
      this._securityPostureConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._binaryAuthorizationConfig.internalValue = value.binaryAuthorizationConfig;
      this._securityPostureConfig.internalValue = value.securityPostureConfig;
    }
  }

  // binary_authorization_config - computed: false, optional: true, required: false
  private _binaryAuthorizationConfig = new GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference(this, "binary_authorization_config");
  public get binaryAuthorizationConfig() {
    return this._binaryAuthorizationConfig;
  }
  public putBinaryAuthorizationConfig(value: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig) {
    this._binaryAuthorizationConfig.internalValue = value;
  }
  public resetBinaryAuthorizationConfig() {
    this._binaryAuthorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationConfigInput() {
    return this._binaryAuthorizationConfig.internalValue;
  }

  // security_posture_config - computed: false, optional: true, required: false
  private _securityPostureConfig = new GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference(this, "security_posture_config");
  public get securityPostureConfig() {
    return this._securityPostureConfig;
  }
  public putSecurityPostureConfig(value: GkeHubFleetDefaultClusterConfigSecurityPostureConfig) {
    this._securityPostureConfig.internalValue = value;
  }
  public resetSecurityPostureConfig() {
    this._securityPostureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPostureConfigInput() {
    return this._securityPostureConfig.internalValue;
  }
}
export interface GkeHubFleetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#create GkeHubFleet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#delete GkeHubFleet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#update GkeHubFleet#update}
  */
  readonly update?: string;
}

export function gkeHubFleetTimeoutsToTerraform(struct?: GkeHubFleetTimeouts | cdktf.IResolvable): any {
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


export function gkeHubFleetTimeoutsToHclTerraform(struct?: GkeHubFleetTimeouts | cdktf.IResolvable): any {
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

export class GkeHubFleetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeHubFleetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeHubFleetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet google_gke_hub_fleet}
*/
export class GkeHubFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gke_hub_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GkeHubFleet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeHubFleet to import
  * @param importFromId The id of the existing GkeHubFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeHubFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gke_hub_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/gke_hub_fleet google_gke_hub_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeHubFleetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GkeHubFleetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_gke_hub_fleet',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.14.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._project = config.project;
    this._defaultClusterConfig.internalValue = config.defaultClusterConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // state - computed: true, optional: false, required: false
  private _state = new GkeHubFleetStateList(this, "state", false);
  public get state() {
    return this._state;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // default_cluster_config - computed: false, optional: true, required: false
  private _defaultClusterConfig = new GkeHubFleetDefaultClusterConfigOutputReference(this, "default_cluster_config");
  public get defaultClusterConfig() {
    return this._defaultClusterConfig;
  }
  public putDefaultClusterConfig(value: GkeHubFleetDefaultClusterConfig) {
    this._defaultClusterConfig.internalValue = value;
  }
  public resetDefaultClusterConfig() {
    this._defaultClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClusterConfigInput() {
    return this._defaultClusterConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeHubFleetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeHubFleetTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      default_cluster_config: gkeHubFleetDefaultClusterConfigToTerraform(this._defaultClusterConfig.internalValue),
      timeouts: gkeHubFleetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_cluster_config: {
        value: gkeHubFleetDefaultClusterConfigToHclTerraform(this._defaultClusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeHubFleetDefaultClusterConfigList",
      },
      timeouts: {
        value: gkeHubFleetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeHubFleetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
