/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#avatar_uri DialogflowCxAgent#avatar_uri}
  */
  readonly avatarUri?: string;
  /**
  * The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
  * for a list of the currently supported language codes. This field cannot be updated after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#default_language_code DialogflowCxAgent#default_language_code}
  */
  readonly defaultLanguageCode: string;
  /**
  * The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#description DialogflowCxAgent#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the agent, unique within the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#display_name DialogflowCxAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if automatic spell correction is enabled in detect intent requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#enable_spell_correction DialogflowCxAgent#enable_spell_correction}
  */
  readonly enableSpellCorrection?: boolean | cdktf.IResolvable;
  /**
  * Determines whether this agent should log conversation queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#enable_stackdriver_logging DialogflowCxAgent#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#id DialogflowCxAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the location this agent is located in.
  * 
  * ~> **Note:** The first time you are deploying an Agent in your project you must configure location settings.
  *  This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
  *  Another options is to use global location so you don't need to manually configure location settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#location DialogflowCxAgent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#project DialogflowCxAgent#project}
  */
  readonly project?: string;
  /**
  * Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#security_settings DialogflowCxAgent#security_settings}
  */
  readonly securitySettings?: string;
  /**
  * The list of all languages supported by this agent (except for the default_language_code).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#supported_language_codes DialogflowCxAgent#supported_language_codes}
  */
  readonly supportedLanguageCodes?: string[];
  /**
  * The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
  * Europe/Paris.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#time_zone DialogflowCxAgent#time_zone}
  */
  readonly timeZone: string;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#advanced_settings DialogflowCxAgent#advanced_settings}
  */
  readonly advancedSettings?: DialogflowCxAgentAdvancedSettings;
  /**
  * git_integration_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#git_integration_settings DialogflowCxAgent#git_integration_settings}
  */
  readonly gitIntegrationSettings?: DialogflowCxAgentGitIntegrationSettings;
  /**
  * speech_to_text_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#speech_to_text_settings DialogflowCxAgent#speech_to_text_settings}
  */
  readonly speechToTextSettings?: DialogflowCxAgentSpeechToTextSettings;
  /**
  * text_to_speech_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#text_to_speech_settings DialogflowCxAgent#text_to_speech_settings}
  */
  readonly textToSpeechSettings?: DialogflowCxAgentTextToSpeechSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#timeouts DialogflowCxAgent#timeouts}
  */
  readonly timeouts?: DialogflowCxAgentTimeouts;
}
export interface DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination {
  /**
  * The Google Cloud Storage URI for the exported objects. Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
  * Format: gs://bucket/object-name-or-prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#uri DialogflowCxAgent#uri}
  */
  readonly uri?: string;
}

