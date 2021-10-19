// https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkServicesEdgeCacheOriginConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#description NetworkServicesEdgeCacheOrigin#description}
  */
  readonly description?: string;
  /**
  * The Origin resource to try when the current origin cannot be reached.
After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.

The value of timeout.maxAttemptsTimeout dictates the timeout across all origins.
A reference to a Topic resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#failover_origin NetworkServicesEdgeCacheOrigin#failover_origin}
  */
  readonly failoverOrigin?: string;
  /**
  * Set of label tags associated with the EdgeCache resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#labels NetworkServicesEdgeCacheOrigin#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The maximum number of attempts to cache fill from this origin. Another attempt is made when a cache fill fails with one of the retryConditions.

Once maxAttempts to this origin have failed the failoverOrigin will be used, if one is specified. That failoverOrigin may specify its own maxAttempts,
retryConditions and failoverOrigin to control its own cache fill failures.

The total number of allowed attempts to cache fill across this and failover origins is limited to four.
The total time allowed for cache fill attempts across this and failover origins can be controlled with maxAttemptsTimeout.

The last valid response from an origin will be returned to the client.
If no origin returns a valid response, an HTTP 503 will be returned to the client.

Defaults to 1. Must be a value greater than 0 and less than 4.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#max_attempts NetworkServicesEdgeCacheOrigin#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#name NetworkServicesEdgeCacheOrigin#name}
  */
  readonly name: string;
  /**
  * A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.

This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com IPv4:35.218.1.1 IPv6:[2607:f8b0:4012:809::200e] Cloud Storage: gs://bucketname

When providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.
If a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#origin_address NetworkServicesEdgeCacheOrigin#origin_address}
  */
  readonly originAddress: string;
  /**
  * The port to connect to the origin on.
Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#port NetworkServicesEdgeCacheOrigin#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#project NetworkServicesEdgeCacheOrigin#project}
  */
  readonly project?: string;
  /**
  * The protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.

When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server. Possible values: ["HTTP2", "HTTPS", "HTTP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#protocol NetworkServicesEdgeCacheOrigin#protocol}
  */
  readonly protocol?: string;
  /**
  * Specifies one or more retry conditions for the configured origin.

If the failure mode during a connection attempt to the origin matches the configured retryCondition(s),
the origin request will be retried up to maxAttempts times. The failoverOrigin, if configured, will then be used to satisfy the request.

The default retryCondition is "CONNECT_FAILURE".

retryConditions apply to this origin, and not subsequent failoverOrigin(s),
which may specify their own retryConditions and maxAttempts.

Valid values are:

- CONNECT_FAILURE: Retry on failures connecting to origins, for example due to connection timeouts.
- HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams.
- GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504.
- RETRIABLE_4XX: Retry for retriable 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests)
- NOT_FOUND: Retry if the origin returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet. Possible values: ["CONNECT_FAILURE", "HTTP_5XX", "GATEWAY_ERROR", "RETRIABLE_4XX", "NOT_FOUND"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#retry_conditions NetworkServicesEdgeCacheOrigin#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#timeout NetworkServicesEdgeCacheOrigin#timeout}
  */
  readonly timeout?: NetworkServicesEdgeCacheOriginTimeout;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#timeouts NetworkServicesEdgeCacheOrigin#timeouts}
  */
  readonly timeouts?: NetworkServicesEdgeCacheOriginTimeouts;
}
export interface NetworkServicesEdgeCacheOriginTimeout {
  /**
  * The maximum duration to wait for the origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment.

Defaults to 5 seconds. The timeout must be a value between 1s and 15s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#connect_timeout NetworkServicesEdgeCacheOrigin#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client. A HTTP 503 will be returned if the timeout is reached before a response is returned.

Defaults to 5 seconds. The timeout must be a value between 1s and 15s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#max_attempts_timeout NetworkServicesEdgeCacheOrigin#max_attempts_timeout}
  */
  readonly maxAttemptsTimeout?: string;
  /**
  * The maximum duration to wait for data to arrive when reading from the HTTP connection/stream.

Defaults to 5 seconds. The timeout must be a value between 1s and 30s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#response_timeout NetworkServicesEdgeCacheOrigin#response_timeout}
  */
  readonly responseTimeout?: string;
}

function networkServicesEdgeCacheOriginTimeoutToTerraform(struct?: NetworkServicesEdgeCacheOriginTimeoutOutputReference | NetworkServicesEdgeCacheOriginTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    max_attempts_timeout: cdktf.stringToTerraform(struct!.maxAttemptsTimeout),
    response_timeout: cdktf.stringToTerraform(struct!.responseTimeout),
  }
}

export class NetworkServicesEdgeCacheOriginTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string | undefined; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string | undefined) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout
  }

  // max_attempts_timeout - computed: false, optional: true, required: false
  private _maxAttemptsTimeout?: string | undefined; 
  public get maxAttemptsTimeout() {
    return this.getStringAttribute('max_attempts_timeout');
  }
  public set maxAttemptsTimeout(value: string | undefined) {
    this._maxAttemptsTimeout = value;
  }
  public resetMaxAttemptsTimeout() {
    this._maxAttemptsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsTimeoutInput() {
    return this._maxAttemptsTimeout
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: string | undefined; 
  public get responseTimeout() {
    return this.getStringAttribute('response_timeout');
  }
  public set responseTimeout(value: string | undefined) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout
  }
}
export interface NetworkServicesEdgeCacheOriginTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#create NetworkServicesEdgeCacheOrigin#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#delete NetworkServicesEdgeCacheOrigin#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html#update NetworkServicesEdgeCacheOrigin#update}
  */
  readonly update?: string;
}

function networkServicesEdgeCacheOriginTimeoutsToTerraform(struct?: NetworkServicesEdgeCacheOriginTimeoutsOutputReference | NetworkServicesEdgeCacheOriginTimeouts): any {
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

export class NetworkServicesEdgeCacheOriginTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html google_network_services_edge_cache_origin}
*/
export class NetworkServicesEdgeCacheOrigin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_network_services_edge_cache_origin";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin.html google_network_services_edge_cache_origin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesEdgeCacheOriginConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesEdgeCacheOriginConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_edge_cache_origin',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._failoverOrigin = config.failoverOrigin;
    this._labels = config.labels;
    this._maxAttempts = config.maxAttempts;
    this._name = config.name;
    this._originAddress = config.originAddress;
    this._port = config.port;
    this._project = config.project;
    this._protocol = config.protocol;
    this._retryConditions = config.retryConditions;
    this._timeout = config.timeout;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // failover_origin - computed: false, optional: true, required: false
  private _failoverOrigin?: string | undefined; 
  public get failoverOrigin() {
    return this.getStringAttribute('failover_origin');
  }
  public set failoverOrigin(value: string | undefined) {
    this._failoverOrigin = value;
  }
  public resetFailoverOrigin() {
    this._failoverOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverOriginInput() {
    return this._failoverOrigin
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // max_attempts - computed: false, optional: true, required: false
  private _maxAttempts?: number | undefined; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number | undefined) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts
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

  // origin_address - computed: false, optional: false, required: true
  private _originAddress?: string; 
  public get originAddress() {
    return this.getStringAttribute('origin_address');
  }
  public set originAddress(value: string) {
    this._originAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originAddressInput() {
    return this._originAddress
  }

  // port - computed: true, optional: true, required: false
  private _port?: number | undefined; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
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

  // retry_conditions - computed: true, optional: true, required: false
  private _retryConditions?: string[] | undefined; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[] | undefined) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: NetworkServicesEdgeCacheOriginTimeout | undefined; 
  private __timeoutOutput = new NetworkServicesEdgeCacheOriginTimeoutOutputReference(this as any, "timeout", true);
  public get timeout() {
    return this.__timeoutOutput;
  }
  public putTimeout(value: NetworkServicesEdgeCacheOriginTimeout | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkServicesEdgeCacheOriginTimeouts | undefined; 
  private __timeoutsOutput = new NetworkServicesEdgeCacheOriginTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NetworkServicesEdgeCacheOriginTimeouts | undefined) {
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
      description: cdktf.stringToTerraform(this._description),
      failover_origin: cdktf.stringToTerraform(this._failoverOrigin),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      max_attempts: cdktf.numberToTerraform(this._maxAttempts),
      name: cdktf.stringToTerraform(this._name),
      origin_address: cdktf.stringToTerraform(this._originAddress),
      port: cdktf.numberToTerraform(this._port),
      project: cdktf.stringToTerraform(this._project),
      protocol: cdktf.stringToTerraform(this._protocol),
      retry_conditions: cdktf.listMapper(cdktf.stringToTerraform)(this._retryConditions),
      timeout: networkServicesEdgeCacheOriginTimeoutToTerraform(this._timeout),
      timeouts: networkServicesEdgeCacheOriginTimeoutsToTerraform(this._timeouts),
    };
  }
}
