// https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_region_instance_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeRegionInstanceTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_region_instance_template#filter DataGoogleComputeRegionInstanceTemplate#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_region_instance_template#id DataGoogleComputeRegionInstanceTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_region_instance_template#most_recent DataGoogleComputeRegionInstanceTemplate#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_region_instance_template#name DataGoogleComputeRegionInstanceTemplate#name}
  */
  readonly name?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_region_instance_template#project DataGoogleComputeRegionInstanceTemplate#project}
  */
  readonly project?: string;
  /**
  * The region in which the instance template is located. If it is not provided, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_region_instance_template#region DataGoogleComputeRegionInstanceTemplate#region}
  */
  readonly region?: string;
}
export interface DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures {
}

export function dataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_nested_virtualization - computed: true, optional: false, required: false
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization');
  }

  // threads_per_core - computed: true, optional: false, required: false
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }

  // visible_core_count - computed: true, optional: false, required: false
  public get visibleCoreCount() {
    return this.getNumberAttribute('visible_core_count');
  }
}

export class DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig {
}

export function dataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_confidential_compute - computed: true, optional: false, required: false
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute');
  }
}

export class DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey {
}

export function dataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_self_link - computed: true, optional: false, required: false
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
}

export class DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey {
}

export function dataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_self_link - computed: true, optional: false, required: false
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }

  // kms_key_service_account - computed: true, optional: false, required: false
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
}

export class DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey {
}

export function dataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_self_link - computed: true, optional: false, required: false
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }

  // kms_key_service_account - computed: true, optional: false, required: false
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
}

export class DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateDisk {
}

export function dataGoogleComputeRegionInstanceTemplateDiskToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateDiskToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_delete - computed: true, optional: false, required: false
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }

  // boot - computed: true, optional: false, required: false
  public get boot() {
    return this.getBooleanAttribute('boot');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_encryption_key - computed: true, optional: false, required: false
  private _diskEncryptionKey = new DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList(this, "disk_encryption_key", false);
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }

  // disk_name - computed: true, optional: false, required: false
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // provisioned_iops - computed: true, optional: false, required: false
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }

  // resource_manager_tags - computed: true, optional: false, required: false
  private _resourceManagerTags = new cdktf.StringMap(this, "resource_manager_tags");
  public get resourceManagerTags() {
    return this._resourceManagerTags;
  }

  // resource_policies - computed: true, optional: false, required: false
  public get resourcePolicies() {
    return this.getListAttribute('resource_policies');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_image - computed: true, optional: false, required: false
  public get sourceImage() {
    return this.getStringAttribute('source_image');
  }

  // source_image_encryption_key - computed: true, optional: false, required: false
  private _sourceImageEncryptionKey = new DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList(this, "source_image_encryption_key", false);
  public get sourceImageEncryptionKey() {
    return this._sourceImageEncryptionKey;
  }

  // source_snapshot - computed: true, optional: false, required: false
  public get sourceSnapshot() {
    return this.getStringAttribute('source_snapshot');
  }

  // source_snapshot_encryption_key - computed: true, optional: false, required: false
  private _sourceSnapshotEncryptionKey = new DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList(this, "source_snapshot_encryption_key", false);
  public get sourceSnapshotEncryptionKey() {
    return this._sourceSnapshotEncryptionKey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGoogleComputeRegionInstanceTemplateDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateDiskOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateGuestAccelerator {
}

export function dataGoogleComputeRegionInstanceTemplateGuestAcceleratorToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateGuestAccelerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateGuestAcceleratorToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateGuestAccelerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateGuestAccelerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateGuestAccelerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig {
}

export function dataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nat_ip - computed: true, optional: false, required: false
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }

  // network_tier - computed: true, optional: false, required: false
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }

  // public_ptr_domain_name - computed: true, optional: false, required: false
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
}

export class DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange {
}

export function dataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_cidr_range - computed: true, optional: false, required: false
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }

  // subnetwork_range_name - computed: true, optional: false, required: false
  public get subnetworkRangeName() {
    return this.getStringAttribute('subnetwork_range_name');
  }
}

export class DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig {
}

