/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_disk#id DataGoogleComputeDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035. Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
  * first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the last
  * character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_disk#name DataGoogleComputeDisk#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_disk#project DataGoogleComputeDisk#project}
  */
  readonly project?: string;
  /**
  * A reference to the zone where the disk resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_disk#zone DataGoogleComputeDisk#zone}
  */
  readonly zone?: string;
}
export interface DataGoogleComputeDiskAsyncPrimaryDisk {
}

export function dataGoogleComputeDiskAsyncPrimaryDiskToTerraform(struct?: DataGoogleComputeDiskAsyncPrimaryDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeDiskAsyncPrimaryDiskToHclTerraform(struct?: DataGoogleComputeDiskAsyncPrimaryDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeDiskAsyncPrimaryDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeDiskAsyncPrimaryDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeDiskAsyncPrimaryDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getStringAttribute('disk');
  }
}

export class DataGoogleComputeDiskAsyncPrimaryDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeDiskAsyncPrimaryDiskOutputReference {
    return new DataGoogleComputeDiskAsyncPrimaryDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeDiskDiskEncryptionKey {
}

export function dataGoogleComputeDiskDiskEncryptionKeyToTerraform(struct?: DataGoogleComputeDiskDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeDiskDiskEncryptionKeyToHclTerraform(struct?: DataGoogleComputeDiskDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeDiskDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeDiskDiskEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeDiskDiskEncryptionKey | undefined) {
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

  // raw_key - computed: true, optional: false, required: false
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }

  // rsa_encrypted_key - computed: true, optional: false, required: false
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}

export class DataGoogleComputeDiskDiskEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeDiskDiskEncryptionKeyOutputReference {
    return new DataGoogleComputeDiskDiskEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeDiskGuestOsFeatures {
}

export function dataGoogleComputeDiskGuestOsFeaturesToTerraform(struct?: DataGoogleComputeDiskGuestOsFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeDiskGuestOsFeaturesToHclTerraform(struct?: DataGoogleComputeDiskGuestOsFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeDiskGuestOsFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeDiskGuestOsFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeDiskGuestOsFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGoogleComputeDiskGuestOsFeaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeDiskGuestOsFeaturesOutputReference {
    return new DataGoogleComputeDiskGuestOsFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeDiskParams {
}

export function dataGoogleComputeDiskParamsToTerraform(struct?: DataGoogleComputeDiskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeDiskParamsToHclTerraform(struct?: DataGoogleComputeDiskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeDiskParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeDiskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeDiskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_manager_tags - computed: true, optional: false, required: false
  private _resourceManagerTags = new cdktf.StringMap(this, "resource_manager_tags");
  public get resourceManagerTags() {
    return this._resourceManagerTags;
  }
}

export class DataGoogleComputeDiskParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeDiskParamsOutputReference {
    return new DataGoogleComputeDiskParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeDiskSourceImageEncryptionKey {
}

export function dataGoogleComputeDiskSourceImageEncryptionKeyToTerraform(struct?: DataGoogleComputeDiskSourceImageEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeDiskSourceImageEncryptionKeyToHclTerraform(struct?: DataGoogleComputeDiskSourceImageEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeDiskSourceImageEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeDiskSourceImageEncryptionKey | undefined) {
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

  // raw_key - computed: true, optional: false, required: false
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}

export class DataGoogleComputeDiskSourceImageEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference {
    return new DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeDiskSourceSnapshotEncryptionKey {
}

export function dataGoogleComputeDiskSourceSnapshotEncryptionKeyToTerraform(struct?: DataGoogleComputeDiskSourceSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeDiskSourceSnapshotEncryptionKeyToHclTerraform(struct?: DataGoogleComputeDiskSourceSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeDiskSourceSnapshotEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeDiskSourceSnapshotEncryptionKey | undefined) {
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

  // raw_key - computed: true, optional: false, required: false
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}

export class DataGoogleComputeDiskSourceSnapshotEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference {
    return new DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_disk google_compute_disk}
*/
export class DataGoogleComputeDisk extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleComputeDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleComputeDisk to import
  * @param importFromId The id of the existing DataGoogleComputeDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleComputeDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_disk google_compute_disk} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeDiskConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_disk',
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: true, optional: false, required: false
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // async_primary_disk - computed: true, optional: false, required: false
  private _asyncPrimaryDisk = new DataGoogleComputeDiskAsyncPrimaryDiskList(this, "async_primary_disk", false);
  public get asyncPrimaryDisk() {
    return this._asyncPrimaryDisk;
  }

  // create_snapshot_before_destroy - computed: true, optional: false, required: false
  public get createSnapshotBeforeDestroy() {
    return this.getBooleanAttribute('create_snapshot_before_destroy');
  }

  // create_snapshot_before_destroy_prefix - computed: true, optional: false, required: false
  public get createSnapshotBeforeDestroyPrefix() {
    return this.getStringAttribute('create_snapshot_before_destroy_prefix');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_encryption_key - computed: true, optional: false, required: false
  private _diskEncryptionKey = new DataGoogleComputeDiskDiskEncryptionKeyList(this, "disk_encryption_key", false);
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // enable_confidential_compute - computed: true, optional: false, required: false
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute');
  }

  // guest_os_features - computed: true, optional: false, required: false
  private _guestOsFeatures = new DataGoogleComputeDiskGuestOsFeaturesList(this, "guest_os_features", true);
  public get guestOsFeatures() {
    return this._guestOsFeatures;
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

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // last_attach_timestamp - computed: true, optional: false, required: false
  public get lastAttachTimestamp() {
    return this.getStringAttribute('last_attach_timestamp');
  }

  // last_detach_timestamp - computed: true, optional: false, required: false
  public get lastDetachTimestamp() {
    return this.getStringAttribute('last_detach_timestamp');
  }

  // licenses - computed: true, optional: false, required: false
  public get licenses() {
    return this.getListAttribute('licenses');
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

  // params - computed: true, optional: false, required: false
  private _params = new DataGoogleComputeDiskParamsList(this, "params", false);
  public get params() {
    return this._params;
  }

  // physical_block_size_bytes - computed: true, optional: false, required: false
  public get physicalBlockSizeBytes() {
    return this.getNumberAttribute('physical_block_size_bytes');
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

  // provisioned_iops - computed: true, optional: false, required: false
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }

  // provisioned_throughput - computed: true, optional: false, required: false
  public get provisionedThroughput() {
    return this.getNumberAttribute('provisioned_throughput');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot - computed: true, optional: false, required: false
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }

  // source_disk - computed: true, optional: false, required: false
  public get sourceDisk() {
    return this.getStringAttribute('source_disk');
  }

  // source_disk_id - computed: true, optional: false, required: false
  public get sourceDiskId() {
    return this.getStringAttribute('source_disk_id');
  }

  // source_image_encryption_key - computed: true, optional: false, required: false
  private _sourceImageEncryptionKey = new DataGoogleComputeDiskSourceImageEncryptionKeyList(this, "source_image_encryption_key", false);
  public get sourceImageEncryptionKey() {
    return this._sourceImageEncryptionKey;
  }

  // source_image_id - computed: true, optional: false, required: false
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }

  // source_instant_snapshot - computed: true, optional: false, required: false
  public get sourceInstantSnapshot() {
    return this.getStringAttribute('source_instant_snapshot');
  }

  // source_instant_snapshot_id - computed: true, optional: false, required: false
  public get sourceInstantSnapshotId() {
    return this.getStringAttribute('source_instant_snapshot_id');
  }

  // source_snapshot_encryption_key - computed: true, optional: false, required: false
  private _sourceSnapshotEncryptionKey = new DataGoogleComputeDiskSourceSnapshotEncryptionKeyList(this, "source_snapshot_encryption_key", false);
  public get sourceSnapshotEncryptionKey() {
    return this._sourceSnapshotEncryptionKey;
  }

  // source_snapshot_id - computed: true, optional: false, required: false
  public get sourceSnapshotId() {
    return this.getStringAttribute('source_snapshot_id');
  }

  // source_storage_object - computed: true, optional: false, required: false
  public get sourceStorageObject() {
    return this.getStringAttribute('source_storage_object');
  }

  // storage_pool - computed: true, optional: false, required: false
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      zone: cdktf.stringToTerraform(this._zone),
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
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
