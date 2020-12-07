// https://www.terraform.io/docs/providers/google/r/data_google_compute_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeImageConfig extends cdktf.TerraformMetaArguments {
  readonly family?: string;
  readonly filter?: string;
  readonly name?: string;
  readonly project?: string;
}

// Resource

export class DataGoogleComputeImage extends cdktf.TerraformDataSource {

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
    this._filter = config.filter;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_size_bytes - computed: true, optional: false, required: false
  public get archiveSizeBytes() {
    return this.getNumberAttribute('archive_size_bytes');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // family - computed: true, optional: true, required: false
  private _family?: string;
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string;
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_encryption_key_sha256 - computed: true, optional: false, required: false
  public get imageEncryptionKeySha256() {
    return this.getStringAttribute('image_encryption_key_sha256');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // licenses - computed: true, optional: false, required: false
  public get licenses() {
    return this.getListAttribute('licenses');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // source_disk - computed: true, optional: false, required: false
  public get sourceDisk() {
    return this.getStringAttribute('source_disk');
  }

  // source_disk_encryption_key_sha256 - computed: true, optional: false, required: false
  public get sourceDiskEncryptionKeySha256() {
    return this.getStringAttribute('source_disk_encryption_key_sha256');
  }

  // source_disk_id - computed: true, optional: false, required: false
  public get sourceDiskId() {
    return this.getStringAttribute('source_disk_id');
  }

  // source_image_id - computed: true, optional: false, required: false
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      family: cdktf.stringToTerraform(this._family),
      filter: cdktf.stringToTerraform(this._filter),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
