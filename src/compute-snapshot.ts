// https://www.terraform.io/docs/providers/google/r/compute_snapshot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeSnapshotConfig extends TerraformMetaArguments {
  /** An optional description of this resource. */
  readonly description?: string;
  /** Labels to apply to this Snapshot. */
  readonly labels?: { [key: string]: string };
  /** Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** A reference to the disk used to create this snapshot. */
  readonly sourceDisk: string;
  /** A reference to the zone where the disk is hosted. */
  readonly zone?: string;
  /** snapshot_encryption_key block */
  readonly snapshotEncryptionKey?: ComputeSnapshotSnapshotEncryptionKey[];
  /** source_disk_encryption_key block */
  readonly sourceDiskEncryptionKey?: ComputeSnapshotSourceDiskEncryptionKey[];
  /** timeouts block */
  readonly timeouts?: ComputeSnapshotTimeouts;
}
export interface ComputeSnapshotSnapshotEncryptionKey {
  /** Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource. */
  readonly rawKey: string;
}
export interface ComputeSnapshotSourceDiskEncryptionKey {
  /** Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource. */
  readonly rawKey?: string;
}
export interface ComputeSnapshotTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeSnapshot extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_snapshot',
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
    this._project = config.project;
    this._sourceDisk = config.sourceDisk;
    this._zone = config.zone;
    this._snapshotEncryptionKey = config.snapshotEncryptionKey;
    this._sourceDiskEncryptionKey = config.sourceDiskEncryptionKey;
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

  // disk_size_gb - computed: true, optional: false, required: true
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
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

  // licenses - computed: true, optional: false, required: true
  public get licenses() {
    return this.getListAttribute('licenses');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // snapshot_id - computed: true, optional: false, required: true
  public get snapshotId() {
    return this.getNumberAttribute('snapshot_id');
  }

  // source_disk - computed: false, optional: false, required: true
  private _sourceDisk: string;
  public get sourceDisk() {
    return this._sourceDisk;
  }
  public set sourceDisk(value: string) {
    this._sourceDisk = value;
  }

  // source_disk_link - computed: true, optional: false, required: true
  public get sourceDiskLink() {
    return this.getStringAttribute('source_disk_link');
  }

  // storage_bytes - computed: true, optional: false, required: true
  public get storageBytes() {
    return this.getNumberAttribute('storage_bytes');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // snapshot_encryption_key - computed: false, optional: true, required: false
  private _snapshotEncryptionKey?: ComputeSnapshotSnapshotEncryptionKey[];
  public get snapshotEncryptionKey() {
    return this._snapshotEncryptionKey;
  }
  public set snapshotEncryptionKey(value: ComputeSnapshotSnapshotEncryptionKey[] | undefined) {
    this._snapshotEncryptionKey = value;
  }

  // source_disk_encryption_key - computed: false, optional: true, required: false
  private _sourceDiskEncryptionKey?: ComputeSnapshotSourceDiskEncryptionKey[];
  public get sourceDiskEncryptionKey() {
    return this._sourceDiskEncryptionKey;
  }
  public set sourceDiskEncryptionKey(value: ComputeSnapshotSourceDiskEncryptionKey[] | undefined) {
    this._sourceDiskEncryptionKey = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeSnapshotTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeSnapshotTimeouts | undefined) {
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
      project: this._project,
      source_disk: this._sourceDisk,
      zone: this._zone,
      snapshot_encryption_key: this._snapshotEncryptionKey,
      source_disk_encryption_key: this._sourceDiskEncryptionKey,
      timeouts: this._timeouts,
    };
  }
}
