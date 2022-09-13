// https://www.terraform.io/docs/providers/google/r/compute_region_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * How often (in seconds) to send a health check. The default value is 5
seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#check_interval_sec ComputeRegionHealthCheck#check_interval_sec}
  */
  readonly checkIntervalSec?: number;
  /**
  * An optional description of this resource. Provide this property when
you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#description ComputeRegionHealthCheck#description}
  */
  readonly description?: string;
  /**
  * A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#healthy_threshold ComputeRegionHealthCheck#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#id ComputeRegionHealthCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#name ComputeRegionHealthCheck#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#project ComputeRegionHealthCheck#project}
  */
  readonly project?: string;
  /**
  * The Region in which the created health check should reside.
If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#region ComputeRegionHealthCheck#region}
  */
  readonly region?: string;
  /**
  * How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#timeout_sec ComputeRegionHealthCheck#timeout_sec}
  */
  readonly timeoutSec?: number;
  /**
  * A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#unhealthy_threshold ComputeRegionHealthCheck#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * grpc_health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#grpc_health_check ComputeRegionHealthCheck#grpc_health_check}
  */
  readonly grpcHealthCheck?: ComputeRegionHealthCheckGrpcHealthCheck;
  /**
  * http2_health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#http2_health_check ComputeRegionHealthCheck#http2_health_check}
  */
  readonly http2HealthCheck?: ComputeRegionHealthCheckHttp2HealthCheck;
  /**
  * http_health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#http_health_check ComputeRegionHealthCheck#http_health_check}
  */
  readonly httpHealthCheck?: ComputeRegionHealthCheckHttpHealthCheck;
  /**
  * https_health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#https_health_check ComputeRegionHealthCheck#https_health_check}
  */
  readonly httpsHealthCheck?: ComputeRegionHealthCheckHttpsHealthCheck;
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#log_config ComputeRegionHealthCheck#log_config}
  */
  readonly logConfig?: ComputeRegionHealthCheckLogConfig;
  /**
  * ssl_health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#ssl_health_check ComputeRegionHealthCheck#ssl_health_check}
  */
  readonly sslHealthCheck?: ComputeRegionHealthCheckSslHealthCheck;
  /**
  * tcp_health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#tcp_health_check ComputeRegionHealthCheck#tcp_health_check}
  */
  readonly tcpHealthCheck?: ComputeRegionHealthCheckTcpHealthCheck;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#timeouts ComputeRegionHealthCheck#timeouts}
  */
  readonly timeouts?: ComputeRegionHealthCheckTimeouts;
}
export interface ComputeRegionHealthCheckGrpcHealthCheck {
  /**
  * The gRPC service name for the health check.
The value of grpcServiceName has the following meanings by convention:

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.

The grpcServiceName can only be ASCII.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#grpc_service_name ComputeRegionHealthCheck#grpc_service_name}
  */
  readonly grpcServiceName?: string;
  /**
  * The port number for the health check request.
Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port ComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of the
following values:

  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
}

export function computeRegionHealthCheckGrpcHealthCheckToTerraform(struct?: ComputeRegionHealthCheckGrpcHealthCheckOutputReference | ComputeRegionHealthCheckGrpcHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_service_name: cdktf.stringToTerraform(struct!.grpcServiceName),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
  }
}

export class ComputeRegionHealthCheckGrpcHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionHealthCheckGrpcHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcServiceName = this._grpcServiceName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionHealthCheckGrpcHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpcServiceName = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpcServiceName = value.grpcServiceName;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
    }
  }

  // grpc_service_name - computed: false, optional: true, required: false
  private _grpcServiceName?: string; 
  public get grpcServiceName() {
    return this.getStringAttribute('grpc_service_name');
  }
  public set grpcServiceName(value: string) {
    this._grpcServiceName = value;
  }
  public resetGrpcServiceName() {
    this._grpcServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServiceNameInput() {
    return this._grpcServiceName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_name - computed: false, optional: true, required: false
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }
}
export interface ComputeRegionHealthCheckHttp2HealthCheck {
  /**
  * The value of the host header in the HTTP2 health check request.
If left empty (default value), the public IP on behalf of which this health
check is performed will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#host ComputeRegionHealthCheck#host}
  */
  readonly host?: string;
  /**
  * The TCP port number for the HTTP2 health check request.
The default value is 443.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port ComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of the
following values:

  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The request path of the HTTP2 health check request.
The default value is /.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#request_path ComputeRegionHealthCheck#request_path}
  */
  readonly requestPath?: string;
  /**
  * The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#response ComputeRegionHealthCheck#response}
  */
  readonly response?: string;
}

