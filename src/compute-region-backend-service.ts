// https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionBackendServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Lifetime of cookies in seconds if session_affinity is
GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#affinity_cookie_ttl_sec ComputeRegionBackendService#affinity_cookie_ttl_sec}
  */
  readonly affinityCookieTtlSec?: number;
  /**
  * Time for which instance will be drained (not accept new
connections, but still work to finish started).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#connection_draining_timeout_sec ComputeRegionBackendService#connection_draining_timeout_sec}
  */
  readonly connectionDrainingTimeoutSec?: number;
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#description ComputeRegionBackendService#description}
  */
  readonly description?: string;
  /**
  * If true, enable Cloud CDN for this RegionBackendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#enable_cdn ComputeRegionBackendService#enable_cdn}
  */
  readonly enableCdn?: boolean | cdktf.IResolvable;
  /**
  * The set of URLs to HealthCheck resources for health checking
this RegionBackendService. Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#health_checks ComputeRegionBackendService#health_checks}
  */
  readonly healthChecks?: string[];
  /**
  * Indicates what kind of load balancing this regional backend service
will be used for. A backend service created for one type of load
balancing cannot be used with the other(s). Default value: "INTERNAL" Possible values: ["EXTERNAL", "INTERNAL", "INTERNAL_MANAGED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#load_balancing_scheme ComputeRegionBackendService#load_balancing_scheme}
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

This field is applicable only when the 'load_balancing_scheme' is set to
INTERNAL_MANAGED and the 'protocol' is set to HTTP, HTTPS, or HTTP2. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#locality_lb_policy ComputeRegionBackendService#locality_lb_policy}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#name ComputeRegionBackendService#name}
  */
  readonly name: string;
  /**
  * The URL of the network to which this backend service belongs.
This field can only be specified when the load balancing scheme is set to INTERNAL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#network ComputeRegionBackendService#network}
  */
  readonly network?: string;
  /**
  * A named port on a backend instance group representing the port for
communication to the backend VMs in that group. Required when the
loadBalancingScheme is EXTERNAL, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#port_name ComputeRegionBackendService#port_name}
  */
  readonly portName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#project ComputeRegionBackendService#project}
  */
  readonly project?: string;
  /**
  * The protocol this RegionBackendService uses to communicate with backends.
The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. Possible values: ["HTTP", "HTTPS", "HTTP2", "SSL", "TCP", "UDP", "GRPC", "UNSPECIFIED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#protocol ComputeRegionBackendService#protocol}
  */
  readonly protocol?: string;
  /**
  * The Region in which the created backend service should reside.
If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#region ComputeRegionBackendService#region}
  */
  readonly region?: string;
  /**
  * Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "CLIENT_IP_NO_DESTINATION"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#session_affinity ComputeRegionBackendService#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * How many seconds to wait for the backend before considering it a
failed request. Default is 30 seconds. Valid range is [1, 86400].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#timeout_sec ComputeRegionBackendService#timeout_sec}
  */
  readonly timeoutSec?: number;
  /**
  * backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#backend ComputeRegionBackendService#backend}
  */
  readonly backend?: ComputeRegionBackendServiceBackend[];
  /**
  * cdn_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#cdn_policy ComputeRegionBackendService#cdn_policy}
  */
  readonly cdnPolicy?: ComputeRegionBackendServiceCdnPolicy;
  /**
  * circuit_breakers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#circuit_breakers ComputeRegionBackendService#circuit_breakers}
  */
  readonly circuitBreakers?: ComputeRegionBackendServiceCircuitBreakers;
  /**
  * consistent_hash block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#consistent_hash ComputeRegionBackendService#consistent_hash}
  */
  readonly consistentHash?: ComputeRegionBackendServiceConsistentHash;
  /**
  * failover_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#failover_policy ComputeRegionBackendService#failover_policy}
  */
  readonly failoverPolicy?: ComputeRegionBackendServiceFailoverPolicy;
  /**
  * iap block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#iap ComputeRegionBackendService#iap}
  */
  readonly iap?: ComputeRegionBackendServiceIap;
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#log_config ComputeRegionBackendService#log_config}
  */
  readonly logConfig?: ComputeRegionBackendServiceLogConfig;
  /**
  * outlier_detection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#outlier_detection ComputeRegionBackendService#outlier_detection}
  */
  readonly outlierDetection?: ComputeRegionBackendServiceOutlierDetection;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#timeouts ComputeRegionBackendService#timeouts}
  */
  readonly timeouts?: ComputeRegionBackendServiceTimeouts;
}
export interface ComputeRegionBackendServiceBackend {
  /**
  * Specifies the balancing mode for this backend. Default value: "CONNECTION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#balancing_mode ComputeRegionBackendService#balancing_mode}
  */
  readonly balancingMode?: string;
  /**
  * A multiplier applied to the group's maximum servicing capacity
(based on UTILIZATION, RATE or CONNECTION).

~>**NOTE**: This field cannot be set for
INTERNAL region backend services (default loadBalancingScheme),
but is required for non-INTERNAL backend service. The total
capacity_scaler for all backends must be non-zero.

A setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#capacity_scaler ComputeRegionBackendService#capacity_scaler}
  */
  readonly capacityScaler?: number;
  /**
  * An optional description of this resource.
Provide this property when you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#description ComputeRegionBackendService#description}
  */
  readonly description?: string;
  /**
  * This field designates whether this is a failover backend. More
than one failover backend can be configured for a given RegionBackendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#failover ComputeRegionBackendService#failover}
  */
  readonly failover?: boolean | cdktf.IResolvable;
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

When the 'load_balancing_scheme' is INTERNAL, only instance groups
are supported.

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#group ComputeRegionBackendService#group}
  */
  readonly group: string;
  /**
  * The max number of simultaneous connections for the group. Can
be used with either CONNECTION or UTILIZATION balancing modes.
Cannot be set for INTERNAL backend services.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_connections ComputeRegionBackendService#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The max number of simultaneous connections that a single backend
network endpoint can handle. Cannot be set
for INTERNAL backend services.

This is used to calculate the capacity of the group. Can be
used in either CONNECTION or UTILIZATION balancing modes. For
CONNECTION mode, either maxConnections or
maxConnectionsPerEndpoint must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_connections_per_endpoint ComputeRegionBackendService#max_connections_per_endpoint}
  */
  readonly maxConnectionsPerEndpoint?: number;
  /**
  * The max number of simultaneous connections that a single
backend instance can handle. Cannot be set for INTERNAL backend
services.

This is used to calculate the capacity of the group.
Can be used in either CONNECTION or UTILIZATION balancing modes.
For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_connections_per_instance ComputeRegionBackendService#max_connections_per_instance}
  */
  readonly maxConnectionsPerInstance?: number;
  /**
  * The max requests per second (RPS) of the group. Cannot be set
for INTERNAL backend services.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. Either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_rate ComputeRegionBackendService#max_rate}
  */
  readonly maxRate?: number;
  /**
  * The max requests per second (RPS) that a single backend network
endpoint can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set. Cannot be set
for INTERNAL backend services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_rate_per_endpoint ComputeRegionBackendService#max_rate_per_endpoint}
  */
  readonly maxRatePerEndpoint?: number;
  /**
  * The max requests per second (RPS) that a single backend
instance can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set. Cannot be set
for INTERNAL backend services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_rate_per_instance ComputeRegionBackendService#max_rate_per_instance}
  */
  readonly maxRatePerInstance?: number;
  /**
  * Used when balancingMode is UTILIZATION. This ratio defines the
CPU utilization target for the group. Valid range is [0.0, 1.0].
Cannot be set for INTERNAL backend services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_utilization ComputeRegionBackendService#max_utilization}
  */
  readonly maxUtilization?: number;
}

