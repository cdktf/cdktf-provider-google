// https://www.terraform.io/docs/providers/google/r/compute_backend_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeBackendBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud Storage bucket name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#bucket_name ComputeBackendBucket#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Headers that the HTTP/S load balancer should add to proxied responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#custom_response_headers ComputeBackendBucket#custom_response_headers}
  */
  readonly customResponseHeaders?: string[];
  /**
  * An optional textual description of the resource; provided by the
client when the resource is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#description ComputeBackendBucket#description}
  */
  readonly description?: string;
  /**
  * The security policy associated with this backend bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#edge_security_policy ComputeBackendBucket#edge_security_policy}
  */
  readonly edgeSecurityPolicy?: string;
  /**
  * If true, enable Cloud CDN for this BackendBucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#enable_cdn ComputeBackendBucket#enable_cdn}
  */
  readonly enableCdn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#id ComputeBackendBucket#id}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#name ComputeBackendBucket#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#project ComputeBackendBucket#project}
  */
  readonly project?: string;
  /**
  * cdn_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#cdn_policy ComputeBackendBucket#cdn_policy}
  */
  readonly cdnPolicy?: ComputeBackendBucketCdnPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#timeouts ComputeBackendBucket#timeouts}
  */
  readonly timeouts?: ComputeBackendBucketTimeouts;
}
export interface ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders {
  /**
  * The header field name to match on when bypassing cache. Values are case-insensitive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#header_name ComputeBackendBucket#header_name}
  */
  readonly headerName?: string;
}

export function computeBackendBucketCdnPolicyBypassCacheOnRequestHeadersToTerraform(struct?: ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}

export class ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}

export class ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference {
    return new ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeBackendBucketCdnPolicyCacheKeyPolicy {
  /**
  * Allows HTTP request headers (by name) to be used in the
cache key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#include_http_headers ComputeBackendBucket#include_http_headers}
  */
  readonly includeHttpHeaders?: string[];
  /**
  * Names of query string parameters to include in cache keys.
Default parameters are always included. '&' and '=' will
be percent encoded and not treated as delimiters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#query_string_whitelist ComputeBackendBucket#query_string_whitelist}
  */
  readonly queryStringWhitelist?: string[];
}

export function computeBackendBucketCdnPolicyCacheKeyPolicyToTerraform(struct?: ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference | ComputeBackendBucketCdnPolicyCacheKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_http_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeHttpHeaders),
    query_string_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryStringWhitelist),
  }
}

