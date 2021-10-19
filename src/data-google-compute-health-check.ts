// https://www.terraform.io/docs/providers/google/d/compute_health_check.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_health_check.html#name DataGoogleComputeHealthCheck#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_health_check.html#project DataGoogleComputeHealthCheck#project}
  */
  readonly project?: string;
}
export class DataGoogleComputeHealthCheckGrpcHealthCheck extends cdktf.ComplexComputedList {

  // grpc_service_name - computed: true, optional: false, required: false
  public get grpcServiceName() {
    return this.getStringAttribute('grpc_service_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // port_specification - computed: true, optional: false, required: false
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
}
export class DataGoogleComputeHealthCheckHttp2HealthCheck extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // port_specification - computed: true, optional: false, required: false
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }

  // proxy_header - computed: true, optional: false, required: false
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }

  // request_path - computed: true, optional: false, required: false
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getStringAttribute('response');
  }
}
export class DataGoogleComputeHealthCheckHttpHealthCheck extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // port_specification - computed: true, optional: false, required: false
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }

  // proxy_header - computed: true, optional: false, required: false
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }

  // request_path - computed: true, optional: false, required: false
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getStringAttribute('response');
  }
}
export class DataGoogleComputeHealthCheckHttpsHealthCheck extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // port_specification - computed: true, optional: false, required: false
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }

  // proxy_header - computed: true, optional: false, required: false
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }

  // request_path - computed: true, optional: false, required: false
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getStringAttribute('response');
  }
}
export class DataGoogleComputeHealthCheckLogConfig extends cdktf.ComplexComputedList {

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable') as any;
  }
}
export class DataGoogleComputeHealthCheckSslHealthCheck extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // port_specification - computed: true, optional: false, required: false
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }

  // proxy_header - computed: true, optional: false, required: false
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }

  // request - computed: true, optional: false, required: false
  public get request() {
    return this.getStringAttribute('request');
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getStringAttribute('response');
  }
}
export class DataGoogleComputeHealthCheckTcpHealthCheck extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // port_specification - computed: true, optional: false, required: false
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }

  // proxy_header - computed: true, optional: false, required: false
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }

  // request - computed: true, optional: false, required: false
  public get request() {
    return this.getStringAttribute('request');
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getStringAttribute('response');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/compute_health_check.html google_compute_health_check}
*/
export class DataGoogleComputeHealthCheck extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_health_check";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/compute_health_check.html google_compute_health_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeHealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_health_check',
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

  // check_interval_sec - computed: true, optional: false, required: false
  public get checkIntervalSec() {
    return this.getNumberAttribute('check_interval_sec');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // grpc_health_check - computed: true, optional: false, required: false
  public grpcHealthCheck(index: string) {
    return new DataGoogleComputeHealthCheckGrpcHealthCheck(this, 'grpc_health_check', index);
  }

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // http2_health_check - computed: true, optional: false, required: false
  public http2HealthCheck(index: string) {
    return new DataGoogleComputeHealthCheckHttp2HealthCheck(this, 'http2_health_check', index);
  }

  // http_health_check - computed: true, optional: false, required: false
  public httpHealthCheck(index: string) {
    return new DataGoogleComputeHealthCheckHttpHealthCheck(this, 'http_health_check', index);
  }

  // https_health_check - computed: true, optional: false, required: false
  public httpsHealthCheck(index: string) {
    return new DataGoogleComputeHealthCheckHttpsHealthCheck(this, 'https_health_check', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_config - computed: true, optional: false, required: false
  public logConfig(index: string) {
    return new DataGoogleComputeHealthCheckLogConfig(this, 'log_config', index);
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

  // project - computed: false, optional: true, required: false
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // ssl_health_check - computed: true, optional: false, required: false
  public sslHealthCheck(index: string) {
    return new DataGoogleComputeHealthCheckSslHealthCheck(this, 'ssl_health_check', index);
  }

  // tcp_health_check - computed: true, optional: false, required: false
  public tcpHealthCheck(index: string) {
    return new DataGoogleComputeHealthCheckTcpHealthCheck(this, 'tcp_health_check', index);
  }

  // timeout_sec - computed: true, optional: false, required: false
  public get timeoutSec() {
    return this.getNumberAttribute('timeout_sec');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
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
