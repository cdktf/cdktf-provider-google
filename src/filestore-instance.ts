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
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipRanges),
    squash_mode: cdktf.stringToTerraform(struct!.squashMode),
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
    nfs_export_options: cdktf.listMapper(filestoreInstanceFileSharesNfsExportOptionsToTerraform)(struct!.nfsExportOptions),
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
    if (this._nfsExportOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsExportOptions = this._nfsExportOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilestoreInstanceFileShares | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityGb = undefined;
      this._name = undefined;
      this._nfsExportOptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityGb = value.capacityGb;
      this._name = value.name;
      this._nfsExportOptions = value.nfsExportOptions;
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
  private _nfsExportOptions?: FilestoreInstanceFileSharesNfsExportOptions[] | cdktf.IResolvable; 
  public get nfsExportOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('nfs_export_options');
  }
  public set nfsExportOptions(value: FilestoreInstanceFileSharesNfsExportOptions[] | cdktf.IResolvable) {
    this._nfsExportOptions = value;
  }
  public resetNfsExportOptions() {
    this._nfsExportOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsExportOptionsInput() {
    return this._nfsExportOptions;
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
    modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.modes),
    network: cdktf.stringToTerraform(struct!.network),
    reserved_ip_range: cdktf.stringToTerraform(struct!.reservedIpRange),
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

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilestoreInstanceTimeouts | undefined {
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

  public set internalValue(value: FilestoreInstanceTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
        providerVersion: '4.20.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._tier = config.tier;
    this._zone = config.zone;
    this._fileShares.internalValue = config.fileShares;
    this._networks = config.networks;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _networks?: FilestoreInstanceNetworks[] | cdktf.IResolvable; 
  public get networks() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('networks');
  }
  public set networks(value: FilestoreInstanceNetworks[] | cdktf.IResolvable) {
    this._networks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
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
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      tier: cdktf.stringToTerraform(this._tier),
      zone: cdktf.stringToTerraform(this._zone),
      file_shares: filestoreInstanceFileSharesToTerraform(this._fileShares.internalValue),
      networks: cdktf.listMapper(filestoreInstanceNetworksToTerraform)(this._networks),
      timeouts: filestoreInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