function computeRegionBackendServiceBackendToTerraform(struct?: ComputeRegionBackendServiceBackend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balancing_mode: cdktf.stringToTerraform(struct!.balancingMode),
    capacity_scaler: cdktf.numberToTerraform(struct!.capacityScaler),
    description: cdktf.stringToTerraform(struct!.description),
    failover: cdktf.booleanToTerraform(struct!.failover),
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

export interface ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy {
  /**
  * If true requests to different hosts will be cached separately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#include_host ComputeRegionBackendService#include_host}
  */
  readonly includeHost?: boolean | cdktf.IResolvable;
  /**
  * If true, http and https requests will be cached separately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#include_protocol ComputeRegionBackendService#include_protocol}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#include_query_string ComputeRegionBackendService#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktf.IResolvable;
  /**
  * Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#query_string_blacklist ComputeRegionBackendService#query_string_blacklist}
  */
  readonly queryStringBlacklist?: string[];
  /**
  * Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#query_string_whitelist ComputeRegionBackendService#query_string_whitelist}
  */
  readonly queryStringWhitelist?: string[];
}

function computeRegionBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct?: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference | ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy): any {
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

export class ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // include_host - computed: false, optional: true, required: false
  private _includeHost?: boolean | cdktf.IResolvable | undefined; 
  public get includeHost() {
    return this.getBooleanAttribute('include_host') as any;
  }
  public set includeHost(value: boolean | cdktf.IResolvable | undefined) {
    this._includeHost = value;
  }
  public resetIncludeHost() {
    this._includeHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHostInput() {
    return this._includeHost
  }

  // include_protocol - computed: false, optional: true, required: false
  private _includeProtocol?: boolean | cdktf.IResolvable | undefined; 
  public get includeProtocol() {
    return this.getBooleanAttribute('include_protocol') as any;
  }
  public set includeProtocol(value: boolean | cdktf.IResolvable | undefined) {
    this._includeProtocol = value;
  }
  public resetIncludeProtocol() {
    this._includeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeProtocolInput() {
    return this._includeProtocol
  }

  // include_query_string - computed: false, optional: true, required: false
  private _includeQueryString?: boolean | cdktf.IResolvable | undefined; 
  public get includeQueryString() {
    return this.getBooleanAttribute('include_query_string') as any;
  }
  public set includeQueryString(value: boolean | cdktf.IResolvable | undefined) {
    this._includeQueryString = value;
  }
  public resetIncludeQueryString() {
    this._includeQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQueryStringInput() {
    return this._includeQueryString
  }

  // query_string_blacklist - computed: false, optional: true, required: false
  private _queryStringBlacklist?: string[] | undefined; 
  public get queryStringBlacklist() {
    return this.getListAttribute('query_string_blacklist');
  }
  public set queryStringBlacklist(value: string[] | undefined) {
    this._queryStringBlacklist = value;
  }
  public resetQueryStringBlacklist() {
    this._queryStringBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringBlacklistInput() {
    return this._queryStringBlacklist
  }

  // query_string_whitelist - computed: false, optional: true, required: false
  private _queryStringWhitelist?: string[] | undefined; 
  public get queryStringWhitelist() {
    return this.getListAttribute('query_string_whitelist');
  }
  public set queryStringWhitelist(value: string[] | undefined) {
    this._queryStringWhitelist = value;
  }
  public resetQueryStringWhitelist() {
    this._queryStringWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringWhitelistInput() {
    return this._queryStringWhitelist
  }
}
export interface ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy {
  /**
  * The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#code ComputeRegionBackendService#code}
  */
  readonly code?: number;
}

function computeRegionBackendServiceCdnPolicyNegativeCachingPolicyToTerraform(struct?: ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
  }
}

export interface ComputeRegionBackendServiceCdnPolicy {
  /**
  * Specifies the cache setting for all responses from this backend.
The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#cache_mode ComputeRegionBackendService#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#client_ttl ComputeRegionBackendService#client_ttl}
  */
  readonly clientTtl?: number;
  /**
  * Specifies the default TTL for cached content served by this origin for responses
that do not have an existing valid TTL (max-age or s-max-age).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#default_ttl ComputeRegionBackendService#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_ttl ComputeRegionBackendService#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#negative_caching ComputeRegionBackendService#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktf.IResolvable;
  /**
  * Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#serve_while_stale ComputeRegionBackendService#serve_while_stale}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#signed_url_cache_max_age_sec ComputeRegionBackendService#signed_url_cache_max_age_sec}
  */
  readonly signedUrlCacheMaxAgeSec?: number;
  /**
  * cache_key_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#cache_key_policy ComputeRegionBackendService#cache_key_policy}
  */
  readonly cacheKeyPolicy?: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy;
  /**
  * negative_caching_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#negative_caching_policy ComputeRegionBackendService#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[];
}

function computeRegionBackendServiceCdnPolicyToTerraform(struct?: ComputeRegionBackendServiceCdnPolicyOutputReference | ComputeRegionBackendServiceCdnPolicy): any {
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
    cache_key_policy: computeRegionBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct!.cacheKeyPolicy),
    negative_caching_policy: cdktf.listMapper(computeRegionBackendServiceCdnPolicyNegativeCachingPolicyToTerraform)(struct!.negativeCachingPolicy),
  }
}

export class ComputeRegionBackendServiceCdnPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cache_mode - computed: true, optional: true, required: false
  private _cacheMode?: string | undefined; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string | undefined) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode
  }

  // client_ttl - computed: true, optional: true, required: false
  private _clientTtl?: number | undefined; 
  public get clientTtl() {
    return this.getNumberAttribute('client_ttl');
  }
  public set clientTtl(value: number | undefined) {
    this._clientTtl = value;
  }
  public resetClientTtl() {
    this._clientTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTtlInput() {
    return this._clientTtl
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: number | undefined; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number | undefined) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl
  }

  // max_ttl - computed: true, optional: true, required: false
  private _maxTtl?: number | undefined; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number | undefined) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl
  }

  // negative_caching - computed: true, optional: true, required: false
  private _negativeCaching?: boolean | cdktf.IResolvable | undefined; 
  public get negativeCaching() {
    return this.getBooleanAttribute('negative_caching') as any;
  }
  public set negativeCaching(value: boolean | cdktf.IResolvable | undefined) {
    this._negativeCaching = value;
  }
  public resetNegativeCaching() {
    this._negativeCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingInput() {
    return this._negativeCaching
  }

  // serve_while_stale - computed: true, optional: true, required: false
  private _serveWhileStale?: number | undefined; 
  public get serveWhileStale() {
    return this.getNumberAttribute('serve_while_stale');
  }
  public set serveWhileStale(value: number | undefined) {
    this._serveWhileStale = value;
  }
  public resetServeWhileStale() {
    this._serveWhileStale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveWhileStaleInput() {
    return this._serveWhileStale
  }

  // signed_url_cache_max_age_sec - computed: false, optional: true, required: false
  private _signedUrlCacheMaxAgeSec?: number | undefined; 
  public get signedUrlCacheMaxAgeSec() {
    return this.getNumberAttribute('signed_url_cache_max_age_sec');
  }
  public set signedUrlCacheMaxAgeSec(value: number | undefined) {
    this._signedUrlCacheMaxAgeSec = value;
  }
  public resetSignedUrlCacheMaxAgeSec() {
    this._signedUrlCacheMaxAgeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedUrlCacheMaxAgeSecInput() {
    return this._signedUrlCacheMaxAgeSec
  }

  // cache_key_policy - computed: false, optional: true, required: false
  private _cacheKeyPolicy?: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy | undefined; 
  private __cacheKeyPolicyOutput = new ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference(this as any, "cache_key_policy", true);
  public get cacheKeyPolicy() {
    return this.__cacheKeyPolicyOutput;
  }
  public putCacheKeyPolicy(value: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy | undefined) {
    this._cacheKeyPolicy = value;
  }
  public resetCacheKeyPolicy() {
    this._cacheKeyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyPolicyInput() {
    return this._cacheKeyPolicy
  }

  // negative_caching_policy - computed: false, optional: true, required: false
  private _negativeCachingPolicy?: ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[] | undefined; 
  public get negativeCachingPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('negative_caching_policy') as any;
  }
  public set negativeCachingPolicy(value: ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[] | undefined) {
    this._negativeCachingPolicy = value;
  }
  public resetNegativeCachingPolicy() {
    this._negativeCachingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingPolicyInput() {
    return this._negativeCachingPolicy
  }
}
export interface ComputeRegionBackendServiceCircuitBreakers {
  /**
  * The maximum number of connections to the backend cluster.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_connections ComputeRegionBackendService#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The maximum number of pending requests to the backend cluster.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_pending_requests ComputeRegionBackendService#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * The maximum number of parallel requests to the backend cluster.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_requests ComputeRegionBackendService#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Maximum requests for a single backend connection. This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_requests_per_connection ComputeRegionBackendService#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * The maximum number of parallel retries to the backend cluster.
Defaults to 3.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_retries ComputeRegionBackendService#max_retries}
  */
  readonly maxRetries?: number;
}

function computeRegionBackendServiceCircuitBreakersToTerraform(struct?: ComputeRegionBackendServiceCircuitBreakersOutputReference | ComputeRegionBackendServiceCircuitBreakers): any {
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

export class ComputeRegionBackendServiceCircuitBreakersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number | undefined; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number | undefined) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number | undefined; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number | undefined) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests
  }

  // max_requests - computed: false, optional: true, required: false
  private _maxRequests?: number | undefined; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number | undefined) {
    this._maxRequests = value;
  }
  public resetMaxRequests() {
    this._maxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests
  }

  // max_requests_per_connection - computed: false, optional: true, required: false
  private _maxRequestsPerConnection?: number | undefined; 
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }
  public set maxRequestsPerConnection(value: number | undefined) {
    this._maxRequestsPerConnection = value;
  }
  public resetMaxRequestsPerConnection() {
    this._maxRequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerConnectionInput() {
    return this._maxRequestsPerConnection
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number | undefined; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries
  }
}
export interface ComputeRegionBackendServiceConsistentHashHttpCookieTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond
resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#nanos ComputeRegionBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
Must be from 0 to 315,576,000,000 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#seconds ComputeRegionBackendService#seconds}
  */
  readonly seconds: number;
}

