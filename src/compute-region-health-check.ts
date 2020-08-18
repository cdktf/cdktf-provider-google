// https://www.terraform.io/docs/providers/google/r/compute_region_health_check.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeRegionHealthCheckConfig extends TerraformMetaArguments {
  /** How often (in seconds) to send a health check. The default value is 5
seconds. */
  readonly checkIntervalSec?: number;
  /** An optional description of this resource. Provide this property when
you create the resource. */
  readonly description?: string;
  /** A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2. */
  readonly healthyThreshold?: number;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** The Region in which the created health check should reside.
If it is not provided, the provider region is used. */
  readonly region?: string;
  /** How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec. */
  readonly timeoutSec?: number;
  /** A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2. */
  readonly unhealthyThreshold?: number;
  /** http2_health_check block */
  readonly http2HealthCheck?: ComputeRegionHealthCheckHttp2HealthCheck[];
  /** http_health_check block */
  readonly httpHealthCheck?: ComputeRegionHealthCheckHttpHealthCheck[];
  /** https_health_check block */
  readonly httpsHealthCheck?: ComputeRegionHealthCheckHttpsHealthCheck[];
  /** ssl_health_check block */
  readonly sslHealthCheck?: ComputeRegionHealthCheckSslHealthCheck[];
  /** tcp_health_check block */
  readonly tcpHealthCheck?: ComputeRegionHealthCheckTcpHealthCheck[];
  /** timeouts block */
  readonly timeouts?: ComputeRegionHealthCheckTimeouts;
}
export interface ComputeRegionHealthCheckHttp2HealthCheck {
  /** The value of the host header in the HTTP2 health check request.
If left empty (default value), the public IP on behalf of which this health
check is performed will be used. */
  readonly host?: string;
  /** The TCP port number for the HTTP2 health check request.
The default value is 443. */
  readonly port?: number;
  /** Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence. */
  readonly portName?: string;
  /** Specifies how port is selected for health checking, can be one of the
following values:

  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"] */
  readonly portSpecification?: string;
  /** Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"] */
  readonly proxyHeader?: string;
  /** The request path of the HTTP2 health check request.
The default value is /. */
  readonly requestPath?: string;
  /** The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII. */
  readonly response?: string;
}
export interface ComputeRegionHealthCheckHttpHealthCheck {
  /** The value of the host header in the HTTP health check request.
If left empty (default value), the public IP on behalf of which this health
check is performed will be used. */
  readonly host?: string;
  /** The TCP port number for the HTTP health check request.
The default value is 80. */
  readonly port?: number;
  /** Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence. */
  readonly portName?: string;
  /** Specifies how port is selected for health checking, can be one of the
following values:

  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"] */
  readonly portSpecification?: string;
  /** Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"] */
  readonly proxyHeader?: string;
  /** The request path of the HTTP health check request.
The default value is /. */
  readonly requestPath?: string;
  /** The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII. */
  readonly response?: string;
}
export interface ComputeRegionHealthCheckHttpsHealthCheck {
  /** The value of the host header in the HTTPS health check request.
If left empty (default value), the public IP on behalf of which this health
check is performed will be used. */
  readonly host?: string;
  /** The TCP port number for the HTTPS health check request.
The default value is 443. */
  readonly port?: number;
  /** Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence. */
  readonly portName?: string;
  /** Specifies how port is selected for health checking, can be one of the
following values:

  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"] */
  readonly portSpecification?: string;
  /** Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"] */
  readonly proxyHeader?: string;
  /** The request path of the HTTPS health check request.
The default value is /. */
  readonly requestPath?: string;
  /** The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII. */
  readonly response?: string;
}
export interface ComputeRegionHealthCheckSslHealthCheck {
  /** The TCP port number for the SSL health check request.
The default value is 443. */
  readonly port?: number;
  /** Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence. */
  readonly portName?: string;
  /** Specifies how port is selected for health checking, can be one of the
following values:

  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"] */
  readonly portSpecification?: string;
  /** Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"] */
  readonly proxyHeader?: string;
  /** The application data to send once the SSL connection has been
established (default value is empty). If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII. */
  readonly request?: string;
  /** The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII. */
  readonly response?: string;
}
export interface ComputeRegionHealthCheckTcpHealthCheck {
  /** The TCP port number for the TCP health check request.
The default value is 80. */
  readonly port?: number;
  /** Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence. */
  readonly portName?: string;
  /** Specifies how port is selected for health checking, can be one of the
following values:

  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"] */
  readonly portSpecification?: string;
  /** Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"] */
  readonly proxyHeader?: string;
  /** The application data to send once the TCP connection has been
established (default value is empty). If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII. */
  readonly request?: string;
  /** The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII. */
  readonly response?: string;
}
export interface ComputeRegionHealthCheckTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeRegionHealthCheck extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRegionHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_health_check',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._checkIntervalSec = config.checkIntervalSec;
    this._description = config.description;
    this._healthyThreshold = config.healthyThreshold;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._timeoutSec = config.timeoutSec;
    this._unhealthyThreshold = config.unhealthyThreshold;
    this._http2HealthCheck = config.http2HealthCheck;
    this._httpHealthCheck = config.httpHealthCheck;
    this._httpsHealthCheck = config.httpsHealthCheck;
    this._sslHealthCheck = config.sslHealthCheck;
    this._tcpHealthCheck = config.tcpHealthCheck;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_interval_sec - computed: false, optional: true, required: false
  private _checkIntervalSec?: number;
  public get checkIntervalSec() {
    return this._checkIntervalSec;
  }
  public set checkIntervalSec(value: number | undefined) {
    this._checkIntervalSec = value;
  }

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number;
  public get healthyThreshold() {
    return this._healthyThreshold;
  }
  public set healthyThreshold(value: number | undefined) {
    this._healthyThreshold = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeout_sec - computed: false, optional: true, required: false
  private _timeoutSec?: number;
  public get timeoutSec() {
    return this._timeoutSec;
  }
  public set timeoutSec(value: number | undefined) {
    this._timeoutSec = value;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number;
  public get unhealthyThreshold() {
    return this._unhealthyThreshold;
  }
  public set unhealthyThreshold(value: number | undefined) {
    this._unhealthyThreshold = value;
  }

  // http2_health_check - computed: false, optional: true, required: false
  private _http2HealthCheck?: ComputeRegionHealthCheckHttp2HealthCheck[];
  public get http2HealthCheck() {
    return this._http2HealthCheck;
  }
  public set http2HealthCheck(value: ComputeRegionHealthCheckHttp2HealthCheck[] | undefined) {
    this._http2HealthCheck = value;
  }

  // http_health_check - computed: false, optional: true, required: false
  private _httpHealthCheck?: ComputeRegionHealthCheckHttpHealthCheck[];
  public get httpHealthCheck() {
    return this._httpHealthCheck;
  }
  public set httpHealthCheck(value: ComputeRegionHealthCheckHttpHealthCheck[] | undefined) {
    this._httpHealthCheck = value;
  }

  // https_health_check - computed: false, optional: true, required: false
  private _httpsHealthCheck?: ComputeRegionHealthCheckHttpsHealthCheck[];
  public get httpsHealthCheck() {
    return this._httpsHealthCheck;
  }
  public set httpsHealthCheck(value: ComputeRegionHealthCheckHttpsHealthCheck[] | undefined) {
    this._httpsHealthCheck = value;
  }

  // ssl_health_check - computed: false, optional: true, required: false
  private _sslHealthCheck?: ComputeRegionHealthCheckSslHealthCheck[];
  public get sslHealthCheck() {
    return this._sslHealthCheck;
  }
  public set sslHealthCheck(value: ComputeRegionHealthCheckSslHealthCheck[] | undefined) {
    this._sslHealthCheck = value;
  }

  // tcp_health_check - computed: false, optional: true, required: false
  private _tcpHealthCheck?: ComputeRegionHealthCheckTcpHealthCheck[];
  public get tcpHealthCheck() {
    return this._tcpHealthCheck;
  }
  public set tcpHealthCheck(value: ComputeRegionHealthCheckTcpHealthCheck[] | undefined) {
    this._tcpHealthCheck = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionHealthCheckTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeRegionHealthCheckTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      check_interval_sec: this._checkIntervalSec,
      description: this._description,
      healthy_threshold: this._healthyThreshold,
      name: this._name,
      project: this._project,
      region: this._region,
      timeout_sec: this._timeoutSec,
      unhealthy_threshold: this._unhealthyThreshold,
      http2_health_check: this._http2HealthCheck,
      http_health_check: this._httpHealthCheck,
      https_health_check: this._httpsHealthCheck,
      ssl_health_check: this._sslHealthCheck,
      tcp_health_check: this._tcpHealthCheck,
      timeouts: this._timeouts,
    };
  }
}