export class ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendBucketCdnPolicyCacheKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHttpHeaders = this._includeHttpHeaders;
    }
    if (this._queryStringWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringWhitelist = this._queryStringWhitelist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendBucketCdnPolicyCacheKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeHttpHeaders = undefined;
      this._queryStringWhitelist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeHttpHeaders = value.includeHttpHeaders;
      this._queryStringWhitelist = value.queryStringWhitelist;
    }
  }

  // include_http_headers - computed: false, optional: true, required: false
  private _includeHttpHeaders?: string[]; 
  public get includeHttpHeaders() {
    return this.getListAttribute('include_http_headers');
  }
  public set includeHttpHeaders(value: string[]) {
    this._includeHttpHeaders = value;
  }
  public resetIncludeHttpHeaders() {
    this._includeHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHttpHeadersInput() {
    return this._includeHttpHeaders;
  }

  // query_string_whitelist - computed: false, optional: true, required: false
  private _queryStringWhitelist?: string[]; 
  public get queryStringWhitelist() {
    return this.getListAttribute('query_string_whitelist');
  }
  public set queryStringWhitelist(value: string[]) {
    this._queryStringWhitelist = value;
  }
  public resetQueryStringWhitelist() {
    this._queryStringWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringWhitelistInput() {
    return this._queryStringWhitelist;
  }
}
export interface ComputeBackendBucketCdnPolicyNegativeCachingPolicy {
  /**
  * The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#code ComputeBackendBucket#code}
  */
  readonly code?: number;
  /**
  * The TTL (in seconds) for which to cache responses with the corresponding status code. The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#ttl ComputeBackendBucket#ttl}
  */
  readonly ttl?: number;
}

export function computeBackendBucketCdnPolicyNegativeCachingPolicyToTerraform(struct?: ComputeBackendBucketCdnPolicyNegativeCachingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export class ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeBackendBucketCdnPolicyNegativeCachingPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendBucketCdnPolicyNegativeCachingPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._ttl = value.ttl;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class ComputeBackendBucketCdnPolicyNegativeCachingPolicyList extends cdktf.ComplexList {
  public internalValue? : ComputeBackendBucketCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable

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
  public get(index: number): ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference {
    return new ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeBackendBucketCdnPolicy {
  /**
  * Specifies the cache setting for all responses from this backend.
The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#cache_mode ComputeBackendBucket#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#client_ttl ComputeBackendBucket#client_ttl}
  */
  readonly clientTtl?: number;
  /**
  * Specifies the default TTL for cached content served by this origin for responses
that do not have an existing valid TTL (max-age or s-max-age).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#default_ttl ComputeBackendBucket#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#max_ttl ComputeBackendBucket#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#negative_caching ComputeBackendBucket#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktf.IResolvable;
  /**
  * If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#request_coalescing ComputeBackendBucket#request_coalescing}
  */
  readonly requestCoalescing?: boolean | cdktf.IResolvable;
  /**
  * Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#serve_while_stale ComputeBackendBucket#serve_while_stale}
  */
  readonly serveWhileStale?: number;
  /**
  * Maximum number of seconds the response to a signed URL request will
be considered fresh. After this time period,
the response will be revalidated before being served.
When serving responses to signed URL requests,
Cloud CDN will internally behave as though
all responses from this backend had a "Cache-Control: public,
max-age=[TTL]" header, regardless of any existing Cache-Control
header. The actual headers served in responses will not be altered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#signed_url_cache_max_age_sec ComputeBackendBucket#signed_url_cache_max_age_sec}
  */
  readonly signedUrlCacheMaxAgeSec?: number;
  /**
  * bypass_cache_on_request_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#bypass_cache_on_request_headers ComputeBackendBucket#bypass_cache_on_request_headers}
  */
  readonly bypassCacheOnRequestHeaders?: ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders[] | cdktf.IResolvable;
  /**
  * cache_key_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#cache_key_policy ComputeBackendBucket#cache_key_policy}
  */
  readonly cacheKeyPolicy?: ComputeBackendBucketCdnPolicyCacheKeyPolicy;
  /**
  * negative_caching_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#negative_caching_policy ComputeBackendBucket#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: ComputeBackendBucketCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable;
}

export function computeBackendBucketCdnPolicyToTerraform(struct?: ComputeBackendBucketCdnPolicyOutputReference | ComputeBackendBucketCdnPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_mode: cdktf.stringToTerraform(struct!.cacheMode),
    client_ttl: cdktf.numberToTerraform(struct!.clientTtl),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    negative_caching: cdktf.booleanToTerraform(struct!.negativeCaching),
    request_coalescing: cdktf.booleanToTerraform(struct!.requestCoalescing),
    serve_while_stale: cdktf.numberToTerraform(struct!.serveWhileStale),
    signed_url_cache_max_age_sec: cdktf.numberToTerraform(struct!.signedUrlCacheMaxAgeSec),
    bypass_cache_on_request_headers: cdktf.listMapper(computeBackendBucketCdnPolicyBypassCacheOnRequestHeadersToTerraform, true)(struct!.bypassCacheOnRequestHeaders),
    cache_key_policy: computeBackendBucketCdnPolicyCacheKeyPolicyToTerraform(struct!.cacheKeyPolicy),
    negative_caching_policy: cdktf.listMapper(computeBackendBucketCdnPolicyNegativeCachingPolicyToTerraform, true)(struct!.negativeCachingPolicy),
  }
}

export class ComputeBackendBucketCdnPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendBucketCdnPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMode = this._cacheMode;
    }
    if (this._clientTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTtl = this._clientTtl;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._maxTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl;
    }
    if (this._negativeCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCaching = this._negativeCaching;
    }
    if (this._requestCoalescing !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCoalescing = this._requestCoalescing;
    }
    if (this._serveWhileStale !== undefined) {
      hasAnyValues = true;
      internalValueResult.serveWhileStale = this._serveWhileStale;
    }
    if (this._signedUrlCacheMaxAgeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.signedUrlCacheMaxAgeSec = this._signedUrlCacheMaxAgeSec;
    }
    if (this._bypassCacheOnRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCacheOnRequestHeaders = this._bypassCacheOnRequestHeaders?.internalValue;
    }
    if (this._cacheKeyPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyPolicy = this._cacheKeyPolicy?.internalValue;
    }
    if (this._negativeCachingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCachingPolicy = this._negativeCachingPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendBucketCdnPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheMode = undefined;
      this._clientTtl = undefined;
      this._defaultTtl = undefined;
      this._maxTtl = undefined;
      this._negativeCaching = undefined;
      this._requestCoalescing = undefined;
      this._serveWhileStale = undefined;
      this._signedUrlCacheMaxAgeSec = undefined;
      this._bypassCacheOnRequestHeaders.internalValue = undefined;
      this._cacheKeyPolicy.internalValue = undefined;
      this._negativeCachingPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheMode = value.cacheMode;
      this._clientTtl = value.clientTtl;
      this._defaultTtl = value.defaultTtl;
      this._maxTtl = value.maxTtl;
      this._negativeCaching = value.negativeCaching;
      this._requestCoalescing = value.requestCoalescing;
      this._serveWhileStale = value.serveWhileStale;
      this._signedUrlCacheMaxAgeSec = value.signedUrlCacheMaxAgeSec;
      this._bypassCacheOnRequestHeaders.internalValue = value.bypassCacheOnRequestHeaders;
      this._cacheKeyPolicy.internalValue = value.cacheKeyPolicy;
      this._negativeCachingPolicy.internalValue = value.negativeCachingPolicy;
    }
  }

  // cache_mode - computed: true, optional: true, required: false
  private _cacheMode?: string; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode;
  }

  // client_ttl - computed: true, optional: true, required: false
  private _clientTtl?: number; 
  public get clientTtl() {
    return this.getNumberAttribute('client_ttl');
  }
  public set clientTtl(value: number) {
    this._clientTtl = value;
  }
  public resetClientTtl() {
    this._clientTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTtlInput() {
    return this._clientTtl;
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // max_ttl - computed: true, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // negative_caching - computed: true, optional: true, required: false
  private _negativeCaching?: boolean | cdktf.IResolvable; 
  public get negativeCaching() {
    return this.getBooleanAttribute('negative_caching');
  }
  public set negativeCaching(value: boolean | cdktf.IResolvable) {
    this._negativeCaching = value;
  }
  public resetNegativeCaching() {
    this._negativeCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingInput() {
    return this._negativeCaching;
  }

  // request_coalescing - computed: false, optional: true, required: false
  private _requestCoalescing?: boolean | cdktf.IResolvable; 
  public get requestCoalescing() {
    return this.getBooleanAttribute('request_coalescing');
  }
  public set requestCoalescing(value: boolean | cdktf.IResolvable) {
    this._requestCoalescing = value;
  }
  public resetRequestCoalescing() {
    this._requestCoalescing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCoalescingInput() {
    return this._requestCoalescing;
  }

  // serve_while_stale - computed: true, optional: true, required: false
  private _serveWhileStale?: number; 
  public get serveWhileStale() {
    return this.getNumberAttribute('serve_while_stale');
  }
  public set serveWhileStale(value: number) {
    this._serveWhileStale = value;
  }
  public resetServeWhileStale() {
    this._serveWhileStale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveWhileStaleInput() {
    return this._serveWhileStale;
  }

  // signed_url_cache_max_age_sec - computed: false, optional: true, required: false
  private _signedUrlCacheMaxAgeSec?: number; 
  public get signedUrlCacheMaxAgeSec() {
    return this.getNumberAttribute('signed_url_cache_max_age_sec');
  }
  public set signedUrlCacheMaxAgeSec(value: number) {
    this._signedUrlCacheMaxAgeSec = value;
  }
  public resetSignedUrlCacheMaxAgeSec() {
    this._signedUrlCacheMaxAgeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedUrlCacheMaxAgeSecInput() {
    return this._signedUrlCacheMaxAgeSec;
  }

  // bypass_cache_on_request_headers - computed: false, optional: true, required: false
  private _bypassCacheOnRequestHeaders = new ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList(this, "bypass_cache_on_request_headers", false);
  public get bypassCacheOnRequestHeaders() {
    return this._bypassCacheOnRequestHeaders;
  }
  public putBypassCacheOnRequestHeaders(value: ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders[] | cdktf.IResolvable) {
    this._bypassCacheOnRequestHeaders.internalValue = value;
  }
  public resetBypassCacheOnRequestHeaders() {
    this._bypassCacheOnRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCacheOnRequestHeadersInput() {
    return this._bypassCacheOnRequestHeaders.internalValue;
  }

  // cache_key_policy - computed: false, optional: true, required: false
  private _cacheKeyPolicy = new ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference(this, "cache_key_policy");
  public get cacheKeyPolicy() {
    return this._cacheKeyPolicy;
  }
  public putCacheKeyPolicy(value: ComputeBackendBucketCdnPolicyCacheKeyPolicy) {
    this._cacheKeyPolicy.internalValue = value;
  }
  public resetCacheKeyPolicy() {
    this._cacheKeyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyPolicyInput() {
    return this._cacheKeyPolicy.internalValue;
  }

  // negative_caching_policy - computed: false, optional: true, required: false
  private _negativeCachingPolicy = new ComputeBackendBucketCdnPolicyNegativeCachingPolicyList(this, "negative_caching_policy", false);
  public get negativeCachingPolicy() {
    return this._negativeCachingPolicy;
  }
  public putNegativeCachingPolicy(value: ComputeBackendBucketCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable) {
    this._negativeCachingPolicy.internalValue = value;
  }
  public resetNegativeCachingPolicy() {
    this._negativeCachingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingPolicyInput() {
    return this._negativeCachingPolicy.internalValue;
  }
}
export interface ComputeBackendBucketTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#create ComputeBackendBucket#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#delete ComputeBackendBucket#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket#update ComputeBackendBucket#update}
  */
  readonly update?: string;
}

export function computeBackendBucketTimeoutsToTerraform(struct?: ComputeBackendBucketTimeoutsOutputReference | ComputeBackendBucketTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComputeBackendBucketTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendBucketTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendBucketTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket google_compute_backend_bucket}
*/
export class ComputeBackendBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_backend_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket google_compute_backend_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeBackendBucketConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeBackendBucketConfig) {
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
    this._bucketName = config.bucketName;
    this._customResponseHeaders = config.customResponseHeaders;
    this._description = config.description;
    this._edgeSecurityPolicy = config.edgeSecurityPolicy;
    this._enableCdn = config.enableCdn;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._cdnPolicy.internalValue = config.cdnPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // custom_response_headers - computed: false, optional: true, required: false
  private _customResponseHeaders?: string[]; 
  public get customResponseHeaders() {
    return this.getListAttribute('custom_response_headers');
  }
  public set customResponseHeaders(value: string[]) {
    this._customResponseHeaders = value;
  }
  public resetCustomResponseHeaders() {
    this._customResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseHeadersInput() {
    return this._customResponseHeaders;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // edge_security_policy - computed: false, optional: true, required: false
  private _edgeSecurityPolicy?: string; 
  public get edgeSecurityPolicy() {
    return this.getStringAttribute('edge_security_policy');
  }
  public set edgeSecurityPolicy(value: string) {
    this._edgeSecurityPolicy = value;
  }
  public resetEdgeSecurityPolicy() {
    this._edgeSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeSecurityPolicyInput() {
    return this._edgeSecurityPolicy;
  }

  // enable_cdn - computed: false, optional: true, required: false
  private _enableCdn?: boolean | cdktf.IResolvable; 
  public get enableCdn() {
    return this.getBooleanAttribute('enable_cdn');
  }
  public set enableCdn(value: boolean | cdktf.IResolvable) {
    this._enableCdn = value;
  }
  public resetEnableCdn() {
    this._enableCdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCdnInput() {
    return this._enableCdn;
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
    return this._project;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // cdn_policy - computed: false, optional: true, required: false
  private _cdnPolicy = new ComputeBackendBucketCdnPolicyOutputReference(this, "cdn_policy");
  public get cdnPolicy() {
    return this._cdnPolicy;
  }
  public putCdnPolicy(value: ComputeBackendBucketCdnPolicy) {
    this._cdnPolicy.internalValue = value;
  }
  public resetCdnPolicy() {
    this._cdnPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnPolicyInput() {
    return this._cdnPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeBackendBucketTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeBackendBucketTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      custom_response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customResponseHeaders),
      description: cdktf.stringToTerraform(this._description),
      edge_security_policy: cdktf.stringToTerraform(this._edgeSecurityPolicy),
      enable_cdn: cdktf.booleanToTerraform(this._enableCdn),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      cdn_policy: computeBackendBucketCdnPolicyToTerraform(this._cdnPolicy.internalValue),
      timeouts: computeBackendBucketTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
