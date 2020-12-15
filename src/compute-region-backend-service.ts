// https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionBackendServiceConfig extends cdktf.TerraformMetaArguments {
  /** Lifetime of cookies in seconds if session_affinity is
GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used. */
  readonly affinityCookieTtlSec?: number;
  /** Time for which instance will be drained (not accept new
connections, but still work to finish started). */
  readonly connectionDrainingTimeoutSec?: number;
  /** An optional description of this resource. */
  readonly description?: string;
  /** If true, enable Cloud CDN for this RegionBackendService. */
  readonly enableCdn?: boolean;
  /** The set of URLs to HealthCheck resources for health checking
this RegionBackendService. Currently at most one health
check can be specified. 

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend. */
  readonly healthChecks?: string[];
  /** Indicates what kind of load balancing this regional backend service
will be used for. A backend service created for one type of load
balancing cannot be used with the other(s). Default value: "INTERNAL" Possible values: ["EXTERNAL", "INTERNAL", "INTERNAL_MANAGED"] */
  readonly loadBalancingScheme?: string;
  /** The load balancing algorithm used within the scope of the locality.
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
INTERNAL_MANAGED and the 'protocol' is set to HTTP, HTTPS, or HTTP2. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"] */
  readonly localityLbPolicy?: string;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  /** The URL of the network to which this backend service belongs.
This field can only be specified when the load balancing scheme is set to INTERNAL. */
  readonly network?: string;
  /** A named port on a backend instance group representing the port for
communication to the backend VMs in that group. Required when the
loadBalancingScheme is EXTERNAL, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing). */
  readonly portName?: string;
  readonly project?: string;
  /** The protocol this RegionBackendService uses to communicate with backends.
The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. Possible values: ["HTTP", "HTTPS", "HTTP2", "SSL", "TCP", "UDP", "GRPC"] */
  readonly protocol?: string;
  /** The Region in which the created backend service should reside.
If it is not provided, the provider region is used. */
  readonly region?: string;
  /** Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE"] */
  readonly sessionAffinity?: string;
  /** How many seconds to wait for the backend before considering it a
failed request. Default is 30 seconds. Valid range is [1, 86400]. */
  readonly timeoutSec?: number;
  /** backend block */
  readonly backend?: ComputeRegionBackendServiceBackend[];
  /** cdn_policy block */
  readonly cdnPolicy?: ComputeRegionBackendServiceCdnPolicy[];
  /** circuit_breakers block */
  readonly circuitBreakers?: ComputeRegionBackendServiceCircuitBreakers[];
  /** consistent_hash block */
  readonly consistentHash?: ComputeRegionBackendServiceConsistentHash[];
  /** failover_policy block */
  readonly failoverPolicy?: ComputeRegionBackendServiceFailoverPolicy[];
  /** log_config block */
  readonly logConfig?: ComputeRegionBackendServiceLogConfig[];
  /** outlier_detection block */
  readonly outlierDetection?: ComputeRegionBackendServiceOutlierDetection[];
  /** timeouts block */
  readonly timeouts?: ComputeRegionBackendServiceTimeouts;
}
export interface ComputeRegionBackendServiceBackend {
  /** Specifies the balancing mode for this backend. Default value: "CONNECTION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"] */
  readonly balancingMode?: string;
  /** A multiplier applied to the group's maximum servicing capacity
(based on UTILIZATION, RATE or CONNECTION).

~>**NOTE**: This field cannot be set for
INTERNAL region backend services (default loadBalancingScheme),
but is required for non-INTERNAL backend service. The total
capacity_scaler for all backends must be non-zero.

A setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0]. */
  readonly capacityScaler?: number;
  /** An optional description of this resource.
Provide this property when you create the resource. */
  readonly description?: string;
  /** This field designates whether this is a failover backend. More
than one failover backend can be configured for a given RegionBackendService. */
  readonly failover?: boolean;
  /** The fully-qualified URL of an Instance Group or Network Endpoint
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
partial URL. */
  readonly group: string;
  /** The max number of simultaneous connections for the group. Can
be used with either CONNECTION or UTILIZATION balancing modes.
Cannot be set for INTERNAL backend services.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set. */
  readonly maxConnections?: number;
  /** The max number of simultaneous connections that a single backend
network endpoint can handle. Cannot be set
for INTERNAL backend services.

This is used to calculate the capacity of the group. Can be
used in either CONNECTION or UTILIZATION balancing modes. For
CONNECTION mode, either maxConnections or
maxConnectionsPerEndpoint must be set. */
  readonly maxConnectionsPerEndpoint?: number;
  /** The max number of simultaneous connections that a single
backend instance can handle. Cannot be set for INTERNAL backend
services.

This is used to calculate the capacity of the group.
Can be used in either CONNECTION or UTILIZATION balancing modes.
For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set. */
  readonly maxConnectionsPerInstance?: number;
  /** The max requests per second (RPS) of the group. Cannot be set
for INTERNAL backend services.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. Either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set. */
  readonly maxRate?: number;
  /** The max requests per second (RPS) that a single backend network
endpoint can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set. Cannot be set
for INTERNAL backend services. */
  readonly maxRatePerEndpoint?: number;
  /** The max requests per second (RPS) that a single backend
instance can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set. Cannot be set
for INTERNAL backend services. */
  readonly maxRatePerInstance?: number;
  /** Used when balancingMode is UTILIZATION. This ratio defines the
CPU utilization target for the group. Valid range is [0.0, 1.0].
Cannot be set for INTERNAL backend services. */
  readonly maxUtilization?: number;
}

