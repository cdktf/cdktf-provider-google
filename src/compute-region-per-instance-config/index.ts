/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionPerInstanceConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#id ComputeRegionPerInstanceConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The minimal action to perform on the instance during an update.
  * Default is 'NONE'. Possible values are:
  * * REPLACE
  * * RESTART
  * * REFRESH
  * * NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#minimal_action ComputeRegionPerInstanceConfig#minimal_action}
  */
  readonly minimalAction?: string;
  /**
  * The most disruptive action to perform on the instance during an update.
  * Default is 'REPLACE'. Possible values are:
  * * REPLACE
  * * RESTART
  * * REFRESH
  * * NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#most_disruptive_allowed_action ComputeRegionPerInstanceConfig#most_disruptive_allowed_action}
  */
  readonly mostDisruptiveAllowedAction?: string;
  /**
  * The name for this per-instance config and its corresponding instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#name ComputeRegionPerInstanceConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#project ComputeRegionPerInstanceConfig#project}
  */
  readonly project?: string;
  /**
  * Region where the containing instance group manager is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#region ComputeRegionPerInstanceConfig#region}
  */
  readonly region?: string;
  /**
  * The region instance group manager this instance config is part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#region_instance_group_manager ComputeRegionPerInstanceConfig#region_instance_group_manager}
  */
  readonly regionInstanceGroupManager: string;
  /**
  * When true, deleting this config will immediately remove the underlying instance.
  * When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#remove_instance_on_destroy ComputeRegionPerInstanceConfig#remove_instance_on_destroy}
  */
  readonly removeInstanceOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When true, deleting this config will immediately remove any specified state from the underlying instance.
  * When false, deleting this config will *not* immediately remove any state from the underlying instance.
  * State will be removed on the next instance recreation or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#remove_instance_state_on_destroy ComputeRegionPerInstanceConfig#remove_instance_state_on_destroy}
  */
  readonly removeInstanceStateOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * preserved_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#preserved_state ComputeRegionPerInstanceConfig#preserved_state}
  */
  readonly preservedState?: ComputeRegionPerInstanceConfigPreservedState;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#timeouts ComputeRegionPerInstanceConfig#timeouts}
  */
  readonly timeouts?: ComputeRegionPerInstanceConfigTimeouts;
}
export interface ComputeRegionPerInstanceConfigPreservedStateDisk {
  /**
  * A value that prescribes what should happen to the stateful disk when the VM instance is deleted.
  * The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
  * 'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
  * 'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
  * deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#delete_rule ComputeRegionPerInstanceConfig#delete_rule}
  */
  readonly deleteRule?: string;
  /**
  * A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#device_name ComputeRegionPerInstanceConfig#device_name}
  */
  readonly deviceName: string;
  /**
  * The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#mode ComputeRegionPerInstanceConfig#mode}
  */
  readonly mode?: string;
  /**
  * The URI of an existing persistent disk to attach under the specified device-name in the format
  * 'projects/project-id/zones/zone/disks/disk-name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#source ComputeRegionPerInstanceConfig#source}
  */
  readonly source: string;
}

