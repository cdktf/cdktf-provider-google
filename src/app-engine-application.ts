// https://www.terraform.io/docs/providers/google/r/app_engine_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain to authenticate users with when using App Engine's User API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#auth_domain AppEngineApplication#auth_domain}
  */
  readonly authDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#database_type AppEngineApplication#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#id AppEngineApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location to serve the app from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#location_id AppEngineApplication#location_id}
  */
  readonly locationId: string;
  /**
  * The project ID to create the application under.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#project AppEngineApplication#project}
  */
  readonly project?: string;
  /**
  * The serving status of the app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#serving_status AppEngineApplication#serving_status}
  */
  readonly servingStatus?: string;
  /**
  * feature_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#feature_settings AppEngineApplication#feature_settings}
  */
  readonly featureSettings?: AppEngineApplicationFeatureSettings;
  /**
  * iap block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#iap AppEngineApplication#iap}
  */
  readonly iap?: AppEngineApplicationIap;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#timeouts AppEngineApplication#timeouts}
  */
  readonly timeouts?: AppEngineApplicationTimeouts;
}
export interface AppEngineApplicationUrlDispatchRule {
}

export function appEngineApplicationUrlDispatchRuleToTerraform(struct?: AppEngineApplicationUrlDispatchRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AppEngineApplicationUrlDispatchRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppEngineApplicationUrlDispatchRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineApplicationUrlDispatchRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class AppEngineApplicationUrlDispatchRuleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppEngineApplicationUrlDispatchRuleOutputReference {
    return new AppEngineApplicationUrlDispatchRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppEngineApplicationFeatureSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#split_health_checks AppEngineApplication#split_health_checks}
  */
  readonly splitHealthChecks: boolean | cdktf.IResolvable;
}

export function appEngineApplicationFeatureSettingsToTerraform(struct?: AppEngineApplicationFeatureSettingsOutputReference | AppEngineApplicationFeatureSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    split_health_checks: cdktf.booleanToTerraform(struct!.splitHealthChecks),
  }
}

export class AppEngineApplicationFeatureSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineApplicationFeatureSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitHealthChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHealthChecks = this._splitHealthChecks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineApplicationFeatureSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._splitHealthChecks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._splitHealthChecks = value.splitHealthChecks;
    }
  }

  // split_health_checks - computed: false, optional: false, required: true
  private _splitHealthChecks?: boolean | cdktf.IResolvable; 
  public get splitHealthChecks() {
    return this.getBooleanAttribute('split_health_checks');
  }
  public set splitHealthChecks(value: boolean | cdktf.IResolvable) {
    this._splitHealthChecks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHealthChecksInput() {
    return this._splitHealthChecks;
  }
}
export interface AppEngineApplicationIap {
  /**
  * Adapted for use with the app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#enabled AppEngineApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * OAuth2 client ID to use for the authentication flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#oauth2_client_id AppEngineApplication#oauth2_client_id}
  */
  readonly oauth2ClientId: string;
  /**
  * OAuth2 client secret to use for the authentication flow. The SHA-256 hash of the value is returned in the oauth2ClientSecretSha256 field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#oauth2_client_secret AppEngineApplication#oauth2_client_secret}
  */
  readonly oauth2ClientSecret: string;
}

export function appEngineApplicationIapToTerraform(struct?: AppEngineApplicationIapOutputReference | AppEngineApplicationIap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_client_secret: cdktf.stringToTerraform(struct!.oauth2ClientSecret),
  }
}

export class AppEngineApplicationIapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineApplicationIap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._oauth2ClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientId = this._oauth2ClientId;
    }
    if (this._oauth2ClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientSecret = this._oauth2ClientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineApplicationIap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._oauth2ClientId = undefined;
      this._oauth2ClientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._oauth2ClientId = value.oauth2ClientId;
      this._oauth2ClientSecret = value.oauth2ClientSecret;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // oauth2_client_id - computed: false, optional: false, required: true
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_client_secret - computed: false, optional: false, required: true
  private _oauth2ClientSecret?: string; 
  public get oauth2ClientSecret() {
    return this.getStringAttribute('oauth2_client_secret');
  }
  public set oauth2ClientSecret(value: string) {
    this._oauth2ClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientSecretInput() {
    return this._oauth2ClientSecret;
  }

  // oauth2_client_secret_sha256 - computed: true, optional: false, required: false
  public get oauth2ClientSecretSha256() {
    return this.getStringAttribute('oauth2_client_secret_sha256');
  }
}
export interface AppEngineApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#create AppEngineApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application#update AppEngineApplication#update}
  */
  readonly update?: string;
}

