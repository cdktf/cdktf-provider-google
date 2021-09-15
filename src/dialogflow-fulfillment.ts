// https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowFulfillmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable name of the fulfillment, unique within the agent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#display_name DialogflowFulfillment#display_name}
  */
  readonly displayName: string;
  /**
  * Whether fulfillment is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#enabled DialogflowFulfillment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#project DialogflowFulfillment#project}
  */
  readonly project?: string;
  /**
  * features block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#features DialogflowFulfillment#features}
  */
  readonly features?: DialogflowFulfillmentFeatures[];
  /**
  * generic_web_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#generic_web_service DialogflowFulfillment#generic_web_service}
  */
  readonly genericWebService?: DialogflowFulfillmentGenericWebService[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#timeouts DialogflowFulfillment#timeouts}
  */
  readonly timeouts?: DialogflowFulfillmentTimeouts;
}
export interface DialogflowFulfillmentFeatures {
  /**
  * The type of the feature that enabled for fulfillment.
* SMALLTALK: Fulfillment is enabled for SmallTalk. Possible values: ["SMALLTALK"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#type DialogflowFulfillment#type}
  */
  readonly type: string;
}

function dialogflowFulfillmentFeaturesToTerraform(struct?: DialogflowFulfillmentFeatures): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DialogflowFulfillmentGenericWebService {
  /**
  * The password for HTTP Basic authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#password DialogflowFulfillment#password}
  */
  readonly password?: string;
  /**
  * The HTTP request headers to send together with fulfillment requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#request_headers DialogflowFulfillment#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The fulfillment URI for receiving POST requests. It must use https protocol.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#uri DialogflowFulfillment#uri}
  */
  readonly uri: string;
  /**
  * The user name for HTTP Basic authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#username DialogflowFulfillment#username}
  */
  readonly username?: string;
}

function dialogflowFulfillmentGenericWebServiceToTerraform(struct?: DialogflowFulfillmentGenericWebService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    request_headers: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requestHeaders),
    uri: cdktf.stringToTerraform(struct!.uri),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface DialogflowFulfillmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#create DialogflowFulfillment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#delete DialogflowFulfillment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html#update DialogflowFulfillment#update}
  */
  readonly update?: string;
}

function dialogflowFulfillmentTimeoutsToTerraform(struct?: DialogflowFulfillmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html google_dialogflow_fulfillment}
*/
export class DialogflowFulfillment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dialogflow_fulfillment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment.html google_dialogflow_fulfillment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowFulfillmentConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowFulfillmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_fulfillment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._project = config.project;
    this._features = config.features;
    this._genericWebService = config.genericWebService;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // features - computed: false, optional: true, required: false
  private _features?: DialogflowFulfillmentFeatures[];
  public get features() {
    return this.interpolationForAttribute('features') as any;
  }
  public set features(value: DialogflowFulfillmentFeatures[] ) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features
  }

  // generic_web_service - computed: false, optional: true, required: false
  private _genericWebService?: DialogflowFulfillmentGenericWebService[];
  public get genericWebService() {
    return this.interpolationForAttribute('generic_web_service') as any;
  }
  public set genericWebService(value: DialogflowFulfillmentGenericWebService[] ) {
    this._genericWebService = value;
  }
  public resetGenericWebService() {
    this._genericWebService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericWebServiceInput() {
    return this._genericWebService
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DialogflowFulfillmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DialogflowFulfillmentTimeouts ) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      project: cdktf.stringToTerraform(this._project),
      features: cdktf.listMapper(dialogflowFulfillmentFeaturesToTerraform)(this._features),
      generic_web_service: cdktf.listMapper(dialogflowFulfillmentGenericWebServiceToTerraform)(this._genericWebService),
      timeouts: dialogflowFulfillmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