export function dialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationToTerraform(struct?: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference | DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationToHclTerraform(struct?: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference | DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface DialogflowCxAgentAdvancedSettingsDtmfSettings {
  /**
  * If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#enabled DialogflowCxAgent#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The digit that terminates a DTMF digit sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#finish_digit DialogflowCxAgent#finish_digit}
  */
  readonly finishDigit?: string;
  /**
  * Max length of DTMF digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#max_digits DialogflowCxAgent#max_digits}
  */
  readonly maxDigits?: number;
}

export function dialogflowCxAgentAdvancedSettingsDtmfSettingsToTerraform(struct?: DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference | DialogflowCxAgentAdvancedSettingsDtmfSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    finish_digit: cdktf.stringToTerraform(struct!.finishDigit),
    max_digits: cdktf.numberToTerraform(struct!.maxDigits),
  }
}


export function dialogflowCxAgentAdvancedSettingsDtmfSettingsToHclTerraform(struct?: DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference | DialogflowCxAgentAdvancedSettingsDtmfSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    finish_digit: {
      value: cdktf.stringToHclTerraform(struct!.finishDigit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_digits: {
      value: cdktf.numberToHclTerraform(struct!.maxDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentAdvancedSettingsDtmfSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._finishDigit !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishDigit = this._finishDigit;
    }
    if (this._maxDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDigits = this._maxDigits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentAdvancedSettingsDtmfSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._finishDigit = undefined;
      this._maxDigits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._finishDigit = value.finishDigit;
      this._maxDigits = value.maxDigits;
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

  // finish_digit - computed: false, optional: true, required: false
  private _finishDigit?: string; 
  public get finishDigit() {
    return this.getStringAttribute('finish_digit');
  }
  public set finishDigit(value: string) {
    this._finishDigit = value;
  }
  public resetFinishDigit() {
    this._finishDigit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishDigitInput() {
    return this._finishDigit;
  }

  // max_digits - computed: false, optional: true, required: false
  private _maxDigits?: number; 
  public get maxDigits() {
    return this.getNumberAttribute('max_digits');
  }
  public set maxDigits(value: number) {
    this._maxDigits = value;
  }
  public resetMaxDigits() {
    this._maxDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDigitsInput() {
    return this._maxDigits;
  }
}
export interface DialogflowCxAgentAdvancedSettings {
  /**
  * audio_export_gcs_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#audio_export_gcs_destination DialogflowCxAgent#audio_export_gcs_destination}
  */
  readonly audioExportGcsDestination?: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination;
  /**
  * dtmf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#dtmf_settings DialogflowCxAgent#dtmf_settings}
  */
  readonly dtmfSettings?: DialogflowCxAgentAdvancedSettingsDtmfSettings;
}

export function dialogflowCxAgentAdvancedSettingsToTerraform(struct?: DialogflowCxAgentAdvancedSettingsOutputReference | DialogflowCxAgentAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_export_gcs_destination: dialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationToTerraform(struct!.audioExportGcsDestination),
    dtmf_settings: dialogflowCxAgentAdvancedSettingsDtmfSettingsToTerraform(struct!.dtmfSettings),
  }
}


export function dialogflowCxAgentAdvancedSettingsToHclTerraform(struct?: DialogflowCxAgentAdvancedSettingsOutputReference | DialogflowCxAgentAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_export_gcs_destination: {
      value: dialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationToHclTerraform(struct!.audioExportGcsDestination),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationList",
    },
    dtmf_settings: {
      value: dialogflowCxAgentAdvancedSettingsDtmfSettingsToHclTerraform(struct!.dtmfSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxAgentAdvancedSettingsDtmfSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioExportGcsDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioExportGcsDestination = this._audioExportGcsDestination?.internalValue;
    }
    if (this._dtmfSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtmfSettings = this._dtmfSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioExportGcsDestination.internalValue = undefined;
      this._dtmfSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioExportGcsDestination.internalValue = value.audioExportGcsDestination;
      this._dtmfSettings.internalValue = value.dtmfSettings;
    }
  }

  // audio_export_gcs_destination - computed: false, optional: true, required: false
  private _audioExportGcsDestination = new DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference(this, "audio_export_gcs_destination");
  public get audioExportGcsDestination() {
    return this._audioExportGcsDestination;
  }
  public putAudioExportGcsDestination(value: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination) {
    this._audioExportGcsDestination.internalValue = value;
  }
  public resetAudioExportGcsDestination() {
    this._audioExportGcsDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioExportGcsDestinationInput() {
    return this._audioExportGcsDestination.internalValue;
  }

  // dtmf_settings - computed: false, optional: true, required: false
  private _dtmfSettings = new DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference(this, "dtmf_settings");
  public get dtmfSettings() {
    return this._dtmfSettings;
  }
  public putDtmfSettings(value: DialogflowCxAgentAdvancedSettingsDtmfSettings) {
    this._dtmfSettings.internalValue = value;
  }
  public resetDtmfSettings() {
    this._dtmfSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfSettingsInput() {
    return this._dtmfSettings.internalValue;
  }
}
export interface DialogflowCxAgentGitIntegrationSettingsGithubSettings {
  /**
  * The access token used to authenticate the access to the GitHub repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#access_token DialogflowCxAgent#access_token}
  */
  readonly accessToken?: string;
  /**
  * A list of branches configured to be used from Dialogflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#branches DialogflowCxAgent#branches}
  */
  readonly branches?: string[];
  /**
  * The unique repository display name for the GitHub repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#display_name DialogflowCxAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * The GitHub repository URI related to the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#repository_uri DialogflowCxAgent#repository_uri}
  */
  readonly repositoryUri?: string;
  /**
  * The branch of the GitHub repository tracked for this agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#tracking_branch DialogflowCxAgent#tracking_branch}
  */
  readonly trackingBranch?: string;
}

export function dialogflowCxAgentGitIntegrationSettingsGithubSettingsToTerraform(struct?: DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference | DialogflowCxAgentGitIntegrationSettingsGithubSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    branches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.branches),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    repository_uri: cdktf.stringToTerraform(struct!.repositoryUri),
    tracking_branch: cdktf.stringToTerraform(struct!.trackingBranch),
  }
}


export function dialogflowCxAgentGitIntegrationSettingsGithubSettingsToHclTerraform(struct?: DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference | DialogflowCxAgentGitIntegrationSettingsGithubSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.branches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_uri: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracking_branch: {
      value: cdktf.stringToHclTerraform(struct!.trackingBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentGitIntegrationSettingsGithubSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._branches !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._repositoryUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUri = this._repositoryUri;
    }
    if (this._trackingBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingBranch = this._trackingBranch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentGitIntegrationSettingsGithubSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._branches = undefined;
      this._displayName = undefined;
      this._repositoryUri = undefined;
      this._trackingBranch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._branches = value.branches;
      this._displayName = value.displayName;
      this._repositoryUri = value.repositoryUri;
      this._trackingBranch = value.trackingBranch;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // branches - computed: false, optional: true, required: false
  private _branches?: string[]; 
  public get branches() {
    return this.getListAttribute('branches');
  }
  public set branches(value: string[]) {
    this._branches = value;
  }
  public resetBranches() {
    this._branches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches;
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

  // repository_uri - computed: false, optional: true, required: false
  private _repositoryUri?: string; 
  public get repositoryUri() {
    return this.getStringAttribute('repository_uri');
  }
  public set repositoryUri(value: string) {
    this._repositoryUri = value;
  }
  public resetRepositoryUri() {
    this._repositoryUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUriInput() {
    return this._repositoryUri;
  }

  // tracking_branch - computed: false, optional: true, required: false
  private _trackingBranch?: string; 
  public get trackingBranch() {
    return this.getStringAttribute('tracking_branch');
  }
  public set trackingBranch(value: string) {
    this._trackingBranch = value;
  }
  public resetTrackingBranch() {
    this._trackingBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingBranchInput() {
    return this._trackingBranch;
  }
}
export interface DialogflowCxAgentGitIntegrationSettings {
  /**
  * github_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#github_settings DialogflowCxAgent#github_settings}
  */
  readonly githubSettings?: DialogflowCxAgentGitIntegrationSettingsGithubSettings;
}

export function dialogflowCxAgentGitIntegrationSettingsToTerraform(struct?: DialogflowCxAgentGitIntegrationSettingsOutputReference | DialogflowCxAgentGitIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    github_settings: dialogflowCxAgentGitIntegrationSettingsGithubSettingsToTerraform(struct!.githubSettings),
  }
}


export function dialogflowCxAgentGitIntegrationSettingsToHclTerraform(struct?: DialogflowCxAgentGitIntegrationSettingsOutputReference | DialogflowCxAgentGitIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    github_settings: {
      value: dialogflowCxAgentGitIntegrationSettingsGithubSettingsToHclTerraform(struct!.githubSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxAgentGitIntegrationSettingsGithubSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentGitIntegrationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentGitIntegrationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._githubSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubSettings = this._githubSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentGitIntegrationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._githubSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._githubSettings.internalValue = value.githubSettings;
    }
  }

  // github_settings - computed: false, optional: true, required: false
  private _githubSettings = new DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference(this, "github_settings");
  public get githubSettings() {
    return this._githubSettings;
  }
  public putGithubSettings(value: DialogflowCxAgentGitIntegrationSettingsGithubSettings) {
    this._githubSettings.internalValue = value;
  }
  public resetGithubSettings() {
    this._githubSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubSettingsInput() {
    return this._githubSettings.internalValue;
  }
}
export interface DialogflowCxAgentSpeechToTextSettings {
  /**
  * Whether to use speech adaptation for speech recognition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#enable_speech_adaptation DialogflowCxAgent#enable_speech_adaptation}
  */
  readonly enableSpeechAdaptation?: boolean | cdktf.IResolvable;
}

export function dialogflowCxAgentSpeechToTextSettingsToTerraform(struct?: DialogflowCxAgentSpeechToTextSettingsOutputReference | DialogflowCxAgentSpeechToTextSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_speech_adaptation: cdktf.booleanToTerraform(struct!.enableSpeechAdaptation),
  }
}


export function dialogflowCxAgentSpeechToTextSettingsToHclTerraform(struct?: DialogflowCxAgentSpeechToTextSettingsOutputReference | DialogflowCxAgentSpeechToTextSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_speech_adaptation: {
      value: cdktf.booleanToHclTerraform(struct!.enableSpeechAdaptation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentSpeechToTextSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentSpeechToTextSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSpeechAdaptation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSpeechAdaptation = this._enableSpeechAdaptation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentSpeechToTextSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableSpeechAdaptation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableSpeechAdaptation = value.enableSpeechAdaptation;
    }
  }

  // enable_speech_adaptation - computed: false, optional: true, required: false
  private _enableSpeechAdaptation?: boolean | cdktf.IResolvable; 
  public get enableSpeechAdaptation() {
    return this.getBooleanAttribute('enable_speech_adaptation');
  }
  public set enableSpeechAdaptation(value: boolean | cdktf.IResolvable) {
    this._enableSpeechAdaptation = value;
  }
  public resetEnableSpeechAdaptation() {
    this._enableSpeechAdaptation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpeechAdaptationInput() {
    return this._enableSpeechAdaptation;
  }
}
export interface DialogflowCxAgentTextToSpeechSettings {
  /**
  * Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig).
  * These settings affect:
  * * The phone gateway synthesize configuration set via Agent.text_to_speech_settings.
  * * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#synthesize_speech_configs DialogflowCxAgent#synthesize_speech_configs}
  */
  readonly synthesizeSpeechConfigs?: string;
}

export function dialogflowCxAgentTextToSpeechSettingsToTerraform(struct?: DialogflowCxAgentTextToSpeechSettingsOutputReference | DialogflowCxAgentTextToSpeechSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    synthesize_speech_configs: cdktf.stringToTerraform(struct!.synthesizeSpeechConfigs),
  }
}


export function dialogflowCxAgentTextToSpeechSettingsToHclTerraform(struct?: DialogflowCxAgentTextToSpeechSettingsOutputReference | DialogflowCxAgentTextToSpeechSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    synthesize_speech_configs: {
      value: cdktf.stringToHclTerraform(struct!.synthesizeSpeechConfigs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentTextToSpeechSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentTextToSpeechSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._synthesizeSpeechConfigs !== undefined) {
      hasAnyValues = true;
      internalValueResult.synthesizeSpeechConfigs = this._synthesizeSpeechConfigs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentTextToSpeechSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._synthesizeSpeechConfigs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._synthesizeSpeechConfigs = value.synthesizeSpeechConfigs;
    }
  }

  // synthesize_speech_configs - computed: false, optional: true, required: false
  private _synthesizeSpeechConfigs?: string; 
  public get synthesizeSpeechConfigs() {
    return this.getStringAttribute('synthesize_speech_configs');
  }
  public set synthesizeSpeechConfigs(value: string) {
    this._synthesizeSpeechConfigs = value;
  }
  public resetSynthesizeSpeechConfigs() {
    this._synthesizeSpeechConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synthesizeSpeechConfigsInput() {
    return this._synthesizeSpeechConfigs;
  }
}
export interface DialogflowCxAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#create DialogflowCxAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#delete DialogflowCxAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#update DialogflowCxAgent#update}
  */
  readonly update?: string;
}

export function dialogflowCxAgentTimeoutsToTerraform(struct?: DialogflowCxAgentTimeouts | cdktf.IResolvable): any {
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


export function dialogflowCxAgentTimeoutsToHclTerraform(struct?: DialogflowCxAgentTimeouts | cdktf.IResolvable): any {
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

export class DialogflowCxAgentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCxAgentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxAgentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent google_dialogflow_cx_agent}
*/
export class DialogflowCxAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DialogflowCxAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCxAgent to import
  * @param importFromId The id of the existing DialogflowCxAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCxAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_agent google_dialogflow_cx_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_agent',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._avatarUri = config.avatarUri;
    this._defaultLanguageCode = config.defaultLanguageCode;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableSpellCorrection = config.enableSpellCorrection;
    this._enableStackdriverLogging = config.enableStackdriverLogging;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._securitySettings = config.securitySettings;
    this._supportedLanguageCodes = config.supportedLanguageCodes;
    this._timeZone = config.timeZone;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._gitIntegrationSettings.internalValue = config.gitIntegrationSettings;
    this._speechToTextSettings.internalValue = config.speechToTextSettings;
    this._textToSpeechSettings.internalValue = config.textToSpeechSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar_uri - computed: false, optional: true, required: false
  private _avatarUri?: string; 
  public get avatarUri() {
    return this.getStringAttribute('avatar_uri');
  }
  public set avatarUri(value: string) {
    this._avatarUri = value;
  }
  public resetAvatarUri() {
    this._avatarUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarUriInput() {
    return this._avatarUri;
  }

  // default_language_code - computed: false, optional: false, required: true
  private _defaultLanguageCode?: string; 
  public get defaultLanguageCode() {
    return this.getStringAttribute('default_language_code');
  }
  public set defaultLanguageCode(value: string) {
    this._defaultLanguageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageCodeInput() {
    return this._defaultLanguageCode;
  }

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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // supported_language_codes - computed: false, optional: true, required: false
  private _supportedLanguageCodes?: string[]; 
  public get supportedLanguageCodes() {
    return this.getListAttribute('supported_language_codes');
  }
  public set supportedLanguageCodes(value: string[]) {
    this._supportedLanguageCodes = value;
  }
  public resetSupportedLanguageCodes() {
    this._supportedLanguageCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedLanguageCodesInput() {
    return this._supportedLanguageCodes;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new DialogflowCxAgentAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: DialogflowCxAgentAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // git_integration_settings - computed: false, optional: true, required: false
  private _gitIntegrationSettings = new DialogflowCxAgentGitIntegrationSettingsOutputReference(this, "git_integration_settings");
  public get gitIntegrationSettings() {
    return this._gitIntegrationSettings;
  }
  public putGitIntegrationSettings(value: DialogflowCxAgentGitIntegrationSettings) {
    this._gitIntegrationSettings.internalValue = value;
  }
  public resetGitIntegrationSettings() {
    this._gitIntegrationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitIntegrationSettingsInput() {
    return this._gitIntegrationSettings.internalValue;
  }

  // speech_to_text_settings - computed: false, optional: true, required: false
  private _speechToTextSettings = new DialogflowCxAgentSpeechToTextSettingsOutputReference(this, "speech_to_text_settings");
  public get speechToTextSettings() {
    return this._speechToTextSettings;
  }
  public putSpeechToTextSettings(value: DialogflowCxAgentSpeechToTextSettings) {
    this._speechToTextSettings.internalValue = value;
  }
  public resetSpeechToTextSettings() {
    this._speechToTextSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speechToTextSettingsInput() {
    return this._speechToTextSettings.internalValue;
  }

  // text_to_speech_settings - computed: false, optional: true, required: false
  private _textToSpeechSettings = new DialogflowCxAgentTextToSpeechSettingsOutputReference(this, "text_to_speech_settings");
  public get textToSpeechSettings() {
    return this._textToSpeechSettings;
  }
  public putTextToSpeechSettings(value: DialogflowCxAgentTextToSpeechSettings) {
    this._textToSpeechSettings.internalValue = value;
  }
  public resetTextToSpeechSettings() {
    this._textToSpeechSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textToSpeechSettingsInput() {
    return this._textToSpeechSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCxAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxAgentTimeouts) {
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
      avatar_uri: cdktf.stringToTerraform(this._avatarUri),
      default_language_code: cdktf.stringToTerraform(this._defaultLanguageCode),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_spell_correction: cdktf.booleanToTerraform(this._enableSpellCorrection),
      enable_stackdriver_logging: cdktf.booleanToTerraform(this._enableStackdriverLogging),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      security_settings: cdktf.stringToTerraform(this._securitySettings),
      supported_language_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedLanguageCodes),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      advanced_settings: dialogflowCxAgentAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      git_integration_settings: dialogflowCxAgentGitIntegrationSettingsToTerraform(this._gitIntegrationSettings.internalValue),
      speech_to_text_settings: dialogflowCxAgentSpeechToTextSettingsToTerraform(this._speechToTextSettings.internalValue),
      text_to_speech_settings: dialogflowCxAgentTextToSpeechSettingsToTerraform(this._textToSpeechSettings.internalValue),
      timeouts: dialogflowCxAgentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avatar_uri: {
        value: cdktf.stringToHclTerraform(this._avatarUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_language_code: {
        value: cdktf.stringToHclTerraform(this._defaultLanguageCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_spell_correction: {
        value: cdktf.booleanToHclTerraform(this._enableSpellCorrection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_stackdriver_logging: {
        value: cdktf.booleanToHclTerraform(this._enableStackdriverLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      security_settings: {
        value: cdktf.stringToHclTerraform(this._securitySettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_language_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedLanguageCodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_settings: {
        value: dialogflowCxAgentAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxAgentAdvancedSettingsList",
      },
      git_integration_settings: {
        value: dialogflowCxAgentGitIntegrationSettingsToHclTerraform(this._gitIntegrationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxAgentGitIntegrationSettingsList",
      },
      speech_to_text_settings: {
        value: dialogflowCxAgentSpeechToTextSettingsToHclTerraform(this._speechToTextSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxAgentSpeechToTextSettingsList",
      },
      text_to_speech_settings: {
        value: dialogflowCxAgentTextToSpeechSettingsToHclTerraform(this._textToSpeechSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxAgentTextToSpeechSettingsList",
      },
      timeouts: {
        value: dialogflowCxAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCxAgentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
