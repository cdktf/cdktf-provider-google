// https://www.terraform.io/docs/providers/google/d/compute_backend_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeBackendServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_backend_service#id DataGoogleComputeBackendService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_backend_service#name DataGoogleComputeBackendService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_backend_service#project DataGoogleComputeBackendService#project}
  */
  readonly project?: string;
}
export interface DataGoogleComputeBackendServiceBackend {
}

export function dataGoogleComputeBackendServiceBackendToTerraform(struct?: DataGoogleComputeBackendServiceBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceBackend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceBackend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // balancing_mode - computed: true, optional: false, required: false
  public get balancingMode() {
    return this.getStringAttribute('balancing_mode');
  }

  // capacity_scaler - computed: true, optional: false, required: false
  public get capacityScaler() {
    return this.getNumberAttribute('capacity_scaler');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_connections_per_endpoint - computed: true, optional: false, required: false
  public get maxConnectionsPerEndpoint() {
    return this.getNumberAttribute('max_connections_per_endpoint');
  }

  // max_connections_per_instance - computed: true, optional: false, required: false
  public get maxConnectionsPerInstance() {
    return this.getNumberAttribute('max_connections_per_instance');
  }

  // max_rate - computed: true, optional: false, required: false
  public get maxRate() {
    return this.getNumberAttribute('max_rate');
  }

  // max_rate_per_endpoint - computed: true, optional: false, required: false
  public get maxRatePerEndpoint() {
    return this.getNumberAttribute('max_rate_per_endpoint');
  }

  // max_rate_per_instance - computed: true, optional: false, required: false
  public get maxRatePerInstance() {
    return this.getNumberAttribute('max_rate_per_instance');
  }

  // max_utilization - computed: true, optional: false, required: false
  public get maxUtilization() {
    return this.getNumberAttribute('max_utilization');
  }
}

export class DataGoogleComputeBackendServiceBackendList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceBackendOutputReference {
    return new DataGoogleComputeBackendServiceBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy {
}

export function dataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct?: DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_host - computed: true, optional: false, required: false
  public get includeHost() {
    return this.getBooleanAttribute('include_host');
  }

  // include_named_cookies - computed: true, optional: false, required: false
  public get includeNamedCookies() {
    return this.getListAttribute('include_named_cookies');
  }

  // include_protocol - computed: true, optional: false, required: false
  public get includeProtocol() {
    return this.getBooleanAttribute('include_protocol');
  }

  // include_query_string - computed: true, optional: false, required: false
  public get includeQueryString() {
    return this.getBooleanAttribute('include_query_string');
  }

  // query_string_blacklist - computed: true, optional: false, required: false
  public get queryStringBlacklist() {
    return cdktf.Fn.tolist(this.getListAttribute('query_string_blacklist'));
  }

  // query_string_whitelist - computed: true, optional: false, required: false
  public get queryStringWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('query_string_whitelist'));
  }
}

