// https://www.terraform.io/docs/providers/google/r/storage_bucket_object.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageBucketObjectConfig extends TerraformMetaArguments {
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
  /** The StorageClass of the new bucket object. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE. If not provided, this defaults to the bucket's default storage class or to a standard class. */
  readonly storageClass?: string;
}

// Resource

export class StorageBucketObject extends TerraformResource {

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
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string;
  public get cacheControl() {
    return this._cacheControl;
  }
  public set cacheControl(value: string | undefined) {
    this._cacheControl = value;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string;
  public get content() {
    return this._content;
  }
  public set content(value: string | undefined) {
    this._content = value;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string;
  public get contentDisposition() {
    return this._contentDisposition;
  }
  public set contentDisposition(value: string | undefined) {
    this._contentDisposition = value;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string;
  public get contentEncoding() {
    return this._contentEncoding;
  }
  public set contentEncoding(value: string | undefined) {
    this._contentEncoding = value;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string;
  public get contentLanguage() {
    return this._contentLanguage;
  }
  public set contentLanguage(value: string | undefined) {
    this._contentLanguage = value;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this._contentType ?? this.getStringAttribute('content_type');
  }
  public set contentType(value: string | undefined) {
    this._contentType = value;
  }

  // crc32c - computed: true, optional: false, required: true
  public get crc32C() {
    return this.getStringAttribute('crc32c');
  }

  // detect_md5hash - computed: false, optional: true, required: false
  private _detectMd5Hash?: string;
  public get detectMd5Hash() {
    return this._detectMd5Hash;
  }
  public set detectMd5Hash(value: string | undefined) {
    this._detectMd5Hash = value;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
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

  // source - computed: false, optional: true, required: false
  private _source?: string;
  public get source() {
    return this._source;
  }
  public set source(value: string | undefined) {
    this._source = value;
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string;
  public get storageClass() {
    return this._storageClass ?? this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string | undefined) {
    this._storageClass = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      cache_control: this._cacheControl,
      content: this._content,
      content_disposition: this._contentDisposition,
      content_encoding: this._contentEncoding,
      content_language: this._contentLanguage,
      content_type: this._contentType,
      detect_md5hash: this._detectMd5Hash,
      metadata: this._metadata,
      name: this._name,
      source: this._source,
      storage_class: this._storageClass,
    };
  }
}
