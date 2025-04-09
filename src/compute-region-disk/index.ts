/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, a snapshot of the disk will be created before it is destroyed.
  * If your disk is encrypted with customer managed encryption keys these will be reused for the snapshot creation.
  * The name of the snapshot by default will be '{{disk-name}}-YYYYMMDD-HHmm'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#create_snapshot_before_destroy ComputeRegionDisk#create_snapshot_before_destroy}
  */
  readonly createSnapshotBeforeDestroy?: boolean | cdktf.IResolvable;
  /**
  * This will set a custom name prefix for the snapshot that's created when the disk is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#create_snapshot_before_destroy_prefix ComputeRegionDisk#create_snapshot_before_destroy_prefix}
  */
  readonly createSnapshotBeforeDestroyPrefix?: string;
  /**
  * An optional description of this resource. Provide this property when
  * you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#description ComputeRegionDisk#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#id ComputeRegionDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels to apply to this disk.  A list of key->value pairs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#labels ComputeRegionDisk#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Any applicable license URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#licenses ComputeRegionDisk#licenses}
  */
  readonly licenses?: string[];
  /**
  * Name of the resource. Provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035. Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
  * first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the last
  * character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#name ComputeRegionDisk#name}
  */
  readonly name: string;
  /**
  * Physical block size of the persistent disk, in bytes. If not present
  * in a request, a default value is used. Currently supported sizes
  * are 4096 and 16384, other sizes may be added in the future.
  * If an unsupported value is requested, the error message will list
  * the supported values for the caller's project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#physical_block_size_bytes ComputeRegionDisk#physical_block_size_bytes}
  */
  readonly physicalBlockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#project ComputeRegionDisk#project}
  */
  readonly project?: string;
  /**
  * A reference to the region where the disk resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#region ComputeRegionDisk#region}
  */
  readonly region?: string;
  /**
  * URLs of the zones where the disk should be replicated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#replica_zones ComputeRegionDisk#replica_zones}
  */
  readonly replicaZones: string[];
  /**
  * Size of the persistent disk, specified in GB. You can specify this
  * field when creating a persistent disk using the sourceImage or
  * sourceSnapshot parameter, or specify it alone to create an empty
  * persistent disk.
  * 
  * If you specify this field along with sourceImage or sourceSnapshot,
  * the value of sizeGb must not be less than the size of the sourceImage
  * or the size of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#size ComputeRegionDisk#size}
  */
  readonly size?: number;
  /**
  * The source snapshot used to create this disk. You can provide this as
  * a partial or full URL to the resource. For example, the following are
  * valid values:
  * 
  * * 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
  * * 'projects/project/global/snapshots/snapshot'
  * * 'global/snapshots/snapshot'
  * * 'snapshot'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#snapshot ComputeRegionDisk#snapshot}
  */
  readonly snapshot?: string;
  /**
  * The source disk used to create this disk. You can provide this as a partial or full URL to the resource.
  * For example, the following are valid values:
  * 
  * * https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
  * * https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
  * * projects/{project}/zones/{zone}/disks/{disk}
  * * projects/{project}/regions/{region}/disks/{disk}
  * * zones/{zone}/disks/{disk}
  * * regions/{region}/disks/{disk}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#source_disk ComputeRegionDisk#source_disk}
  */
  readonly sourceDisk?: string;
  /**
  * URL of the disk type resource describing which disk type to use to
  * create the disk. Provide this when creating the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#type ComputeRegionDisk#type}
  */
  readonly type?: string;
  /**
  * async_primary_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#async_primary_disk ComputeRegionDisk#async_primary_disk}
  */
  readonly asyncPrimaryDisk?: ComputeRegionDiskAsyncPrimaryDisk;
  /**
  * disk_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#disk_encryption_key ComputeRegionDisk#disk_encryption_key}
  */
  readonly diskEncryptionKey?: ComputeRegionDiskDiskEncryptionKey;
  /**
  * guest_os_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#guest_os_features ComputeRegionDisk#guest_os_features}
  */
  readonly guestOsFeatures?: ComputeRegionDiskGuestOsFeatures[] | cdktf.IResolvable;
  /**
  * source_snapshot_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#source_snapshot_encryption_key ComputeRegionDisk#source_snapshot_encryption_key}
  */
  readonly sourceSnapshotEncryptionKey?: ComputeRegionDiskSourceSnapshotEncryptionKey;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#timeouts ComputeRegionDisk#timeouts}
  */
  readonly timeouts?: ComputeRegionDiskTimeouts;
}
export interface ComputeRegionDiskAsyncPrimaryDisk {
  /**
  * Primary disk for asynchronous disk replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#disk ComputeRegionDisk#disk}
  */
  readonly disk: string;
}

