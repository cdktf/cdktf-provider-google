/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeonpremVmwareAdminClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations on the VMware Admin Cluster.
  * This field has the same restrictions as Kubernetes annotations.
  * The total size of all keys and values combined is limited to 256k.
  * Key can have 2 segments: prefix (optional) and name (required),
  * separated by a slash (/).
  * Prefix must be a DNS subdomain.
  * Name must be 63 characters or less, begin and end with alphanumerics,
  * with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#annotations GkeonpremVmwareAdminCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The bootstrap cluster this VMware admin cluster belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#bootstrap_cluster_membership GkeonpremVmwareAdminCluster#bootstrap_cluster_membership}
  */
  readonly bootstrapClusterMembership?: string;
  /**
  * A human readable description of this VMware admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#description GkeonpremVmwareAdminCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#id GkeonpremVmwareAdminCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The OS image type for the VMware admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#image_type GkeonpremVmwareAdminCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#location GkeonpremVmwareAdminCluster#location}
  */
  readonly location: string;
  /**
  * The VMware admin cluster resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#name GkeonpremVmwareAdminCluster#name}
  */
  readonly name: string;
  /**
  * The Anthos clusters on the VMware version for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#on_prem_version GkeonpremVmwareAdminCluster#on_prem_version}
  */
  readonly onPremVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#project GkeonpremVmwareAdminCluster#project}
  */
  readonly project?: string;
  /**
  * addon_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#addon_node GkeonpremVmwareAdminCluster#addon_node}
  */
  readonly addonNode?: GkeonpremVmwareAdminClusterAddonNode;
  /**
  * anti_affinity_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#anti_affinity_groups GkeonpremVmwareAdminCluster#anti_affinity_groups}
  */
  readonly antiAffinityGroups?: GkeonpremVmwareAdminClusterAntiAffinityGroups;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#authorization GkeonpremVmwareAdminCluster#authorization}
  */
  readonly authorization?: GkeonpremVmwareAdminClusterAuthorization;
  /**
  * auto_repair_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#auto_repair_config GkeonpremVmwareAdminCluster#auto_repair_config}
  */
  readonly autoRepairConfig?: GkeonpremVmwareAdminClusterAutoRepairConfig;
  /**
  * control_plane_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_node GkeonpremVmwareAdminCluster#control_plane_node}
  */
  readonly controlPlaneNode?: GkeonpremVmwareAdminClusterControlPlaneNode;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#load_balancer GkeonpremVmwareAdminCluster#load_balancer}
  */
  readonly loadBalancer?: GkeonpremVmwareAdminClusterLoadBalancer;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#network_config GkeonpremVmwareAdminCluster#network_config}
  */
  readonly networkConfig: GkeonpremVmwareAdminClusterNetworkConfig;
  /**
  * platform_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#platform_config GkeonpremVmwareAdminCluster#platform_config}
  */
  readonly platformConfig?: GkeonpremVmwareAdminClusterPlatformConfig;
  /**
  * private_registry_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#private_registry_config GkeonpremVmwareAdminCluster#private_registry_config}
  */
  readonly privateRegistryConfig?: GkeonpremVmwareAdminClusterPrivateRegistryConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#timeouts GkeonpremVmwareAdminCluster#timeouts}
  */
  readonly timeouts?: GkeonpremVmwareAdminClusterTimeouts;
  /**
  * vcenter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#vcenter GkeonpremVmwareAdminCluster#vcenter}
  */
  readonly vcenter?: GkeonpremVmwareAdminClusterVcenter;
}
export interface GkeonpremVmwareAdminClusterFleet {
}

