/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeBackendServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Lifetime of cookies in seconds if session_affinity is
  * GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
  * only until the end of the browser session (or equivalent). The
  * maximum allowed value for TTL is one day.
  * 
  * When the load balancing scheme is INTERNAL, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#affinity_cookie_ttl_sec ComputeBackendService#affinity_cookie_ttl_sec}
  */
  readonly affinityCookieTtlSec?: number;
  /**
  * Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#compression_mode ComputeBackendService#compression_mode}
  */
  readonly compressionMode?: string;
  /**
  * Time for which instance will be drained (not accept new
  * connections, but still work to finish started).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#connection_draining_timeout_sec ComputeBackendService#connection_draining_timeout_sec}
  */
  readonly connectionDrainingTimeoutSec?: number;
  /**
  * Headers that the HTTP/S load balancer should add to proxied
  * requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#custom_request_headers ComputeBackendService#custom_request_headers}
  */
  readonly customRequestHeaders?: string[];
  /**
  * Headers that the HTTP/S load balancer should add to proxied
  * responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#custom_response_headers ComputeBackendService#custom_response_headers}
  */
  readonly customResponseHeaders?: string[];
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#description ComputeBackendService#description}
  */
  readonly description?: string;
  /**
  * The resource URL for the edge security policy associated with this backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#edge_security_policy ComputeBackendService#edge_security_policy}
  */
  readonly edgeSecurityPolicy?: string;
  /**
  * If true, enable Cloud CDN for this BackendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#enable_cdn ComputeBackendService#enable_cdn}
  */
  readonly enableCdn?: boolean | cdktf.IResolvable;
  /**
  * Specifies the canary migration state. Possible values are PREPARE, TEST_BY_PERCENTAGE, and
  * TEST_ALL_TRAFFIC.
  * 
  * To begin the migration from EXTERNAL to EXTERNAL_MANAGED, the state must be changed to
  * PREPARE. The state must be changed to TEST_ALL_TRAFFIC before the loadBalancingScheme can be
  * changed to EXTERNAL_MANAGED. Optionally, the TEST_BY_PERCENTAGE state can be used to migrate
  * traffic by percentage using externalManagedMigrationTestingPercentage.
  * 
  * Rolling back a migration requires the states to be set in reverse order. So changing the
  * scheme from EXTERNAL_MANAGED to EXTERNAL requires the state to be set to TEST_ALL_TRAFFIC at
  * the same time. Optionally, the TEST_BY_PERCENTAGE state can be used to migrate some traffic
  * back to EXTERNAL or PREPARE can be used to migrate all traffic back to EXTERNAL. Possible values: ["PREPARE", "TEST_BY_PERCENTAGE", "TEST_ALL_TRAFFIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#external_managed_migration_state ComputeBackendService#external_managed_migration_state}
  */
  readonly externalManagedMigrationState?: string;
  /**
  * Determines the fraction of requests that should be processed by the Global external
  * Application Load Balancer.
  * 
  * The value of this field must be in the range [0, 100].
  * 
  * Session affinity options will slightly affect this routing behavior, for more details,
  * see: Session Affinity.
  * 
  * This value can only be set if the loadBalancingScheme in the backend service is set to
  * EXTERNAL (when using the Classic ALB) and the migration state is TEST_BY_PERCENTAGE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#external_managed_migration_testing_percentage ComputeBackendService#external_managed_migration_testing_percentage}
  */
  readonly externalManagedMigrationTestingPercentage?: number;
  /**
  * The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource
  * for health checking this BackendService. Currently at most one health
  * check can be specified.
  * 
  * A health check must be specified unless the backend service uses an internet
  * or serverless NEG as a backend.
  * 
  * For internal load balancing, a URL to a HealthCheck resource must be specified instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#health_checks ComputeBackendService#health_checks}
  */
  readonly healthChecks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#id ComputeBackendService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#ip_address_selection_policy ComputeBackendService#ip_address_selection_policy}
  */
  readonly ipAddressSelectionPolicy?: string;
  /**
  * Indicates whether the backend service will be used with internal or
  * external load balancing. A backend service created for one type of
  * load balancing cannot be used with the other. For more information, refer to
  * [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED", "INTERNAL_MANAGED", "EXTERNAL_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#load_balancing_scheme ComputeBackendService#load_balancing_scheme}
  */
  readonly loadBalancingScheme?: string;
  /**
  * The load balancing algorithm used within the scope of the locality.
  * The possible values are:
  * 
  * * 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  *                  is selected in round robin order.
  * 
  * * 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  *                    hosts and picks the host which has fewer active requests.
  * 
  * * 'RING_HASH': The ring/modulo hash load balancer implements consistent
  *                hashing to backends. The algorithm has the property that the
  *                addition/removal of a host from a set of N hosts only affects
  *                1/N of the requests.
  * 
  * * 'RANDOM': The load balancer selects a random healthy host.
  * 
  * * 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  *                           connection metadata, i.e., connections are opened
  *                           to the same address as the destination address of
  *                           the incoming connection before the connection
  *                           was redirected to the load balancer.
  * 
  * * 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  *             Maglev is not as stable as ring hash but has faster table lookup
  *             build times and host selection times. For more information about
  *             Maglev, refer to https://ai.google/research/pubs/pub44824
  * 
  * * 'WEIGHTED_MAGLEV': Per-instance weighted Load Balancing via health check
  *                      reported weights. Only applicable to loadBalancingScheme
  *                      EXTERNAL. If set, the Backend Service must
  *                      configure a non legacy HTTP-based Health Check, and
  *                      health check replies are expected to contain
  *                      non-standard HTTP response header field
  *                      X-Load-Balancing-Endpoint-Weight to specify the
  *                      per-instance weights. If set, Load Balancing is weight
  *                      based on the per-instance weights reported in the last
  *                      processed health check replies, as long as every
  *                      instance either reported a valid weight or had
  *                      UNAVAILABLE_WEIGHT. Otherwise, Load Balancing remains
  *                      equal-weight.
  * 
  * * 'WEIGHTED_ROUND_ROBIN': Per-endpoint weighted round-robin Load Balancing using weights computed
  *                           from Backend reported Custom Metrics. If set, the Backend Service
  *                           responses are expected to contain non-standard HTTP response header field
  *                           X-Endpoint-Load-Metrics. The reported metrics
  *                           to use for computing the weights are specified via the
  *                           backends[].customMetrics fields.
  * 
  * locality_lb_policy is applicable to either:
  * 
  * * A regional backend service with the service_protocol set to HTTP, HTTPS, HTTP2 or H2C,
  *   and loadBalancingScheme set to INTERNAL_MANAGED.
  * * A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
  * * A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
  *   Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
  *   Network Load Balancing. The default is MAGLEV.
  * 
  * If session_affinity is not NONE, and locality_lb_policy is not set to MAGLEV, WEIGHTED_MAGLEV,
  * or RING_HASH, session affinity settings will not take effect.
  * 
  * Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
  * by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
  * field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV", "WEIGHTED_ROUND_ROBIN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#locality_lb_policy ComputeBackendService#locality_lb_policy}
  */
  readonly localityLbPolicy?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035. Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
  * first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the last
  * character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}
  */
  readonly name: string;
  /**
  * Name of backend port. The same name should appear in the instance
  * groups referenced by this service. Required when the load balancing
  * scheme is EXTERNAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#port_name ComputeBackendService#port_name}
  */
  readonly portName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#project ComputeBackendService#project}
  */
  readonly project?: string;
  /**
  * The protocol this BackendService uses to communicate with backends.
  * The default is HTTP. Possible values are HTTP, HTTPS, HTTP2, H2C, TCP, SSL, UDP
  * or GRPC. Refer to the documentation for the load balancers or for Traffic Director
  * for more information. Must be set to GRPC when the backend service is referenced
  * by a URL map that is bound to target gRPC proxy. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "UDP", "GRPC", "UNSPECIFIED", "H2C"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#protocol ComputeBackendService#protocol}
  */
  readonly protocol?: string;
  /**
  * The security policy associated with this backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#security_policy ComputeBackendService#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * URL to networkservices.ServiceLbPolicy resource.
  * Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#service_lb_policy ComputeBackendService#service_lb_policy}
  */
  readonly serviceLbPolicy?: string;
  /**
  * Type of session affinity to use. The default is NONE. Session affinity is
  * not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "STRONG_COOKIE_AFFINITY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#session_affinity ComputeBackendService#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * The backend service timeout has a different meaning depending on the type of load balancer.
  * For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
  * The default is 30 seconds.
  * The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#timeout_sec ComputeBackendService#timeout_sec}
  */
  readonly timeoutSec?: number;
  /**
  * backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#backend ComputeBackendService#backend}
  */
  readonly backend?: ComputeBackendServiceBackend[] | cdktf.IResolvable;
  /**
  * cdn_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#cdn_policy ComputeBackendService#cdn_policy}
  */
  readonly cdnPolicy?: ComputeBackendServiceCdnPolicy;
  /**
  * circuit_breakers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#circuit_breakers ComputeBackendService#circuit_breakers}
  */
  readonly circuitBreakers?: ComputeBackendServiceCircuitBreakers;
  /**
  * consistent_hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#consistent_hash ComputeBackendService#consistent_hash}
  */
  readonly consistentHash?: ComputeBackendServiceConsistentHash;
  /**
  * custom_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#custom_metrics ComputeBackendService#custom_metrics}
  */
  readonly customMetrics?: ComputeBackendServiceCustomMetrics[] | cdktf.IResolvable;
  /**
  * iap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#iap ComputeBackendService#iap}
  */
  readonly iap?: ComputeBackendServiceIap;
  /**
  * locality_lb_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#locality_lb_policies ComputeBackendService#locality_lb_policies}
  */
  readonly localityLbPolicies?: ComputeBackendServiceLocalityLbPolicies[] | cdktf.IResolvable;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#log_config ComputeBackendService#log_config}
  */
  readonly logConfig?: ComputeBackendServiceLogConfig;
  /**
  * max_stream_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_stream_duration ComputeBackendService#max_stream_duration}
  */
  readonly maxStreamDuration?: ComputeBackendServiceMaxStreamDuration;
  /**
  * outlier_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#outlier_detection ComputeBackendService#outlier_detection}
  */
  readonly outlierDetection?: ComputeBackendServiceOutlierDetection;
  /**
  * security_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#security_settings ComputeBackendService#security_settings}
  */
  readonly securitySettings?: ComputeBackendServiceSecuritySettings;
  /**
  * strong_session_affinity_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#strong_session_affinity_cookie ComputeBackendService#strong_session_affinity_cookie}
  */
  readonly strongSessionAffinityCookie?: ComputeBackendServiceStrongSessionAffinityCookie;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#timeouts ComputeBackendService#timeouts}
  */
  readonly timeouts?: ComputeBackendServiceTimeouts;
  /**
  * tls_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#tls_settings ComputeBackendService#tls_settings}
  */
  readonly tlsSettings?: ComputeBackendServiceTlsSettings;
}
export interface ComputeBackendServiceBackendCustomMetrics {
  /**
  * If true, the metric data is collected and reported to Cloud
  * Monitoring, but is not used for load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#dry_run ComputeBackendService#dry_run}
  */
  readonly dryRun: boolean | cdktf.IResolvable;
  /**
  * Optional parameter to define a target utilization for the Custom Metrics
  * balancing mode. The valid range is <code>[0.0, 1.0]</code>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_utilization ComputeBackendService#max_utilization}
  */
  readonly maxUtilization?: number;
  /**
  * Name of a custom utilization signal. The name must be 1-64 characters
  * long and match the regular expression [a-z]([-_.a-z0-9]*[a-z0-9])? which
  * means the first character must be a lowercase letter, and all following
  * characters must be a dash, period, underscore, lowercase letter, or
  * digit, except the last character, which cannot be a dash, period, or
  * underscore. For usage guidelines, see Custom Metrics balancing mode. This
  * field can only be used for a global or regional backend service with the
  * loadBalancingScheme set to <code>EXTERNAL_MANAGED</code>,
  * <code>INTERNAL_MANAGED</code> <code>INTERNAL_SELF_MANAGED</code>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}
  */
  readonly name: string;
}

