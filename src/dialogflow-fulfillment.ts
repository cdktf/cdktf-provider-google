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
  readonly genericWebService?: DialogflowFulfillmentGenericWebService;
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

export function dialogflowFulfillmentFeaturesToTerraform(struct?: DialogflowFulfillmentFeatures): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function dialogflowFulfillmentGenericWebServiceToTerraform(struct?: DialogflowFulfillmentGenericWebServiceOutputReference | DialogflowFulfillmentGenericWebService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    request_headers: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requestHeaders),
    uri: cdktf.stringToTerraform(struct!.uri),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DialogflowFulfillmentGenericWebServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DialogflowFulfillmentGenericWebService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._requestHeaders) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._uri) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._username) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowFulfillmentGenericWebService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._requestHeaders = undefined;
      this._uri = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._requestHeaders = value.requestHeaders;
      this._uri = value.uri;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string } | cdktf.IResolvable; 
  public get requestHeaders() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_headers') as any;
  }
  public set requestHeaders(value: { [key: string]: string } | cdktf.IResolvable) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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

export function dialogflowFulfillmentTimeoutsToTerraform(struct?: DialogflowFulfillmentTimeoutsOutputReference | DialogflowFulfillmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DialogflowFulfillmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DialogflowFulfillmentTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowFulfillmentTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
    this._genericWebService.internalValue = config.genericWebService;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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
    return this._project;
  }

  // features - computed: false, optional: true, required: false
  private _features?: DialogflowFulfillmentFeatures[]; 
  public get features() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('features') as any;
  }
  public set features(value: DialogflowFulfillmentFeatures[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // generic_web_service - computed: false, optional: true, required: false
  private _genericWebService = new DialogflowFulfillmentGenericWebServiceOutputReference(this as any, "generic_web_service", true);
  public get genericWebService() {
    return this._genericWebService;
  }
  public putGenericWebService(value: DialogflowFulfillmentGenericWebService) {
    this._genericWebService.internalValue = value;
  }
  public resetGenericWebService() {
    this._genericWebService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericWebServiceInput() {
    return this._genericWebService.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowFulfillmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowFulfillmentTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      project: cdktf.stringToTerraform(this._project),
      features: cdktf.listMapper(dialogflowFulfillmentFeaturesToTerraform)(this._features),
      generic_web_service: dialogflowFulfillmentGenericWebServiceToTerraform(this._genericWebService.internalValue),
      timeouts: dialogflowFulfillmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