function computeRegionBackendServiceConsistentHashHttpCookieTtlToTerraform(struct?: ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference | ComputeRegionBackendServiceConsistentHashHttpCookieTtl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
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
    return this._seconds
  }
}
export interface ComputeRegionBackendServiceConsistentHashHttpCookie {
  /**
  * Name of the cookie.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#name ComputeRegionBackendService#name}
  */
  readonly name?: string;
  /**
  * Path to set for the cookie.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#path ComputeRegionBackendService#path}
  */
  readonly path?: string;
  /**
  * ttl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#ttl ComputeRegionBackendService#ttl}
  */
  readonly ttl?: ComputeRegionBackendServiceConsistentHashHttpCookieTtl;
}

function computeRegionBackendServiceConsistentHashHttpCookieToTerraform(struct?: ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference | ComputeRegionBackendServiceConsistentHashHttpCookie): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: computeRegionBackendServiceConsistentHashHttpCookieTtlToTerraform(struct!.ttl),
  }
}

export class ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: ComputeRegionBackendServiceConsistentHashHttpCookieTtl | undefined; 
  private __ttlOutput = new ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference(this as any, "ttl", true);
  public get ttl() {
    return this.__ttlOutput;
  }
  public putTtl(value: ComputeRegionBackendServiceConsistentHashHttpCookieTtl | undefined) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl
  }
}
export interface ComputeRegionBackendServiceConsistentHash {
  /**
  * The hash based on the value of the specified header field.
This field is applicable if the sessionAffinity is set to HEADER_FIELD.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#http_header_name ComputeRegionBackendService#http_header_name}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#minimum_ring_size ComputeRegionBackendService#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
  /**
  * http_cookie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#http_cookie ComputeRegionBackendService#http_cookie}
  */
  readonly httpCookie?: ComputeRegionBackendServiceConsistentHashHttpCookie;
}

