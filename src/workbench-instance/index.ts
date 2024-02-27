/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkbenchInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Desired state of the Workbench Instance. Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#desired_state WorkbenchInstance#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Optional. If true, the workbench instance will not register with the proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#disable_proxy_access WorkbenchInstance#disable_proxy_access}
  */
  readonly disableProxyAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#id WorkbenchInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Required. User-defined unique ID of this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#instance_id WorkbenchInstance#instance_id}
  */
  readonly instanceId?: string;
  /**
  * 'Optional. Input only. The owner of this instance after creation. Format:
  * 'alias@example.com' Currently supports one owner only. If not specified, all of
  * the service account users of your VM instance''s service account can use the instance.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#instance_owners WorkbenchInstance#instance_owners}
  */
  readonly instanceOwners?: string[];
  /**
  * Optional. Labels to apply to this instance. These can be later modified
  * by the UpdateInstance method.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#labels WorkbenchInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Part of 'parent'. See documentation of 'projectsId'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#location WorkbenchInstance#location}
  */
  readonly location: string;
  /**
  * The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#name WorkbenchInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#project WorkbenchInstance#project}
  */
  readonly project?: string;
  /**
  * gce_setup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#gce_setup WorkbenchInstance#gce_setup}
  */
  readonly gceSetup?: WorkbenchInstanceGceSetup;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#timeouts WorkbenchInstance#timeouts}
  */
  readonly timeouts?: WorkbenchInstanceTimeouts;
}
export interface WorkbenchInstanceHealthInfo {
}

