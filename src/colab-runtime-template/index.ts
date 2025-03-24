/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ColabRuntimeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Runtime Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#description ColabRuntimeTemplate#description}
  */
  readonly description?: string;
  /**
  * Required. The display name of the Runtime Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#display_name ColabRuntimeTemplate#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels to identify and group the runtime template.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#labels ColabRuntimeTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource: https://cloud.google.com/colab/docs/locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#location ColabRuntimeTemplate#location}
  */
  readonly location: string;
  /**
  * The resource name of the Runtime Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#name ColabRuntimeTemplate#name}
  */
  readonly name?: string;
  /**
  * Applies the given Compute Engine tags to the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#network_tags ColabRuntimeTemplate#network_tags}
  */
  readonly networkTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}
  */
  readonly project?: string;
  /**
  * data_persistent_disk_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#data_persistent_disk_spec ColabRuntimeTemplate#data_persistent_disk_spec}
  */
  readonly dataPersistentDiskSpec?: ColabRuntimeTemplateDataPersistentDiskSpec;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#encryption_spec ColabRuntimeTemplate#encryption_spec}
  */
  readonly encryptionSpec?: ColabRuntimeTemplateEncryptionSpec;
  /**
  * euc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#euc_config ColabRuntimeTemplate#euc_config}
  */
  readonly eucConfig?: ColabRuntimeTemplateEucConfig;
  /**
  * idle_shutdown_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#idle_shutdown_config ColabRuntimeTemplate#idle_shutdown_config}
  */
  readonly idleShutdownConfig?: ColabRuntimeTemplateIdleShutdownConfig;
  /**
  * machine_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#machine_spec ColabRuntimeTemplate#machine_spec}
  */
  readonly machineSpec?: ColabRuntimeTemplateMachineSpec;
  /**
  * network_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#network_spec ColabRuntimeTemplate#network_spec}
  */
  readonly networkSpec?: ColabRuntimeTemplateNetworkSpec;
  /**
  * shielded_vm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#shielded_vm_config ColabRuntimeTemplate#shielded_vm_config}
  */
  readonly shieldedVmConfig?: ColabRuntimeTemplateShieldedVmConfig;
  /**
  * software_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#software_config ColabRuntimeTemplate#software_config}
  */
  readonly softwareConfig?: ColabRuntimeTemplateSoftwareConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#timeouts ColabRuntimeTemplate#timeouts}
  */
  readonly timeouts?: ColabRuntimeTemplateTimeouts;
}
export interface ColabRuntimeTemplateDataPersistentDiskSpec {
  /**
  * The disk size of the runtime in GB. If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#disk_size_gb ColabRuntimeTemplate#disk_size_gb}
  */
  readonly diskSizeGb?: string;
  /**
  * The type of the persistent disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#disk_type ColabRuntimeTemplate#disk_type}
  */
  readonly diskType?: string;
}

export function colabRuntimeTemplateDataPersistentDiskSpecToTerraform(struct?: ColabRuntimeTemplateDataPersistentDiskSpecOutputReference | ColabRuntimeTemplateDataPersistentDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_gb: cdktf.stringToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
  }
}


export function colabRuntimeTemplateDataPersistentDiskSpecToHclTerraform(struct?: ColabRuntimeTemplateDataPersistentDiskSpecOutputReference | ColabRuntimeTemplateDataPersistentDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabRuntimeTemplateDataPersistentDiskSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabRuntimeTemplateDataPersistentDiskSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabRuntimeTemplateDataPersistentDiskSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
    }
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
}
export interface ColabRuntimeTemplateEncryptionSpec {
  /**
  * The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#kms_key_name ColabRuntimeTemplate#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function colabRuntimeTemplateEncryptionSpecToTerraform(struct?: ColabRuntimeTemplateEncryptionSpecOutputReference | ColabRuntimeTemplateEncryptionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function colabRuntimeTemplateEncryptionSpecToHclTerraform(struct?: ColabRuntimeTemplateEncryptionSpecOutputReference | ColabRuntimeTemplateEncryptionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabRuntimeTemplateEncryptionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabRuntimeTemplateEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabRuntimeTemplateEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface ColabRuntimeTemplateEucConfig {
  /**
  * Disable end user credential access for the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#euc_disabled ColabRuntimeTemplate#euc_disabled}
  */
  readonly eucDisabled?: boolean | cdktf.IResolvable;
}

