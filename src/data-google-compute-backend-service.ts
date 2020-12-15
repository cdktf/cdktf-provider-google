// https://www.terraform.io/docs/providers/google/r/data_google_compute_backend_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeBackendServiceConfig extends cdktf.TerraformMetaArguments {
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
export class DataGoogleComputeBackendServiceBackend extends cdktf.ComplexComputedList {

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
export class DataGoogleComputeBackendServiceCdnPolicyCacheKeyPolicy extends cdktf.ComplexComputedList {

  // include_host - computed: true, optional: false, required: false
  public get includeHost() {
    return this.getBooleanAttribute('include_host');
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
    return this.getListAttribute('query_string_blacklist');
  }

  // query_string_whitelist - computed: true, optional: false, required: false
  public get queryStringWhitelist() {
    return this.getListAttribute('query_string_whitelist');
  }
}
export class DataGoogleComputeBackendServiceCdnPolicy extends cdktf.ComplexComputedList {

  // cache_key_policy - computed: true, optional: false, required: false
  public get cacheKeyPolicy() {
    return this.interpolationForAttribute('cache_key_policy') as any;
  }

  // signed_url_cache_max_age_sec - computed: true, optional: false, required: false
  public get signedUrlCacheMaxAgeSec() {
    return this.getNumberAttribute('signed_url_cache_max_age_sec');
  }
}
export class DataGoogleComputeBackendServiceCircuitBreakers extends cdktf.ComplexComputedList {

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
export class DataGoogleComputeBackendServiceConsistentHashHttpCookieTtl extends cdktf.ComplexComputedList {

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}
export class DataGoogleComputeBackendServiceConsistentHashHttpCookie extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.interpolationForAttribute('ttl') as any;
  }
}
export class DataGoogleComputeBackendServiceConsistentHash extends cdktf.ComplexComputedList {

  // http_cookie - computed: true, optional: false, required: false
  public get httpCookie() {
    return this.interpolationForAttribute('http_cookie') as any;
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
export class DataGoogleComputeBackendServiceIap extends cdktf.ComplexComputedList {

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
export class DataGoogleComputeBackendServiceLogConfig extends cdktf.ComplexComputedList {

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // sample_rate - computed: true, optional: false, required: false
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
}
export class DataGoogleComputeBackendServiceOutlierDetectionBaseEjectionTime extends cdktf.ComplexComputedList {

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}
export class DataGoogleComputeBackendServiceOutlierDetectionInterval extends cdktf.ComplexComputedList {

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}
export class DataGoogleComputeBackendServiceOutlierDetection extends cdktf.ComplexComputedList {

  // base_ejection_time - computed: true, optional: false, required: false
  public get baseEjectionTime() {
    return this.interpolationForAttribute('base_ejection_time') as any;
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
  public get interval() {
    return this.interpolationForAttribute('interval') as any;
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

// Resource

export class DataGoogleComputeBackendService extends cdktf.TerraformDataSource {

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

  // affinity_cookie_ttl_sec - computed: true, optional: false, required: false
  public get affinityCookieTtlSec() {
    return this.getNumberAttribute('affinity_cookie_ttl_sec');
  }

  // backend - computed: true, optional: false, required: false
  public backend(index: string) {
    return new DataGoogleComputeBackendServiceBackend(this, 'backend', index);
  }

  // cdn_policy - computed: true, optional: false, required: false
  public cdnPolicy(index: string) {
    return new DataGoogleComputeBackendServiceCdnPolicy(this, 'cdn_policy', index);
  }

  // circuit_breakers - computed: true, optional: false, required: false
  public circuitBreakers(index: string) {
    return new DataGoogleComputeBackendServiceCircuitBreakers(this, 'circuit_breakers', index);
  }

  // connection_draining_timeout_sec - computed: true, optional: false, required: false
  public get connectionDrainingTimeoutSec() {
    return this.getNumberAttribute('connection_draining_timeout_sec');
  }

  // consistent_hash - computed: true, optional: false, required: false
  public consistentHash(index: string) {
    return new DataGoogleComputeBackendServiceConsistentHash(this, 'consistent_hash', index);
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // custom_request_headers - computed: true, optional: false, required: false
  public get customRequestHeaders() {
    return this.getListAttribute('custom_request_headers');
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
    return this.getListAttribute('health_checks');
  }

  // iap - computed: true, optional: false, required: false
  public iap(index: string) {
    return new DataGoogleComputeBackendServiceIap(this, 'iap', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  public logConfig(index: string) {
    return new DataGoogleComputeBackendServiceLogConfig(this, 'log_config', index);
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

  // outlier_detection - computed: true, optional: false, required: false
  public outlierDetection(index: string) {
    return new DataGoogleComputeBackendServiceOutlierDetection(this, 'outlier_detection', index);
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
  public set project(value: string ) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // security_policy - computed: true, optional: false, required: false
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
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
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
