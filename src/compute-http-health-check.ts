// https://www.terraform.io/docs/providers/google/r/compute_http_health_check.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeHttpHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /** How often (in seconds) to send a health check. The default value is 5
seconds. */
  readonly checkIntervalSec?: number;
  /** An optional description of this resource. Provide this property when
you create the resource. */
  readonly description?: string;
  /** A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2. */
  readonly healthyThreshold?: number;
  /** The value of the host header in the HTTP health check request. If
left empty (default value), the public IP on behalf of which this
health check is performed will be used. */
  readonly host?: string;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash. */
  readonly name: string;
  /** The TCP port number for the HTTP health check request.
The default value is 80. */
  readonly port?: number;
  readonly project?: string;
  /** The request path of the HTTP health check request.
The default value is /. */
  readonly requestPath?: string;
  /** How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec. */
  readonly timeoutSec?: number;
  /** A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2. */
  readonly unhealthyThreshold?: number;
  /** timeouts block */
  readonly timeouts?: ComputeHttpHealthCheckTimeouts;
}
export interface ComputeHttpHealthCheckTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeHttpHealthCheckTimeoutsToTerraform(struct?: ComputeHttpHealthCheckTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeHttpHealthCheck extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeHttpHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_http_health_check',
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
    this._host = config.host;
    this._name = config.name;
    this._port = config.port;
    this._project = config.project;
    this._requestPath = config.requestPath;
    this._timeoutSec = config.timeoutSec;
    this._unhealthyThreshold = config.unhealthyThreshold;
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

  // host - computed: false, optional: true, required: false
  private _host?: string;
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string ) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
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

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number ) {
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

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string;
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string ) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeHttpHealthCheckTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeHttpHealthCheckTimeouts ) {
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
      host: cdktf.stringToTerraform(this._host),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      project: cdktf.stringToTerraform(this._project),
      request_path: cdktf.stringToTerraform(this._requestPath),
      timeout_sec: cdktf.numberToTerraform(this._timeoutSec),
      unhealthy_threshold: cdktf.numberToTerraform(this._unhealthyThreshold),
      timeouts: computeHttpHealthCheckTimeoutsToTerraform(this._timeouts),
    };
  }
}