export function gkeonpremVmwareAdminClusterFleetToTerraform(struct?: GkeonpremVmwareAdminClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremVmwareAdminClusterFleetToHclTerraform(struct?: GkeonpremVmwareAdminClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremVmwareAdminClusterFleetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareAdminClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // membership - computed: true, optional: false, required: false
  public get membership() {
    return this.getStringAttribute('membership');
  }
}

export class GkeonpremVmwareAdminClusterFleetList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremVmwareAdminClusterFleetOutputReference {
    return new GkeonpremVmwareAdminClusterFleetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareAdminClusterStatusConditions {
}

export function gkeonpremVmwareAdminClusterStatusConditionsToTerraform(struct?: GkeonpremVmwareAdminClusterStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremVmwareAdminClusterStatusConditionsToHclTerraform(struct?: GkeonpremVmwareAdminClusterStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremVmwareAdminClusterStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareAdminClusterStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterStatusConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_transition_time - computed: true, optional: false, required: false
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GkeonpremVmwareAdminClusterStatusConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremVmwareAdminClusterStatusConditionsOutputReference {
    return new GkeonpremVmwareAdminClusterStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareAdminClusterStatus {
}

export function gkeonpremVmwareAdminClusterStatusToTerraform(struct?: GkeonpremVmwareAdminClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremVmwareAdminClusterStatusToHclTerraform(struct?: GkeonpremVmwareAdminClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremVmwareAdminClusterStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareAdminClusterStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GkeonpremVmwareAdminClusterStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GkeonpremVmwareAdminClusterStatusList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremVmwareAdminClusterStatusOutputReference {
    return new GkeonpremVmwareAdminClusterStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig {
  /**
  * Whether to enable controle plane node auto resizing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function gkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigToTerraform(struct?: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference | GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function gkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference | GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig): any {
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

export class GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig | undefined) {
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
export interface GkeonpremVmwareAdminClusterAddonNode {
  /**
  * auto_resize_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#auto_resize_config GkeonpremVmwareAdminCluster#auto_resize_config}
  */
  readonly autoResizeConfig?: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig;
}

export function gkeonpremVmwareAdminClusterAddonNodeToTerraform(struct?: GkeonpremVmwareAdminClusterAddonNodeOutputReference | GkeonpremVmwareAdminClusterAddonNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_resize_config: gkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigToTerraform(struct!.autoResizeConfig),
  }
}


export function gkeonpremVmwareAdminClusterAddonNodeToHclTerraform(struct?: GkeonpremVmwareAdminClusterAddonNodeOutputReference | GkeonpremVmwareAdminClusterAddonNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_resize_config: {
      value: gkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigToHclTerraform(struct!.autoResizeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterAddonNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterAddonNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoResizeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoResizeConfig = this._autoResizeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterAddonNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoResizeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoResizeConfig.internalValue = value.autoResizeConfig;
    }
  }

  // auto_resize_config - computed: false, optional: true, required: false
  private _autoResizeConfig = new GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference(this, "auto_resize_config");
  public get autoResizeConfig() {
    return this._autoResizeConfig;
  }
  public putAutoResizeConfig(value: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig) {
    this._autoResizeConfig.internalValue = value;
  }
  public resetAutoResizeConfig() {
    this._autoResizeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResizeConfigInput() {
    return this._autoResizeConfig.internalValue;
  }
}
export interface GkeonpremVmwareAdminClusterAntiAffinityGroups {
  /**
  * Spread nodes across at least three physical hosts (requires at least three
  * hosts).
  * Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#aag_config_disabled GkeonpremVmwareAdminCluster#aag_config_disabled}
  */
  readonly aagConfigDisabled: boolean | cdktf.IResolvable;
}

export function gkeonpremVmwareAdminClusterAntiAffinityGroupsToTerraform(struct?: GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference | GkeonpremVmwareAdminClusterAntiAffinityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aag_config_disabled: cdktf.booleanToTerraform(struct!.aagConfigDisabled),
  }
}


export function gkeonpremVmwareAdminClusterAntiAffinityGroupsToHclTerraform(struct?: GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference | GkeonpremVmwareAdminClusterAntiAffinityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aag_config_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.aagConfigDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterAntiAffinityGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aagConfigDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aagConfigDisabled = this._aagConfigDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterAntiAffinityGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aagConfigDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aagConfigDisabled = value.aagConfigDisabled;
    }
  }

  // aag_config_disabled - computed: false, optional: false, required: true
  private _aagConfigDisabled?: boolean | cdktf.IResolvable; 
  public get aagConfigDisabled() {
    return this.getBooleanAttribute('aag_config_disabled');
  }
  public set aagConfigDisabled(value: boolean | cdktf.IResolvable) {
    this._aagConfigDisabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aagConfigDisabledInput() {
    return this._aagConfigDisabled;
  }
}
export interface GkeonpremVmwareAdminClusterAuthorizationViewerUsers {
  /**
  * The name of the user, e.g. 'my-gcp-id@gmail.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#username GkeonpremVmwareAdminCluster#username}
  */
  readonly username: string;
}

export function gkeonpremVmwareAdminClusterAuthorizationViewerUsersToTerraform(struct?: GkeonpremVmwareAdminClusterAuthorizationViewerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gkeonpremVmwareAdminClusterAuthorizationViewerUsersToHclTerraform(struct?: GkeonpremVmwareAdminClusterAuthorizationViewerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareAdminClusterAuthorizationViewerUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterAuthorizationViewerUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._username = value.username;
    }
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
}

export class GkeonpremVmwareAdminClusterAuthorizationViewerUsersList extends cdktf.ComplexList {
  public internalValue? : GkeonpremVmwareAdminClusterAuthorizationViewerUsers[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference {
    return new GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareAdminClusterAuthorization {
  /**
  * viewer_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#viewer_users GkeonpremVmwareAdminCluster#viewer_users}
  */
  readonly viewerUsers?: GkeonpremVmwareAdminClusterAuthorizationViewerUsers[] | cdktf.IResolvable;
}

export function gkeonpremVmwareAdminClusterAuthorizationToTerraform(struct?: GkeonpremVmwareAdminClusterAuthorizationOutputReference | GkeonpremVmwareAdminClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    viewer_users: cdktf.listMapper(gkeonpremVmwareAdminClusterAuthorizationViewerUsersToTerraform, true)(struct!.viewerUsers),
  }
}


export function gkeonpremVmwareAdminClusterAuthorizationToHclTerraform(struct?: GkeonpremVmwareAdminClusterAuthorizationOutputReference | GkeonpremVmwareAdminClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    viewer_users: {
      value: cdktf.listMapperHcl(gkeonpremVmwareAdminClusterAuthorizationViewerUsersToHclTerraform, true)(struct!.viewerUsers),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterAuthorizationViewerUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._viewerUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerUsers = this._viewerUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._viewerUsers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._viewerUsers.internalValue = value.viewerUsers;
    }
  }

  // viewer_users - computed: false, optional: true, required: false
  private _viewerUsers = new GkeonpremVmwareAdminClusterAuthorizationViewerUsersList(this, "viewer_users", false);
  public get viewerUsers() {
    return this._viewerUsers;
  }
  public putViewerUsers(value: GkeonpremVmwareAdminClusterAuthorizationViewerUsers[] | cdktf.IResolvable) {
    this._viewerUsers.internalValue = value;
  }
  public resetViewerUsers() {
    this._viewerUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerUsersInput() {
    return this._viewerUsers.internalValue;
  }
}
export interface GkeonpremVmwareAdminClusterAutoRepairConfig {
  /**
  * Whether auto repair is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function gkeonpremVmwareAdminClusterAutoRepairConfigToTerraform(struct?: GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference | GkeonpremVmwareAdminClusterAutoRepairConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function gkeonpremVmwareAdminClusterAutoRepairConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference | GkeonpremVmwareAdminClusterAutoRepairConfig): any {
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

export class GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterAutoRepairConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterAutoRepairConfig | undefined) {
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
export interface GkeonpremVmwareAdminClusterControlPlaneNode {
  /**
  * The number of vCPUs for the control-plane node of the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#cpus GkeonpremVmwareAdminCluster#cpus}
  */
  readonly cpus?: number;
  /**
  * The number of mebibytes of memory for the control-plane node of the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#memory GkeonpremVmwareAdminCluster#memory}
  */
  readonly memory?: number;
  /**
  * The number of control plane nodes for this VMware admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#replicas GkeonpremVmwareAdminCluster#replicas}
  */
  readonly replicas?: number;
}

export function gkeonpremVmwareAdminClusterControlPlaneNodeToTerraform(struct?: GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference | GkeonpremVmwareAdminClusterControlPlaneNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpus: cdktf.numberToTerraform(struct!.cpus),
    memory: cdktf.numberToTerraform(struct!.memory),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function gkeonpremVmwareAdminClusterControlPlaneNodeToHclTerraform(struct?: GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference | GkeonpremVmwareAdminClusterControlPlaneNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpus: {
      value: cdktf.numberToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterControlPlaneNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterControlPlaneNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpus = undefined;
      this._memory = undefined;
      this._replicas = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpus = value.cpus;
      this._memory = value.memory;
      this._replicas = value.replicas;
    }
  }

  // cpus - computed: false, optional: true, required: false
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface GkeonpremVmwareAdminClusterLoadBalancerF5Config {
  /**
  * The load balancer's IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}
  */
  readonly address?: string;
  /**
  * he preexisting partition to be used by the load balancer. T
  * his partition is usually created for the admin cluster for example:
  * 'my-f5-admin-partition'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#partition GkeonpremVmwareAdminCluster#partition}
  */
  readonly partition?: string;
  /**
  * The pool name. Only necessary, if using SNAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#snat_pool GkeonpremVmwareAdminCluster#snat_pool}
  */
  readonly snatPool?: string;
}

export function gkeonpremVmwareAdminClusterLoadBalancerF5ConfigToTerraform(struct?: GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference | GkeonpremVmwareAdminClusterLoadBalancerF5Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    partition: cdktf.stringToTerraform(struct!.partition),
    snat_pool: cdktf.stringToTerraform(struct!.snatPool),
  }
}


export function gkeonpremVmwareAdminClusterLoadBalancerF5ConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference | GkeonpremVmwareAdminClusterLoadBalancerF5Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_pool: {
      value: cdktf.stringToHclTerraform(struct!.snatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterLoadBalancerF5Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._snatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterLoadBalancerF5Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._partition = undefined;
      this._snatPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._partition = value.partition;
      this._snatPool = value.snatPool;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool?: string; 
  public get snatPool() {
    return this.getStringAttribute('snat_pool');
  }
  public set snatPool(value: string) {
    this._snatPool = value;
  }
  public resetSnatPool() {
    this._snatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool;
  }
}
export interface GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig {
  /**
  * NodePort for add-ons server in the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#addons_node_port GkeonpremVmwareAdminCluster#addons_node_port}
  */
  readonly addonsNodePort?: number;
  /**
  * NodePort for control plane service. The Kubernetes API server in the admin
  * cluster is implemented as a Service of type NodePort (ex. 30968).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_node_port GkeonpremVmwareAdminCluster#control_plane_node_port}
  */
  readonly controlPlaneNodePort?: number;
  /**
  * NodePort for ingress service's http. The ingress service in the admin
  * cluster is implemented as a Service of type NodePort (ex. 32527).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#ingress_http_node_port GkeonpremVmwareAdminCluster#ingress_http_node_port}
  */
  readonly ingressHttpNodePort?: number;
  /**
  * NodePort for ingress service's https. The ingress service in the admin
  * cluster is implemented as a Service of type NodePort (ex. 30139).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#ingress_https_node_port GkeonpremVmwareAdminCluster#ingress_https_node_port}
  */
  readonly ingressHttpsNodePort?: number;
  /**
  * NodePort for konnectivity server service running as a sidecar in each
  * kube-apiserver pod (ex. 30564).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#konnectivity_server_node_port GkeonpremVmwareAdminCluster#konnectivity_server_node_port}
  */
  readonly konnectivityServerNodePort?: number;
}

export function gkeonpremVmwareAdminClusterLoadBalancerManualLbConfigToTerraform(struct?: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference | GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons_node_port: cdktf.numberToTerraform(struct!.addonsNodePort),
    control_plane_node_port: cdktf.numberToTerraform(struct!.controlPlaneNodePort),
    ingress_http_node_port: cdktf.numberToTerraform(struct!.ingressHttpNodePort),
    ingress_https_node_port: cdktf.numberToTerraform(struct!.ingressHttpsNodePort),
    konnectivity_server_node_port: cdktf.numberToTerraform(struct!.konnectivityServerNodePort),
  }
}


export function gkeonpremVmwareAdminClusterLoadBalancerManualLbConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference | GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons_node_port: {
      value: cdktf.numberToHclTerraform(struct!.addonsNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_plane_node_port: {
      value: cdktf.numberToHclTerraform(struct!.controlPlaneNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress_http_node_port: {
      value: cdktf.numberToHclTerraform(struct!.ingressHttpNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress_https_node_port: {
      value: cdktf.numberToHclTerraform(struct!.ingressHttpsNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    konnectivity_server_node_port: {
      value: cdktf.numberToHclTerraform(struct!.konnectivityServerNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonsNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonsNodePort = this._addonsNodePort;
    }
    if (this._controlPlaneNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneNodePort = this._controlPlaneNodePort;
    }
    if (this._ingressHttpNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressHttpNodePort = this._ingressHttpNodePort;
    }
    if (this._ingressHttpsNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressHttpsNodePort = this._ingressHttpsNodePort;
    }
    if (this._konnectivityServerNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.konnectivityServerNodePort = this._konnectivityServerNodePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addonsNodePort = undefined;
      this._controlPlaneNodePort = undefined;
      this._ingressHttpNodePort = undefined;
      this._ingressHttpsNodePort = undefined;
      this._konnectivityServerNodePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addonsNodePort = value.addonsNodePort;
      this._controlPlaneNodePort = value.controlPlaneNodePort;
      this._ingressHttpNodePort = value.ingressHttpNodePort;
      this._ingressHttpsNodePort = value.ingressHttpsNodePort;
      this._konnectivityServerNodePort = value.konnectivityServerNodePort;
    }
  }

  // addons_node_port - computed: true, optional: true, required: false
  private _addonsNodePort?: number; 
  public get addonsNodePort() {
    return this.getNumberAttribute('addons_node_port');
  }
  public set addonsNodePort(value: number) {
    this._addonsNodePort = value;
  }
  public resetAddonsNodePort() {
    this._addonsNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsNodePortInput() {
    return this._addonsNodePort;
  }

  // control_plane_node_port - computed: true, optional: true, required: false
  private _controlPlaneNodePort?: number; 
  public get controlPlaneNodePort() {
    return this.getNumberAttribute('control_plane_node_port');
  }
  public set controlPlaneNodePort(value: number) {
    this._controlPlaneNodePort = value;
  }
  public resetControlPlaneNodePort() {
    this._controlPlaneNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneNodePortInput() {
    return this._controlPlaneNodePort;
  }

  // ingress_http_node_port - computed: true, optional: true, required: false
  private _ingressHttpNodePort?: number; 
  public get ingressHttpNodePort() {
    return this.getNumberAttribute('ingress_http_node_port');
  }
  public set ingressHttpNodePort(value: number) {
    this._ingressHttpNodePort = value;
  }
  public resetIngressHttpNodePort() {
    this._ingressHttpNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressHttpNodePortInput() {
    return this._ingressHttpNodePort;
  }

  // ingress_https_node_port - computed: true, optional: true, required: false
  private _ingressHttpsNodePort?: number; 
  public get ingressHttpsNodePort() {
    return this.getNumberAttribute('ingress_https_node_port');
  }
  public set ingressHttpsNodePort(value: number) {
    this._ingressHttpsNodePort = value;
  }
  public resetIngressHttpsNodePort() {
    this._ingressHttpsNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressHttpsNodePortInput() {
    return this._ingressHttpsNodePort;
  }

  // konnectivity_server_node_port - computed: true, optional: true, required: false
  private _konnectivityServerNodePort?: number; 
  public get konnectivityServerNodePort() {
    return this.getNumberAttribute('konnectivity_server_node_port');
  }
  public set konnectivityServerNodePort(value: number) {
    this._konnectivityServerNodePort = value;
  }
  public resetKonnectivityServerNodePort() {
    this._konnectivityServerNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get konnectivityServerNodePortInput() {
    return this._konnectivityServerNodePort;
  }
}
export interface GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig {
  /**
  * Metal LB is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function gkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigToTerraform(struct?: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference | GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function gkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference | GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig): any {
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

export class GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig | undefined) {
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
export interface GkeonpremVmwareAdminClusterLoadBalancerVipConfig {
  /**
  * The VIP to configure the load balancer for add-ons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#addons_vip GkeonpremVmwareAdminCluster#addons_vip}
  */
  readonly addonsVip?: string;
  /**
  * The VIP which you previously set aside for the Kubernetes
  * API of this VMware Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_vip GkeonpremVmwareAdminCluster#control_plane_vip}
  */
  readonly controlPlaneVip: string;
}

export function gkeonpremVmwareAdminClusterLoadBalancerVipConfigToTerraform(struct?: GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference | GkeonpremVmwareAdminClusterLoadBalancerVipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons_vip: cdktf.stringToTerraform(struct!.addonsVip),
    control_plane_vip: cdktf.stringToTerraform(struct!.controlPlaneVip),
  }
}


export function gkeonpremVmwareAdminClusterLoadBalancerVipConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference | GkeonpremVmwareAdminClusterLoadBalancerVipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons_vip: {
      value: cdktf.stringToHclTerraform(struct!.addonsVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_vip: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterLoadBalancerVipConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonsVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonsVip = this._addonsVip;
    }
    if (this._controlPlaneVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneVip = this._controlPlaneVip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterLoadBalancerVipConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addonsVip = undefined;
      this._controlPlaneVip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addonsVip = value.addonsVip;
      this._controlPlaneVip = value.controlPlaneVip;
    }
  }

  // addons_vip - computed: false, optional: true, required: false
  private _addonsVip?: string; 
  public get addonsVip() {
    return this.getStringAttribute('addons_vip');
  }
  public set addonsVip(value: string) {
    this._addonsVip = value;
  }
  public resetAddonsVip() {
    this._addonsVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsVipInput() {
    return this._addonsVip;
  }

  // control_plane_vip - computed: false, optional: false, required: true
  private _controlPlaneVip?: string; 
  public get controlPlaneVip() {
    return this.getStringAttribute('control_plane_vip');
  }
  public set controlPlaneVip(value: string) {
    this._controlPlaneVip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneVipInput() {
    return this._controlPlaneVip;
  }
}
export interface GkeonpremVmwareAdminClusterLoadBalancer {
  /**
  * f5_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#f5_config GkeonpremVmwareAdminCluster#f5_config}
  */
  readonly f5Config?: GkeonpremVmwareAdminClusterLoadBalancerF5Config;
  /**
  * manual_lb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#manual_lb_config GkeonpremVmwareAdminCluster#manual_lb_config}
  */
  readonly manualLbConfig?: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig;
  /**
  * metal_lb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#metal_lb_config GkeonpremVmwareAdminCluster#metal_lb_config}
  */
  readonly metalLbConfig?: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig;
  /**
  * vip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#vip_config GkeonpremVmwareAdminCluster#vip_config}
  */
  readonly vipConfig: GkeonpremVmwareAdminClusterLoadBalancerVipConfig;
}

export function gkeonpremVmwareAdminClusterLoadBalancerToTerraform(struct?: GkeonpremVmwareAdminClusterLoadBalancerOutputReference | GkeonpremVmwareAdminClusterLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f5_config: gkeonpremVmwareAdminClusterLoadBalancerF5ConfigToTerraform(struct!.f5Config),
    manual_lb_config: gkeonpremVmwareAdminClusterLoadBalancerManualLbConfigToTerraform(struct!.manualLbConfig),
    metal_lb_config: gkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigToTerraform(struct!.metalLbConfig),
    vip_config: gkeonpremVmwareAdminClusterLoadBalancerVipConfigToTerraform(struct!.vipConfig),
  }
}


export function gkeonpremVmwareAdminClusterLoadBalancerToHclTerraform(struct?: GkeonpremVmwareAdminClusterLoadBalancerOutputReference | GkeonpremVmwareAdminClusterLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f5_config: {
      value: gkeonpremVmwareAdminClusterLoadBalancerF5ConfigToHclTerraform(struct!.f5Config),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterLoadBalancerF5ConfigList",
    },
    manual_lb_config: {
      value: gkeonpremVmwareAdminClusterLoadBalancerManualLbConfigToHclTerraform(struct!.manualLbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigList",
    },
    metal_lb_config: {
      value: gkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigToHclTerraform(struct!.metalLbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigList",
    },
    vip_config: {
      value: gkeonpremVmwareAdminClusterLoadBalancerVipConfigToHclTerraform(struct!.vipConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterLoadBalancerVipConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f5Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5Config = this._f5Config?.internalValue;
    }
    if (this._manualLbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualLbConfig = this._manualLbConfig?.internalValue;
    }
    if (this._metalLbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metalLbConfig = this._metalLbConfig?.internalValue;
    }
    if (this._vipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipConfig = this._vipConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f5Config.internalValue = undefined;
      this._manualLbConfig.internalValue = undefined;
      this._metalLbConfig.internalValue = undefined;
      this._vipConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f5Config.internalValue = value.f5Config;
      this._manualLbConfig.internalValue = value.manualLbConfig;
      this._metalLbConfig.internalValue = value.metalLbConfig;
      this._vipConfig.internalValue = value.vipConfig;
    }
  }

  // f5_config - computed: false, optional: true, required: false
  private _f5Config = new GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference(this, "f5_config");
  public get f5Config() {
    return this._f5Config;
  }
  public putF5Config(value: GkeonpremVmwareAdminClusterLoadBalancerF5Config) {
    this._f5Config.internalValue = value;
  }
  public resetF5Config() {
    this._f5Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5ConfigInput() {
    return this._f5Config.internalValue;
  }

  // manual_lb_config - computed: false, optional: true, required: false
  private _manualLbConfig = new GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference(this, "manual_lb_config");
  public get manualLbConfig() {
    return this._manualLbConfig;
  }
  public putManualLbConfig(value: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig) {
    this._manualLbConfig.internalValue = value;
  }
  public resetManualLbConfig() {
    this._manualLbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualLbConfigInput() {
    return this._manualLbConfig.internalValue;
  }

  // metal_lb_config - computed: false, optional: true, required: false
  private _metalLbConfig = new GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference(this, "metal_lb_config");
  public get metalLbConfig() {
    return this._metalLbConfig;
  }
  public putMetalLbConfig(value: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig) {
    this._metalLbConfig.internalValue = value;
  }
  public resetMetalLbConfig() {
    this._metalLbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metalLbConfigInput() {
    return this._metalLbConfig.internalValue;
  }

  // vip_config - computed: false, optional: false, required: true
  private _vipConfig = new GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference(this, "vip_config");
  public get vipConfig() {
    return this._vipConfig;
  }
  public putVipConfig(value: GkeonpremVmwareAdminClusterLoadBalancerVipConfig) {
    this._vipConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipConfigInput() {
    return this._vipConfig.internalValue;
  }
}
export interface GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig {
  /**
  * enabled is a flag to mark if DHCP IP allocation is
  * used for VMware admin clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function gkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigToTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference | GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function gkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference | GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig): any {
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

export class GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig | undefined) {
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
export interface GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps {
  /**
  * Hostname of the machine. VM's name will be used if this field is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#hostname GkeonpremVmwareAdminCluster#hostname}
  */
  readonly hostname?: string;
  /**
  * IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#ip GkeonpremVmwareAdminCluster#ip}
  */
  readonly ip: string;
}

export function gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsToTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsToHclTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
    }
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference {
    return new GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock {
  /**
  * The network gateway used by the VMware Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#gateway GkeonpremVmwareAdminCluster#gateway}
  */
  readonly gateway: string;
  /**
  * The netmask used by the VMware Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#netmask GkeonpremVmwareAdminCluster#netmask}
  */
  readonly netmask: string;
  /**
  * ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#ips GkeonpremVmwareAdminCluster#ips}
  */
  readonly ips: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps[] | cdktf.IResolvable;
}

export function gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockToTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference | GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    ips: cdktf.listMapper(gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsToTerraform, true)(struct!.ips),
  }
}


export function gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockToHclTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference | GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsToHclTerraform, true)(struct!.ips),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._ips?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gateway = undefined;
      this._netmask = undefined;
      this._ips.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gateway = value.gateway;
      this._netmask = value.netmask;
      this._ips.internalValue = value.ips;
    }
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // netmask - computed: false, optional: false, required: true
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // ips - computed: false, optional: false, required: true
  private _ips = new GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }
  public putIps(value: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps[] | cdktf.IResolvable) {
    this._ips.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }
}
export interface GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig {
  /**
  * control_plane_ip_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_ip_block GkeonpremVmwareAdminCluster#control_plane_ip_block}
  */
  readonly controlPlaneIpBlock?: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock;
}

export function gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigToTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference | GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_ip_block: gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockToTerraform(struct!.controlPlaneIpBlock),
  }
}


export function gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference | GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_ip_block: {
      value: gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockToHclTerraform(struct!.controlPlaneIpBlock),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneIpBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneIpBlock = this._controlPlaneIpBlock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneIpBlock.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneIpBlock.internalValue = value.controlPlaneIpBlock;
    }
  }

  // control_plane_ip_block - computed: false, optional: true, required: false
  private _controlPlaneIpBlock = new GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference(this, "control_plane_ip_block");
  public get controlPlaneIpBlock() {
    return this._controlPlaneIpBlock;
  }
  public putControlPlaneIpBlock(value: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock) {
    this._controlPlaneIpBlock.internalValue = value;
  }
  public resetControlPlaneIpBlock() {
    this._controlPlaneIpBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIpBlockInput() {
    return this._controlPlaneIpBlock.internalValue;
  }
}
export interface GkeonpremVmwareAdminClusterNetworkConfigHostConfig {
  /**
  * DNS search domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#dns_search_domains GkeonpremVmwareAdminCluster#dns_search_domains}
  */
  readonly dnsSearchDomains?: string[];
  /**
  * DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#dns_servers GkeonpremVmwareAdminCluster#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * NTP servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#ntp_servers GkeonpremVmwareAdminCluster#ntp_servers}
  */
  readonly ntpServers?: string[];
}

export function gkeonpremVmwareAdminClusterNetworkConfigHostConfigToTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference | GkeonpremVmwareAdminClusterNetworkConfigHostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_search_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSearchDomains),
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ntpServers),
  }
}


export function gkeonpremVmwareAdminClusterNetworkConfigHostConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference | GkeonpremVmwareAdminClusterNetworkConfigHostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_search_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSearchDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ntpServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterNetworkConfigHostConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsSearchDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSearchDomains = this._dnsSearchDomains;
    }
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._ntpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterNetworkConfigHostConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsSearchDomains = undefined;
      this._dnsServers = undefined;
      this._ntpServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsSearchDomains = value.dnsSearchDomains;
      this._dnsServers = value.dnsServers;
      this._ntpServers = value.ntpServers;
    }
  }

  // dns_search_domains - computed: false, optional: true, required: false
  private _dnsSearchDomains?: string[]; 
  public get dnsSearchDomains() {
    return this.getListAttribute('dns_search_domains');
  }
  public set dnsSearchDomains(value: string[]) {
    this._dnsSearchDomains = value;
  }
  public resetDnsSearchDomains() {
    this._dnsSearchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchDomainsInput() {
    return this._dnsSearchDomains;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }
}
export interface GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps {
  /**
  * Hostname of the machine. VM's name will be used if this field is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#hostname GkeonpremVmwareAdminCluster#hostname}
  */
  readonly hostname?: string;
  /**
  * IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#ip GkeonpremVmwareAdminCluster#ip}
  */
  readonly ip: string;
}

export function gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsToTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsToHclTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
    }
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference {
    return new GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks {
  /**
  * The network gateway used by the VMware Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#gateway GkeonpremVmwareAdminCluster#gateway}
  */
  readonly gateway: string;
  /**
  * The netmask used by the VMware Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#netmask GkeonpremVmwareAdminCluster#netmask}
  */
  readonly netmask: string;
  /**
  * ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#ips GkeonpremVmwareAdminCluster#ips}
  */
  readonly ips: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps[] | cdktf.IResolvable;
}

export function gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksToTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    ips: cdktf.listMapper(gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsToTerraform, true)(struct!.ips),
  }
}


export function gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksToHclTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsToHclTerraform, true)(struct!.ips),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._ips?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._netmask = undefined;
      this._ips.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._netmask = value.netmask;
      this._ips.internalValue = value.ips;
    }
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // netmask - computed: false, optional: false, required: true
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // ips - computed: false, optional: false, required: true
  private _ips = new GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }
  public putIps(value: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps[] | cdktf.IResolvable) {
    this._ips.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }
}

export class GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList extends cdktf.ComplexList {
  public internalValue? : GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference {
    return new GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig {
  /**
  * ip_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#ip_blocks GkeonpremVmwareAdminCluster#ip_blocks}
  */
  readonly ipBlocks?: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks[] | cdktf.IResolvable;
}

export function gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigToTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference | GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_blocks: cdktf.listMapper(gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksToTerraform, true)(struct!.ipBlocks),
  }
}


export function gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference | GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_blocks: {
      value: cdktf.listMapperHcl(gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksToHclTerraform, true)(struct!.ipBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlocks = this._ipBlocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipBlocks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipBlocks.internalValue = value.ipBlocks;
    }
  }

  // ip_blocks - computed: false, optional: true, required: false
  private _ipBlocks = new GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList(this, "ip_blocks", false);
  public get ipBlocks() {
    return this._ipBlocks;
  }
  public putIpBlocks(value: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks[] | cdktf.IResolvable) {
    this._ipBlocks.internalValue = value;
  }
  public resetIpBlocks() {
    this._ipBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksInput() {
    return this._ipBlocks.internalValue;
  }
}
export interface GkeonpremVmwareAdminClusterNetworkConfig {
  /**
  * All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.
  * Only a single range is supported. This field cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#pod_address_cidr_blocks GkeonpremVmwareAdminCluster#pod_address_cidr_blocks}
  */
  readonly podAddressCidrBlocks: string[];
  /**
  * All services in the cluster are assigned an RFC1918 IPv4 address
  * from these ranges. Only a single range is supported.. This field
  * cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#service_address_cidr_blocks GkeonpremVmwareAdminCluster#service_address_cidr_blocks}
  */
  readonly serviceAddressCidrBlocks: string[];
  /**
  * vcenter_network specifies vCenter network name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#vcenter_network GkeonpremVmwareAdminCluster#vcenter_network}
  */
  readonly vcenterNetwork?: string;
  /**
  * dhcp_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#dhcp_ip_config GkeonpremVmwareAdminCluster#dhcp_ip_config}
  */
  readonly dhcpIpConfig?: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig;
  /**
  * ha_control_plane_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#ha_control_plane_config GkeonpremVmwareAdminCluster#ha_control_plane_config}
  */
  readonly haControlPlaneConfig?: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig;
  /**
  * host_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#host_config GkeonpremVmwareAdminCluster#host_config}
  */
  readonly hostConfig?: GkeonpremVmwareAdminClusterNetworkConfigHostConfig;
  /**
  * static_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#static_ip_config GkeonpremVmwareAdminCluster#static_ip_config}
  */
  readonly staticIpConfig?: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig;
}

export function gkeonpremVmwareAdminClusterNetworkConfigToTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigOutputReference | GkeonpremVmwareAdminClusterNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podAddressCidrBlocks),
    service_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAddressCidrBlocks),
    vcenter_network: cdktf.stringToTerraform(struct!.vcenterNetwork),
    dhcp_ip_config: gkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigToTerraform(struct!.dhcpIpConfig),
    ha_control_plane_config: gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigToTerraform(struct!.haControlPlaneConfig),
    host_config: gkeonpremVmwareAdminClusterNetworkConfigHostConfigToTerraform(struct!.hostConfig),
    static_ip_config: gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigToTerraform(struct!.staticIpConfig),
  }
}


