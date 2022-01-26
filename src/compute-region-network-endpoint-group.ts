// https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionNetworkEndpointGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource. Provide this property when
you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#description ComputeRegionNetworkEndpointGroup#description}
  */
  readonly description?: string;
  /**
  * Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#name ComputeRegionNetworkEndpointGroup#name}
  */
  readonly name: string;
  /**
  * Type of network endpoints in this network endpoint group. Defaults to SERVERLESS Default value: "SERVERLESS" Possible values: ["SERVERLESS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#network_endpoint_type ComputeRegionNetworkEndpointGroup#network_endpoint_type}
  */
  readonly networkEndpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#project ComputeRegionNetworkEndpointGroup#project}
  */
  readonly project?: string;
  /**
  * A reference to the region where the Serverless NEGs Reside.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#region ComputeRegionNetworkEndpointGroup#region}
  */
  readonly region: string;
  /**
  * app_engine block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#app_engine ComputeRegionNetworkEndpointGroup#app_engine}
  */
  readonly appEngine?: ComputeRegionNetworkEndpointGroupAppEngine;
  /**
  * cloud_function block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#cloud_function ComputeRegionNetworkEndpointGroup#cloud_function}
  */
  readonly cloudFunction?: ComputeRegionNetworkEndpointGroupCloudFunction;
  /**
  * cloud_run block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#cloud_run ComputeRegionNetworkEndpointGroup#cloud_run}
  */
  readonly cloudRun?: ComputeRegionNetworkEndpointGroupCloudRun;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#timeouts ComputeRegionNetworkEndpointGroup#timeouts}
  */
  readonly timeouts?: ComputeRegionNetworkEndpointGroupTimeouts;
}
export interface ComputeRegionNetworkEndpointGroupAppEngine {
  /**
  * Optional serving service.
The service name must be 1-63 characters long, and comply with RFC1035.
Example value: "default", "my-service".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#service ComputeRegionNetworkEndpointGroup#service}
  */
  readonly service?: string;
  /**
  * A template to parse service and version fields from a request URL.
URL mask allows for routing to multiple App Engine services without
having to create multiple Network Endpoint Groups and backend services.

For example, the request URLs "foo1-dot-appname.appspot.com/v1" and
"foo1-dot-appname.appspot.com/v2" can be backed by the same Serverless NEG with
URL mask "-dot-appname.appspot.com/". The URL mask will parse
them to { service = "foo1", version = "v1" } and { service = "foo1", version = "v2" } respectively.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}
  */
  readonly urlMask?: string;
  /**
  * Optional serving version.
The version must be 1-63 characters long, and comply with RFC1035.
Example value: "v1", "v2".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#version ComputeRegionNetworkEndpointGroup#version}
  */
  readonly version?: string;
}

export function computeRegionNetworkEndpointGroupAppEngineToTerraform(struct?: ComputeRegionNetworkEndpointGroupAppEngineOutputReference | ComputeRegionNetworkEndpointGroupAppEngine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
    url_mask: cdktf.stringToTerraform(struct!.urlMask),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class ComputeRegionNetworkEndpointGroupAppEngineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeRegionNetworkEndpointGroupAppEngine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._urlMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlMask = this._urlMask;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionNetworkEndpointGroupAppEngine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
      this._urlMask = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
      this._urlMask = value.urlMask;
      this._version = value.version;
    }
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // url_mask - computed: false, optional: true, required: false
  private _urlMask?: string; 
  public get urlMask() {
    return this.getStringAttribute('url_mask');
  }
  public set urlMask(value: string) {
    this._urlMask = value;
  }
  public resetUrlMask() {
    this._urlMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMaskInput() {
    return this._urlMask;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ComputeRegionNetworkEndpointGroupCloudFunction {
  /**
  * A user-defined name of the Cloud Function.
The function name is case-sensitive and must be 1-63 characters long.
Example value: "func1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#function ComputeRegionNetworkEndpointGroup#function}
  */
  readonly function?: string;
  /**
  * A template to parse function field from a request URL. URL mask allows
for routing to multiple Cloud Functions without having to create
multiple Network Endpoint Groups and backend services.

For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
can be backed by the same Serverless NEG with URL mask "/". The URL mask
will parse them to { function = "function1" } and { function = "function2" } respectively.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}
  */
  readonly urlMask?: string;
}

export function computeRegionNetworkEndpointGroupCloudFunctionToTerraform(struct?: ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference | ComputeRegionNetworkEndpointGroupCloudFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: cdktf.stringToTerraform(struct!.function),
    url_mask: cdktf.stringToTerraform(struct!.urlMask),
  }
}

export class ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeRegionNetworkEndpointGroupCloudFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._urlMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlMask = this._urlMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionNetworkEndpointGroupCloudFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._function = undefined;
      this._urlMask = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._function = value.function;
      this._urlMask = value.urlMask;
    }
  }

  // function - computed: false, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // url_mask - computed: false, optional: true, required: false
  private _urlMask?: string; 
  public get urlMask() {
    return this.getStringAttribute('url_mask');
  }
  public set urlMask(value: string) {
    this._urlMask = value;
  }
  public resetUrlMask() {
    this._urlMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMaskInput() {
    return this._urlMask;
  }
}
export interface ComputeRegionNetworkEndpointGroupCloudRun {
  /**
  * Cloud Run service is the main resource of Cloud Run.
The service must be 1-63 characters long, and comply with RFC1035.
Example value: "run-service".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#service ComputeRegionNetworkEndpointGroup#service}
  */
  readonly service?: string;
  /**
  * Cloud Run tag represents the "named-revision" to provide
additional fine-grained traffic routing information.
The tag must be 1-63 characters long, and comply with RFC1035.
Example value: "revision-0010".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#tag ComputeRegionNetworkEndpointGroup#tag}
  */
  readonly tag?: string;
  /**
  * A template to parse service and tag fields from a request URL.
URL mask allows for routing to multiple Run services without having
to create multiple network endpoint groups and backend services.

For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"
an be backed by the same Serverless Network Endpoint Group (NEG) with
URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }
and { service="bar2", tag="foo2" } respectively.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}
  */
  readonly urlMask?: string;
}

