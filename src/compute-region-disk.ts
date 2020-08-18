// https://www.terraform.io/docs/providers/google/r/compute_region_disk.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeRegionDiskConfig extends TerraformMetaArguments {
  /** An optional description of this resource. Provide this property when
you create the resource. */
  readonly description?: string;
  /** Labels to apply to this disk.  A list of key->value pairs. */
  readonly labels?: { [key: string]: string };
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  /** Physical block size of the persistent disk, in bytes. If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project. */
  readonly physicalBlockSizeBytes?: number;
  readonly project?: string;
  /** A reference to the region where the disk resides. */
  readonly region?: string;
  /** URLs of the zones where the disk should be replicated to. */
  readonly replicaZones: string[];
  /** Size of the persistent disk, specified in GB. You can specify this
field when creating a persistent disk using the sourceImage or
sourceSnapshot parameter, or specify it alone to create an empty
persistent disk.

If you specify this field along with sourceImage or sourceSnapshot,
the value of sizeGb must not be less than the size of the sourceImage
or the size of the snapshot. */
  readonly size?: number;
  /** The source snapshot used to create this disk. You can provide this as
a partial or full URL to the resource. For example, the following are
valid values:

* 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
* 'projects/project/global/snapshots/snapshot'
* 'global/snapshots/snapshot'
* 'snapshot' */
  readonly snapshot?: string;
  /** URL of the disk type resource describing which disk type to use to
create the disk. Provide this when creating the disk. */
  readonly type?: string;
  /** disk_encryption_key block */
  readonly diskEncryptionKey?: ComputeRegionDiskDiskEncryptionKey[];
  /** source_snapshot_encryption_key block */
  readonly sourceSnapshotEncryptionKey?: ComputeRegionDiskSourceSnapshotEncryptionKey[];
  /** timeouts block */
  readonly timeouts?: ComputeRegionDiskTimeouts;
}
export interface ComputeRegionDiskDiskEncryptionKey {
  /** Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource. */
  readonly rawKey?: string;
}
export interface ComputeRegionDiskSourceSnapshotEncryptionKey {
  /** Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource. */
  readonly rawKey?: string;
}
export interface ComputeRegionDiskTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeRegionDisk extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRegionDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_disk',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._physicalBlockSizeBytes = config.physicalBlockSizeBytes;
    this._project = config.project;
    this._region = config.region;
    this._replicaZones = config.replicaZones;
    this._size = config.size;
    this._snapshot = config.snapshot;
    this._type = config.type;
    this._diskEncryptionKey = config.diskEncryptionKey;
    this._sourceSnapshotEncryptionKey = config.sourceSnapshotEncryptionKey;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // label_fingerprint - computed: true, optional: false, required: true
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // last_attach_timestamp - computed: true, optional: false, required: true
  public get lastAttachTimestamp() {
    return this.getStringAttribute('last_attach_timestamp');
  }

  // last_detach_timestamp - computed: true, optional: false, required: true
  public get lastDetachTimestamp() {
    return this.getStringAttribute('last_detach_timestamp');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // physical_block_size_bytes - computed: true, optional: true, required: false
  private _physicalBlockSizeBytes?: number;
  public get physicalBlockSizeBytes() {
    return this._physicalBlockSizeBytes ?? this.getNumberAttribute('physical_block_size_bytes');
  }
  public set physicalBlockSizeBytes(value: number | undefined) {
    this._physicalBlockSizeBytes = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // replica_zones - computed: false, optional: false, required: true
  private _replicaZones: string[];
  public get replicaZones() {
    return this._replicaZones;
  }
  public set replicaZones(value: string[]) {
    this._replicaZones = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // size - computed: true, optional: true, required: false
  private _size?: number;
  public get size() {
    return this._size ?? this.getNumberAttribute('size');
  }
  public set size(value: number | undefined) {
    this._size = value;
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: string;
  public get snapshot() {
    return this._snapshot;
  }
  public set snapshot(value: string | undefined) {
    this._snapshot = value;
  }

  // source_snapshot_id - computed: true, optional: false, required: true
  public get sourceSnapshotId() {
    return this.getStringAttribute('source_snapshot_id');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // users - computed: true, optional: false, required: true
  public get users() {
    return this.getListAttribute('users');
  }

  // disk_encryption_key - computed: false, optional: true, required: false
  private _diskEncryptionKey?: ComputeRegionDiskDiskEncryptionKey[];
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }
  public set diskEncryptionKey(value: ComputeRegionDiskDiskEncryptionKey[] | undefined) {
    this._diskEncryptionKey = value;
  }

  // source_snapshot_encryption_key - computed: false, optional: true, required: false
  private _sourceSnapshotEncryptionKey?: ComputeRegionDiskSourceSnapshotEncryptionKey[];
  public get sourceSnapshotEncryptionKey() {
    return this._sourceSnapshotEncryptionKey;
  }
  public set sourceSnapshotEncryptionKey(value: ComputeRegionDiskSourceSnapshotEncryptionKey[] | undefined) {
    this._sourceSnapshotEncryptionKey = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionDiskTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeRegionDiskTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      labels: this._labels,
      name: this._name,
      physical_block_size_bytes: this._physicalBlockSizeBytes,
      project: this._project,
      region: this._region,
      replica_zones: this._replicaZones,
      size: this._size,
      snapshot: this._snapshot,
      type: this._type,
      disk_encryption_key: this._diskEncryptionKey,
      source_snapshot_encryption_key: this._sourceSnapshotEncryptionKey,
      timeouts: this._timeouts,
    };
  }
}
