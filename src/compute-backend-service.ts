// https://www.terraform.io/docs/providers/google/r/compute_backend_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeBackendServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Lifetime of cookies in seconds if session_affinity is
GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#affinity_cookie_ttl_sec ComputeBackendService#affinity_cookie_ttl_sec}
  */
  readonly affinityCookieTtlSec?: number;
  /**
  * Time for which instance will be drained (not accept new
connections, but still work to finish started).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#connection_draining_timeout_sec ComputeBackendService#connection_draining_timeout_sec}
  */
  readonly connectionDrainingTimeoutSec?: number;
  /**
  * Headers that the HTTP/S load balancer should add to proxied
requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#custom_request_headers ComputeBackendService#custom_request_headers}
  */
  readonly customRequestHeaders?: string[];
  /**
  * Headers that the HTTP/S load balancer should add to proxied
responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#custom_response_headers ComputeBackendService#custom_response_headers}
  */
  readonly customResponseHeaders?: string[];
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#description ComputeBackendService#description}
  */
  readonly description?: string;
  /**
  * If true, enable Cloud CDN for this BackendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#enable_cdn ComputeBackendService#enable_cdn}
  */
  readonly enableCdn?: boolean | cdktf.IResolvable;
  /**
  * The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource
for health checking this BackendService. Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

For internal load balancing, a URL to a HealthCheck resource must be specified instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#health_checks ComputeBackendService#health_checks}
  */
  readonly healthChecks?: string[];
  /**
  * Indicates whether the backend service will be used with internal or
external load balancing. A backend service created for one type of
load balancing cannot be used with the other. Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#load_balancing_scheme ComputeBackendService#load_balancing_scheme}
  */
  readonly loadBalancingScheme?: string;
  /**
  * The load balancing algorithm used within the scope of the locality.
The possible values are -

* ROUND_ROBIN - This is a simple policy in which each healthy backend
                is selected in round robin order.

* LEAST_REQUEST - An O(1) algorithm which selects two random healthy
                  hosts and picks the host which has fewer active requests.

* RING_HASH - The ring/modulo hash load balancer implements consistent
              hashing to backends. The algorithm has the property that the
              addition/removal of a host from a set of N hosts only affects
              1/N of the requests.

* RANDOM - The load balancer selects a random healthy host.

* ORIGINAL_DESTINATION - Backend host is selected based on the client
                         connection metadata, i.e., connections are opened
                         to the same address as the destination address of
                         the incoming connection before the connection
                         was redirected to the load balancer.

* MAGLEV - used as a drop in replacement for the ring hash load balancer.
           Maglev is not as stable as ring hash but has faster table lookup
           build times and host selection times. For more information about
           Maglev, refer to https://ai.google/research/pubs/pub44824

This field is applicable only when the load_balancing_scheme is set to
INTERNAL_SELF_MANAGED. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#locality_lb_policy ComputeBackendService#locality_lb_policy}
  */
  readonly localityLbPolicy?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#name ComputeBackendService#name}
  */
  readonly name: string;
  /**
  * Name of backend port. The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#port_name ComputeBackendService#port_name}
  */
  readonly portName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#project ComputeBackendService#project}
  */
  readonly project?: string;
  /**
  * The protocol this BackendService uses to communicate with backends.
The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "GRPC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#protocol ComputeBackendService#protocol}
  */
  readonly protocol?: string;
  /**
  * The security policy associated with this backend service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#security_policy ComputeBackendService#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#session_affinity ComputeBackendService#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * How many seconds to wait for the backend before considering it a
failed request. Default is 30 seconds. Valid range is [1, 86400].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#timeout_sec ComputeBackendService#timeout_sec}
  */
  readonly timeoutSec?: number;
  /**
  * backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#backend ComputeBackendService#backend}
  */
  readonly backend?: ComputeBackendServiceBackend[];
  /**
  * cdn_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#cdn_policy ComputeBackendService#cdn_policy}
  */
  readonly cdnPolicy?: ComputeBackendServiceCdnPolicy;
  /**
  * circuit_breakers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#circuit_breakers ComputeBackendService#circuit_breakers}
  */
  readonly circuitBreakers?: ComputeBackendServiceCircuitBreakers;
  /**
  * consistent_hash block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#consistent_hash ComputeBackendService#consistent_hash}
  */
  readonly consistentHash?: ComputeBackendServiceConsistentHash;
  /**
  * iap block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#iap ComputeBackendService#iap}
  */
  readonly iap?: ComputeBackendServiceIap;
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#log_config ComputeBackendService#log_config}
  */
  readonly logConfig?: ComputeBackendServiceLogConfig;
  /**
  * outlier_detection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#outlier_detection ComputeBackendService#outlier_detection}
  */
  readonly outlierDetection?: ComputeBackendServiceOutlierDetection;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#timeouts ComputeBackendService#timeouts}
  */
  readonly timeouts?: ComputeBackendServiceTimeouts;
}
export interface ComputeBackendServiceBackend {
  /**
  * Specifies the balancing mode for this backend.

For global HTTP(S) or TCP/SSL load balancing, the default is
UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S))
and CONNECTION (for TCP/SSL). Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#balancing_mode ComputeBackendService#balancing_mode}
  */
  readonly balancingMode?: string;
  /**
  * A multiplier applied to the group's maximum servicing capacity
(based on UTILIZATION, RATE or CONNECTION).

Default value is 1, which means the group will serve up to 100%
of its configured capacity (depending on balancingMode). A
setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#capacity_scaler ComputeBackendService#capacity_scaler}
  */
  readonly capacityScaler?: number;
  /**
  * An optional description of this resource.
Provide this property when you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#description ComputeBackendService#description}
  */
  readonly description?: string;
  /**
  * The fully-qualified URL of an Instance Group or Network Endpoint
Group resource. In case of instance group this defines the list
of instances that serve traffic. Member virtual machine
instances from each instance group must live in the same zone as
the instance group itself. No two backends in a backend service
are allowed to use same Instance Group resource.

For Network Endpoint Groups this defines list of endpoints. All
endpoints of Network Endpoint Group must be hosted on instances
located in the same zone as the Network Endpoint Group.

Backend services cannot mix Instance Group and
Network Endpoint Group backends.

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#group ComputeBackendService#group}
  */
  readonly group: string;
  /**
  * The max number of simultaneous connections for the group. Can
be used with either CONNECTION or UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_connections ComputeBackendService#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The max number of simultaneous connections that a single backend
network endpoint can handle. This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either
maxConnections or maxConnectionsPerEndpoint must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_connections_per_endpoint ComputeBackendService#max_connections_per_endpoint}
  */
  readonly maxConnectionsPerEndpoint?: number;
  /**
  * The max number of simultaneous connections that a single
backend instance can handle. This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_connections_per_instance ComputeBackendService#max_connections_per_instance}
  */
  readonly maxConnectionsPerInstance?: number;
  /**
  * The max requests per second (RPS) of the group.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. For RATE mode, either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_rate ComputeBackendService#max_rate}
  */
  readonly maxRate?: number;
  /**
  * The max requests per second (RPS) that a single backend network
endpoint can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_rate_per_endpoint ComputeBackendService#max_rate_per_endpoint}
  */
  readonly maxRatePerEndpoint?: number;
  /**
  * The max requests per second (RPS) that a single backend
instance can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_rate_per_instance ComputeBackendService#max_rate_per_instance}
  */
  readonly maxRatePerInstance?: number;
  /**
  * Used when balancingMode is UTILIZATION. This ratio defines the
CPU utilization target for the group. Valid range is [0.0, 1.0].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_utilization ComputeBackendService#max_utilization}
  */
  readonly maxUtilization?: number;
}

