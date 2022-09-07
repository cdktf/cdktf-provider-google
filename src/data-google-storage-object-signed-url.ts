// https://www.terraform.io/docs/providers/google/d/storage_object_signed_url
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleStorageObjectSignedUrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}
  */
  readonly contentMd5?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}
  */
  readonly extensionHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url google_storage_object_signed_url}
*/
export class DataGoogleStorageObjectSignedUrl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_object_signed_url";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url google_storage_object_signed_url} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageObjectSignedUrlConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageObjectSignedUrlConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_object_signed_url',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._contentMd5 = config.contentMd5;
    this._contentType = config.contentType;
    this._credentials = config.credentials;
    this._duration = config.duration;
    this._extensionHeaders = config.extensionHeaders;
    this._httpMethod = config.httpMethod;
    this._id = config.id;
    this._path = config.path;
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
    return this._bucket;
  }

  // content_md5 - computed: false, optional: true, required: false
  private _contentMd5?: string; 
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }
  public set contentMd5(value: string) {
    this._contentMd5 = value;
  }
  public resetContentMd5() {
    this._contentMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMd5Input() {
    return this._contentMd5;
  }

  // content_type - computed: false, optional: true, required: false
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
    return this._contentType;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // extension_headers - computed: false, optional: true, required: false
  private _extensionHeaders?: { [key: string]: string }; 
  public get extensionHeaders() {
    return this.getStringMapAttribute('extension_headers');
  }
  public set extensionHeaders(value: { [key: string]: string }) {
    this._extensionHeaders = value;
  }
  public resetExtensionHeaders() {
    this._extensionHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeadersInput() {
    return this._extensionHeaders;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
      extension_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._extensionHeaders),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
    };
  }
}