export class DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference {
    return new DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy {
}

export function dataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyToTerraform(struct?: DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy | undefined) {
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

export class DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference {
    return new DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceCdnPolicy {
}

export function dataGoogleComputeBackendServiceCdnPolicyToTerraform(struct?: DataGoogleComputeBackendServiceCdnPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceCdnPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceCdnPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceCdnPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_key_policy - computed: true, optional: false, required: false
  private _cacheKeyPolicy = new DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyList(this, "cache_key_policy", false);
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
  private _negativeCachingPolicy = new DataGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList(this, "negative_caching_policy", false);
  public get negativeCachingPolicy() {
    return this._negativeCachingPolicy;
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

export class DataGoogleComputeBackendServiceCdnPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceCdnPolicyOutputReference {
    return new DataGoogleComputeBackendServiceCdnPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceCircuitBreakers {
}

export function dataGoogleComputeBackendServiceCircuitBreakersToTerraform(struct?: DataGoogleComputeBackendServiceCircuitBreakers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceCircuitBreakersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceCircuitBreakers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceCircuitBreakers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_pending_requests - computed: true, optional: false, required: false
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }

  // max_requests - computed: true, optional: false, required: false
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }

  // max_requests_per_connection - computed: true, optional: false, required: false
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }

  // max_retries - computed: true, optional: false, required: false
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
}

export class DataGoogleComputeBackendServiceCircuitBreakersList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceCircuitBreakersOutputReference {
    return new DataGoogleComputeBackendServiceCircuitBreakersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl {
}

export function dataGoogleComputeBackendServiceConsistentHashHttpCookieTtlToTerraform(struct?: DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}

export class DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference {
    return new DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceConsistentHashHttpCookie {
}

export function dataGoogleComputeBackendServiceConsistentHashHttpCookieToTerraform(struct?: DataGoogleComputeBackendServiceConsistentHashHttpCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceConsistentHashHttpCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceConsistentHashHttpCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // ttl - computed: true, optional: false, required: false
  private _ttl = new DataGoogleComputeBackendServiceConsistentHashHttpCookieTtlList(this, "ttl", false);
  public get ttl() {
    return this._ttl;
  }
}

export class DataGoogleComputeBackendServiceConsistentHashHttpCookieList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference {
    return new DataGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceConsistentHash {
}

export function dataGoogleComputeBackendServiceConsistentHashToTerraform(struct?: DataGoogleComputeBackendServiceConsistentHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceConsistentHashOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceConsistentHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceConsistentHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_cookie - computed: true, optional: false, required: false
  private _httpCookie = new DataGoogleComputeBackendServiceConsistentHashHttpCookieList(this, "http_cookie", false);
  public get httpCookie() {
    return this._httpCookie;
  }

  // http_header_name - computed: true, optional: false, required: false
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }

  // minimum_ring_size - computed: true, optional: false, required: false
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
}

export class DataGoogleComputeBackendServiceConsistentHashList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceConsistentHashOutputReference {
    return new DataGoogleComputeBackendServiceConsistentHashOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceIap {
}

export function dataGoogleComputeBackendServiceIapToTerraform(struct?: DataGoogleComputeBackendServiceIap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceIapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceIap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceIap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oauth2_client_id - computed: true, optional: false, required: false
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }

  // oauth2_client_secret - computed: true, optional: false, required: false
  public get oauth2ClientSecret() {
    return this.getStringAttribute('oauth2_client_secret');
  }

  // oauth2_client_secret_sha256 - computed: true, optional: false, required: false
  public get oauth2ClientSecretSha256() {
    return this.getStringAttribute('oauth2_client_secret_sha256');
  }
}

export class DataGoogleComputeBackendServiceIapList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceIapOutputReference {
    return new DataGoogleComputeBackendServiceIapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceLogConfig {
}

export function dataGoogleComputeBackendServiceLogConfigToTerraform(struct?: DataGoogleComputeBackendServiceLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceLogConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // sample_rate - computed: true, optional: false, required: false
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
}

export class DataGoogleComputeBackendServiceLogConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceLogConfigOutputReference {
    return new DataGoogleComputeBackendServiceLogConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime {
}

export function dataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct?: DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}

export class DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference {
    return new DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceOutlierDetectionInterval {
}

export function dataGoogleComputeBackendServiceOutlierDetectionIntervalToTerraform(struct?: DataGoogleComputeBackendServiceOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceOutlierDetectionInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceOutlierDetectionInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}

export class DataGoogleComputeBackendServiceOutlierDetectionIntervalList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference {
    return new DataGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceOutlierDetection {
}

export function dataGoogleComputeBackendServiceOutlierDetectionToTerraform(struct?: DataGoogleComputeBackendServiceOutlierDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceOutlierDetectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceOutlierDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceOutlierDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_ejection_time - computed: true, optional: false, required: false
  private _baseEjectionTime = new DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeList(this, "base_ejection_time", false);
  public get baseEjectionTime() {
    return this._baseEjectionTime;
  }

  // consecutive_errors - computed: true, optional: false, required: false
  public get consecutiveErrors() {
    return this.getNumberAttribute('consecutive_errors');
  }

  // consecutive_gateway_failure - computed: true, optional: false, required: false
  public get consecutiveGatewayFailure() {
    return this.getNumberAttribute('consecutive_gateway_failure');
  }

  // enforcing_consecutive_errors - computed: true, optional: false, required: false
  public get enforcingConsecutiveErrors() {
    return this.getNumberAttribute('enforcing_consecutive_errors');
  }

  // enforcing_consecutive_gateway_failure - computed: true, optional: false, required: false
  public get enforcingConsecutiveGatewayFailure() {
    return this.getNumberAttribute('enforcing_consecutive_gateway_failure');
  }

  // enforcing_success_rate - computed: true, optional: false, required: false
  public get enforcingSuccessRate() {
    return this.getNumberAttribute('enforcing_success_rate');
  }

  // interval - computed: true, optional: false, required: false
  private _interval = new DataGoogleComputeBackendServiceOutlierDetectionIntervalList(this, "interval", false);
  public get interval() {
    return this._interval;
  }

  // max_ejection_percent - computed: true, optional: false, required: false
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }

  // success_rate_minimum_hosts - computed: true, optional: false, required: false
  public get successRateMinimumHosts() {
    return this.getNumberAttribute('success_rate_minimum_hosts');
  }

  // success_rate_request_volume - computed: true, optional: false, required: false
  public get successRateRequestVolume() {
    return this.getNumberAttribute('success_rate_request_volume');
  }

  // success_rate_stdev_factor - computed: true, optional: false, required: false
  public get successRateStdevFactor() {
    return this.getNumberAttribute('success_rate_stdev_factor');
  }
}

export class DataGoogleComputeBackendServiceOutlierDetectionList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceOutlierDetectionOutputReference {
    return new DataGoogleComputeBackendServiceOutlierDetectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeBackendServiceSecuritySettings {
}

export function dataGoogleComputeBackendServiceSecuritySettingsToTerraform(struct?: DataGoogleComputeBackendServiceSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeBackendServiceSecuritySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeBackendServiceSecuritySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeBackendServiceSecuritySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_tls_policy - computed: true, optional: false, required: false
  public get clientTlsPolicy() {
    return this.getStringAttribute('client_tls_policy');
  }

  // subject_alt_names - computed: true, optional: false, required: false
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
}

export class DataGoogleComputeBackendServiceSecuritySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeBackendServiceSecuritySettingsOutputReference {
    return new DataGoogleComputeBackendServiceSecuritySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/compute_backend_service google_compute_backend_service}
*/
export class DataGoogleComputeBackendService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_backend_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/compute_backend_service google_compute_backend_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeBackendServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeBackendServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_backend_service',
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

  // affinity_cookie_ttl_sec - computed: true, optional: false, required: false
  public get affinityCookieTtlSec() {
    return this.getNumberAttribute('affinity_cookie_ttl_sec');
  }

  // backend - computed: true, optional: false, required: false
  private _backend = new DataGoogleComputeBackendServiceBackendList(this, "backend", true);
  public get backend() {
    return this._backend;
  }

  // cdn_policy - computed: true, optional: false, required: false
  private _cdnPolicy = new DataGoogleComputeBackendServiceCdnPolicyList(this, "cdn_policy", false);
  public get cdnPolicy() {
    return this._cdnPolicy;
  }

  // circuit_breakers - computed: true, optional: false, required: false
  private _circuitBreakers = new DataGoogleComputeBackendServiceCircuitBreakersList(this, "circuit_breakers", false);
  public get circuitBreakers() {
    return this._circuitBreakers;
  }

  // connection_draining_timeout_sec - computed: true, optional: false, required: false
  public get connectionDrainingTimeoutSec() {
    return this.getNumberAttribute('connection_draining_timeout_sec');
  }

  // consistent_hash - computed: true, optional: false, required: false
  private _consistentHash = new DataGoogleComputeBackendServiceConsistentHashList(this, "consistent_hash", false);
  public get consistentHash() {
    return this._consistentHash;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // custom_request_headers - computed: true, optional: false, required: false
  public get customRequestHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_request_headers'));
  }

  // custom_response_headers - computed: true, optional: false, required: false
  public get customResponseHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_response_headers'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_cdn - computed: true, optional: false, required: false
  public get enableCdn() {
    return this.getBooleanAttribute('enable_cdn');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // health_checks - computed: true, optional: false, required: false
  public get healthChecks() {
    return cdktf.Fn.tolist(this.getListAttribute('health_checks'));
  }

  // iap - computed: true, optional: false, required: false
  private _iap = new DataGoogleComputeBackendServiceIapList(this, "iap", false);
  public get iap() {
    return this._iap;
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

  // load_balancing_scheme - computed: true, optional: false, required: false
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }

  // locality_lb_policy - computed: true, optional: false, required: false
  public get localityLbPolicy() {
    return this.getStringAttribute('locality_lb_policy');
  }

  // log_config - computed: true, optional: false, required: false
  private _logConfig = new DataGoogleComputeBackendServiceLogConfigList(this, "log_config", false);
  public get logConfig() {
    return this._logConfig;
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

  // outlier_detection - computed: true, optional: false, required: false
  private _outlierDetection = new DataGoogleComputeBackendServiceOutlierDetectionList(this, "outlier_detection", false);
  public get outlierDetection() {
    return this._outlierDetection;
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
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

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // security_policy - computed: true, optional: false, required: false
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }

  // security_settings - computed: true, optional: false, required: false
  private _securitySettings = new DataGoogleComputeBackendServiceSecuritySettingsList(this, "security_settings", false);
  public get securitySettings() {
    return this._securitySettings;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // session_affinity - computed: true, optional: false, required: false
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }

  // timeout_sec - computed: true, optional: false, required: false
  public get timeoutSec() {
    return this.getNumberAttribute('timeout_sec');
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
