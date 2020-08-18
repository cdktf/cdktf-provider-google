// https://www.terraform.io/docs/providers/google/r/data_google_compute_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataGoogleComputeImageConfig extends TerraformMetaArguments {
  readonly family?: string;
  readonly name?: string;
  readonly project?: string;
}

// Resource

export class DataGoogleComputeImage extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_image',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._family = config.family;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_size_bytes - computed: true, optional: false, required: true
  public get archiveSizeBytes() {
    return this.getNumberAttribute('archive_size_bytes');
  }

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_size_gb - computed: true, optional: false, required: true
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // family - computed: true, optional: true, required: false
  private _family?: string;
  public get family() {
    return this._family ?? this.getStringAttribute('family');
  }
  public set family(value: string | undefined) {
    this._family = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_encryption_key_sha256 - computed: true, optional: false, required: true
  public get imageEncryptionKeySha256() {
    return this.getStringAttribute('image_encryption_key_sha256');
  }

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // label_fingerprint - computed: true, optional: false, required: true
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: true, optional: false, required: true
  public labels(key: string): string {
    return new StringMap(this, 'labels').lookup(key);
  }

  // licenses - computed: true, optional: false, required: true
  public get licenses() {
    return this.getListAttribute('licenses');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
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

  // source_disk - computed: true, optional: false, required: true
  public get sourceDisk() {
    return this.getStringAttribute('source_disk');
  }

  // source_disk_encryption_key_sha256 - computed: true, optional: false, required: true
  public get sourceDiskEncryptionKeySha256() {
    return this.getStringAttribute('source_disk_encryption_key_sha256');
  }

  // source_disk_id - computed: true, optional: false, required: true
  public get sourceDiskId() {
    return this.getStringAttribute('source_disk_id');
  }

  // source_image_id - computed: true, optional: false, required: true
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      family: this._family,
      name: this._name,
      project: this._project,
    };
  }
}