export function computeBackendServiceBackendToTerraform(struct?: ComputeBackendServiceBackend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balancing_mode: cdktf.stringToTerraform(struct!.balancingMode),
    capacity_scaler: cdktf.numberToTerraform(struct!.capacityScaler),
    description: cdktf.stringToTerraform(struct!.description),
    group: cdktf.stringToTerraform(struct!.group),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_connections_per_endpoint: cdktf.numberToTerraform(struct!.maxConnectionsPerEndpoint),
    max_connections_per_instance: cdktf.numberToTerraform(struct!.maxConnectionsPerInstance),
    max_rate: cdktf.numberToTerraform(struct!.maxRate),
    max_rate_per_endpoint: cdktf.numberToTerraform(struct!.maxRatePerEndpoint),
    max_rate_per_instance: cdktf.numberToTerraform(struct!.maxRatePerInstance),
    max_utilization: cdktf.numberToTerraform(struct!.maxUtilization),
  }
}

export interface ComputeBackendServiceCdnPolicyCacheKeyPolicy {
  /**
  * If true requests to different hosts will be cached separately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#include_host ComputeBackendService#include_host}
  */
  readonly includeHost?: boolean | cdktf.IResolvable;
  /**
  * If true, http and https requests will be cached separately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#include_protocol ComputeBackendService#include_protocol}
  */
  readonly includeProtocol?: boolean | cdktf.IResolvable;
  /**
  * If true, include query string parameters in the cache key
according to query_string_whitelist and
query_string_blacklist. If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#include_query_string ComputeBackendService#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktf.IResolvable;
  /**
  * Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#query_string_blacklist ComputeBackendService#query_string_blacklist}
  */
  readonly queryStringBlacklist?: string[];
  /**
  * Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#query_string_whitelist ComputeBackendService#query_string_whitelist}
  */
  readonly queryStringWhitelist?: string[];
}

export function computeBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct?: ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference | ComputeBackendServiceCdnPolicyCacheKeyPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_host: cdktf.booleanToTerraform(struct!.includeHost),
    include_protocol: cdktf.booleanToTerraform(struct!.includeProtocol),
    include_query_string: cdktf.booleanToTerraform(struct!.includeQueryString),
    query_string_blacklist: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringBlacklist),
    query_string_whitelist: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringWhitelist),
  }
}