export function computeRegionHealthCheckHttp2HealthCheckToTerraform(struct?: ComputeRegionHealthCheckHttp2HealthCheckOutputReference | ComputeRegionHealthCheckHttp2HealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ComputeRegionHealthCheckHttp2HealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionHealthCheckHttp2HealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionHealthCheckHttp2HealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._requestPath = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._requestPath = value.requestPath;
      this._response = value.response;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_name - computed: false, optional: true, required: false
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface ComputeRegionHealthCheckHttpHealthCheck {
  /**
  * The value of the host header in the HTTP health check request.
If left empty (default value), the public IP on behalf of which this health
check is performed will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#host ComputeRegionHealthCheck#host}
  */
  readonly host?: string;
  /**
  * The TCP port number for the HTTP health check request.
The default value is 80.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port ComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of the
following values:

  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The request path of the HTTP health check request.
The default value is /.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#request_path ComputeRegionHealthCheck#request_path}
  */
  readonly requestPath?: string;
  /**
  * The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#response ComputeRegionHealthCheck#response}
  */
  readonly response?: string;
}

export function computeRegionHealthCheckHttpHealthCheckToTerraform(struct?: ComputeRegionHealthCheckHttpHealthCheckOutputReference | ComputeRegionHealthCheckHttpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ComputeRegionHealthCheckHttpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionHealthCheckHttpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionHealthCheckHttpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._requestPath = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._requestPath = value.requestPath;
      this._response = value.response;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_name - computed: false, optional: true, required: false
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface ComputeRegionHealthCheckHttpsHealthCheck {
  /**
  * The value of the host header in the HTTPS health check request.
If left empty (default value), the public IP on behalf of which this health
check is performed will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#host ComputeRegionHealthCheck#host}
  */
  readonly host?: string;
  /**
  * The TCP port number for the HTTPS health check request.
The default value is 443.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port ComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of the
following values:

  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The request path of the HTTPS health check request.
The default value is /.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#request_path ComputeRegionHealthCheck#request_path}
  */
  readonly requestPath?: string;
  /**
  * The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#response ComputeRegionHealthCheck#response}
  */
  readonly response?: string;
}

export function computeRegionHealthCheckHttpsHealthCheckToTerraform(struct?: ComputeRegionHealthCheckHttpsHealthCheckOutputReference | ComputeRegionHealthCheckHttpsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ComputeRegionHealthCheckHttpsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionHealthCheckHttpsHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionHealthCheckHttpsHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._requestPath = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._requestPath = value.requestPath;
      this._response = value.response;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_name - computed: false, optional: true, required: false
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface ComputeRegionHealthCheckLogConfig {
  /**
  * Indicates whether or not to export logs. This is false by default,
which means no health check logging will be done.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#enable ComputeRegionHealthCheck#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function computeRegionHealthCheckLogConfigToTerraform(struct?: ComputeRegionHealthCheckLogConfigOutputReference | ComputeRegionHealthCheckLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}

export class ComputeRegionHealthCheckLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionHealthCheckLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionHealthCheckLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
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
}
export interface ComputeRegionHealthCheckSslHealthCheck {
  /**
  * The TCP port number for the SSL health check request.
The default value is 443.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port ComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of the
following values:

  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The application data to send once the SSL connection has been
established (default value is empty). If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#request ComputeRegionHealthCheck#request}
  */
  readonly request?: string;
  /**
  * The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#response ComputeRegionHealthCheck#response}
  */
  readonly response?: string;
}

export function computeRegionHealthCheckSslHealthCheckToTerraform(struct?: ComputeRegionHealthCheckSslHealthCheckOutputReference | ComputeRegionHealthCheckSslHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request: cdktf.stringToTerraform(struct!.request),
    response: cdktf.stringToTerraform(struct!.response),
  }
}

export class ComputeRegionHealthCheckSslHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionHealthCheckSslHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionHealthCheckSslHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._request = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._request = value.request;
      this._response = value.response;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_name - computed: false, optional: true, required: false
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface ComputeRegionHealthCheckTcpHealthCheck {
  /**
  * The TCP port number for the TCP health check request.
The default value is 80.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port ComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of the
following values:

  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The application data to send once the TCP connection has been
established (default value is empty). If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#request ComputeRegionHealthCheck#request}
  */
  readonly request?: string;
  /**
  * The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#response ComputeRegionHealthCheck#response}
  */
  readonly response?: string;
}

export function computeRegionHealthCheckTcpHealthCheckToTerraform(struct?: ComputeRegionHealthCheckTcpHealthCheckOutputReference | ComputeRegionHealthCheckTcpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request: cdktf.stringToTerraform(struct!.request),
    response: cdktf.stringToTerraform(struct!.response),
  }
}

export class ComputeRegionHealthCheckTcpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionHealthCheckTcpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionHealthCheckTcpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._request = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._request = value.request;
      this._response = value.response;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_name - computed: false, optional: true, required: false
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface ComputeRegionHealthCheckTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#create ComputeRegionHealthCheck#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#delete ComputeRegionHealthCheck#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check#update ComputeRegionHealthCheck#update}
  */
  readonly update?: string;
}

