// https://www.terraform.io/docs/providers/google/d/compute_backend_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeBackendBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_backend_bucket#id DataGoogleComputeBackendBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_backend_bucket#name DataGoogleComputeBackendBucket#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_backend_bucket#project DataGoogleComputeBackendBucket#project}
  */
  readonly project?: string;
}
export interface DataGoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders {
}

export function dataGoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersToTerraform(struct?: DataGoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_name - computed: true, optional: false, required: false
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
}

export class DataGoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference {
    return new DataGoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendBucketCdnPolicyCacheKeyPolicy {
}

export function dataGoogleComputeBackendBucketCdnPolicyCacheKeyPolicyToTerraform(struct?: DataGoogleComputeBackendBucketCdnPolicyCacheKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendBucketCdnPolicyCacheKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendBucketCdnPolicyCacheKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_http_headers - computed: true, optional: false, required: false
  public get includeHttpHeaders() {
    return this.getListAttribute('include_http_headers');
  }

  // query_string_whitelist - computed: true, optional: false, required: false
  public get queryStringWhitelist() {
    return this.getListAttribute('query_string_whitelist');
  }
}

export class DataGoogleComputeBackendBucketCdnPolicyCacheKeyPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference {
    return new DataGoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy {
}

export function dataGoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyToTerraform(struct?: DataGoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

export class DataGoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference {
    return new DataGoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendBucketCdnPolicy {
}

export function dataGoogleComputeBackendBucketCdnPolicyToTerraform(struct?: DataGoogleComputeBackendBucketCdnPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendBucketCdnPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendBucketCdnPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendBucketCdnPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bypass_cache_on_request_headers - computed: true, optional: false, required: false
  private _bypassCacheOnRequestHeaders = new DataGoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList(this, "bypass_cache_on_request_headers", false);
  public get bypassCacheOnRequestHeaders() {
    return this._bypassCacheOnRequestHeaders;
  }

  // cache_key_policy - computed: true, optional: false, required: false
  private _cacheKeyPolicy = new DataGoogleComputeBackendBucketCdnPolicyCacheKeyPolicyList(this, "cache_key_policy", false);
  public get cacheKeyPolicy() {
    return this._cacheKeyPolicy;
  }

  // cache_mode - computed: true, optional: false, required: false
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }

  // client_ttl - computed: true, optional: false, required: false
  public get clientTtl() {
    return this.getNumberAttribute('client_ttl');
  }

  // default_ttl - computed: true, optional: false, required: false
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }

  // max_ttl - computed: true, optional: false, required: false
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }

  // negative_caching - computed: true, optional: false, required: false
  public get negativeCaching() {
    return this.getBooleanAttribute('negative_caching');
  }

  // negative_caching_policy - computed: true, optional: false, required: false
  private _negativeCachingPolicy = new DataGoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList(this, "negative_caching_policy", false);
  public get negativeCachingPolicy() {
    return this._negativeCachingPolicy;
  }

  // request_coalescing - computed: true, optional: false, required: false
  public get requestCoalescing() {
    return this.getBooleanAttribute('request_coalescing');
  }

  // serve_while_stale - computed: true, optional: false, required: false
  public get serveWhileStale() {
    return this.getNumberAttribute('serve_while_stale');
  }

  // signed_url_cache_max_age_sec - computed: true, optional: false, required: false
  public get signedUrlCacheMaxAgeSec() {
    return this.getNumberAttribute('signed_url_cache_max_age_sec');
  }
}

export class DataGoogleComputeBackendBucketCdnPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendBucketCdnPolicyOutputReference {
    return new DataGoogleComputeBackendBucketCdnPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/compute_backend_bucket google_compute_backend_bucket}
*/
export class DataGoogleComputeBackendBucket extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_backend_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/compute_backend_bucket google_compute_backend_bucket} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeBackendBucketConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeBackendBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_backend_bucket',
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // cdn_policy - computed: true, optional: false, required: false
  private _cdnPolicy = new DataGoogleComputeBackendBucketCdnPolicyList(this, "cdn_policy", false);
  public get cdnPolicy() {
    return this._cdnPolicy;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // custom_response_headers - computed: true, optional: false, required: false
  public get customResponseHeaders() {
    return this.getListAttribute('custom_response_headers');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // edge_security_policy - computed: true, optional: false, required: false
  public get edgeSecurityPolicy() {
    return this.getStringAttribute('edge_security_policy');
  }

  // enable_cdn - computed: true, optional: false, required: false
  public get enableCdn() {
    return this.getBooleanAttribute('enable_cdn');
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

  // project - computed: false, optional: true, required: false
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
    return this._project;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