export function appEngineApplicationTimeoutsToTerraform(struct?: AppEngineApplicationTimeoutsOutputReference | AppEngineApplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class AppEngineApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineApplicationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineApplicationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_application google_app_engine_application}
*/
export class AppEngineApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_app_engine_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_application google_app_engine_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEngineApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: AppEngineApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_application',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._authDomain = config.authDomain;
    this._databaseType = config.databaseType;
    this._id = config.id;
    this._locationId = config.locationId;
    this._project = config.project;
    this._servingStatus = config.servingStatus;
    this._featureSettings.internalValue = config.featureSettings;
    this._iap.internalValue = config.iap;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // auth_domain - computed: true, optional: true, required: false
  private _authDomain?: string; 
  public get authDomain() {
    return this.getStringAttribute('auth_domain');
  }
  public set authDomain(value: string) {
    this._authDomain = value;
  }
  public resetAuthDomain() {
    this._authDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDomainInput() {
    return this._authDomain;
  }

  // code_bucket - computed: true, optional: false, required: false
  public get codeBucket() {
    return this.getStringAttribute('code_bucket');
  }

  // database_type - computed: true, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // default_bucket - computed: true, optional: false, required: false
  public get defaultBucket() {
    return this.getStringAttribute('default_bucket');
  }

  // default_hostname - computed: true, optional: false, required: false
  public get defaultHostname() {
    return this.getStringAttribute('default_hostname');
  }

  // gcr_domain - computed: true, optional: false, required: false
  public get gcrDomain() {
    return this.getStringAttribute('gcr_domain');
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

  // location_id - computed: false, optional: false, required: true
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
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

  // serving_status - computed: true, optional: true, required: false
  private _servingStatus?: string; 
  public get servingStatus() {
    return this.getStringAttribute('serving_status');
  }
  public set servingStatus(value: string) {
    this._servingStatus = value;
  }
  public resetServingStatus() {
    this._servingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingStatusInput() {
    return this._servingStatus;
  }

  // url_dispatch_rule - computed: true, optional: false, required: false
  private _urlDispatchRule = new AppEngineApplicationUrlDispatchRuleList(this, "url_dispatch_rule", false);
  public get urlDispatchRule() {
    return this._urlDispatchRule;
  }

  // feature_settings - computed: false, optional: true, required: false
  private _featureSettings = new AppEngineApplicationFeatureSettingsOutputReference(this, "feature_settings");
  public get featureSettings() {
    return this._featureSettings;
  }
  public putFeatureSettings(value: AppEngineApplicationFeatureSettings) {
    this._featureSettings.internalValue = value;
  }
  public resetFeatureSettings() {
    this._featureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSettingsInput() {
    return this._featureSettings.internalValue;
  }

  // iap - computed: false, optional: true, required: false
  private _iap = new AppEngineApplicationIapOutputReference(this, "iap");
  public get iap() {
    return this._iap;
  }
  public putIap(value: AppEngineApplicationIap) {
    this._iap.internalValue = value;
  }
  public resetIap() {
    this._iap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iapInput() {
    return this._iap.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppEngineApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppEngineApplicationTimeouts) {
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
      auth_domain: cdktf.stringToTerraform(this._authDomain),
      database_type: cdktf.stringToTerraform(this._databaseType),
      id: cdktf.stringToTerraform(this._id),
      location_id: cdktf.stringToTerraform(this._locationId),
      project: cdktf.stringToTerraform(this._project),
      serving_status: cdktf.stringToTerraform(this._servingStatus),
      feature_settings: appEngineApplicationFeatureSettingsToTerraform(this._featureSettings.internalValue),
      iap: appEngineApplicationIapToTerraform(this._iap.internalValue),
      timeouts: appEngineApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