export class ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeBackendServiceCdnPolicyCacheKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHost = this._includeHost;
    }
    if (this._includeProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeProtocol = this._includeProtocol;
    }
    if (this._includeQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQueryString = this._includeQueryString;
    }
    if (this._queryStringBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringBlacklist = this._queryStringBlacklist;
    }
    if (this._queryStringWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringWhitelist = this._queryStringWhitelist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceCdnPolicyCacheKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeHost = undefined;
      this._includeProtocol = undefined;
      this._includeQueryString = undefined;
      this._queryStringBlacklist = undefined;
      this._queryStringWhitelist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeHost = value.includeHost;
      this._includeProtocol = value.includeProtocol;
      this._includeQueryString = value.includeQueryString;
      this._queryStringBlacklist = value.queryStringBlacklist;
      this._queryStringWhitelist = value.queryStringWhitelist;
    }
  }

  // include_host - computed: false, optional: true, required: false
  private _includeHost?: boolean | cdktf.IResolvable; 
  public get includeHost() {
    return this.getBooleanAttribute('include_host') as any;
  }
  public set includeHost(value: boolean | cdktf.IResolvable) {
    this._includeHost = value;
  }
  public resetIncludeHost() {
    this._includeHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHostInput() {
    return this._includeHost;
  }

  // include_protocol - computed: false, optional: true, required: false
  private _includeProtocol?: boolean | cdktf.IResolvable; 
  public get includeProtocol() {
    return this.getBooleanAttribute('include_protocol') as any;
  }
  public set includeProtocol(value: boolean | cdktf.IResolvable) {
    this._includeProtocol = value;
  }
  public resetIncludeProtocol() {
    this._includeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeProtocolInput() {
    return this._includeProtocol;
  }

  // include_query_string - computed: false, optional: true, required: false
  private _includeQueryString?: boolean | cdktf.IResolvable; 
  public get includeQueryString() {
    return this.getBooleanAttribute('include_query_string') as any;
  }
  public set includeQueryString(value: boolean | cdktf.IResolvable) {
    this._includeQueryString = value;
  }
  public resetIncludeQueryString() {
    this._includeQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQueryStringInput() {
    return this._includeQueryString;
  }

  // query_string_blacklist - computed: false, optional: true, required: false
  private _queryStringBlacklist?: string[]; 
  public get queryStringBlacklist() {
    return this.getListAttribute('query_string_blacklist');
  }
  public set queryStringBlacklist(value: string[]) {
    this._queryStringBlacklist = value;
  }
  public resetQueryStringBlacklist() {
    this._queryStringBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringBlacklistInput() {
    return this._queryStringBlacklist;
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
export interface ComputeBackendServiceCdnPolicyNegativeCachingPolicy {
  /**
  * The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#code ComputeBackendService#code}
  */
  readonly code?: number;
  /**
  * The TTL (in seconds) for which to cache responses with the corresponding status code. The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#ttl ComputeBackendService#ttl}
  */
  readonly ttl?: number;
}

export function computeBackendServiceCdnPolicyNegativeCachingPolicyToTerraform(struct?: ComputeBackendServiceCdnPolicyNegativeCachingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export interface ComputeBackendServiceCdnPolicy {
  /**
  * Specifies the cache setting for all responses from this backend.
The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#cache_mode ComputeBackendService#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#client_ttl ComputeBackendService#client_ttl}
  */
  readonly clientTtl?: number;
  /**
  * Specifies the default TTL for cached content served by this origin for responses
that do not have an existing valid TTL (max-age or s-max-age).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#default_ttl ComputeBackendService#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_ttl ComputeBackendService#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#negative_caching ComputeBackendService#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktf.IResolvable;
  /**
  * Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#serve_while_stale ComputeBackendService#serve_while_stale}
  */
  readonly serveWhileStale?: number;
  /**
  * Maximum number of seconds the response to a signed URL request
will be considered fresh, defaults to 1hr (3600s). After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#signed_url_cache_max_age_sec ComputeBackendService#signed_url_cache_max_age_sec}
  */
  readonly signedUrlCacheMaxAgeSec?: number;
  /**
  * cache_key_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#cache_key_policy ComputeBackendService#cache_key_policy}
  */
  readonly cacheKeyPolicy?: ComputeBackendServiceCdnPolicyCacheKeyPolicy;
  /**
  * negative_caching_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#negative_caching_policy ComputeBackendService#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: ComputeBackendServiceCdnPolicyNegativeCachingPolicy[];
}

export function computeBackendServiceCdnPolicyToTerraform(struct?: ComputeBackendServiceCdnPolicyOutputReference | ComputeBackendServiceCdnPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_mode: cdktf.stringToTerraform(struct!.cacheMode),
    client_ttl: cdktf.numberToTerraform(struct!.clientTtl),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    negative_caching: cdktf.booleanToTerraform(struct!.negativeCaching),
    serve_while_stale: cdktf.numberToTerraform(struct!.serveWhileStale),
    signed_url_cache_max_age_sec: cdktf.numberToTerraform(struct!.signedUrlCacheMaxAgeSec),
    cache_key_policy: computeBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct!.cacheKeyPolicy),
    negative_caching_policy: cdktf.listMapper(computeBackendServiceCdnPolicyNegativeCachingPolicyToTerraform)(struct!.negativeCachingPolicy),
  }
}

export class ComputeBackendServiceCdnPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeBackendServiceCdnPolicy | undefined {
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
    if (this._serveWhileStale !== undefined) {
      hasAnyValues = true;
      internalValueResult.serveWhileStale = this._serveWhileStale;
    }
    if (this._signedUrlCacheMaxAgeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.signedUrlCacheMaxAgeSec = this._signedUrlCacheMaxAgeSec;
    }
    if (this._cacheKeyPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyPolicy = this._cacheKeyPolicy?.internalValue;
    }
    if (this._negativeCachingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCachingPolicy = this._negativeCachingPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceCdnPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheMode = undefined;
      this._clientTtl = undefined;
      this._defaultTtl = undefined;
      this._maxTtl = undefined;
      this._negativeCaching = undefined;
      this._serveWhileStale = undefined;
      this._signedUrlCacheMaxAgeSec = undefined;
      this._cacheKeyPolicy.internalValue = undefined;
      this._negativeCachingPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheMode = value.cacheMode;
      this._clientTtl = value.clientTtl;
      this._defaultTtl = value.defaultTtl;
      this._maxTtl = value.maxTtl;
      this._negativeCaching = value.negativeCaching;
      this._serveWhileStale = value.serveWhileStale;
      this._signedUrlCacheMaxAgeSec = value.signedUrlCacheMaxAgeSec;
      this._cacheKeyPolicy.internalValue = value.cacheKeyPolicy;
      this._negativeCachingPolicy = value.negativeCachingPolicy;
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
    return this.getBooleanAttribute('negative_caching') as any;
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

  // cache_key_policy - computed: false, optional: true, required: false
  private _cacheKeyPolicy = new ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference(this as any, "cache_key_policy", true);
  public get cacheKeyPolicy() {
    return this._cacheKeyPolicy;
  }
  public putCacheKeyPolicy(value: ComputeBackendServiceCdnPolicyCacheKeyPolicy) {
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
  private _negativeCachingPolicy?: ComputeBackendServiceCdnPolicyNegativeCachingPolicy[]; 
  public get negativeCachingPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('negative_caching_policy') as any;
  }
  public set negativeCachingPolicy(value: ComputeBackendServiceCdnPolicyNegativeCachingPolicy[]) {
    this._negativeCachingPolicy = value;
  }
  public resetNegativeCachingPolicy() {
    this._negativeCachingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingPolicyInput() {
    return this._negativeCachingPolicy;
  }
}
export interface ComputeBackendServiceCircuitBreakers {
  /**
  * The maximum number of connections to the backend cluster.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_connections ComputeBackendService#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The maximum number of pending requests to the backend cluster.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_pending_requests ComputeBackendService#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * The maximum number of parallel requests to the backend cluster.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_requests ComputeBackendService#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Maximum requests for a single backend connection. This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_requests_per_connection ComputeBackendService#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * The maximum number of parallel retries to the backend cluster.
Defaults to 3.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_retries ComputeBackendService#max_retries}
  */
  readonly maxRetries?: number;
}

export function computeBackendServiceCircuitBreakersToTerraform(struct?: ComputeBackendServiceCircuitBreakersOutputReference | ComputeBackendServiceCircuitBreakers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    max_requests_per_connection: cdktf.numberToTerraform(struct!.maxRequestsPerConnection),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
  }
}

export class ComputeBackendServiceCircuitBreakersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeBackendServiceCircuitBreakers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    if (this._maxRequestsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerConnection = this._maxRequestsPerConnection;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceCircuitBreakers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
      this._maxRequests = undefined;
      this._maxRequestsPerConnection = undefined;
      this._maxRetries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
      this._maxRequests = value.maxRequests;
      this._maxRequestsPerConnection = value.maxRequestsPerConnection;
      this._maxRetries = value.maxRetries;
    }
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }

  // max_requests - computed: false, optional: true, required: false
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  public resetMaxRequests() {
    this._maxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }

  // max_requests_per_connection - computed: false, optional: true, required: false
  private _maxRequestsPerConnection?: number; 
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }
  public set maxRequestsPerConnection(value: number) {
    this._maxRequestsPerConnection = value;
  }
  public resetMaxRequestsPerConnection() {
    this._maxRequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerConnectionInput() {
    return this._maxRequestsPerConnection;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }
}
export interface ComputeBackendServiceConsistentHashHttpCookieTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond
resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#nanos ComputeBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
Must be from 0 to 315,576,000,000 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#seconds ComputeBackendService#seconds}
  */
  readonly seconds: number;
}

export function computeBackendServiceConsistentHashHttpCookieTtlToTerraform(struct?: ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference | ComputeBackendServiceConsistentHashHttpCookieTtl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeBackendServiceConsistentHashHttpCookieTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceConsistentHashHttpCookieTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeBackendServiceConsistentHashHttpCookie {
  /**
  * Name of the cookie.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#name ComputeBackendService#name}
  */
  readonly name?: string;
  /**
  * Path to set for the cookie.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#path ComputeBackendService#path}
  */
  readonly path?: string;
  /**
  * ttl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#ttl ComputeBackendService#ttl}
  */
  readonly ttl?: ComputeBackendServiceConsistentHashHttpCookieTtl;
}

export function computeBackendServiceConsistentHashHttpCookieToTerraform(struct?: ComputeBackendServiceConsistentHashHttpCookieOutputReference | ComputeBackendServiceConsistentHashHttpCookie): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: computeBackendServiceConsistentHashHttpCookieTtlToTerraform(struct!.ttl),
  }
}

export class ComputeBackendServiceConsistentHashHttpCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeBackendServiceConsistentHashHttpCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ttl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceConsistentHashHttpCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._path = undefined;
      this._ttl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._path = value.path;
      this._ttl.internalValue = value.ttl;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl = new ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference(this as any, "ttl", true);
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: ComputeBackendServiceConsistentHashHttpCookieTtl) {
    this._ttl.internalValue = value;
  }
  public resetTtl() {
    this._ttl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
  }
}
export interface ComputeBackendServiceConsistentHash {
  /**
  * The hash based on the value of the specified header field.
This field is applicable if the sessionAffinity is set to HEADER_FIELD.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#http_header_name ComputeBackendService#http_header_name}
  */
  readonly httpHeaderName?: string;
  /**
  * The minimum number of virtual nodes to use for the hash ring.
Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#minimum_ring_size ComputeBackendService#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
  /**
  * http_cookie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#http_cookie ComputeBackendService#http_cookie}
  */
  readonly httpCookie?: ComputeBackendServiceConsistentHashHttpCookie;
}

