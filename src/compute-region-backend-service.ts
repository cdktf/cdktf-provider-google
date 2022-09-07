// https://www.terraform.io/docs/providers/google/r/compute_region_backend_service
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#affinity_cookie_ttl_sec ComputeRegionBackendService#affinity_cookie_ttl_sec}
  */
  readonly affinityCookieTtlSec?: number;
  /**
  * Time for which instance will be drained (not accept new
connections, but still work to finish started).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#connection_draining_timeout_sec ComputeRegionBackendService#connection_draining_timeout_sec}
  */
  readonly connectionDrainingTimeoutSec?: number;
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#description ComputeRegionBackendService#description}
  */
  readonly description?: string;
  /**
  * If true, enable Cloud CDN for this RegionBackendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#enable_cdn ComputeRegionBackendService#enable_cdn}
  */
  readonly enableCdn?: boolean | cdktf.IResolvable;
  /**
  * The set of URLs to HealthCheck resources for health checking
this RegionBackendService. Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#health_checks ComputeRegionBackendService#health_checks}
  */
  readonly healthChecks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#id ComputeRegionBackendService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates what kind of load balancing this regional backend service
will be used for. A backend service created for one type of load
balancing cannot be used with the other(s). For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "INTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#load_balancing_scheme ComputeRegionBackendService#load_balancing_scheme}
  */
  readonly loadBalancingScheme?: string;
  /**
  * The load balancing algorithm used within the scope of the locality.
The possible values are:

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
                 is selected in round robin order.

* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
                   hosts and picks the host which has fewer active requests.

* 'RING_HASH': The ring/modulo hash load balancer implements consistent
               hashing to backends. The algorithm has the property that the
               addition/removal of a host from a set of N hosts only affects
               1/N of the requests.

* 'RANDOM': The load balancer selects a random healthy host.

* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
                          connection metadata, i.e., connections are opened
                          to the same address as the destination address of
                          the incoming connection before the connection
                          was redirected to the load balancer.

* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
            Maglev is not as stable as ring hash but has faster table lookup
            build times and host selection times. For more information about
            Maglev, refer to https://ai.google/research/pubs/pub44824


This field is applicable to either:

* A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
  and loadBalancingScheme set to INTERNAL_MANAGED.
* A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.


If session_affinity is not NONE, and this field is not set to MAGLEV or RING_HASH,
session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#locality_lb_policy ComputeRegionBackendService#locality_lb_policy}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#name ComputeRegionBackendService#name}
  */
  readonly name: string;
  /**
  * The URL of the network to which this backend service belongs.
This field can only be specified when the load balancing scheme is set to INTERNAL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#network ComputeRegionBackendService#network}
  */
  readonly network?: string;
  /**
  * A named port on a backend instance group representing the port for
communication to the backend VMs in that group. Required when the
loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#port_name ComputeRegionBackendService#port_name}
  */
  readonly portName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#project ComputeRegionBackendService#project}
  */
  readonly project?: string;
  /**
  * The protocol this RegionBackendService uses to communicate with backends.
The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. Possible values: ["HTTP", "HTTPS", "HTTP2", "SSL", "TCP", "UDP", "GRPC", "UNSPECIFIED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#protocol ComputeRegionBackendService#protocol}
  */
  readonly protocol?: string;
  /**
  * The Region in which the created backend service should reside.
If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#region ComputeRegionBackendService#region}
  */
  readonly region?: string;
  /**
  * Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "CLIENT_IP_NO_DESTINATION"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#session_affinity ComputeRegionBackendService#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * How many seconds to wait for the backend before considering it a
failed request. Default is 30 seconds. Valid range is [1, 86400].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#timeout_sec ComputeRegionBackendService#timeout_sec}
  */
  readonly timeoutSec?: number;
  /**
  * backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#backend ComputeRegionBackendService#backend}
  */
  readonly backend?: ComputeRegionBackendServiceBackend[] | cdktf.IResolvable;
  /**
  * cdn_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#cdn_policy ComputeRegionBackendService#cdn_policy}
  */
  readonly cdnPolicy?: ComputeRegionBackendServiceCdnPolicy;
  /**
  * circuit_breakers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#circuit_breakers ComputeRegionBackendService#circuit_breakers}
  */
  readonly circuitBreakers?: ComputeRegionBackendServiceCircuitBreakers;
  /**
  * consistent_hash block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#consistent_hash ComputeRegionBackendService#consistent_hash}
  */
  readonly consistentHash?: ComputeRegionBackendServiceConsistentHash;
  /**
  * failover_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#failover_policy ComputeRegionBackendService#failover_policy}
  */
  readonly failoverPolicy?: ComputeRegionBackendServiceFailoverPolicy;
  /**
  * iap block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#iap ComputeRegionBackendService#iap}
  */
  readonly iap?: ComputeRegionBackendServiceIap;
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#log_config ComputeRegionBackendService#log_config}
  */
  readonly logConfig?: ComputeRegionBackendServiceLogConfig;
  /**
  * outlier_detection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#outlier_detection ComputeRegionBackendService#outlier_detection}
  */
  readonly outlierDetection?: ComputeRegionBackendServiceOutlierDetection;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#timeouts ComputeRegionBackendService#timeouts}
  */
  readonly timeouts?: ComputeRegionBackendServiceTimeouts;
}
export interface ComputeRegionBackendServiceBackend {
  /**
  * Specifies the balancing mode for this backend.

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "CONNECTION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#balancing_mode ComputeRegionBackendService#balancing_mode}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#capacity_scaler ComputeRegionBackendService#capacity_scaler}
  */
  readonly capacityScaler?: number;
  /**
  * An optional description of this resource.
Provide this property when you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#description ComputeRegionBackendService#description}
  */
  readonly description?: string;
  /**
  * This field designates whether this is a failover backend. More
than one failover backend can be configured for a given RegionBackendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#failover ComputeRegionBackendService#failover}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#group ComputeRegionBackendService#group}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_connections ComputeRegionBackendService#max_connections}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_connections_per_endpoint ComputeRegionBackendService#max_connections_per_endpoint}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_connections_per_instance ComputeRegionBackendService#max_connections_per_instance}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_rate ComputeRegionBackendService#max_rate}
  */
  readonly maxRate?: number;
  /**
  * The max requests per second (RPS) that a single backend network
endpoint can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set. Cannot be set
for INTERNAL backend services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_rate_per_endpoint ComputeRegionBackendService#max_rate_per_endpoint}
  */
  readonly maxRatePerEndpoint?: number;
  /**
  * The max requests per second (RPS) that a single backend
instance can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set. Cannot be set
for INTERNAL backend services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_rate_per_instance ComputeRegionBackendService#max_rate_per_instance}
  */
  readonly maxRatePerInstance?: number;
  /**
  * Used when balancingMode is UTILIZATION. This ratio defines the
CPU utilization target for the group. Valid range is [0.0, 1.0].
Cannot be set for INTERNAL backend services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_utilization ComputeRegionBackendService#max_utilization}
  */
  readonly maxUtilization?: number;
}