export function gkeonpremVmwareAdminClusterNetworkConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterNetworkConfigOutputReference | GkeonpremVmwareAdminClusterNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_address_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podAddressCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_address_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAddressCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vcenter_network: {
      value: cdktf.stringToHclTerraform(struct!.vcenterNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_ip_config: {
      value: gkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigToHclTerraform(struct!.dhcpIpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigList",
    },
    ha_control_plane_config: {
      value: gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigToHclTerraform(struct!.haControlPlaneConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigList",
    },
    host_config: {
      value: gkeonpremVmwareAdminClusterNetworkConfigHostConfigToHclTerraform(struct!.hostConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterNetworkConfigHostConfigList",
    },
    static_ip_config: {
      value: gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigToHclTerraform(struct!.staticIpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAddressCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAddressCidrBlocks = this._podAddressCidrBlocks;
    }
    if (this._serviceAddressCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAddressCidrBlocks = this._serviceAddressCidrBlocks;
    }
    if (this._vcenterNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterNetwork = this._vcenterNetwork;
    }
    if (this._dhcpIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpIpConfig = this._dhcpIpConfig?.internalValue;
    }
    if (this._haControlPlaneConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.haControlPlaneConfig = this._haControlPlaneConfig?.internalValue;
    }
    if (this._hostConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostConfig = this._hostConfig?.internalValue;
    }
    if (this._staticIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpConfig = this._staticIpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podAddressCidrBlocks = undefined;
      this._serviceAddressCidrBlocks = undefined;
      this._vcenterNetwork = undefined;
      this._dhcpIpConfig.internalValue = undefined;
      this._haControlPlaneConfig.internalValue = undefined;
      this._hostConfig.internalValue = undefined;
      this._staticIpConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podAddressCidrBlocks = value.podAddressCidrBlocks;
      this._serviceAddressCidrBlocks = value.serviceAddressCidrBlocks;
      this._vcenterNetwork = value.vcenterNetwork;
      this._dhcpIpConfig.internalValue = value.dhcpIpConfig;
      this._haControlPlaneConfig.internalValue = value.haControlPlaneConfig;
      this._hostConfig.internalValue = value.hostConfig;
      this._staticIpConfig.internalValue = value.staticIpConfig;
    }
  }

  // pod_address_cidr_blocks - computed: false, optional: false, required: true
  private _podAddressCidrBlocks?: string[]; 
  public get podAddressCidrBlocks() {
    return this.getListAttribute('pod_address_cidr_blocks');
  }
  public set podAddressCidrBlocks(value: string[]) {
    this._podAddressCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAddressCidrBlocksInput() {
    return this._podAddressCidrBlocks;
  }

  // service_address_cidr_blocks - computed: false, optional: false, required: true
  private _serviceAddressCidrBlocks?: string[]; 
  public get serviceAddressCidrBlocks() {
    return this.getListAttribute('service_address_cidr_blocks');
  }
  public set serviceAddressCidrBlocks(value: string[]) {
    this._serviceAddressCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAddressCidrBlocksInput() {
    return this._serviceAddressCidrBlocks;
  }

  // vcenter_network - computed: false, optional: true, required: false
  private _vcenterNetwork?: string; 
  public get vcenterNetwork() {
    return this.getStringAttribute('vcenter_network');
  }
  public set vcenterNetwork(value: string) {
    this._vcenterNetwork = value;
  }
  public resetVcenterNetwork() {
    this._vcenterNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterNetworkInput() {
    return this._vcenterNetwork;
  }

  // dhcp_ip_config - computed: false, optional: true, required: false
  private _dhcpIpConfig = new GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference(this, "dhcp_ip_config");
  public get dhcpIpConfig() {
    return this._dhcpIpConfig;
  }
  public putDhcpIpConfig(value: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig) {
    this._dhcpIpConfig.internalValue = value;
  }
  public resetDhcpIpConfig() {
    this._dhcpIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpIpConfigInput() {
    return this._dhcpIpConfig.internalValue;
  }

  // ha_control_plane_config - computed: false, optional: true, required: false
  private _haControlPlaneConfig = new GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference(this, "ha_control_plane_config");
  public get haControlPlaneConfig() {
    return this._haControlPlaneConfig;
  }
  public putHaControlPlaneConfig(value: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig) {
    this._haControlPlaneConfig.internalValue = value;
  }
  public resetHaControlPlaneConfig() {
    this._haControlPlaneConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haControlPlaneConfigInput() {
    return this._haControlPlaneConfig.internalValue;
  }

  // host_config - computed: false, optional: true, required: false
  private _hostConfig = new GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference(this, "host_config");
  public get hostConfig() {
    return this._hostConfig;
  }
  public putHostConfig(value: GkeonpremVmwareAdminClusterNetworkConfigHostConfig) {
    this._hostConfig.internalValue = value;
  }
  public resetHostConfig() {
    this._hostConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConfigInput() {
    return this._hostConfig.internalValue;
  }

  // static_ip_config - computed: false, optional: true, required: false
  private _staticIpConfig = new GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference(this, "static_ip_config");
  public get staticIpConfig() {
    return this._staticIpConfig;
  }
  public putStaticIpConfig(value: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig) {
    this._staticIpConfig.internalValue = value;
  }
  public resetStaticIpConfig() {
    this._staticIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpConfigInput() {
    return this._staticIpConfig.internalValue;
  }
}
export interface GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions {
}

export function gkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsToTerraform(struct?: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsToHclTerraform(struct?: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_transition_time - computed: true, optional: false, required: false
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference {
    return new GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus {
}

export function gkeonpremVmwareAdminClusterPlatformConfigBundlesStatusToTerraform(struct?: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremVmwareAdminClusterPlatformConfigBundlesStatusToHclTerraform(struct?: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference {
    return new GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareAdminClusterPlatformConfigBundles {
}

export function gkeonpremVmwareAdminClusterPlatformConfigBundlesToTerraform(struct?: GkeonpremVmwareAdminClusterPlatformConfigBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremVmwareAdminClusterPlatformConfigBundlesToHclTerraform(struct?: GkeonpremVmwareAdminClusterPlatformConfigBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareAdminClusterPlatformConfigBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterPlatformConfigBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  private _status = new GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class GkeonpremVmwareAdminClusterPlatformConfigBundlesList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference {
    return new GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareAdminClusterPlatformConfigStatusConditions {
}

export function gkeonpremVmwareAdminClusterPlatformConfigStatusConditionsToTerraform(struct?: GkeonpremVmwareAdminClusterPlatformConfigStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremVmwareAdminClusterPlatformConfigStatusConditionsToHclTerraform(struct?: GkeonpremVmwareAdminClusterPlatformConfigStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareAdminClusterPlatformConfigStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterPlatformConfigStatusConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_transition_time - computed: true, optional: false, required: false
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference {
    return new GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareAdminClusterPlatformConfigStatus {
}

export function gkeonpremVmwareAdminClusterPlatformConfigStatusToTerraform(struct?: GkeonpremVmwareAdminClusterPlatformConfigStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremVmwareAdminClusterPlatformConfigStatusToHclTerraform(struct?: GkeonpremVmwareAdminClusterPlatformConfigStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremVmwareAdminClusterPlatformConfigStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterPlatformConfigStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GkeonpremVmwareAdminClusterPlatformConfigStatusList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference {
    return new GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremVmwareAdminClusterPlatformConfig {
  /**
  * The required platform version e.g. 1.13.1.
  * If the current platform version is lower than the target version,
  * the platform version will be updated to the target version.
  * If the target version is not installed in the platform
  * (bundle versions), download the target version bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#required_platform_version GkeonpremVmwareAdminCluster#required_platform_version}
  */
  readonly requiredPlatformVersion?: string;
}

export function gkeonpremVmwareAdminClusterPlatformConfigToTerraform(struct?: GkeonpremVmwareAdminClusterPlatformConfigOutputReference | GkeonpremVmwareAdminClusterPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required_platform_version: cdktf.stringToTerraform(struct!.requiredPlatformVersion),
  }
}


export function gkeonpremVmwareAdminClusterPlatformConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterPlatformConfigOutputReference | GkeonpremVmwareAdminClusterPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required_platform_version: {
      value: cdktf.stringToHclTerraform(struct!.requiredPlatformVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterPlatformConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterPlatformConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requiredPlatformVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredPlatformVersion = this._requiredPlatformVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterPlatformConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requiredPlatformVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requiredPlatformVersion = value.requiredPlatformVersion;
    }
  }

  // bundles - computed: true, optional: false, required: false
  private _bundles = new GkeonpremVmwareAdminClusterPlatformConfigBundlesList(this, "bundles", false);
  public get bundles() {
    return this._bundles;
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // required_platform_version - computed: false, optional: true, required: false
  private _requiredPlatformVersion?: string; 
  public get requiredPlatformVersion() {
    return this.getStringAttribute('required_platform_version');
  }
  public set requiredPlatformVersion(value: string) {
    this._requiredPlatformVersion = value;
  }
  public resetRequiredPlatformVersion() {
    this._requiredPlatformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPlatformVersionInput() {
    return this._requiredPlatformVersion;
  }

  // status - computed: true, optional: false, required: false
  private _status = new GkeonpremVmwareAdminClusterPlatformConfigStatusList(this, "status", false);
  public get status() {
    return this._status;
  }
}
export interface GkeonpremVmwareAdminClusterPrivateRegistryConfig {
  /**
  * The registry address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}
  */
  readonly address?: string;
  /**
  * The CA certificate public key for private registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#ca_cert GkeonpremVmwareAdminCluster#ca_cert}
  */
  readonly caCert?: string;
}

export function gkeonpremVmwareAdminClusterPrivateRegistryConfigToTerraform(struct?: GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference | GkeonpremVmwareAdminClusterPrivateRegistryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
  }
}


export function gkeonpremVmwareAdminClusterPrivateRegistryConfigToHclTerraform(struct?: GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference | GkeonpremVmwareAdminClusterPrivateRegistryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterPrivateRegistryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterPrivateRegistryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._caCert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._caCert = value.caCert;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }
}
export interface GkeonpremVmwareAdminClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#create GkeonpremVmwareAdminCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#delete GkeonpremVmwareAdminCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#update GkeonpremVmwareAdminCluster#update}
  */
  readonly update?: string;
}

export function gkeonpremVmwareAdminClusterTimeoutsToTerraform(struct?: GkeonpremVmwareAdminClusterTimeouts | cdktf.IResolvable): any {
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


export function gkeonpremVmwareAdminClusterTimeoutsToHclTerraform(struct?: GkeonpremVmwareAdminClusterTimeouts | cdktf.IResolvable): any {
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

export class GkeonpremVmwareAdminClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeonpremVmwareAdminClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface GkeonpremVmwareAdminClusterVcenter {
  /**
  * The vCenter IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}
  */
  readonly address?: string;
  /**
  * Contains the vCenter CA certificate public key for SSL verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#ca_cert_data GkeonpremVmwareAdminCluster#ca_cert_data}
  */
  readonly caCertData?: string;
  /**
  * The name of the vCenter cluster for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#cluster GkeonpremVmwareAdminCluster#cluster}
  */
  readonly cluster?: string;
  /**
  * The name of the virtual machine disk (VMDK) for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#data_disk GkeonpremVmwareAdminCluster#data_disk}
  */
  readonly dataDisk?: string;
  /**
  * The name of the vCenter datacenter for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#datacenter GkeonpremVmwareAdminCluster#datacenter}
  */
  readonly datacenter?: string;
  /**
  * The name of the vCenter datastore for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#datastore GkeonpremVmwareAdminCluster#datastore}
  */
  readonly datastore?: string;
  /**
  * The name of the vCenter folder for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#folder GkeonpremVmwareAdminCluster#folder}
  */
  readonly folder?: string;
  /**
  * The name of the vCenter resource pool for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#resource_pool GkeonpremVmwareAdminCluster#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * The name of the vCenter storage policy for the user cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#storage_policy_name GkeonpremVmwareAdminCluster#storage_policy_name}
  */
  readonly storagePolicyName?: string;
}

export function gkeonpremVmwareAdminClusterVcenterToTerraform(struct?: GkeonpremVmwareAdminClusterVcenterOutputReference | GkeonpremVmwareAdminClusterVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ca_cert_data: cdktf.stringToTerraform(struct!.caCertData),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    data_disk: cdktf.stringToTerraform(struct!.dataDisk),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    datastore: cdktf.stringToTerraform(struct!.datastore),
    folder: cdktf.stringToTerraform(struct!.folder),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
    storage_policy_name: cdktf.stringToTerraform(struct!.storagePolicyName),
  }
}


export function gkeonpremVmwareAdminClusterVcenterToHclTerraform(struct?: GkeonpremVmwareAdminClusterVcenterOutputReference | GkeonpremVmwareAdminClusterVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert_data: {
      value: cdktf.stringToHclTerraform(struct!.caCertData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: cdktf.stringToHclTerraform(struct!.dataDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremVmwareAdminClusterVcenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremVmwareAdminClusterVcenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._caCertData !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertData = this._caCertData;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._dataDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    if (this._storagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyName = this._storagePolicyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremVmwareAdminClusterVcenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._caCertData = undefined;
      this._cluster = undefined;
      this._dataDisk = undefined;
      this._datacenter = undefined;
      this._datastore = undefined;
      this._folder = undefined;
      this._resourcePool = undefined;
      this._storagePolicyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._caCertData = value.caCertData;
      this._cluster = value.cluster;
      this._dataDisk = value.dataDisk;
      this._datacenter = value.datacenter;
      this._datastore = value.datastore;
      this._folder = value.folder;
      this._resourcePool = value.resourcePool;
      this._storagePolicyName = value.storagePolicyName;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca_cert_data - computed: false, optional: true, required: false
  private _caCertData?: string; 
  public get caCertData() {
    return this.getStringAttribute('ca_cert_data');
  }
  public set caCertData(value: string) {
    this._caCertData = value;
  }
  public resetCaCertData() {
    this._caCertData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertDataInput() {
    return this._caCertData;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk?: string; 
  public get dataDisk() {
    return this.getStringAttribute('data_disk');
  }
  public set dataDisk(value: string) {
    this._dataDisk = value;
  }
  public resetDataDisk() {
    this._dataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // storage_policy_name - computed: false, optional: true, required: false
  private _storagePolicyName?: string; 
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
  public set storagePolicyName(value: string) {
    this._storagePolicyName = value;
  }
  public resetStoragePolicyName() {
    this._storagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNameInput() {
    return this._storagePolicyName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster google_gkeonprem_vmware_admin_cluster}
*/
export class GkeonpremVmwareAdminCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gkeonprem_vmware_admin_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GkeonpremVmwareAdminCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeonpremVmwareAdminCluster to import
  * @param importFromId The id of the existing GkeonpremVmwareAdminCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeonpremVmwareAdminCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gkeonprem_vmware_admin_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/gkeonprem_vmware_admin_cluster google_gkeonprem_vmware_admin_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeonpremVmwareAdminClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GkeonpremVmwareAdminClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gkeonprem_vmware_admin_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.47.0',
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
    this._bootstrapClusterMembership = config.bootstrapClusterMembership;
    this._description = config.description;
    this._id = config.id;
    this._imageType = config.imageType;
    this._location = config.location;
    this._name = config.name;
    this._onPremVersion = config.onPremVersion;
    this._project = config.project;
    this._addonNode.internalValue = config.addonNode;
    this._antiAffinityGroups.internalValue = config.antiAffinityGroups;
    this._authorization.internalValue = config.authorization;
    this._autoRepairConfig.internalValue = config.autoRepairConfig;
    this._controlPlaneNode.internalValue = config.controlPlaneNode;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._networkConfig.internalValue = config.networkConfig;
    this._platformConfig.internalValue = config.platformConfig;
    this._privateRegistryConfig.internalValue = config.privateRegistryConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vcenter.internalValue = config.vcenter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: true, required: false
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

  // bootstrap_cluster_membership - computed: true, optional: true, required: false
  private _bootstrapClusterMembership?: string; 
  public get bootstrapClusterMembership() {
    return this.getStringAttribute('bootstrap_cluster_membership');
  }
  public set bootstrapClusterMembership(value: string) {
    this._bootstrapClusterMembership = value;
  }
  public resetBootstrapClusterMembership() {
    this._bootstrapClusterMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapClusterMembershipInput() {
    return this._bootstrapClusterMembership;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: true, required: false
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // enable_advanced_cluster - computed: true, optional: false, required: false
  public get enableAdvancedCluster() {
    return this.getBooleanAttribute('enable_advanced_cluster');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // fleet - computed: true, optional: false, required: false
  private _fleet = new GkeonpremVmwareAdminClusterFleetList(this, "fleet", false);
  public get fleet() {
    return this._fleet;
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

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // local_name - computed: true, optional: false, required: false
  public get localName() {
    return this.getStringAttribute('local_name');
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

  // on_prem_version - computed: false, optional: true, required: false
  private _onPremVersion?: string; 
  public get onPremVersion() {
    return this.getStringAttribute('on_prem_version');
  }
  public set onPremVersion(value: string) {
    this._onPremVersion = value;
  }
  public resetOnPremVersion() {
    this._onPremVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremVersionInput() {
    return this._onPremVersion;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  private _status = new GkeonpremVmwareAdminClusterStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // addon_node - computed: false, optional: true, required: false
  private _addonNode = new GkeonpremVmwareAdminClusterAddonNodeOutputReference(this, "addon_node");
  public get addonNode() {
    return this._addonNode;
  }
  public putAddonNode(value: GkeonpremVmwareAdminClusterAddonNode) {
    this._addonNode.internalValue = value;
  }
  public resetAddonNode() {
    this._addonNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonNodeInput() {
    return this._addonNode.internalValue;
  }

  // anti_affinity_groups - computed: false, optional: true, required: false
  private _antiAffinityGroups = new GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference(this, "anti_affinity_groups");
  public get antiAffinityGroups() {
    return this._antiAffinityGroups;
  }
  public putAntiAffinityGroups(value: GkeonpremVmwareAdminClusterAntiAffinityGroups) {
    this._antiAffinityGroups.internalValue = value;
  }
  public resetAntiAffinityGroups() {
    this._antiAffinityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityGroupsInput() {
    return this._antiAffinityGroups.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new GkeonpremVmwareAdminClusterAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: GkeonpremVmwareAdminClusterAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // auto_repair_config - computed: false, optional: true, required: false
  private _autoRepairConfig = new GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference(this, "auto_repair_config");
  public get autoRepairConfig() {
    return this._autoRepairConfig;
  }
  public putAutoRepairConfig(value: GkeonpremVmwareAdminClusterAutoRepairConfig) {
    this._autoRepairConfig.internalValue = value;
  }
  public resetAutoRepairConfig() {
    this._autoRepairConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairConfigInput() {
    return this._autoRepairConfig.internalValue;
  }

  // control_plane_node - computed: false, optional: true, required: false
  private _controlPlaneNode = new GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference(this, "control_plane_node");
  public get controlPlaneNode() {
    return this._controlPlaneNode;
  }
  public putControlPlaneNode(value: GkeonpremVmwareAdminClusterControlPlaneNode) {
    this._controlPlaneNode.internalValue = value;
  }
  public resetControlPlaneNode() {
    this._controlPlaneNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneNodeInput() {
    return this._controlPlaneNode.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new GkeonpremVmwareAdminClusterLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: GkeonpremVmwareAdminClusterLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // network_config - computed: false, optional: false, required: true
  private _networkConfig = new GkeonpremVmwareAdminClusterNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GkeonpremVmwareAdminClusterNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // platform_config - computed: false, optional: true, required: false
  private _platformConfig = new GkeonpremVmwareAdminClusterPlatformConfigOutputReference(this, "platform_config");
  public get platformConfig() {
    return this._platformConfig;
  }
  public putPlatformConfig(value: GkeonpremVmwareAdminClusterPlatformConfig) {
    this._platformConfig.internalValue = value;
  }
  public resetPlatformConfig() {
    this._platformConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformConfigInput() {
    return this._platformConfig.internalValue;
  }

  // private_registry_config - computed: false, optional: true, required: false
  private _privateRegistryConfig = new GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference(this, "private_registry_config");
  public get privateRegistryConfig() {
    return this._privateRegistryConfig;
  }
  public putPrivateRegistryConfig(value: GkeonpremVmwareAdminClusterPrivateRegistryConfig) {
    this._privateRegistryConfig.internalValue = value;
  }
  public resetPrivateRegistryConfig() {
    this._privateRegistryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistryConfigInput() {
    return this._privateRegistryConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeonpremVmwareAdminClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeonpremVmwareAdminClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vcenter - computed: false, optional: true, required: false
  private _vcenter = new GkeonpremVmwareAdminClusterVcenterOutputReference(this, "vcenter");
  public get vcenter() {
    return this._vcenter;
  }
  public putVcenter(value: GkeonpremVmwareAdminClusterVcenter) {
    this._vcenter.internalValue = value;
  }
  public resetVcenter() {
    this._vcenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterInput() {
    return this._vcenter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      bootstrap_cluster_membership: cdktf.stringToTerraform(this._bootstrapClusterMembership),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      image_type: cdktf.stringToTerraform(this._imageType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      on_prem_version: cdktf.stringToTerraform(this._onPremVersion),
      project: cdktf.stringToTerraform(this._project),
      addon_node: gkeonpremVmwareAdminClusterAddonNodeToTerraform(this._addonNode.internalValue),
      anti_affinity_groups: gkeonpremVmwareAdminClusterAntiAffinityGroupsToTerraform(this._antiAffinityGroups.internalValue),
      authorization: gkeonpremVmwareAdminClusterAuthorizationToTerraform(this._authorization.internalValue),
      auto_repair_config: gkeonpremVmwareAdminClusterAutoRepairConfigToTerraform(this._autoRepairConfig.internalValue),
      control_plane_node: gkeonpremVmwareAdminClusterControlPlaneNodeToTerraform(this._controlPlaneNode.internalValue),
      load_balancer: gkeonpremVmwareAdminClusterLoadBalancerToTerraform(this._loadBalancer.internalValue),
      network_config: gkeonpremVmwareAdminClusterNetworkConfigToTerraform(this._networkConfig.internalValue),
      platform_config: gkeonpremVmwareAdminClusterPlatformConfigToTerraform(this._platformConfig.internalValue),
      private_registry_config: gkeonpremVmwareAdminClusterPrivateRegistryConfigToTerraform(this._privateRegistryConfig.internalValue),
      timeouts: gkeonpremVmwareAdminClusterTimeoutsToTerraform(this._timeouts.internalValue),
      vcenter: gkeonpremVmwareAdminClusterVcenterToTerraform(this._vcenter.internalValue),
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
      bootstrap_cluster_membership: {
        value: cdktf.stringToHclTerraform(this._bootstrapClusterMembership),
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
      image_type: {
        value: cdktf.stringToHclTerraform(this._imageType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_prem_version: {
        value: cdktf.stringToHclTerraform(this._onPremVersion),
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
      addon_node: {
        value: gkeonpremVmwareAdminClusterAddonNodeToHclTerraform(this._addonNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremVmwareAdminClusterAddonNodeList",
      },
      anti_affinity_groups: {
        value: gkeonpremVmwareAdminClusterAntiAffinityGroupsToHclTerraform(this._antiAffinityGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremVmwareAdminClusterAntiAffinityGroupsList",
      },
      authorization: {
        value: gkeonpremVmwareAdminClusterAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremVmwareAdminClusterAuthorizationList",
      },
      auto_repair_config: {
        value: gkeonpremVmwareAdminClusterAutoRepairConfigToHclTerraform(this._autoRepairConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremVmwareAdminClusterAutoRepairConfigList",
      },
      control_plane_node: {
        value: gkeonpremVmwareAdminClusterControlPlaneNodeToHclTerraform(this._controlPlaneNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremVmwareAdminClusterControlPlaneNodeList",
      },
      load_balancer: {
        value: gkeonpremVmwareAdminClusterLoadBalancerToHclTerraform(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremVmwareAdminClusterLoadBalancerList",
      },
      network_config: {
        value: gkeonpremVmwareAdminClusterNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremVmwareAdminClusterNetworkConfigList",
      },
      platform_config: {
        value: gkeonpremVmwareAdminClusterPlatformConfigToHclTerraform(this._platformConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremVmwareAdminClusterPlatformConfigList",
      },
      private_registry_config: {
        value: gkeonpremVmwareAdminClusterPrivateRegistryConfigToHclTerraform(this._privateRegistryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremVmwareAdminClusterPrivateRegistryConfigList",
      },
      timeouts: {
        value: gkeonpremVmwareAdminClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeonpremVmwareAdminClusterTimeouts",
      },
      vcenter: {
        value: gkeonpremVmwareAdminClusterVcenterToHclTerraform(this._vcenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremVmwareAdminClusterVcenterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
