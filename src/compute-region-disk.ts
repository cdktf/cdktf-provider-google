// https://www.terraform.io/docs/providers/google/r/compute_region_disk.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionDiskConfig extends cdktf.TerraformMetaArguments {
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

function computeRegionDiskDiskEncryptionKeyToTerraform(struct?: ComputeRegionDiskDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
  }
}

export interface ComputeRegionDiskSourceSnapshotEncryptionKey {
  /** Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource. */
  readonly rawKey?: string;
}

function computeRegionDiskSourceSnapshotEncryptionKeyToTerraform(struct?: ComputeRegionDiskSourceSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
  }
}

export interface ComputeRegionDiskTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeRegionDiskTimeoutsToTerraform(struct?: ComputeRegionDiskTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeRegionDisk extends cdktf.TerraformResource {

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

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // last_attach_timestamp - computed: true, optional: false, required: false
  public get lastAttachTimestamp() {
    return this.getStringAttribute('last_attach_timestamp');
  }

  // last_detach_timestamp - computed: true, optional: false, required: false
  public get lastDetachTimestamp() {
    return this.getStringAttribute('last_detach_timestamp');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._physicalBlockSizeBytes
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
    return this._project
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
    return this._region
  }

  // replica_zones - computed: false, optional: false, required: true
  private _replicaZones: string[];
  public get replicaZones() {
    return this.getListAttribute('replica_zones');
  }
  public set replicaZones(value: string[]) {
    this._replicaZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaZonesInput() {
    return this._replicaZones
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
    return this._size
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: string;
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string ) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot
  }

  // source_snapshot_id - computed: true, optional: false, required: false
  public get sourceSnapshotId() {
    return this.getStringAttribute('source_snapshot_id');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }

  // disk_encryption_key - computed: false, optional: true, required: false
  private _diskEncryptionKey?: ComputeRegionDiskDiskEncryptionKey[];
  public get diskEncryptionKey() {
    return this.interpolationForAttribute('disk_encryption_key') as any;
  }
  public set diskEncryptionKey(value: ComputeRegionDiskDiskEncryptionKey[] ) {
    this._diskEncryptionKey = value;
  }
  public resetDiskEncryptionKey() {
    this._diskEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey
  }

  // source_snapshot_encryption_key - computed: false, optional: true, required: false
  private _sourceSnapshotEncryptionKey?: ComputeRegionDiskSourceSnapshotEncryptionKey[];
  public get sourceSnapshotEncryptionKey() {
    return this.interpolationForAttribute('source_snapshot_encryption_key') as any;
  }
  public set sourceSnapshotEncryptionKey(value: ComputeRegionDiskSourceSnapshotEncryptionKey[] ) {
    this._sourceSnapshotEncryptionKey = value;
  }
  public resetSourceSnapshotEncryptionKey() {
    this._sourceSnapshotEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotEncryptionKeyInput() {
    return this._sourceSnapshotEncryptionKey
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionDiskTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeRegionDiskTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      physical_block_size_bytes: cdktf.numberToTerraform(this._physicalBlockSizeBytes),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      replica_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._replicaZones),
      size: cdktf.numberToTerraform(this._size),
      snapshot: cdktf.stringToTerraform(this._snapshot),
      type: cdktf.stringToTerraform(this._type),
      disk_encryption_key: cdktf.listMapper(computeRegionDiskDiskEncryptionKeyToTerraform)(this._diskEncryptionKey),
      source_snapshot_encryption_key: cdktf.listMapper(computeRegionDiskSourceSnapshotEncryptionKeyToTerraform)(this._sourceSnapshotEncryptionKey),
      timeouts: computeRegionDiskTimeoutsToTerraform(this._timeouts),
    };
  }
}