export function computeRegionPerInstanceConfigPreservedStateDiskToTerraform(struct?: ComputeRegionPerInstanceConfigPreservedStateDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_rule: cdktf.stringToTerraform(struct!.deleteRule),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function computeRegionPerInstanceConfigPreservedStateDiskToHclTerraform(struct?: ComputeRegionPerInstanceConfigPreservedStateDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_rule: {
      value: cdktf.stringToHclTerraform(struct!.deleteRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionPerInstanceConfigPreservedStateDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRule = this._deleteRule;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionPerInstanceConfigPreservedStateDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteRule = undefined;
      this._deviceName = undefined;
      this._mode = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteRule = value.deleteRule;
      this._deviceName = value.deviceName;
      this._mode = value.mode;
      this._source = value.source;
    }
  }

  // delete_rule - computed: false, optional: true, required: false
  private _deleteRule?: string; 
  public get deleteRule() {
    return this.getStringAttribute('delete_rule');
  }
  public set deleteRule(value: string) {
    this._deleteRule = value;
  }
  public resetDeleteRule() {
    this._deleteRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRuleInput() {
    return this._deleteRule;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ComputeRegionPerInstanceConfigPreservedStateDiskList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionPerInstanceConfigPreservedStateDisk[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference {
    return new ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress {
  /**
  * The URL of the reservation for this IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#address ComputeRegionPerInstanceConfig#address}
  */
  readonly address?: string;
}

export function computeRegionPerInstanceConfigPreservedStateExternalIpIpAddressToTerraform(struct?: ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference | ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function computeRegionPerInstanceConfigPreservedStateExternalIpIpAddressToHclTerraform(struct?: ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference | ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
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
}
export interface ComputeRegionPerInstanceConfigPreservedStateExternalIp {
  /**
  * These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#auto_delete ComputeRegionPerInstanceConfig#auto_delete}
  */
  readonly autoDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}
  */
  readonly interfaceName: string;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#ip_address ComputeRegionPerInstanceConfig#ip_address}
  */
  readonly ipAddress?: ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress;
}

export function computeRegionPerInstanceConfigPreservedStateExternalIpToTerraform(struct?: ComputeRegionPerInstanceConfigPreservedStateExternalIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.stringToTerraform(struct!.autoDelete),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    ip_address: computeRegionPerInstanceConfigPreservedStateExternalIpIpAddressToTerraform(struct!.ipAddress),
  }
}


export function computeRegionPerInstanceConfigPreservedStateExternalIpToHclTerraform(struct?: ComputeRegionPerInstanceConfigPreservedStateExternalIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_delete: {
      value: cdktf.stringToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: computeRegionPerInstanceConfigPreservedStateExternalIpIpAddressToHclTerraform(struct!.ipAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionPerInstanceConfigPreservedStateExternalIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionPerInstanceConfigPreservedStateExternalIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDelete = undefined;
      this._interfaceName = undefined;
      this._ipAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDelete = value.autoDelete;
      this._interfaceName = value.interfaceName;
      this._ipAddress.internalValue = value.ipAddress;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: string; 
  public get autoDelete() {
    return this.getStringAttribute('auto_delete');
  }
  public set autoDelete(value: string) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference(this, "ip_address");
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }
}

export class ComputeRegionPerInstanceConfigPreservedStateExternalIpList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionPerInstanceConfigPreservedStateExternalIp[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference {
    return new ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress {
  /**
  * The URL of the reservation for this IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#address ComputeRegionPerInstanceConfig#address}
  */
  readonly address?: string;
}

export function computeRegionPerInstanceConfigPreservedStateInternalIpIpAddressToTerraform(struct?: ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference | ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function computeRegionPerInstanceConfigPreservedStateInternalIpIpAddressToHclTerraform(struct?: ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference | ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
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
}
export interface ComputeRegionPerInstanceConfigPreservedStateInternalIp {
  /**
  * These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#auto_delete ComputeRegionPerInstanceConfig#auto_delete}
  */
  readonly autoDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}
  */
  readonly interfaceName: string;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#ip_address ComputeRegionPerInstanceConfig#ip_address}
  */
  readonly ipAddress?: ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress;
}

export function computeRegionPerInstanceConfigPreservedStateInternalIpToTerraform(struct?: ComputeRegionPerInstanceConfigPreservedStateInternalIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.stringToTerraform(struct!.autoDelete),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    ip_address: computeRegionPerInstanceConfigPreservedStateInternalIpIpAddressToTerraform(struct!.ipAddress),
  }
}


export function computeRegionPerInstanceConfigPreservedStateInternalIpToHclTerraform(struct?: ComputeRegionPerInstanceConfigPreservedStateInternalIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_delete: {
      value: cdktf.stringToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: computeRegionPerInstanceConfigPreservedStateInternalIpIpAddressToHclTerraform(struct!.ipAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionPerInstanceConfigPreservedStateInternalIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionPerInstanceConfigPreservedStateInternalIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDelete = undefined;
      this._interfaceName = undefined;
      this._ipAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDelete = value.autoDelete;
      this._interfaceName = value.interfaceName;
      this._ipAddress.internalValue = value.ipAddress;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: string; 
  public get autoDelete() {
    return this.getStringAttribute('auto_delete');
  }
  public set autoDelete(value: string) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference(this, "ip_address");
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }
}

export class ComputeRegionPerInstanceConfigPreservedStateInternalIpList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionPerInstanceConfigPreservedStateInternalIp[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference {
    return new ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionPerInstanceConfigPreservedState {
  /**
  * Preserved metadata defined for this instance. This is a list of key->value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#metadata ComputeRegionPerInstanceConfig#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#disk ComputeRegionPerInstanceConfig#disk}
  */
  readonly disk?: ComputeRegionPerInstanceConfigPreservedStateDisk[] | cdktf.IResolvable;
  /**
  * external_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#external_ip ComputeRegionPerInstanceConfig#external_ip}
  */
  readonly externalIp?: ComputeRegionPerInstanceConfigPreservedStateExternalIp[] | cdktf.IResolvable;
  /**
  * internal_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#internal_ip ComputeRegionPerInstanceConfig#internal_ip}
  */
  readonly internalIp?: ComputeRegionPerInstanceConfigPreservedStateInternalIp[] | cdktf.IResolvable;
}

export function computeRegionPerInstanceConfigPreservedStateToTerraform(struct?: ComputeRegionPerInstanceConfigPreservedStateOutputReference | ComputeRegionPerInstanceConfigPreservedState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    disk: cdktf.listMapper(computeRegionPerInstanceConfigPreservedStateDiskToTerraform, true)(struct!.disk),
    external_ip: cdktf.listMapper(computeRegionPerInstanceConfigPreservedStateExternalIpToTerraform, true)(struct!.externalIp),
    internal_ip: cdktf.listMapper(computeRegionPerInstanceConfigPreservedStateInternalIpToTerraform, true)(struct!.internalIp),
  }
}


export function computeRegionPerInstanceConfigPreservedStateToHclTerraform(struct?: ComputeRegionPerInstanceConfigPreservedStateOutputReference | ComputeRegionPerInstanceConfigPreservedState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disk: {
      value: cdktf.listMapperHcl(computeRegionPerInstanceConfigPreservedStateDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "set",
      storageClassType: "ComputeRegionPerInstanceConfigPreservedStateDiskList",
    },
    external_ip: {
      value: cdktf.listMapperHcl(computeRegionPerInstanceConfigPreservedStateExternalIpToHclTerraform, true)(struct!.externalIp),
      isBlock: true,
      type: "set",
      storageClassType: "ComputeRegionPerInstanceConfigPreservedStateExternalIpList",
    },
    internal_ip: {
      value: cdktf.listMapperHcl(computeRegionPerInstanceConfigPreservedStateInternalIpToHclTerraform, true)(struct!.internalIp),
      isBlock: true,
      type: "set",
      storageClassType: "ComputeRegionPerInstanceConfigPreservedStateInternalIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionPerInstanceConfigPreservedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionPerInstanceConfigPreservedState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._externalIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIp = this._externalIp?.internalValue;
    }
    if (this._internalIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionPerInstanceConfigPreservedState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
      this._disk.internalValue = undefined;
      this._externalIp.internalValue = undefined;
      this._internalIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
      this._disk.internalValue = value.disk;
      this._externalIp.internalValue = value.externalIp;
      this._internalIp.internalValue = value.internalIp;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ComputeRegionPerInstanceConfigPreservedStateDiskList(this, "disk", true);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ComputeRegionPerInstanceConfigPreservedStateDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // external_ip - computed: false, optional: true, required: false
  private _externalIp = new ComputeRegionPerInstanceConfigPreservedStateExternalIpList(this, "external_ip", true);
  public get externalIp() {
    return this._externalIp;
  }
  public putExternalIp(value: ComputeRegionPerInstanceConfigPreservedStateExternalIp[] | cdktf.IResolvable) {
    this._externalIp.internalValue = value;
  }
  public resetExternalIp() {
    this._externalIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp.internalValue;
  }

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp = new ComputeRegionPerInstanceConfigPreservedStateInternalIpList(this, "internal_ip", true);
  public get internalIp() {
    return this._internalIp;
  }
  public putInternalIp(value: ComputeRegionPerInstanceConfigPreservedStateInternalIp[] | cdktf.IResolvable) {
    this._internalIp.internalValue = value;
  }
  public resetInternalIp() {
    this._internalIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp.internalValue;
  }
}
export interface ComputeRegionPerInstanceConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#create ComputeRegionPerInstanceConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#delete ComputeRegionPerInstanceConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#update ComputeRegionPerInstanceConfig#update}
  */
  readonly update?: string;
}

export function computeRegionPerInstanceConfigTimeoutsToTerraform(struct?: ComputeRegionPerInstanceConfigTimeouts | cdktf.IResolvable): any {
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


export function computeRegionPerInstanceConfigTimeoutsToHclTerraform(struct?: ComputeRegionPerInstanceConfigTimeouts | cdktf.IResolvable): any {
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

export class ComputeRegionPerInstanceConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeRegionPerInstanceConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRegionPerInstanceConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config google_compute_region_per_instance_config}
*/
export class ComputeRegionPerInstanceConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_per_instance_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeRegionPerInstanceConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeRegionPerInstanceConfig to import
  * @param importFromId The id of the existing ComputeRegionPerInstanceConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeRegionPerInstanceConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_per_instance_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_region_per_instance_config google_compute_region_per_instance_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRegionPerInstanceConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRegionPerInstanceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_per_instance_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.38.0',
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
    this._id = config.id;
    this._minimalAction = config.minimalAction;
    this._mostDisruptiveAllowedAction = config.mostDisruptiveAllowedAction;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._regionInstanceGroupManager = config.regionInstanceGroupManager;
    this._removeInstanceOnDestroy = config.removeInstanceOnDestroy;
    this._removeInstanceStateOnDestroy = config.removeInstanceStateOnDestroy;
    this._preservedState.internalValue = config.preservedState;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // minimal_action - computed: false, optional: true, required: false
  private _minimalAction?: string; 
  public get minimalAction() {
    return this.getStringAttribute('minimal_action');
  }
  public set minimalAction(value: string) {
    this._minimalAction = value;
  }
  public resetMinimalAction() {
    this._minimalAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalActionInput() {
    return this._minimalAction;
  }

  // most_disruptive_allowed_action - computed: false, optional: true, required: false
  private _mostDisruptiveAllowedAction?: string; 
  public get mostDisruptiveAllowedAction() {
    return this.getStringAttribute('most_disruptive_allowed_action');
  }
  public set mostDisruptiveAllowedAction(value: string) {
    this._mostDisruptiveAllowedAction = value;
  }
  public resetMostDisruptiveAllowedAction() {
    this._mostDisruptiveAllowedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostDisruptiveAllowedActionInput() {
    return this._mostDisruptiveAllowedAction;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // region_instance_group_manager - computed: false, optional: false, required: true
  private _regionInstanceGroupManager?: string; 
  public get regionInstanceGroupManager() {
    return this.getStringAttribute('region_instance_group_manager');
  }
  public set regionInstanceGroupManager(value: string) {
    this._regionInstanceGroupManager = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInstanceGroupManagerInput() {
    return this._regionInstanceGroupManager;
  }

  // remove_instance_on_destroy - computed: false, optional: true, required: false
  private _removeInstanceOnDestroy?: boolean | cdktf.IResolvable; 
  public get removeInstanceOnDestroy() {
    return this.getBooleanAttribute('remove_instance_on_destroy');
  }
  public set removeInstanceOnDestroy(value: boolean | cdktf.IResolvable) {
    this._removeInstanceOnDestroy = value;
  }
  public resetRemoveInstanceOnDestroy() {
    this._removeInstanceOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInstanceOnDestroyInput() {
    return this._removeInstanceOnDestroy;
  }

  // remove_instance_state_on_destroy - computed: false, optional: true, required: false
  private _removeInstanceStateOnDestroy?: boolean | cdktf.IResolvable; 
  public get removeInstanceStateOnDestroy() {
    return this.getBooleanAttribute('remove_instance_state_on_destroy');
  }
  public set removeInstanceStateOnDestroy(value: boolean | cdktf.IResolvable) {
    this._removeInstanceStateOnDestroy = value;
  }
  public resetRemoveInstanceStateOnDestroy() {
    this._removeInstanceStateOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInstanceStateOnDestroyInput() {
    return this._removeInstanceStateOnDestroy;
  }

  // preserved_state - computed: false, optional: true, required: false
  private _preservedState = new ComputeRegionPerInstanceConfigPreservedStateOutputReference(this, "preserved_state");
  public get preservedState() {
    return this._preservedState;
  }
  public putPreservedState(value: ComputeRegionPerInstanceConfigPreservedState) {
    this._preservedState.internalValue = value;
  }
  public resetPreservedState() {
    this._preservedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservedStateInput() {
    return this._preservedState.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRegionPerInstanceConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRegionPerInstanceConfigTimeouts) {
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
      minimal_action: cdktf.stringToTerraform(this._minimalAction),
      most_disruptive_allowed_action: cdktf.stringToTerraform(this._mostDisruptiveAllowedAction),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      region_instance_group_manager: cdktf.stringToTerraform(this._regionInstanceGroupManager),
      remove_instance_on_destroy: cdktf.booleanToTerraform(this._removeInstanceOnDestroy),
      remove_instance_state_on_destroy: cdktf.booleanToTerraform(this._removeInstanceStateOnDestroy),
      preserved_state: computeRegionPerInstanceConfigPreservedStateToTerraform(this._preservedState.internalValue),
      timeouts: computeRegionPerInstanceConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimal_action: {
        value: cdktf.stringToHclTerraform(this._minimalAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      most_disruptive_allowed_action: {
        value: cdktf.stringToHclTerraform(this._mostDisruptiveAllowedAction),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_instance_group_manager: {
        value: cdktf.stringToHclTerraform(this._regionInstanceGroupManager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_instance_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._removeInstanceOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_instance_state_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._removeInstanceStateOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preserved_state: {
        value: computeRegionPerInstanceConfigPreservedStateToHclTerraform(this._preservedState.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionPerInstanceConfigPreservedStateList",
      },
      timeouts: {
        value: computeRegionPerInstanceConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeRegionPerInstanceConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