export function colabRuntimeTemplateEucConfigToTerraform(struct?: ColabRuntimeTemplateEucConfigOutputReference | ColabRuntimeTemplateEucConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    euc_disabled: cdktf.booleanToTerraform(struct!.eucDisabled),
  }
}


export function colabRuntimeTemplateEucConfigToHclTerraform(struct?: ColabRuntimeTemplateEucConfigOutputReference | ColabRuntimeTemplateEucConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    euc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.eucDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabRuntimeTemplateEucConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabRuntimeTemplateEucConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eucDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.eucDisabled = this._eucDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabRuntimeTemplateEucConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eucDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eucDisabled = value.eucDisabled;
    }
  }

  // euc_disabled - computed: false, optional: true, required: false
  private _eucDisabled?: boolean | cdktf.IResolvable; 
  public get eucDisabled() {
    return this.getBooleanAttribute('euc_disabled');
  }
  public set eucDisabled(value: boolean | cdktf.IResolvable) {
    this._eucDisabled = value;
  }
  public resetEucDisabled() {
    this._eucDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eucDisabledInput() {
    return this._eucDisabled;
  }
}
export interface ColabRuntimeTemplateIdleShutdownConfig {
  /**
  * The duration after which the runtime is automatically shut down. An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#idle_timeout ColabRuntimeTemplate#idle_timeout}
  */
  readonly idleTimeout?: string;
}

export function colabRuntimeTemplateIdleShutdownConfigToTerraform(struct?: ColabRuntimeTemplateIdleShutdownConfigOutputReference | ColabRuntimeTemplateIdleShutdownConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
  }
}


export function colabRuntimeTemplateIdleShutdownConfigToHclTerraform(struct?: ColabRuntimeTemplateIdleShutdownConfigOutputReference | ColabRuntimeTemplateIdleShutdownConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabRuntimeTemplateIdleShutdownConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabRuntimeTemplateIdleShutdownConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabRuntimeTemplateIdleShutdownConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeout = value.idleTimeout;
    }
  }

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }
}
export interface ColabRuntimeTemplateMachineSpec {
  /**
  * The number of accelerators used by the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#accelerator_count ColabRuntimeTemplate#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#accelerator_type ColabRuntimeTemplate#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * The Compute Engine machine type selected for the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#machine_type ColabRuntimeTemplate#machine_type}
  */
  readonly machineType?: string;
}

export function colabRuntimeTemplateMachineSpecToTerraform(struct?: ColabRuntimeTemplateMachineSpecOutputReference | ColabRuntimeTemplateMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
  }
}


export function colabRuntimeTemplateMachineSpecToHclTerraform(struct?: ColabRuntimeTemplateMachineSpecOutputReference | ColabRuntimeTemplateMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_count: {
      value: cdktf.numberToHclTerraform(struct!.acceleratorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabRuntimeTemplateMachineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabRuntimeTemplateMachineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount;
    }
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabRuntimeTemplateMachineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
      this._machineType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
      this._machineType = value.machineType;
    }
  }

  // accelerator_count - computed: true, optional: true, required: false
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  public resetAcceleratorCount() {
    this._acceleratorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
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
}
export interface ColabRuntimeTemplateNetworkSpec {
  /**
  * Enable public internet access for the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#enable_internet_access ColabRuntimeTemplate#enable_internet_access}
  */
  readonly enableInternetAccess?: boolean | cdktf.IResolvable;
  /**
  * The name of the VPC that this runtime is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#network ColabRuntimeTemplate#network}
  */
  readonly network?: string;
  /**
  * The name of the subnetwork that this runtime is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#subnetwork ColabRuntimeTemplate#subnetwork}
  */
  readonly subnetwork?: string;
}

