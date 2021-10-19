// https://www.terraform.io/docs/providers/google/d/storage_bucket_object_content.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleStorageBucketObjectContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the containing bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_bucket_object_content.html#bucket DataGoogleStorageBucketObjectContent#bucket}
  */
  readonly bucket: string;
  /**
  * Data as string to be uploaded. Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_bucket_object_content.html#content DataGoogleStorageBucketObjectContent#content}
  */
  readonly content?: string;
  /**
  * The name of the object. If you're interpolating the name of this object, see output_name instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_bucket_object_content.html#name DataGoogleStorageBucketObjectContent#name}
  */
  readonly name: string;
}
export class DataGoogleStorageBucketObjectContentCustomerEncryption extends cdktf.ComplexComputedList {

  // encryption_algorithm - computed: true, optional: false, required: false
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/storage_bucket_object_content.html google_storage_bucket_object_content}
*/
export class DataGoogleStorageBucketObjectContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_storage_bucket_object_content";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/storage_bucket_object_content.html google_storage_bucket_object_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageBucketObjectContentConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageBucketObjectContentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_bucket_object_content',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._content = config.content;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // cache_control - computed: true, optional: false, required: false
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }

  // content - computed: false, optional: true, required: false
  private _content?: string | undefined; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string | undefined) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // content_disposition - computed: true, optional: false, required: false
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }

  // content_encoding - computed: true, optional: false, required: false
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }

  // content_language - computed: true, optional: false, required: false
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // crc32c - computed: true, optional: false, required: false
  public get crc32C() {
    return this.getStringAttribute('crc32c');
  }

  // customer_encryption - computed: true, optional: false, required: false
  public customerEncryption(index: string) {
    return new DataGoogleStorageBucketObjectContentCustomerEncryption(this, 'customer_encryption', index);
  }

  // detect_md5hash - computed: true, optional: false, required: false
  public get detectMd5Hash() {
    return this.getStringAttribute('detect_md5hash');
  }

  // event_based_hold - computed: true, optional: false, required: false
  public get eventBasedHold() {
    return this.getBooleanAttribute('event_based_hold') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_name - computed: true, optional: false, required: false
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }

  // md5hash - computed: true, optional: false, required: false
  public get md5Hash() {
    return this.getStringAttribute('md5hash');
  }

  // media_link - computed: true, optional: false, required: false
  public get mediaLink() {
    return this.getStringAttribute('media_link');
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(key: string): string {
    return new cdktf.StringMap(this, 'metadata').lookup(key);
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
    return this._name
  }

  // output_name - computed: true, optional: false, required: false
  public get outputName() {
    return this.getStringAttribute('output_name');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // temporary_hold - computed: true, optional: false, required: false
  public get temporaryHold() {
    return this.getBooleanAttribute('temporary_hold') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      content: cdktf.stringToTerraform(this._content),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
