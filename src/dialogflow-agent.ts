// https://www.terraform.io/docs/providers/google/r/dialogflow_agent.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowAgentConfig extends cdktf.TerraformMetaArguments {
  /** API version displayed in Dialogflow console. If not specified, V2 API is assumed. Clients are free to query
different service endpoints for different API versions. However, bots connectors and webhook calls will follow 
the specified API version.
* API_VERSION_V1: Legacy V1 API.
* API_VERSION_V2: V2 API.
* API_VERSION_V2_BETA_1: V2beta1 API. Possible values: ["API_VERSION_V1", "API_VERSION_V2", "API_VERSION_V2_BETA_1"] */
  readonly apiVersion?: string;
  /** The URI of the agent's avatar, which are used throughout the Dialogflow console. When an image URL is entered
into this field, the Dialogflow will save the image in the backend. The address of the backend image returned
from the API will be shown in the [avatarUriBackend] field. */
  readonly avatarUri?: string;
  /** To filter out false positive results and still get variety in matched natural language inputs for your agent,
you can tune the machine learning classification threshold. If the returned score value is less than the threshold
value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be 
triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the 
default of 0.3 is used. */
  readonly classificationThreshold?: number;
  /** The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/docs/reference/language) 
for a list of the currently supported language codes. This field cannot be updated after creation. */
  readonly defaultLanguageCode: string;
  /** The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. */
  readonly description?: string;
  /** The name of this agent. */
  readonly displayName: string;
  /** Determines whether this agent should log conversation queries. */
  readonly enableLogging?: boolean;
  /** Determines how intents are detected from user queries.
* MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates
syntax and composite entities.
* MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones
using @sys.any or very large developer entities. Possible values: ["MATCH_MODE_HYBRID", "MATCH_MODE_ML_ONLY"] */
  readonly matchMode?: string;
  readonly project?: string;
  /** The list of all languages supported by this agent (except for the defaultLanguageCode). */
  readonly supportedLanguageCodes?: string[];
  /** The agent tier. If not specified, TIER_STANDARD is assumed.
* TIER_STANDARD: Standard tier.
* TIER_ENTERPRISE: Enterprise tier (Essentials).
* TIER_ENTERPRISE_PLUS: Enterprise tier (Plus).
NOTE: Due to consistency issues, the provider will not read this field from the API. Drift is possible between 
the Terraform state and Dialogflow if the agent tier is changed outside of Terraform. Possible values: ["TIER_STANDARD", "TIER_ENTERPRISE", "TIER_ENTERPRISE_PLUS"] */
  readonly tier?: string;
  /** The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
Europe/Paris. */
  readonly timeZone: string;
  /** timeouts block */
  readonly timeouts?: DialogflowAgentTimeouts;
}
export interface DialogflowAgentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dialogflowAgentTimeoutsToTerraform(struct?: DialogflowAgentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DialogflowAgent extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DialogflowAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_agent',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiVersion = config.apiVersion;
    this._avatarUri = config.avatarUri;
    this._classificationThreshold = config.classificationThreshold;
    this._defaultLanguageCode = config.defaultLanguageCode;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableLogging = config.enableLogging;
    this._matchMode = config.matchMode;
    this._project = config.project;
    this._supportedLanguageCodes = config.supportedLanguageCodes;
    this._tier = config.tier;
    this._timeZone = config.timeZone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string;
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion
  }

  // avatar_uri - computed: false, optional: true, required: false
  private _avatarUri?: string;
  public get avatarUri() {
    return this.getStringAttribute('avatar_uri');
  }
  public set avatarUri(value: string ) {
    this._avatarUri = value;
  }
  public resetAvatarUri() {
    this._avatarUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarUriInput() {
    return this._avatarUri
  }

  // avatar_uri_backend - computed: true, optional: false, required: false
  public get avatarUriBackend() {
    return this.getStringAttribute('avatar_uri_backend');
  }

  // classification_threshold - computed: false, optional: true, required: false
  private _classificationThreshold?: number;
  public get classificationThreshold() {
    return this.getNumberAttribute('classification_threshold');
  }
  public set classificationThreshold(value: number ) {
    this._classificationThreshold = value;
  }
  public resetClassificationThreshold() {
    this._classificationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationThresholdInput() {
    return this._classificationThreshold
  }

  // default_language_code - computed: false, optional: false, required: true
  private _defaultLanguageCode: string;
  public get defaultLanguageCode() {
    return this.getStringAttribute('default_language_code');
  }
  public set defaultLanguageCode(value: string) {
    this._defaultLanguageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageCodeInput() {
    return this._defaultLanguageCode
  }

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

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean;
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean ) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_mode - computed: true, optional: true, required: false
  private _matchMode?: string;
  public get matchMode() {
    return this.getStringAttribute('match_mode');
  }
  public set matchMode(value: string) {
    this._matchMode = value;
  }
  public resetMatchMode() {
    this._matchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchModeInput() {
    return this._matchMode
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

  // supported_language_codes - computed: false, optional: true, required: false
  private _supportedLanguageCodes?: string[];
  public get supportedLanguageCodes() {
    return this.getListAttribute('supported_language_codes');
  }
  public set supportedLanguageCodes(value: string[] ) {
    this._supportedLanguageCodes = value;
  }
  public resetSupportedLanguageCodes() {
    this._supportedLanguageCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedLanguageCodesInput() {
    return this._supportedLanguageCodes
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string;
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string ) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone: string;
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DialogflowAgentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DialogflowAgentTimeouts ) {
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
      api_version: cdktf.stringToTerraform(this._apiVersion),
      avatar_uri: cdktf.stringToTerraform(this._avatarUri),
      classification_threshold: cdktf.numberToTerraform(this._classificationThreshold),
      default_language_code: cdktf.stringToTerraform(this._defaultLanguageCode),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      match_mode: cdktf.stringToTerraform(this._matchMode),
      project: cdktf.stringToTerraform(this._project),
      supported_language_codes: cdktf.listMapper(cdktf.stringToTerraform)(this._supportedLanguageCodes),
      tier: cdktf.stringToTerraform(this._tier),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      timeouts: dialogflowAgentTimeoutsToTerraform(this._timeouts),
    };
  }
}