export function colabRuntimeTemplateNetworkSpecToTerraform(struct?: ColabRuntimeTemplateNetworkSpecOutputReference | ColabRuntimeTemplateNetworkSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_internet_access: cdktf.booleanToTerraform(struct!.enableInternetAccess),
    network: cdktf.stringToTerraform(struct!.network),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function colabRuntimeTemplateNetworkSpecToHclTerraform(struct?: ColabRuntimeTemplateNetworkSpecOutputReference | ColabRuntimeTemplateNetworkSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_internet_access: {
      value: cdktf.booleanToHclTerraform(struct!.enableInternetAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabRuntimeTemplateNetworkSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabRuntimeTemplateNetworkSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInternetAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetAccess = this._enableInternetAccess;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabRuntimeTemplateNetworkSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableInternetAccess = undefined;
      this._network = undefined;
      this._subnetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableInternetAccess = value.enableInternetAccess;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
    }
  }

  // enable_internet_access - computed: false, optional: true, required: false
  private _enableInternetAccess?: boolean | cdktf.IResolvable; 
  public get enableInternetAccess() {
    return this.getBooleanAttribute('enable_internet_access');
  }
  public set enableInternetAccess(value: boolean | cdktf.IResolvable) {
    this._enableInternetAccess = value;
  }
  public resetEnableInternetAccess() {
    this._enableInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetAccessInput() {
    return this._enableInternetAccess;
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

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}
export interface ColabRuntimeTemplateShieldedVmConfig {
  /**
  * Enables secure boot for the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#enable_secure_boot ColabRuntimeTemplate#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function colabRuntimeTemplateShieldedVmConfigToTerraform(struct?: ColabRuntimeTemplateShieldedVmConfigOutputReference | ColabRuntimeTemplateShieldedVmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function colabRuntimeTemplateShieldedVmConfigToHclTerraform(struct?: ColabRuntimeTemplateShieldedVmConfigOutputReference | ColabRuntimeTemplateShieldedVmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabRuntimeTemplateShieldedVmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabRuntimeTemplateShieldedVmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabRuntimeTemplateShieldedVmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableSecureBoot = value.enableSecureBoot;
    }
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
}
export interface ColabRuntimeTemplateSoftwareConfigEnv {
  /**
  * Name of the environment variable. Must be a valid C identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#name ColabRuntimeTemplate#name}
  */
  readonly name?: string;
  /**
  * Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#value ColabRuntimeTemplate#value}
  */
  readonly value?: string;
}

export function colabRuntimeTemplateSoftwareConfigEnvToTerraform(struct?: ColabRuntimeTemplateSoftwareConfigEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function colabRuntimeTemplateSoftwareConfigEnvToHclTerraform(struct?: ColabRuntimeTemplateSoftwareConfigEnv | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabRuntimeTemplateSoftwareConfigEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ColabRuntimeTemplateSoftwareConfigEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabRuntimeTemplateSoftwareConfigEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ColabRuntimeTemplateSoftwareConfigEnvList extends cdktf.ComplexList {
  public internalValue? : ColabRuntimeTemplateSoftwareConfigEnv[] | cdktf.IResolvable

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
  public get(index: number): ColabRuntimeTemplateSoftwareConfigEnvOutputReference {
    return new ColabRuntimeTemplateSoftwareConfigEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig {
  /**
  * Post startup script to run after runtime is started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#post_startup_script ColabRuntimeTemplate#post_startup_script}
  */
  readonly postStartupScript?: string;
  /**
  * Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#post_startup_script_behavior ColabRuntimeTemplate#post_startup_script_behavior}
  */
  readonly postStartupScriptBehavior?: string;
  /**
  * Post startup script url to download. Example: https://bucket/script.sh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#post_startup_script_url ColabRuntimeTemplate#post_startup_script_url}
  */
  readonly postStartupScriptUrl?: string;
}

export function colabRuntimeTemplateSoftwareConfigPostStartupScriptConfigToTerraform(struct?: ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference | ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_startup_script: cdktf.stringToTerraform(struct!.postStartupScript),
    post_startup_script_behavior: cdktf.stringToTerraform(struct!.postStartupScriptBehavior),
    post_startup_script_url: cdktf.stringToTerraform(struct!.postStartupScriptUrl),
  }
}


export function colabRuntimeTemplateSoftwareConfigPostStartupScriptConfigToHclTerraform(struct?: ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference | ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_startup_script: {
      value: cdktf.stringToHclTerraform(struct!.postStartupScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_startup_script_behavior: {
      value: cdktf.stringToHclTerraform(struct!.postStartupScriptBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_startup_script_url: {
      value: cdktf.stringToHclTerraform(struct!.postStartupScriptUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postStartupScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStartupScript = this._postStartupScript;
    }
    if (this._postStartupScriptBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStartupScriptBehavior = this._postStartupScriptBehavior;
    }
    if (this._postStartupScriptUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStartupScriptUrl = this._postStartupScriptUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postStartupScript = undefined;
      this._postStartupScriptBehavior = undefined;
      this._postStartupScriptUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postStartupScript = value.postStartupScript;
      this._postStartupScriptBehavior = value.postStartupScriptBehavior;
      this._postStartupScriptUrl = value.postStartupScriptUrl;
    }
  }

  // post_startup_script - computed: false, optional: true, required: false
  private _postStartupScript?: string; 
  public get postStartupScript() {
    return this.getStringAttribute('post_startup_script');
  }
  public set postStartupScript(value: string) {
    this._postStartupScript = value;
  }
  public resetPostStartupScript() {
    this._postStartupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartupScriptInput() {
    return this._postStartupScript;
  }

  // post_startup_script_behavior - computed: false, optional: true, required: false
  private _postStartupScriptBehavior?: string; 
  public get postStartupScriptBehavior() {
    return this.getStringAttribute('post_startup_script_behavior');
  }
  public set postStartupScriptBehavior(value: string) {
    this._postStartupScriptBehavior = value;
  }
  public resetPostStartupScriptBehavior() {
    this._postStartupScriptBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartupScriptBehaviorInput() {
    return this._postStartupScriptBehavior;
  }

  // post_startup_script_url - computed: false, optional: true, required: false
  private _postStartupScriptUrl?: string; 
  public get postStartupScriptUrl() {
    return this.getStringAttribute('post_startup_script_url');
  }
  public set postStartupScriptUrl(value: string) {
    this._postStartupScriptUrl = value;
  }
  public resetPostStartupScriptUrl() {
    this._postStartupScriptUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartupScriptUrlInput() {
    return this._postStartupScriptUrl;
  }
}
export interface ColabRuntimeTemplateSoftwareConfig {
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#env ColabRuntimeTemplate#env}
  */
  readonly env?: ColabRuntimeTemplateSoftwareConfigEnv[] | cdktf.IResolvable;
  /**
  * post_startup_script_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#post_startup_script_config ColabRuntimeTemplate#post_startup_script_config}
  */
  readonly postStartupScriptConfig?: ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig;
}

export function colabRuntimeTemplateSoftwareConfigToTerraform(struct?: ColabRuntimeTemplateSoftwareConfigOutputReference | ColabRuntimeTemplateSoftwareConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(colabRuntimeTemplateSoftwareConfigEnvToTerraform, true)(struct!.env),
    post_startup_script_config: colabRuntimeTemplateSoftwareConfigPostStartupScriptConfigToTerraform(struct!.postStartupScriptConfig),
  }
}


export function colabRuntimeTemplateSoftwareConfigToHclTerraform(struct?: ColabRuntimeTemplateSoftwareConfigOutputReference | ColabRuntimeTemplateSoftwareConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(colabRuntimeTemplateSoftwareConfigEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "ColabRuntimeTemplateSoftwareConfigEnvList",
    },
    post_startup_script_config: {
      value: colabRuntimeTemplateSoftwareConfigPostStartupScriptConfigToHclTerraform(struct!.postStartupScriptConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabRuntimeTemplateSoftwareConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabRuntimeTemplateSoftwareConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._postStartupScriptConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStartupScriptConfig = this._postStartupScriptConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabRuntimeTemplateSoftwareConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._env.internalValue = undefined;
      this._postStartupScriptConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._env.internalValue = value.env;
      this._postStartupScriptConfig.internalValue = value.postStartupScriptConfig;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new ColabRuntimeTemplateSoftwareConfigEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: ColabRuntimeTemplateSoftwareConfigEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // post_startup_script_config - computed: false, optional: true, required: false
  private _postStartupScriptConfig = new ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference(this, "post_startup_script_config");
  public get postStartupScriptConfig() {
    return this._postStartupScriptConfig;
  }
  public putPostStartupScriptConfig(value: ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig) {
    this._postStartupScriptConfig.internalValue = value;
  }
  public resetPostStartupScriptConfig() {
    this._postStartupScriptConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartupScriptConfigInput() {
    return this._postStartupScriptConfig.internalValue;
  }
}
export interface ColabRuntimeTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#create ColabRuntimeTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#delete ColabRuntimeTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#update ColabRuntimeTemplate#update}
  */
  readonly update?: string;
}

export function colabRuntimeTemplateTimeoutsToTerraform(struct?: ColabRuntimeTemplateTimeouts | cdktf.IResolvable): any {
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


export function colabRuntimeTemplateTimeoutsToHclTerraform(struct?: ColabRuntimeTemplateTimeouts | cdktf.IResolvable): any {
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

export class ColabRuntimeTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ColabRuntimeTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ColabRuntimeTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template google_colab_runtime_template}
*/
export class ColabRuntimeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_colab_runtime_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ColabRuntimeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ColabRuntimeTemplate to import
  * @param importFromId The id of the existing ColabRuntimeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ColabRuntimeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_colab_runtime_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/colab_runtime_template google_colab_runtime_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ColabRuntimeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ColabRuntimeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_colab_runtime_template',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.26.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._networkTags = config.networkTags;
    this._project = config.project;
    this._dataPersistentDiskSpec.internalValue = config.dataPersistentDiskSpec;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._eucConfig.internalValue = config.eucConfig;
    this._idleShutdownConfig.internalValue = config.idleShutdownConfig;
    this._machineSpec.internalValue = config.machineSpec;
    this._networkSpec.internalValue = config.networkSpec;
    this._shieldedVmConfig.internalValue = config.shieldedVmConfig;
    this._softwareConfig.internalValue = config.softwareConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // name - computed: true, optional: true, required: false
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

  // network_tags - computed: false, optional: true, required: false
  private _networkTags?: string[]; 
  public get networkTags() {
    return this.getListAttribute('network_tags');
  }
  public set networkTags(value: string[]) {
    this._networkTags = value;
  }
  public resetNetworkTags() {
    this._networkTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags;
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

  // data_persistent_disk_spec - computed: false, optional: true, required: false
  private _dataPersistentDiskSpec = new ColabRuntimeTemplateDataPersistentDiskSpecOutputReference(this, "data_persistent_disk_spec");
  public get dataPersistentDiskSpec() {
    return this._dataPersistentDiskSpec;
  }
  public putDataPersistentDiskSpec(value: ColabRuntimeTemplateDataPersistentDiskSpec) {
    this._dataPersistentDiskSpec.internalValue = value;
  }
  public resetDataPersistentDiskSpec() {
    this._dataPersistentDiskSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPersistentDiskSpecInput() {
    return this._dataPersistentDiskSpec.internalValue;
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new ColabRuntimeTemplateEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: ColabRuntimeTemplateEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // euc_config - computed: false, optional: true, required: false
  private _eucConfig = new ColabRuntimeTemplateEucConfigOutputReference(this, "euc_config");
  public get eucConfig() {
    return this._eucConfig;
  }
  public putEucConfig(value: ColabRuntimeTemplateEucConfig) {
    this._eucConfig.internalValue = value;
  }
  public resetEucConfig() {
    this._eucConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eucConfigInput() {
    return this._eucConfig.internalValue;
  }

  // idle_shutdown_config - computed: false, optional: true, required: false
  private _idleShutdownConfig = new ColabRuntimeTemplateIdleShutdownConfigOutputReference(this, "idle_shutdown_config");
  public get idleShutdownConfig() {
    return this._idleShutdownConfig;
  }
  public putIdleShutdownConfig(value: ColabRuntimeTemplateIdleShutdownConfig) {
    this._idleShutdownConfig.internalValue = value;
  }
  public resetIdleShutdownConfig() {
    this._idleShutdownConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleShutdownConfigInput() {
    return this._idleShutdownConfig.internalValue;
  }

  // machine_spec - computed: false, optional: true, required: false
  private _machineSpec = new ColabRuntimeTemplateMachineSpecOutputReference(this, "machine_spec");
  public get machineSpec() {
    return this._machineSpec;
  }
  public putMachineSpec(value: ColabRuntimeTemplateMachineSpec) {
    this._machineSpec.internalValue = value;
  }
  public resetMachineSpec() {
    this._machineSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecInput() {
    return this._machineSpec.internalValue;
  }

  // network_spec - computed: false, optional: true, required: false
  private _networkSpec = new ColabRuntimeTemplateNetworkSpecOutputReference(this, "network_spec");
  public get networkSpec() {
    return this._networkSpec;
  }
  public putNetworkSpec(value: ColabRuntimeTemplateNetworkSpec) {
    this._networkSpec.internalValue = value;
  }
  public resetNetworkSpec() {
    this._networkSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSpecInput() {
    return this._networkSpec.internalValue;
  }

  // shielded_vm_config - computed: false, optional: true, required: false
  private _shieldedVmConfig = new ColabRuntimeTemplateShieldedVmConfigOutputReference(this, "shielded_vm_config");
  public get shieldedVmConfig() {
    return this._shieldedVmConfig;
  }
  public putShieldedVmConfig(value: ColabRuntimeTemplateShieldedVmConfig) {
    this._shieldedVmConfig.internalValue = value;
  }
  public resetShieldedVmConfig() {
    this._shieldedVmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedVmConfigInput() {
    return this._shieldedVmConfig.internalValue;
  }

  // software_config - computed: false, optional: true, required: false
  private _softwareConfig = new ColabRuntimeTemplateSoftwareConfigOutputReference(this, "software_config");
  public get softwareConfig() {
    return this._softwareConfig;
  }
  public putSoftwareConfig(value: ColabRuntimeTemplateSoftwareConfig) {
    this._softwareConfig.internalValue = value;
  }
  public resetSoftwareConfig() {
    this._softwareConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareConfigInput() {
    return this._softwareConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ColabRuntimeTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ColabRuntimeTemplateTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkTags),
      project: cdktf.stringToTerraform(this._project),
      data_persistent_disk_spec: colabRuntimeTemplateDataPersistentDiskSpecToTerraform(this._dataPersistentDiskSpec.internalValue),
      encryption_spec: colabRuntimeTemplateEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      euc_config: colabRuntimeTemplateEucConfigToTerraform(this._eucConfig.internalValue),
      idle_shutdown_config: colabRuntimeTemplateIdleShutdownConfigToTerraform(this._idleShutdownConfig.internalValue),
      machine_spec: colabRuntimeTemplateMachineSpecToTerraform(this._machineSpec.internalValue),
      network_spec: colabRuntimeTemplateNetworkSpecToTerraform(this._networkSpec.internalValue),
      shielded_vm_config: colabRuntimeTemplateShieldedVmConfigToTerraform(this._shieldedVmConfig.internalValue),
      software_config: colabRuntimeTemplateSoftwareConfigToTerraform(this._softwareConfig.internalValue),
      timeouts: colabRuntimeTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      network_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_persistent_disk_spec: {
        value: colabRuntimeTemplateDataPersistentDiskSpecToHclTerraform(this._dataPersistentDiskSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabRuntimeTemplateDataPersistentDiskSpecList",
      },
      encryption_spec: {
        value: colabRuntimeTemplateEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabRuntimeTemplateEncryptionSpecList",
      },
      euc_config: {
        value: colabRuntimeTemplateEucConfigToHclTerraform(this._eucConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabRuntimeTemplateEucConfigList",
      },
      idle_shutdown_config: {
        value: colabRuntimeTemplateIdleShutdownConfigToHclTerraform(this._idleShutdownConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabRuntimeTemplateIdleShutdownConfigList",
      },
      machine_spec: {
        value: colabRuntimeTemplateMachineSpecToHclTerraform(this._machineSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabRuntimeTemplateMachineSpecList",
      },
      network_spec: {
        value: colabRuntimeTemplateNetworkSpecToHclTerraform(this._networkSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabRuntimeTemplateNetworkSpecList",
      },
      shielded_vm_config: {
        value: colabRuntimeTemplateShieldedVmConfigToHclTerraform(this._shieldedVmConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabRuntimeTemplateShieldedVmConfigList",
      },
      software_config: {
        value: colabRuntimeTemplateSoftwareConfigToHclTerraform(this._softwareConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabRuntimeTemplateSoftwareConfigList",
      },
      timeouts: {
        value: colabRuntimeTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ColabRuntimeTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