export function computeBackendServiceConsistentHashToTerraform(struct?: ComputeBackendServiceConsistentHashOutputReference | ComputeBackendServiceConsistentHash): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
    http_cookie: computeBackendServiceConsistentHashHttpCookieToTerraform(struct!.httpCookie),
  }
}

export class ComputeBackendServiceConsistentHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeBackendServiceConsistentHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderName = this._httpHeaderName;
    }
    if (this._minimumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRingSize = this._minimumRingSize;
    }
    if (this._httpCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceConsistentHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpHeaderName = undefined;
      this._minimumRingSize = undefined;
      this._httpCookie.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpHeaderName = value.httpHeaderName;
      this._minimumRingSize = value.minimumRingSize;
      this._httpCookie.internalValue = value.httpCookie;
    }
  }

  // http_header_name - computed: false, optional: true, required: false
  private _httpHeaderName?: string; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string) {
    this._httpHeaderName = value;
  }
  public resetHttpHeaderName() {
    this._httpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName;
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize;
  }

  // http_cookie - computed: false, optional: true, required: false
  private _httpCookie = new ComputeBackendServiceConsistentHashHttpCookieOutputReference(this as any, "http_cookie", true);
  public get httpCookie() {
    return this._httpCookie;
  }
  public putHttpCookie(value: ComputeBackendServiceConsistentHashHttpCookie) {
    this._httpCookie.internalValue = value;
  }
  public resetHttpCookie() {
    this._httpCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie.internalValue;
  }
}
export interface ComputeBackendServiceIap {
  /**
  * OAuth2 Client ID for IAP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#oauth2_client_id ComputeBackendService#oauth2_client_id}
  */
  readonly oauth2ClientId: string;
  /**
  * OAuth2 Client Secret for IAP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#oauth2_client_secret ComputeBackendService#oauth2_client_secret}
  */
  readonly oauth2ClientSecret: string;
}

