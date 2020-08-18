// https://www.terraform.io/docs/providers/google/r/data_google_compute_backend_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleComputeBackendServiceConfig extends TerraformMetaArguments {
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
}
export class DataGoogleComputeBackendServiceBackend extends ComplexComputedList {

  // balancing_mode - computed: true, optional: false, required: true
  public get balancingMode() {
    return this.getStringAttribute('balancing_mode');
  }

  // capacity_scaler - computed: true, optional: false, required: true
  public get capacityScaler() {
    return this.getNumberAttribute('capacity_scaler');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // group - computed: true, optional: false, required: true
  public get group() {
    return this.getStringAttribute('group');
  }

  // max_connections - computed: true, optional: false, required: true
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_connections_per_endpoint - computed: true, optional: false, required: true
  public get maxConnectionsPerEndpoint() {
    return this.getNumberAttribute('max_connections_per_endpoint');
  }

  // max_connections_per_instance - computed: true, optional: false, required: true
  public get maxConnectionsPerInstance() {
    return this.getNumberAttribute('max_connections_per_instance');
  }

  // max_rate - computed: true, optional: false, required: true
  public get maxRate() {
    return this.getNumberAttribute('max_rate');
  }

  // max_rate_per_endpoint - computed: true, optional: false, required: true
  public get maxRatePerEndpoint() {
    return this.getNumberAttribute('max_rate_per_endpoint');
  }

  // max_rate_per_instance - computed: true, optional: false, required: true
  public get maxRatePerInstance() {
    return this.getNumberAttribute('max_rate_per_instance');
  }

  // max_utilization - computed: true, optional: false, required: true
  public get maxUtilization() {
    return this.getNumberAttribute('max_utilization');
  }
}
export class DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy extends ComplexComputedList {

  // include_host - computed: true, optional: false, required: true
  public get includeHost() {
    return this.getBooleanAttribute('include_host');
  }

  // include_protocol - computed: true, optional: false, required: true
  public get includeProtocol() {
    return this.getBooleanAttribute('include_protocol');
  }

  // include_query_string - computed: true, optional: false, required: true
  public get includeQueryString() {
    return this.getBooleanAttribute('include_query_string');
  }

  // query_string_blacklist - computed: true, optional: false, required: true
  public get queryStringBlacklist() {
    return this.getListAttribute('query_string_blacklist');
  }

  // query_string_whitelist - computed: true, optional: false, required: true
  public get queryStringWhitelist() {
    return this.getListAttribute('query_string_whitelist');
  }
}
export class DataGoogleComputeBackendServiceCdnPolicy extends ComplexComputedList {

  // cache_key_policy - computed: true, optional: false, required: true
  public get cacheKeyPolicy() {
    return 'not implemented' as any;
  }

  // signed_url_cache_max_age_sec - computed: true, optional: false, required: true
  public get signedUrlCacheMaxAgeSec() {
    return this.getNumberAttribute('signed_url_cache_max_age_sec');
  }
}
export class DataGoogleComputeBackendServiceCircuitBreakers extends ComplexComputedList {

  // max_connections - computed: true, optional: false, required: true
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_pending_requests - computed: true, optional: false, required: true
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }

  // max_requests - computed: true, optional: false, required: true
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }

  // max_requests_per_connection - computed: true, optional: false, required: true
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }

  // max_retries - computed: true, optional: false, required: true
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
}
export class DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl extends ComplexComputedList {

  // nanos - computed: true, optional: false, required: true
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: true
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}
export class DataGoogleComputeBackendServiceConsistentHashHttpCookie extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // ttl - computed: true, optional: false, required: true
  public get ttl() {
    return 'not implemented' as any;
  }
}
export class DataGoogleComputeBackendServiceConsistentHash extends ComplexComputedList {

  // http_cookie - computed: true, optional: false, required: true
  public get httpCookie() {
    return 'not implemented' as any;
  }

  // http_header_name - computed: true, optional: false, required: true
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }

  // minimum_ring_size - computed: true, optional: false, required: true
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
}
export class DataGoogleComputeBackendServiceIap extends ComplexComputedList {

  // oauth2_client_id - computed: true, optional: false, required: true
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }

  // oauth2_client_secret - computed: true, optional: false, required: true
  public get oauth2ClientSecret() {
    return this.getStringAttribute('oauth2_client_secret');
  }

  // oauth2_client_secret_sha256 - computed: true, optional: false, required: true
  public get oauth2ClientSecretSha256() {
    return this.getStringAttribute('oauth2_client_secret_sha256');
  }
}
export class DataGoogleComputeBackendServiceLogConfig extends ComplexComputedList {

  // enable - computed: true, optional: false, required: true
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // sample_rate - computed: true, optional: false, required: true
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
}
export class DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime extends ComplexComputedList {