export function dataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_ipv6 - computed: true, optional: false, required: false
  public get externalIpv6() {
    return this.getStringAttribute('external_ipv6');
  }

  // external_ipv6_prefix_length - computed: true, optional: false, required: false
  public get externalIpv6PrefixLength() {
    return this.getStringAttribute('external_ipv6_prefix_length');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_tier - computed: true, optional: false, required: false
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }

  // public_ptr_domain_name - computed: true, optional: false, required: false
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
}

export class DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateNetworkInterface {
}

export function dataGoogleComputeRegionInstanceTemplateNetworkInterfaceToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateNetworkInterfaceToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateNetworkInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateNetworkInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_config - computed: true, optional: false, required: false
  private _accessConfig = new DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList(this, "access_config", false);
  public get accessConfig() {
    return this._accessConfig;
  }

  // alias_ip_range - computed: true, optional: false, required: false
  private _aliasIpRange = new DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList(this, "alias_ip_range", false);
  public get aliasIpRange() {
    return this._aliasIpRange;
  }

  // internal_ipv6_prefix_length - computed: true, optional: false, required: false
  public get internalIpv6PrefixLength() {
    return this.getNumberAttribute('internal_ipv6_prefix_length');
  }

  // ipv6_access_config - computed: true, optional: false, required: false
  private _ipv6AccessConfig = new DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList(this, "ipv6_access_config", false);
  public get ipv6AccessConfig() {
    return this._ipv6AccessConfig;
  }

  // ipv6_access_type - computed: true, optional: false, required: false
  public get ipv6AccessType() {
    return this.getStringAttribute('ipv6_access_type');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_ip - computed: true, optional: false, required: false
  public get networkIp() {
    return this.getStringAttribute('network_ip');
  }

  // nic_type - computed: true, optional: false, required: false
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }

  // queue_count - computed: true, optional: false, required: false
  public get queueCount() {
    return this.getNumberAttribute('queue_count');
  }

  // stack_type - computed: true, optional: false, required: false
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }

  // subnetwork - computed: true, optional: false, required: false
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }

  // subnetwork_project - computed: true, optional: false, required: false
  public get subnetworkProject() {
    return this.getStringAttribute('subnetwork_project');
  }
}

export class DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig {
}

export function dataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // total_egress_bandwidth_tier - computed: true, optional: false, required: false
  public get totalEgressBandwidthTier() {
    return this.getStringAttribute('total_egress_bandwidth_tier');
  }
}

export class DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation {
}

export function dataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateReservationAffinity {
}

export function dataGoogleComputeRegionInstanceTemplateReservationAffinityToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateReservationAffinityToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // specific_reservation - computed: true, optional: false, required: false
  private _specificReservation = new DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList(this, "specific_reservation", false);
  public get specificReservation() {
    return this._specificReservation;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGoogleComputeRegionInstanceTemplateReservationAffinityList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout {
}

export function dataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}

export class DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities {
}

export function dataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateScheduling {
}

export function dataGoogleComputeRegionInstanceTemplateSchedulingToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateSchedulingToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic_restart - computed: true, optional: false, required: false
  public get automaticRestart() {
    return this.getBooleanAttribute('automatic_restart');
  }

  // instance_termination_action - computed: true, optional: false, required: false
  public get instanceTerminationAction() {
    return this.getStringAttribute('instance_termination_action');
  }

  // local_ssd_recovery_timeout - computed: true, optional: false, required: false
  private _localSsdRecoveryTimeout = new DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(this, "local_ssd_recovery_timeout", false);
  public get localSsdRecoveryTimeout() {
    return this._localSsdRecoveryTimeout;
  }

  // min_node_cpus - computed: true, optional: false, required: false
  public get minNodeCpus() {
    return this.getNumberAttribute('min_node_cpus');
  }

  // node_affinities - computed: true, optional: false, required: false
  private _nodeAffinities = new DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList(this, "node_affinities", true);
  public get nodeAffinities() {
    return this._nodeAffinities;
  }

  // on_host_maintenance - computed: true, optional: false, required: false
  public get onHostMaintenance() {
    return this.getStringAttribute('on_host_maintenance');
  }

  // preemptible - computed: true, optional: false, required: false
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }

  // provisioning_model - computed: true, optional: false, required: false
  public get provisioningModel() {
    return this.getStringAttribute('provisioning_model');
  }
}

