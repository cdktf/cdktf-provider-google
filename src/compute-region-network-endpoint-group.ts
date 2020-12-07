// https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionNetworkEndpointGroupConfig extends cdktf.TerraformMetaArguments {
  /** An optional description of this resource. Provide this property when
you create the resource. */
  readonly description?: string;
  /** Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  /** Type of network endpoints in this network endpoint group. Defaults to SERVERLESS Default value: "SERVERLESS" Possible values: ["SERVERLESS"] */
  readonly networkEndpointType?: string;
  readonly project?: string;
  /** A reference to the region where the Serverless NEGs Reside. */
  readonly region: string;
  /** app_engine block */
  readonly appEngine?: ComputeRegionNetworkEndpointGroupAppEngine[];
  /** cloud_function block */
  readonly cloudFunction?: ComputeRegionNetworkEndpointGroupCloudFunction[];
  /** cloud_run block */
  readonly cloudRun?: ComputeRegionNetworkEndpointGroupCloudRun[];
  /** timeouts block */
  readonly timeouts?: ComputeRegionNetworkEndpointGroupTimeouts;
}
export interface ComputeRegionNetworkEndpointGroupAppEngine {
  /** Optional serving service.
The service name must be 1-63 characters long, and comply with RFC1035.
Example value: "default", "my-service". */
  readonly service?: string;
  /** A template to parse service and version fields from a request URL.
URL mask allows for routing to multiple App Engine services without
having to create multiple Network Endpoint Groups and backend services.

For example, the request URLs "foo1-dot-appname.appspot.com/v1" and
"foo1-dot-appname.appspot.com/v2" can be backed by the same Serverless NEG with
URL mask "-dot-appname.appspot.com/". The URL mask will parse
them to { service = "foo1", version = "v1" } and { service = "foo1", version = "v2" } respectively. */
  readonly urlMask?: string;
  /** Optional serving version.
The version must be 1-63 characters long, and comply with RFC1035.
Example value: "v1", "v2". */
  readonly version?: string;
}

function computeRegionNetworkEndpointGroupAppEngineToTerraform(struct?: ComputeRegionNetworkEndpointGroupAppEngine): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service: cdktf.stringToTerraform(struct!.service),
    url_mask: cdktf.stringToTerraform(struct!.urlMask),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface ComputeRegionNetworkEndpointGroupCloudFunction {
  /** A user-defined name of the Cloud Function.
The function name is case-sensitive and must be 1-63 characters long.
Example value: "func1". */
  readonly function?: string;
  /** A template to parse function field from a request URL. URL mask allows
for routing to multiple Cloud Functions without having to create
multiple Network Endpoint Groups and backend services.

For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
can be backed by the same Serverless NEG with URL mask "/". The URL mask
will parse them to { function = "function1" } and { function = "function2" } respectively. */
  readonly urlMask?: string;
}

function computeRegionNetworkEndpointGroupCloudFunctionToTerraform(struct?: ComputeRegionNetworkEndpointGroupCloudFunction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function: cdktf.stringToTerraform(struct!.function),
    url_mask: cdktf.stringToTerraform(struct!.urlMask),
  }
}

export interface ComputeRegionNetworkEndpointGroupCloudRun {
  /** Cloud Run service is the main resource of Cloud Run.
The service must be 1-63 characters long, and comply with RFC1035.
Example value: "run-service". */
  readonly service?: string;
  /** Cloud Run tag represents the "named-revision" to provide
additional fine-grained traffic routing information.
The tag must be 1-63 characters long, and comply with RFC1035.
Example value: "revision-0010". */
  readonly tag?: string;
  /** A template to parse service and tag fields from a request URL. 
URL mask allows for routing to multiple Run services without having 
to create multiple network endpoint groups and backend services.

For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2" 
an be backed by the same Serverless Network Endpoint Group (NEG) with 
URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" } 
and { service="bar2", tag="foo2" } respectively. */
  readonly urlMask?: string;
}

function computeRegionNetworkEndpointGroupCloudRunToTerraform(struct?: ComputeRegionNetworkEndpointGroupCloudRun): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service: cdktf.stringToTerraform(struct!.service),
    tag: cdktf.stringToTerraform(struct!.tag),
    url_mask: cdktf.stringToTerraform(struct!.urlMask),
  }
}

export interface ComputeRegionNetworkEndpointGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function computeRegionNetworkEndpointGroupTimeoutsToTerraform(struct?: ComputeRegionNetworkEndpointGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ComputeRegionNetworkEndpointGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRegionNetworkEndpointGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_network_endpoint_group',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._networkEndpointType = config.networkEndpointType;
    this._project = config.project;
    this._region = config.region;
    this._appEngine = config.appEngine;
    this._cloudFunction = config.cloudFunction;
    this._cloudRun = config.cloudRun;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network_endpoint_type - computed: false, optional: true, required: false
  private _networkEndpointType?: string;
  public get networkEndpointType() {
    return this.getStringAttribute('network_endpoint_type');
  }
  public set networkEndpointType(value: string ) {
    this._networkEndpointType = value;
  }
  public resetNetworkEndpointType() {
    this._networkEndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEndpointTypeInput() {
    return this._networkEndpointType
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

  // region - computed: false, optional: false, required: true
  private _region: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // app_engine - computed: false, optional: true, required: false
  private _appEngine?: ComputeRegionNetworkEndpointGroupAppEngine[];
  public get appEngine() {
    return this.interpolationForAttribute('app_engine') as any;
  }
  public set appEngine(value: ComputeRegionNetworkEndpointGroupAppEngine[] ) {
    this._appEngine = value;
  }
  public resetAppEngine() {
    this._appEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineInput() {
    return this._appEngine
  }

  // cloud_function - computed: false, optional: true, required: false
  private _cloudFunction?: ComputeRegionNetworkEndpointGroupCloudFunction[];
  public get cloudFunction() {
    return this.interpolationForAttribute('cloud_function') as any;
  }
  public set cloudFunction(value: ComputeRegionNetworkEndpointGroupCloudFunction[] ) {
    this._cloudFunction = value;
  }
  public resetCloudFunction() {
    this._cloudFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionInput() {
    return this._cloudFunction
  }

  // cloud_run - computed: false, optional: true, required: false
  private _cloudRun?: ComputeRegionNetworkEndpointGroupCloudRun[];
  public get cloudRun() {
    return this.interpolationForAttribute('cloud_run') as any;
  }
  public set cloudRun(value: ComputeRegionNetworkEndpointGroupCloudRun[] ) {
    this._cloudRun = value;
  }
  public resetCloudRun() {
    this._cloudRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunInput() {
    return this._cloudRun
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionNetworkEndpointGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeRegionNetworkEndpointGroupTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      network_endpoint_type: cdktf.stringToTerraform(this._networkEndpointType),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      app_engine: cdktf.listMapper(computeRegionNetworkEndpointGroupAppEngineToTerraform)(this._appEngine),
      cloud_function: cdktf.listMapper(computeRegionNetworkEndpointGroupCloudFunctionToTerraform)(this._cloudFunction),
      cloud_run: cdktf.listMapper(computeRegionNetworkEndpointGroupCloudRunToTerraform)(this._cloudRun),
      timeouts: computeRegionNetworkEndpointGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