export function computeBackendServiceIapToTerraform(struct?: ComputeBackendServiceIapOutputReference | ComputeBackendServiceIap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_client_secret: cdktf.stringToTerraform(struct!.oauth2ClientSecret),
  }
}

export class ComputeBackendServiceIapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeBackendServiceIap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauth2ClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientId = this._oauth2ClientId;
    }
    if (this._oauth2ClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientSecret = this._oauth2ClientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceIap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauth2ClientId = undefined;
      this._oauth2ClientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauth2ClientId = value.oauth2ClientId;
      this._oauth2ClientSecret = value.oauth2ClientSecret;
    }
  }

  // oauth2_client_id - computed: false, optional: false, required: true
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_client_secret - computed: false, optional: false, required: true
  private _oauth2ClientSecret?: string; 
  public get oauth2ClientSecret() {
    return this.getStringAttribute('oauth2_client_secret');
  }
  public set oauth2ClientSecret(value: string) {
    this._oauth2ClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientSecretInput() {
    return this._oauth2ClientSecret;
  }
}
export interface ComputeBackendServiceLogConfig {
  /**
  * Whether to enable logging for the load balancer traffic served by this backend service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#enable ComputeBackendService#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * This field can only be specified if logging is enabled for this backend service. The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#sample_rate ComputeBackendService#sample_rate}
  */
  readonly sampleRate?: number;
}

export function computeBackendServiceLogConfigToTerraform(struct?: ComputeBackendServiceLogConfigOutputReference | ComputeBackendServiceLogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}

export class ComputeBackendServiceLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeBackendServiceLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._sampleRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._sampleRate = value.sampleRate;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable') as any;
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // sample_rate - computed: false, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }
}
export interface ComputeBackendServiceOutlierDetectionBaseEjectionTime {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#nanos ComputeBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#seconds ComputeBackendService#seconds}
  */
  readonly seconds: number;
}

export function computeBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct?: ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference | ComputeBackendServiceOutlierDetectionBaseEjectionTime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeBackendServiceOutlierDetectionBaseEjectionTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceOutlierDetectionBaseEjectionTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeBackendServiceOutlierDetectionInterval {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#nanos ComputeBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#seconds ComputeBackendService#seconds}
  */
  readonly seconds: number;
}

export function computeBackendServiceOutlierDetectionIntervalToTerraform(struct?: ComputeBackendServiceOutlierDetectionIntervalOutputReference | ComputeBackendServiceOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class ComputeBackendServiceOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeBackendServiceOutlierDetectionInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceOutlierDetectionInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeBackendServiceOutlierDetection {
  /**
  * Number of errors before a host is ejected from the connection pool. When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#consecutive_errors ComputeBackendService#consecutive_errors}
  */
  readonly consecutiveErrors?: number;
  /**
  * The number of consecutive gateway failures (502, 503, 504 status or connection
errors that are mapped to one of those status codes) before a consecutive
gateway failure ejection occurs. Defaults to 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#consecutive_gateway_failure ComputeBackendService#consecutive_gateway_failure}
  */
  readonly consecutiveGatewayFailure?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive 5xx. This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#enforcing_consecutive_errors ComputeBackendService#enforcing_consecutive_errors}
  */
  readonly enforcingConsecutiveErrors?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive gateway failures. This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#enforcing_consecutive_gateway_failure ComputeBackendService#enforcing_consecutive_gateway_failure}
  */
  readonly enforcingConsecutiveGatewayFailure?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
status is detected through success rate statistics. This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#enforcing_success_rate ComputeBackendService#enforcing_success_rate}
  */
  readonly enforcingSuccessRate?: number;
  /**
  * Maximum percentage of hosts in the load balancing pool for the backend service
that can be ejected. Defaults to 10%.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#max_ejection_percent ComputeBackendService#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * The number of hosts in a cluster that must have enough request volume to detect
success rate outliers. If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#success_rate_minimum_hosts ComputeBackendService#success_rate_minimum_hosts}
  */
  readonly successRateMinimumHosts?: number;
  /**
  * The minimum number of total requests that must be collected in one interval (as
defined by the interval duration above) to include this host in success rate
based outlier detection. If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#success_rate_request_volume ComputeBackendService#success_rate_request_volume}
  */
  readonly successRateRequestVolume?: number;
  /**
  * This factor is used to determine the ejection threshold for success rate outlier
ejection. The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#success_rate_stdev_factor ComputeBackendService#success_rate_stdev_factor}
  */
  readonly successRateStdevFactor?: number;
  /**
  * base_ejection_time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#base_ejection_time ComputeBackendService#base_ejection_time}
  */
  readonly baseEjectionTime?: ComputeBackendServiceOutlierDetectionBaseEjectionTime;
  /**
  * interval block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#interval ComputeBackendService#interval}
  */
  readonly interval?: ComputeBackendServiceOutlierDetectionInterval;
}

export function computeBackendServiceOutlierDetectionToTerraform(struct?: ComputeBackendServiceOutlierDetectionOutputReference | ComputeBackendServiceOutlierDetection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_errors: cdktf.numberToTerraform(struct!.consecutiveErrors),
    consecutive_gateway_failure: cdktf.numberToTerraform(struct!.consecutiveGatewayFailure),
    enforcing_consecutive_errors: cdktf.numberToTerraform(struct!.enforcingConsecutiveErrors),
    enforcing_consecutive_gateway_failure: cdktf.numberToTerraform(struct!.enforcingConsecutiveGatewayFailure),
    enforcing_success_rate: cdktf.numberToTerraform(struct!.enforcingSuccessRate),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    success_rate_minimum_hosts: cdktf.numberToTerraform(struct!.successRateMinimumHosts),
    success_rate_request_volume: cdktf.numberToTerraform(struct!.successRateRequestVolume),
    success_rate_stdev_factor: cdktf.numberToTerraform(struct!.successRateStdevFactor),
    base_ejection_time: computeBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct!.baseEjectionTime),
    interval: computeBackendServiceOutlierDetectionIntervalToTerraform(struct!.interval),
  }
}

