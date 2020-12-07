// https://www.terraform.io/docs/providers/google/r/compute_snapshot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSnapshotConfig extends cdktf.TerraformMetaArguments {
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
  /** Cloud Storage bucket storage location of the snapshot (regional or multi-regional). */
  readonly storageLocations?: string[];
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
  /** The name of the encryption key that is stored in Google Cloud KMS. */
  readonly kmsKeySelfLink?: string;
  /** The service account used for the encryption request for the given KMS key.
If absent, the Compute Engine Service Agent service account is used. */
  readonly kmsKeyServiceAccount?: string;
  /** Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource. */
  readonly rawKey?: string;
}

function computeSnapshotSnapshotEncryptionKeyToTerraform(struct?: ComputeSnapshotSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
  }
}

export interface ComputeSnapshotSourceDiskEncryptionKey {
  /** The service account used for the encryption request for the given KMS key.
If absent, the Compute Engine Service Agent service account is used. */
  readonly kmsKeyServiceAccount?: string;
  /** Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource. */
  readonly rawKey?: string;
}

function computeSnapshotSourceDiskEncryptionKeyToTerraform(struct?: ComputeSnapshotSourceDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
  }
}

export interface ComputeSnapshotTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeSnapshotTimeoutsToTerraform(struct?: ComputeSnapshotTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeSnapshot extends cdktf.TerraformResource {

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
    this._storageLocations = config.storageLocations;
    this._zone = config.zone;
    this._snapshotEncryptionKey = config.snapshotEncryptionKey;
    this._sourceDiskEncryptionKey = config.sourceDiskEncryptionKey;
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

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
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

  // licenses - computed: true, optional: false, required: false
  public get licenses() {
    return this.getListAttribute('licenses');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getNumberAttribute('snapshot_id');
  }

  // source_disk - computed: false, optional: false, required: true
  private _sourceDisk: string;
  public get sourceDisk() {
    return this.getStringAttribute('source_disk');
  }
  public set sourceDisk(value: string) {
    this._sourceDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDiskInput() {
    return this._sourceDisk
  }

  // source_disk_link - computed: true, optional: false, required: false
  public get sourceDiskLink() {
    return this.getStringAttribute('source_disk_link');
  }

  // storage_bytes - computed: true, optional: false, required: false
  public get storageBytes() {
    return this.getNumberAttribute('storage_bytes');
  }

  // storage_locations - computed: true, optional: true, required: false
  private _storageLocations?: string[];
  public get storageLocations() {
    return this.getListAttribute('storage_locations');
  }
  public set storageLocations(value: string[]) {
    this._storageLocations = value;
  }
  public resetStorageLocations() {
    this._storageLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationsInput() {
    return this._storageLocations
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
    return this._zone
  }

  // snapshot_encryption_key - computed: false, optional: true, required: false
  private _snapshotEncryptionKey?: ComputeSnapshotSnapshotEncryptionKey[];
  public get snapshotEncryptionKey() {
    return this.interpolationForAttribute('snapshot_encryption_key') as any;
  }
  public set snapshotEncryptionKey(value: ComputeSnapshotSnapshotEncryptionKey[] ) {
    this._snapshotEncryptionKey = value;
  }
  public resetSnapshotEncryptionKey() {
    this._snapshotEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotEncryptionKeyInput() {
    return this._snapshotEncryptionKey
  }

  // source_disk_encryption_key - computed: false, optional: true, required: false
  private _sourceDiskEncryptionKey?: ComputeSnapshotSourceDiskEncryptionKey[];
  public get sourceDiskEncryptionKey() {
    return this.interpolationForAttribute('source_disk_encryption_key') as any;
  }
  public set sourceDiskEncryptionKey(value: ComputeSnapshotSourceDiskEncryptionKey[] ) {
    this._sourceDiskEncryptionKey = value;
  }
  public resetSourceDiskEncryptionKey() {
    this._sourceDiskEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDiskEncryptionKeyInput() {
    return this._sourceDiskEncryptionKey
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeSnapshotTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeSnapshotTimeouts ) {
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
      project: cdktf.stringToTerraform(this._project),
      source_disk: cdktf.stringToTerraform(this._sourceDisk),
      storage_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._storageLocations),
      zone: cdktf.stringToTerraform(this._zone),
      snapshot_encryption_key: cdktf.listMapper(computeSnapshotSnapshotEncryptionKeyToTerraform)(this._snapshotEncryptionKey),
      source_disk_encryption_key: cdktf.listMapper(computeSnapshotSourceDiskEncryptionKeyToTerraform)(this._sourceDiskEncryptionKey),
      timeouts: computeSnapshotTimeoutsToTerraform(this._timeouts),
    };
  }
}