function computeRegionBackendServiceBackendToTerraform(struct?: ComputeRegionBackendServiceBackend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /** If true requests to different hosts will be cached separately. */
  readonly includeHost?: boolean;
  /** If true, http and https requests will be cached separately. */
  readonly includeProtocol?: boolean;
  /** If true, include query string parameters in the cache key
according to query_string_whitelist and
query_string_blacklist. If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely. */
  readonly includeQueryString?: boolean;
  /** Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters. */
  readonly queryStringBlacklist?: string[];
  /** Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters. */
  readonly queryStringWhitelist?: string[];
}

function computeRegionBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct?: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    include_host: cdktf.booleanToTerraform(struct!.includeHost),
    include_protocol: cdktf.booleanToTerraform(struct!.includeProtocol),
    include_query_string: cdktf.booleanToTerraform(struct!.includeQueryString),
    query_string_blacklist: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringBlacklist),
    query_string_whitelist: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringWhitelist),
  }
}

export interface ComputeRegionBackendServiceCdnPolicy {
  /** Maximum number of seconds the response to a signed URL request
will be considered fresh, defaults to 1hr (3600s). After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered. */
  readonly signedUrlCacheMaxAgeSec?: number;
  /** cache_key_policy block */
  readonly cacheKeyPolicy?: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy[];
}

function computeRegionBackendServiceCdnPolicyToTerraform(struct?: ComputeRegionBackendServiceCdnPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    signed_url_cache_max_age_sec: cdktf.numberToTerraform(struct!.signedUrlCacheMaxAgeSec),
    cache_key_policy: cdktf.listMapper(computeRegionBackendServiceCdnPolicyCacheKeyPolicyToTerraform)(struct!.cacheKeyPolicy),
  }
}

export interface ComputeRegionBackendServiceCircuitBreakers {
  /** The maximum number of connections to the backend cluster.
Defaults to 1024. */
  readonly maxConnections?: number;
  /** The maximum number of pending requests to the backend cluster.
Defaults to 1024. */
  readonly maxPendingRequests?: number;
  /** The maximum number of parallel requests to the backend cluster.
Defaults to 1024. */
  readonly maxRequests?: number;
  /** Maximum requests for a single backend connection. This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive. */
  readonly maxRequestsPerConnection?: number;
  /** The maximum number of parallel retries to the backend cluster.
Defaults to 3. */
  readonly maxRetries?: number;
}

function computeRegionBackendServiceCircuitBreakersToTerraform(struct?: ComputeRegionBackendServiceCircuitBreakers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    max_requests_per_connection: cdktf.numberToTerraform(struct!.maxRequestsPerConnection),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
  }
}

export interface ComputeRegionBackendServiceConsistentHashHttpCookieTtl {
  /** Span of time that's a fraction of a second at nanosecond
resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second.
Must be from 0 to 315,576,000,000 inclusive. */
  readonly seconds: number;
}

function computeRegionBackendServiceConsistentHashHttpCookieTtlToTerraform(struct?: ComputeRegionBackendServiceConsistentHashHttpCookieTtl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export interface ComputeRegionBackendServiceConsistentHashHttpCookie {
  /** Name of the cookie. */
  readonly name?: string;
  /** Path to set for the cookie. */
  readonly path?: string;
  /** ttl block */
  readonly ttl?: ComputeRegionBackendServiceConsistentHashHttpCookieTtl[];
}

function computeRegionBackendServiceConsistentHashHttpCookieToTerraform(struct?: ComputeRegionBackendServiceConsistentHashHttpCookie): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: cdktf.listMapper(computeRegionBackendServiceConsistentHashHttpCookieTtlToTerraform)(struct!.ttl),
  }
}

export interface ComputeRegionBackendServiceConsistentHash {
  /** The hash based on the value of the specified header field.
This field is applicable if the sessionAffinity is set to HEADER_FIELD. */
  readonly httpHeaderName?: string;
  /** The minimum number of virtual nodes to use for the hash ring.
Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024. */
  readonly minimumRingSize?: number;
  /** http_cookie block */
  readonly httpCookie?: ComputeRegionBackendServiceConsistentHashHttpCookie[];
}