  // nanos - computed: true, optional: false, required: true
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: true
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}
export class DataGoogleComputeBackendServiceOutlierDetectionInterval extends ComplexComputedList {

  // nanos - computed: true, optional: false, required: true
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: true
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}
export class DataGoogleComputeBackendServiceOutlierDetection extends ComplexComputedList {

  // base_ejection_time - computed: true, optional: false, required: true
  public get baseEjectionTime() {
    return 'not implemented' as any;
  }

  // consecutive_errors - computed: true, optional: false, required: true
  public get consecutiveErrors() {
    return this.getNumberAttribute('consecutive_errors');
  }

  // consecutive_gateway_failure - computed: true, optional: false, required: true
  public get consecutiveGatewayFailure() {
    return this.getNumberAttribute('consecutive_gateway_failure');
  }

  // enforcing_consecutive_errors - computed: true, optional: false, required: true
  public get enforcingConsecutiveErrors() {
    return this.getNumberAttribute('enforcing_consecutive_errors');
  }

  // enforcing_consecutive_gateway_failure - computed: true, optional: false, required: true
  public get enforcingConsecutiveGatewayFailure() {
    return this.getNumberAttribute('enforcing_consecutive_gateway_failure');
  }

  // enforcing_success_rate - computed: true, optional: false, required: true
  public get enforcingSuccessRate() {
    return this.getNumberAttribute('enforcing_success_rate');
  }

  // interval - computed: true, optional: false, required: true
  public get interval() {
    return 'not implemented' as any;
  }

  // max_ejection_percent - computed: true, optional: false, required: true
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }

  // success_rate_minimum_hosts - computed: true, optional: false, required: true
  public get successRateMinimumHosts() {
    return this.getNumberAttribute('success_rate_minimum_hosts');
  }

  // success_rate_request_volume - computed: true, optional: false, required: true
  public get successRateRequestVolume() {
    return this.getNumberAttribute('success_rate_request_volume');
  }

  // success_rate_stdev_factor - computed: true, optional: false, required: true
  public get successRateStdevFactor() {
    return this.getNumberAttribute('success_rate_stdev_factor');
  }
}

// Resource

export class DataGoogleComputeBackendService extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeBackendServiceConfig) {
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
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_cookie_ttl_sec - computed: true, optional: false, required: true
  public get affinityCookieTtlSec() {
    return this.getNumberAttribute('affinity_cookie_ttl_sec');
  }

  // backend - computed: true, optional: false, required: true
  public backend(index: string) {
    return new DataGoogleComputeBackendServiceBackend(this, 'backend', index);
  }

  // cdn_policy - computed: true, optional: false, required: true
  public cdnPolicy(index: string) {
    return new DataGoogleComputeBackendServiceCdnPolicy(this, 'cdn_policy', index);
  }

  // circuit_breakers - computed: true, optional: false, required: true
  public circuitBreakers(index: string) {
    return new DataGoogleComputeBackendServiceCircuitBreakers(this, 'circuit_breakers', index);
  }

  // connection_draining_timeout_sec - computed: true, optional: false, required: true
  public get connectionDrainingTimeoutSec() {
    return this.getNumberAttribute('connection_draining_timeout_sec');
  }

  // consistent_hash - computed: true, optional: false, required: true
  public consistentHash(index: string) {
    return new DataGoogleComputeBackendServiceConsistentHash(this, 'consistent_hash', index);
  }

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // custom_request_headers - computed: true, optional: false, required: true
  public get customRequestHeaders() {
    return this.getListAttribute('custom_request_headers');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_cdn - computed: true, optional: false, required: true
  public get enableCdn() {
    return this.getBooleanAttribute('enable_cdn');
  }

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // health_checks - computed: true, optional: false, required: true
  public get healthChecks() {
    return this.getListAttribute('health_checks');
  }

  // iap - computed: true, optional: false, required: true
  public iap(index: string) {
    return new DataGoogleComputeBackendServiceIap(this, 'iap', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancing_scheme - computed: true, optional: false, required: true
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }

  // locality_lb_policy - computed: true, optional: false, required: true
  public get localityLbPolicy() {
    return this.getStringAttribute('locality_lb_policy');
  }

  // log_config - computed: true, optional: false, required: true
  public logConfig(index: string) {
    return new DataGoogleComputeBackendServiceLogConfig(this, 'log_config', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // outlier_detection - computed: true, optional: false, required: true
  public outlierDetection(index: string) {
    return new DataGoogleComputeBackendServiceOutlierDetection(this, 'outlier_detection', index);
  }

  // port_name - computed: true, optional: false, required: true
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // security_policy - computed: true, optional: false, required: true
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // session_affinity - computed: true, optional: false, required: true
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }

  // timeout_sec - computed: true, optional: false, required: true
  public get timeoutSec() {
    return this.getNumberAttribute('timeout_sec');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
    };
  }
}
