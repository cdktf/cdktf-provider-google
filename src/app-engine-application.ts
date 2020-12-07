// https://www.terraform.io/docs/providers/google/r/app_engine_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineApplicationConfig extends cdktf.TerraformMetaArguments {
  /** The domain to authenticate users with when using App Engine's User API. */
  readonly authDomain?: string;
  readonly databaseType?: string;
  /** The location to serve the app from. */
  readonly locationId: string;
  /** The project ID to create the application under. */
  readonly project?: string;
  /** The serving status of the app. */
  readonly servingStatus?: string;
  /** feature_settings block */
  readonly featureSettings?: AppEngineApplicationFeatureSettings[];
  /** iap block */
  readonly iap?: AppEngineApplicationIap[];
  /** timeouts block */
  readonly timeouts?: AppEngineApplicationTimeouts;
}
export class AppEngineApplicationUrlDispatchRule extends cdktf.ComplexComputedList {

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
export interface AppEngineApplicationFeatureSettings {
  readonly splitHealthChecks: boolean;
}

function appEngineApplicationFeatureSettingsToTerraform(struct?: AppEngineApplicationFeatureSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    split_health_checks: cdktf.booleanToTerraform(struct!.splitHealthChecks),
  }
}

export interface AppEngineApplicationIap {
  /** Adapted for use with the app */
  readonly enabled?: boolean;
  /** OAuth2 client ID to use for the authentication flow. */
  readonly oauth2ClientId: string;
  /** OAuth2 client secret to use for the authentication flow. The SHA-256 hash of the value is returned in the oauth2ClientSecretSha256 field. */
  readonly oauth2ClientSecret: string;
}

function appEngineApplicationIapToTerraform(struct?: AppEngineApplicationIap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_client_secret: cdktf.stringToTerraform(struct!.oauth2ClientSecret),
  }
}

export interface AppEngineApplicationTimeouts {
  readonly create?: string;
  readonly update?: string;
}

function appEngineApplicationTimeoutsToTerraform(struct?: AppEngineApplicationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppEngineApplication extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppEngineApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_application',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authDomain = config.authDomain;
    this._databaseType = config.databaseType;
    this._locationId = config.locationId;
    this._project = config.project;
    this._servingStatus = config.servingStatus;
    this._featureSettings = config.featureSettings;
    this._iap = config.iap;
    this._timeouts = config.timeouts;
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
    return this._authDomain
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
    return this._databaseType
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId: string;
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId
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
    return this._servingStatus
  }

  // url_dispatch_rule - computed: true, optional: false, required: false
  public urlDispatchRule(index: string) {
    return new AppEngineApplicationUrlDispatchRule(this, 'url_dispatch_rule', index);
  }

  // feature_settings - computed: false, optional: true, required: false
  private _featureSettings?: AppEngineApplicationFeatureSettings[];
  public get featureSettings() {
    return this.interpolationForAttribute('feature_settings') as any;
  }
  public set featureSettings(value: AppEngineApplicationFeatureSettings[] ) {
    this._featureSettings = value;
  }
  public resetFeatureSettings() {
    this._featureSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSettingsInput() {
    return this._featureSettings
  }

  // iap - computed: false, optional: true, required: false
  private _iap?: AppEngineApplicationIap[];
  public get iap() {
    return this.interpolationForAttribute('iap') as any;
  }
  public set iap(value: AppEngineApplicationIap[] ) {
    this._iap = value;
  }
  public resetIap() {
    this._iap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iapInput() {
    return this._iap
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineApplicationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppEngineApplicationTimeouts ) {
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
      auth_domain: cdktf.stringToTerraform(this._authDomain),
      database_type: cdktf.stringToTerraform(this._databaseType),
      location_id: cdktf.stringToTerraform(this._locationId),
      project: cdktf.stringToTerraform(this._project),
      serving_status: cdktf.stringToTerraform(this._servingStatus),
      feature_settings: cdktf.listMapper(appEngineApplicationFeatureSettingsToTerraform)(this._featureSettings),
      iap: cdktf.listMapper(appEngineApplicationIapToTerraform)(this._iap),
      timeouts: appEngineApplicationTimeoutsToTerraform(this._timeouts),
    };
  }
}
