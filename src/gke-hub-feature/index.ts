/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeHubFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#id GkeHubFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * GCP labels for this Feature.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#labels GkeHubFeature#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#location GkeHubFeature#location}
  */
  readonly location: string;
  /**
  * The full, unique name of this Feature resource
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#name GkeHubFeature#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#project GkeHubFeature#project}
  */
  readonly project?: string;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#spec GkeHubFeature#spec}
  */
  readonly spec?: GkeHubFeatureSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#timeouts GkeHubFeature#timeouts}
  */
  readonly timeouts?: GkeHubFeatureTimeouts;
}
export interface GkeHubFeatureResourceState {
}

export function gkeHubFeatureResourceStateToTerraform(struct?: GkeHubFeatureResourceState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GkeHubFeatureResourceStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeHubFeatureResourceState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureResourceState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // has_resources - computed: true, optional: false, required: false
  public get hasResources() {
    return this.getBooleanAttribute('has_resources');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GkeHubFeatureResourceStateList extends cdktf.ComplexList {

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
  public get(index: number): GkeHubFeatureResourceStateOutputReference {
    return new GkeHubFeatureResourceStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubFeatureStateState {
}

export function gkeHubFeatureStateStateToTerraform(struct?: GkeHubFeatureStateState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GkeHubFeatureStateStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeHubFeatureStateState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureStateState | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GkeHubFeatureStateStateList extends cdktf.ComplexList {

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
  public get(index: number): GkeHubFeatureStateStateOutputReference {
    return new GkeHubFeatureStateStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubFeatureState {
}

export function gkeHubFeatureStateToTerraform(struct?: GkeHubFeatureState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GkeHubFeatureStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeHubFeatureState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  private _state = new GkeHubFeatureStateStateList(this, "state", false);
  public get state() {
    return this._state;
  }
}

export class GkeHubFeatureStateList extends cdktf.ComplexList {

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
  public get(index: number): GkeHubFeatureStateOutputReference {
    return new GkeHubFeatureStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig {
  /**
  * Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#mode GkeHubFeature#mode}
  */
  readonly mode?: string;
}

export function gkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigToTerraform(struct?: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference | GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
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
}
export interface GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig {
  /**
  * Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#mode GkeHubFeature#mode}
  */
  readonly mode?: string;
}

export function gkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigToTerraform(struct?: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference | GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
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
}
export interface GkeHubFeatureSpecFleetobservabilityLoggingConfig {
  /**
  * default_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#default_config GkeHubFeature#default_config}
  */
  readonly defaultConfig?: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig;
  /**
  * fleet_scope_logs_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#fleet_scope_logs_config GkeHubFeature#fleet_scope_logs_config}
  */
  readonly fleetScopeLogsConfig?: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig;
}

export function gkeHubFeatureSpecFleetobservabilityLoggingConfigToTerraform(struct?: GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference | GkeHubFeatureSpecFleetobservabilityLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_config: gkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigToTerraform(struct!.defaultConfig),
    fleet_scope_logs_config: gkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigToTerraform(struct!.fleetScopeLogsConfig),
  }
}

export class GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureSpecFleetobservabilityLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConfig = this._defaultConfig?.internalValue;
    }
    if (this._fleetScopeLogsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetScopeLogsConfig = this._fleetScopeLogsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureSpecFleetobservabilityLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultConfig.internalValue = undefined;
      this._fleetScopeLogsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultConfig.internalValue = value.defaultConfig;
      this._fleetScopeLogsConfig.internalValue = value.fleetScopeLogsConfig;
    }
  }

  // default_config - computed: false, optional: true, required: false
  private _defaultConfig = new GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference(this, "default_config");
  public get defaultConfig() {
    return this._defaultConfig;
  }
  public putDefaultConfig(value: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig) {
    this._defaultConfig.internalValue = value;
  }
  public resetDefaultConfig() {
    this._defaultConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigInput() {
    return this._defaultConfig.internalValue;
  }

  // fleet_scope_logs_config - computed: false, optional: true, required: false
  private _fleetScopeLogsConfig = new GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference(this, "fleet_scope_logs_config");
  public get fleetScopeLogsConfig() {
    return this._fleetScopeLogsConfig;
  }
  public putFleetScopeLogsConfig(value: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig) {
    this._fleetScopeLogsConfig.internalValue = value;
  }
  public resetFleetScopeLogsConfig() {
    this._fleetScopeLogsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetScopeLogsConfigInput() {
    return this._fleetScopeLogsConfig.internalValue;
  }
}
export interface GkeHubFeatureSpecFleetobservability {
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#logging_config GkeHubFeature#logging_config}
  */
  readonly loggingConfig?: GkeHubFeatureSpecFleetobservabilityLoggingConfig;
}

export function gkeHubFeatureSpecFleetobservabilityToTerraform(struct?: GkeHubFeatureSpecFleetobservabilityOutputReference | GkeHubFeatureSpecFleetobservability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging_config: gkeHubFeatureSpecFleetobservabilityLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class GkeHubFeatureSpecFleetobservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureSpecFleetobservability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loggingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureSpecFleetobservability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loggingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loggingConfig.internalValue = value.loggingConfig;
    }
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: GkeHubFeatureSpecFleetobservabilityLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }
}
export interface GkeHubFeatureSpecMulticlusteringress {
  /**
  * Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#config_membership GkeHubFeature#config_membership}
  */
  readonly configMembership: string;
}

export function gkeHubFeatureSpecMulticlusteringressToTerraform(struct?: GkeHubFeatureSpecMulticlusteringressOutputReference | GkeHubFeatureSpecMulticlusteringress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_membership: cdktf.stringToTerraform(struct!.configMembership),
  }
}

export class GkeHubFeatureSpecMulticlusteringressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureSpecMulticlusteringress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMembership !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMembership = this._configMembership;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureSpecMulticlusteringress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configMembership = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configMembership = value.configMembership;
    }
  }

  // config_membership - computed: false, optional: false, required: true
  private _configMembership?: string; 
  public get configMembership() {
    return this.getStringAttribute('config_membership');
  }
  public set configMembership(value: string) {
    this._configMembership = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMembershipInput() {
    return this._configMembership;
  }
}
export interface GkeHubFeatureSpec {
  /**
  * fleetobservability block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#fleetobservability GkeHubFeature#fleetobservability}
  */
  readonly fleetobservability?: GkeHubFeatureSpecFleetobservability;
  /**
  * multiclusteringress block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#multiclusteringress GkeHubFeature#multiclusteringress}
  */
  readonly multiclusteringress?: GkeHubFeatureSpecMulticlusteringress;
}

export function gkeHubFeatureSpecToTerraform(struct?: GkeHubFeatureSpecOutputReference | GkeHubFeatureSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fleetobservability: gkeHubFeatureSpecFleetobservabilityToTerraform(struct!.fleetobservability),
    multiclusteringress: gkeHubFeatureSpecMulticlusteringressToTerraform(struct!.multiclusteringress),
  }
}

export class GkeHubFeatureSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fleetobservability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetobservability = this._fleetobservability?.internalValue;
    }
    if (this._multiclusteringress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiclusteringress = this._multiclusteringress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fleetobservability.internalValue = undefined;
      this._multiclusteringress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fleetobservability.internalValue = value.fleetobservability;
      this._multiclusteringress.internalValue = value.multiclusteringress;
    }
  }

  // fleetobservability - computed: false, optional: true, required: false
  private _fleetobservability = new GkeHubFeatureSpecFleetobservabilityOutputReference(this, "fleetobservability");
  public get fleetobservability() {
    return this._fleetobservability;
  }
  public putFleetobservability(value: GkeHubFeatureSpecFleetobservability) {
    this._fleetobservability.internalValue = value;
  }
  public resetFleetobservability() {
    this._fleetobservability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetobservabilityInput() {
    return this._fleetobservability.internalValue;
  }

  // multiclusteringress - computed: false, optional: true, required: false
  private _multiclusteringress = new GkeHubFeatureSpecMulticlusteringressOutputReference(this, "multiclusteringress");
  public get multiclusteringress() {
    return this._multiclusteringress;
  }
  public putMulticlusteringress(value: GkeHubFeatureSpecMulticlusteringress) {
    this._multiclusteringress.internalValue = value;
  }
  public resetMulticlusteringress() {
    this._multiclusteringress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiclusteringressInput() {
    return this._multiclusteringress.internalValue;
  }
}
export interface GkeHubFeatureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#create GkeHubFeature#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#delete GkeHubFeature#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature#update GkeHubFeature#update}
  */
  readonly update?: string;
}

export function gkeHubFeatureTimeoutsToTerraform(struct?: GkeHubFeatureTimeouts | cdktf.IResolvable): any {
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

export class GkeHubFeatureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeHubFeatureTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeHubFeatureTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature google_gke_hub_feature}
*/
export class GkeHubFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gke_hub_feature";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.76.0/docs/resources/gke_hub_feature google_gke_hub_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeHubFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: GkeHubFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_hub_feature',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.76.0',
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
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._spec.internalValue = config.spec;
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

  // resource_state - computed: true, optional: false, required: false
  private _resourceState = new GkeHubFeatureResourceStateList(this, "resource_state", false);
  public get resourceState() {
    return this._resourceState;
  }

  // state - computed: true, optional: false, required: false
  private _state = new GkeHubFeatureStateList(this, "state", false);
  public get state() {
    return this._state;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new GkeHubFeatureSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GkeHubFeatureSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeHubFeatureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeHubFeatureTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      spec: gkeHubFeatureSpecToTerraform(this._spec.internalValue),
      timeouts: gkeHubFeatureTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