export function computeRegionHealthCheckTimeoutsToTerraform(struct?: ComputeRegionHealthCheckTimeoutsOutputReference | ComputeRegionHealthCheckTimeouts | cdktf.IResolvable): any {
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

export class ComputeRegionHealthCheckTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionHealthCheckTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRegionHealthCheckTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check google_compute_region_health_check}
*/
export class ComputeRegionHealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_health_check";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_region_health_check google_compute_region_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRegionHealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRegionHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_health_check',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._checkIntervalSec = config.checkIntervalSec;
    this._description = config.description;
    this._healthyThreshold = config.healthyThreshold;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._timeoutSec = config.timeoutSec;
    this._unhealthyThreshold = config.unhealthyThreshold;
    this._grpcHealthCheck.internalValue = config.grpcHealthCheck;
    this._http2HealthCheck.internalValue = config.http2HealthCheck;
    this._httpHealthCheck.internalValue = config.httpHealthCheck;
    this._httpsHealthCheck.internalValue = config.httpsHealthCheck;
    this._logConfig.internalValue = config.logConfig;
    this._sslHealthCheck.internalValue = config.sslHealthCheck;
    this._tcpHealthCheck.internalValue = config.tcpHealthCheck;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_interval_sec - computed: false, optional: true, required: false
  private _checkIntervalSec?: number; 
  public get checkIntervalSec() {
    return this.getNumberAttribute('check_interval_sec');
  }
  public set checkIntervalSec(value: number) {
    this._checkIntervalSec = value;
  }
  public resetCheckIntervalSec() {
    this._checkIntervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalSecInput() {
    return this._checkIntervalSec;
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

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
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

  // timeout_sec - computed: false, optional: true, required: false
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // grpc_health_check - computed: false, optional: true, required: false
  private _grpcHealthCheck = new ComputeRegionHealthCheckGrpcHealthCheckOutputReference(this, "grpc_health_check");
  public get grpcHealthCheck() {
    return this._grpcHealthCheck;
  }
  public putGrpcHealthCheck(value: ComputeRegionHealthCheckGrpcHealthCheck) {
    this._grpcHealthCheck.internalValue = value;
  }
  public resetGrpcHealthCheck() {
    this._grpcHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcHealthCheckInput() {
    return this._grpcHealthCheck.internalValue;
  }

  // http2_health_check - computed: false, optional: true, required: false
  private _http2HealthCheck = new ComputeRegionHealthCheckHttp2HealthCheckOutputReference(this, "http2_health_check");
  public get http2HealthCheck() {
    return this._http2HealthCheck;
  }
  public putHttp2HealthCheck(value: ComputeRegionHealthCheckHttp2HealthCheck) {
    this._http2HealthCheck.internalValue = value;
  }
  public resetHttp2HealthCheck() {
    this._http2HealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2HealthCheckInput() {
    return this._http2HealthCheck.internalValue;
  }

  // http_health_check - computed: false, optional: true, required: false
  private _httpHealthCheck = new ComputeRegionHealthCheckHttpHealthCheckOutputReference(this, "http_health_check");
  public get httpHealthCheck() {
    return this._httpHealthCheck;
  }
  public putHttpHealthCheck(value: ComputeRegionHealthCheckHttpHealthCheck) {
    this._httpHealthCheck.internalValue = value;
  }
  public resetHttpHealthCheck() {
    this._httpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthCheckInput() {
    return this._httpHealthCheck.internalValue;
  }

  // https_health_check - computed: false, optional: true, required: false
  private _httpsHealthCheck = new ComputeRegionHealthCheckHttpsHealthCheckOutputReference(this, "https_health_check");
  public get httpsHealthCheck() {
    return this._httpsHealthCheck;
  }
  public putHttpsHealthCheck(value: ComputeRegionHealthCheckHttpsHealthCheck) {
    this._httpsHealthCheck.internalValue = value;
  }
  public resetHttpsHealthCheck() {
    this._httpsHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsHealthCheckInput() {
    return this._httpsHealthCheck.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new ComputeRegionHealthCheckLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: ComputeRegionHealthCheckLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // ssl_health_check - computed: false, optional: true, required: false
  private _sslHealthCheck = new ComputeRegionHealthCheckSslHealthCheckOutputReference(this, "ssl_health_check");
  public get sslHealthCheck() {
    return this._sslHealthCheck;
  }
  public putSslHealthCheck(value: ComputeRegionHealthCheckSslHealthCheck) {
    this._sslHealthCheck.internalValue = value;
  }
  public resetSslHealthCheck() {
    this._sslHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHealthCheckInput() {
    return this._sslHealthCheck.internalValue;
  }

  // tcp_health_check - computed: false, optional: true, required: false
  private _tcpHealthCheck = new ComputeRegionHealthCheckTcpHealthCheckOutputReference(this, "tcp_health_check");
  public get tcpHealthCheck() {
    return this._tcpHealthCheck;
  }
  public putTcpHealthCheck(value: ComputeRegionHealthCheckTcpHealthCheck) {
    this._tcpHealthCheck.internalValue = value;
  }
  public resetTcpHealthCheck() {
    this._tcpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHealthCheckInput() {
    return this._tcpHealthCheck.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRegionHealthCheckTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRegionHealthCheckTimeouts) {
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
      check_interval_sec: cdktf.numberToTerraform(this._checkIntervalSec),
      description: cdktf.stringToTerraform(this._description),
      healthy_threshold: cdktf.numberToTerraform(this._healthyThreshold),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      timeout_sec: cdktf.numberToTerraform(this._timeoutSec),
      unhealthy_threshold: cdktf.numberToTerraform(this._unhealthyThreshold),
      grpc_health_check: computeRegionHealthCheckGrpcHealthCheckToTerraform(this._grpcHealthCheck.internalValue),
      http2_health_check: computeRegionHealthCheckHttp2HealthCheckToTerraform(this._http2HealthCheck.internalValue),
      http_health_check: computeRegionHealthCheckHttpHealthCheckToTerraform(this._httpHealthCheck.internalValue),
      https_health_check: computeRegionHealthCheckHttpsHealthCheckToTerraform(this._httpsHealthCheck.internalValue),
      log_config: computeRegionHealthCheckLogConfigToTerraform(this._logConfig.internalValue),
      ssl_health_check: computeRegionHealthCheckSslHealthCheckToTerraform(this._sslHealthCheck.internalValue),
      tcp_health_check: computeRegionHealthCheckTcpHealthCheckToTerraform(this._tcpHealthCheck.internalValue),
      timeouts: computeRegionHealthCheckTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