export class ComputeBackendServiceOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeBackendServiceOutlierDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveErrors = this._consecutiveErrors;
    }
    if (this._consecutiveGatewayFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveGatewayFailure = this._consecutiveGatewayFailure;
    }
    if (this._enforcingConsecutiveErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcingConsecutiveErrors = this._enforcingConsecutiveErrors;
    }
    if (this._enforcingConsecutiveGatewayFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcingConsecutiveGatewayFailure = this._enforcingConsecutiveGatewayFailure;
    }
    if (this._enforcingSuccessRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcingSuccessRate = this._enforcingSuccessRate;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._successRateMinimumHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.successRateMinimumHosts = this._successRateMinimumHosts;
    }
    if (this._successRateRequestVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.successRateRequestVolume = this._successRateRequestVolume;
    }
    if (this._successRateStdevFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.successRateStdevFactor = this._successRateStdevFactor;
    }
    if (this._baseEjectionTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime?.internalValue;
    }
    if (this._interval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceOutlierDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consecutiveErrors = undefined;
      this._consecutiveGatewayFailure = undefined;
      this._enforcingConsecutiveErrors = undefined;
      this._enforcingConsecutiveGatewayFailure = undefined;
      this._enforcingSuccessRate = undefined;
      this._maxEjectionPercent = undefined;
      this._successRateMinimumHosts = undefined;
      this._successRateRequestVolume = undefined;
      this._successRateStdevFactor = undefined;
      this._baseEjectionTime.internalValue = undefined;
      this._interval.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consecutiveErrors = value.consecutiveErrors;
      this._consecutiveGatewayFailure = value.consecutiveGatewayFailure;
      this._enforcingConsecutiveErrors = value.enforcingConsecutiveErrors;
      this._enforcingConsecutiveGatewayFailure = value.enforcingConsecutiveGatewayFailure;
      this._enforcingSuccessRate = value.enforcingSuccessRate;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._successRateMinimumHosts = value.successRateMinimumHosts;
      this._successRateRequestVolume = value.successRateRequestVolume;
      this._successRateStdevFactor = value.successRateStdevFactor;
      this._baseEjectionTime.internalValue = value.baseEjectionTime;
      this._interval.internalValue = value.interval;
    }
  }

  // consecutive_errors - computed: false, optional: true, required: false
  private _consecutiveErrors?: number; 
  public get consecutiveErrors() {
    return this.getNumberAttribute('consecutive_errors');
  }
  public set consecutiveErrors(value: number) {
    this._consecutiveErrors = value;
  }
  public resetConsecutiveErrors() {
    this._consecutiveErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveErrorsInput() {
    return this._consecutiveErrors;
  }

  // consecutive_gateway_failure - computed: false, optional: true, required: false
  private _consecutiveGatewayFailure?: number; 
  public get consecutiveGatewayFailure() {
    return this.getNumberAttribute('consecutive_gateway_failure');
  }
  public set consecutiveGatewayFailure(value: number) {
    this._consecutiveGatewayFailure = value;
  }
  public resetConsecutiveGatewayFailure() {
    this._consecutiveGatewayFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveGatewayFailureInput() {
    return this._consecutiveGatewayFailure;
  }

  // enforcing_consecutive_errors - computed: false, optional: true, required: false
  private _enforcingConsecutiveErrors?: number; 
  public get enforcingConsecutiveErrors() {
    return this.getNumberAttribute('enforcing_consecutive_errors');
  }
  public set enforcingConsecutiveErrors(value: number) {
    this._enforcingConsecutiveErrors = value;
  }
  public resetEnforcingConsecutiveErrors() {
    this._enforcingConsecutiveErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingConsecutiveErrorsInput() {
    return this._enforcingConsecutiveErrors;
  }

  // enforcing_consecutive_gateway_failure - computed: false, optional: true, required: false
  private _enforcingConsecutiveGatewayFailure?: number; 
  public get enforcingConsecutiveGatewayFailure() {
    return this.getNumberAttribute('enforcing_consecutive_gateway_failure');
  }
  public set enforcingConsecutiveGatewayFailure(value: number) {
    this._enforcingConsecutiveGatewayFailure = value;
  }
  public resetEnforcingConsecutiveGatewayFailure() {
    this._enforcingConsecutiveGatewayFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingConsecutiveGatewayFailureInput() {
    return this._enforcingConsecutiveGatewayFailure;
  }

  // enforcing_success_rate - computed: false, optional: true, required: false
  private _enforcingSuccessRate?: number; 
  public get enforcingSuccessRate() {
    return this.getNumberAttribute('enforcing_success_rate');
  }
  public set enforcingSuccessRate(value: number) {
    this._enforcingSuccessRate = value;
  }
  public resetEnforcingSuccessRate() {
    this._enforcingSuccessRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingSuccessRateInput() {
    return this._enforcingSuccessRate;
  }

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // success_rate_minimum_hosts - computed: false, optional: true, required: false
  private _successRateMinimumHosts?: number; 
  public get successRateMinimumHosts() {
    return this.getNumberAttribute('success_rate_minimum_hosts');
  }
  public set successRateMinimumHosts(value: number) {
    this._successRateMinimumHosts = value;
  }
  public resetSuccessRateMinimumHosts() {
    this._successRateMinimumHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRateMinimumHostsInput() {
    return this._successRateMinimumHosts;
  }

  // success_rate_request_volume - computed: false, optional: true, required: false
  private _successRateRequestVolume?: number; 
  public get successRateRequestVolume() {
    return this.getNumberAttribute('success_rate_request_volume');
  }
  public set successRateRequestVolume(value: number) {
    this._successRateRequestVolume = value;
  }
  public resetSuccessRateRequestVolume() {
    this._successRateRequestVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRateRequestVolumeInput() {
    return this._successRateRequestVolume;
  }

  // success_rate_stdev_factor - computed: false, optional: true, required: false
  private _successRateStdevFactor?: number; 
  public get successRateStdevFactor() {
    return this.getNumberAttribute('success_rate_stdev_factor');
  }
  public set successRateStdevFactor(value: number) {
    this._successRateStdevFactor = value;
  }
  public resetSuccessRateStdevFactor() {
    this._successRateStdevFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRateStdevFactorInput() {
    return this._successRateStdevFactor;
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime = new ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(this as any, "base_ejection_time", true);
  public get baseEjectionTime() {
    return this._baseEjectionTime;
  }
  public putBaseEjectionTime(value: ComputeBackendServiceOutlierDetectionBaseEjectionTime) {
    this._baseEjectionTime.internalValue = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime.internalValue;
  }

  // interval - computed: false, optional: true, required: false
  private _interval = new ComputeBackendServiceOutlierDetectionIntervalOutputReference(this as any, "interval", true);
  public get interval() {
    return this._interval;
  }
  public putInterval(value: ComputeBackendServiceOutlierDetectionInterval) {
    this._interval.internalValue = value;
  }
  public resetInterval() {
    this._interval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval.internalValue;
  }
}
export interface ComputeBackendServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#create ComputeBackendService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#delete ComputeBackendService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service#update ComputeBackendService#update}
  */
  readonly update?: string;
}

export function computeBackendServiceTimeoutsToTerraform(struct?: ComputeBackendServiceTimeoutsOutputReference | ComputeBackendServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComputeBackendServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeBackendServiceTimeouts | undefined {
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

  public set internalValue(value: ComputeBackendServiceTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service google_compute_backend_service}
*/
export class ComputeBackendService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_backend_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service google_compute_backend_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeBackendServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeBackendServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_backend_service',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._affinityCookieTtlSec = config.affinityCookieTtlSec;
    this._connectionDrainingTimeoutSec = config.connectionDrainingTimeoutSec;
    this._customRequestHeaders = config.customRequestHeaders;
    this._customResponseHeaders = config.customResponseHeaders;
    this._description = config.description;
    this._enableCdn = config.enableCdn;
    this._healthChecks = config.healthChecks;
    this._loadBalancingScheme = config.loadBalancingScheme;
    this._localityLbPolicy = config.localityLbPolicy;
    this._name = config.name;
    this._portName = config.portName;
    this._project = config.project;
    this._protocol = config.protocol;
    this._securityPolicy = config.securityPolicy;
    this._sessionAffinity = config.sessionAffinity;
    this._timeoutSec = config.timeoutSec;
    this._backend = config.backend;
    this._cdnPolicy.internalValue = config.cdnPolicy;
    this._circuitBreakers.internalValue = config.circuitBreakers;
    this._consistentHash.internalValue = config.consistentHash;
    this._iap.internalValue = config.iap;
    this._logConfig.internalValue = config.logConfig;
    this._outlierDetection.internalValue = config.outlierDetection;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_cookie_ttl_sec - computed: false, optional: true, required: false
  private _affinityCookieTtlSec?: number; 
  public get affinityCookieTtlSec() {
    return this.getNumberAttribute('affinity_cookie_ttl_sec');
  }
  public set affinityCookieTtlSec(value: number) {
    this._affinityCookieTtlSec = value;
  }
  public resetAffinityCookieTtlSec() {
    this._affinityCookieTtlSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityCookieTtlSecInput() {
    return this._affinityCookieTtlSec;
  }

  // connection_draining_timeout_sec - computed: false, optional: true, required: false
  private _connectionDrainingTimeoutSec?: number; 
  public get connectionDrainingTimeoutSec() {
    return this.getNumberAttribute('connection_draining_timeout_sec');
  }
  public set connectionDrainingTimeoutSec(value: number) {
    this._connectionDrainingTimeoutSec = value;
  }
  public resetConnectionDrainingTimeoutSec() {
    this._connectionDrainingTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainingTimeoutSecInput() {
    return this._connectionDrainingTimeoutSec;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // custom_request_headers - computed: false, optional: true, required: false
  private _customRequestHeaders?: string[]; 
  public get customRequestHeaders() {
    return this.getListAttribute('custom_request_headers');
  }
  public set customRequestHeaders(value: string[]) {
    this._customRequestHeaders = value;
  }
  public resetCustomRequestHeaders() {
    this._customRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHeadersInput() {
    return this._customRequestHeaders;
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

  // enable_cdn - computed: false, optional: true, required: false
  private _enableCdn?: boolean | cdktf.IResolvable; 
  public get enableCdn() {
    return this.getBooleanAttribute('enable_cdn') as any;
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

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks?: string[]; 
  public get healthChecks() {
    return this.getListAttribute('health_checks');
  }
  public set healthChecks(value: string[]) {
    this._healthChecks = value;
  }
  public resetHealthChecks() {
    this._healthChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancing_scheme - computed: false, optional: true, required: false
  private _loadBalancingScheme?: string; 
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string) {
    this._loadBalancingScheme = value;
  }
  public resetLoadBalancingScheme() {
    this._loadBalancingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingSchemeInput() {
    return this._loadBalancingScheme;
  }

  // locality_lb_policy - computed: false, optional: true, required: false
  private _localityLbPolicy?: string; 
  public get localityLbPolicy() {
    return this.getStringAttribute('locality_lb_policy');
  }
  public set localityLbPolicy(value: string) {
    this._localityLbPolicy = value;
  }
  public resetLocalityLbPolicy() {
    this._localityLbPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityLbPolicyInput() {
    return this._localityLbPolicy;
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

  // port_name - computed: true, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // security_policy - computed: false, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // session_affinity - computed: true, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // timeout_sec - computed: true, optional: true, required: false
  private _timeoutSec?: number; 
  public get timeoutSec() {
    return this.getNumberAttribute('timeout_sec');
  }
  public set timeoutSec(value: number) {
    this._timeoutSec = value;
  }
  public resetTimeoutSec() {
    this._timeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecInput() {
    return this._timeoutSec;
  }

  // backend - computed: false, optional: true, required: false
  private _backend?: ComputeBackendServiceBackend[]; 
  public get backend() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backend') as any;
  }
  public set backend(value: ComputeBackendServiceBackend[]) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // cdn_policy - computed: false, optional: true, required: false
  private _cdnPolicy = new ComputeBackendServiceCdnPolicyOutputReference(this as any, "cdn_policy", true);
  public get cdnPolicy() {
    return this._cdnPolicy;
  }
  public putCdnPolicy(value: ComputeBackendServiceCdnPolicy) {
    this._cdnPolicy.internalValue = value;
  }
  public resetCdnPolicy() {
    this._cdnPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnPolicyInput() {
    return this._cdnPolicy.internalValue;
  }

  // circuit_breakers - computed: false, optional: true, required: false
  private _circuitBreakers = new ComputeBackendServiceCircuitBreakersOutputReference(this as any, "circuit_breakers", true);
  public get circuitBreakers() {
    return this._circuitBreakers;
  }
  public putCircuitBreakers(value: ComputeBackendServiceCircuitBreakers) {
    this._circuitBreakers.internalValue = value;
  }
  public resetCircuitBreakers() {
    this._circuitBreakers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakersInput() {
    return this._circuitBreakers.internalValue;
  }

  // consistent_hash - computed: false, optional: true, required: false
  private _consistentHash = new ComputeBackendServiceConsistentHashOutputReference(this as any, "consistent_hash", true);
  public get consistentHash() {
    return this._consistentHash;
  }
  public putConsistentHash(value: ComputeBackendServiceConsistentHash) {
    this._consistentHash.internalValue = value;
  }
  public resetConsistentHash() {
    this._consistentHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentHashInput() {
    return this._consistentHash.internalValue;
  }

  // iap - computed: false, optional: true, required: false
  private _iap = new ComputeBackendServiceIapOutputReference(this as any, "iap", true);
  public get iap() {
    return this._iap;
  }
  public putIap(value: ComputeBackendServiceIap) {
    this._iap.internalValue = value;
  }
  public resetIap() {
    this._iap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iapInput() {
    return this._iap.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new ComputeBackendServiceLogConfigOutputReference(this as any, "log_config", true);
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: ComputeBackendServiceLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new ComputeBackendServiceOutlierDetectionOutputReference(this as any, "outlier_detection", true);
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: ComputeBackendServiceOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeBackendServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeBackendServiceTimeouts) {
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
      affinity_cookie_ttl_sec: cdktf.numberToTerraform(this._affinityCookieTtlSec),
      connection_draining_timeout_sec: cdktf.numberToTerraform(this._connectionDrainingTimeoutSec),
      custom_request_headers: cdktf.listMapper(cdktf.stringToTerraform)(this._customRequestHeaders),
      custom_response_headers: cdktf.listMapper(cdktf.stringToTerraform)(this._customResponseHeaders),
      description: cdktf.stringToTerraform(this._description),
      enable_cdn: cdktf.booleanToTerraform(this._enableCdn),
      health_checks: cdktf.listMapper(cdktf.stringToTerraform)(this._healthChecks),
      load_balancing_scheme: cdktf.stringToTerraform(this._loadBalancingScheme),
      locality_lb_policy: cdktf.stringToTerraform(this._localityLbPolicy),
      name: cdktf.stringToTerraform(this._name),
      port_name: cdktf.stringToTerraform(this._portName),
      project: cdktf.stringToTerraform(this._project),
      protocol: cdktf.stringToTerraform(this._protocol),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      timeout_sec: cdktf.numberToTerraform(this._timeoutSec),
      backend: cdktf.listMapper(computeBackendServiceBackendToTerraform)(this._backend),
      cdn_policy: computeBackendServiceCdnPolicyToTerraform(this._cdnPolicy.internalValue),
      circuit_breakers: computeBackendServiceCircuitBreakersToTerraform(this._circuitBreakers.internalValue),
      consistent_hash: computeBackendServiceConsistentHashToTerraform(this._consistentHash.internalValue),
      iap: computeBackendServiceIapToTerraform(this._iap.internalValue),
      log_config: computeBackendServiceLogConfigToTerraform(this._logConfig.internalValue),
      outlier_detection: computeBackendServiceOutlierDetectionToTerraform(this._outlierDetection.internalValue),
      timeouts: computeBackendServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
