// https://www.terraform.io/docs/providers/google/r/data_google_storage_object_signed_url.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleStorageObjectSignedUrlConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly contentMd5?: string;
  readonly contentType?: string;
  readonly credentials?: string;
  readonly duration?: string;
  readonly extensionHeaders?: { [key: string]: string };
  readonly httpMethod?: string;
  readonly path: string;
}

// Resource

export class DataGoogleStorageObjectSignedUrl extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleStorageObjectSignedUrlConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_object_signed_url',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._contentMd5 = config.contentMd5;
    this._contentType = config.contentType;
    this._credentials = config.credentials;
    this._duration = config.duration;
    this._extensionHeaders = config.extensionHeaders;
    this._httpMethod = config.httpMethod;
    this._path = config.path;
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

  // content_md5 - computed: false, optional: true, required: false
  private _contentMd5?: string;
  public get contentMd5() {
    return this._contentMd5;
  }
  public set contentMd5(value: string | undefined) {
    this._contentMd5 = value;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this._contentType;
  }
  public set contentType(value: string | undefined) {
    this._contentType = value;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string;
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined) {
    this._credentials = value;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string;
  public get duration() {
    return this._duration;
  }
  public set duration(value: string | undefined) {
    this._duration = value;
  }

  // extension_headers - computed: false, optional: true, required: false
  private _extensionHeaders?: { [key: string]: string };
  public get extensionHeaders() {
    return this._extensionHeaders;
  }
  public set extensionHeaders(value: { [key: string]: string } | undefined) {
    this._extensionHeaders = value;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string;
  public get httpMethod() {
    return this._httpMethod;
  }
  public set httpMethod(value: string | undefined) {
    this._httpMethod = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // path - computed: false, optional: false, required: true
  private _path: string;
  public get path() {
    return this._path;
  }
  public set path(value: string) {
    this._path = value;
  }

  // signed_url - computed: true, optional: false, required: true
  public get signedUrl() {
    return this.getStringAttribute('signed_url');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      content_md5: this._contentMd5,
      content_type: this._contentType,
      credentials: this._credentials,
      duration: this._duration,
      extension_headers: this._extensionHeaders,
      http_method: this._httpMethod,
      path: this._path,
    };
  }
}