export function workbenchInstanceHealthInfoToTerraform(struct?: WorkbenchInstanceHealthInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workbenchInstanceHealthInfoToHclTerraform(struct?: WorkbenchInstanceHealthInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkbenchInstanceHealthInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkbenchInstanceHealthInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkbenchInstanceHealthInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class WorkbenchInstanceHealthInfoList extends cdktf.ComplexList {

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
  public get(index: number): WorkbenchInstanceHealthInfoOutputReference {
    return new WorkbenchInstanceHealthInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkbenchInstanceUpgradeHistory {
}

export function workbenchInstanceUpgradeHistoryToTerraform(struct?: WorkbenchInstanceUpgradeHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workbenchInstanceUpgradeHistoryToHclTerraform(struct?: WorkbenchInstanceUpgradeHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkbenchInstanceUpgradeHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkbenchInstanceUpgradeHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkbenchInstanceUpgradeHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // container_image - computed: true, optional: false, required: false
  public get containerImage() {
    return this.getStringAttribute('container_image');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // framework - computed: true, optional: false, required: false
  public get framework() {
    return this.getStringAttribute('framework');
  }

  // snapshot - computed: true, optional: false, required: false
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_version - computed: true, optional: false, required: false
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vm_image - computed: true, optional: false, required: false
  public get vmImage() {
    return this.getStringAttribute('vm_image');
  }
}

export class WorkbenchInstanceUpgradeHistoryList extends cdktf.ComplexList {

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
  public get(index: number): WorkbenchInstanceUpgradeHistoryOutputReference {
    return new WorkbenchInstanceUpgradeHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkbenchInstanceGceSetupAcceleratorConfigs {
  /**
  * Optional. Count of cores of this accelerator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#core_count WorkbenchInstance#core_count}
  */
  readonly coreCount?: string;
  /**
  * Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#type WorkbenchInstance#type}
  */
  readonly type?: string;
}

export function workbenchInstanceGceSetupAcceleratorConfigsToTerraform(struct?: WorkbenchInstanceGceSetupAcceleratorConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_count: cdktf.stringToTerraform(struct!.coreCount),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function workbenchInstanceGceSetupAcceleratorConfigsToHclTerraform(struct?: WorkbenchInstanceGceSetupAcceleratorConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_count: {
      value: cdktf.stringToHclTerraform(struct!.coreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkbenchInstanceGceSetupAcceleratorConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreCount = this._coreCount;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkbenchInstanceGceSetupAcceleratorConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreCount = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreCount = value.coreCount;
      this._type = value.type;
    }
  }

  // core_count - computed: false, optional: true, required: false
  private _coreCount?: string; 
  public get coreCount() {
    return this.getStringAttribute('core_count');
  }
  public set coreCount(value: string) {
    this._coreCount = value;
  }
  public resetCoreCount() {
    this._coreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WorkbenchInstanceGceSetupAcceleratorConfigsList extends cdktf.ComplexList {
  public internalValue? : WorkbenchInstanceGceSetupAcceleratorConfigs[] | cdktf.IResolvable

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
  public get(index: number): WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference {
    return new WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkbenchInstanceGceSetupBootDisk {
  /**
  * Optional. Input only. Disk encryption method used on the boot and
  * data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#disk_encryption WorkbenchInstance#disk_encryption}
  */
  readonly diskEncryption?: string;
  /**
  * Optional. The size of the boot disk in GB attached to this instance,
  * up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the
  * recommended value of 150GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#disk_size_gb WorkbenchInstance#disk_size_gb}
  */
  readonly diskSizeGb?: string;
  /**
  * Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#disk_type WorkbenchInstance#disk_type}
  */
  readonly diskType?: string;
  /**
  * 'Optional. The KMS key used to encrypt the disks, only
  * applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
  * Learn more about using your own encryption keys.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#kms_key WorkbenchInstance#kms_key}
  */
  readonly kmsKey?: string;
}

export function workbenchInstanceGceSetupBootDiskToTerraform(struct?: WorkbenchInstanceGceSetupBootDiskOutputReference | WorkbenchInstanceGceSetupBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption: cdktf.stringToTerraform(struct!.diskEncryption),
    disk_size_gb: cdktf.stringToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}


export function workbenchInstanceGceSetupBootDiskToHclTerraform(struct?: WorkbenchInstanceGceSetupBootDiskOutputReference | WorkbenchInstanceGceSetupBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkbenchInstanceGceSetupBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkbenchInstanceGceSetupBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryption = this._diskEncryption;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkbenchInstanceGceSetupBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskEncryption = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskEncryption = value.diskEncryption;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._kmsKey = value.kmsKey;
    }
  }

  // disk_encryption - computed: true, optional: true, required: false
  private _diskEncryption?: string; 
  public get diskEncryption() {
    return this.getStringAttribute('disk_encryption');
  }
  public set diskEncryption(value: string) {
    this._diskEncryption = value;
  }
  public resetDiskEncryption() {
    this._diskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionInput() {
    return this._diskEncryption;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: string; 
  public get diskSizeGb() {
    return this.getStringAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: string) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface WorkbenchInstanceGceSetupContainerImage {
  /**
  * The path to the container image repository.
  * For example: gcr.io/{project_id}/{imageName}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#repository WorkbenchInstance#repository}
  */
  readonly repository: string;
  /**
  * The tag of the container image. If not specified, this defaults to the latest tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#tag WorkbenchInstance#tag}
  */
  readonly tag?: string;
}

export function workbenchInstanceGceSetupContainerImageToTerraform(struct?: WorkbenchInstanceGceSetupContainerImageOutputReference | WorkbenchInstanceGceSetupContainerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function workbenchInstanceGceSetupContainerImageToHclTerraform(struct?: WorkbenchInstanceGceSetupContainerImageOutputReference | WorkbenchInstanceGceSetupContainerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkbenchInstanceGceSetupContainerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkbenchInstanceGceSetupContainerImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkbenchInstanceGceSetupContainerImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repository = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface WorkbenchInstanceGceSetupDataDisks {
  /**
  * Optional. Input only. Disk encryption method used on the boot
  * and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#disk_encryption WorkbenchInstance#disk_encryption}
  */
  readonly diskEncryption?: string;
  /**
  * Optional. The size of the disk in GB attached to this VM instance,
  * up to a maximum of 64000 GB (64 TB). If not specified, this defaults to
  * 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#disk_size_gb WorkbenchInstance#disk_size_gb}
  */
  readonly diskSizeGb?: string;
  /**
  * Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#disk_type WorkbenchInstance#disk_type}
  */
  readonly diskType?: string;
  /**
  * 'Optional. The KMS key used to encrypt the disks,
  * only applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
  * Learn more about using your own encryption keys.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#kms_key WorkbenchInstance#kms_key}
  */
  readonly kmsKey?: string;
}

export function workbenchInstanceGceSetupDataDisksToTerraform(struct?: WorkbenchInstanceGceSetupDataDisksOutputReference | WorkbenchInstanceGceSetupDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption: cdktf.stringToTerraform(struct!.diskEncryption),
    disk_size_gb: cdktf.stringToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}


export function workbenchInstanceGceSetupDataDisksToHclTerraform(struct?: WorkbenchInstanceGceSetupDataDisksOutputReference | WorkbenchInstanceGceSetupDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkbenchInstanceGceSetupDataDisksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkbenchInstanceGceSetupDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryption = this._diskEncryption;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkbenchInstanceGceSetupDataDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskEncryption = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskEncryption = value.diskEncryption;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._kmsKey = value.kmsKey;
    }
  }

  // disk_encryption - computed: true, optional: true, required: false
  private _diskEncryption?: string; 
  public get diskEncryption() {
    return this.getStringAttribute('disk_encryption');
  }
  public set diskEncryption(value: string) {
    this._diskEncryption = value;
  }
  public resetDiskEncryption() {
    this._diskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionInput() {
    return this._diskEncryption;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: string; 
  public get diskSizeGb() {
    return this.getStringAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: string) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface WorkbenchInstanceGceSetupNetworkInterfaces {
  /**
  * Optional. The name of the VPC that this VM instance is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#network WorkbenchInstance#network}
  */
  readonly network?: string;
  /**
  * Optional. The type of vNIC to be used on this interface. This
  * may be gVNIC or VirtioNet. Possible values: ["VIRTIO_NET", "GVNIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#nic_type WorkbenchInstance#nic_type}
  */
  readonly nicType?: string;
  /**
  * Optional. The name of the subnet that this VM instance is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#subnet WorkbenchInstance#subnet}
  */
  readonly subnet?: string;
}

export function workbenchInstanceGceSetupNetworkInterfacesToTerraform(struct?: WorkbenchInstanceGceSetupNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function workbenchInstanceGceSetupNetworkInterfacesToHclTerraform(struct?: WorkbenchInstanceGceSetupNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nic_type: {
      value: cdktf.stringToHclTerraform(struct!.nicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkbenchInstanceGceSetupNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkbenchInstanceGceSetupNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkbenchInstanceGceSetupNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._nicType = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._nicType = value.nicType;
      this._subnet = value.subnet;
    }
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // nic_type - computed: false, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

export class WorkbenchInstanceGceSetupNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : WorkbenchInstanceGceSetupNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): WorkbenchInstanceGceSetupNetworkInterfacesOutputReference {
    return new WorkbenchInstanceGceSetupNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkbenchInstanceGceSetupServiceAccounts {
  /**
  * Optional. Email address of the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#email WorkbenchInstance#email}
  */
  readonly email?: string;
}

export function workbenchInstanceGceSetupServiceAccountsToTerraform(struct?: WorkbenchInstanceGceSetupServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function workbenchInstanceGceSetupServiceAccountsToHclTerraform(struct?: WorkbenchInstanceGceSetupServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkbenchInstanceGceSetupServiceAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkbenchInstanceGceSetupServiceAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkbenchInstanceGceSetupServiceAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}

export class WorkbenchInstanceGceSetupServiceAccountsList extends cdktf.ComplexList {
  public internalValue? : WorkbenchInstanceGceSetupServiceAccounts[] | cdktf.IResolvable

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
  public get(index: number): WorkbenchInstanceGceSetupServiceAccountsOutputReference {
    return new WorkbenchInstanceGceSetupServiceAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkbenchInstanceGceSetupShieldedInstanceConfig {
  /**
  * Optional. Defines whether the VM instance has integrity monitoring
  * enabled. Enables monitoring and attestation of the boot integrity of the VM
  * instance. The attestation is performed against the integrity policy baseline.
  * This baseline is initially derived from the implicitly trusted boot image
  * when the VM instance is created. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#enable_integrity_monitoring WorkbenchInstance#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Optional. Defines whether the VM instance has Secure Boot enabled.
  * Secure Boot helps ensure that the system only runs authentic software by verifying
  * the digital signature of all boot components, and halting the boot process
  * if signature verification fails. Disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#enable_secure_boot WorkbenchInstance#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Optional. Defines whether the VM instance has the vTPM enabled.
  * Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#enable_vtpm WorkbenchInstance#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

export function workbenchInstanceGceSetupShieldedInstanceConfigToTerraform(struct?: WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference | WorkbenchInstanceGceSetupShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
  }
}


export function workbenchInstanceGceSetupShieldedInstanceConfigToHclTerraform(struct?: WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference | WorkbenchInstanceGceSetupShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_vtpm: {
      value: cdktf.booleanToHclTerraform(struct!.enableVtpm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkbenchInstanceGceSetupShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    if (this._enableVtpm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVtpm = this._enableVtpm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkbenchInstanceGceSetupShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
      this._enableVtpm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
      this._enableVtpm = value.enableVtpm;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }

  // enable_vtpm - computed: false, optional: true, required: false
  private _enableVtpm?: boolean | cdktf.IResolvable; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
  public set enableVtpm(value: boolean | cdktf.IResolvable) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm;
  }
}
export interface WorkbenchInstanceGceSetupVmImage {
  /**
  * Optional. Use this VM image family to find the image; the newest
  * image in this family will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#family WorkbenchInstance#family}
  */
  readonly family?: string;
  /**
  * Optional. Use VM image name to find the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#name WorkbenchInstance#name}
  */
  readonly name?: string;
  /**
  * The name of the Google Cloud project that this VM image belongs to.
  * Format: {project_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#project WorkbenchInstance#project}
  */
  readonly project?: string;
}

export function workbenchInstanceGceSetupVmImageToTerraform(struct?: WorkbenchInstanceGceSetupVmImageOutputReference | WorkbenchInstanceGceSetupVmImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function workbenchInstanceGceSetupVmImageToHclTerraform(struct?: WorkbenchInstanceGceSetupVmImageOutputReference | WorkbenchInstanceGceSetupVmImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkbenchInstanceGceSetupVmImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkbenchInstanceGceSetupVmImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkbenchInstanceGceSetupVmImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._family = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._family = value.family;
      this._name = value.name;
      this._project = value.project;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

  // project - computed: false, optional: true, required: false
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
}
export interface WorkbenchInstanceGceSetup {
  /**
  * Optional. If true, no external IP will be assigned to this VM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#disable_public_ip WorkbenchInstance#disable_public_ip}
  */
  readonly disablePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Optional. Flag to enable ip forwarding or not, default false/off.
  * https://cloud.google.com/vpc/docs/using-routes#canipforward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#enable_ip_forwarding WorkbenchInstance#enable_ip_forwarding}
  */
  readonly enableIpForwarding?: boolean | cdktf.IResolvable;
  /**
  * Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#machine_type WorkbenchInstance#machine_type}
  */
  readonly machineType?: string;
  /**
  * Optional. Custom metadata to apply to this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#metadata WorkbenchInstance#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Optional. The Compute Engine tags to add to instance (see [Tagging
  * instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#tags WorkbenchInstance#tags}
  */
  readonly tags?: string[];
  /**
  * accelerator_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#accelerator_configs WorkbenchInstance#accelerator_configs}
  */
  readonly acceleratorConfigs?: WorkbenchInstanceGceSetupAcceleratorConfigs[] | cdktf.IResolvable;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#boot_disk WorkbenchInstance#boot_disk}
  */
  readonly bootDisk?: WorkbenchInstanceGceSetupBootDisk;
  /**
  * container_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#container_image WorkbenchInstance#container_image}
  */
  readonly containerImage?: WorkbenchInstanceGceSetupContainerImage;
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#data_disks WorkbenchInstance#data_disks}
  */
  readonly dataDisks?: WorkbenchInstanceGceSetupDataDisks;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#network_interfaces WorkbenchInstance#network_interfaces}
  */
  readonly networkInterfaces?: WorkbenchInstanceGceSetupNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * service_accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#service_accounts WorkbenchInstance#service_accounts}
  */
  readonly serviceAccounts?: WorkbenchInstanceGceSetupServiceAccounts[] | cdktf.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#shielded_instance_config WorkbenchInstance#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: WorkbenchInstanceGceSetupShieldedInstanceConfig;
  /**
  * vm_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#vm_image WorkbenchInstance#vm_image}
  */
  readonly vmImage?: WorkbenchInstanceGceSetupVmImage;
}

export function workbenchInstanceGceSetupToTerraform(struct?: WorkbenchInstanceGceSetupOutputReference | WorkbenchInstanceGceSetup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_public_ip: cdktf.booleanToTerraform(struct!.disablePublicIp),
    enable_ip_forwarding: cdktf.booleanToTerraform(struct!.enableIpForwarding),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    accelerator_configs: cdktf.listMapper(workbenchInstanceGceSetupAcceleratorConfigsToTerraform, true)(struct!.acceleratorConfigs),
    boot_disk: workbenchInstanceGceSetupBootDiskToTerraform(struct!.bootDisk),
    container_image: workbenchInstanceGceSetupContainerImageToTerraform(struct!.containerImage),
    data_disks: workbenchInstanceGceSetupDataDisksToTerraform(struct!.dataDisks),
    network_interfaces: cdktf.listMapper(workbenchInstanceGceSetupNetworkInterfacesToTerraform, true)(struct!.networkInterfaces),
    service_accounts: cdktf.listMapper(workbenchInstanceGceSetupServiceAccountsToTerraform, true)(struct!.serviceAccounts),
    shielded_instance_config: workbenchInstanceGceSetupShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    vm_image: workbenchInstanceGceSetupVmImageToTerraform(struct!.vmImage),
  }
}


export function workbenchInstanceGceSetupToHclTerraform(struct?: WorkbenchInstanceGceSetupOutputReference | WorkbenchInstanceGceSetup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.disablePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ip_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    accelerator_configs: {
      value: cdktf.listMapperHcl(workbenchInstanceGceSetupAcceleratorConfigsToHclTerraform, true)(struct!.acceleratorConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "WorkbenchInstanceGceSetupAcceleratorConfigsList",
    },
    boot_disk: {
      value: workbenchInstanceGceSetupBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "list",
      storageClassType: "WorkbenchInstanceGceSetupBootDiskList",
    },
    container_image: {
      value: workbenchInstanceGceSetupContainerImageToHclTerraform(struct!.containerImage),
      isBlock: true,
      type: "list",
      storageClassType: "WorkbenchInstanceGceSetupContainerImageList",
    },
    data_disks: {
      value: workbenchInstanceGceSetupDataDisksToHclTerraform(struct!.dataDisks),
      isBlock: true,
      type: "list",
      storageClassType: "WorkbenchInstanceGceSetupDataDisksList",
    },
    network_interfaces: {
      value: cdktf.listMapperHcl(workbenchInstanceGceSetupNetworkInterfacesToHclTerraform, true)(struct!.networkInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "WorkbenchInstanceGceSetupNetworkInterfacesList",
    },
    service_accounts: {
      value: cdktf.listMapperHcl(workbenchInstanceGceSetupServiceAccountsToHclTerraform, true)(struct!.serviceAccounts),
      isBlock: true,
      type: "list",
      storageClassType: "WorkbenchInstanceGceSetupServiceAccountsList",
    },
    shielded_instance_config: {
      value: workbenchInstanceGceSetupShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkbenchInstanceGceSetupShieldedInstanceConfigList",
    },
    vm_image: {
      value: workbenchInstanceGceSetupVmImageToHclTerraform(struct!.vmImage),
      isBlock: true,
      type: "list",
      storageClassType: "WorkbenchInstanceGceSetupVmImageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkbenchInstanceGceSetupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkbenchInstanceGceSetup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePublicIp = this._disablePublicIp;
    }
    if (this._enableIpForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpForwarding = this._enableIpForwarding;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._acceleratorConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorConfigs = this._acceleratorConfigs?.internalValue;
    }
    if (this._bootDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDisk = this._bootDisk?.internalValue;
    }
    if (this._containerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImage = this._containerImage?.internalValue;
    }
    if (this._dataDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisks = this._dataDisks?.internalValue;
    }
    if (this._networkInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaces = this._networkInterfaces?.internalValue;
    }
    if (this._serviceAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccounts = this._serviceAccounts?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._vmImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmImage = this._vmImage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkbenchInstanceGceSetup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disablePublicIp = undefined;
      this._enableIpForwarding = undefined;
      this._machineType = undefined;
      this._metadata = undefined;
      this._tags = undefined;
      this._acceleratorConfigs.internalValue = undefined;
      this._bootDisk.internalValue = undefined;
      this._containerImage.internalValue = undefined;
      this._dataDisks.internalValue = undefined;
      this._networkInterfaces.internalValue = undefined;
      this._serviceAccounts.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._vmImage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disablePublicIp = value.disablePublicIp;
      this._enableIpForwarding = value.enableIpForwarding;
      this._machineType = value.machineType;
      this._metadata = value.metadata;
      this._tags = value.tags;
      this._acceleratorConfigs.internalValue = value.acceleratorConfigs;
      this._bootDisk.internalValue = value.bootDisk;
      this._containerImage.internalValue = value.containerImage;
      this._dataDisks.internalValue = value.dataDisks;
      this._networkInterfaces.internalValue = value.networkInterfaces;
      this._serviceAccounts.internalValue = value.serviceAccounts;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._vmImage.internalValue = value.vmImage;
    }
  }

  // disable_public_ip - computed: true, optional: true, required: false
  private _disablePublicIp?: boolean | cdktf.IResolvable; 
  public get disablePublicIp() {
    return this.getBooleanAttribute('disable_public_ip');
  }
  public set disablePublicIp(value: boolean | cdktf.IResolvable) {
    this._disablePublicIp = value;
  }
  public resetDisablePublicIp() {
    this._disablePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePublicIpInput() {
    return this._disablePublicIp;
  }

  // enable_ip_forwarding - computed: false, optional: true, required: false
  private _enableIpForwarding?: boolean | cdktf.IResolvable; 
  public get enableIpForwarding() {
    return this.getBooleanAttribute('enable_ip_forwarding');
  }
  public set enableIpForwarding(value: boolean | cdktf.IResolvable) {
    this._enableIpForwarding = value;
  }
  public resetEnableIpForwarding() {
    this._enableIpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpForwardingInput() {
    return this._enableIpForwarding;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // metadata - computed: true, optional: true, required: false
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

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // accelerator_configs - computed: false, optional: true, required: false
  private _acceleratorConfigs = new WorkbenchInstanceGceSetupAcceleratorConfigsList(this, "accelerator_configs", false);
  public get acceleratorConfigs() {
    return this._acceleratorConfigs;
  }
  public putAcceleratorConfigs(value: WorkbenchInstanceGceSetupAcceleratorConfigs[] | cdktf.IResolvable) {
    this._acceleratorConfigs.internalValue = value;
  }
  public resetAcceleratorConfigs() {
    this._acceleratorConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorConfigsInput() {
    return this._acceleratorConfigs.internalValue;
  }

  // boot_disk - computed: false, optional: true, required: false
  private _bootDisk = new WorkbenchInstanceGceSetupBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: WorkbenchInstanceGceSetupBootDisk) {
    this._bootDisk.internalValue = value;
  }
  public resetBootDisk() {
    this._bootDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // container_image - computed: false, optional: true, required: false
  private _containerImage = new WorkbenchInstanceGceSetupContainerImageOutputReference(this, "container_image");
  public get containerImage() {
    return this._containerImage;
  }
  public putContainerImage(value: WorkbenchInstanceGceSetupContainerImage) {
    this._containerImage.internalValue = value;
  }
  public resetContainerImage() {
    this._containerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage.internalValue;
  }

  // data_disks - computed: false, optional: true, required: false
  private _dataDisks = new WorkbenchInstanceGceSetupDataDisksOutputReference(this, "data_disks");
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: WorkbenchInstanceGceSetupDataDisks) {
    this._dataDisks.internalValue = value;
  }
  public resetDataDisks() {
    this._dataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks.internalValue;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new WorkbenchInstanceGceSetupNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: WorkbenchInstanceGceSetupNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts = new WorkbenchInstanceGceSetupServiceAccountsList(this, "service_accounts", false);
  public get serviceAccounts() {
    return this._serviceAccounts;
  }
  public putServiceAccounts(value: WorkbenchInstanceGceSetupServiceAccounts[] | cdktf.IResolvable) {
    this._serviceAccounts.internalValue = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: WorkbenchInstanceGceSetupShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // vm_image - computed: false, optional: true, required: false
  private _vmImage = new WorkbenchInstanceGceSetupVmImageOutputReference(this, "vm_image");
  public get vmImage() {
    return this._vmImage;
  }
  public putVmImage(value: WorkbenchInstanceGceSetupVmImage) {
    this._vmImage.internalValue = value;
  }
  public resetVmImage() {
    this._vmImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageInput() {
    return this._vmImage.internalValue;
  }
}
export interface WorkbenchInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#create WorkbenchInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#delete WorkbenchInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#update WorkbenchInstance#update}
  */
  readonly update?: string;
}

export function workbenchInstanceTimeoutsToTerraform(struct?: WorkbenchInstanceTimeouts | cdktf.IResolvable): any {
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


export function workbenchInstanceTimeoutsToHclTerraform(struct?: WorkbenchInstanceTimeouts | cdktf.IResolvable): any {
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

export class WorkbenchInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkbenchInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkbenchInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance google_workbench_instance}
*/
export class WorkbenchInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_workbench_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkbenchInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkbenchInstance to import
  * @param importFromId The id of the existing WorkbenchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkbenchInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_workbench_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/workbench_instance google_workbench_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkbenchInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkbenchInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_workbench_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.18.0',
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
    this._desiredState = config.desiredState;
    this._disableProxyAccess = config.disableProxyAccess;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceOwners = config.instanceOwners;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._gceSetup.internalValue = config.gceSetup;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // disable_proxy_access - computed: false, optional: true, required: false
  private _disableProxyAccess?: boolean | cdktf.IResolvable; 
  public get disableProxyAccess() {
    return this.getBooleanAttribute('disable_proxy_access');
  }
  public set disableProxyAccess(value: boolean | cdktf.IResolvable) {
    this._disableProxyAccess = value;
  }
  public resetDisableProxyAccess() {
    this._disableProxyAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProxyAccessInput() {
    return this._disableProxyAccess;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // health_info - computed: true, optional: false, required: false
  private _healthInfo = new WorkbenchInstanceHealthInfoList(this, "health_info", false);
  public get healthInfo() {
    return this._healthInfo;
  }

  // health_state - computed: true, optional: false, required: false
  public get healthState() {
    return this.getStringAttribute('health_state');
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_owners - computed: false, optional: true, required: false
  private _instanceOwners?: string[]; 
  public get instanceOwners() {
    return this.getListAttribute('instance_owners');
  }
  public set instanceOwners(value: string[]) {
    this._instanceOwners = value;
  }
  public resetInstanceOwners() {
    this._instanceOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceOwnersInput() {
    return this._instanceOwners;
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

  // proxy_uri - computed: true, optional: false, required: false
  public get proxyUri() {
    return this.getStringAttribute('proxy_uri');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // upgrade_history - computed: true, optional: false, required: false
  private _upgradeHistory = new WorkbenchInstanceUpgradeHistoryList(this, "upgrade_history", false);
  public get upgradeHistory() {
    return this._upgradeHistory;
  }

  // gce_setup - computed: false, optional: true, required: false
  private _gceSetup = new WorkbenchInstanceGceSetupOutputReference(this, "gce_setup");
  public get gceSetup() {
    return this._gceSetup;
  }
  public putGceSetup(value: WorkbenchInstanceGceSetup) {
    this._gceSetup.internalValue = value;
  }
  public resetGceSetup() {
    this._gceSetup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceSetupInput() {
    return this._gceSetup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkbenchInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkbenchInstanceTimeouts) {
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
      desired_state: cdktf.stringToTerraform(this._desiredState),
      disable_proxy_access: cdktf.booleanToTerraform(this._disableProxyAccess),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceOwners),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      gce_setup: workbenchInstanceGceSetupToTerraform(this._gceSetup.internalValue),
      timeouts: workbenchInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desired_state: {
        value: cdktf.stringToHclTerraform(this._desiredState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_proxy_access: {
        value: cdktf.booleanToHclTerraform(this._disableProxyAccess),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceOwners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      gce_setup: {
        value: workbenchInstanceGceSetupToHclTerraform(this._gceSetup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkbenchInstanceGceSetupList",
      },
      timeouts: {
        value: workbenchInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkbenchInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