export function computeRegionNetworkEndpointGroupCloudRunToTerraform(struct?: ComputeRegionNetworkEndpointGroupCloudRunOutputReference | ComputeRegionNetworkEndpointGroupCloudRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
    tag: cdktf.stringToTerraform(struct!.tag),
    url_mask: cdktf.stringToTerraform(struct!.urlMask),
  }
}

export class ComputeRegionNetworkEndpointGroupCloudRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeRegionNetworkEndpointGroupCloudRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._urlMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlMask = this._urlMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionNetworkEndpointGroupCloudRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
      this._tag = undefined;
      this._urlMask = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
      this._tag = value.tag;
      this._urlMask = value.urlMask;
    }
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // url_mask - computed: false, optional: true, required: false
  private _urlMask?: string; 
  public get urlMask() {
    return this.getStringAttribute('url_mask');
  }
  public set urlMask(value: string) {
    this._urlMask = value;
  }
  public resetUrlMask() {
    this._urlMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMaskInput() {
    return this._urlMask;
  }
}
export interface ComputeRegionNetworkEndpointGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#create ComputeRegionNetworkEndpointGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group#delete ComputeRegionNetworkEndpointGroup#delete}
  */
  readonly delete?: string;
}

export function computeRegionNetworkEndpointGroupTimeoutsToTerraform(struct?: ComputeRegionNetworkEndpointGroupTimeoutsOutputReference | ComputeRegionNetworkEndpointGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeRegionNetworkEndpointGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeRegionNetworkEndpointGroupTimeouts | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionNetworkEndpointGroupTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group google_compute_region_network_endpoint_group}
*/
export class ComputeRegionNetworkEndpointGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_region_network_endpoint_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_endpoint_group google_compute_region_network_endpoint_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRegionNetworkEndpointGroupConfig
  */
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
    this._appEngine.internalValue = config.appEngine;
    this._cloudFunction.internalValue = config.cloudFunction;
    this._cloudRun.internalValue = config.cloudRun;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_endpoint_type - computed: false, optional: true, required: false
  private _networkEndpointType?: string; 
  public get networkEndpointType() {
    return this.getStringAttribute('network_endpoint_type');
  }
  public set networkEndpointType(value: string) {
    this._networkEndpointType = value;
  }
  public resetNetworkEndpointType() {
    this._networkEndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEndpointTypeInput() {
    return this._networkEndpointType;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // app_engine - computed: false, optional: true, required: false
  private _appEngine = new ComputeRegionNetworkEndpointGroupAppEngineOutputReference(this, "app_engine", true);
  public get appEngine() {
    return this._appEngine;
  }
  public putAppEngine(value: ComputeRegionNetworkEndpointGroupAppEngine) {
    this._appEngine.internalValue = value;
  }
  public resetAppEngine() {
    this._appEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineInput() {
    return this._appEngine.internalValue;
  }

  // cloud_function - computed: false, optional: true, required: false
  private _cloudFunction = new ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference(this, "cloud_function", true);
  public get cloudFunction() {
    return this._cloudFunction;
  }
  public putCloudFunction(value: ComputeRegionNetworkEndpointGroupCloudFunction) {
    this._cloudFunction.internalValue = value;
  }
  public resetCloudFunction() {
    this._cloudFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionInput() {
    return this._cloudFunction.internalValue;
  }

  // cloud_run - computed: false, optional: true, required: false
  private _cloudRun = new ComputeRegionNetworkEndpointGroupCloudRunOutputReference(this, "cloud_run", true);
  public get cloudRun() {
    return this._cloudRun;
  }
  public putCloudRun(value: ComputeRegionNetworkEndpointGroupCloudRun) {
    this._cloudRun.internalValue = value;
  }
  public resetCloudRun() {
    this._cloudRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunInput() {
    return this._cloudRun.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRegionNetworkEndpointGroupTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRegionNetworkEndpointGroupTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      network_endpoint_type: cdktf.stringToTerraform(this._networkEndpointType),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      app_engine: computeRegionNetworkEndpointGroupAppEngineToTerraform(this._appEngine.internalValue),
      cloud_function: computeRegionNetworkEndpointGroupCloudFunctionToTerraform(this._cloudFunction.internalValue),
      cloud_run: computeRegionNetworkEndpointGroupCloudRunToTerraform(this._cloudRun.internalValue),
      timeouts: computeRegionNetworkEndpointGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
