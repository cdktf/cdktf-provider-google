// https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#avatar_uri DialogflowCxAgent#avatar_uri}
  */
  readonly avatarUri?: string;
  /**
  * The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) 
for a list of the currently supported language codes. This field cannot be updated after creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#default_language_code DialogflowCxAgent#default_language_code}
  */
  readonly defaultLanguageCode: string;
  /**
  * The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#description DialogflowCxAgent#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the agent, unique within the location.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#display_name DialogflowCxAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if automatic spell correction is enabled in detect intent requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#enable_spell_correction DialogflowCxAgent#enable_spell_correction}
  */
  readonly enableSpellCorrection?: boolean | cdktf.IResolvable;
  /**
  * Determines whether this agent should log conversation queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#enable_stackdriver_logging DialogflowCxAgent#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
  /**
  * The name of the location this agent is located in.

~> **Note:** The first time you are deploying an Agent in your project you must configure location settings.
 This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
 Another options is to use global location so you don't need to manually configure location settings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#location DialogflowCxAgent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#project DialogflowCxAgent#project}
  */
  readonly project?: string;
  /**
  * Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#security_settings DialogflowCxAgent#security_settings}
  */
  readonly securitySettings?: string;
  /**
  * The list of all languages supported by this agent (except for the default_language_code).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#supported_language_codes DialogflowCxAgent#supported_language_codes}
  */
  readonly supportedLanguageCodes?: string[];
  /**
  * The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
Europe/Paris.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#time_zone DialogflowCxAgent#time_zone}
  */
  readonly timeZone: string;
  /**
  * speech_to_text_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#speech_to_text_settings DialogflowCxAgent#speech_to_text_settings}
  */
  readonly speechToTextSettings?: DialogflowCxAgentSpeechToTextSettings[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#timeouts DialogflowCxAgent#timeouts}
  */
  readonly timeouts?: DialogflowCxAgentTimeouts;
}
export interface DialogflowCxAgentSpeechToTextSettings {
  /**
  * Whether to use speech adaptation for speech recognition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#enable_speech_adaptation DialogflowCxAgent#enable_speech_adaptation}
  */
  readonly enableSpeechAdaptation?: boolean | cdktf.IResolvable;
}

function dialogflowCxAgentSpeechToTextSettingsToTerraform(struct?: DialogflowCxAgentSpeechToTextSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_speech_adaptation: cdktf.booleanToTerraform(struct!.enableSpeechAdaptation),
  }
}

export interface DialogflowCxAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#create DialogflowCxAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#delete DialogflowCxAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html#update DialogflowCxAgent#update}
  */
  readonly update?: string;
}

function dialogflowCxAgentTimeoutsToTerraform(struct?: DialogflowCxAgentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html google_dialogflow_cx_agent}
*/
export class DialogflowCxAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dialogflow_cx_agent";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_agent.html google_dialogflow_cx_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_agent',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._avatarUri = config.avatarUri;
    this._defaultLanguageCode = config.defaultLanguageCode;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableSpellCorrection = config.enableSpellCorrection;
    this._enableStackdriverLogging = config.enableStackdriverLogging;
    this._location = config.location;
    this._project = config.project;
    this._securitySettings = config.securitySettings;
    this._supportedLanguageCodes = config.supportedLanguageCodes;
    this._timeZone = config.timeZone;
    this._speechToTextSettings = config.speechToTextSettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enable_spell_correction - computed: false, optional: true, required: false
  private _enableSpellCorrection?: boolean | cdktf.IResolvable;
  public get enableSpellCorrection() {
    return this.getBooleanAttribute('enable_spell_correction');
  }
  public set enableSpellCorrection(value: boolean | cdktf.IResolvable ) {
    this._enableSpellCorrection = value;
  }
  public resetEnableSpellCorrection() {
    this._enableSpellCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpellCorrectionInput() {
    return this._enableSpellCorrection
  }

  // enable_stackdriver_logging - computed: false, optional: true, required: false
  private _enableStackdriverLogging?: boolean | cdktf.IResolvable;
  public get enableStackdriverLogging() {
    return this.getBooleanAttribute('enable_stackdriver_logging');
  }
  public set enableStackdriverLogging(value: boolean | cdktf.IResolvable ) {
    this._enableStackdriverLogging = value;
  }
  public resetEnableStackdriverLogging() {
    this._enableStackdriverLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverLoggingInput() {
    return this._enableStackdriverLogging
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // security_settings - computed: false, optional: true, required: false
  private _securitySettings?: string;
  public get securitySettings() {
    return this.getStringAttribute('security_settings');
  }
  public set securitySettings(value: string ) {
    this._securitySettings = value;
  }
  public resetSecuritySettings() {
    this._securitySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings
  }

  // start_flow - computed: true, optional: false, required: false
  public get startFlow() {
    return this.getStringAttribute('start_flow');
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

  // speech_to_text_settings - computed: false, optional: true, required: false
  private _speechToTextSettings?: DialogflowCxAgentSpeechToTextSettings[];
  public get speechToTextSettings() {
    return this.interpolationForAttribute('speech_to_text_settings') as any;
  }
  public set speechToTextSettings(value: DialogflowCxAgentSpeechToTextSettings[] ) {
    this._speechToTextSettings = value;
  }
  public resetSpeechToTextSettings() {
    this._speechToTextSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speechToTextSettingsInput() {
    return this._speechToTextSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DialogflowCxAgentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DialogflowCxAgentTimeouts ) {
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
      avatar_uri: cdktf.stringToTerraform(this._avatarUri),
      default_language_code: cdktf.stringToTerraform(this._defaultLanguageCode),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_spell_correction: cdktf.booleanToTerraform(this._enableSpellCorrection),
      enable_stackdriver_logging: cdktf.booleanToTerraform(this._enableStackdriverLogging),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      security_settings: cdktf.stringToTerraform(this._securitySettings),
      supported_language_codes: cdktf.listMapper(cdktf.stringToTerraform)(this._supportedLanguageCodes),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      speech_to_text_settings: cdktf.listMapper(dialogflowCxAgentSpeechToTextSettingsToTerraform)(this._speechToTextSettings),
      timeouts: dialogflowCxAgentTimeoutsToTerraform(this._timeouts),
    };
  }
}