function computeRegionBackendServiceConsistentHashToTerraform(struct?: ComputeRegionBackendServiceConsistentHashOutputReference | ComputeRegionBackendServiceConsistentHash): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
    http_cookie: computeRegionBackendServiceConsistentHashHttpCookieToTerraform(struct!.httpCookie),
  }
}

export class ComputeRegionBackendServiceConsistentHashOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // http_header_name - computed: false, optional: true, required: false
  private _httpHeaderName?: string | undefined; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string | undefined) {
    this._httpHeaderName = value;
  }
  public resetHttpHeaderName() {
    this._httpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number | undefined; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number | undefined) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize
  }

  // http_cookie - computed: false, optional: true, required: false
  private _httpCookie?: ComputeRegionBackendServiceConsistentHashHttpCookie | undefined; 
  private __httpCookieOutput = new ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference(this as any, "http_cookie", true);
  public get httpCookie() {
    return this.__httpCookieOutput;
  }
  public putHttpCookie(value: ComputeRegionBackendServiceConsistentHashHttpCookie | undefined) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie
  }
}
export interface ComputeRegionBackendServiceFailoverPolicy {
  /**
  * On failover or failback, this field indicates whether connection drain
will be honored. Setting this to true has the following effect: connections
to the old active pool are not drained. Connections to the new active pool
use the timeout of 10 min (currently fixed). Setting to false has the
following effect: both old and new connections will have a drain timeout
of 10 min.
This can be set to true only if the protocol is TCP.
The default is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#disable_connection_drain_on_failover ComputeRegionBackendService#disable_connection_drain_on_failover}
  */
  readonly disableConnectionDrainOnFailover?: boolean | cdktf.IResolvable;
  /**
  * This option is used only when no healthy VMs are detected in the primary
and backup instance groups. When set to true, traffic is dropped. When
set to false, new connections are sent across all VMs in the primary group.
The default is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#drop_traffic_if_unhealthy ComputeRegionBackendService#drop_traffic_if_unhealthy}
  */
  readonly dropTrafficIfUnhealthy?: boolean | cdktf.IResolvable;
  /**
  * The value of the field must be in [0, 1]. If the ratio of the healthy
VMs in the primary backend is at or below this number, traffic arriving
at the load-balanced IP will be directed to the failover backend.
In case where 'failoverRatio' is not set or all the VMs in the backup
backend are unhealthy, the traffic will be directed back to the primary
backend in the "force" mode, where traffic will be spread to the healthy
VMs with the best effort, or to all VMs when no VM is healthy.
This field is only used with l4 load balancing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#failover_ratio ComputeRegionBackendService#failover_ratio}
  */
  readonly failoverRatio?: number;
}

