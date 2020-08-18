// https://www.terraform.io/docs/providers/google/r/data_google_storage_bucket_object.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataGoogleStorageBucketObjectConfig extends TerraformMetaArguments {
  /** The name of the containing bucket. */
  readonly bucket?: string;
  /** The name of the object. If you're interpolating the name of this object, see output_name instead. */
  readonly name?: string;
}

// Resource

export class DataGoogleStorageBucketObject extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleStorageBucketObjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_storage_bucket_object',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string | undefined) {
    this._bucket = value;
  }

  // cache_control - computed: true, optional: false, required: true
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }

  // content - computed: true, optional: false, required: true
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_disposition - computed: true, optional: false, required: true
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }

  // content_encoding - computed: true, optional: false, required: true
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }

  // content_language - computed: true, optional: false, required: true
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }

  // content_type - computed: true, optional: false, required: true
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // crc32c - computed: true, optional: false, required: true
  public get crc32C() {
    return this.getStringAttribute('crc32c');
  }

  // detect_md5hash - computed: true, optional: false, required: true
  public get detectMd5Hash() {
    return this.getStringAttribute('detect_md5hash');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // md5hash - computed: true, optional: false, required: true
  public get md5Hash() {
    return this.getStringAttribute('md5hash');
  }

  // media_link - computed: true, optional: false, required: true
  public get mediaLink() {
    return this.getStringAttribute('media_link');
  }

  // metadata - computed: true, optional: false, required: true
  public metadata(key: string): string {
    return new StringMap(this, 'metadata').lookup(key);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // output_name - computed: true, optional: false, required: true
  public get outputName() {
    return this.getStringAttribute('output_name');
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
  }

  // storage_class - computed: true, optional: false, required: true
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      name: this._name,
    };
  }
}
