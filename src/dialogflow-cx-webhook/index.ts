// https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the webhook is disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#disabled DialogflowCxWebhook#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The human-readable name of the webhook, unique within the agent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#display_name DialogflowCxWebhook#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if automatic spell correction is enabled in detect intent requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#enable_spell_correction DialogflowCxWebhook#enable_spell_correction}
  */
  readonly enableSpellCorrection?: boolean | cdktf.IResolvable;
  /**
  * Determines whether this agent should log conversation queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#enable_stackdriver_logging DialogflowCxWebhook#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#id DialogflowCxWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The agent to create a webhook for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#parent DialogflowCxWebhook#parent}
  */
  readonly parent?: string;
  /**
  * Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#security_settings DialogflowCxWebhook#security_settings}
  */
  readonly securitySettings?: string;
  /**
  * Webhook execution timeout.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#timeout DialogflowCxWebhook#timeout}
  */
  readonly timeout?: string;
  /**
  * generic_web_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}
  */
  readonly genericWebService?: DialogflowCxWebhookGenericWebService;
  /**
  * service_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#service_directory DialogflowCxWebhook#service_directory}
  */
  readonly serviceDirectory?: DialogflowCxWebhookServiceDirectory;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#timeouts DialogflowCxWebhook#timeouts}
  */
  readonly timeouts?: DialogflowCxWebhookTimeouts;
}
export interface DialogflowCxWebhookGenericWebService {
  /**
  * Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}
  */
  readonly allowedCaCerts?: string[];
  /**
  * The HTTP request headers to send together with webhook requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Whether to use speech adaptation for speech recognition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}
  */
  readonly uri: string;
}

export function dialogflowCxWebhookGenericWebServiceToTerraform(struct?: DialogflowCxWebhookGenericWebServiceOutputReference | DialogflowCxWebhookGenericWebService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ca_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCaCerts),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class DialogflowCxWebhookGenericWebServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookGenericWebService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCaCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCaCerts = this._allowedCaCerts;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookGenericWebService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCaCerts = undefined;
      this._requestHeaders = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCaCerts = value.allowedCaCerts;
      this._requestHeaders = value.requestHeaders;
      this._uri = value.uri;
    }
  }

  // allowed_ca_certs - computed: false, optional: true, required: false
  private _allowedCaCerts?: string[]; 
  public get allowedCaCerts() {
    return this.getListAttribute('allowed_ca_certs');
  }
  public set allowedCaCerts(value: string[]) {
    this._allowedCaCerts = value;
  }
  public resetAllowedCaCerts() {
    this._allowedCaCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCaCertsInput() {
    return this._allowedCaCerts;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
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
}
export interface DialogflowCxWebhookServiceDirectoryGenericWebService {
  /**
  * Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}
  */
  readonly allowedCaCerts?: string[];
  /**
  * The HTTP request headers to send together with webhook requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Whether to use speech adaptation for speech recognition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}
  */
  readonly uri: string;
}

export function dialogflowCxWebhookServiceDirectoryGenericWebServiceToTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference | DialogflowCxWebhookServiceDirectoryGenericWebService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ca_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCaCerts),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookServiceDirectoryGenericWebService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCaCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCaCerts = this._allowedCaCerts;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookServiceDirectoryGenericWebService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCaCerts = undefined;
      this._requestHeaders = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCaCerts = value.allowedCaCerts;
      this._requestHeaders = value.requestHeaders;
      this._uri = value.uri;
    }
  }

  // allowed_ca_certs - computed: false, optional: true, required: false
  private _allowedCaCerts?: string[]; 
  public get allowedCaCerts() {
    return this.getListAttribute('allowed_ca_certs');
  }
  public set allowedCaCerts(value: string[]) {
    this._allowedCaCerts = value;
  }
  public resetAllowedCaCerts() {
    this._allowedCaCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCaCertsInput() {
    return this._allowedCaCerts;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
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
}
export interface DialogflowCxWebhookServiceDirectory {
  /**
  * The name of Service Directory service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#service DialogflowCxWebhook#service}
  */
  readonly service: string;
  /**
  * generic_web_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}
  */
  readonly genericWebService: DialogflowCxWebhookServiceDirectoryGenericWebService;
}

export function dialogflowCxWebhookServiceDirectoryToTerraform(struct?: DialogflowCxWebhookServiceDirectoryOutputReference | DialogflowCxWebhookServiceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
    generic_web_service: dialogflowCxWebhookServiceDirectoryGenericWebServiceToTerraform(struct!.genericWebService),
  }
}

export class DialogflowCxWebhookServiceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookServiceDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._genericWebService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericWebService = this._genericWebService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookServiceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
      this._genericWebService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
      this._genericWebService.internalValue = value.genericWebService;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // generic_web_service - computed: false, optional: false, required: true
  private _genericWebService = new DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference(this, "generic_web_service");
  public get genericWebService() {
    return this._genericWebService;
  }
  public putGenericWebService(value: DialogflowCxWebhookServiceDirectoryGenericWebService) {
    this._genericWebService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get genericWebServiceInput() {
    return this._genericWebService.internalValue;
  }
}
export interface DialogflowCxWebhookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#create DialogflowCxWebhook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#delete DialogflowCxWebhook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook#update DialogflowCxWebhook#update}
  */
  readonly update?: string;
}

export function dialogflowCxWebhookTimeoutsToTerraform(struct?: DialogflowCxWebhookTimeoutsOutputReference | DialogflowCxWebhookTimeouts | cdktf.IResolvable): any {
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

export class DialogflowCxWebhookTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxWebhookTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook google_dialogflow_cx_webhook}
*/
export class DialogflowCxWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_webhook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_webhook google_dialogflow_cx_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_webhook',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.41.0',
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
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._enableSpellCorrection = config.enableSpellCorrection;
    this._enableStackdriverLogging = config.enableStackdriverLogging;
    this._id = config.id;
    this._parent = config.parent;
    this._securitySettings = config.securitySettings;
    this._timeout = config.timeout;
    this._genericWebService.internalValue = config.genericWebService;
    this._serviceDirectory.internalValue = config.serviceDirectory;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

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

  // enable_spell_correction - computed: false, optional: true, required: false
  private _enableSpellCorrection?: boolean | cdktf.IResolvable; 
  public get enableSpellCorrection() {
    return this.getBooleanAttribute('enable_spell_correction');
  }
  public set enableSpellCorrection(value: boolean | cdktf.IResolvable) {
    this._enableSpellCorrection = value;
  }
  public resetEnableSpellCorrection() {
    this._enableSpellCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpellCorrectionInput() {
    return this._enableSpellCorrection;
  }

  // enable_stackdriver_logging - computed: false, optional: true, required: false
  private _enableStackdriverLogging?: boolean | cdktf.IResolvable; 
  public get enableStackdriverLogging() {
    return this.getBooleanAttribute('enable_stackdriver_logging');
  }
  public set enableStackdriverLogging(value: boolean | cdktf.IResolvable) {
    this._enableStackdriverLogging = value;
  }
  public resetEnableStackdriverLogging() {
    this._enableStackdriverLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverLoggingInput() {
    return this._enableStackdriverLogging;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // security_settings - computed: false, optional: true, required: false
  private _securitySettings?: string; 
  public get securitySettings() {
    return this.getStringAttribute('security_settings');
  }
  public set securitySettings(value: string) {
    this._securitySettings = value;
  }
  public resetSecuritySettings() {
    this._securitySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings;
  }

  // start_flow - computed: true, optional: false, required: false
  public get startFlow() {
    return this.getStringAttribute('start_flow');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // generic_web_service - computed: false, optional: true, required: false
  private _genericWebService = new DialogflowCxWebhookGenericWebServiceOutputReference(this, "generic_web_service");
  public get genericWebService() {
    return this._genericWebService;
  }
  public putGenericWebService(value: DialogflowCxWebhookGenericWebService) {
    this._genericWebService.internalValue = value;
  }
  public resetGenericWebService() {
    this._genericWebService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericWebServiceInput() {
    return this._genericWebService.internalValue;
  }

  // service_directory - computed: false, optional: true, required: false
  private _serviceDirectory = new DialogflowCxWebhookServiceDirectoryOutputReference(this, "service_directory");
  public get serviceDirectory() {
    return this._serviceDirectory;
  }
  public putServiceDirectory(value: DialogflowCxWebhookServiceDirectory) {
    this._serviceDirectory.internalValue = value;
  }
  public resetServiceDirectory() {
    this._serviceDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryInput() {
    return this._serviceDirectory.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCxWebhookTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxWebhookTimeouts) {
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
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_spell_correction: cdktf.booleanToTerraform(this._enableSpellCorrection),
      enable_stackdriver_logging: cdktf.booleanToTerraform(this._enableStackdriverLogging),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      security_settings: cdktf.stringToTerraform(this._securitySettings),
      timeout: cdktf.stringToTerraform(this._timeout),
      generic_web_service: dialogflowCxWebhookGenericWebServiceToTerraform(this._genericWebService.internalValue),
      service_directory: dialogflowCxWebhookServiceDirectoryToTerraform(this._serviceDirectory.internalValue),
      timeouts: dialogflowCxWebhookTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