function computeRegionBackendServiceFailoverPolicyToTerraform(struct?: ComputeRegionBackendServiceFailoverPolicyOutputReference | ComputeRegionBackendServiceFailoverPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_connection_drain_on_failover: cdktf.booleanToTerraform(struct!.disableConnectionDrainOnFailover),
    drop_traffic_if_unhealthy: cdktf.booleanToTerraform(struct!.dropTrafficIfUnhealthy),
    failover_ratio: cdktf.numberToTerraform(struct!.failoverRatio),
  }
}

export class ComputeRegionBackendServiceFailoverPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // disable_connection_drain_on_failover - computed: false, optional: true, required: false
  private _disableConnectionDrainOnFailover?: boolean | cdktf.IResolvable | undefined; 
  public get disableConnectionDrainOnFailover() {
    return this.getBooleanAttribute('disable_connection_drain_on_failover') as any;
  }
  public set disableConnectionDrainOnFailover(value: boolean | cdktf.IResolvable | undefined) {
    this._disableConnectionDrainOnFailover = value;
  }
  public resetDisableConnectionDrainOnFailover() {
    this._disableConnectionDrainOnFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConnectionDrainOnFailoverInput() {
    return this._disableConnectionDrainOnFailover
  }

  // drop_traffic_if_unhealthy - computed: false, optional: true, required: false
  private _dropTrafficIfUnhealthy?: boolean | cdktf.IResolvable | undefined; 
  public get dropTrafficIfUnhealthy() {
    return this.getBooleanAttribute('drop_traffic_if_unhealthy') as any;
  }
  public set dropTrafficIfUnhealthy(value: boolean | cdktf.IResolvable | undefined) {
    this._dropTrafficIfUnhealthy = value;
  }
  public resetDropTrafficIfUnhealthy() {
    this._dropTrafficIfUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropTrafficIfUnhealthyInput() {
    return this._dropTrafficIfUnhealthy
  }

  // failover_ratio - computed: false, optional: true, required: false
  private _failoverRatio?: number | undefined; 
  public get failoverRatio() {
    return this.getNumberAttribute('failover_ratio');
  }
  public set failoverRatio(value: number | undefined) {
    this._failoverRatio = value;
  }
  public resetFailoverRatio() {
    this._failoverRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverRatioInput() {
    return this._failoverRatio
  }
}
export interface ComputeRegionBackendServiceIap {
  /**
  * OAuth2 Client ID for IAP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#oauth2_client_id ComputeRegionBackendService#oauth2_client_id}
  */
  readonly oauth2ClientId: string;
  /**
  * OAuth2 Client Secret for IAP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#oauth2_client_secret ComputeRegionBackendService#oauth2_client_secret}
  */
  readonly oauth2ClientSecret: string;
}

function computeRegionBackendServiceIapToTerraform(struct?: ComputeRegionBackendServiceIapOutputReference | ComputeRegionBackendServiceIap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_client_secret: cdktf.stringToTerraform(struct!.oauth2ClientSecret),
  }
}

export class ComputeRegionBackendServiceIapOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._oauth2ClientId
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
    return this._oauth2ClientSecret
  }
}
export interface ComputeRegionBackendServiceLogConfig {
  /**
  * Whether to enable logging for the load balancer traffic served by this backend service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#enable ComputeRegionBackendService#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * This field can only be specified if logging is enabled for this backend service. The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#sample_rate ComputeRegionBackendService#sample_rate}
  */
  readonly sampleRate?: number;
}

function computeRegionBackendServiceLogConfigToTerraform(struct?: ComputeRegionBackendServiceLogConfigOutputReference | ComputeRegionBackendServiceLogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}

export class ComputeRegionBackendServiceLogConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable | undefined; 
  public get enable() {
    return this.getBooleanAttribute('enable') as any;
  }
  public set enable(value: boolean | cdktf.IResolvable | undefined) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable
  }

  // sample_rate - computed: false, optional: true, required: false
  private _sampleRate?: number | undefined; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number | undefined) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate
  }
}
export interface ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#nanos ComputeRegionBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#seconds ComputeRegionBackendService#seconds}
  */
  readonly seconds: number;
}

function computeRegionBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct?: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference | ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
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
    return this._seconds
  }
}
export interface ComputeRegionBackendServiceOutlierDetectionInterval {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#nanos ComputeRegionBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#seconds ComputeRegionBackendService#seconds}
  */
  readonly seconds: number;
}

function computeRegionBackendServiceOutlierDetectionIntervalToTerraform(struct?: ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference | ComputeRegionBackendServiceOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
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
    return this._seconds
  }
}
export interface ComputeRegionBackendServiceOutlierDetection {
  /**
  * Number of errors before a host is ejected from the connection pool. When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#consecutive_errors ComputeRegionBackendService#consecutive_errors}
  */
  readonly consecutiveErrors?: number;
  /**
  * The number of consecutive gateway failures (502, 503, 504 status or connection
errors that are mapped to one of those status codes) before a consecutive
gateway failure ejection occurs. Defaults to 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#consecutive_gateway_failure ComputeRegionBackendService#consecutive_gateway_failure}
  */
  readonly consecutiveGatewayFailure?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive 5xx. This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#enforcing_consecutive_errors ComputeRegionBackendService#enforcing_consecutive_errors}
  */
  readonly enforcingConsecutiveErrors?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive gateway failures. This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#enforcing_consecutive_gateway_failure ComputeRegionBackendService#enforcing_consecutive_gateway_failure}
  */
  readonly enforcingConsecutiveGatewayFailure?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
status is detected through success rate statistics. This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#enforcing_success_rate ComputeRegionBackendService#enforcing_success_rate}
  */
  readonly enforcingSuccessRate?: number;
  /**
  * Maximum percentage of hosts in the load balancing pool for the backend service
that can be ejected. Defaults to 10%.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#max_ejection_percent ComputeRegionBackendService#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * The number of hosts in a cluster that must have enough request volume to detect
success rate outliers. If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#success_rate_minimum_hosts ComputeRegionBackendService#success_rate_minimum_hosts}
  */
  readonly successRateMinimumHosts?: number;
  /**
  * The minimum number of total requests that must be collected in one interval (as
defined by the interval duration above) to include this host in success rate
based outlier detection. If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#success_rate_request_volume ComputeRegionBackendService#success_rate_request_volume}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#success_rate_stdev_factor ComputeRegionBackendService#success_rate_stdev_factor}
  */
  readonly successRateStdevFactor?: number;
  /**
  * base_ejection_time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#base_ejection_time ComputeRegionBackendService#base_ejection_time}
  */
  readonly baseEjectionTime?: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime;
  /**
  * interval block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#interval ComputeRegionBackendService#interval}
  */
  readonly interval?: ComputeRegionBackendServiceOutlierDetectionInterval;
}