function computeRegionBackendServiceConsistentHashToTerraform(struct?: ComputeRegionBackendServiceConsistentHash): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
    http_cookie: cdktf.listMapper(computeRegionBackendServiceConsistentHashHttpCookieToTerraform)(struct!.httpCookie),
  }
}

export interface ComputeRegionBackendServiceFailoverPolicy {
  /** On failover or failback, this field indicates whether connection drain
will be honored. Setting this to true has the following effect: connections
to the old active pool are not drained. Connections to the new active pool
use the timeout of 10 min (currently fixed). Setting to false has the
following effect: both old and new connections will have a drain timeout
of 10 min.
This can be set to true only if the protocol is TCP.
The default is false. */
  readonly disableConnectionDrainOnFailover?: boolean;
  /** This option is used only when no healthy VMs are detected in the primary
and backup instance groups. When set to true, traffic is dropped. When
set to false, new connections are sent across all VMs in the primary group.
The default is false. */
  readonly dropTrafficIfUnhealthy?: boolean;
  /** The value of the field must be in [0, 1]. If the ratio of the healthy
VMs in the primary backend is at or below this number, traffic arriving
at the load-balanced IP will be directed to the failover backend.
In case where 'failoverRatio' is not set or all the VMs in the backup
backend are unhealthy, the traffic will be directed back to the primary
backend in the "force" mode, where traffic will be spread to the healthy
VMs with the best effort, or to all VMs when no VM is healthy.
This field is only used with l4 load balancing. */
  readonly failoverRatio?: number;
}

function computeRegionBackendServiceFailoverPolicyToTerraform(struct?: ComputeRegionBackendServiceFailoverPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_connection_drain_on_failover: cdktf.booleanToTerraform(struct!.disableConnectionDrainOnFailover),
    drop_traffic_if_unhealthy: cdktf.booleanToTerraform(struct!.dropTrafficIfUnhealthy),
    failover_ratio: cdktf.numberToTerraform(struct!.failoverRatio),
  }
}

export interface ComputeRegionBackendServiceLogConfig {
  /** Whether to enable logging for the load balancer traffic served by this backend service. */
  readonly enable?: boolean;
  /** This field can only be specified if logging is enabled for this backend service. The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0. */
  readonly sampleRate?: number;
}

function computeRegionBackendServiceLogConfigToTerraform(struct?: ComputeRegionBackendServiceLogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}

export interface ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: number;
}

function computeRegionBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct?: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export interface ComputeRegionBackendServiceOutlierDetectionInterval {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: number;
}

function computeRegionBackendServiceOutlierDetectionIntervalToTerraform(struct?: ComputeRegionBackendServiceOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export interface ComputeRegionBackendServiceOutlierDetection {
  /** Number of errors before a host is ejected from the connection pool. When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5. */
  readonly consecutiveErrors?: number;
  /** The number of consecutive gateway failures (502, 503, 504 status or connection
errors that are mapped to one of those status codes) before a consecutive
gateway failure ejection occurs. Defaults to 5. */
  readonly consecutiveGatewayFailure?: number;
  /** The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive 5xx. This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100. */
  readonly enforcingConsecutiveErrors?: number;
  /** The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive gateway failures. This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0. */
  readonly enforcingConsecutiveGatewayFailure?: number;
  /** The percentage chance that a host will be actually ejected when an outlier
status is detected through success rate statistics. This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100. */
  readonly enforcingSuccessRate?: number;
  /** Maximum percentage of hosts in the load balancing pool for the backend service
that can be ejected. Defaults to 10%. */
  readonly maxEjectionPercent?: number;
  /** The number of hosts in a cluster that must have enough request volume to detect
success rate outliers. If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5. */
  readonly successRateMinimumHosts?: number;
  /** The minimum number of total requests that must be collected in one interval (as
defined by the interval duration above) to include this host in success rate
based outlier detection. If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100. */
  readonly successRateRequestVolume?: number;
  /** This factor is used to determine the ejection threshold for success rate outlier
ejection. The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900. */
  readonly successRateStdevFactor?: number;
  /** base_ejection_time block */
  readonly baseEjectionTime?: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime[];
  /** interval block */
  readonly interval?: ComputeRegionBackendServiceOutlierDetectionInterval[];
}

function computeRegionBackendServiceOutlierDetectionToTerraform(struct?: ComputeRegionBackendServiceOutlierDetection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    base_ejection_time: cdktf.listMapper(computeRegionBackendServiceOutlierDetectionBaseEjectionTimeToTerraform)(struct!.baseEjectionTime),
    interval: cdktf.listMapper(computeRegionBackendServiceOutlierDetectionIntervalToTerraform)(struct!.interval),
  }
}

