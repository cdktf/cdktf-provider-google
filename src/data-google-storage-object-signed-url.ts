// https://www.terraform.io/docs/providers/google/r/data_google_storage_object_signed_url.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleStorageObjectSignedUrlConfig extends cdktf.TerraformMetaArguments {
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

export class DataGoogleStorageObjectSignedUrl extends cdktf.TerraformDataSource {

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
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // content_md5 - computed: false, optional: true, required: false
  private _contentMd5?: string;
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }
  public set contentMd5(value: string ) {
    this._contentMd5 = value;
  }
  public resetContentMd5() {
    this._contentMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMd5Input() {
    return this._contentMd5
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string ) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string;
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string ) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string;
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string ) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration
  }

  // extension_headers - computed: false, optional: true, required: false
  private _extensionHeaders?: { [key: string]: string };
  public get extensionHeaders() {
    return this.interpolationForAttribute('extension_headers') as any;
  }
  public set extensionHeaders(value: { [key: string]: string } ) {
    this._extensionHeaders = value;
  }
  public resetExtensionHeaders() {
    this._extensionHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeadersInput() {
    return this._extensionHeaders
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string;
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string ) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path - computed: false, optional: false, required: true
  private _path: string;
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // signed_url - computed: true, optional: false, required: false
  public get signedUrl() {
    return this.getStringAttribute('signed_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      content_md5: cdktf.stringToTerraform(this._contentMd5),
      content_type: cdktf.stringToTerraform(this._contentType),
      credentials: cdktf.stringToTerraform(this._credentials),
      duration: cdktf.stringToTerraform(this._duration),
      extension_headers: cdktf.hashMapper(cdktf.anyToTerraform)(this._extensionHeaders),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      path: cdktf.stringToTerraform(this._path),
    };
  }
}
