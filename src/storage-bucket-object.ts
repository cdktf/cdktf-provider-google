// https://www.terraform.io/docs/providers/google/r/storage_bucket_object.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBucketObjectConfig extends cdktf.TerraformMetaArguments {
  /** The name of the containing bucket. */
  readonly bucket: string;
  /** Cache-Control directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600 */
  readonly cacheControl?: string;
  /** Data as string to be uploaded. Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output. */
  readonly content?: string;
  /** Content-Disposition of the object data. */
  readonly contentDisposition?: string;
  /** Content-Encoding of the object data. */
  readonly contentEncoding?: string;
  /** Content-Language of the object data. */
  readonly contentLanguage?: string;
  /** Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8". */
  readonly contentType?: string;
  readonly detectMd5Hash?: string;
  /** User-provided metadata, in key/value pairs. */
  readonly metadata?: { [key: string]: string };
  /** The name of the object. If you're interpolating the name of this object, see output_name instead. */
  readonly name: string;
  /** A path to the data you want to upload. Must be defined if content is not. */
  readonly source?: string;
  /** The StorageClass of the new bucket object. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class. */
  readonly storageClass?: string;
}

// Resource

export class StorageBucketObject extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageBucketObjectConfig) {
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
    this._cacheControl = config.cacheControl;
    this._content = config.content;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._detectMd5Hash = config.detectMd5Hash;
    this._metadata = config.metadata;
    this._name = config.name;
    this._source = config.source;
    this._storageClass = config.storageClass;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
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

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string;
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string ) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl
  }

  // content - computed: false, optional: true, required: false
  private _content?: string;
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string ) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string;
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string ) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string;
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string ) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string;
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string ) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // crc32c - computed: true, optional: false, required: false
  public get crc32C() {
    return this.getStringAttribute('crc32c');
  }

  // detect_md5hash - computed: false, optional: true, required: false
  private _detectMd5Hash?: string;
  public get detectMd5Hash() {
    return this.getStringAttribute('detect_md5hash');
  }
  public set detectMd5Hash(value: string ) {
    this._detectMd5Hash = value;
  }
  public resetDetectMd5Hash() {
    this._detectMd5Hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectMd5HashInput() {
    return this._detectMd5Hash
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // md5hash - computed: true, optional: false, required: false
  public get md5Hash() {
    return this.getStringAttribute('md5hash');
  }

  // media_link - computed: true, optional: false, required: false
  public get mediaLink() {
    return this.getStringAttribute('media_link');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } ) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // output_name - computed: true, optional: false, required: false
  public get outputName() {
    return this.getStringAttribute('output_name');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source - computed: false, optional: true, required: false
  private _source?: string;
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string ) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string;
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      content: cdktf.stringToTerraform(this._content),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_language: cdktf.stringToTerraform(this._contentLanguage),
      content_type: cdktf.stringToTerraform(this._contentType),
      detect_md5hash: cdktf.stringToTerraform(this._detectMd5Hash),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      source: cdktf.stringToTerraform(this._source),
      storage_class: cdktf.stringToTerraform(this._storageClass),
    };
  }
}
