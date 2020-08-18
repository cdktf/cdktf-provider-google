// https://www.terraform.io/docs/providers/google/r/compute_https_health_check.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeHttpsHealthCheckConfig extends TerraformMetaArguments {
  /** How often (in seconds) to send a health check. The default value is 5
seconds. */
  readonly checkIntervalSec?: number;
  /** An optional description of this resource. Provide this property when
you create the resource. */
  readonly description?: string;
  /** A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2. */
  readonly healthyThreshold?: number;
  /** The value of the host header in the HTTPS health check request. If
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
  /** The TCP port number for the HTTPS health check request.
The default value is 80. */
  readonly port?: number;
  readonly project?: string;
  /** The request path of the HTTPS health check request.
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
  readonly timeouts?: ComputeHttpsHealthCheckTimeouts;
}
export interface ComputeHttpsHealthCheckTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeHttpsHealthCheck extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeHttpsHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_https_health_check',
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

  // host - computed: false, optional: true, required: false
  private _host?: string;
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
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

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string;
  public get requestPath() {
    return this._requestPath;
  }
  public set requestPath(value: string | undefined) {
    this._requestPath = value;
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

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number;
  public get unhealthyThreshold() {
    return this._unhealthyThreshold;
  }
  public set unhealthyThreshold(value: number | undefined) {
    this._unhealthyThreshold = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeHttpsHealthCheckTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeHttpsHealthCheckTimeouts | undefined) {
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
      host: this._host,
      name: this._name,
      port: this._port,
      project: this._project,
      request_path: this._requestPath,
      timeout_sec: this._timeoutSec,
      unhealthy_threshold: this._unhealthyThreshold,
      timeouts: this._timeouts,
    };
  }
}
