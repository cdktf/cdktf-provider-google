/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilestoreInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the instance is protected against deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#deletion_protection_enabled FilestoreInstance#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * The reason for enabling deletion protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#deletion_protection_reason FilestoreInstance#deletion_protection_reason}
  */
  readonly deletionProtectionReason?: string;
  /**
  * A description of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#description FilestoreInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#id FilestoreInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * KMS key name used for data encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#kms_key_name FilestoreInstance#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Resource labels to represent user-provided metadata.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#labels FilestoreInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#location FilestoreInstance#location}
  */
  readonly location?: string;
  /**
  * The resource name of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#name FilestoreInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#project FilestoreInstance#project}
  */
  readonly project?: string;
  /**
  * Either NFSv3, for using NFS version 3 as file sharing protocol,
  * or NFSv4.1, for using NFS version 4.1 as file sharing protocol.
  * NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE.
  * The default is NFSv3. Default value: "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#protocol FilestoreInstance#protocol}
  */
  readonly protocol?: string;
  /**
  * A map of resource manager tags. Resource manager tag keys
  * and values have the same definition as resource manager
  * tags. Keys must be in the format tagKeys/{tag_key_id},
  * and values are in the format tagValues/456. The field is
  * ignored when empty. The field is immutable and causes
  * resource replacement when mutated. This field is only set
  * at create time and modifying this field after creation
  * will trigger recreation. To apply tags to an existing
  * resource, see the 'google_tags_tag_value' resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#tags FilestoreInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The service tier of the instance.
  * Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#tier FilestoreInstance#tier}
  */
  readonly tier: string;
  /**
  * The name of the Filestore zone of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#zone FilestoreInstance#zone}
  */
  readonly zone?: string;
  /**
  * file_shares block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#file_shares FilestoreInstance#file_shares}
  */
  readonly fileShares: FilestoreInstanceFileShares;
  /**
  * initial_replication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#initial_replication FilestoreInstance#initial_replication}
  */
  readonly initialReplication?: FilestoreInstanceInitialReplication;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#networks FilestoreInstance#networks}
  */
  readonly networks: FilestoreInstanceNetworks[] | cdktf.IResolvable;
  /**
  * performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#performance_config FilestoreInstance#performance_config}
  */
  readonly performanceConfig?: FilestoreInstancePerformanceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#timeouts FilestoreInstance#timeouts}
  */
  readonly timeouts?: FilestoreInstanceTimeouts;
}
export interface FilestoreInstanceEffectiveReplicationReplicas {
}