function computeRegionBackendServiceOutlierDetectionToTerraform(struct?: ComputeRegionBackendServiceOutlierDetectionOutputReference | ComputeRegionBackendServiceOutlierDetection): any {
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
    base_ejection_time: computeRegionBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct!.baseEjectionTime),
    interval: computeRegionBackendServiceOutlierDetectionIntervalToTerraform(struct!.interval),
  }
}

export class ComputeRegionBackendServiceOutlierDetectionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // consecutive_errors - computed: false, optional: true, required: false
  private _consecutiveErrors?: number | undefined; 
  public get consecutiveErrors() {
    return this.getNumberAttribute('consecutive_errors');
  }
  public set consecutiveErrors(value: number | undefined) {
    this._consecutiveErrors = value;
  }
  public resetConsecutiveErrors() {
    this._consecutiveErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveErrorsInput() {
    return this._consecutiveErrors
  }

  // consecutive_gateway_failure - computed: false, optional: true, required: false
  private _consecutiveGatewayFailure?: number | undefined; 
  public get consecutiveGatewayFailure() {
    return this.getNumberAttribute('consecutive_gateway_failure');
  }
  public set consecutiveGatewayFailure(value: number | undefined) {
    this._consecutiveGatewayFailure = value;
  }
  public resetConsecutiveGatewayFailure() {
    this._consecutiveGatewayFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveGatewayFailureInput() {
    return this._consecutiveGatewayFailure
  }

  // enforcing_consecutive_errors - computed: false, optional: true, required: false
  private _enforcingConsecutiveErrors?: number | undefined; 
  public get enforcingConsecutiveErrors() {
    return this.getNumberAttribute('enforcing_consecutive_errors');
  }
  public set enforcingConsecutiveErrors(value: number | undefined) {
    this._enforcingConsecutiveErrors = value;
  }
  public resetEnforcingConsecutiveErrors() {
    this._enforcingConsecutiveErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingConsecutiveErrorsInput() {
    return this._enforcingConsecutiveErrors
  }

  // enforcing_consecutive_gateway_failure - computed: false, optional: true, required: false
  private _enforcingConsecutiveGatewayFailure?: number | undefined; 
  public get enforcingConsecutiveGatewayFailure() {
    return this.getNumberAttribute('enforcing_consecutive_gateway_failure');
  }
  public set enforcingConsecutiveGatewayFailure(value: number | undefined) {
    this._enforcingConsecutiveGatewayFailure = value;
  }
  public resetEnforcingConsecutiveGatewayFailure() {
    this._enforcingConsecutiveGatewayFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingConsecutiveGatewayFailureInput() {
    return this._enforcingConsecutiveGatewayFailure
  }

  // enforcing_success_rate - computed: false, optional: true, required: false
  private _enforcingSuccessRate?: number | undefined; 
  public get enforcingSuccessRate() {
    return this.getNumberAttribute('enforcing_success_rate');
  }
  public set enforcingSuccessRate(value: number | undefined) {
    this._enforcingSuccessRate = value;
  }
  public resetEnforcingSuccessRate() {
    this._enforcingSuccessRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingSuccessRateInput() {
    return this._enforcingSuccessRate
  }

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number | undefined; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number | undefined) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent
  }

  // success_rate_minimum_hosts - computed: false, optional: true, required: false
  private _successRateMinimumHosts?: number | undefined; 
  public get successRateMinimumHosts() {
    return this.getNumberAttribute('success_rate_minimum_hosts');
  }
  public set successRateMinimumHosts(value: number | undefined) {
    this._successRateMinimumHosts = value;
  }
  public resetSuccessRateMinimumHosts() {
    this._successRateMinimumHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRateMinimumHostsInput() {
    return this._successRateMinimumHosts
  }

  // success_rate_request_volume - computed: false, optional: true, required: false
  private _successRateRequestVolume?: number | undefined; 
  public get successRateRequestVolume() {
    return this.getNumberAttribute('success_rate_request_volume');
  }
  public set successRateRequestVolume(value: number | undefined) {
    this._successRateRequestVolume = value;
  }
  public resetSuccessRateRequestVolume() {
    this._successRateRequestVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRateRequestVolumeInput() {
    return this._successRateRequestVolume
  }

  // success_rate_stdev_factor - computed: false, optional: true, required: false
  private _successRateStdevFactor?: number | undefined; 
  public get successRateStdevFactor() {
    return this.getNumberAttribute('success_rate_stdev_factor');
  }
  public set successRateStdevFactor(value: number | undefined) {
    this._successRateStdevFactor = value;
  }
  public resetSuccessRateStdevFactor() {
    this._successRateStdevFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRateStdevFactorInput() {
    return this._successRateStdevFactor
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime?: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime | undefined; 
  private __baseEjectionTimeOutput = new ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(this as any, "base_ejection_time", true);
  public get baseEjectionTime() {
    return this.__baseEjectionTimeOutput;
  }
  public putBaseEjectionTime(value: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime | undefined) {
    this._baseEjectionTime = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: ComputeRegionBackendServiceOutlierDetectionInterval | undefined; 
  private __intervalOutput = new ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference(this as any, "interval", true);
  public get interval() {
    return this.__intervalOutput;
  }
  public putInterval(value: ComputeRegionBackendServiceOutlierDetectionInterval | undefined) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval
  }
}
export interface ComputeRegionBackendServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#create ComputeRegionBackendService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#delete ComputeRegionBackendService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html#update ComputeRegionBackendService#update}
  */
  readonly update?: string;
}

function computeRegionBackendServiceTimeoutsToTerraform(struct?: ComputeRegionBackendServiceTimeoutsOutputReference | ComputeRegionBackendServiceTimeouts): any {
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

export class ComputeRegionBackendServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html google_compute_region_backend_service}
*/
export class ComputeRegionBackendService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_region_backend_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html google_compute_region_backend_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRegionBackendServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRegionBackendServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_backend_service',
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
    this._description = config.description;
    this._enableCdn = config.enableCdn;
    this._healthChecks = config.healthChecks;
    this._loadBalancingScheme = config.loadBalancingScheme;
    this._localityLbPolicy = config.localityLbPolicy;
    this._name = config.name;
    this._network = config.network;
    this._portName = config.portName;
    this._project = config.project;
    this._protocol = config.protocol;
    this._region = config.region;
    this._sessionAffinity = config.sessionAffinity;
    this._timeoutSec = config.timeoutSec;
    this._backend = config.backend;
    this._cdnPolicy = config.cdnPolicy;
    this._circuitBreakers = config.circuitBreakers;
    this._consistentHash = config.consistentHash;
    this._failoverPolicy = config.failoverPolicy;
    this._iap = config.iap;
    this._logConfig = config.logConfig;
    this._outlierDetection = config.outlierDetection;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_cookie_ttl_sec - computed: false, optional: true, required: false
  private _affinityCookieTtlSec?: number | undefined; 
  public get affinityCookieTtlSec() {
    return this.getNumberAttribute('affinity_cookie_ttl_sec');
  }
  public set affinityCookieTtlSec(value: number | undefined) {
    this._affinityCookieTtlSec = value;
  }
  public resetAffinityCookieTtlSec() {
    this._affinityCookieTtlSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityCookieTtlSecInput() {
    return this._affinityCookieTtlSec
  }

  // connection_draining_timeout_sec - computed: false, optional: true, required: false
  private _connectionDrainingTimeoutSec?: number | undefined; 
  public get connectionDrainingTimeoutSec() {
    return this.getNumberAttribute('connection_draining_timeout_sec');
  }
  public set connectionDrainingTimeoutSec(value: number | undefined) {
    this._connectionDrainingTimeoutSec = value;
  }
  public resetConnectionDrainingTimeoutSec() {
    this._connectionDrainingTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainingTimeoutSecInput() {
    return this._connectionDrainingTimeoutSec
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // enable_cdn - computed: false, optional: true, required: false
  private _enableCdn?: boolean | cdktf.IResolvable | undefined; 
  public get enableCdn() {
    return this.getBooleanAttribute('enable_cdn') as any;
  }
  public set enableCdn(value: boolean | cdktf.IResolvable | undefined) {
    this._enableCdn = value;
  }
  public resetEnableCdn() {
    this._enableCdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCdnInput() {
    return this._enableCdn
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks?: string[] | undefined; 
  public get healthChecks() {
    return this.getListAttribute('health_checks');
  }
  public set healthChecks(value: string[] | undefined) {
    this._healthChecks = value;
  }
  public resetHealthChecks() {
    this._healthChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancing_scheme - computed: false, optional: true, required: false
  private _loadBalancingScheme?: string | undefined; 
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string | undefined) {
    this._loadBalancingScheme = value;
  }
  public resetLoadBalancingScheme() {
    this._loadBalancingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingSchemeInput() {
    return this._loadBalancingScheme
  }

  // locality_lb_policy - computed: false, optional: true, required: false
  private _localityLbPolicy?: string | undefined; 
  public get localityLbPolicy() {
    return this.getStringAttribute('locality_lb_policy');
  }
  public set localityLbPolicy(value: string | undefined) {
    this._localityLbPolicy = value;
  }
  public resetLocalityLbPolicy() {
    this._localityLbPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityLbPolicyInput() {
    return this._localityLbPolicy
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
    return this._name
  }

  // network - computed: false, optional: true, required: false
  private _network?: string | undefined; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string | undefined) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // port_name - computed: true, optional: true, required: false
  private _portName?: string | undefined; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string | undefined) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string | undefined; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // session_affinity - computed: true, optional: true, required: false
  private _sessionAffinity?: string | undefined; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string | undefined) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity
  }

  // timeout_sec - computed: true, optional: true, required: false
  private _timeoutSec?: number | undefined; 
  public get timeoutSec() {
    return this.getNumberAttribute('timeout_sec');
  }
  public set timeoutSec(value: number | undefined) {
    this._timeoutSec = value;
  }
  public resetTimeoutSec() {
    this._timeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecInput() {
    return this._timeoutSec
  }

  // backend - computed: false, optional: true, required: false
  private _backend?: ComputeRegionBackendServiceBackend[] | undefined; 
  public get backend() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backend') as any;
  }
  public set backend(value: ComputeRegionBackendServiceBackend[] | undefined) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend
  }

  // cdn_policy - computed: false, optional: true, required: false
  private _cdnPolicy?: ComputeRegionBackendServiceCdnPolicy | undefined; 
  private __cdnPolicyOutput = new ComputeRegionBackendServiceCdnPolicyOutputReference(this as any, "cdn_policy", true);
  public get cdnPolicy() {
    return this.__cdnPolicyOutput;
  }
  public putCdnPolicy(value: ComputeRegionBackendServiceCdnPolicy | undefined) {
    this._cdnPolicy = value;
  }
  public resetCdnPolicy() {
    this._cdnPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnPolicyInput() {
    return this._cdnPolicy
  }

  // circuit_breakers - computed: false, optional: true, required: false
  private _circuitBreakers?: ComputeRegionBackendServiceCircuitBreakers | undefined; 
  private __circuitBreakersOutput = new ComputeRegionBackendServiceCircuitBreakersOutputReference(this as any, "circuit_breakers", true);
  public get circuitBreakers() {
    return this.__circuitBreakersOutput;
  }
  public putCircuitBreakers(value: ComputeRegionBackendServiceCircuitBreakers | undefined) {
    this._circuitBreakers = value;
  }
  public resetCircuitBreakers() {
    this._circuitBreakers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakersInput() {
    return this._circuitBreakers
  }

  // consistent_hash - computed: false, optional: true, required: false
  private _consistentHash?: ComputeRegionBackendServiceConsistentHash | undefined; 
  private __consistentHashOutput = new ComputeRegionBackendServiceConsistentHashOutputReference(this as any, "consistent_hash", true);
  public get consistentHash() {
    return this.__consistentHashOutput;
  }
  public putConsistentHash(value: ComputeRegionBackendServiceConsistentHash | undefined) {
    this._consistentHash = value;
  }
  public resetConsistentHash() {
    this._consistentHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentHashInput() {
    return this._consistentHash
  }

  // failover_policy - computed: false, optional: true, required: false
  private _failoverPolicy?: ComputeRegionBackendServiceFailoverPolicy | undefined; 
  private __failoverPolicyOutput = new ComputeRegionBackendServiceFailoverPolicyOutputReference(this as any, "failover_policy", true);
  public get failoverPolicy() {
    return this.__failoverPolicyOutput;
  }
  public putFailoverPolicy(value: ComputeRegionBackendServiceFailoverPolicy | undefined) {
    this._failoverPolicy = value;
  }
  public resetFailoverPolicy() {
    this._failoverPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPolicyInput() {
    return this._failoverPolicy
  }

  // iap - computed: false, optional: true, required: false
  private _iap?: ComputeRegionBackendServiceIap | undefined; 
  private __iapOutput = new ComputeRegionBackendServiceIapOutputReference(this as any, "iap", true);
  public get iap() {
    return this.__iapOutput;
  }
  public putIap(value: ComputeRegionBackendServiceIap | undefined) {
    this._iap = value;
  }
  public resetIap() {
    this._iap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iapInput() {
    return this._iap
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig?: ComputeRegionBackendServiceLogConfig | undefined; 
  private __logConfigOutput = new ComputeRegionBackendServiceLogConfigOutputReference(this as any, "log_config", true);
  public get logConfig() {
    return this.__logConfigOutput;
  }
  public putLogConfig(value: ComputeRegionBackendServiceLogConfig | undefined) {
    this._logConfig = value;
  }
  public resetLogConfig() {
    this._logConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection?: ComputeRegionBackendServiceOutlierDetection | undefined; 
  private __outlierDetectionOutput = new ComputeRegionBackendServiceOutlierDetectionOutputReference(this as any, "outlier_detection", true);
  public get outlierDetection() {
    return this.__outlierDetectionOutput;
  }
  public putOutlierDetection(value: ComputeRegionBackendServiceOutlierDetection | undefined) {
    this._outlierDetection = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionBackendServiceTimeouts | undefined; 
  private __timeoutsOutput = new ComputeRegionBackendServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeRegionBackendServiceTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affinity_cookie_ttl_sec: cdktf.numberToTerraform(this._affinityCookieTtlSec),
      connection_draining_timeout_sec: cdktf.numberToTerraform(this._connectionDrainingTimeoutSec),
      description: cdktf.stringToTerraform(this._description),
      enable_cdn: cdktf.booleanToTerraform(this._enableCdn),
      health_checks: cdktf.listMapper(cdktf.stringToTerraform)(this._healthChecks),
      load_balancing_scheme: cdktf.stringToTerraform(this._loadBalancingScheme),
      locality_lb_policy: cdktf.stringToTerraform(this._localityLbPolicy),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      port_name: cdktf.stringToTerraform(this._portName),
      project: cdktf.stringToTerraform(this._project),
      protocol: cdktf.stringToTerraform(this._protocol),
      region: cdktf.stringToTerraform(this._region),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      timeout_sec: cdktf.numberToTerraform(this._timeoutSec),
      backend: cdktf.listMapper(computeRegionBackendServiceBackendToTerraform)(this._backend),
      cdn_policy: computeRegionBackendServiceCdnPolicyToTerraform(this._cdnPolicy),
      circuit_breakers: computeRegionBackendServiceCircuitBreakersToTerraform(this._circuitBreakers),
      consistent_hash: computeRegionBackendServiceConsistentHashToTerraform(this._consistentHash),
      failover_policy: computeRegionBackendServiceFailoverPolicyToTerraform(this._failoverPolicy),
      iap: computeRegionBackendServiceIapToTerraform(this._iap),
      log_config: computeRegionBackendServiceLogConfigToTerraform(this._logConfig),
      outlier_detection: computeRegionBackendServiceOutlierDetectionToTerraform(this._outlierDetection),
      timeouts: computeRegionBackendServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