export function computeRegionDiskAsyncPrimaryDiskToTerraform(struct?: ComputeRegionDiskAsyncPrimaryDiskOutputReference | ComputeRegionDiskAsyncPrimaryDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktf.stringToTerraform(struct!.disk),
  }
}


export function computeRegionDiskAsyncPrimaryDiskToHclTerraform(struct?: ComputeRegionDiskAsyncPrimaryDiskOutputReference | ComputeRegionDiskAsyncPrimaryDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktf.stringToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionDiskAsyncPrimaryDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionDiskAsyncPrimaryDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionDiskAsyncPrimaryDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disk = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disk = value.disk;
    }
  }

  // disk - computed: false, optional: false, required: true
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }
}
export interface ComputeRegionDiskDiskEncryptionKey {
  /**
  * The name of the encryption key that is stored in Google Cloud KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#kms_key_name ComputeRegionDisk#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
  * RFC 4648 base64 to either encrypt or decrypt this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#raw_key ComputeRegionDisk#raw_key}
  */
  readonly rawKey?: string;
  /**
  * Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit
  * customer-supplied encryption key to either encrypt or decrypt
  * this resource. You can provide either the rawKey or the rsaEncryptedKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#rsa_encrypted_key ComputeRegionDisk#rsa_encrypted_key}
  */
  readonly rsaEncryptedKey?: string;
}

export function computeRegionDiskDiskEncryptionKeyToTerraform(struct?: ComputeRegionDiskDiskEncryptionKeyOutputReference | ComputeRegionDiskDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
    rsa_encrypted_key: cdktf.stringToTerraform(struct!.rsaEncryptedKey),
  }
}