export class DataGoogleComputeRegionInstanceTemplateSchedulingList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateServiceAccount {
}

export function dataGoogleComputeRegionInstanceTemplateServiceAccountToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateServiceAccountToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
}

export class DataGoogleComputeRegionInstanceTemplateServiceAccountList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig {
}

export function dataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigToTerraform(struct?: DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigToHclTerraform(struct?: DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_integrity_monitoring - computed: true, optional: false, required: false
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }

  // enable_secure_boot - computed: true, optional: false, required: false
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }

  // enable_vtpm - computed: true, optional: false, required: false
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
}

export class DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference {
    return new DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_region_instance_template google_compute_region_instance_template}
*/
export class DataGoogleComputeRegionInstanceTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_instance_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleComputeRegionInstanceTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleComputeRegionInstanceTemplate to import
  * @param importFromId The id of the existing DataGoogleComputeRegionInstanceTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_region_instance_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleComputeRegionInstanceTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_instance_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_region_instance_template google_compute_region_instance_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeRegionInstanceTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeRegionInstanceTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_instance_template',
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
    this._filter = config.filter;
    this._id = config.id;
    this._mostRecent = config.mostRecent;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_machine_features - computed: true, optional: false, required: false
  private _advancedMachineFeatures = new DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList(this, "advanced_machine_features", false);
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }

  // can_ip_forward - computed: true, optional: false, required: false
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward');
  }

  // confidential_instance_config - computed: true, optional: false, required: false
  private _confidentialInstanceConfig = new DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList(this, "confidential_instance_config", false);
  public get confidentialInstanceConfig() {
    return this._confidentialInstanceConfig;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk - computed: true, optional: false, required: false
  private _disk = new DataGoogleComputeRegionInstanceTemplateDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // guest_accelerator - computed: true, optional: false, required: false
  private _guestAccelerator = new DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
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

  // instance_description - computed: true, optional: false, required: false
  public get instanceDescription() {
    return this.getStringAttribute('instance_description');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // metadata_fingerprint - computed: true, optional: false, required: false
  public get metadataFingerprint() {
    return this.getStringAttribute('metadata_fingerprint');
  }

  // metadata_startup_script - computed: true, optional: false, required: false
  public get metadataStartupScript() {
    return this.getStringAttribute('metadata_startup_script');
  }

  // min_cpu_platform - computed: true, optional: false, required: false
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
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

  // name_prefix - computed: true, optional: false, required: false
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }

  // network_interface - computed: true, optional: false, required: false
  private _networkInterface = new DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }

  // network_performance_config - computed: true, optional: false, required: false
  private _networkPerformanceConfig = new DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList(this, "network_performance_config", false);
  public get networkPerformanceConfig() {
    return this._networkPerformanceConfig;
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

  // region - computed: false, optional: true, required: false
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

  // reservation_affinity - computed: true, optional: false, required: false
  private _reservationAffinity = new DataGoogleComputeRegionInstanceTemplateReservationAffinityList(this, "reservation_affinity", false);
  public get reservationAffinity() {
    return this._reservationAffinity;
  }

  // resource_manager_tags - computed: true, optional: false, required: false
  private _resourceManagerTags = new cdktf.StringMap(this, "resource_manager_tags");
  public get resourceManagerTags() {
    return this._resourceManagerTags;
  }

  // resource_policies - computed: true, optional: false, required: false
  public get resourcePolicies() {
    return this.getListAttribute('resource_policies');
  }

  // scheduling - computed: true, optional: false, required: false
  private _scheduling = new DataGoogleComputeRegionInstanceTemplateSchedulingList(this, "scheduling", false);
  public get scheduling() {
    return this._scheduling;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // service_account - computed: true, optional: false, required: false
  private _serviceAccount = new DataGoogleComputeRegionInstanceTemplateServiceAccountList(this, "service_account", false);
  public get serviceAccount() {
    return this._serviceAccount;
  }

  // shielded_instance_config - computed: true, optional: false, required: false
  private _shieldedInstanceConfig = new DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList(this, "shielded_instance_config", false);
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // tags_fingerprint - computed: true, optional: false, required: false
  public get tagsFingerprint() {
    return this.getStringAttribute('tags_fingerprint');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      most_recent: {
        value: cdktf.booleanToHclTerraform(this._mostRecent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