export function computeBackendServiceBackendCustomMetricsToTerraform(struct?: ComputeBackendServiceBackendCustomMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    max_utilization: cdktf.numberToTerraform(struct!.maxUtilization),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeBackendServiceBackendCustomMetricsToHclTerraform(struct?: ComputeBackendServiceBackendCustomMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_utilization: {
      value: cdktf.numberToHclTerraform(struct!.maxUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceBackendCustomMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeBackendServiceBackendCustomMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._maxUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUtilization = this._maxUtilization;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceBackendCustomMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dryRun = undefined;
      this._maxUtilization = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dryRun = value.dryRun;
      this._maxUtilization = value.maxUtilization;
      this._name = value.name;
    }
  }

  // dry_run - computed: false, optional: false, required: true
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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
}

export class ComputeBackendServiceBackendCustomMetricsList extends cdktf.ComplexList {
  public internalValue? : ComputeBackendServiceBackendCustomMetrics[] | cdktf.IResolvable

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
  public get(index: number): ComputeBackendServiceBackendCustomMetricsOutputReference {
    return new ComputeBackendServiceBackendCustomMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeBackendServiceBackend {
  /**
  * Specifies the balancing mode for this backend.
  * 
  * For global HTTP(S) or TCP/SSL load balancing, the default is
  * UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S)),
  * CUSTOM_METRICS (for HTTP(s)) and CONNECTION (for TCP/SSL).
  * 
  * See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
  * for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION", "CUSTOM_METRICS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#balancing_mode ComputeBackendService#balancing_mode}
  */
  readonly balancingMode?: string;
  /**
  * A multiplier applied to the group's maximum servicing capacity
  * (based on UTILIZATION, RATE or CONNECTION).
  * 
  * Default value is 1, which means the group will serve up to 100%
  * of its configured capacity (depending on balancingMode). A
  * setting of 0 means the group is completely drained, offering
  * 0% of its available Capacity. Valid range is [0.0,1.0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#capacity_scaler ComputeBackendService#capacity_scaler}
  */
  readonly capacityScaler?: number;
  /**
  * An optional description of this resource.
  * Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#description ComputeBackendService#description}
  */
  readonly description?: string;
  /**
  * The fully-qualified URL of an Instance Group or Network Endpoint
  * Group resource. In case of instance group this defines the list
  * of instances that serve traffic. Member virtual machine
  * instances from each instance group must live in the same zone as
  * the instance group itself. No two backends in a backend service
  * are allowed to use same Instance Group resource.
  * 
  * For Network Endpoint Groups this defines list of endpoints. All
  * endpoints of Network Endpoint Group must be hosted on instances
  * located in the same zone as the Network Endpoint Group.
  * 
  * Backend services cannot mix Instance Group and
  * Network Endpoint Group backends.
  * 
  * Note that you must specify an Instance Group or Network Endpoint
  * Group resource using the fully-qualified URL, rather than a
  * partial URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#group ComputeBackendService#group}
  */
  readonly group: string;
  /**
  * The max number of simultaneous connections for the group. Can
  * be used with either CONNECTION or UTILIZATION balancing modes.
  * 
  * For CONNECTION mode, either maxConnections or one
  * of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
  * as appropriate for group type, must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_connections ComputeBackendService#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The max number of simultaneous connections that a single backend
  * network endpoint can handle. This is used to calculate the
  * capacity of the group. Can be used in either CONNECTION or
  * UTILIZATION balancing modes.
  * 
  * For CONNECTION mode, either
  * maxConnections or maxConnectionsPerEndpoint must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_connections_per_endpoint ComputeBackendService#max_connections_per_endpoint}
  */
  readonly maxConnectionsPerEndpoint?: number;
  /**
  * The max number of simultaneous connections that a single
  * backend instance can handle. This is used to calculate the
  * capacity of the group. Can be used in either CONNECTION or
  * UTILIZATION balancing modes.
  * 
  * For CONNECTION mode, either maxConnections or
  * maxConnectionsPerInstance must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_connections_per_instance ComputeBackendService#max_connections_per_instance}
  */
  readonly maxConnectionsPerInstance?: number;
  /**
  * The max requests per second (RPS) of the group.
  * 
  * Can be used with either RATE or UTILIZATION balancing modes,
  * but required if RATE mode. For RATE mode, either maxRate or one
  * of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
  * group type, must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_rate ComputeBackendService#max_rate}
  */
  readonly maxRate?: number;
  /**
  * The max requests per second (RPS) that a single backend network
  * endpoint can handle. This is used to calculate the capacity of
  * the group. Can be used in either balancing mode. For RATE mode,
  * either maxRate or maxRatePerEndpoint must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_rate_per_endpoint ComputeBackendService#max_rate_per_endpoint}
  */
  readonly maxRatePerEndpoint?: number;
  /**
  * The max requests per second (RPS) that a single backend
  * instance can handle. This is used to calculate the capacity of
  * the group. Can be used in either balancing mode. For RATE mode,
  * either maxRate or maxRatePerInstance must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_rate_per_instance ComputeBackendService#max_rate_per_instance}
  */
  readonly maxRatePerInstance?: number;
  /**
  * Used when balancingMode is UTILIZATION. This ratio defines the
  * CPU utilization target for the group. Valid range is [0.0, 1.0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_utilization ComputeBackendService#max_utilization}
  */
  readonly maxUtilization?: number;
  /**
  * This field indicates whether this backend should be fully utilized before sending traffic to backends
  * with default preference. This field cannot be set when loadBalancingScheme is set to 'EXTERNAL'. The possible values are:
  *   - PREFERRED: Backends with this preference level will be filled up to their capacity limits first,
  *     based on RTT.
  *   - DEFAULT: If preferred backends don't have enough capacity, backends in this layer would be used and
  *     traffic would be assigned based on the load balancing algorithm you use. This is the default Possible values: ["PREFERRED", "DEFAULT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#preference ComputeBackendService#preference}
  */
  readonly preference?: string;
  /**
  * custom_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#custom_metrics ComputeBackendService#custom_metrics}
  */
  readonly customMetrics?: ComputeBackendServiceBackendCustomMetrics[] | cdktf.IResolvable;
}

export function computeBackendServiceBackendToTerraform(struct?: ComputeBackendServiceBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
    preference: cdktf.stringToTerraform(struct!.preference),
    custom_metrics: cdktf.listMapper(computeBackendServiceBackendCustomMetricsToTerraform, true)(struct!.customMetrics),
  }
}


export function computeBackendServiceBackendToHclTerraform(struct?: ComputeBackendServiceBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balancing_mode: {
      value: cdktf.stringToHclTerraform(struct!.balancingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_scaler: {
      value: cdktf.numberToHclTerraform(struct!.capacityScaler),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connections_per_endpoint: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionsPerEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connections_per_instance: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionsPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rate: {
      value: cdktf.numberToHclTerraform(struct!.maxRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rate_per_endpoint: {
      value: cdktf.numberToHclTerraform(struct!.maxRatePerEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rate_per_instance: {
      value: cdktf.numberToHclTerraform(struct!.maxRatePerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_utilization: {
      value: cdktf.numberToHclTerraform(struct!.maxUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: cdktf.stringToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_metrics: {
      value: cdktf.listMapperHcl(computeBackendServiceBackendCustomMetricsToHclTerraform, true)(struct!.customMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceBackendCustomMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeBackendServiceBackend | cdktf.IResolvable | undefined {
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
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._customMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetrics = this._customMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balancingMode = undefined;
      this._capacityScaler = undefined;
      this._description = undefined;
      this._group = undefined;
      this._maxConnections = undefined;
      this._maxConnectionsPerEndpoint = undefined;
      this._maxConnectionsPerInstance = undefined;
      this._maxRate = undefined;
      this._maxRatePerEndpoint = undefined;
      this._maxRatePerInstance = undefined;
      this._maxUtilization = undefined;
      this._preference = undefined;
      this._customMetrics.internalValue = undefined;
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
      this._group = value.group;
      this._maxConnections = value.maxConnections;
      this._maxConnectionsPerEndpoint = value.maxConnectionsPerEndpoint;
      this._maxConnectionsPerInstance = value.maxConnectionsPerInstance;
      this._maxRate = value.maxRate;
      this._maxRatePerEndpoint = value.maxRatePerEndpoint;
      this._maxRatePerInstance = value.maxRatePerInstance;
      this._maxUtilization = value.maxUtilization;
      this._preference = value.preference;
      this._customMetrics.internalValue = value.customMetrics;
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

  // max_connections - computed: true, optional: true, required: false
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

  // max_connections_per_endpoint - computed: true, optional: true, required: false
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

  // max_connections_per_instance - computed: true, optional: true, required: false
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

  // max_rate - computed: true, optional: true, required: false
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

  // max_rate_per_endpoint - computed: true, optional: true, required: false
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

  // max_rate_per_instance - computed: true, optional: true, required: false
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

  // max_utilization - computed: true, optional: true, required: false
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

  // preference - computed: false, optional: true, required: false
  private _preference?: string; 
  public get preference() {
    return this.getStringAttribute('preference');
  }
  public set preference(value: string) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // custom_metrics - computed: false, optional: true, required: false
  private _customMetrics = new ComputeBackendServiceBackendCustomMetricsList(this, "custom_metrics", false);
  public get customMetrics() {
    return this._customMetrics;
  }
  public putCustomMetrics(value: ComputeBackendServiceBackendCustomMetrics[] | cdktf.IResolvable) {
    this._customMetrics.internalValue = value;
  }
  public resetCustomMetrics() {
    this._customMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricsInput() {
    return this._customMetrics.internalValue;
  }
}

export class ComputeBackendServiceBackendList extends cdktf.ComplexList {
  public internalValue? : ComputeBackendServiceBackend[] | cdktf.IResolvable

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
  public get(index: number): ComputeBackendServiceBackendOutputReference {
    return new ComputeBackendServiceBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders {
  /**
  * The header field name to match on when bypassing cache. Values are case-insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#header_name ComputeBackendService#header_name}
  */
  readonly headerName: string;
}

export function computeBackendServiceCdnPolicyBypassCacheOnRequestHeadersToTerraform(struct?: ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function computeBackendServiceCdnPolicyBypassCacheOnRequestHeadersToHclTerraform(struct?: ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders | cdktf.IResolvable | undefined) {
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

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}

export class ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference {
    return new ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeBackendServiceCdnPolicyCacheKeyPolicy {
  /**
  * If true requests to different hosts will be cached separately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#include_host ComputeBackendService#include_host}
  */
  readonly includeHost?: boolean | cdktf.IResolvable;
  /**
  * Allows HTTP request headers (by name) to be used in the
  * cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#include_http_headers ComputeBackendService#include_http_headers}
  */
  readonly includeHttpHeaders?: string[];
  /**
  * Names of cookies to include in cache keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#include_named_cookies ComputeBackendService#include_named_cookies}
  */
  readonly includeNamedCookies?: string[];
  /**
  * If true, http and https requests will be cached separately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#include_protocol ComputeBackendService#include_protocol}
  */
  readonly includeProtocol?: boolean | cdktf.IResolvable;
  /**
  * If true, include query string parameters in the cache key
  * according to query_string_whitelist and
  * query_string_blacklist. If neither is set, the entire query
  * string will be included.
  * 
  * If false, the query string will be excluded from the cache
  * key entirely.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#include_query_string ComputeBackendService#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktf.IResolvable;
  /**
  * Names of query string parameters to exclude in cache keys.
  * 
  * All other parameters will be included. Either specify
  * query_string_whitelist or query_string_blacklist, not both.
  * '&' and '=' will be percent encoded and not treated as
  * delimiters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#query_string_blacklist ComputeBackendService#query_string_blacklist}
  */
  readonly queryStringBlacklist?: string[];
  /**
  * Names of query string parameters to include in cache keys.
  * 
  * All other parameters will be excluded. Either specify
  * query_string_whitelist or query_string_blacklist, not both.
  * '&' and '=' will be percent encoded and not treated as
  * delimiters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#query_string_whitelist ComputeBackendService#query_string_whitelist}
  */
  readonly queryStringWhitelist?: string[];
}

export function computeBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct?: ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference | ComputeBackendServiceCdnPolicyCacheKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_host: cdktf.booleanToTerraform(struct!.includeHost),
    include_http_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeHttpHeaders),
    include_named_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeNamedCookies),
    include_protocol: cdktf.booleanToTerraform(struct!.includeProtocol),
    include_query_string: cdktf.booleanToTerraform(struct!.includeQueryString),
    query_string_blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryStringBlacklist),
    query_string_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryStringWhitelist),
  }
}


export function computeBackendServiceCdnPolicyCacheKeyPolicyToHclTerraform(struct?: ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference | ComputeBackendServiceCdnPolicyCacheKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_host: {
      value: cdktf.booleanToHclTerraform(struct!.includeHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_http_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeHttpHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_named_cookies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeNamedCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.includeProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_query_string: {
      value: cdktf.booleanToHclTerraform(struct!.includeQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_string_blacklist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryStringBlacklist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    query_string_whitelist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryStringWhitelist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendServiceCdnPolicyCacheKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHost = this._includeHost;
    }
    if (this._includeHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHttpHeaders = this._includeHttpHeaders;
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

  public set internalValue(value: ComputeBackendServiceCdnPolicyCacheKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeHost = undefined;
      this._includeHttpHeaders = undefined;
      this._includeNamedCookies = undefined;
      this._includeProtocol = undefined;
      this._includeQueryString = undefined;
      this._queryStringBlacklist = undefined;
      this._queryStringWhitelist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeHost = value.includeHost;
      this._includeHttpHeaders = value.includeHttpHeaders;
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
export interface ComputeBackendServiceCdnPolicyNegativeCachingPolicy {
  /**
  * The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
  * can be specified as values, and you cannot specify a status code more than once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#code ComputeBackendService#code}
  */
  readonly code?: number;
  /**
  * The TTL (in seconds) for which to cache responses with the corresponding status code. The maximum allowed value is 1800s
  * (30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#ttl ComputeBackendService#ttl}
  */
  readonly ttl?: number;
}

export function computeBackendServiceCdnPolicyNegativeCachingPolicyToTerraform(struct?: ComputeBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function computeBackendServiceCdnPolicyNegativeCachingPolicyToHclTerraform(struct?: ComputeBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable | undefined) {
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

export class ComputeBackendServiceCdnPolicyNegativeCachingPolicyList extends cdktf.ComplexList {
  public internalValue? : ComputeBackendServiceCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable

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
  public get(index: number): ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference {
    return new ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeBackendServiceCdnPolicy {
  /**
  * Specifies the cache setting for all responses from this backend.
  * The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#cache_mode ComputeBackendService#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#client_ttl ComputeBackendService#client_ttl}
  */
  readonly clientTtl?: number;
  /**
  * Specifies the default TTL for cached content served by this origin for responses
  * that do not have an existing valid TTL (max-age or s-max-age).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#default_ttl ComputeBackendService#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_ttl ComputeBackendService#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#negative_caching ComputeBackendService#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktf.IResolvable;
  /**
  * If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests
  * to the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#request_coalescing ComputeBackendService#request_coalescing}
  */
  readonly requestCoalescing?: boolean | cdktf.IResolvable;
  /**
  * Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#serve_while_stale ComputeBackendService#serve_while_stale}
  */
  readonly serveWhileStale?: number;
  /**
  * Maximum number of seconds the response to a signed URL request
  * will be considered fresh, defaults to 1hr (3600s). After this
  * time period, the response will be revalidated before
  * being served.
  * 
  * When serving responses to signed URL requests, Cloud CDN will
  * internally behave as though all responses from this backend had a
  * "Cache-Control: public, max-age=[TTL]" header, regardless of any
  * existing Cache-Control header. The actual headers served in
  * responses will not be altered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#signed_url_cache_max_age_sec ComputeBackendService#signed_url_cache_max_age_sec}
  */
  readonly signedUrlCacheMaxAgeSec?: number;
  /**
  * bypass_cache_on_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#bypass_cache_on_request_headers ComputeBackendService#bypass_cache_on_request_headers}
  */
  readonly bypassCacheOnRequestHeaders?: ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders[] | cdktf.IResolvable;
  /**
  * cache_key_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#cache_key_policy ComputeBackendService#cache_key_policy}
  */
  readonly cacheKeyPolicy?: ComputeBackendServiceCdnPolicyCacheKeyPolicy;
  /**
  * negative_caching_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#negative_caching_policy ComputeBackendService#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: ComputeBackendServiceCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable;
}

export function computeBackendServiceCdnPolicyToTerraform(struct?: ComputeBackendServiceCdnPolicyOutputReference | ComputeBackendServiceCdnPolicy): any {
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
    bypass_cache_on_request_headers: cdktf.listMapper(computeBackendServiceCdnPolicyBypassCacheOnRequestHeadersToTerraform, true)(struct!.bypassCacheOnRequestHeaders),
    cache_key_policy: computeBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct!.cacheKeyPolicy),
    negative_caching_policy: cdktf.listMapper(computeBackendServiceCdnPolicyNegativeCachingPolicyToTerraform, true)(struct!.negativeCachingPolicy),
  }
}


export function computeBackendServiceCdnPolicyToHclTerraform(struct?: ComputeBackendServiceCdnPolicyOutputReference | ComputeBackendServiceCdnPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_mode: {
      value: cdktf.stringToHclTerraform(struct!.cacheMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ttl: {
      value: cdktf.numberToHclTerraform(struct!.clientTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_ttl: {
      value: cdktf.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ttl: {
      value: cdktf.numberToHclTerraform(struct!.maxTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    negative_caching: {
      value: cdktf.booleanToHclTerraform(struct!.negativeCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_coalescing: {
      value: cdktf.booleanToHclTerraform(struct!.requestCoalescing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serve_while_stale: {
      value: cdktf.numberToHclTerraform(struct!.serveWhileStale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signed_url_cache_max_age_sec: {
      value: cdktf.numberToHclTerraform(struct!.signedUrlCacheMaxAgeSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_cache_on_request_headers: {
      value: cdktf.listMapperHcl(computeBackendServiceCdnPolicyBypassCacheOnRequestHeadersToHclTerraform, true)(struct!.bypassCacheOnRequestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList",
    },
    cache_key_policy: {
      value: computeBackendServiceCdnPolicyCacheKeyPolicyToHclTerraform(struct!.cacheKeyPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceCdnPolicyCacheKeyPolicyList",
    },
    negative_caching_policy: {
      value: cdktf.listMapperHcl(computeBackendServiceCdnPolicyNegativeCachingPolicyToHclTerraform, true)(struct!.negativeCachingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceCdnPolicyNegativeCachingPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceCdnPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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

  public set internalValue(value: ComputeBackendServiceCdnPolicy | undefined) {
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

  // request_coalescing - computed: true, optional: true, required: false
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
  private _bypassCacheOnRequestHeaders = new ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList(this, "bypass_cache_on_request_headers", false);
  public get bypassCacheOnRequestHeaders() {
    return this._bypassCacheOnRequestHeaders;
  }
  public putBypassCacheOnRequestHeaders(value: ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders[] | cdktf.IResolvable) {
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
  private _cacheKeyPolicy = new ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference(this, "cache_key_policy");
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
  private _negativeCachingPolicy = new ComputeBackendServiceCdnPolicyNegativeCachingPolicyList(this, "negative_caching_policy", false);
  public get negativeCachingPolicy() {
    return this._negativeCachingPolicy;
  }
  public putNegativeCachingPolicy(value: ComputeBackendServiceCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable) {
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
export interface ComputeBackendServiceCircuitBreakers {
  /**
  * The maximum number of connections to the backend cluster.
  * Defaults to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_connections ComputeBackendService#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The maximum number of pending requests to the backend cluster.
  * Defaults to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_pending_requests ComputeBackendService#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * The maximum number of parallel requests to the backend cluster.
  * Defaults to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_requests ComputeBackendService#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Maximum requests for a single backend connection. This parameter
  * is respected by both the HTTP/1.1 and HTTP/2 implementations. If
  * not specified, there is no limit. Setting this parameter to 1
  * will effectively disable keep alive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_requests_per_connection ComputeBackendService#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * The maximum number of parallel retries to the backend cluster.
  * Defaults to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_retries ComputeBackendService#max_retries}
  */
  readonly maxRetries?: number;
}

export function computeBackendServiceCircuitBreakersToTerraform(struct?: ComputeBackendServiceCircuitBreakersOutputReference | ComputeBackendServiceCircuitBreakers): any {
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


export function computeBackendServiceCircuitBreakersToHclTerraform(struct?: ComputeBackendServiceCircuitBreakersOutputReference | ComputeBackendServiceCircuitBreakers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests_per_connection: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceCircuitBreakersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must
  * be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
  * Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}
  */
  readonly seconds: number;
}

export function computeBackendServiceConsistentHashHttpCookieTtlToTerraform(struct?: ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference | ComputeBackendServiceConsistentHashHttpCookieTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function computeBackendServiceConsistentHashHttpCookieTtlToHclTerraform(struct?: ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference | ComputeBackendServiceConsistentHashHttpCookieTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}
  */
  readonly name?: string;
  /**
  * Path to set for the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#path ComputeBackendService#path}
  */
  readonly path?: string;
  /**
  * ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#ttl ComputeBackendService#ttl}
  */
  readonly ttl?: ComputeBackendServiceConsistentHashHttpCookieTtl;
}

export function computeBackendServiceConsistentHashHttpCookieToTerraform(struct?: ComputeBackendServiceConsistentHashHttpCookieOutputReference | ComputeBackendServiceConsistentHashHttpCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: computeBackendServiceConsistentHashHttpCookieTtlToTerraform(struct!.ttl),
  }
}


export function computeBackendServiceConsistentHashHttpCookieToHclTerraform(struct?: ComputeBackendServiceConsistentHashHttpCookieOutputReference | ComputeBackendServiceConsistentHashHttpCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: computeBackendServiceConsistentHashHttpCookieTtlToHclTerraform(struct!.ttl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceConsistentHashHttpCookieTtlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceConsistentHashHttpCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  private _ttl = new ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference(this, "ttl");
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
  * This field is applicable if the sessionAffinity is set to HEADER_FIELD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#http_header_name ComputeBackendService#http_header_name}
  */
  readonly httpHeaderName?: string;
  /**
  * The minimum number of virtual nodes to use for the hash ring.
  * Larger ring sizes result in more granular load
  * distributions. If the number of hosts in the load balancing pool
  * is larger than the ring size, each host will be assigned a single
  * virtual node.
  * Defaults to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#minimum_ring_size ComputeBackendService#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
  /**
  * http_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#http_cookie ComputeBackendService#http_cookie}
  */
  readonly httpCookie?: ComputeBackendServiceConsistentHashHttpCookie;
}

export function computeBackendServiceConsistentHashToTerraform(struct?: ComputeBackendServiceConsistentHashOutputReference | ComputeBackendServiceConsistentHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
    http_cookie: computeBackendServiceConsistentHashHttpCookieToTerraform(struct!.httpCookie),
  }
}


export function computeBackendServiceConsistentHashToHclTerraform(struct?: ComputeBackendServiceConsistentHashOutputReference | ComputeBackendServiceConsistentHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_header_name: {
      value: cdktf.stringToHclTerraform(struct!.httpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_cookie: {
      value: computeBackendServiceConsistentHashHttpCookieToHclTerraform(struct!.httpCookie),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceConsistentHashHttpCookieList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceConsistentHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  private _httpCookie = new ComputeBackendServiceConsistentHashHttpCookieOutputReference(this, "http_cookie");
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
export interface ComputeBackendServiceCustomMetrics {
  /**
  * If true, the metric data is not used for load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#dry_run ComputeBackendService#dry_run}
  */
  readonly dryRun: boolean | cdktf.IResolvable;
  /**
  * Name of a custom utilization signal. The name must be 1-64 characters
  * long and match the regular expression [a-z]([-_.a-z0-9]*[a-z0-9])? which
  * means the first character must be a lowercase letter, and all following
  * characters must be a dash, period, underscore, lowercase letter, or
  * digit, except the last character, which cannot be a dash, period, or
  * underscore. For usage guidelines, see Custom Metrics balancing mode. This
  * field can only be used for a global or regional backend service with the
  * loadBalancingScheme set to <code>EXTERNAL_MANAGED</code>,
  * <code>INTERNAL_MANAGED</code> <code>INTERNAL_SELF_MANAGED</code>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}
  */
  readonly name: string;
}

export function computeBackendServiceCustomMetricsToTerraform(struct?: ComputeBackendServiceCustomMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeBackendServiceCustomMetricsToHclTerraform(struct?: ComputeBackendServiceCustomMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceCustomMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeBackendServiceCustomMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceCustomMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dryRun = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dryRun = value.dryRun;
      this._name = value.name;
    }
  }

  // dry_run - computed: false, optional: false, required: true
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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
}

export class ComputeBackendServiceCustomMetricsList extends cdktf.ComplexList {
  public internalValue? : ComputeBackendServiceCustomMetrics[] | cdktf.IResolvable

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
  public get(index: number): ComputeBackendServiceCustomMetricsOutputReference {
    return new ComputeBackendServiceCustomMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeBackendServiceIap {
  /**
  * Whether the serving infrastructure will authenticate and authorize all incoming requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#enabled ComputeBackendService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * OAuth2 Client ID for IAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#oauth2_client_id ComputeBackendService#oauth2_client_id}
  */
  readonly oauth2ClientId?: string;
  /**
  * OAuth2 Client Secret for IAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#oauth2_client_secret ComputeBackendService#oauth2_client_secret}
  */
  readonly oauth2ClientSecret?: string;
}

export function computeBackendServiceIapToTerraform(struct?: ComputeBackendServiceIapOutputReference | ComputeBackendServiceIap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_client_secret: cdktf.stringToTerraform(struct!.oauth2ClientSecret),
  }
}


export function computeBackendServiceIapToHclTerraform(struct?: ComputeBackendServiceIapOutputReference | ComputeBackendServiceIap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oauth2_client_id: {
      value: cdktf.stringToHclTerraform(struct!.oauth2ClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.oauth2ClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceIapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendServiceIap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
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
      this._enabled = undefined;
      this._oauth2ClientId = undefined;
      this._oauth2ClientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._oauth2ClientId = value.oauth2ClientId;
      this._oauth2ClientSecret = value.oauth2ClientSecret;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // oauth2_client_id - computed: false, optional: true, required: false
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  public resetOauth2ClientId() {
    this._oauth2ClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_client_secret - computed: false, optional: true, required: false
  private _oauth2ClientSecret?: string; 
  public get oauth2ClientSecret() {
    return this.getStringAttribute('oauth2_client_secret');
  }
  public set oauth2ClientSecret(value: string) {
    this._oauth2ClientSecret = value;
  }
  public resetOauth2ClientSecret() {
    this._oauth2ClientSecret = undefined;
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
export interface ComputeBackendServiceLocalityLbPoliciesCustomPolicy {
  /**
  * An optional, arbitrary JSON object with configuration data, understood
  * by a locally installed custom policy implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#data ComputeBackendService#data}
  */
  readonly data?: string;
  /**
  * Identifies the custom policy.
  * 
  * The value should match the type the custom implementation is registered
  * with on the gRPC clients. It should follow protocol buffer
  * message naming conventions and include the full path (e.g.
  * myorg.CustomLbPolicy). The maximum length is 256 characters.
  * 
  * Note that specifying the same custom policy more than once for a
  * backend is not a valid configuration and will be rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}
  */
  readonly name: string;
}

export function computeBackendServiceLocalityLbPoliciesCustomPolicyToTerraform(struct?: ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference | ComputeBackendServiceLocalityLbPoliciesCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeBackendServiceLocalityLbPoliciesCustomPolicyToHclTerraform(struct?: ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference | ComputeBackendServiceLocalityLbPoliciesCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendServiceLocalityLbPoliciesCustomPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceLocalityLbPoliciesCustomPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._name = value.name;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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
}
export interface ComputeBackendServiceLocalityLbPoliciesPolicy {
  /**
  * The name of a locality load balancer policy to be used. The value
  * should be one of the predefined ones as supported by localityLbPolicy,
  * although at the moment only ROUND_ROBIN is supported.
  * 
  * This field should only be populated when the customPolicy field is not
  * used.
  * 
  * Note that specifying the same policy more than once for a backend is
  * not a valid configuration and will be rejected.
  * 
  * The possible values are:
  * 
  * * 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  *                 is selected in round robin order.
  * 
  * * 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  *                   hosts and picks the host which has fewer active requests.
  * 
  * * 'RING_HASH': The ring/modulo hash load balancer implements consistent
  *               hashing to backends. The algorithm has the property that the
  *               addition/removal of a host from a set of N hosts only affects
  *               1/N of the requests.
  * 
  * * 'RANDOM': The load balancer selects a random healthy host.
  * 
  * * 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  *                           connection metadata, i.e., connections are opened
  *                           to the same address as the destination address of
  *                           the incoming connection before the connection
  *                           was redirected to the load balancer.
  * 
  * * 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  *             Maglev is not as stable as ring hash but has faster table lookup
  *             build times and host selection times. For more information about
  *             Maglev, refer to https://ai.google/research/pubs/pub44824 Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}
  */
  readonly name: string;
}

export function computeBackendServiceLocalityLbPoliciesPolicyToTerraform(struct?: ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference | ComputeBackendServiceLocalityLbPoliciesPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeBackendServiceLocalityLbPoliciesPolicyToHclTerraform(struct?: ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference | ComputeBackendServiceLocalityLbPoliciesPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendServiceLocalityLbPoliciesPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceLocalityLbPoliciesPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface ComputeBackendServiceLocalityLbPolicies {
  /**
  * custom_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#custom_policy ComputeBackendService#custom_policy}
  */
  readonly customPolicy?: ComputeBackendServiceLocalityLbPoliciesCustomPolicy;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#policy ComputeBackendService#policy}
  */
  readonly policy?: ComputeBackendServiceLocalityLbPoliciesPolicy;
}

export function computeBackendServiceLocalityLbPoliciesToTerraform(struct?: ComputeBackendServiceLocalityLbPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_policy: computeBackendServiceLocalityLbPoliciesCustomPolicyToTerraform(struct!.customPolicy),
    policy: computeBackendServiceLocalityLbPoliciesPolicyToTerraform(struct!.policy),
  }
}


export function computeBackendServiceLocalityLbPoliciesToHclTerraform(struct?: ComputeBackendServiceLocalityLbPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_policy: {
      value: computeBackendServiceLocalityLbPoliciesCustomPolicyToHclTerraform(struct!.customPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceLocalityLbPoliciesCustomPolicyList",
    },
    policy: {
      value: computeBackendServiceLocalityLbPoliciesPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceLocalityLbPoliciesPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceLocalityLbPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeBackendServiceLocalityLbPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPolicy = this._customPolicy?.internalValue;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceLocalityLbPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPolicy.internalValue = undefined;
      this._policy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPolicy.internalValue = value.customPolicy;
      this._policy.internalValue = value.policy;
    }
  }

  // custom_policy - computed: false, optional: true, required: false
  private _customPolicy = new ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference(this, "custom_policy");
  public get customPolicy() {
    return this._customPolicy;
  }
  public putCustomPolicy(value: ComputeBackendServiceLocalityLbPoliciesCustomPolicy) {
    this._customPolicy.internalValue = value;
  }
  public resetCustomPolicy() {
    this._customPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPolicyInput() {
    return this._customPolicy.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: ComputeBackendServiceLocalityLbPoliciesPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}

export class ComputeBackendServiceLocalityLbPoliciesList extends cdktf.ComplexList {
  public internalValue? : ComputeBackendServiceLocalityLbPolicies[] | cdktf.IResolvable

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
  public get(index: number): ComputeBackendServiceLocalityLbPoliciesOutputReference {
    return new ComputeBackendServiceLocalityLbPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeBackendServiceLogConfig {
  /**
  * Whether to enable logging for the load balancer traffic served by this backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#enable ComputeBackendService#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * This field can only be specified if logging is enabled for this backend service and "logConfig.optionalMode"
  * was set to CUSTOM. Contains a list of optional fields you want to include in the logs.
  * For example: serverInstance, serverGkeDetails.cluster, serverGkeDetails.pod.podNamespace
  * For example: orca_load_report, tls.protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#optional_fields ComputeBackendService#optional_fields}
  */
  readonly optionalFields?: string[];
  /**
  * Specifies the optional logging mode for the load balancer traffic.
  * Supported values: INCLUDE_ALL_OPTIONAL, EXCLUDE_ALL_OPTIONAL, CUSTOM. Possible values: ["INCLUDE_ALL_OPTIONAL", "EXCLUDE_ALL_OPTIONAL", "CUSTOM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#optional_mode ComputeBackendService#optional_mode}
  */
  readonly optionalMode?: string;
  /**
  * This field can only be specified if logging is enabled for this backend service. The value of
  * the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
  * where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
  * The default value is 1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#sample_rate ComputeBackendService#sample_rate}
  */
  readonly sampleRate?: number;
}

export function computeBackendServiceLogConfigToTerraform(struct?: ComputeBackendServiceLogConfigOutputReference | ComputeBackendServiceLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    optional_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.optionalFields),
    optional_mode: cdktf.stringToTerraform(struct!.optionalMode),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}


export function computeBackendServiceLogConfigToHclTerraform(struct?: ComputeBackendServiceLogConfigOutputReference | ComputeBackendServiceLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    optional_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.optionalFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    optional_mode: {
      value: cdktf.stringToHclTerraform(struct!.optionalMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendServiceLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._optionalFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalFields = this._optionalFields;
    }
    if (this._optionalMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalMode = this._optionalMode;
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
      this._optionalFields = undefined;
      this._optionalMode = undefined;
      this._sampleRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._optionalFields = value.optionalFields;
      this._optionalMode = value.optionalMode;
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

  // optional_fields - computed: false, optional: true, required: false
  private _optionalFields?: string[]; 
  public get optionalFields() {
    return this.getListAttribute('optional_fields');
  }
  public set optionalFields(value: string[]) {
    this._optionalFields = value;
  }
  public resetOptionalFields() {
    this._optionalFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalFieldsInput() {
    return this._optionalFields;
  }

  // optional_mode - computed: true, optional: true, required: false
  private _optionalMode?: string; 
  public get optionalMode() {
    return this.getStringAttribute('optional_mode');
  }
  public set optionalMode(value: string) {
    this._optionalMode = value;
  }
  public resetOptionalMode() {
    this._optionalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalModeInput() {
    return this._optionalMode;
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
export interface ComputeBackendServiceMaxStreamDuration {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  * Durations less than one second are represented with a 0 seconds field and a positive nanos field.
  * Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}
  */
  readonly seconds: string;
}

export function computeBackendServiceMaxStreamDurationToTerraform(struct?: ComputeBackendServiceMaxStreamDurationOutputReference | ComputeBackendServiceMaxStreamDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function computeBackendServiceMaxStreamDurationToHclTerraform(struct?: ComputeBackendServiceMaxStreamDurationOutputReference | ComputeBackendServiceMaxStreamDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceMaxStreamDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendServiceMaxStreamDuration | undefined {
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

  public set internalValue(value: ComputeBackendServiceMaxStreamDuration | undefined) {
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
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeBackendServiceOutlierDetectionBaseEjectionTime {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}
  */
  readonly seconds: number;
}

export function computeBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct?: ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference | ComputeBackendServiceOutlierDetectionBaseEjectionTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function computeBackendServiceOutlierDetectionBaseEjectionTimeToHclTerraform(struct?: ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference | ComputeBackendServiceOutlierDetectionBaseEjectionTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}
  */
  readonly seconds: number;
}

export function computeBackendServiceOutlierDetectionIntervalToTerraform(struct?: ComputeBackendServiceOutlierDetectionIntervalOutputReference | ComputeBackendServiceOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function computeBackendServiceOutlierDetectionIntervalToHclTerraform(struct?: ComputeBackendServiceOutlierDetectionIntervalOutputReference | ComputeBackendServiceOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * backend host is accessed over HTTP, a 5xx return code qualifies as an error.
  * Defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#consecutive_errors ComputeBackendService#consecutive_errors}
  */
  readonly consecutiveErrors?: number;
  /**
  * The number of consecutive gateway failures (502, 503, 504 status or connection
  * errors that are mapped to one of those status codes) before a consecutive
  * gateway failure ejection occurs. Defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#consecutive_gateway_failure ComputeBackendService#consecutive_gateway_failure}
  */
  readonly consecutiveGatewayFailure?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
  * status is detected through consecutive 5xx. This setting can be used to disable
  * ejection or to ramp it up slowly. Defaults to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#enforcing_consecutive_errors ComputeBackendService#enforcing_consecutive_errors}
  */
  readonly enforcingConsecutiveErrors?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
  * status is detected through consecutive gateway failures. This setting can be
  * used to disable ejection or to ramp it up slowly. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#enforcing_consecutive_gateway_failure ComputeBackendService#enforcing_consecutive_gateway_failure}
  */
  readonly enforcingConsecutiveGatewayFailure?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
  * status is detected through success rate statistics. This setting can be used to
  * disable ejection or to ramp it up slowly. Defaults to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#enforcing_success_rate ComputeBackendService#enforcing_success_rate}
  */
  readonly enforcingSuccessRate?: number;
  /**
  * Maximum percentage of hosts in the load balancing pool for the backend service
  * that can be ejected. Defaults to 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#max_ejection_percent ComputeBackendService#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * The number of hosts in a cluster that must have enough request volume to detect
  * success rate outliers. If the number of hosts is less than this setting, outlier
  * detection via success rate statistics is not performed for any host in the
  * cluster. Defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#success_rate_minimum_hosts ComputeBackendService#success_rate_minimum_hosts}
  */
  readonly successRateMinimumHosts?: number;
  /**
  * The minimum number of total requests that must be collected in one interval (as
  * defined by the interval duration above) to include this host in success rate
  * based outlier detection. If the volume is lower than this setting, outlier
  * detection via success rate statistics is not performed for that host. Defaults
  * to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#success_rate_request_volume ComputeBackendService#success_rate_request_volume}
  */
  readonly successRateRequestVolume?: number;
  /**
  * This factor is used to determine the ejection threshold for success rate outlier
  * ejection. The ejection threshold is the difference between the mean success
  * rate, and the product of this factor and the standard deviation of the mean
  * success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
  * by a thousand to get a double. That is, if the desired factor is 1.9, the
  * runtime value should be 1900. Defaults to 1900.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#success_rate_stdev_factor ComputeBackendService#success_rate_stdev_factor}
  */
  readonly successRateStdevFactor?: number;
  /**
  * base_ejection_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#base_ejection_time ComputeBackendService#base_ejection_time}
  */
  readonly baseEjectionTime?: ComputeBackendServiceOutlierDetectionBaseEjectionTime;
  /**
  * interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#interval ComputeBackendService#interval}
  */
  readonly interval?: ComputeBackendServiceOutlierDetectionInterval;
}

export function computeBackendServiceOutlierDetectionToTerraform(struct?: ComputeBackendServiceOutlierDetectionOutputReference | ComputeBackendServiceOutlierDetection): any {
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
    base_ejection_time: computeBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct!.baseEjectionTime),
    interval: computeBackendServiceOutlierDetectionIntervalToTerraform(struct!.interval),
  }
}


export function computeBackendServiceOutlierDetectionToHclTerraform(struct?: ComputeBackendServiceOutlierDetectionOutputReference | ComputeBackendServiceOutlierDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_gateway_failure: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveGatewayFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforcing_consecutive_errors: {
      value: cdktf.numberToHclTerraform(struct!.enforcingConsecutiveErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforcing_consecutive_gateway_failure: {
      value: cdktf.numberToHclTerraform(struct!.enforcingConsecutiveGatewayFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforcing_success_rate: {
      value: cdktf.numberToHclTerraform(struct!.enforcingSuccessRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_rate_minimum_hosts: {
      value: cdktf.numberToHclTerraform(struct!.successRateMinimumHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_rate_request_volume: {
      value: cdktf.numberToHclTerraform(struct!.successRateRequestVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_rate_stdev_factor: {
      value: cdktf.numberToHclTerraform(struct!.successRateStdevFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    base_ejection_time: {
      value: computeBackendServiceOutlierDetectionBaseEjectionTimeToHclTerraform(struct!.baseEjectionTime),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceOutlierDetectionBaseEjectionTimeList",
    },
    interval: {
      value: computeBackendServiceOutlierDetectionIntervalToHclTerraform(struct!.interval),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceOutlierDetectionIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  private _baseEjectionTime = new ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(this, "base_ejection_time");
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
  private _interval = new ComputeBackendServiceOutlierDetectionIntervalOutputReference(this, "interval");
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
export interface ComputeBackendServiceSecuritySettingsAwsV4Authentication {
  /**
  * The access key used for s3 bucket authentication.
  * Required for updating or creating a backend that uses AWS v4 signature authentication, but will not be returned as part of the configuration when queried with a REST API GET request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#access_key ComputeBackendService#access_key}
  */
  readonly accessKey?: string;
  /**
  * The identifier of an access key used for s3 bucket authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#access_key_id ComputeBackendService#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The optional version identifier for the access key. You can use this to keep track of different iterations of your access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#access_key_version ComputeBackendService#access_key_version}
  */
  readonly accessKeyVersion?: string;
  /**
  * The name of the cloud region of your origin. This is a free-form field with the name of the region your cloud uses to host your origin.
  * For example, "us-east-1" for AWS or "us-ashburn-1" for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#origin_region ComputeBackendService#origin_region}
  */
  readonly originRegion?: string;
}

export function computeBackendServiceSecuritySettingsAwsV4AuthenticationToTerraform(struct?: ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference | ComputeBackendServiceSecuritySettingsAwsV4Authentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    access_key_version: cdktf.stringToTerraform(struct!.accessKeyVersion),
    origin_region: cdktf.stringToTerraform(struct!.originRegion),
  }
}


export function computeBackendServiceSecuritySettingsAwsV4AuthenticationToHclTerraform(struct?: ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference | ComputeBackendServiceSecuritySettingsAwsV4Authentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key_version: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_region: {
      value: cdktf.stringToHclTerraform(struct!.originRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendServiceSecuritySettingsAwsV4Authentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._accessKeyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyVersion = this._accessKeyVersion;
    }
    if (this._originRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRegion = this._originRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceSecuritySettingsAwsV4Authentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._accessKeyId = undefined;
      this._accessKeyVersion = undefined;
      this._originRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._accessKeyId = value.accessKeyId;
      this._accessKeyVersion = value.accessKeyVersion;
      this._originRegion = value.originRegion;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // access_key_version - computed: false, optional: true, required: false
  private _accessKeyVersion?: string; 
  public get accessKeyVersion() {
    return this.getStringAttribute('access_key_version');
  }
  public set accessKeyVersion(value: string) {
    this._accessKeyVersion = value;
  }
  public resetAccessKeyVersion() {
    this._accessKeyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyVersionInput() {
    return this._accessKeyVersion;
  }

  // origin_region - computed: false, optional: true, required: false
  private _originRegion?: string; 
  public get originRegion() {
    return this.getStringAttribute('origin_region');
  }
  public set originRegion(value: string) {
    this._originRegion = value;
  }
  public resetOriginRegion() {
    this._originRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRegionInput() {
    return this._originRegion;
  }
}
export interface ComputeBackendServiceSecuritySettings {
  /**
  * ClientTlsPolicy is a resource that specifies how a client should authenticate
  * connections to backends of a service. This resource itself does not affect
  * configuration unless it is attached to a backend service resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#client_tls_policy ComputeBackendService#client_tls_policy}
  */
  readonly clientTlsPolicy?: string;
  /**
  * A list of alternate names to verify the subject identity in the certificate.
  * If specified, the client will verify that the server certificate's subject
  * alt name matches one of the specified values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#subject_alt_names ComputeBackendService#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
  /**
  * aws_v4_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#aws_v4_authentication ComputeBackendService#aws_v4_authentication}
  */
  readonly awsV4Authentication?: ComputeBackendServiceSecuritySettingsAwsV4Authentication;
}

export function computeBackendServiceSecuritySettingsToTerraform(struct?: ComputeBackendServiceSecuritySettingsOutputReference | ComputeBackendServiceSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_tls_policy: cdktf.stringToTerraform(struct!.clientTlsPolicy),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
    aws_v4_authentication: computeBackendServiceSecuritySettingsAwsV4AuthenticationToTerraform(struct!.awsV4Authentication),
  }
}


export function computeBackendServiceSecuritySettingsToHclTerraform(struct?: ComputeBackendServiceSecuritySettingsOutputReference | ComputeBackendServiceSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_tls_policy: {
      value: cdktf.stringToHclTerraform(struct!.clientTlsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    aws_v4_authentication: {
      value: computeBackendServiceSecuritySettingsAwsV4AuthenticationToHclTerraform(struct!.awsV4Authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceSecuritySettingsAwsV4AuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceSecuritySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendServiceSecuritySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientTlsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTlsPolicy = this._clientTlsPolicy;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    if (this._awsV4Authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsV4Authentication = this._awsV4Authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceSecuritySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientTlsPolicy = undefined;
      this._subjectAltNames = undefined;
      this._awsV4Authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientTlsPolicy = value.clientTlsPolicy;
      this._subjectAltNames = value.subjectAltNames;
      this._awsV4Authentication.internalValue = value.awsV4Authentication;
    }
  }

  // client_tls_policy - computed: false, optional: true, required: false
  private _clientTlsPolicy?: string; 
  public get clientTlsPolicy() {
    return this.getStringAttribute('client_tls_policy');
  }
  public set clientTlsPolicy(value: string) {
    this._clientTlsPolicy = value;
  }
  public resetClientTlsPolicy() {
    this._clientTlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsPolicyInput() {
    return this._clientTlsPolicy;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }

  // aws_v4_authentication - computed: false, optional: true, required: false
  private _awsV4Authentication = new ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference(this, "aws_v4_authentication");
  public get awsV4Authentication() {
    return this._awsV4Authentication;
  }
  public putAwsV4Authentication(value: ComputeBackendServiceSecuritySettingsAwsV4Authentication) {
    this._awsV4Authentication.internalValue = value;
  }
  public resetAwsV4Authentication() {
    this._awsV4Authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsV4AuthenticationInput() {
    return this._awsV4Authentication.internalValue;
  }
}
export interface ComputeBackendServiceStrongSessionAffinityCookieTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond
  * resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must
  * be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
  * Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}
  */
  readonly seconds: number;
}

export function computeBackendServiceStrongSessionAffinityCookieTtlToTerraform(struct?: ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference | ComputeBackendServiceStrongSessionAffinityCookieTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function computeBackendServiceStrongSessionAffinityCookieTtlToHclTerraform(struct?: ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference | ComputeBackendServiceStrongSessionAffinityCookieTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendServiceStrongSessionAffinityCookieTtl | undefined {
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

  public set internalValue(value: ComputeBackendServiceStrongSessionAffinityCookieTtl | undefined) {
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
export interface ComputeBackendServiceStrongSessionAffinityCookie {
  /**
  * Name of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#name ComputeBackendService#name}
  */
  readonly name?: string;
  /**
  * Path to set for the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#path ComputeBackendService#path}
  */
  readonly path?: string;
  /**
  * ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#ttl ComputeBackendService#ttl}
  */
  readonly ttl?: ComputeBackendServiceStrongSessionAffinityCookieTtl;
}

export function computeBackendServiceStrongSessionAffinityCookieToTerraform(struct?: ComputeBackendServiceStrongSessionAffinityCookieOutputReference | ComputeBackendServiceStrongSessionAffinityCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: computeBackendServiceStrongSessionAffinityCookieTtlToTerraform(struct!.ttl),
  }
}


export function computeBackendServiceStrongSessionAffinityCookieToHclTerraform(struct?: ComputeBackendServiceStrongSessionAffinityCookieOutputReference | ComputeBackendServiceStrongSessionAffinityCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: computeBackendServiceStrongSessionAffinityCookieTtlToHclTerraform(struct!.ttl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceStrongSessionAffinityCookieTtlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceStrongSessionAffinityCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendServiceStrongSessionAffinityCookie | undefined {
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

  public set internalValue(value: ComputeBackendServiceStrongSessionAffinityCookie | undefined) {
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
  private _ttl = new ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: ComputeBackendServiceStrongSessionAffinityCookieTtl) {
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
export interface ComputeBackendServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#create ComputeBackendService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#delete ComputeBackendService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#update ComputeBackendService#update}
  */
  readonly update?: string;
}

export function computeBackendServiceTimeoutsToTerraform(struct?: ComputeBackendServiceTimeouts | cdktf.IResolvable): any {
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


export function computeBackendServiceTimeoutsToHclTerraform(struct?: ComputeBackendServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeBackendServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeBackendServiceTimeouts | cdktf.IResolvable | undefined) {
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
export interface ComputeBackendServiceTlsSettingsSubjectAltNames {
  /**
  * The SAN specified as a DNS Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#dns_name ComputeBackendService#dns_name}
  */
  readonly dnsName?: string;
  /**
  * The SAN specified as a URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#uniform_resource_identifier ComputeBackendService#uniform_resource_identifier}
  */
  readonly uniformResourceIdentifier?: string;
}

export function computeBackendServiceTlsSettingsSubjectAltNamesToTerraform(struct?: ComputeBackendServiceTlsSettingsSubjectAltNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    uniform_resource_identifier: cdktf.stringToTerraform(struct!.uniformResourceIdentifier),
  }
}


export function computeBackendServiceTlsSettingsSubjectAltNamesToHclTerraform(struct?: ComputeBackendServiceTlsSettingsSubjectAltNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniform_resource_identifier: {
      value: cdktf.stringToHclTerraform(struct!.uniformResourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeBackendServiceTlsSettingsSubjectAltNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._uniformResourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniformResourceIdentifier = this._uniformResourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceTlsSettingsSubjectAltNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsName = undefined;
      this._uniformResourceIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsName = value.dnsName;
      this._uniformResourceIdentifier = value.uniformResourceIdentifier;
    }
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // uniform_resource_identifier - computed: false, optional: true, required: false
  private _uniformResourceIdentifier?: string; 
  public get uniformResourceIdentifier() {
    return this.getStringAttribute('uniform_resource_identifier');
  }
  public set uniformResourceIdentifier(value: string) {
    this._uniformResourceIdentifier = value;
  }
  public resetUniformResourceIdentifier() {
    this._uniformResourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformResourceIdentifierInput() {
    return this._uniformResourceIdentifier;
  }
}

export class ComputeBackendServiceTlsSettingsSubjectAltNamesList extends cdktf.ComplexList {
  public internalValue? : ComputeBackendServiceTlsSettingsSubjectAltNames[] | cdktf.IResolvable

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
  public get(index: number): ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference {
    return new ComputeBackendServiceTlsSettingsSubjectAltNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeBackendServiceTlsSettings {
  /**
  * Reference to the BackendAuthenticationConfig resource from the networksecurity.googleapis.com namespace.
  * Can be used in authenticating TLS connections to the backend, as specified by the authenticationMode field.
  * Can only be specified if authenticationMode is not NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#authentication_config ComputeBackendService#authentication_config}
  */
  readonly authenticationConfig?: string;
  /**
  * Server Name Indication - see RFC3546 section 3.1. If set, the load balancer sends this string as the SNI hostname in the
  * TLS connection to the backend, and requires that this string match a Subject Alternative Name (SAN) in the backend's
  * server certificate. With a Regional Internet NEG backend, if the SNI is specified here, the load balancer uses it
  * regardless of whether the Regional Internet NEG is specified with FQDN or IP address and port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#sni ComputeBackendService#sni}
  */
  readonly sni?: string;
  /**
  * subject_alt_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#subject_alt_names ComputeBackendService#subject_alt_names}
  */
  readonly subjectAltNames?: ComputeBackendServiceTlsSettingsSubjectAltNames[] | cdktf.IResolvable;
}

export function computeBackendServiceTlsSettingsToTerraform(struct?: ComputeBackendServiceTlsSettingsOutputReference | ComputeBackendServiceTlsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_config: cdktf.stringToTerraform(struct!.authenticationConfig),
    sni: cdktf.stringToTerraform(struct!.sni),
    subject_alt_names: cdktf.listMapper(computeBackendServiceTlsSettingsSubjectAltNamesToTerraform, true)(struct!.subjectAltNames),
  }
}


export function computeBackendServiceTlsSettingsToHclTerraform(struct?: ComputeBackendServiceTlsSettingsOutputReference | ComputeBackendServiceTlsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_config: {
      value: cdktf.stringToHclTerraform(struct!.authenticationConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(computeBackendServiceTlsSettingsSubjectAltNamesToHclTerraform, true)(struct!.subjectAltNames),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeBackendServiceTlsSettingsSubjectAltNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeBackendServiceTlsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendServiceTlsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfig = this._authenticationConfig;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._subjectAltNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeBackendServiceTlsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationConfig = undefined;
      this._sni = undefined;
      this._subjectAltNames.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationConfig = value.authenticationConfig;
      this._sni = value.sni;
      this._subjectAltNames.internalValue = value.subjectAltNames;
    }
  }

  // authentication_config - computed: false, optional: true, required: false
  private _authenticationConfig?: string; 
  public get authenticationConfig() {
    return this.getStringAttribute('authentication_config');
  }
  public set authenticationConfig(value: string) {
    this._authenticationConfig = value;
  }
  public resetAuthenticationConfig() {
    this._authenticationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigInput() {
    return this._authenticationConfig;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames = new ComputeBackendServiceTlsSettingsSubjectAltNamesList(this, "subject_alt_names", false);
  public get subjectAltNames() {
    return this._subjectAltNames;
  }
  public putSubjectAltNames(value: ComputeBackendServiceTlsSettingsSubjectAltNames[] | cdktf.IResolvable) {
    this._subjectAltNames.internalValue = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service google_compute_backend_service}
*/
export class ComputeBackendService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_backend_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeBackendService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeBackendService to import
  * @param importFromId The id of the existing ComputeBackendService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeBackendService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_backend_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_backend_service google_compute_backend_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeBackendServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeBackendServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_backend_service',
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
    this._affinityCookieTtlSec = config.affinityCookieTtlSec;
    this._compressionMode = config.compressionMode;
    this._connectionDrainingTimeoutSec = config.connectionDrainingTimeoutSec;
    this._customRequestHeaders = config.customRequestHeaders;
    this._customResponseHeaders = config.customResponseHeaders;
    this._description = config.description;
    this._edgeSecurityPolicy = config.edgeSecurityPolicy;
    this._enableCdn = config.enableCdn;
    this._externalManagedMigrationState = config.externalManagedMigrationState;
    this._externalManagedMigrationTestingPercentage = config.externalManagedMigrationTestingPercentage;
    this._healthChecks = config.healthChecks;
    this._id = config.id;
    this._ipAddressSelectionPolicy = config.ipAddressSelectionPolicy;
    this._loadBalancingScheme = config.loadBalancingScheme;
    this._localityLbPolicy = config.localityLbPolicy;
    this._name = config.name;
    this._portName = config.portName;
    this._project = config.project;
    this._protocol = config.protocol;
    this._securityPolicy = config.securityPolicy;
    this._serviceLbPolicy = config.serviceLbPolicy;
    this._sessionAffinity = config.sessionAffinity;
    this._timeoutSec = config.timeoutSec;
    this._backend.internalValue = config.backend;
    this._cdnPolicy.internalValue = config.cdnPolicy;
    this._circuitBreakers.internalValue = config.circuitBreakers;
    this._consistentHash.internalValue = config.consistentHash;
    this._customMetrics.internalValue = config.customMetrics;
    this._iap.internalValue = config.iap;
    this._localityLbPolicies.internalValue = config.localityLbPolicies;
    this._logConfig.internalValue = config.logConfig;
    this._maxStreamDuration.internalValue = config.maxStreamDuration;
    this._outlierDetection.internalValue = config.outlierDetection;
    this._securitySettings.internalValue = config.securitySettings;
    this._strongSessionAffinityCookie.internalValue = config.strongSessionAffinityCookie;
    this._timeouts.internalValue = config.timeouts;
    this._tlsSettings.internalValue = config.tlsSettings;
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

  // compression_mode - computed: false, optional: true, required: false
  private _compressionMode?: string; 
  public get compressionMode() {
    return this.getStringAttribute('compression_mode');
  }
  public set compressionMode(value: string) {
    this._compressionMode = value;
  }
  public resetCompressionMode() {
    this._compressionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionModeInput() {
    return this._compressionMode;
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
    return cdktf.Fn.tolist(this.getListAttribute('custom_request_headers'));
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
    return cdktf.Fn.tolist(this.getListAttribute('custom_response_headers'));
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

  // external_managed_migration_state - computed: false, optional: true, required: false
  private _externalManagedMigrationState?: string; 
  public get externalManagedMigrationState() {
    return this.getStringAttribute('external_managed_migration_state');
  }
  public set externalManagedMigrationState(value: string) {
    this._externalManagedMigrationState = value;
  }
  public resetExternalManagedMigrationState() {
    this._externalManagedMigrationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalManagedMigrationStateInput() {
    return this._externalManagedMigrationState;
  }

  // external_managed_migration_testing_percentage - computed: false, optional: true, required: false
  private _externalManagedMigrationTestingPercentage?: number; 
  public get externalManagedMigrationTestingPercentage() {
    return this.getNumberAttribute('external_managed_migration_testing_percentage');
  }
  public set externalManagedMigrationTestingPercentage(value: number) {
    this._externalManagedMigrationTestingPercentage = value;
  }
  public resetExternalManagedMigrationTestingPercentage() {
    this._externalManagedMigrationTestingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalManagedMigrationTestingPercentageInput() {
    return this._externalManagedMigrationTestingPercentage;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // generated_id - computed: true, optional: false, required: false
  public get generatedId() {
    return this.getNumberAttribute('generated_id');
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

  // ip_address_selection_policy - computed: false, optional: true, required: false
  private _ipAddressSelectionPolicy?: string; 
  public get ipAddressSelectionPolicy() {
    return this.getStringAttribute('ip_address_selection_policy');
  }
  public set ipAddressSelectionPolicy(value: string) {
    this._ipAddressSelectionPolicy = value;
  }
  public resetIpAddressSelectionPolicy() {
    this._ipAddressSelectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressSelectionPolicyInput() {
    return this._ipAddressSelectionPolicy;
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

  // service_lb_policy - computed: false, optional: true, required: false
  private _serviceLbPolicy?: string; 
  public get serviceLbPolicy() {
    return this.getStringAttribute('service_lb_policy');
  }
  public set serviceLbPolicy(value: string) {
    this._serviceLbPolicy = value;
  }
  public resetServiceLbPolicy() {
    this._serviceLbPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLbPolicyInput() {
    return this._serviceLbPolicy;
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
  private _backend = new ComputeBackendServiceBackendList(this, "backend", true);
  public get backend() {
    return this._backend;
  }
  public putBackend(value: ComputeBackendServiceBackend[] | cdktf.IResolvable) {
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
  private _cdnPolicy = new ComputeBackendServiceCdnPolicyOutputReference(this, "cdn_policy");
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
  private _circuitBreakers = new ComputeBackendServiceCircuitBreakersOutputReference(this, "circuit_breakers");
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
  private _consistentHash = new ComputeBackendServiceConsistentHashOutputReference(this, "consistent_hash");
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

  // custom_metrics - computed: false, optional: true, required: false
  private _customMetrics = new ComputeBackendServiceCustomMetricsList(this, "custom_metrics", false);
  public get customMetrics() {
    return this._customMetrics;
  }
  public putCustomMetrics(value: ComputeBackendServiceCustomMetrics[] | cdktf.IResolvable) {
    this._customMetrics.internalValue = value;
  }
  public resetCustomMetrics() {
    this._customMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricsInput() {
    return this._customMetrics.internalValue;
  }

  // iap - computed: false, optional: true, required: false
  private _iap = new ComputeBackendServiceIapOutputReference(this, "iap");
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

  // locality_lb_policies - computed: false, optional: true, required: false
  private _localityLbPolicies = new ComputeBackendServiceLocalityLbPoliciesList(this, "locality_lb_policies", false);
  public get localityLbPolicies() {
    return this._localityLbPolicies;
  }
  public putLocalityLbPolicies(value: ComputeBackendServiceLocalityLbPolicies[] | cdktf.IResolvable) {
    this._localityLbPolicies.internalValue = value;
  }
  public resetLocalityLbPolicies() {
    this._localityLbPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityLbPoliciesInput() {
    return this._localityLbPolicies.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new ComputeBackendServiceLogConfigOutputReference(this, "log_config");
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

  // max_stream_duration - computed: false, optional: true, required: false
  private _maxStreamDuration = new ComputeBackendServiceMaxStreamDurationOutputReference(this, "max_stream_duration");
  public get maxStreamDuration() {
    return this._maxStreamDuration;
  }
  public putMaxStreamDuration(value: ComputeBackendServiceMaxStreamDuration) {
    this._maxStreamDuration.internalValue = value;
  }
  public resetMaxStreamDuration() {
    this._maxStreamDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStreamDurationInput() {
    return this._maxStreamDuration.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new ComputeBackendServiceOutlierDetectionOutputReference(this, "outlier_detection");
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

  // security_settings - computed: false, optional: true, required: false
  private _securitySettings = new ComputeBackendServiceSecuritySettingsOutputReference(this, "security_settings");
  public get securitySettings() {
    return this._securitySettings;
  }
  public putSecuritySettings(value: ComputeBackendServiceSecuritySettings) {
    this._securitySettings.internalValue = value;
  }
  public resetSecuritySettings() {
    this._securitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings.internalValue;
  }

  // strong_session_affinity_cookie - computed: false, optional: true, required: false
  private _strongSessionAffinityCookie = new ComputeBackendServiceStrongSessionAffinityCookieOutputReference(this, "strong_session_affinity_cookie");
  public get strongSessionAffinityCookie() {
    return this._strongSessionAffinityCookie;
  }
  public putStrongSessionAffinityCookie(value: ComputeBackendServiceStrongSessionAffinityCookie) {
    this._strongSessionAffinityCookie.internalValue = value;
  }
  public resetStrongSessionAffinityCookie() {
    this._strongSessionAffinityCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strongSessionAffinityCookieInput() {
    return this._strongSessionAffinityCookie.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeBackendServiceTimeoutsOutputReference(this, "timeouts");
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

  // tls_settings - computed: false, optional: true, required: false
  private _tlsSettings = new ComputeBackendServiceTlsSettingsOutputReference(this, "tls_settings");
  public get tlsSettings() {
    return this._tlsSettings;
  }
  public putTlsSettings(value: ComputeBackendServiceTlsSettings) {
    this._tlsSettings.internalValue = value;
  }
  public resetTlsSettings() {
    this._tlsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSettingsInput() {
    return this._tlsSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affinity_cookie_ttl_sec: cdktf.numberToTerraform(this._affinityCookieTtlSec),
      compression_mode: cdktf.stringToTerraform(this._compressionMode),
      connection_draining_timeout_sec: cdktf.numberToTerraform(this._connectionDrainingTimeoutSec),
      custom_request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customRequestHeaders),
      custom_response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customResponseHeaders),
      description: cdktf.stringToTerraform(this._description),
      edge_security_policy: cdktf.stringToTerraform(this._edgeSecurityPolicy),
      enable_cdn: cdktf.booleanToTerraform(this._enableCdn),
      external_managed_migration_state: cdktf.stringToTerraform(this._externalManagedMigrationState),
      external_managed_migration_testing_percentage: cdktf.numberToTerraform(this._externalManagedMigrationTestingPercentage),
      health_checks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthChecks),
      id: cdktf.stringToTerraform(this._id),
      ip_address_selection_policy: cdktf.stringToTerraform(this._ipAddressSelectionPolicy),
      load_balancing_scheme: cdktf.stringToTerraform(this._loadBalancingScheme),
      locality_lb_policy: cdktf.stringToTerraform(this._localityLbPolicy),
      name: cdktf.stringToTerraform(this._name),
      port_name: cdktf.stringToTerraform(this._portName),
      project: cdktf.stringToTerraform(this._project),
      protocol: cdktf.stringToTerraform(this._protocol),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      service_lb_policy: cdktf.stringToTerraform(this._serviceLbPolicy),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      timeout_sec: cdktf.numberToTerraform(this._timeoutSec),
      backend: cdktf.listMapper(computeBackendServiceBackendToTerraform, true)(this._backend.internalValue),
      cdn_policy: computeBackendServiceCdnPolicyToTerraform(this._cdnPolicy.internalValue),
      circuit_breakers: computeBackendServiceCircuitBreakersToTerraform(this._circuitBreakers.internalValue),
      consistent_hash: computeBackendServiceConsistentHashToTerraform(this._consistentHash.internalValue),
      custom_metrics: cdktf.listMapper(computeBackendServiceCustomMetricsToTerraform, true)(this._customMetrics.internalValue),
      iap: computeBackendServiceIapToTerraform(this._iap.internalValue),
      locality_lb_policies: cdktf.listMapper(computeBackendServiceLocalityLbPoliciesToTerraform, true)(this._localityLbPolicies.internalValue),
      log_config: computeBackendServiceLogConfigToTerraform(this._logConfig.internalValue),
      max_stream_duration: computeBackendServiceMaxStreamDurationToTerraform(this._maxStreamDuration.internalValue),
      outlier_detection: computeBackendServiceOutlierDetectionToTerraform(this._outlierDetection.internalValue),
      security_settings: computeBackendServiceSecuritySettingsToTerraform(this._securitySettings.internalValue),
      strong_session_affinity_cookie: computeBackendServiceStrongSessionAffinityCookieToTerraform(this._strongSessionAffinityCookie.internalValue),
      timeouts: computeBackendServiceTimeoutsToTerraform(this._timeouts.internalValue),
      tls_settings: computeBackendServiceTlsSettingsToTerraform(this._tlsSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_cookie_ttl_sec: {
        value: cdktf.numberToHclTerraform(this._affinityCookieTtlSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_mode: {
        value: cdktf.stringToHclTerraform(this._compressionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_draining_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._connectionDrainingTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_request_headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customRequestHeaders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_response_headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customResponseHeaders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_security_policy: {
        value: cdktf.stringToHclTerraform(this._edgeSecurityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_cdn: {
        value: cdktf.booleanToHclTerraform(this._enableCdn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_managed_migration_state: {
        value: cdktf.stringToHclTerraform(this._externalManagedMigrationState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_managed_migration_testing_percentage: {
        value: cdktf.numberToHclTerraform(this._externalManagedMigrationTestingPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_checks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthChecks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address_selection_policy: {
        value: cdktf.stringToHclTerraform(this._ipAddressSelectionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancing_scheme: {
        value: cdktf.stringToHclTerraform(this._loadBalancingScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locality_lb_policy: {
        value: cdktf.stringToHclTerraform(this._localityLbPolicy),
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
      port_name: {
        value: cdktf.stringToHclTerraform(this._portName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy: {
        value: cdktf.stringToHclTerraform(this._securityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_lb_policy: {
        value: cdktf.stringToHclTerraform(this._serviceLbPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_affinity: {
        value: cdktf.stringToHclTerraform(this._sessionAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_sec: {
        value: cdktf.numberToHclTerraform(this._timeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backend: {
        value: cdktf.listMapperHcl(computeBackendServiceBackendToHclTerraform, true)(this._backend.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeBackendServiceBackendList",
      },
      cdn_policy: {
        value: computeBackendServiceCdnPolicyToHclTerraform(this._cdnPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeBackendServiceCdnPolicyList",
      },
      circuit_breakers: {
        value: computeBackendServiceCircuitBreakersToHclTerraform(this._circuitBreakers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeBackendServiceCircuitBreakersList",
      },
      consistent_hash: {
        value: computeBackendServiceConsistentHashToHclTerraform(this._consistentHash.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeBackendServiceConsistentHashList",
      },
      custom_metrics: {
        value: cdktf.listMapperHcl(computeBackendServiceCustomMetricsToHclTerraform, true)(this._customMetrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeBackendServiceCustomMetricsList",
      },
      iap: {
        value: computeBackendServiceIapToHclTerraform(this._iap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeBackendServiceIapList",
      },
      locality_lb_policies: {
        value: cdktf.listMapperHcl(computeBackendServiceLocalityLbPoliciesToHclTerraform, true)(this._localityLbPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeBackendServiceLocalityLbPoliciesList",
      },
      log_config: {
        value: computeBackendServiceLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeBackendServiceLogConfigList",
      },
      max_stream_duration: {
        value: computeBackendServiceMaxStreamDurationToHclTerraform(this._maxStreamDuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeBackendServiceMaxStreamDurationList",
      },
      outlier_detection: {
        value: computeBackendServiceOutlierDetectionToHclTerraform(this._outlierDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeBackendServiceOutlierDetectionList",
      },
      security_settings: {
        value: computeBackendServiceSecuritySettingsToHclTerraform(this._securitySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeBackendServiceSecuritySettingsList",
      },
      strong_session_affinity_cookie: {
        value: computeBackendServiceStrongSessionAffinityCookieToHclTerraform(this._strongSessionAffinityCookie.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeBackendServiceStrongSessionAffinityCookieList",
      },
      timeouts: {
        value: computeBackendServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeBackendServiceTimeouts",
      },
      tls_settings: {
        value: computeBackendServiceTlsSettingsToHclTerraform(this._tlsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeBackendServiceTlsSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