export function computeRegionDiskDiskEncryptionKeyToHclTerraform(struct?: ComputeRegionDiskDiskEncryptionKeyOutputReference | ComputeRegionDiskDiskEncryptionKey): any {
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
    raw_key: {
      value: cdktf.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_encrypted_key: {
      value: cdktf.stringToHclTerraform(struct!.rsaEncryptedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionDiskDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionDiskDiskEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    if (this._rsaEncryptedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEncryptedKey = this._rsaEncryptedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionDiskDiskEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._rawKey = undefined;
      this._rsaEncryptedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._rawKey = value.rawKey;
      this._rsaEncryptedKey = value.rsaEncryptedKey;
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

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // rsa_encrypted_key - computed: false, optional: true, required: false
  private _rsaEncryptedKey?: string; 
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }
  public set rsaEncryptedKey(value: string) {
    this._rsaEncryptedKey = value;
  }
  public resetRsaEncryptedKey() {
    this._rsaEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEncryptedKeyInput() {
    return this._rsaEncryptedKey;
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}
export interface ComputeRegionDiskGuestOsFeatures {
  /**
  * The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Possible values: ["MULTI_IP_SUBNET", "SECURE_BOOT", "SEV_CAPABLE", "UEFI_COMPATIBLE", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "GVNIC", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "SUSPEND_RESUME_COMPATIBLE", "TDX_CAPABLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#type ComputeRegionDisk#type}
  */
  readonly type: string;
}

export function computeRegionDiskGuestOsFeaturesToTerraform(struct?: ComputeRegionDiskGuestOsFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function computeRegionDiskGuestOsFeaturesToHclTerraform(struct?: ComputeRegionDiskGuestOsFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ComputeRegionDiskGuestOsFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionDiskGuestOsFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionDiskGuestOsFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ComputeRegionDiskGuestOsFeaturesList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionDiskGuestOsFeatures[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionDiskGuestOsFeaturesOutputReference {
    return new ComputeRegionDiskGuestOsFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionDiskSourceSnapshotEncryptionKey {
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
  * RFC 4648 base64 to either encrypt or decrypt this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#raw_key ComputeRegionDisk#raw_key}
  */
  readonly rawKey?: string;
}

export function computeRegionDiskSourceSnapshotEncryptionKeyToTerraform(struct?: ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference | ComputeRegionDiskSourceSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
  }
}


export function computeRegionDiskSourceSnapshotEncryptionKeyToHclTerraform(struct?: ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference | ComputeRegionDiskSourceSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw_key: {
      value: cdktf.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionDiskSourceSnapshotEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionDiskSourceSnapshotEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rawKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rawKey = value.rawKey;
    }
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}
export interface ComputeRegionDiskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#create ComputeRegionDisk#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#delete ComputeRegionDisk#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#update ComputeRegionDisk#update}
  */
  readonly update?: string;
}

export function computeRegionDiskTimeoutsToTerraform(struct?: ComputeRegionDiskTimeouts | cdktf.IResolvable): any {
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


export function computeRegionDiskTimeoutsToHclTerraform(struct?: ComputeRegionDiskTimeouts | cdktf.IResolvable): any {
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

export class ComputeRegionDiskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeRegionDiskTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRegionDiskTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk google_compute_region_disk}
*/
export class ComputeRegionDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeRegionDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeRegionDisk to import
  * @param importFromId The id of the existing ComputeRegionDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeRegionDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_region_disk google_compute_region_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRegionDiskConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRegionDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_disk',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.29.0',
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
    this._createSnapshotBeforeDestroy = config.createSnapshotBeforeDestroy;
    this._createSnapshotBeforeDestroyPrefix = config.createSnapshotBeforeDestroyPrefix;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._licenses = config.licenses;
    this._name = config.name;
    this._physicalBlockSizeBytes = config.physicalBlockSizeBytes;
    this._project = config.project;
    this._region = config.region;
    this._replicaZones = config.replicaZones;
    this._size = config.size;
    this._snapshot = config.snapshot;
    this._sourceDisk = config.sourceDisk;
    this._type = config.type;
    this._asyncPrimaryDisk.internalValue = config.asyncPrimaryDisk;
    this._diskEncryptionKey.internalValue = config.diskEncryptionKey;
    this._guestOsFeatures.internalValue = config.guestOsFeatures;
    this._sourceSnapshotEncryptionKey.internalValue = config.sourceSnapshotEncryptionKey;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_snapshot_before_destroy - computed: false, optional: true, required: false
  private _createSnapshotBeforeDestroy?: boolean | cdktf.IResolvable; 
  public get createSnapshotBeforeDestroy() {
    return this.getBooleanAttribute('create_snapshot_before_destroy');
  }
  public set createSnapshotBeforeDestroy(value: boolean | cdktf.IResolvable) {
    this._createSnapshotBeforeDestroy = value;
  }
  public resetCreateSnapshotBeforeDestroy() {
    this._createSnapshotBeforeDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSnapshotBeforeDestroyInput() {
    return this._createSnapshotBeforeDestroy;
  }

  // create_snapshot_before_destroy_prefix - computed: false, optional: true, required: false
  private _createSnapshotBeforeDestroyPrefix?: string; 
  public get createSnapshotBeforeDestroyPrefix() {
    return this.getStringAttribute('create_snapshot_before_destroy_prefix');
  }
  public set createSnapshotBeforeDestroyPrefix(value: string) {
    this._createSnapshotBeforeDestroyPrefix = value;
  }
  public resetCreateSnapshotBeforeDestroyPrefix() {
    this._createSnapshotBeforeDestroyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSnapshotBeforeDestroyPrefixInput() {
    return this._createSnapshotBeforeDestroyPrefix;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
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

  // last_attach_timestamp - computed: true, optional: false, required: false
  public get lastAttachTimestamp() {
    return this.getStringAttribute('last_attach_timestamp');
  }

  // last_detach_timestamp - computed: true, optional: false, required: false
  public get lastDetachTimestamp() {
    return this.getStringAttribute('last_detach_timestamp');
  }

  // licenses - computed: true, optional: true, required: false
  private _licenses?: string[]; 
  public get licenses() {
    return this.getListAttribute('licenses');
  }
  public set licenses(value: string[]) {
    this._licenses = value;
  }
  public resetLicenses() {
    this._licenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses;
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

  // physical_block_size_bytes - computed: true, optional: true, required: false
  private _physicalBlockSizeBytes?: number; 
  public get physicalBlockSizeBytes() {
    return this.getNumberAttribute('physical_block_size_bytes');
  }
  public set physicalBlockSizeBytes(value: number) {
    this._physicalBlockSizeBytes = value;
  }
  public resetPhysicalBlockSizeBytes() {
    this._physicalBlockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalBlockSizeBytesInput() {
    return this._physicalBlockSizeBytes;
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

  // replica_zones - computed: false, optional: false, required: true
  private _replicaZones?: string[]; 
  public get replicaZones() {
    return this.getListAttribute('replica_zones');
  }
  public set replicaZones(value: string[]) {
    this._replicaZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaZonesInput() {
    return this._replicaZones;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: string; 
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // source_disk - computed: false, optional: true, required: false
  private _sourceDisk?: string; 
  public get sourceDisk() {
    return this.getStringAttribute('source_disk');
  }
  public set sourceDisk(value: string) {
    this._sourceDisk = value;
  }
  public resetSourceDisk() {
    this._sourceDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDiskInput() {
    return this._sourceDisk;
  }

  // source_disk_id - computed: true, optional: false, required: false
  public get sourceDiskId() {
    return this.getStringAttribute('source_disk_id');
  }

  // source_snapshot_id - computed: true, optional: false, required: false
  public get sourceSnapshotId() {
    return this.getStringAttribute('source_snapshot_id');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }

  // async_primary_disk - computed: false, optional: true, required: false
  private _asyncPrimaryDisk = new ComputeRegionDiskAsyncPrimaryDiskOutputReference(this, "async_primary_disk");
  public get asyncPrimaryDisk() {
    return this._asyncPrimaryDisk;
  }
  public putAsyncPrimaryDisk(value: ComputeRegionDiskAsyncPrimaryDisk) {
    this._asyncPrimaryDisk.internalValue = value;
  }
  public resetAsyncPrimaryDisk() {
    this._asyncPrimaryDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncPrimaryDiskInput() {
    return this._asyncPrimaryDisk.internalValue;
  }

  // disk_encryption_key - computed: false, optional: true, required: false
  private _diskEncryptionKey = new ComputeRegionDiskDiskEncryptionKeyOutputReference(this, "disk_encryption_key");
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }
  public putDiskEncryptionKey(value: ComputeRegionDiskDiskEncryptionKey) {
    this._diskEncryptionKey.internalValue = value;
  }
  public resetDiskEncryptionKey() {
    this._diskEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey.internalValue;
  }

  // guest_os_features - computed: false, optional: true, required: false
  private _guestOsFeatures = new ComputeRegionDiskGuestOsFeaturesList(this, "guest_os_features", true);
  public get guestOsFeatures() {
    return this._guestOsFeatures;
  }
  public putGuestOsFeatures(value: ComputeRegionDiskGuestOsFeatures[] | cdktf.IResolvable) {
    this._guestOsFeatures.internalValue = value;
  }
  public resetGuestOsFeatures() {
    this._guestOsFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestOsFeaturesInput() {
    return this._guestOsFeatures.internalValue;
  }

  // source_snapshot_encryption_key - computed: false, optional: true, required: false
  private _sourceSnapshotEncryptionKey = new ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference(this, "source_snapshot_encryption_key");
  public get sourceSnapshotEncryptionKey() {
    return this._sourceSnapshotEncryptionKey;
  }
  public putSourceSnapshotEncryptionKey(value: ComputeRegionDiskSourceSnapshotEncryptionKey) {
    this._sourceSnapshotEncryptionKey.internalValue = value;
  }
  public resetSourceSnapshotEncryptionKey() {
    this._sourceSnapshotEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotEncryptionKeyInput() {
    return this._sourceSnapshotEncryptionKey.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRegionDiskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRegionDiskTimeouts) {
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
      create_snapshot_before_destroy: cdktf.booleanToTerraform(this._createSnapshotBeforeDestroy),
      create_snapshot_before_destroy_prefix: cdktf.stringToTerraform(this._createSnapshotBeforeDestroyPrefix),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      licenses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._licenses),
      name: cdktf.stringToTerraform(this._name),
      physical_block_size_bytes: cdktf.numberToTerraform(this._physicalBlockSizeBytes),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      replica_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replicaZones),
      size: cdktf.numberToTerraform(this._size),
      snapshot: cdktf.stringToTerraform(this._snapshot),
      source_disk: cdktf.stringToTerraform(this._sourceDisk),
      type: cdktf.stringToTerraform(this._type),
      async_primary_disk: computeRegionDiskAsyncPrimaryDiskToTerraform(this._asyncPrimaryDisk.internalValue),
      disk_encryption_key: computeRegionDiskDiskEncryptionKeyToTerraform(this._diskEncryptionKey.internalValue),
      guest_os_features: cdktf.listMapper(computeRegionDiskGuestOsFeaturesToTerraform, true)(this._guestOsFeatures.internalValue),
      source_snapshot_encryption_key: computeRegionDiskSourceSnapshotEncryptionKeyToTerraform(this._sourceSnapshotEncryptionKey.internalValue),
      timeouts: computeRegionDiskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_snapshot_before_destroy: {
        value: cdktf.booleanToHclTerraform(this._createSnapshotBeforeDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_snapshot_before_destroy_prefix: {
        value: cdktf.stringToHclTerraform(this._createSnapshotBeforeDestroyPrefix),
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
      licenses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._licenses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      physical_block_size_bytes: {
        value: cdktf.numberToHclTerraform(this._physicalBlockSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      replica_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replicaZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot: {
        value: cdktf.stringToHclTerraform(this._snapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_disk: {
        value: cdktf.stringToHclTerraform(this._sourceDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      async_primary_disk: {
        value: computeRegionDiskAsyncPrimaryDiskToHclTerraform(this._asyncPrimaryDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionDiskAsyncPrimaryDiskList",
      },
      disk_encryption_key: {
        value: computeRegionDiskDiskEncryptionKeyToHclTerraform(this._diskEncryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionDiskDiskEncryptionKeyList",
      },
      guest_os_features: {
        value: cdktf.listMapperHcl(computeRegionDiskGuestOsFeaturesToHclTerraform, true)(this._guestOsFeatures.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeRegionDiskGuestOsFeaturesList",
      },
      source_snapshot_encryption_key: {
        value: computeRegionDiskSourceSnapshotEncryptionKeyToHclTerraform(this._sourceSnapshotEncryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionDiskSourceSnapshotEncryptionKeyList",
      },
      timeouts: {
        value: computeRegionDiskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeRegionDiskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