export function filestoreInstanceEffectiveReplicationReplicasToTerraform(struct?: FilestoreInstanceEffectiveReplicationReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function filestoreInstanceEffectiveReplicationReplicasToHclTerraform(struct?: FilestoreInstanceEffectiveReplicationReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FilestoreInstanceEffectiveReplicationReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FilestoreInstanceEffectiveReplicationReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilestoreInstanceEffectiveReplicationReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_active_sync_time - computed: true, optional: false, required: false
  public get lastActiveSyncTime() {
    return this.getStringAttribute('last_active_sync_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_reasons - computed: true, optional: false, required: false
  public get stateReasons() {
    return this.getListAttribute('state_reasons');
  }
}

export class FilestoreInstanceEffectiveReplicationReplicasList extends cdktf.ComplexList {

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
  public get(index: number): FilestoreInstanceEffectiveReplicationReplicasOutputReference {
    return new FilestoreInstanceEffectiveReplicationReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilestoreInstanceEffectiveReplication {
}

export function filestoreInstanceEffectiveReplicationToTerraform(struct?: FilestoreInstanceEffectiveReplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function filestoreInstanceEffectiveReplicationToHclTerraform(struct?: FilestoreInstanceEffectiveReplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FilestoreInstanceEffectiveReplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FilestoreInstanceEffectiveReplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilestoreInstanceEffectiveReplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // replicas - computed: true, optional: false, required: false
  private _replicas = new FilestoreInstanceEffectiveReplicationReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }
}

export class FilestoreInstanceEffectiveReplicationList extends cdktf.ComplexList {

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
  public get(index: number): FilestoreInstanceEffectiveReplicationOutputReference {
    return new FilestoreInstanceEffectiveReplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilestoreInstanceFileSharesNfsExportOptions {
  /**
  * Either READ_ONLY, for allowing only read requests on the exported directory,
  * or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#access_mode FilestoreInstance#access_mode}
  */
  readonly accessMode?: string;
  /**
  * An integer representing the anonymous group id with a default value of 65534.
  * Anon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned
  * if this field is specified for other squashMode settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#anon_gid FilestoreInstance#anon_gid}
  */
  readonly anonGid?: number;
  /**
  * An integer representing the anonymous user id with a default value of 65534.
  * Anon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned
  * if this field is specified for other squashMode settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#anon_uid FilestoreInstance#anon_uid}
  */
  readonly anonUid?: number;
  /**
  * List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.
  * Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.
  * The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#ip_ranges FilestoreInstance#ip_ranges}
  */
  readonly ipRanges?: string[];
  /**
  * Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH,
  * for not allowing root access. The default is NO_ROOT_SQUASH. Default value: "NO_ROOT_SQUASH" Possible values: ["NO_ROOT_SQUASH", "ROOT_SQUASH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#squash_mode FilestoreInstance#squash_mode}
  */
  readonly squashMode?: string;
}

export function filestoreInstanceFileSharesNfsExportOptionsToTerraform(struct?: FilestoreInstanceFileSharesNfsExportOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    anon_gid: cdktf.numberToTerraform(struct!.anonGid),
    anon_uid: cdktf.numberToTerraform(struct!.anonUid),
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
    squash_mode: cdktf.stringToTerraform(struct!.squashMode),
  }
}


export function filestoreInstanceFileSharesNfsExportOptionsToHclTerraform(struct?: FilestoreInstanceFileSharesNfsExportOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anon_gid: {
      value: cdktf.numberToHclTerraform(struct!.anonGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    anon_uid: {
      value: cdktf.numberToHclTerraform(struct!.anonUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    squash_mode: {
      value: cdktf.stringToHclTerraform(struct!.squashMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilestoreInstanceFileSharesNfsExportOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FilestoreInstanceFileSharesNfsExportOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._anonGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonGid = this._anonGid;
    }
    if (this._anonUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonUid = this._anonUid;
    }
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    if (this._squashMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.squashMode = this._squashMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilestoreInstanceFileSharesNfsExportOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._anonGid = undefined;
      this._anonUid = undefined;
      this._ipRanges = undefined;
      this._squashMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._anonGid = value.anonGid;
      this._anonUid = value.anonUid;
      this._ipRanges = value.ipRanges;
      this._squashMode = value.squashMode;
    }
  }

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // anon_gid - computed: false, optional: true, required: false
  private _anonGid?: number; 
  public get anonGid() {
    return this.getNumberAttribute('anon_gid');
  }
  public set anonGid(value: number) {
    this._anonGid = value;
  }
  public resetAnonGid() {
    this._anonGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonGidInput() {
    return this._anonGid;
  }

  // anon_uid - computed: false, optional: true, required: false
  private _anonUid?: number; 
  public get anonUid() {
    return this.getNumberAttribute('anon_uid');
  }
  public set anonUid(value: number) {
    this._anonUid = value;
  }
  public resetAnonUid() {
    this._anonUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonUidInput() {
    return this._anonUid;
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }

  // squash_mode - computed: false, optional: true, required: false
  private _squashMode?: string; 
  public get squashMode() {
    return this.getStringAttribute('squash_mode');
  }
  public set squashMode(value: string) {
    this._squashMode = value;
  }
  public resetSquashMode() {
    this._squashMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squashModeInput() {
    return this._squashMode;
  }
}

export class FilestoreInstanceFileSharesNfsExportOptionsList extends cdktf.ComplexList {
  public internalValue? : FilestoreInstanceFileSharesNfsExportOptions[] | cdktf.IResolvable

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
  public get(index: number): FilestoreInstanceFileSharesNfsExportOptionsOutputReference {
    return new FilestoreInstanceFileSharesNfsExportOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilestoreInstanceFileShares {
  /**
  * File share capacity in GiB. This must be at least 1024 GiB
  * for the standard tier, or 2560 GiB for the premium tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#capacity_gb FilestoreInstance#capacity_gb}
  */
  readonly capacityGb: number;
  /**
  * The name of the fileshare (16 characters or less)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#name FilestoreInstance#name}
  */
  readonly name: string;
  /**
  * The resource name of the backup, in the format
  * projects/{projectId}/locations/{locationId}/backups/{backupId},
  * that this file share has been restored from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#source_backup FilestoreInstance#source_backup}
  */
  readonly sourceBackup?: string;
  /**
  * nfs_export_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#nfs_export_options FilestoreInstance#nfs_export_options}
  */
  readonly nfsExportOptions?: FilestoreInstanceFileSharesNfsExportOptions[] | cdktf.IResolvable;
}

export function filestoreInstanceFileSharesToTerraform(struct?: FilestoreInstanceFileSharesOutputReference | FilestoreInstanceFileShares): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_gb: cdktf.numberToTerraform(struct!.capacityGb),
    name: cdktf.stringToTerraform(struct!.name),
    source_backup: cdktf.stringToTerraform(struct!.sourceBackup),
    nfs_export_options: cdktf.listMapper(filestoreInstanceFileSharesNfsExportOptionsToTerraform, true)(struct!.nfsExportOptions),
  }
}


export function filestoreInstanceFileSharesToHclTerraform(struct?: FilestoreInstanceFileSharesOutputReference | FilestoreInstanceFileShares): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_gb: {
      value: cdktf.numberToHclTerraform(struct!.capacityGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_backup: {
      value: cdktf.stringToHclTerraform(struct!.sourceBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_export_options: {
      value: cdktf.listMapperHcl(filestoreInstanceFileSharesNfsExportOptionsToHclTerraform, true)(struct!.nfsExportOptions),
      isBlock: true,
      type: "list",
      storageClassType: "FilestoreInstanceFileSharesNfsExportOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilestoreInstanceFileSharesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilestoreInstanceFileShares | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityGb = this._capacityGb;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceBackup = this._sourceBackup;
    }
    if (this._nfsExportOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsExportOptions = this._nfsExportOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilestoreInstanceFileShares | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityGb = undefined;
      this._name = undefined;
      this._sourceBackup = undefined;
      this._nfsExportOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityGb = value.capacityGb;
      this._name = value.name;
      this._sourceBackup = value.sourceBackup;
      this._nfsExportOptions.internalValue = value.nfsExportOptions;
    }
  }

  // capacity_gb - computed: false, optional: false, required: true
  private _capacityGb?: number; 
  public get capacityGb() {
    return this.getNumberAttribute('capacity_gb');
  }
  public set capacityGb(value: number) {
    this._capacityGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityGbInput() {
    return this._capacityGb;
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

  // source_backup - computed: false, optional: true, required: false
  private _sourceBackup?: string; 
  public get sourceBackup() {
    return this.getStringAttribute('source_backup');
  }
  public set sourceBackup(value: string) {
    this._sourceBackup = value;
  }
  public resetSourceBackup() {
    this._sourceBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBackupInput() {
    return this._sourceBackup;
  }

  // nfs_export_options - computed: false, optional: true, required: false
  private _nfsExportOptions = new FilestoreInstanceFileSharesNfsExportOptionsList(this, "nfs_export_options", false);
  public get nfsExportOptions() {
    return this._nfsExportOptions;
  }
  public putNfsExportOptions(value: FilestoreInstanceFileSharesNfsExportOptions[] | cdktf.IResolvable) {
    this._nfsExportOptions.internalValue = value;
  }
  public resetNfsExportOptions() {
    this._nfsExportOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsExportOptionsInput() {
    return this._nfsExportOptions.internalValue;
  }
}
export interface FilestoreInstanceInitialReplicationReplicas {
  /**
  * The peer instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#peer_instance FilestoreInstance#peer_instance}
  */
  readonly peerInstance: string;
}

export function filestoreInstanceInitialReplicationReplicasToTerraform(struct?: FilestoreInstanceInitialReplicationReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_instance: cdktf.stringToTerraform(struct!.peerInstance),
  }
}


export function filestoreInstanceInitialReplicationReplicasToHclTerraform(struct?: FilestoreInstanceInitialReplicationReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_instance: {
      value: cdktf.stringToHclTerraform(struct!.peerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilestoreInstanceInitialReplicationReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FilestoreInstanceInitialReplicationReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerInstance = this._peerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilestoreInstanceInitialReplicationReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerInstance = value.peerInstance;
    }
  }

  // peer_instance - computed: false, optional: false, required: true
  private _peerInstance?: string; 
  public get peerInstance() {
    return this.getStringAttribute('peer_instance');
  }
  public set peerInstance(value: string) {
    this._peerInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInstanceInput() {
    return this._peerInstance;
  }
}

export class FilestoreInstanceInitialReplicationReplicasList extends cdktf.ComplexList {
  public internalValue? : FilestoreInstanceInitialReplicationReplicas[] | cdktf.IResolvable

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
  public get(index: number): FilestoreInstanceInitialReplicationReplicasOutputReference {
    return new FilestoreInstanceInitialReplicationReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilestoreInstanceInitialReplication {
  /**
  * The replication role. Default value: "STANDBY" Possible values: ["ROLE_UNSPECIFIED", "ACTIVE", "STANDBY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#role FilestoreInstance#role}
  */
  readonly role?: string;
  /**
  * replicas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#replicas FilestoreInstance#replicas}
  */
  readonly replicas?: FilestoreInstanceInitialReplicationReplicas[] | cdktf.IResolvable;
}

export function filestoreInstanceInitialReplicationToTerraform(struct?: FilestoreInstanceInitialReplicationOutputReference | FilestoreInstanceInitialReplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    replicas: cdktf.listMapper(filestoreInstanceInitialReplicationReplicasToTerraform, true)(struct!.replicas),
  }
}


export function filestoreInstanceInitialReplicationToHclTerraform(struct?: FilestoreInstanceInitialReplicationOutputReference | FilestoreInstanceInitialReplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.listMapperHcl(filestoreInstanceInitialReplicationReplicasToHclTerraform, true)(struct!.replicas),
      isBlock: true,
      type: "list",
      storageClassType: "FilestoreInstanceInitialReplicationReplicasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilestoreInstanceInitialReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilestoreInstanceInitialReplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._replicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilestoreInstanceInitialReplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._role = undefined;
      this._replicas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._role = value.role;
      this._replicas.internalValue = value.replicas;
    }
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas = new FilestoreInstanceInitialReplicationReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }
  public putReplicas(value: FilestoreInstanceInitialReplicationReplicas[] | cdktf.IResolvable) {
    this._replicas.internalValue = value;
  }
  public resetReplicas() {
    this._replicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas.internalValue;
  }
}
export interface FilestoreInstanceNetworks {
  /**
  * The network connect mode of the Filestore instance.
  * If not provided, the connect mode defaults to
  * DIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#connect_mode FilestoreInstance#connect_mode}
  */
  readonly connectMode?: string;
  /**
  * IP versions for which the instance has
  * IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#modes FilestoreInstance#modes}
  */
  readonly modes: string[];
  /**
  * The name of the GCE VPC network to which the
  * instance is connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#network FilestoreInstance#network}
  */
  readonly network: string;
  /**
  * A /29 CIDR block that identifies the range of IP
  * addresses reserved for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#reserved_ip_range FilestoreInstance#reserved_ip_range}
  */
  readonly reservedIpRange?: string;
}

export function filestoreInstanceNetworksToTerraform(struct?: FilestoreInstanceNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_mode: cdktf.stringToTerraform(struct!.connectMode),
    modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modes),
    network: cdktf.stringToTerraform(struct!.network),
    reserved_ip_range: cdktf.stringToTerraform(struct!.reservedIpRange),
  }
}


export function filestoreInstanceNetworksToHclTerraform(struct?: FilestoreInstanceNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_mode: {
      value: cdktf.stringToHclTerraform(struct!.connectMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.reservedIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilestoreInstanceNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FilestoreInstanceNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectMode = this._connectMode;
    }
    if (this._modes !== undefined) {
      hasAnyValues = true;
      internalValueResult.modes = this._modes;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._reservedIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedIpRange = this._reservedIpRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilestoreInstanceNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectMode = undefined;
      this._modes = undefined;
      this._network = undefined;
      this._reservedIpRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectMode = value.connectMode;
      this._modes = value.modes;
      this._network = value.network;
      this._reservedIpRange = value.reservedIpRange;
    }
  }

  // connect_mode - computed: false, optional: true, required: false
  private _connectMode?: string; 
  public get connectMode() {
    return this.getStringAttribute('connect_mode');
  }
  public set connectMode(value: string) {
    this._connectMode = value;
  }
  public resetConnectMode() {
    this._connectMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectModeInput() {
    return this._connectMode;
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // modes - computed: false, optional: false, required: true
  private _modes?: string[]; 
  public get modes() {
    return this.getListAttribute('modes');
  }
  public set modes(value: string[]) {
    this._modes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modesInput() {
    return this._modes;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // reserved_ip_range - computed: true, optional: true, required: false
  private _reservedIpRange?: string; 
  public get reservedIpRange() {
    return this.getStringAttribute('reserved_ip_range');
  }
  public set reservedIpRange(value: string) {
    this._reservedIpRange = value;
  }
  public resetReservedIpRange() {
    this._reservedIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangeInput() {
    return this._reservedIpRange;
  }
}

export class FilestoreInstanceNetworksList extends cdktf.ComplexList {
  public internalValue? : FilestoreInstanceNetworks[] | cdktf.IResolvable

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
  public get(index: number): FilestoreInstanceNetworksOutputReference {
    return new FilestoreInstanceNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilestoreInstancePerformanceConfigFixedIops {
  /**
  * The number of IOPS to provision for the instance.
  * max_iops must be in multiple of 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#max_iops FilestoreInstance#max_iops}
  */
  readonly maxIops?: number;
}

export function filestoreInstancePerformanceConfigFixedIopsToTerraform(struct?: FilestoreInstancePerformanceConfigFixedIopsOutputReference | FilestoreInstancePerformanceConfigFixedIops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_iops: cdktf.numberToTerraform(struct!.maxIops),
  }
}


export function filestoreInstancePerformanceConfigFixedIopsToHclTerraform(struct?: FilestoreInstancePerformanceConfigFixedIopsOutputReference | FilestoreInstancePerformanceConfigFixedIops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_iops: {
      value: cdktf.numberToHclTerraform(struct!.maxIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilestoreInstancePerformanceConfigFixedIopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilestoreInstancePerformanceConfigFixedIops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIops = this._maxIops;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilestoreInstancePerformanceConfigFixedIops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxIops = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxIops = value.maxIops;
    }
  }

  // max_iops - computed: false, optional: true, required: false
  private _maxIops?: number; 
  public get maxIops() {
    return this.getNumberAttribute('max_iops');
  }
  public set maxIops(value: number) {
    this._maxIops = value;
  }
  public resetMaxIops() {
    this._maxIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIopsInput() {
    return this._maxIops;
  }
}
export interface FilestoreInstancePerformanceConfigIopsPerTb {
  /**
  * The instance max IOPS will be calculated by multiplying
  * the capacity of the instance (TB) by max_iops_per_tb,
  * and rounding to the nearest 1000. The instance max IOPS
  * will be changed dynamically based on the instance
  * capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#max_iops_per_tb FilestoreInstance#max_iops_per_tb}
  */
  readonly maxIopsPerTb?: number;
}

export function filestoreInstancePerformanceConfigIopsPerTbToTerraform(struct?: FilestoreInstancePerformanceConfigIopsPerTbOutputReference | FilestoreInstancePerformanceConfigIopsPerTb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_iops_per_tb: cdktf.numberToTerraform(struct!.maxIopsPerTb),
  }
}


export function filestoreInstancePerformanceConfigIopsPerTbToHclTerraform(struct?: FilestoreInstancePerformanceConfigIopsPerTbOutputReference | FilestoreInstancePerformanceConfigIopsPerTb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_iops_per_tb: {
      value: cdktf.numberToHclTerraform(struct!.maxIopsPerTb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilestoreInstancePerformanceConfigIopsPerTbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilestoreInstancePerformanceConfigIopsPerTb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxIopsPerTb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIopsPerTb = this._maxIopsPerTb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilestoreInstancePerformanceConfigIopsPerTb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxIopsPerTb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxIopsPerTb = value.maxIopsPerTb;
    }
  }

  // max_iops_per_tb - computed: false, optional: true, required: false
  private _maxIopsPerTb?: number; 
  public get maxIopsPerTb() {
    return this.getNumberAttribute('max_iops_per_tb');
  }
  public set maxIopsPerTb(value: number) {
    this._maxIopsPerTb = value;
  }
  public resetMaxIopsPerTb() {
    this._maxIopsPerTb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIopsPerTbInput() {
    return this._maxIopsPerTb;
  }
}
export interface FilestoreInstancePerformanceConfig {
  /**
  * fixed_iops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#fixed_iops FilestoreInstance#fixed_iops}
  */
  readonly fixedIops?: FilestoreInstancePerformanceConfigFixedIops;
  /**
  * iops_per_tb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#iops_per_tb FilestoreInstance#iops_per_tb}
  */
  readonly iopsPerTb?: FilestoreInstancePerformanceConfigIopsPerTb;
}

export function filestoreInstancePerformanceConfigToTerraform(struct?: FilestoreInstancePerformanceConfigOutputReference | FilestoreInstancePerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_iops: filestoreInstancePerformanceConfigFixedIopsToTerraform(struct!.fixedIops),
    iops_per_tb: filestoreInstancePerformanceConfigIopsPerTbToTerraform(struct!.iopsPerTb),
  }
}


export function filestoreInstancePerformanceConfigToHclTerraform(struct?: FilestoreInstancePerformanceConfigOutputReference | FilestoreInstancePerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_iops: {
      value: filestoreInstancePerformanceConfigFixedIopsToHclTerraform(struct!.fixedIops),
      isBlock: true,
      type: "list",
      storageClassType: "FilestoreInstancePerformanceConfigFixedIopsList",
    },
    iops_per_tb: {
      value: filestoreInstancePerformanceConfigIopsPerTbToHclTerraform(struct!.iopsPerTb),
      isBlock: true,
      type: "list",
      storageClassType: "FilestoreInstancePerformanceConfigIopsPerTbList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilestoreInstancePerformanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilestoreInstancePerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedIops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIops = this._fixedIops?.internalValue;
    }
    if (this._iopsPerTb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsPerTb = this._iopsPerTb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilestoreInstancePerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedIops.internalValue = undefined;
      this._iopsPerTb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedIops.internalValue = value.fixedIops;
      this._iopsPerTb.internalValue = value.iopsPerTb;
    }
  }

  // fixed_iops - computed: false, optional: true, required: false
  private _fixedIops = new FilestoreInstancePerformanceConfigFixedIopsOutputReference(this, "fixed_iops");
  public get fixedIops() {
    return this._fixedIops;
  }
  public putFixedIops(value: FilestoreInstancePerformanceConfigFixedIops) {
    this._fixedIops.internalValue = value;
  }
  public resetFixedIops() {
    this._fixedIops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIopsInput() {
    return this._fixedIops.internalValue;
  }

  // iops_per_tb - computed: false, optional: true, required: false
  private _iopsPerTb = new FilestoreInstancePerformanceConfigIopsPerTbOutputReference(this, "iops_per_tb");
  public get iopsPerTb() {
    return this._iopsPerTb;
  }
  public putIopsPerTb(value: FilestoreInstancePerformanceConfigIopsPerTb) {
    this._iopsPerTb.internalValue = value;
  }
  public resetIopsPerTb() {
    this._iopsPerTb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsPerTbInput() {
    return this._iopsPerTb.internalValue;
  }
}
export interface FilestoreInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#create FilestoreInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#delete FilestoreInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#update FilestoreInstance#update}
  */
  readonly update?: string;
}

export function filestoreInstanceTimeoutsToTerraform(struct?: FilestoreInstanceTimeouts | cdktf.IResolvable): any {
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


export function filestoreInstanceTimeoutsToHclTerraform(struct?: FilestoreInstanceTimeouts | cdktf.IResolvable): any {
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

export class FilestoreInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FilestoreInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FilestoreInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance google_filestore_instance}
*/
export class FilestoreInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_filestore_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FilestoreInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FilestoreInstance to import
  * @param importFromId The id of the existing FilestoreInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FilestoreInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_filestore_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/filestore_instance google_filestore_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FilestoreInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: FilestoreInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_filestore_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.31.0',
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
    this._deletionProtectionEnabled = config.deletionProtectionEnabled;
    this._deletionProtectionReason = config.deletionProtectionReason;
    this._description = config.description;
    this._id = config.id;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._protocol = config.protocol;
    this._tags = config.tags;
    this._tier = config.tier;
    this._zone = config.zone;
    this._fileShares.internalValue = config.fileShares;
    this._initialReplication.internalValue = config.initialReplication;
    this._networks.internalValue = config.networks;
    this._performanceConfig.internalValue = config.performanceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection_enabled - computed: false, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // deletion_protection_reason - computed: false, optional: true, required: false
  private _deletionProtectionReason?: string; 
  public get deletionProtectionReason() {
    return this.getStringAttribute('deletion_protection_reason');
  }
  public set deletionProtectionReason(value: string) {
    this._deletionProtectionReason = value;
  }
  public resetDeletionProtectionReason() {
    this._deletionProtectionReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionReasonInput() {
    return this._deletionProtectionReason;
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

  // effective_replication - computed: true, optional: false, required: false
  private _effectiveReplication = new FilestoreInstanceEffectiveReplicationList(this, "effective_replication", false);
  public get effectiveReplication() {
    return this._effectiveReplication;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // zone - computed: true, optional: true, required: false
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

  // file_shares - computed: false, optional: false, required: true
  private _fileShares = new FilestoreInstanceFileSharesOutputReference(this, "file_shares");
  public get fileShares() {
    return this._fileShares;
  }
  public putFileShares(value: FilestoreInstanceFileShares) {
    this._fileShares.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSharesInput() {
    return this._fileShares.internalValue;
  }

  // initial_replication - computed: false, optional: true, required: false
  private _initialReplication = new FilestoreInstanceInitialReplicationOutputReference(this, "initial_replication");
  public get initialReplication() {
    return this._initialReplication;
  }
  public putInitialReplication(value: FilestoreInstanceInitialReplication) {
    this._initialReplication.internalValue = value;
  }
  public resetInitialReplication() {
    this._initialReplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialReplicationInput() {
    return this._initialReplication.internalValue;
  }

  // networks - computed: false, optional: false, required: true
  private _networks = new FilestoreInstanceNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: FilestoreInstanceNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // performance_config - computed: false, optional: true, required: false
  private _performanceConfig = new FilestoreInstancePerformanceConfigOutputReference(this, "performance_config");
  public get performanceConfig() {
    return this._performanceConfig;
  }
  public putPerformanceConfig(value: FilestoreInstancePerformanceConfig) {
    this._performanceConfig.internalValue = value;
  }
  public resetPerformanceConfig() {
    this._performanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceConfigInput() {
    return this._performanceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FilestoreInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FilestoreInstanceTimeouts) {
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
      deletion_protection_enabled: cdktf.booleanToTerraform(this._deletionProtectionEnabled),
      deletion_protection_reason: cdktf.stringToTerraform(this._deletionProtectionReason),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      protocol: cdktf.stringToTerraform(this._protocol),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      zone: cdktf.stringToTerraform(this._zone),
      file_shares: filestoreInstanceFileSharesToTerraform(this._fileShares.internalValue),
      initial_replication: filestoreInstanceInitialReplicationToTerraform(this._initialReplication.internalValue),
      networks: cdktf.listMapper(filestoreInstanceNetworksToTerraform, true)(this._networks.internalValue),
      performance_config: filestoreInstancePerformanceConfigToTerraform(this._performanceConfig.internalValue),
      timeouts: filestoreInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._deletionProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_protection_reason: {
        value: cdktf.stringToHclTerraform(this._deletionProtectionReason),
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
      kms_key_name: {
        value: cdktf.stringToHclTerraform(this._kmsKeyName),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
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
      file_shares: {
        value: filestoreInstanceFileSharesToHclTerraform(this._fileShares.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FilestoreInstanceFileSharesList",
      },
      initial_replication: {
        value: filestoreInstanceInitialReplicationToHclTerraform(this._initialReplication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FilestoreInstanceInitialReplicationList",
      },
      networks: {
        value: cdktf.listMapperHcl(filestoreInstanceNetworksToHclTerraform, true)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FilestoreInstanceNetworksList",
      },
      performance_config: {
        value: filestoreInstancePerformanceConfigToHclTerraform(this._performanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FilestoreInstancePerformanceConfigList",
      },
      timeouts: {
        value: filestoreInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FilestoreInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