export function computeRegionBackendServiceBackendToTerraform(struct?: ComputeRegionBackendServiceBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class ComputeRegionBackendServiceBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionBackendServiceBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balancingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.balancingMode = this._balancingMode;
    }
    if (this._capacityScaler !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityScaler = this._capacityScaler;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._failover !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxConnectionsPerEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionsPerEndpoint = this._maxConnectionsPerEndpoint;
    }
    if (this._maxConnectionsPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionsPerInstance = this._maxConnectionsPerInstance;
    }
    if (this._maxRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRate = this._maxRate;
    }
    if (this._maxRatePerEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRatePerEndpoint = this._maxRatePerEndpoint;
    }
    if (this._maxRatePerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRatePerInstance = this._maxRatePerInstance;
    }
    if (this._maxUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUtilization = this._maxUtilization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionBackendServiceBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balancingMode = undefined;
      this._capacityScaler = undefined;
      this._description = undefined;
      this._failover = undefined;
      this._group = undefined;
      this._maxConnections = undefined;
      this._maxConnectionsPerEndpoint = undefined;
      this._maxConnectionsPerInstance = undefined;
      this._maxRate = undefined;
      this._maxRatePerEndpoint = undefined;
      this._maxRatePerInstance = undefined;
      this._maxUtilization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._balancingMode = value.balancingMode;
      this._capacityScaler = value.capacityScaler;
      this._description = value.description;
      this._failover = value.failover;
      this._group = value.group;
      this._maxConnections = value.maxConnections;
      this._maxConnectionsPerEndpoint = value.maxConnectionsPerEndpoint;
      this._maxConnectionsPerInstance = value.maxConnectionsPerInstance;
      this._maxRate = value.maxRate;
      this._maxRatePerEndpoint = value.maxRatePerEndpoint;
      this._maxRatePerInstance = value.maxRatePerInstance;
      this._maxUtilization = value.maxUtilization;
    }
  }

  // balancing_mode - computed: false, optional: true, required: false
  private _balancingMode?: string; 
  public get balancingMode() {
    return this.getStringAttribute('balancing_mode');
  }
  public set balancingMode(value: string) {
    this._balancingMode = value;
  }
  public resetBalancingMode() {
    this._balancingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancingModeInput() {
    return this._balancingMode;
  }

  // capacity_scaler - computed: false, optional: true, required: false
  private _capacityScaler?: number; 
  public get capacityScaler() {
    return this.getNumberAttribute('capacity_scaler');
  }
  public set capacityScaler(value: number) {
    this._capacityScaler = value;
  }
  public resetCapacityScaler() {
    this._capacityScaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityScalerInput() {
    return this._capacityScaler;
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

  // failover - computed: true, optional: true, required: false
  private _failover?: boolean | cdktf.IResolvable; 
  public get failover() {
    return this.getBooleanAttribute('failover');
  }
  public set failover(value: boolean | cdktf.IResolvable) {
    this._failover = value;
  }
  public resetFailover() {
    this._failover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // max_connections_per_endpoint - computed: false, optional: true, required: false
  private _maxConnectionsPerEndpoint?: number; 
  public get maxConnectionsPerEndpoint() {
    return this.getNumberAttribute('max_connections_per_endpoint');
  }
  public set maxConnectionsPerEndpoint(value: number) {
    this._maxConnectionsPerEndpoint = value;
  }
  public resetMaxConnectionsPerEndpoint() {
    this._maxConnectionsPerEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPerEndpointInput() {
    return this._maxConnectionsPerEndpoint;
  }

  // max_connections_per_instance - computed: false, optional: true, required: false
  private _maxConnectionsPerInstance?: number; 
  public get maxConnectionsPerInstance() {
    return this.getNumberAttribute('max_connections_per_instance');
  }
  public set maxConnectionsPerInstance(value: number) {
    this._maxConnectionsPerInstance = value;
  }
  public resetMaxConnectionsPerInstance() {
    this._maxConnectionsPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPerInstanceInput() {
    return this._maxConnectionsPerInstance;
  }

  // max_rate - computed: false, optional: true, required: false
  private _maxRate?: number; 
  public get maxRate() {
    return this.getNumberAttribute('max_rate');
  }
  public set maxRate(value: number) {
    this._maxRate = value;
  }
  public resetMaxRate() {
    this._maxRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRateInput() {
    return this._maxRate;
  }

  // max_rate_per_endpoint - computed: false, optional: true, required: false
  private _maxRatePerEndpoint?: number; 
  public get maxRatePerEndpoint() {
    return this.getNumberAttribute('max_rate_per_endpoint');
  }
  public set maxRatePerEndpoint(value: number) {
    this._maxRatePerEndpoint = value;
  }
  public resetMaxRatePerEndpoint() {
    this._maxRatePerEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRatePerEndpointInput() {
    return this._maxRatePerEndpoint;
  }

  // max_rate_per_instance - computed: false, optional: true, required: false
  private _maxRatePerInstance?: number; 
  public get maxRatePerInstance() {
    return this.getNumberAttribute('max_rate_per_instance');
  }
  public set maxRatePerInstance(value: number) {
    this._maxRatePerInstance = value;
  }
  public resetMaxRatePerInstance() {
    this._maxRatePerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRatePerInstanceInput() {
    return this._maxRatePerInstance;
  }

  // max_utilization - computed: false, optional: true, required: false
  private _maxUtilization?: number; 
  public get maxUtilization() {
    return this.getNumberAttribute('max_utilization');
  }
  public set maxUtilization(value: number) {
    this._maxUtilization = value;
  }
  public resetMaxUtilization() {
    this._maxUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUtilizationInput() {
    return this._maxUtilization;
  }
}

export class ComputeRegionBackendServiceBackendList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionBackendServiceBackend[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionBackendServiceBackendOutputReference {
    return new ComputeRegionBackendServiceBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy {
  /**
  * If true requests to different hosts will be cached separately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#include_host ComputeRegionBackendService#include_host}
  */
  readonly includeHost?: boolean | cdktf.IResolvable;
  /**
  * Names of cookies to include in cache keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#include_named_cookies ComputeRegionBackendService#include_named_cookies}
  */
  readonly includeNamedCookies?: string[];
  /**
  * If true, http and https requests will be cached separately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#include_protocol ComputeRegionBackendService#include_protocol}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#include_query_string ComputeRegionBackendService#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktf.IResolvable;
  /**
  * Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#query_string_blacklist ComputeRegionBackendService#query_string_blacklist}
  */
  readonly queryStringBlacklist?: string[];
  /**
  * Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#query_string_whitelist ComputeRegionBackendService#query_string_whitelist}
  */
  readonly queryStringWhitelist?: string[];
}

export function computeRegionBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct?: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference | ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_host: cdktf.booleanToTerraform(struct!.includeHost),
    include_named_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeNamedCookies),
    include_protocol: cdktf.booleanToTerraform(struct!.includeProtocol),
    include_query_string: cdktf.booleanToTerraform(struct!.includeQueryString),
    query_string_blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryStringBlacklist),
    query_string_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryStringWhitelist),
  }
}

export class ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHost = this._includeHost;
    }
    if (this._includeNamedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNamedCookies = this._includeNamedCookies;
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

  public set internalValue(value: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeHost = undefined;
      this._includeNamedCookies = undefined;
      this._includeProtocol = undefined;
      this._includeQueryString = undefined;
      this._queryStringBlacklist = undefined;
      this._queryStringWhitelist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeHost = value.includeHost;
      this._includeNamedCookies = value.includeNamedCookies;
      this._includeProtocol = value.includeProtocol;
      this._includeQueryString = value.includeQueryString;
      this._queryStringBlacklist = value.queryStringBlacklist;
      this._queryStringWhitelist = value.queryStringWhitelist;
    }
  }

  // include_host - computed: false, optional: true, required: false
  private _includeHost?: boolean | cdktf.IResolvable; 
  public get includeHost() {
    return this.getBooleanAttribute('include_host');
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

  // include_named_cookies - computed: false, optional: true, required: false
  private _includeNamedCookies?: string[]; 
  public get includeNamedCookies() {
    return this.getListAttribute('include_named_cookies');
  }
  public set includeNamedCookies(value: string[]) {
    this._includeNamedCookies = value;
  }
  public resetIncludeNamedCookies() {
    this._includeNamedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNamedCookiesInput() {
    return this._includeNamedCookies;
  }

  // include_protocol - computed: false, optional: true, required: false
  private _includeProtocol?: boolean | cdktf.IResolvable; 
  public get includeProtocol() {
    return this.getBooleanAttribute('include_protocol');
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
    return this.getBooleanAttribute('include_query_string');
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
    return cdktf.Fn.tolist(this.getListAttribute('query_string_blacklist'));
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
    return cdktf.Fn.tolist(this.getListAttribute('query_string_whitelist'));
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
export interface ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy {
  /**
  * The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#code ComputeRegionBackendService#code}
  */
  readonly code?: number;
}

export function computeRegionBackendServiceCdnPolicyNegativeCachingPolicyToTerraform(struct?: ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
  }
}

export class ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
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
}

export class ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference {
    return new ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionBackendServiceCdnPolicy {
  /**
  * Specifies the cache setting for all responses from this backend.
The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#cache_mode ComputeRegionBackendService#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#client_ttl ComputeRegionBackendService#client_ttl}
  */
  readonly clientTtl?: number;
  /**
  * Specifies the default TTL for cached content served by this origin for responses
that do not have an existing valid TTL (max-age or s-max-age).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#default_ttl ComputeRegionBackendService#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_ttl ComputeRegionBackendService#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#negative_caching ComputeRegionBackendService#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktf.IResolvable;
  /**
  * Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#serve_while_stale ComputeRegionBackendService#serve_while_stale}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#signed_url_cache_max_age_sec ComputeRegionBackendService#signed_url_cache_max_age_sec}
  */
  readonly signedUrlCacheMaxAgeSec?: number;
  /**
  * cache_key_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#cache_key_policy ComputeRegionBackendService#cache_key_policy}
  */
  readonly cacheKeyPolicy?: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy;
  /**
  * negative_caching_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#negative_caching_policy ComputeRegionBackendService#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable;
}

export function computeRegionBackendServiceCdnPolicyToTerraform(struct?: ComputeRegionBackendServiceCdnPolicyOutputReference | ComputeRegionBackendServiceCdnPolicy): any {
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
    serve_while_stale: cdktf.numberToTerraform(struct!.serveWhileStale),
    signed_url_cache_max_age_sec: cdktf.numberToTerraform(struct!.signedUrlCacheMaxAgeSec),
    cache_key_policy: computeRegionBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct!.cacheKeyPolicy),
    negative_caching_policy: cdktf.listMapper(computeRegionBackendServiceCdnPolicyNegativeCachingPolicyToTerraform, true)(struct!.negativeCachingPolicy),
  }
}

export class ComputeRegionBackendServiceCdnPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceCdnPolicy | undefined {
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
    if (this._negativeCachingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCachingPolicy = this._negativeCachingPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionBackendServiceCdnPolicy | undefined) {
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
      this._negativeCachingPolicy.internalValue = undefined;
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
  private _cacheKeyPolicy = new ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference(this, "cache_key_policy");
  public get cacheKeyPolicy() {
    return this._cacheKeyPolicy;
  }
  public putCacheKeyPolicy(value: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy) {
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
  private _negativeCachingPolicy = new ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList(this, "negative_caching_policy", false);
  public get negativeCachingPolicy() {
    return this._negativeCachingPolicy;
  }
  public putNegativeCachingPolicy(value: ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable) {
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
export interface ComputeRegionBackendServiceCircuitBreakers {
  /**
  * The maximum number of connections to the backend cluster.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_connections ComputeRegionBackendService#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The maximum number of pending requests to the backend cluster.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_pending_requests ComputeRegionBackendService#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * The maximum number of parallel requests to the backend cluster.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_requests ComputeRegionBackendService#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Maximum requests for a single backend connection. This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_requests_per_connection ComputeRegionBackendService#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * The maximum number of parallel retries to the backend cluster.
Defaults to 3.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_retries ComputeRegionBackendService#max_retries}
  */
  readonly maxRetries?: number;
}

export function computeRegionBackendServiceCircuitBreakersToTerraform(struct?: ComputeRegionBackendServiceCircuitBreakersOutputReference | ComputeRegionBackendServiceCircuitBreakers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceCircuitBreakers | undefined {
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

  public set internalValue(value: ComputeRegionBackendServiceCircuitBreakers | undefined) {
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
export interface ComputeRegionBackendServiceConsistentHashHttpCookieTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond
resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#nanos ComputeRegionBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
Must be from 0 to 315,576,000,000 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#seconds ComputeRegionBackendService#seconds}
  */
  readonly seconds: number;
}

export function computeRegionBackendServiceConsistentHashHttpCookieTtlToTerraform(struct?: ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference | ComputeRegionBackendServiceConsistentHashHttpCookieTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceConsistentHashHttpCookieTtl | undefined {
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

  public set internalValue(value: ComputeRegionBackendServiceConsistentHashHttpCookieTtl | undefined) {
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
export interface ComputeRegionBackendServiceConsistentHashHttpCookie {
  /**
  * Name of the cookie.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#name ComputeRegionBackendService#name}
  */
  readonly name?: string;
  /**
  * Path to set for the cookie.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#path ComputeRegionBackendService#path}
  */
  readonly path?: string;
  /**
  * ttl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#ttl ComputeRegionBackendService#ttl}
  */
  readonly ttl?: ComputeRegionBackendServiceConsistentHashHttpCookieTtl;
}

export function computeRegionBackendServiceConsistentHashHttpCookieToTerraform(struct?: ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference | ComputeRegionBackendServiceConsistentHashHttpCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceConsistentHashHttpCookie | undefined {
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

  public set internalValue(value: ComputeRegionBackendServiceConsistentHashHttpCookie | undefined) {
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
  private _ttl = new ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: ComputeRegionBackendServiceConsistentHashHttpCookieTtl) {
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
export interface ComputeRegionBackendServiceConsistentHash {
  /**
  * The hash based on the value of the specified header field.
This field is applicable if the sessionAffinity is set to HEADER_FIELD.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#http_header_name ComputeRegionBackendService#http_header_name}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#minimum_ring_size ComputeRegionBackendService#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
  /**
  * http_cookie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#http_cookie ComputeRegionBackendService#http_cookie}
  */
  readonly httpCookie?: ComputeRegionBackendServiceConsistentHashHttpCookie;
}

export function computeRegionBackendServiceConsistentHashToTerraform(struct?: ComputeRegionBackendServiceConsistentHashOutputReference | ComputeRegionBackendServiceConsistentHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceConsistentHash | undefined {
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

  public set internalValue(value: ComputeRegionBackendServiceConsistentHash | undefined) {
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
  private _httpCookie = new ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference(this, "http_cookie");
  public get httpCookie() {
    return this._httpCookie;
  }
  public putHttpCookie(value: ComputeRegionBackendServiceConsistentHashHttpCookie) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#disable_connection_drain_on_failover ComputeRegionBackendService#disable_connection_drain_on_failover}
  */
  readonly disableConnectionDrainOnFailover?: boolean | cdktf.IResolvable;
  /**
  * This option is used only when no healthy VMs are detected in the primary
and backup instance groups. When set to true, traffic is dropped. When
set to false, new connections are sent across all VMs in the primary group.
The default is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#drop_traffic_if_unhealthy ComputeRegionBackendService#drop_traffic_if_unhealthy}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#failover_ratio ComputeRegionBackendService#failover_ratio}
  */
  readonly failoverRatio?: number;
}

export function computeRegionBackendServiceFailoverPolicyToTerraform(struct?: ComputeRegionBackendServiceFailoverPolicyOutputReference | ComputeRegionBackendServiceFailoverPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceFailoverPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableConnectionDrainOnFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableConnectionDrainOnFailover = this._disableConnectionDrainOnFailover;
    }
    if (this._dropTrafficIfUnhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropTrafficIfUnhealthy = this._dropTrafficIfUnhealthy;
    }
    if (this._failoverRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverRatio = this._failoverRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionBackendServiceFailoverPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableConnectionDrainOnFailover = undefined;
      this._dropTrafficIfUnhealthy = undefined;
      this._failoverRatio = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableConnectionDrainOnFailover = value.disableConnectionDrainOnFailover;
      this._dropTrafficIfUnhealthy = value.dropTrafficIfUnhealthy;
      this._failoverRatio = value.failoverRatio;
    }
  }

  // disable_connection_drain_on_failover - computed: false, optional: true, required: false
  private _disableConnectionDrainOnFailover?: boolean | cdktf.IResolvable; 
  public get disableConnectionDrainOnFailover() {
    return this.getBooleanAttribute('disable_connection_drain_on_failover');
  }
  public set disableConnectionDrainOnFailover(value: boolean | cdktf.IResolvable) {
    this._disableConnectionDrainOnFailover = value;
  }
  public resetDisableConnectionDrainOnFailover() {
    this._disableConnectionDrainOnFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConnectionDrainOnFailoverInput() {
    return this._disableConnectionDrainOnFailover;
  }

  // drop_traffic_if_unhealthy - computed: false, optional: true, required: false
  private _dropTrafficIfUnhealthy?: boolean | cdktf.IResolvable; 
  public get dropTrafficIfUnhealthy() {
    return this.getBooleanAttribute('drop_traffic_if_unhealthy');
  }
  public set dropTrafficIfUnhealthy(value: boolean | cdktf.IResolvable) {
    this._dropTrafficIfUnhealthy = value;
  }
  public resetDropTrafficIfUnhealthy() {
    this._dropTrafficIfUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropTrafficIfUnhealthyInput() {
    return this._dropTrafficIfUnhealthy;
  }

  // failover_ratio - computed: false, optional: true, required: false
  private _failoverRatio?: number; 
  public get failoverRatio() {
    return this.getNumberAttribute('failover_ratio');
  }
  public set failoverRatio(value: number) {
    this._failoverRatio = value;
  }
  public resetFailoverRatio() {
    this._failoverRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverRatioInput() {
    return this._failoverRatio;
  }
}
export interface ComputeRegionBackendServiceIap {
  /**
  * OAuth2 Client ID for IAP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#oauth2_client_id ComputeRegionBackendService#oauth2_client_id}
  */
  readonly oauth2ClientId: string;
  /**
  * OAuth2 Client Secret for IAP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#oauth2_client_secret ComputeRegionBackendService#oauth2_client_secret}
  */
  readonly oauth2ClientSecret: string;
}

export function computeRegionBackendServiceIapToTerraform(struct?: ComputeRegionBackendServiceIapOutputReference | ComputeRegionBackendServiceIap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_client_secret: cdktf.stringToTerraform(struct!.oauth2ClientSecret),
  }
}

export class ComputeRegionBackendServiceIapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceIap | undefined {
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

  public set internalValue(value: ComputeRegionBackendServiceIap | undefined) {
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

  // oauth2_client_secret_sha256 - computed: true, optional: false, required: false
  public get oauth2ClientSecretSha256() {
    return this.getStringAttribute('oauth2_client_secret_sha256');
  }
}
export interface ComputeRegionBackendServiceLogConfig {
  /**
  * Whether to enable logging for the load balancer traffic served by this backend service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#enable ComputeRegionBackendService#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * This field can only be specified if logging is enabled for this backend service. The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#sample_rate ComputeRegionBackendService#sample_rate}
  */
  readonly sampleRate?: number;
}

export function computeRegionBackendServiceLogConfigToTerraform(struct?: ComputeRegionBackendServiceLogConfigOutputReference | ComputeRegionBackendServiceLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}

export class ComputeRegionBackendServiceLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceLogConfig | undefined {
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

  public set internalValue(value: ComputeRegionBackendServiceLogConfig | undefined) {
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
    return this.getBooleanAttribute('enable');
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
export interface ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#nanos ComputeRegionBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#seconds ComputeRegionBackendService#seconds}
  */
  readonly seconds: number;
}

export function computeRegionBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct?: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference | ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime | undefined {
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

  public set internalValue(value: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime | undefined) {
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
export interface ComputeRegionBackendServiceOutlierDetectionInterval {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#nanos ComputeRegionBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#seconds ComputeRegionBackendService#seconds}
  */
  readonly seconds: number;
}

export function computeRegionBackendServiceOutlierDetectionIntervalToTerraform(struct?: ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference | ComputeRegionBackendServiceOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceOutlierDetectionInterval | undefined {
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

  public set internalValue(value: ComputeRegionBackendServiceOutlierDetectionInterval | undefined) {
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
export interface ComputeRegionBackendServiceOutlierDetection {
  /**
  * Number of errors before a host is ejected from the connection pool. When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#consecutive_errors ComputeRegionBackendService#consecutive_errors}
  */
  readonly consecutiveErrors?: number;
  /**
  * The number of consecutive gateway failures (502, 503, 504 status or connection
errors that are mapped to one of those status codes) before a consecutive
gateway failure ejection occurs. Defaults to 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#consecutive_gateway_failure ComputeRegionBackendService#consecutive_gateway_failure}
  */
  readonly consecutiveGatewayFailure?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive 5xx. This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#enforcing_consecutive_errors ComputeRegionBackendService#enforcing_consecutive_errors}
  */
  readonly enforcingConsecutiveErrors?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive gateway failures. This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#enforcing_consecutive_gateway_failure ComputeRegionBackendService#enforcing_consecutive_gateway_failure}
  */
  readonly enforcingConsecutiveGatewayFailure?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
status is detected through success rate statistics. This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#enforcing_success_rate ComputeRegionBackendService#enforcing_success_rate}
  */
  readonly enforcingSuccessRate?: number;
  /**
  * Maximum percentage of hosts in the load balancing pool for the backend service
that can be ejected. Defaults to 10%.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_ejection_percent ComputeRegionBackendService#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * The number of hosts in a cluster that must have enough request volume to detect
success rate outliers. If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#success_rate_minimum_hosts ComputeRegionBackendService#success_rate_minimum_hosts}
  */
  readonly successRateMinimumHosts?: number;
  /**
  * The minimum number of total requests that must be collected in one interval (as
defined by the interval duration above) to include this host in success rate
based outlier detection. If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#success_rate_request_volume ComputeRegionBackendService#success_rate_request_volume}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#success_rate_stdev_factor ComputeRegionBackendService#success_rate_stdev_factor}
  */
  readonly successRateStdevFactor?: number;
  /**
  * base_ejection_time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#base_ejection_time ComputeRegionBackendService#base_ejection_time}
  */
  readonly baseEjectionTime?: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime;
  /**
  * interval block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#interval ComputeRegionBackendService#interval}
  */
  readonly interval?: ComputeRegionBackendServiceOutlierDetectionInterval;
}

export function computeRegionBackendServiceOutlierDetectionToTerraform(struct?: ComputeRegionBackendServiceOutlierDetectionOutputReference | ComputeRegionBackendServiceOutlierDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceOutlierDetection | undefined {
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

  public set internalValue(value: ComputeRegionBackendServiceOutlierDetection | undefined) {
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
  private _baseEjectionTime = new ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(this, "base_ejection_time");
  public get baseEjectionTime() {
    return this._baseEjectionTime;
  }
  public putBaseEjectionTime(value: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime) {
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
  private _interval = new ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference(this, "interval");
  public get interval() {
    return this._interval;
  }
  public putInterval(value: ComputeRegionBackendServiceOutlierDetectionInterval) {
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
export interface ComputeRegionBackendServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#create ComputeRegionBackendService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#delete ComputeRegionBackendService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#update ComputeRegionBackendService#update}
  */
  readonly update?: string;
}

export function computeRegionBackendServiceTimeoutsToTerraform(struct?: ComputeRegionBackendServiceTimeoutsOutputReference | ComputeRegionBackendServiceTimeouts | cdktf.IResolvable): any {
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

export class ComputeRegionBackendServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionBackendServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRegionBackendServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service google_compute_region_backend_service}
*/
export class ComputeRegionBackendService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_backend_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service google_compute_region_backend_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRegionBackendServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRegionBackendServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_backend_service',
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
    this._affinityCookieTtlSec = config.affinityCookieTtlSec;
    this._connectionDrainingTimeoutSec = config.connectionDrainingTimeoutSec;
    this._description = config.description;
    this._enableCdn = config.enableCdn;
    this._healthChecks = config.healthChecks;
    this._id = config.id;
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
    this._backend.internalValue = config.backend;
    this._cdnPolicy.internalValue = config.cdnPolicy;
    this._circuitBreakers.internalValue = config.circuitBreakers;
    this._consistentHash.internalValue = config.consistentHash;
    this._failoverPolicy.internalValue = config.failoverPolicy;
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

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks?: string[]; 
  public get healthChecks() {
    return cdktf.Fn.tolist(this.getListAttribute('health_checks'));
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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
    return this._region;
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
  private _backend = new ComputeRegionBackendServiceBackendList(this, "backend", true);
  public get backend() {
    return this._backend;
  }
  public putBackend(value: ComputeRegionBackendServiceBackend[] | cdktf.IResolvable) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // cdn_policy - computed: false, optional: true, required: false
  private _cdnPolicy = new ComputeRegionBackendServiceCdnPolicyOutputReference(this, "cdn_policy");
  public get cdnPolicy() {
    return this._cdnPolicy;
  }
  public putCdnPolicy(value: ComputeRegionBackendServiceCdnPolicy) {
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
  private _circuitBreakers = new ComputeRegionBackendServiceCircuitBreakersOutputReference(this, "circuit_breakers");
  public get circuitBreakers() {
    return this._circuitBreakers;
  }
  public putCircuitBreakers(value: ComputeRegionBackendServiceCircuitBreakers) {
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
  private _consistentHash = new ComputeRegionBackendServiceConsistentHashOutputReference(this, "consistent_hash");
  public get consistentHash() {
    return this._consistentHash;
  }
  public putConsistentHash(value: ComputeRegionBackendServiceConsistentHash) {
    this._consistentHash.internalValue = value;
  }
  public resetConsistentHash() {
    this._consistentHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentHashInput() {
    return this._consistentHash.internalValue;
  }

  // failover_policy - computed: false, optional: true, required: false
  private _failoverPolicy = new ComputeRegionBackendServiceFailoverPolicyOutputReference(this, "failover_policy");
  public get failoverPolicy() {
    return this._failoverPolicy;
  }
  public putFailoverPolicy(value: ComputeRegionBackendServiceFailoverPolicy) {
    this._failoverPolicy.internalValue = value;
  }
  public resetFailoverPolicy() {
    this._failoverPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPolicyInput() {
    return this._failoverPolicy.internalValue;
  }

  // iap - computed: false, optional: true, required: false
  private _iap = new ComputeRegionBackendServiceIapOutputReference(this, "iap");
  public get iap() {
    return this._iap;
  }
  public putIap(value: ComputeRegionBackendServiceIap) {
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
  private _logConfig = new ComputeRegionBackendServiceLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: ComputeRegionBackendServiceLogConfig) {
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
  private _outlierDetection = new ComputeRegionBackendServiceOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: ComputeRegionBackendServiceOutlierDetection) {
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
  private _timeouts = new ComputeRegionBackendServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRegionBackendServiceTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      enable_cdn: cdktf.booleanToTerraform(this._enableCdn),
      health_checks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthChecks),
      id: cdktf.stringToTerraform(this._id),
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
      backend: cdktf.listMapper(computeRegionBackendServiceBackendToTerraform, true)(this._backend.internalValue),
      cdn_policy: computeRegionBackendServiceCdnPolicyToTerraform(this._cdnPolicy.internalValue),
      circuit_breakers: computeRegionBackendServiceCircuitBreakersToTerraform(this._circuitBreakers.internalValue),
      consistent_hash: computeRegionBackendServiceConsistentHashToTerraform(this._consistentHash.internalValue),
      failover_policy: computeRegionBackendServiceFailoverPolicyToTerraform(this._failoverPolicy.internalValue),
      iap: computeRegionBackendServiceIapToTerraform(this._iap.internalValue),
      log_config: computeRegionBackendServiceLogConfigToTerraform(this._logConfig.internalValue),
      outlier_detection: computeRegionBackendServiceOutlierDetectionToTerraform(this._outlierDetection.internalValue),
      timeouts: computeRegionBackendServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
