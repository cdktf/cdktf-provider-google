/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BeyondcorpAppConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of AppConnectors that are authorised to be associated with this AppConnection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#connectors BeyondcorpAppConnection#connectors}
  */
  readonly connectors?: string[];
  /**
  * An arbitrary user-provided name for the AppConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#display_name BeyondcorpAppConnection#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#id BeyondcorpAppConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels to represent user provided metadata.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#labels BeyondcorpAppConnection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * ID of the AppConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#name BeyondcorpAppConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#project BeyondcorpAppConnection#project}
  */
  readonly project?: string;
  /**
  * The region of the AppConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#region BeyondcorpAppConnection#region}
  */
  readonly region?: string;
  /**
  * The type of network connectivity used by the AppConnection. Refer to
  * https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type
  * for a list of possible values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#type BeyondcorpAppConnection#type}
  */
  readonly type?: string;
  /**
  * application_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#application_endpoint BeyondcorpAppConnection#application_endpoint}
  */
  readonly applicationEndpoint: BeyondcorpAppConnectionApplicationEndpoint;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#gateway BeyondcorpAppConnection#gateway}
  */
  readonly gateway?: BeyondcorpAppConnectionGateway;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#timeouts BeyondcorpAppConnection#timeouts}
  */
  readonly timeouts?: BeyondcorpAppConnectionTimeouts;
}
export interface BeyondcorpAppConnectionApplicationEndpoint {
  /**
  * Hostname or IP address of the remote application endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#host BeyondcorpAppConnection#host}
  */
  readonly host: string;
  /**
  * Port of the remote application endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#port BeyondcorpAppConnection#port}
  */
  readonly port: number;
}

export function beyondcorpAppConnectionApplicationEndpointToTerraform(struct?: BeyondcorpAppConnectionApplicationEndpointOutputReference | BeyondcorpAppConnectionApplicationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function beyondcorpAppConnectionApplicationEndpointToHclTerraform(struct?: BeyondcorpAppConnectionApplicationEndpointOutputReference | BeyondcorpAppConnectionApplicationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpAppConnectionApplicationEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpAppConnectionApplicationEndpoint | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpAppConnectionApplicationEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface BeyondcorpAppConnectionGateway {
  /**
  * AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#app_gateway BeyondcorpAppConnection#app_gateway}
  */
  readonly appGateway: string;
  /**
  * The type of hosting used by the gateway. Refer to
  * https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1
  * for a list of possible values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#type BeyondcorpAppConnection#type}
  */
  readonly type?: string;
}

export function beyondcorpAppConnectionGatewayToTerraform(struct?: BeyondcorpAppConnectionGatewayOutputReference | BeyondcorpAppConnectionGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_gateway: cdktf.stringToTerraform(struct!.appGateway),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function beyondcorpAppConnectionGatewayToHclTerraform(struct?: BeyondcorpAppConnectionGatewayOutputReference | BeyondcorpAppConnectionGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_gateway: {
      value: cdktf.stringToHclTerraform(struct!.appGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpAppConnectionGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpAppConnectionGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.appGateway = this._appGateway;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpAppConnectionGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appGateway = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appGateway = value.appGateway;
      this._type = value.type;
    }
  }

  // app_gateway - computed: false, optional: false, required: true
  private _appGateway?: string; 
  public get appGateway() {
    return this.getStringAttribute('app_gateway');
  }
  public set appGateway(value: string) {
    this._appGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appGatewayInput() {
    return this._appGateway;
  }

  // ingress_port - computed: true, optional: false, required: false
  public get ingressPort() {
    return this.getNumberAttribute('ingress_port');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface BeyondcorpAppConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#create BeyondcorpAppConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#delete BeyondcorpAppConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#update BeyondcorpAppConnection#update}
  */
  readonly update?: string;
}

export function beyondcorpAppConnectionTimeoutsToTerraform(struct?: BeyondcorpAppConnectionTimeouts | cdktf.IResolvable): any {
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


export function beyondcorpAppConnectionTimeoutsToHclTerraform(struct?: BeyondcorpAppConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpAppConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BeyondcorpAppConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BeyondcorpAppConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection google_beyondcorp_app_connection}
*/
export class BeyondcorpAppConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_beyondcorp_app_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BeyondcorpAppConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BeyondcorpAppConnection to import
  * @param importFromId The id of the existing BeyondcorpAppConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BeyondcorpAppConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_beyondcorp_app_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/beyondcorp_app_connection google_beyondcorp_app_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BeyondcorpAppConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: BeyondcorpAppConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_beyondcorp_app_connection',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.20.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectors = config.connectors;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._type = config.type;
    this._applicationEndpoint.internalValue = config.applicationEndpoint;
    this._gateway.internalValue = config.gateway;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connectors - computed: false, optional: true, required: false
  private _connectors?: string[]; 
  public get connectors() {
    return this.getListAttribute('connectors');
  }
  public set connectors(value: string[]) {
    this._connectors = value;
  }
  public resetConnectors() {
    this._connectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorsInput() {
    return this._connectors;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // region - computed: false, optional: true, required: false
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // application_endpoint - computed: false, optional: false, required: true
  private _applicationEndpoint = new BeyondcorpAppConnectionApplicationEndpointOutputReference(this, "application_endpoint");
  public get applicationEndpoint() {
    return this._applicationEndpoint;
  }
  public putApplicationEndpoint(value: BeyondcorpAppConnectionApplicationEndpoint) {
    this._applicationEndpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEndpointInput() {
    return this._applicationEndpoint.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new BeyondcorpAppConnectionGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: BeyondcorpAppConnectionGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BeyondcorpAppConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BeyondcorpAppConnectionTimeouts) {
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
      connectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectors),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
      application_endpoint: beyondcorpAppConnectionApplicationEndpointToTerraform(this._applicationEndpoint.internalValue),
      gateway: beyondcorpAppConnectionGatewayToTerraform(this._gateway.internalValue),
      timeouts: beyondcorpAppConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_endpoint: {
        value: beyondcorpAppConnectionApplicationEndpointToHclTerraform(this._applicationEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BeyondcorpAppConnectionApplicationEndpointList",
      },
      gateway: {
        value: beyondcorpAppConnectionGatewayToHclTerraform(this._gateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BeyondcorpAppConnectionGatewayList",
      },
      timeouts: {
        value: beyondcorpAppConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BeyondcorpAppConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
