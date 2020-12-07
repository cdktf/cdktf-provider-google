// https://www.terraform.io/docs/providers/google/r/compute_region_health_check.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionHealthCheckConfig extends cdktf.TerraformMetaArguments {
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
  /** grpc_health_check block */
  readonly grpcHealthCheck?: ComputeRegionHealthCheckGrpcHealthCheck[];
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
export interface ComputeRegionHealthCheckGrpcHealthCheck {
  /** The gRPC service name for the health check. 
The value of grpcServiceName has the following meanings by convention:

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.

The grpcServiceName can only be ASCII. */
  readonly grpcServiceName?: string;
  /** The port number for the health check request. 
Must be specified if portName and portSpecification are not set 
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535. */
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

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"] */
  readonly portSpecification?: string;
}

function computeRegionHealthCheckGrpcHealthCheckToTerraform(struct?: ComputeRegionHealthCheckGrpcHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    grpc_service_name: cdktf.stringToTerraform(struct!.grpcServiceName),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
  }
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

function computeRegionHealthCheckHttp2HealthCheckToTerraform(struct?: ComputeRegionHealthCheckHttp2HealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request_path: cdktf.stringToTerraform(struct!.requestPath),
    response: cdktf.stringToTerraform(struct!.response),
  }
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

function computeRegionHealthCheckHttpHealthCheckToTerraform(struct?: ComputeRegionHealthCheckHttpHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request_path: cdktf.stringToTerraform(struct!.requestPath),
    response: cdktf.stringToTerraform(struct!.response),
  }
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

function computeRegionHealthCheckHttpsHealthCheckToTerraform(struct?: ComputeRegionHealthCheckHttpsHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request_path: cdktf.stringToTerraform(struct!.requestPath),
    response: cdktf.stringToTerraform(struct!.response),
  }
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

function computeRegionHealthCheckSslHealthCheckToTerraform(struct?: ComputeRegionHealthCheckSslHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request: cdktf.stringToTerraform(struct!.request),
    response: cdktf.stringToTerraform(struct!.response),
  }
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

function computeRegionHealthCheckTcpHealthCheckToTerraform(struct?: ComputeRegionHealthCheckTcpHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request: cdktf.stringToTerraform(struct!.request),
    response: cdktf.stringToTerraform(struct!.response),
  }
}

export interface ComputeRegionHealthCheckTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeRegionHealthCheckTimeoutsToTerraform(struct?: ComputeRegionHealthCheckTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeRegionHealthCheck extends cdktf.TerraformResource {

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
    this._grpcHealthCheck = config.grpcHealthCheck;
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
    return this.getNumberAttribute('check_interval_sec');
  }
  public set checkIntervalSec(value: number ) {
    this._checkIntervalSec = value;
  }
  public resetCheckIntervalSec() {
    this._checkIntervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalSecInput() {
    return this._checkIntervalSec
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

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number;
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number ) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // timeout_sec - computed: false, optional: true, required: false
  private _timeoutSec?: number;
  public get timeoutSec() {
    return this.getNumberAttribute('timeout_sec');
  }
  public set timeoutSec(value: number ) {
    this._timeoutSec = value;
  }
  public resetTimeoutSec() {
    this._timeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecInput() {
    return this._timeoutSec
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number;
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number ) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold
  }

  // grpc_health_check - computed: false, optional: true, required: false
  private _grpcHealthCheck?: ComputeRegionHealthCheckGrpcHealthCheck[];
  public get grpcHealthCheck() {
    return this.interpolationForAttribute('grpc_health_check') as any;
  }
  public set grpcHealthCheck(value: ComputeRegionHealthCheckGrpcHealthCheck[] ) {
    this._grpcHealthCheck = value;
  }
  public resetGrpcHealthCheck() {
    this._grpcHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcHealthCheckInput() {
    return this._grpcHealthCheck
  }

  // http2_health_check - computed: false, optional: true, required: false
  private _http2HealthCheck?: ComputeRegionHealthCheckHttp2HealthCheck[];
  public get http2HealthCheck() {
    return this.interpolationForAttribute('http2_health_check') as any;
  }
  public set http2HealthCheck(value: ComputeRegionHealthCheckHttp2HealthCheck[] ) {
    this._http2HealthCheck = value;
  }
  public resetHttp2HealthCheck() {
    this._http2HealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2HealthCheckInput() {
    return this._http2HealthCheck
  }

  // http_health_check - computed: false, optional: true, required: false
  private _httpHealthCheck?: ComputeRegionHealthCheckHttpHealthCheck[];
  public get httpHealthCheck() {
    return this.interpolationForAttribute('http_health_check') as any;
  }
  public set httpHealthCheck(value: ComputeRegionHealthCheckHttpHealthCheck[] ) {
    this._httpHealthCheck = value;
  }
  public resetHttpHealthCheck() {
    this._httpHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthCheckInput() {
    return this._httpHealthCheck
  }

  // https_health_check - computed: false, optional: true, required: false
  private _httpsHealthCheck?: ComputeRegionHealthCheckHttpsHealthCheck[];
  public get httpsHealthCheck() {
    return this.interpolationForAttribute('https_health_check') as any;
  }
  public set httpsHealthCheck(value: ComputeRegionHealthCheckHttpsHealthCheck[] ) {
    this._httpsHealthCheck = value;
  }
  public resetHttpsHealthCheck() {
    this._httpsHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsHealthCheckInput() {
    return this._httpsHealthCheck
  }

  // ssl_health_check - computed: false, optional: true, required: false
  private _sslHealthCheck?: ComputeRegionHealthCheckSslHealthCheck[];
  public get sslHealthCheck() {
    return this.interpolationForAttribute('ssl_health_check') as any;
  }
  public set sslHealthCheck(value: ComputeRegionHealthCheckSslHealthCheck[] ) {
    this._sslHealthCheck = value;
  }
  public resetSslHealthCheck() {
    this._sslHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHealthCheckInput() {
    return this._sslHealthCheck
  }

  // tcp_health_check - computed: false, optional: true, required: false
  private _tcpHealthCheck?: ComputeRegionHealthCheckTcpHealthCheck[];
  public get tcpHealthCheck() {
    return this.interpolationForAttribute('tcp_health_check') as any;
  }
  public set tcpHealthCheck(value: ComputeRegionHealthCheckTcpHealthCheck[] ) {
    this._tcpHealthCheck = value;
  }
  public resetTcpHealthCheck() {
    this._tcpHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHealthCheckInput() {
    return this._tcpHealthCheck
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionHealthCheckTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeRegionHealthCheckTimeouts ) {
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
      check_interval_sec: cdktf.numberToTerraform(this._checkIntervalSec),
      description: cdktf.stringToTerraform(this._description),
      healthy_threshold: cdktf.numberToTerraform(this._healthyThreshold),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      timeout_sec: cdktf.numberToTerraform(this._timeoutSec),
      unhealthy_threshold: cdktf.numberToTerraform(this._unhealthyThreshold),
      grpc_health_check: cdktf.listMapper(computeRegionHealthCheckGrpcHealthCheckToTerraform)(this._grpcHealthCheck),
      http2_health_check: cdktf.listMapper(computeRegionHealthCheckHttp2HealthCheckToTerraform)(this._http2HealthCheck),
      http_health_check: cdktf.listMapper(computeRegionHealthCheckHttpHealthCheckToTerraform)(this._httpHealthCheck),
      https_health_check: cdktf.listMapper(computeRegionHealthCheckHttpsHealthCheckToTerraform)(this._httpsHealthCheck),
      ssl_health_check: cdktf.listMapper(computeRegionHealthCheckSslHealthCheckToTerraform)(this._sslHealthCheck),
      tcp_health_check: cdktf.listMapper(computeRegionHealthCheckTcpHealthCheckToTerraform)(this._tcpHealthCheck),
      timeouts: computeRegionHealthCheckTimeoutsToTerraform(this._timeouts),
    };
  }
}
