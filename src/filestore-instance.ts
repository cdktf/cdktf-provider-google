// https://www.terraform.io/docs/providers/google/r/filestore_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilestoreInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#description FilestoreInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#id FilestoreInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * KMS key name used for data encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#kms_key_name FilestoreInstance#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Resource labels to represent user-provided metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#labels FilestoreInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#location FilestoreInstance#location}
  */
  readonly location?: string;
  /**
  * The resource name of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#name FilestoreInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#project FilestoreInstance#project}
  */
  readonly project?: string;
  /**
  * The service tier of the instance.
Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD and ENTERPRISE
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#tier FilestoreInstance#tier}
  */
  readonly tier: string;
  /**
  * The name of the Filestore zone of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#zone FilestoreInstance#zone}
  */
  readonly zone?: string;
  /**
  * file_shares block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#file_shares FilestoreInstance#file_shares}
  */
  readonly fileShares: FilestoreInstanceFileShares;
  /**
  * networks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#networks FilestoreInstance#networks}
  */
  readonly networks: FilestoreInstanceNetworks[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#timeouts FilestoreInstance#timeouts}
  */
  readonly timeouts?: FilestoreInstanceTimeouts;
}
export interface FilestoreInstanceFileSharesNfsExportOptions {
  /**
  * Either READ_ONLY, for allowing only read requests on the exported directory,
or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#access_mode FilestoreInstance#access_mode}
  */
  readonly accessMode?: string;
  /**
  * An integer representing the anonymous group id with a default value of 65534.
Anon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#anon_gid FilestoreInstance#anon_gid}
  */
  readonly anonGid?: number;
  /**
  * An integer representing the anonymous user id with a default value of 65534.
Anon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#anon_uid FilestoreInstance#anon_uid}
  */
  readonly anonUid?: number;
  /**
  * List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.
Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.
The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#ip_ranges FilestoreInstance#ip_ranges}
  */
  readonly ipRanges?: string[];
  /**
  * Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH,
for not allowing root access. The default is NO_ROOT_SQUASH. Default value: "NO_ROOT_SQUASH" Possible values: ["NO_ROOT_SQUASH", "ROOT_SQUASH"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#squash_mode FilestoreInstance#squash_mode}
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
for the standard tier, or 2560 GiB for the premium tier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#capacity_gb FilestoreInstance#capacity_gb}
  */
  readonly capacityGb: number;
  /**
  * The name of the fileshare (16 characters or less)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#name FilestoreInstance#name}
  */
  readonly name: string;
  /**
  * nfs_export_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#nfs_export_options FilestoreInstance#nfs_export_options}
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
    nfs_export_options: cdktf.listMapper(filestoreInstanceFileSharesNfsExportOptionsToTerraform, true)(struct!.nfsExportOptions),
  }
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
      this._nfsExportOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityGb = value.capacityGb;
      this._name = value.name;
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
export interface FilestoreInstanceNetworks {
  /**
  * The network connect mode of the Filestore instance.
If not provided, the connect mode defaults to
DIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#connect_mode FilestoreInstance#connect_mode}
  */
  readonly connectMode?: string;
  /**
  * IP versions for which the instance has
IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#modes FilestoreInstance#modes}
  */
  readonly modes: string[];
  /**
  * The name of the GCE VPC network to which the
instance is connected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#network FilestoreInstance#network}
  */
  readonly network: string;
  /**
  * A /29 CIDR block that identifies the range of IP
addresses reserved for this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#reserved_ip_range FilestoreInstance#reserved_ip_range}
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
export interface FilestoreInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#create FilestoreInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#delete FilestoreInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#update FilestoreInstance#update}
  */
  readonly update?: string;
}

export function filestoreInstanceTimeoutsToTerraform(struct?: FilestoreInstanceTimeoutsOutputReference | FilestoreInstanceTimeouts | cdktf.IResolvable): any {
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

export class FilestoreInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/filestore_instance google_filestore_instance}
*/
export class FilestoreInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_filestore_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/filestore_instance google_filestore_instance} Resource
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
        providerVersion: '4.35.0',
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
    this._description = config.description;
    this._id = config.id;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._tier = config.tier;
    this._zone = config.zone;
    this._fileShares.internalValue = config.fileShares;
    this._networks.internalValue = config.networks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      tier: cdktf.stringToTerraform(this._tier),
      zone: cdktf.stringToTerraform(this._zone),
      file_shares: filestoreInstanceFileSharesToTerraform(this._fileShares.internalValue),
      networks: cdktf.listMapper(filestoreInstanceNetworksToTerraform, true)(this._networks.internalValue),
      timeouts: filestoreInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