export interface ComputeRegionBackendServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeRegionBackendServiceTimeoutsToTerraform(struct?: ComputeRegionBackendServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeRegionBackendService extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._logConfig = config.logConfig;
    this._outlierDetection = config.outlierDetection;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_cookie_ttl_sec - computed: false, optional: true, required: false
  private _affinityCookieTtlSec?: number;
  public get affinityCookieTtlSec() {
    return this.getNumberAttribute('affinity_cookie_ttl_sec');
  }
  public set affinityCookieTtlSec(value: number ) {
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
  private _connectionDrainingTimeoutSec?: number;
  public get connectionDrainingTimeoutSec() {
    return this.getNumberAttribute('connection_draining_timeout_sec');
  }
  public set connectionDrainingTimeoutSec(value: number ) {
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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _enableCdn?: boolean;
  public get enableCdn() {
    return this.getBooleanAttribute('enable_cdn');
  }
  public set enableCdn(value: boolean ) {
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
  private _healthChecks?: string[];
  public get healthChecks() {
    return this.getListAttribute('health_checks');
  }
  public set healthChecks(value: string[] ) {
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
  private _loadBalancingScheme?: string;
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string ) {
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
  private _localityLbPolicy?: string;
  public get localityLbPolicy() {
    return this.getStringAttribute('locality_lb_policy');
  }
  public set localityLbPolicy(value: string ) {
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
  private _name: string;
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
  private _network?: string;
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string ) {
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
    return this._portName
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
    return this._project
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
    return this._protocol
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
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
    return this._sessionAffinity
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
    return this._timeoutSec
  }

  // backend - computed: false, optional: true, required: false
  private _backend?: ComputeRegionBackendServiceBackend[];
  public get backend() {
    return this.interpolationForAttribute('backend') as any;
  }
  public set backend(value: ComputeRegionBackendServiceBackend[] ) {
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
  private _cdnPolicy?: ComputeRegionBackendServiceCdnPolicy[];
  public get cdnPolicy() {
    return this.interpolationForAttribute('cdn_policy') as any;
  }
  public set cdnPolicy(value: ComputeRegionBackendServiceCdnPolicy[] ) {
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
  private _circuitBreakers?: ComputeRegionBackendServiceCircuitBreakers[];
  public get circuitBreakers() {
    return this.interpolationForAttribute('circuit_breakers') as any;
  }
  public set circuitBreakers(value: ComputeRegionBackendServiceCircuitBreakers[] ) {
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
  private _consistentHash?: ComputeRegionBackendServiceConsistentHash[];
  public get consistentHash() {
    return this.interpolationForAttribute('consistent_hash') as any;
  }
  public set consistentHash(value: ComputeRegionBackendServiceConsistentHash[] ) {
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
  private _failoverPolicy?: ComputeRegionBackendServiceFailoverPolicy[];
  public get failoverPolicy() {
    return this.interpolationForAttribute('failover_policy') as any;
  }
  public set failoverPolicy(value: ComputeRegionBackendServiceFailoverPolicy[] ) {
    this._failoverPolicy = value;
  }
  public resetFailoverPolicy() {
    this._failoverPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPolicyInput() {
    return this._failoverPolicy
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig?: ComputeRegionBackendServiceLogConfig[];
  public get logConfig() {
    return this.interpolationForAttribute('log_config') as any;
  }
  public set logConfig(value: ComputeRegionBackendServiceLogConfig[] ) {
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
  private _outlierDetection?: ComputeRegionBackendServiceOutlierDetection[];
  public get outlierDetection() {
    return this.interpolationForAttribute('outlier_detection') as any;
  }
  public set outlierDetection(value: ComputeRegionBackendServiceOutlierDetection[] ) {
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
  private _timeouts?: ComputeRegionBackendServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeRegionBackendServiceTimeouts ) {
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
      cdn_policy: cdktf.listMapper(computeRegionBackendServiceCdnPolicyToTerraform)(this._cdnPolicy),
      circuit_breakers: cdktf.listMapper(computeRegionBackendServiceCircuitBreakersToTerraform)(this._circuitBreakers),
      consistent_hash: cdktf.listMapper(computeRegionBackendServiceConsistentHashToTerraform)(this._consistentHash),
      failover_policy: cdktf.listMapper(computeRegionBackendServiceFailoverPolicyToTerraform)(this._failoverPolicy),
      log_config: cdktf.listMapper(computeRegionBackendServiceLogConfigToTerraform)(this._logConfig),
      outlier_detection: cdktf.listMapper(computeRegionBackendServiceOutlierDetectionToTerraform)(this._outlierDetection),
      timeouts: computeRegionBackendServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
