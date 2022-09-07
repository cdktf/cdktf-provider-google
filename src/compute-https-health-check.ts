// https://www.terraform.io/docs/providers/google/r/compute_https_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeHttpsHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * How often (in seconds) to send a health check. The default value is 5
seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#check_interval_sec ComputeHttpsHealthCheck#check_interval_sec}
  */
  readonly checkIntervalSec?: number;
  /**
  * An optional description of this resource. Provide this property when
you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#description ComputeHttpsHealthCheck#description}
  */
  readonly description?: string;
  /**
  * A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#healthy_threshold ComputeHttpsHealthCheck#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * The value of the host header in the HTTPS health check request. If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#host ComputeHttpsHealthCheck#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#id ComputeHttpsHealthCheck#id}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#name ComputeHttpsHealthCheck#name}
  */
  readonly name: string;
  /**
  * The TCP port number for the HTTPS health check request.
The default value is 443.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#port ComputeHttpsHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#project ComputeHttpsHealthCheck#project}
  */
  readonly project?: string;
  /**
  * The request path of the HTTPS health check request.
The default value is /.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#request_path ComputeHttpsHealthCheck#request_path}
  */
  readonly requestPath?: string;
  /**
  * How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#timeout_sec ComputeHttpsHealthCheck#timeout_sec}
  */
  readonly timeoutSec?: number;
  /**
  * A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#unhealthy_threshold ComputeHttpsHealthCheck#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#timeouts ComputeHttpsHealthCheck#timeouts}
  */
  readonly timeouts?: ComputeHttpsHealthCheckTimeouts;
}
export interface ComputeHttpsHealthCheckTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#create ComputeHttpsHealthCheck#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#delete ComputeHttpsHealthCheck#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#update ComputeHttpsHealthCheck#update}
  */
  readonly update?: string;
}

export function computeHttpsHealthCheckTimeoutsToTerraform(struct?: ComputeHttpsHealthCheckTimeoutsOutputReference | ComputeHttpsHealthCheckTimeouts | cdktf.IResolvable): any {
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

export class ComputeHttpsHealthCheckTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeHttpsHealthCheckTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeHttpsHealthCheckTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check google_compute_https_health_check}
*/
export class ComputeHttpsHealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_https_health_check";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check google_compute_https_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeHttpsHealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeHttpsHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_https_health_check',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._host = config.host;
    this._id = config.id;
    this._name = config.name;
    this._port = config.port;
    this._project = config.project;
    this._requestPath = config.requestPath;
    this._timeoutSec = config.timeoutSec;
    this._unhealthyThreshold = config.unhealthyThreshold;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeHttpsHealthCheckTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeHttpsHealthCheckTimeouts) {
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
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      project: cdktf.stringToTerraform(this._project),
      request_path: cdktf.stringToTerraform(this._requestPath),
      timeout_sec: cdktf.numberToTerraform(this._timeoutSec),
      unhealthy_threshold: cdktf.numberToTerraform(this._unhealthyThreshold),
      timeouts: computeHttpsHealthCheckTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
