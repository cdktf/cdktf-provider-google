/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/storage_bucket_object_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleStorageBucketObjectContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the containing bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/storage_bucket_object_content#bucket DataGoogleStorageBucketObjectContent#bucket}
  */
  readonly bucket: string;
  /**
  * Data as string to be uploaded. Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/storage_bucket_object_content#content DataGoogleStorageBucketObjectContent#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/storage_bucket_object_content#id DataGoogleStorageBucketObjectContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the object. If you're interpolating the name of this object, see output_name instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/storage_bucket_object_content#name DataGoogleStorageBucketObjectContent#name}
  */
  readonly name: string;
}
export interface DataGoogleStorageBucketObjectContentCustomerEncryption {
}

export function dataGoogleStorageBucketObjectContentCustomerEncryptionToTerraform(struct?: DataGoogleStorageBucketObjectContentCustomerEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageBucketObjectContentCustomerEncryptionToHclTerraform(struct?: DataGoogleStorageBucketObjectContentCustomerEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleStorageBucketObjectContentCustomerEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageBucketObjectContentCustomerEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_algorithm - computed: true, optional: false, required: false
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
}

export class DataGoogleStorageBucketObjectContentCustomerEncryptionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference {
    return new DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageBucketObjectContentRetention {
}

export function dataGoogleStorageBucketObjectContentRetentionToTerraform(struct?: DataGoogleStorageBucketObjectContentRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageBucketObjectContentRetentionToHclTerraform(struct?: DataGoogleStorageBucketObjectContentRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageBucketObjectContentRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleStorageBucketObjectContentRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageBucketObjectContentRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // retain_until_time - computed: true, optional: false, required: false
  public get retainUntilTime() {
    return this.getStringAttribute('retain_until_time');
  }
}

export class DataGoogleStorageBucketObjectContentRetentionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleStorageBucketObjectContentRetentionOutputReference {
    return new DataGoogleStorageBucketObjectContentRetentionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/storage_bucket_object_content google_storage_bucket_object_content}
*/
export class DataGoogleStorageBucketObjectContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_bucket_object_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleStorageBucketObjectContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleStorageBucketObjectContent to import
  * @param importFromId The id of the existing DataGoogleStorageBucketObjectContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/storage_bucket_object_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleStorageBucketObjectContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_bucket_object_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/storage_bucket_object_content google_storage_bucket_object_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageBucketObjectContentConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageBucketObjectContentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_bucket_object_content',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
        providerVersionConstraint: '~> 6.0'
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
    this._content = config.content;
    this._id = config.id;
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
    return this._bucket;
  }

  // cache_control - computed: true, optional: false, required: false
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_base64 - computed: true, optional: false, required: false
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }

  // content_base64sha512 - computed: true, optional: false, required: false
  public get contentBase64Sha512() {
    return this.getStringAttribute('content_base64sha512');
  }

  // content_disposition - computed: true, optional: false, required: false
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }

  // content_encoding - computed: true, optional: false, required: false
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }

  // content_hexsha512 - computed: true, optional: false, required: false
  public get contentHexsha512() {
    return this.getStringAttribute('content_hexsha512');
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
  private _customerEncryption = new DataGoogleStorageBucketObjectContentCustomerEncryptionList(this, "customer_encryption", false);
  public get customerEncryption() {
    return this._customerEncryption;
  }

  // detect_md5hash - computed: true, optional: false, required: false
  public get detectMd5Hash() {
    return this.getStringAttribute('detect_md5hash');
  }

  // event_based_hold - computed: true, optional: false, required: false
  public get eventBasedHold() {
    return this.getBooleanAttribute('event_based_hold');
  }

  // force_empty_content_type - computed: true, optional: false, required: false
  public get forceEmptyContentType() {
    return this.getBooleanAttribute('force_empty_content_type');
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
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

  // kms_key_name - computed: true, optional: false, required: false
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }

  // md5hash - computed: true, optional: false, required: false
  public get md5Hash() {
    return this.getStringAttribute('md5hash');
  }

  // md5hexhash - computed: true, optional: false, required: false
  public get md5Hexhash() {
    return this.getStringAttribute('md5hexhash');
  }

  // media_link - computed: true, optional: false, required: false
  public get mediaLink() {
    return this.getStringAttribute('media_link');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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
    return this._name;
  }

  // output_name - computed: true, optional: false, required: false
  public get outputName() {
    return this.getStringAttribute('output_name');
  }

  // retention - computed: true, optional: false, required: false
  private _retention = new DataGoogleStorageBucketObjectContentRetentionList(this, "retention", false);
  public get retention() {
    return this._retention;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_md5hash - computed: true, optional: false, required: false
  public get sourceMd5Hash() {
    return this.getStringAttribute('source_md5hash');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // temporary_hold - computed: true, optional: false, required: false
  public get temporaryHold() {
    return this.getBooleanAttribute('temporary_hold');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      content: cdktf.stringToTerraform(this._content),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
