/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#description DialogflowCxFlow#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#display_name DialogflowCxFlow#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#id DialogflowCxFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically.
  * The Default Start Flow cannot be deleted; deleting the 'google_dialogflow_cx_flow' resource does nothing to the underlying GCP resources.
  * 
  * ~> Avoid having multiple 'google_dialogflow_cx_flow' resources linked to the same agent with 'is_default_start_flow = true' because they will compete to control a single Default Start Flow resource in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#is_default_start_flow DialogflowCxFlow#is_default_start_flow}
  */
  readonly isDefaultStartFlow?: boolean | cdktf.IResolvable;
  /**
  * The language of the following fields in flow:
  * Flow.event_handlers.trigger_fulfillment.messages
  * Flow.event_handlers.trigger_fulfillment.conditional_cases
  * Flow.transition_routes.trigger_fulfillment.messages
  * Flow.transition_routes.trigger_fulfillment.conditional_cases
  * If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#language_code DialogflowCxFlow#language_code}
  */
  readonly languageCode?: string;
  /**
  * The agent to create a flow for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#parent DialogflowCxFlow#parent}
  */
  readonly parent?: string;
  /**
  * A flow's transition route group serve two purposes:
  * They are responsible for matching the user's first utterances in the flow.
  * They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
  * Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#transition_route_groups DialogflowCxFlow#transition_route_groups}
  */
  readonly transitionRouteGroups?: string[];
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#advanced_settings DialogflowCxFlow#advanced_settings}
  */
  readonly advancedSettings?: DialogflowCxFlowAdvancedSettings;
  /**
  * event_handlers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#event_handlers DialogflowCxFlow#event_handlers}
  */
  readonly eventHandlers?: DialogflowCxFlowEventHandlers[] | cdktf.IResolvable;
  /**
  * knowledge_connector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#knowledge_connector_settings DialogflowCxFlow#knowledge_connector_settings}
  */
  readonly knowledgeConnectorSettings?: DialogflowCxFlowKnowledgeConnectorSettings;
  /**
  * nlu_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#nlu_settings DialogflowCxFlow#nlu_settings}
  */
  readonly nluSettings?: DialogflowCxFlowNluSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#timeouts DialogflowCxFlow#timeouts}
  */
  readonly timeouts?: DialogflowCxFlowTimeouts;
  /**
  * transition_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#transition_routes DialogflowCxFlow#transition_routes}
  */
  readonly transitionRoutes?: DialogflowCxFlowTransitionRoutes[] | cdktf.IResolvable;
}
export interface DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination {
  /**
  * The Google Cloud Storage URI for the exported objects. Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
  * Format: gs://bucket/object-name-or-prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#uri DialogflowCxFlow#uri}
  */
  readonly uri?: string;
}

export function dialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationToTerraform(struct?: DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference | DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationToHclTerraform(struct?: DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference | DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination): any {
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

export class DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination | undefined) {
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
export interface DialogflowCxFlowAdvancedSettingsDtmfSettings {
  /**
  * If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#enabled DialogflowCxFlow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The digit that terminates a DTMF digit sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#finish_digit DialogflowCxFlow#finish_digit}
  */
  readonly finishDigit?: string;
  /**
  * Max length of DTMF digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#max_digits DialogflowCxFlow#max_digits}
  */
  readonly maxDigits?: number;
}

export function dialogflowCxFlowAdvancedSettingsDtmfSettingsToTerraform(struct?: DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference | DialogflowCxFlowAdvancedSettingsDtmfSettings): any {
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


export function dialogflowCxFlowAdvancedSettingsDtmfSettingsToHclTerraform(struct?: DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference | DialogflowCxFlowAdvancedSettingsDtmfSettings): any {
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

export class DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowAdvancedSettingsDtmfSettings | undefined {
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

  public set internalValue(value: DialogflowCxFlowAdvancedSettingsDtmfSettings | undefined) {
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
export interface DialogflowCxFlowAdvancedSettingsLoggingSettings {
  /**
  * Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#enable_consent_based_redaction DialogflowCxFlow#enable_consent_based_redaction}
  */
  readonly enableConsentBasedRedaction?: boolean | cdktf.IResolvable;
  /**
  * Enables DF Interaction logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#enable_interaction_logging DialogflowCxFlow#enable_interaction_logging}
  */
  readonly enableInteractionLogging?: boolean | cdktf.IResolvable;
  /**
  * Enables Google Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#enable_stackdriver_logging DialogflowCxFlow#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
}

export function dialogflowCxFlowAdvancedSettingsLoggingSettingsToTerraform(struct?: DialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference | DialogflowCxFlowAdvancedSettingsLoggingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_consent_based_redaction: cdktf.booleanToTerraform(struct!.enableConsentBasedRedaction),
    enable_interaction_logging: cdktf.booleanToTerraform(struct!.enableInteractionLogging),
    enable_stackdriver_logging: cdktf.booleanToTerraform(struct!.enableStackdriverLogging),
  }
}


export function dialogflowCxFlowAdvancedSettingsLoggingSettingsToHclTerraform(struct?: DialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference | DialogflowCxFlowAdvancedSettingsLoggingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_consent_based_redaction: {
      value: cdktf.booleanToHclTerraform(struct!.enableConsentBasedRedaction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_interaction_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableInteractionLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_stackdriver_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableStackdriverLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowAdvancedSettingsLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableConsentBasedRedaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConsentBasedRedaction = this._enableConsentBasedRedaction;
    }
    if (this._enableInteractionLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInteractionLogging = this._enableInteractionLogging;
    }
    if (this._enableStackdriverLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStackdriverLogging = this._enableStackdriverLogging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowAdvancedSettingsLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableConsentBasedRedaction = undefined;
      this._enableInteractionLogging = undefined;
      this._enableStackdriverLogging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableConsentBasedRedaction = value.enableConsentBasedRedaction;
      this._enableInteractionLogging = value.enableInteractionLogging;
      this._enableStackdriverLogging = value.enableStackdriverLogging;
    }
  }

  // enable_consent_based_redaction - computed: false, optional: true, required: false
  private _enableConsentBasedRedaction?: boolean | cdktf.IResolvable; 
  public get enableConsentBasedRedaction() {
    return this.getBooleanAttribute('enable_consent_based_redaction');
  }
  public set enableConsentBasedRedaction(value: boolean | cdktf.IResolvable) {
    this._enableConsentBasedRedaction = value;
  }
  public resetEnableConsentBasedRedaction() {
    this._enableConsentBasedRedaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsentBasedRedactionInput() {
    return this._enableConsentBasedRedaction;
  }

  // enable_interaction_logging - computed: false, optional: true, required: false
  private _enableInteractionLogging?: boolean | cdktf.IResolvable; 
  public get enableInteractionLogging() {
    return this.getBooleanAttribute('enable_interaction_logging');
  }
  public set enableInteractionLogging(value: boolean | cdktf.IResolvable) {
    this._enableInteractionLogging = value;
  }
  public resetEnableInteractionLogging() {
    this._enableInteractionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInteractionLoggingInput() {
    return this._enableInteractionLogging;
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
}
export interface DialogflowCxFlowAdvancedSettingsSpeechSettings {
  /**
  * Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#endpointer_sensitivity DialogflowCxFlow#endpointer_sensitivity}
  */
  readonly endpointerSensitivity?: number;
  /**
  * Mapping from language to Speech-to-Text model. The mapped Speech-to-Text model will be selected for requests from its corresponding language. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models).
  * An object containing a list of **"key": value** pairs. Example: **{ "name": "wrench", "mass": "1.3kg", "count": "3" }**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#models DialogflowCxFlow#models}
  */
  readonly models?: { [key: string]: string };
  /**
  * Timeout before detecting no speech.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#no_speech_timeout DialogflowCxFlow#no_speech_timeout}
  */
  readonly noSpeechTimeout?: string;
  /**
  * Use timeout based endpointing, interpreting endpointer sensitivity as seconds of timeout value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#use_timeout_based_endpointing DialogflowCxFlow#use_timeout_based_endpointing}
  */
  readonly useTimeoutBasedEndpointing?: boolean | cdktf.IResolvable;
}

export function dialogflowCxFlowAdvancedSettingsSpeechSettingsToTerraform(struct?: DialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference | DialogflowCxFlowAdvancedSettingsSpeechSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpointer_sensitivity: cdktf.numberToTerraform(struct!.endpointerSensitivity),
    models: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.models),
    no_speech_timeout: cdktf.stringToTerraform(struct!.noSpeechTimeout),
    use_timeout_based_endpointing: cdktf.booleanToTerraform(struct!.useTimeoutBasedEndpointing),
  }
}


export function dialogflowCxFlowAdvancedSettingsSpeechSettingsToHclTerraform(struct?: DialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference | DialogflowCxFlowAdvancedSettingsSpeechSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpointer_sensitivity: {
      value: cdktf.numberToHclTerraform(struct!.endpointerSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    models: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.models),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    no_speech_timeout: {
      value: cdktf.stringToHclTerraform(struct!.noSpeechTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_timeout_based_endpointing: {
      value: cdktf.booleanToHclTerraform(struct!.useTimeoutBasedEndpointing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowAdvancedSettingsSpeechSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointerSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointerSensitivity = this._endpointerSensitivity;
    }
    if (this._models !== undefined) {
      hasAnyValues = true;
      internalValueResult.models = this._models;
    }
    if (this._noSpeechTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSpeechTimeout = this._noSpeechTimeout;
    }
    if (this._useTimeoutBasedEndpointing !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTimeoutBasedEndpointing = this._useTimeoutBasedEndpointing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowAdvancedSettingsSpeechSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointerSensitivity = undefined;
      this._models = undefined;
      this._noSpeechTimeout = undefined;
      this._useTimeoutBasedEndpointing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointerSensitivity = value.endpointerSensitivity;
      this._models = value.models;
      this._noSpeechTimeout = value.noSpeechTimeout;
      this._useTimeoutBasedEndpointing = value.useTimeoutBasedEndpointing;
    }
  }

  // endpointer_sensitivity - computed: false, optional: true, required: false
  private _endpointerSensitivity?: number; 
  public get endpointerSensitivity() {
    return this.getNumberAttribute('endpointer_sensitivity');
  }
  public set endpointerSensitivity(value: number) {
    this._endpointerSensitivity = value;
  }
  public resetEndpointerSensitivity() {
    this._endpointerSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointerSensitivityInput() {
    return this._endpointerSensitivity;
  }

  // models - computed: false, optional: true, required: false
  private _models?: { [key: string]: string }; 
  public get models() {
    return this.getStringMapAttribute('models');
  }
  public set models(value: { [key: string]: string }) {
    this._models = value;
  }
  public resetModels() {
    this._models = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelsInput() {
    return this._models;
  }

  // no_speech_timeout - computed: false, optional: true, required: false
  private _noSpeechTimeout?: string; 
  public get noSpeechTimeout() {
    return this.getStringAttribute('no_speech_timeout');
  }
  public set noSpeechTimeout(value: string) {
    this._noSpeechTimeout = value;
  }
  public resetNoSpeechTimeout() {
    this._noSpeechTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSpeechTimeoutInput() {
    return this._noSpeechTimeout;
  }

  // use_timeout_based_endpointing - computed: false, optional: true, required: false
  private _useTimeoutBasedEndpointing?: boolean | cdktf.IResolvable; 
  public get useTimeoutBasedEndpointing() {
    return this.getBooleanAttribute('use_timeout_based_endpointing');
  }
  public set useTimeoutBasedEndpointing(value: boolean | cdktf.IResolvable) {
    this._useTimeoutBasedEndpointing = value;
  }
  public resetUseTimeoutBasedEndpointing() {
    this._useTimeoutBasedEndpointing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTimeoutBasedEndpointingInput() {
    return this._useTimeoutBasedEndpointing;
  }
}
export interface DialogflowCxFlowAdvancedSettings {
  /**
  * audio_export_gcs_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#audio_export_gcs_destination DialogflowCxFlow#audio_export_gcs_destination}
  */
  readonly audioExportGcsDestination?: DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination;
  /**
  * dtmf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#dtmf_settings DialogflowCxFlow#dtmf_settings}
  */
  readonly dtmfSettings?: DialogflowCxFlowAdvancedSettingsDtmfSettings;
  /**
  * logging_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#logging_settings DialogflowCxFlow#logging_settings}
  */
  readonly loggingSettings?: DialogflowCxFlowAdvancedSettingsLoggingSettings;
  /**
  * speech_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#speech_settings DialogflowCxFlow#speech_settings}
  */
  readonly speechSettings?: DialogflowCxFlowAdvancedSettingsSpeechSettings;
}

export function dialogflowCxFlowAdvancedSettingsToTerraform(struct?: DialogflowCxFlowAdvancedSettingsOutputReference | DialogflowCxFlowAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_export_gcs_destination: dialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationToTerraform(struct!.audioExportGcsDestination),
    dtmf_settings: dialogflowCxFlowAdvancedSettingsDtmfSettingsToTerraform(struct!.dtmfSettings),
    logging_settings: dialogflowCxFlowAdvancedSettingsLoggingSettingsToTerraform(struct!.loggingSettings),
    speech_settings: dialogflowCxFlowAdvancedSettingsSpeechSettingsToTerraform(struct!.speechSettings),
  }
}


export function dialogflowCxFlowAdvancedSettingsToHclTerraform(struct?: DialogflowCxFlowAdvancedSettingsOutputReference | DialogflowCxFlowAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_export_gcs_destination: {
      value: dialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationToHclTerraform(struct!.audioExportGcsDestination),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationList",
    },
    dtmf_settings: {
      value: dialogflowCxFlowAdvancedSettingsDtmfSettingsToHclTerraform(struct!.dtmfSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowAdvancedSettingsDtmfSettingsList",
    },
    logging_settings: {
      value: dialogflowCxFlowAdvancedSettingsLoggingSettingsToHclTerraform(struct!.loggingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowAdvancedSettingsLoggingSettingsList",
    },
    speech_settings: {
      value: dialogflowCxFlowAdvancedSettingsSpeechSettingsToHclTerraform(struct!.speechSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowAdvancedSettingsSpeechSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowAdvancedSettings | undefined {
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
    if (this._loggingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingSettings = this._loggingSettings?.internalValue;
    }
    if (this._speechSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.speechSettings = this._speechSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioExportGcsDestination.internalValue = undefined;
      this._dtmfSettings.internalValue = undefined;
      this._loggingSettings.internalValue = undefined;
      this._speechSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioExportGcsDestination.internalValue = value.audioExportGcsDestination;
      this._dtmfSettings.internalValue = value.dtmfSettings;
      this._loggingSettings.internalValue = value.loggingSettings;
      this._speechSettings.internalValue = value.speechSettings;
    }
  }

  // audio_export_gcs_destination - computed: false, optional: true, required: false
  private _audioExportGcsDestination = new DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference(this, "audio_export_gcs_destination");
  public get audioExportGcsDestination() {
    return this._audioExportGcsDestination;
  }
  public putAudioExportGcsDestination(value: DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination) {
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
  private _dtmfSettings = new DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference(this, "dtmf_settings");
  public get dtmfSettings() {
    return this._dtmfSettings;
  }
  public putDtmfSettings(value: DialogflowCxFlowAdvancedSettingsDtmfSettings) {
    this._dtmfSettings.internalValue = value;
  }
  public resetDtmfSettings() {
    this._dtmfSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfSettingsInput() {
    return this._dtmfSettings.internalValue;
  }

  // logging_settings - computed: false, optional: true, required: false
  private _loggingSettings = new DialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference(this, "logging_settings");
  public get loggingSettings() {
    return this._loggingSettings;
  }
  public putLoggingSettings(value: DialogflowCxFlowAdvancedSettingsLoggingSettings) {
    this._loggingSettings.internalValue = value;
  }
  public resetLoggingSettings() {
    this._loggingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSettingsInput() {
    return this._loggingSettings.internalValue;
  }

  // speech_settings - computed: false, optional: true, required: false
  private _speechSettings = new DialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference(this, "speech_settings");
  public get speechSettings() {
    return this._speechSettings;
  }
  public putSpeechSettings(value: DialogflowCxFlowAdvancedSettingsSpeechSettings) {
    this._speechSettings.internalValue = value;
  }
  public resetSpeechSettings() {
    this._speechSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speechSettingsInput() {
    return this._speechSettings.internalValue;
  }
}
export interface DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#cases DialogflowCxFlow#cases}
  */
  readonly cases?: string;
}

export function dialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function dialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesToHclTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cases: {
      value: cdktf.stringToHclTerraform(struct!.cases),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cases !== undefined) {
      hasAnyValues = true;
      internalValueResult.cases = this._cases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cases = value.cases;
    }
  }

  // cases - computed: false, optional: true, required: false
  private _cases?: string; 
  public get cases() {
    return this.getStringAttribute('cases');
  }
  public set cases(value: string) {
    this._cases = value;
  }
  public resetCases() {
    this._cases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casesInput() {
    return this._cases;
  }
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference {
    return new DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#metadata DialogflowCxFlow#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#metadata DialogflowCxFlow#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#ssml DialogflowCxFlow#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}
  */
  readonly text?: string;
}

export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssml: {
      value: cdktf.stringToHclTerraform(struct!.ssml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssml !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssml = this._ssml;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ssml = undefined;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ssml = value.ssml;
      this._text = value.text;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // ssml - computed: false, optional: true, required: false
  private _ssml?: string; 
  public get ssml() {
    return this.getStringAttribute('ssml');
  }
  public set ssml(value: string) {
    this._ssml = value;
  }
  public resetSsml() {
    this._ssml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlInput() {
    return this._ssml;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#audio_uri DialogflowCxFlow#audio_uri}
  */
  readonly audioUri: string;
}

export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_uri: {
      value: cdktf.stringToHclTerraform(struct!.audioUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioUri = value.audioUri;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // audio_uri - computed: false, optional: false, required: true
  private _audioUri?: string; 
  public get audioUri() {
    return this.getStringAttribute('audio_uri');
  }
  public set audioUri(value: string) {
    this._audioUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioUriInput() {
    return this._audioUri;
  }
}
export interface DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#phone_number DialogflowCxFlow#phone_number}
  */
  readonly phoneNumber: string;
}

export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._phoneNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}
export interface DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}
  */
  readonly text?: string[];
}

export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextToHclTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.text),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // text - computed: false, optional: true, required: false
  private _text?: string[]; 
  public get text() {
    return this.getListAttribute('text');
  }
  public set text(value: string[]) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DialogflowCxFlowEventHandlersTriggerFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#channel DialogflowCxFlow#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#payload DialogflowCxFlow#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#conversation_success DialogflowCxFlow#conversation_success}
  */
  readonly conversationSuccess?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#live_agent_handoff DialogflowCxFlow#live_agent_handoff}
  */
  readonly liveAgentHandoff?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#output_audio_text DialogflowCxFlow#output_audio_text}
  */
  readonly outputAudioText?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#play_audio DialogflowCxFlow#play_audio}
  */
  readonly playAudio?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#telephony_transfer_call DialogflowCxFlow#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}
  */
  readonly text?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText;
}

export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesToHclTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conversation_success: {
      value: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxFlowEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._conversationSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationSuccess = this._conversationSuccess?.internalValue;
    }
    if (this._liveAgentHandoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveAgentHandoff = this._liveAgentHandoff?.internalValue;
    }
    if (this._outputAudioText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAudioText = this._outputAudioText?.internalValue;
    }
    if (this._playAudio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playAudio = this._playAudio?.internalValue;
    }
    if (this._telephonyTransferCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telephonyTransferCall = this._telephonyTransferCall?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._payload = undefined;
      this._conversationSuccess.internalValue = undefined;
      this._liveAgentHandoff.internalValue = undefined;
      this._outputAudioText.internalValue = undefined;
      this._playAudio.internalValue = undefined;
      this._telephonyTransferCall.internalValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._payload = value.payload;
      this._conversationSuccess.internalValue = value.conversationSuccess;
      this._liveAgentHandoff.internalValue = value.liveAgentHandoff;
      this._outputAudioText.internalValue = value.outputAudioText;
      this._playAudio.internalValue = value.playAudio;
      this._telephonyTransferCall.internalValue = value.telephonyTransferCall;
      this._text.internalValue = value.text;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // conversation_success - computed: false, optional: true, required: false
  private _conversationSuccess = new DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess) {
    this._conversationSuccess.internalValue = value;
  }
  public resetConversationSuccess() {
    this._conversationSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationSuccessInput() {
    return this._conversationSuccess.internalValue;
  }

  // live_agent_handoff - computed: false, optional: true, required: false
  private _liveAgentHandoff = new DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff) {
    this._liveAgentHandoff.internalValue = value;
  }
  public resetLiveAgentHandoff() {
    this._liveAgentHandoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveAgentHandoffInput() {
    return this._liveAgentHandoff.internalValue;
  }

  // output_audio_text - computed: false, optional: true, required: false
  private _outputAudioText = new DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText) {
    this._outputAudioText.internalValue = value;
  }
  public resetOutputAudioText() {
    this._outputAudioText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputAudioTextInput() {
    return this._outputAudioText.internalValue;
  }

  // play_audio - computed: false, optional: true, required: false
  private _playAudio = new DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio) {
    this._playAudio.internalValue = value;
  }
  public resetPlayAudio() {
    this._playAudio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playAudioInput() {
    return this._playAudio.internalValue;
  }

  // telephony_transfer_call - computed: false, optional: true, required: false
  private _telephonyTransferCall = new DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall) {
    this._telephonyTransferCall.internalValue = value;
  }
  public resetTelephonyTransferCall() {
    this._telephonyTransferCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telephonyTransferCallInput() {
    return this._telephonyTransferCall.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference {
    return new DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#parameter DialogflowCxFlow#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#value DialogflowCxFlow#value}
  */
  readonly value?: string;
}

export function dialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsToHclTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameter = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameter = value.parameter;
      this._value = value.value;
    }
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference {
    return new DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowEventHandlersTriggerFulfillment {
  /**
  * If the flag is true, the agent will utilize LLM to generate a text response.
  * If LLM generation fails, the defined responses in the fulfillment will be respected.
  * This flag is only useful for fulfillments associated with no-match event handlers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#enable_generative_fallback DialogflowCxFlow#enable_generative_fallback}
  */
  readonly enableGenerativeFallback?: boolean | cdktf.IResolvable;
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#return_partial_responses DialogflowCxFlow#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#tag DialogflowCxFlow#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#webhook DialogflowCxFlow#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#conditional_cases DialogflowCxFlow#conditional_cases}
  */
  readonly conditionalCases?: DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#messages DialogflowCxFlow#messages}
  */
  readonly messages?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#set_parameter_actions DialogflowCxFlow#set_parameter_actions}
  */
  readonly setParameterActions?: DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function dialogflowCxFlowEventHandlersTriggerFulfillmentToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_generative_fallback: cdktf.booleanToTerraform(struct!.enableGenerativeFallback),
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(dialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(dialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function dialogflowCxFlowEventHandlersTriggerFulfillmentToHclTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_generative_fallback: {
      value: cdktf.booleanToHclTerraform(struct!.enableGenerativeFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    return_partial_responses: {
      value: cdktf.booleanToHclTerraform(struct!.returnPartialResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: cdktf.stringToHclTerraform(struct!.webhook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditional_cases: {
      value: cdktf.listMapperHcl(dialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(dialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowEventHandlersTriggerFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableGenerativeFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGenerativeFallback = this._enableGenerativeFallback;
    }
    if (this._returnPartialResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnPartialResponses = this._returnPartialResponses;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._webhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook;
    }
    if (this._conditionalCases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalCases = this._conditionalCases?.internalValue;
    }
    if (this._messages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages?.internalValue;
    }
    if (this._setParameterActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setParameterActions = this._setParameterActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowEventHandlersTriggerFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableGenerativeFallback = undefined;
      this._returnPartialResponses = undefined;
      this._tag = undefined;
      this._webhook = undefined;
      this._conditionalCases.internalValue = undefined;
      this._messages.internalValue = undefined;
      this._setParameterActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableGenerativeFallback = value.enableGenerativeFallback;
      this._returnPartialResponses = value.returnPartialResponses;
      this._tag = value.tag;
      this._webhook = value.webhook;
      this._conditionalCases.internalValue = value.conditionalCases;
      this._messages.internalValue = value.messages;
      this._setParameterActions.internalValue = value.setParameterActions;
    }
  }

  // enable_generative_fallback - computed: false, optional: true, required: false
  private _enableGenerativeFallback?: boolean | cdktf.IResolvable; 
  public get enableGenerativeFallback() {
    return this.getBooleanAttribute('enable_generative_fallback');
  }
  public set enableGenerativeFallback(value: boolean | cdktf.IResolvable) {
    this._enableGenerativeFallback = value;
  }
  public resetEnableGenerativeFallback() {
    this._enableGenerativeFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGenerativeFallbackInput() {
    return this._enableGenerativeFallback;
  }

  // return_partial_responses - computed: false, optional: true, required: false
  private _returnPartialResponses?: boolean | cdktf.IResolvable; 
  public get returnPartialResponses() {
    return this.getBooleanAttribute('return_partial_responses');
  }
  public set returnPartialResponses(value: boolean | cdktf.IResolvable) {
    this._returnPartialResponses = value;
  }
  public resetReturnPartialResponses() {
    this._returnPartialResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnPartialResponsesInput() {
    return this._returnPartialResponses;
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

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }

  // conditional_cases - computed: false, optional: true, required: false
  private _conditionalCases = new DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable) {
    this._conditionalCases.internalValue = value;
  }
  public resetConditionalCases() {
    this._conditionalCases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalCasesInput() {
    return this._conditionalCases.internalValue;
  }

  // messages - computed: false, optional: true, required: false
  private _messages = new DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable) {
    this._messages.internalValue = value;
  }
  public resetMessages() {
    this._messages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages.internalValue;
  }

  // set_parameter_actions - computed: false, optional: true, required: false
  private _setParameterActions = new DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable) {
    this._setParameterActions.internalValue = value;
  }
  public resetSetParameterActions() {
    this._setParameterActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setParameterActionsInput() {
    return this._setParameterActions.internalValue;
  }
}
export interface DialogflowCxFlowEventHandlers {
  /**
  * The name of the event to handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#event DialogflowCxFlow#event}
  */
  readonly event?: string;
  /**
  * The target flow to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#target_flow DialogflowCxFlow#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#target_page DialogflowCxFlow#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#trigger_fulfillment DialogflowCxFlow#trigger_fulfillment}
  */
  readonly triggerFulfillment?: DialogflowCxFlowEventHandlersTriggerFulfillment;
}

export function dialogflowCxFlowEventHandlersToTerraform(struct?: DialogflowCxFlowEventHandlers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    trigger_fulfillment: dialogflowCxFlowEventHandlersTriggerFulfillmentToTerraform(struct!.triggerFulfillment),
  }
}


export function dialogflowCxFlowEventHandlersToHclTerraform(struct?: DialogflowCxFlowEventHandlers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_flow: {
      value: cdktf.stringToHclTerraform(struct!.targetFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_page: {
      value: cdktf.stringToHclTerraform(struct!.targetPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_fulfillment: {
      value: dialogflowCxFlowEventHandlersTriggerFulfillmentToHclTerraform(struct!.triggerFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowEventHandlersTriggerFulfillmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowEventHandlersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxFlowEventHandlers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._targetFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFlow = this._targetFlow;
    }
    if (this._targetPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPage = this._targetPage;
    }
    if (this._triggerFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerFulfillment = this._triggerFulfillment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowEventHandlers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event = undefined;
      this._targetFlow = undefined;
      this._targetPage = undefined;
      this._triggerFulfillment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event = value.event;
      this._targetFlow = value.targetFlow;
      this._targetPage = value.targetPage;
      this._triggerFulfillment.internalValue = value.triggerFulfillment;
    }
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_flow - computed: false, optional: true, required: false
  private _targetFlow?: string; 
  public get targetFlow() {
    return this.getStringAttribute('target_flow');
  }
  public set targetFlow(value: string) {
    this._targetFlow = value;
  }
  public resetTargetFlow() {
    this._targetFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFlowInput() {
    return this._targetFlow;
  }

  // target_page - computed: false, optional: true, required: false
  private _targetPage?: string; 
  public get targetPage() {
    return this.getStringAttribute('target_page');
  }
  public set targetPage(value: string) {
    this._targetPage = value;
  }
  public resetTargetPage() {
    this._targetPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPageInput() {
    return this._targetPage;
  }

  // trigger_fulfillment - computed: false, optional: true, required: false
  private _triggerFulfillment = new DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference(this, "trigger_fulfillment");
  public get triggerFulfillment() {
    return this._triggerFulfillment;
  }
  public putTriggerFulfillment(value: DialogflowCxFlowEventHandlersTriggerFulfillment) {
    this._triggerFulfillment.internalValue = value;
  }
  public resetTriggerFulfillment() {
    this._triggerFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerFulfillmentInput() {
    return this._triggerFulfillment.internalValue;
  }
}

export class DialogflowCxFlowEventHandlersList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxFlowEventHandlers[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxFlowEventHandlersOutputReference {
    return new DialogflowCxFlowEventHandlersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnections {
  /**
  * The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#data_store DialogflowCxFlow#data_store}
  */
  readonly dataStore?: string;
  /**
  * The type of the connected data store.
  * * PUBLIC_WEB: A data store that contains public web content.
  * * UNSTRUCTURED: A data store that contains unstructured private data.
  * * STRUCTURED: A data store that contains structured data (for example FAQ). Possible values: ["PUBLIC_WEB", "UNSTRUCTURED", "STRUCTURED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#data_store_type DialogflowCxFlow#data_store_type}
  */
  readonly dataStoreType?: string;
  /**
  * The document processing mode for the data store connection. Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
  * * DOCUMENTS: Documents are processed as documents.
  * * CHUNKS: Documents are converted to chunks. Possible values: ["DOCUMENTS", "CHUNKS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#document_processing_mode DialogflowCxFlow#document_processing_mode}
  */
  readonly documentProcessingMode?: string;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnectionsToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_store: cdktf.stringToTerraform(struct!.dataStore),
    data_store_type: cdktf.stringToTerraform(struct!.dataStoreType),
    document_processing_mode: cdktf.stringToTerraform(struct!.documentProcessingMode),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnectionsToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_store: {
      value: cdktf.stringToHclTerraform(struct!.dataStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store_type: {
      value: cdktf.stringToHclTerraform(struct!.dataStoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_processing_mode: {
      value: cdktf.stringToHclTerraform(struct!.documentProcessingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore;
    }
    if (this._dataStoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreType = this._dataStoreType;
    }
    if (this._documentProcessingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentProcessingMode = this._documentProcessingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataStore = undefined;
      this._dataStoreType = undefined;
      this._documentProcessingMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataStore = value.dataStore;
      this._dataStoreType = value.dataStoreType;
      this._documentProcessingMode = value.documentProcessingMode;
    }
  }

  // data_store - computed: false, optional: true, required: false
  private _dataStore?: string; 
  public get dataStore() {
    return this.getStringAttribute('data_store');
  }
  public set dataStore(value: string) {
    this._dataStore = value;
  }
  public resetDataStore() {
    this._dataStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore;
  }

  // data_store_type - computed: false, optional: true, required: false
  private _dataStoreType?: string; 
  public get dataStoreType() {
    return this.getStringAttribute('data_store_type');
  }
  public set dataStoreType(value: string) {
    this._dataStoreType = value;
  }
  public resetDataStoreType() {
    this._dataStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreTypeInput() {
    return this._dataStoreType;
  }

  // document_processing_mode - computed: false, optional: true, required: false
  private _documentProcessingMode?: string; 
  public get documentProcessingMode() {
    return this.getStringAttribute('document_processing_mode');
  }
  public set documentProcessingMode(value: string) {
    this._documentProcessingMode = value;
  }
  public resetDocumentProcessingMode() {
    this._documentProcessingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentProcessingModeInput() {
    return this._documentProcessingMode;
  }
}

export class DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnectionsList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnections[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnectionsOutputReference {
    return new DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettings {
  /**
  * If true, incoming audio is processed for DTMF (dual tone multi frequtectency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will de the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#enabled DialogflowCxFlow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Endpoint timeout setting for matching dtmf input to regex.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.500s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#endpointing_timeout_duration DialogflowCxFlow#endpointing_timeout_duration}
  */
  readonly endpointingTimeoutDuration?: string;
  /**
  * The digit that terminates a DTMF digit sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#finish_digit DialogflowCxFlow#finish_digit}
  */
  readonly finishDigit?: string;
  /**
  * Interdigit timeout setting for matching dtmf input to regex.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.500s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#interdigit_timeout_duration DialogflowCxFlow#interdigit_timeout_duration}
  */
  readonly interdigitTimeoutDuration?: string;
  /**
  * Max length of DTMF digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#max_digits DialogflowCxFlow#max_digits}
  */
  readonly maxDigits?: number;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettingsToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettingsOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    endpointing_timeout_duration: cdktf.stringToTerraform(struct!.endpointingTimeoutDuration),
    finish_digit: cdktf.stringToTerraform(struct!.finishDigit),
    interdigit_timeout_duration: cdktf.stringToTerraform(struct!.interdigitTimeoutDuration),
    max_digits: cdktf.numberToTerraform(struct!.maxDigits),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettingsToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettingsOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettings): any {
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
    endpointing_timeout_duration: {
      value: cdktf.stringToHclTerraform(struct!.endpointingTimeoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    finish_digit: {
      value: cdktf.stringToHclTerraform(struct!.finishDigit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interdigit_timeout_duration: {
      value: cdktf.stringToHclTerraform(struct!.interdigitTimeoutDuration),
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

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endpointingTimeoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointingTimeoutDuration = this._endpointingTimeoutDuration;
    }
    if (this._finishDigit !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishDigit = this._finishDigit;
    }
    if (this._interdigitTimeoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.interdigitTimeoutDuration = this._interdigitTimeoutDuration;
    }
    if (this._maxDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDigits = this._maxDigits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._endpointingTimeoutDuration = undefined;
      this._finishDigit = undefined;
      this._interdigitTimeoutDuration = undefined;
      this._maxDigits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._endpointingTimeoutDuration = value.endpointingTimeoutDuration;
      this._finishDigit = value.finishDigit;
      this._interdigitTimeoutDuration = value.interdigitTimeoutDuration;
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

  // endpointing_timeout_duration - computed: false, optional: true, required: false
  private _endpointingTimeoutDuration?: string; 
  public get endpointingTimeoutDuration() {
    return this.getStringAttribute('endpointing_timeout_duration');
  }
  public set endpointingTimeoutDuration(value: string) {
    this._endpointingTimeoutDuration = value;
  }
  public resetEndpointingTimeoutDuration() {
    this._endpointingTimeoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointingTimeoutDurationInput() {
    return this._endpointingTimeoutDuration;
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

  // interdigit_timeout_duration - computed: false, optional: true, required: false
  private _interdigitTimeoutDuration?: string; 
  public get interdigitTimeoutDuration() {
    return this.getStringAttribute('interdigit_timeout_duration');
  }
  public set interdigitTimeoutDuration(value: string) {
    this._interdigitTimeoutDuration = value;
  }
  public resetInterdigitTimeoutDuration() {
    this._interdigitTimeoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interdigitTimeoutDurationInput() {
    return this._interdigitTimeoutDuration;
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
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettings {
  /**
  * Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#enable_consent_based_redaction DialogflowCxFlow#enable_consent_based_redaction}
  */
  readonly enableConsentBasedRedaction?: boolean | cdktf.IResolvable;
  /**
  * Enables DF Interaction logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#enable_interaction_logging DialogflowCxFlow#enable_interaction_logging}
  */
  readonly enableInteractionLogging?: boolean | cdktf.IResolvable;
  /**
  * Enables Google Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#enable_stackdriver_logging DialogflowCxFlow#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettingsToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettingsOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_consent_based_redaction: cdktf.booleanToTerraform(struct!.enableConsentBasedRedaction),
    enable_interaction_logging: cdktf.booleanToTerraform(struct!.enableInteractionLogging),
    enable_stackdriver_logging: cdktf.booleanToTerraform(struct!.enableStackdriverLogging),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettingsToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettingsOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_consent_based_redaction: {
      value: cdktf.booleanToHclTerraform(struct!.enableConsentBasedRedaction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_interaction_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableInteractionLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_stackdriver_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableStackdriverLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableConsentBasedRedaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConsentBasedRedaction = this._enableConsentBasedRedaction;
    }
    if (this._enableInteractionLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInteractionLogging = this._enableInteractionLogging;
    }
    if (this._enableStackdriverLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStackdriverLogging = this._enableStackdriverLogging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableConsentBasedRedaction = undefined;
      this._enableInteractionLogging = undefined;
      this._enableStackdriverLogging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableConsentBasedRedaction = value.enableConsentBasedRedaction;
      this._enableInteractionLogging = value.enableInteractionLogging;
      this._enableStackdriverLogging = value.enableStackdriverLogging;
    }
  }

  // enable_consent_based_redaction - computed: false, optional: true, required: false
  private _enableConsentBasedRedaction?: boolean | cdktf.IResolvable; 
  public get enableConsentBasedRedaction() {
    return this.getBooleanAttribute('enable_consent_based_redaction');
  }
  public set enableConsentBasedRedaction(value: boolean | cdktf.IResolvable) {
    this._enableConsentBasedRedaction = value;
  }
  public resetEnableConsentBasedRedaction() {
    this._enableConsentBasedRedaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsentBasedRedactionInput() {
    return this._enableConsentBasedRedaction;
  }

  // enable_interaction_logging - computed: false, optional: true, required: false
  private _enableInteractionLogging?: boolean | cdktf.IResolvable; 
  public get enableInteractionLogging() {
    return this.getBooleanAttribute('enable_interaction_logging');
  }
  public set enableInteractionLogging(value: boolean | cdktf.IResolvable) {
    this._enableInteractionLogging = value;
  }
  public resetEnableInteractionLogging() {
    this._enableInteractionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInteractionLoggingInput() {
    return this._enableInteractionLogging;
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
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettings {
  /**
  * Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#endpointer_sensitivity DialogflowCxFlow#endpointer_sensitivity}
  */
  readonly endpointerSensitivity?: number;
  /**
  * Mapping from language to Speech-to-Text model. The mapped Speech-to-Text model will be selected for requests from its corresponding language. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models).
  * An object containing a list of **"key": value** pairs. Example: **{ "name": "wrench", "mass": "1.3kg", "count": "3" }**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#models DialogflowCxFlow#models}
  */
  readonly models?: { [key: string]: string };
  /**
  * Timeout before detecting no speech.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.500s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#no_speech_timeout DialogflowCxFlow#no_speech_timeout}
  */
  readonly noSpeechTimeout?: string;
  /**
  * Use timeout based endpointing, interpreting endpointer sensitivity as seconds of timeout value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#use_timeout_based_endpointing DialogflowCxFlow#use_timeout_based_endpointing}
  */
  readonly useTimeoutBasedEndpointing?: boolean | cdktf.IResolvable;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettingsToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettingsOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpointer_sensitivity: cdktf.numberToTerraform(struct!.endpointerSensitivity),
    models: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.models),
    no_speech_timeout: cdktf.stringToTerraform(struct!.noSpeechTimeout),
    use_timeout_based_endpointing: cdktf.booleanToTerraform(struct!.useTimeoutBasedEndpointing),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettingsToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettingsOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpointer_sensitivity: {
      value: cdktf.numberToHclTerraform(struct!.endpointerSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    models: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.models),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    no_speech_timeout: {
      value: cdktf.stringToHclTerraform(struct!.noSpeechTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_timeout_based_endpointing: {
      value: cdktf.booleanToHclTerraform(struct!.useTimeoutBasedEndpointing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointerSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointerSensitivity = this._endpointerSensitivity;
    }
    if (this._models !== undefined) {
      hasAnyValues = true;
      internalValueResult.models = this._models;
    }
    if (this._noSpeechTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSpeechTimeout = this._noSpeechTimeout;
    }
    if (this._useTimeoutBasedEndpointing !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTimeoutBasedEndpointing = this._useTimeoutBasedEndpointing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointerSensitivity = undefined;
      this._models = undefined;
      this._noSpeechTimeout = undefined;
      this._useTimeoutBasedEndpointing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointerSensitivity = value.endpointerSensitivity;
      this._models = value.models;
      this._noSpeechTimeout = value.noSpeechTimeout;
      this._useTimeoutBasedEndpointing = value.useTimeoutBasedEndpointing;
    }
  }

  // endpointer_sensitivity - computed: false, optional: true, required: false
  private _endpointerSensitivity?: number; 
  public get endpointerSensitivity() {
    return this.getNumberAttribute('endpointer_sensitivity');
  }
  public set endpointerSensitivity(value: number) {
    this._endpointerSensitivity = value;
  }
  public resetEndpointerSensitivity() {
    this._endpointerSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointerSensitivityInput() {
    return this._endpointerSensitivity;
  }

  // models - computed: false, optional: true, required: false
  private _models?: { [key: string]: string }; 
  public get models() {
    return this.getStringMapAttribute('models');
  }
  public set models(value: { [key: string]: string }) {
    this._models = value;
  }
  public resetModels() {
    this._models = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelsInput() {
    return this._models;
  }

  // no_speech_timeout - computed: false, optional: true, required: false
  private _noSpeechTimeout?: string; 
  public get noSpeechTimeout() {
    return this.getStringAttribute('no_speech_timeout');
  }
  public set noSpeechTimeout(value: string) {
    this._noSpeechTimeout = value;
  }
  public resetNoSpeechTimeout() {
    this._noSpeechTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSpeechTimeoutInput() {
    return this._noSpeechTimeout;
  }

  // use_timeout_based_endpointing - computed: false, optional: true, required: false
  private _useTimeoutBasedEndpointing?: boolean | cdktf.IResolvable; 
  public get useTimeoutBasedEndpointing() {
    return this.getBooleanAttribute('use_timeout_based_endpointing');
  }
  public set useTimeoutBasedEndpointing(value: boolean | cdktf.IResolvable) {
    this._useTimeoutBasedEndpointing = value;
  }
  public resetUseTimeoutBasedEndpointing() {
    this._useTimeoutBasedEndpointing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTimeoutBasedEndpointingInput() {
    return this._useTimeoutBasedEndpointing;
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettings {
  /**
  * dtmf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#dtmf_settings DialogflowCxFlow#dtmf_settings}
  */
  readonly dtmfSettings?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettings;
  /**
  * logging_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#logging_settings DialogflowCxFlow#logging_settings}
  */
  readonly loggingSettings?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettings;
  /**
  * speech_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#speech_settings DialogflowCxFlow#speech_settings}
  */
  readonly speechSettings?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettings;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dtmf_settings: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettingsToTerraform(struct!.dtmfSettings),
    logging_settings: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettingsToTerraform(struct!.loggingSettings),
    speech_settings: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettingsToTerraform(struct!.speechSettings),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dtmf_settings: {
      value: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettingsToHclTerraform(struct!.dtmfSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettingsList",
    },
    logging_settings: {
      value: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettingsToHclTerraform(struct!.loggingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettingsList",
    },
    speech_settings: {
      value: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettingsToHclTerraform(struct!.speechSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dtmfSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtmfSettings = this._dtmfSettings?.internalValue;
    }
    if (this._loggingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingSettings = this._loggingSettings?.internalValue;
    }
    if (this._speechSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.speechSettings = this._speechSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dtmfSettings.internalValue = undefined;
      this._loggingSettings.internalValue = undefined;
      this._speechSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dtmfSettings.internalValue = value.dtmfSettings;
      this._loggingSettings.internalValue = value.loggingSettings;
      this._speechSettings.internalValue = value.speechSettings;
    }
  }

  // dtmf_settings - computed: false, optional: true, required: false
  private _dtmfSettings = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettingsOutputReference(this, "dtmf_settings");
  public get dtmfSettings() {
    return this._dtmfSettings;
  }
  public putDtmfSettings(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsDtmfSettings) {
    this._dtmfSettings.internalValue = value;
  }
  public resetDtmfSettings() {
    this._dtmfSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfSettingsInput() {
    return this._dtmfSettings.internalValue;
  }

  // logging_settings - computed: false, optional: true, required: false
  private _loggingSettings = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettingsOutputReference(this, "logging_settings");
  public get loggingSettings() {
    return this._loggingSettings;
  }
  public putLoggingSettings(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsLoggingSettings) {
    this._loggingSettings.internalValue = value;
  }
  public resetLoggingSettings() {
    this._loggingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSettingsInput() {
    return this._loggingSettings.internalValue;
  }

  // speech_settings - computed: false, optional: true, required: false
  private _speechSettings = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettingsOutputReference(this, "speech_settings");
  public get speechSettings() {
    return this._speechSettings;
  }
  public putSpeechSettings(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsSpeechSettings) {
    this._speechSettings.internalValue = value;
  }
  public resetSpeechSettings() {
    this._speechSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speechSettingsInput() {
    return this._speechSettings.internalValue;
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#cases DialogflowCxFlow#cases}
  */
  readonly cases?: string;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCasesToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCasesToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cases: {
      value: cdktf.stringToHclTerraform(struct!.cases),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cases !== undefined) {
      hasAnyValues = true;
      internalValueResult.cases = this._cases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cases = value.cases;
    }
  }

  // cases - computed: false, optional: true, required: false
  private _cases?: string; 
  public get cases() {
    return this.getStringAttribute('cases');
  }
  public set cases(value: string) {
    this._cases = value;
  }
  public resetCases() {
    this._cases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casesInput() {
    return this._cases;
  }
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCasesOutputReference {
    return new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesEndInteraction {
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesEndInteractionToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesEndInteraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesEndInteractionToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesEndInteraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesEndInteractionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesEndInteraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesEndInteraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesEndInteractionList extends cdktf.ComplexList {

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
  public get(index: number): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesEndInteractionOutputReference {
    return new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesEndInteractionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioSegments {
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioSegmentsToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioSegmentsToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioSegments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // audio - computed: true, optional: false, required: false
  public get audio() {
    return this.getStringAttribute('audio');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioSegmentsList extends cdktf.ComplexList {

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
  public get(index: number): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioSegmentsOutputReference {
    return new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudio {
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // segments - computed: true, optional: false, required: false
  private _segments = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioSegmentsList(this, "segments", false);
  public get segments() {
    return this._segments;
  }
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioList extends cdktf.ComplexList {

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
  public get(index: number): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioOutputReference {
    return new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#metadata DialogflowCxFlow#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccessToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCard {
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCardToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCardOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCardToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCardOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#metadata DialogflowCxFlow#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  * This field is part of a union field 'source': Only one of 'text' or 'ssml' may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#ssml DialogflowCxFlow#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  * This field is part of a union field 'source': Only one of 'text' or 'ssml' may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}
  */
  readonly text?: string;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssml: {
      value: cdktf.stringToHclTerraform(struct!.ssml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssml !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssml = this._ssml;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ssml = undefined;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ssml = value.ssml;
      this._text = value.text;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // ssml - computed: false, optional: true, required: false
  private _ssml?: string; 
  public get ssml() {
    return this.getStringAttribute('ssml');
  }
  public set ssml(value: string) {
    this._ssml = value;
  }
  public resetSsml() {
    this._ssml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlInput() {
    return this._ssml;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#audio_uri DialogflowCxFlow#audio_uri}
  */
  readonly audioUri: string;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudioToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudioOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudioOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_uri: {
      value: cdktf.stringToHclTerraform(struct!.audioUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioUri = value.audioUri;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // audio_uri - computed: false, optional: false, required: true
  private _audioUri?: string; 
  public get audioUri() {
    return this.getStringAttribute('audio_uri');
  }
  public set audioUri(value: string) {
    this._audioUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioUriInput() {
    return this._audioUri;
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#phone_number DialogflowCxFlow#phone_number}
  */
  readonly phoneNumber: string;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._phoneNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesText {
  /**
  * A collection of text response variants. If multiple variants are defined, only one text response variant is returned at runtime.
  * required: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}
  */
  readonly text?: string[];
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTextToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTextOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTextToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTextOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.text),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // text - computed: false, optional: true, required: false
  private _text?: string[]; 
  public get text() {
    return this.getListAttribute('text');
  }
  public set text(value: string[]) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#channel DialogflowCxFlow#channel}
  */
  readonly channel?: string;
  /**
  * Returns a response containing a custom, platform-specific payload.
  * This field is part of a union field 'message': Only one of 'text', 'payload', 'conversationSuccess', 'outputAudioText', 'liveAgentHandoff', 'endInteraction', 'playAudio', 'mixedAudio', 'telephonyTransferCall', or 'knowledgeInfoCard' may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#payload DialogflowCxFlow#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#conversation_success DialogflowCxFlow#conversation_success}
  */
  readonly conversationSuccess?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccess;
  /**
  * knowledge_info_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#knowledge_info_card DialogflowCxFlow#knowledge_info_card}
  */
  readonly knowledgeInfoCard?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCard;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#live_agent_handoff DialogflowCxFlow#live_agent_handoff}
  */
  readonly liveAgentHandoff?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#output_audio_text DialogflowCxFlow#output_audio_text}
  */
  readonly outputAudioText?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#play_audio DialogflowCxFlow#play_audio}
  */
  readonly playAudio?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#telephony_transfer_call DialogflowCxFlow#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}
  */
  readonly text?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesText;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    knowledge_info_card: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCardToTerraform(struct!.knowledgeInfoCard),
    live_agent_handoff: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conversation_success: {
      value: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccessList",
    },
    knowledge_info_card: {
      value: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCardToHclTerraform(struct!.knowledgeInfoCard),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCardList",
    },
    live_agent_handoff: {
      value: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._conversationSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationSuccess = this._conversationSuccess?.internalValue;
    }
    if (this._knowledgeInfoCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeInfoCard = this._knowledgeInfoCard?.internalValue;
    }
    if (this._liveAgentHandoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveAgentHandoff = this._liveAgentHandoff?.internalValue;
    }
    if (this._outputAudioText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAudioText = this._outputAudioText?.internalValue;
    }
    if (this._playAudio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playAudio = this._playAudio?.internalValue;
    }
    if (this._telephonyTransferCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telephonyTransferCall = this._telephonyTransferCall?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._payload = undefined;
      this._conversationSuccess.internalValue = undefined;
      this._knowledgeInfoCard.internalValue = undefined;
      this._liveAgentHandoff.internalValue = undefined;
      this._outputAudioText.internalValue = undefined;
      this._playAudio.internalValue = undefined;
      this._telephonyTransferCall.internalValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._payload = value.payload;
      this._conversationSuccess.internalValue = value.conversationSuccess;
      this._knowledgeInfoCard.internalValue = value.knowledgeInfoCard;
      this._liveAgentHandoff.internalValue = value.liveAgentHandoff;
      this._outputAudioText.internalValue = value.outputAudioText;
      this._playAudio.internalValue = value.playAudio;
      this._telephonyTransferCall.internalValue = value.telephonyTransferCall;
      this._text.internalValue = value.text;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // end_interaction - computed: true, optional: false, required: false
  private _endInteraction = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesEndInteractionList(this, "end_interaction", false);
  public get endInteraction() {
    return this._endInteraction;
  }

  // mixed_audio - computed: true, optional: false, required: false
  private _mixedAudio = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesMixedAudioList(this, "mixed_audio", false);
  public get mixedAudio() {
    return this._mixedAudio;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // conversation_success - computed: false, optional: true, required: false
  private _conversationSuccess = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesConversationSuccess) {
    this._conversationSuccess.internalValue = value;
  }
  public resetConversationSuccess() {
    this._conversationSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationSuccessInput() {
    return this._conversationSuccess.internalValue;
  }

  // knowledge_info_card - computed: false, optional: true, required: false
  private _knowledgeInfoCard = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCardOutputReference(this, "knowledge_info_card");
  public get knowledgeInfoCard() {
    return this._knowledgeInfoCard;
  }
  public putKnowledgeInfoCard(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesKnowledgeInfoCard) {
    this._knowledgeInfoCard.internalValue = value;
  }
  public resetKnowledgeInfoCard() {
    this._knowledgeInfoCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeInfoCardInput() {
    return this._knowledgeInfoCard.internalValue;
  }

  // live_agent_handoff - computed: false, optional: true, required: false
  private _liveAgentHandoff = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesLiveAgentHandoff) {
    this._liveAgentHandoff.internalValue = value;
  }
  public resetLiveAgentHandoff() {
    this._liveAgentHandoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveAgentHandoffInput() {
    return this._liveAgentHandoff.internalValue;
  }

  // output_audio_text - computed: false, optional: true, required: false
  private _outputAudioText = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputAudioText) {
    this._outputAudioText.internalValue = value;
  }
  public resetOutputAudioText() {
    this._outputAudioText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputAudioTextInput() {
    return this._outputAudioText.internalValue;
  }

  // play_audio - computed: false, optional: true, required: false
  private _playAudio = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesPlayAudio) {
    this._playAudio.internalValue = value;
  }
  public resetPlayAudio() {
    this._playAudio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playAudioInput() {
    return this._playAudio.internalValue;
  }

  // telephony_transfer_call - computed: false, optional: true, required: false
  private _telephonyTransferCall = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTelephonyTransferCall) {
    this._telephonyTransferCall.internalValue = value;
  }
  public resetTelephonyTransferCall() {
    this._telephonyTransferCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telephonyTransferCallInput() {
    return this._telephonyTransferCall.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputReference {
    return new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#parameter DialogflowCxFlow#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#value DialogflowCxFlow#value}
  */
  readonly value?: string;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActionsToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActionsToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameter = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameter = value.parameter;
      this._value = value.value;
    }
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActionsOutputReference {
    return new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillment {
  /**
  * If the flag is true, the agent will utilize LLM to generate a text response. If LLM generation fails, the defined responses in the fulfillment will be respected. This flag is only useful for fulfillments associated with no-match event handlers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#enable_generative_fallback DialogflowCxFlow#enable_generative_fallback}
  */
  readonly enableGenerativeFallback?: boolean | cdktf.IResolvable;
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#return_partial_responses DialogflowCxFlow#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#tag DialogflowCxFlow#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#webhook DialogflowCxFlow#webhook}
  */
  readonly webhook?: string;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#advanced_settings DialogflowCxFlow#advanced_settings}
  */
  readonly advancedSettings?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettings;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#conditional_cases DialogflowCxFlow#conditional_cases}
  */
  readonly conditionalCases?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#messages DialogflowCxFlow#messages}
  */
  readonly messages?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#set_parameter_actions DialogflowCxFlow#set_parameter_actions}
  */
  readonly setParameterActions?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_generative_fallback: cdktf.booleanToTerraform(struct!.enableGenerativeFallback),
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    advanced_settings: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsToTerraform(struct!.advancedSettings),
    conditional_cases: cdktf.listMapper(dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentOutputReference | DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_generative_fallback: {
      value: cdktf.booleanToHclTerraform(struct!.enableGenerativeFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    return_partial_responses: {
      value: cdktf.booleanToHclTerraform(struct!.returnPartialResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: cdktf.stringToHclTerraform(struct!.webhook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_settings: {
      value: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsToHclTerraform(struct!.advancedSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsList",
    },
    conditional_cases: {
      value: cdktf.listMapperHcl(dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableGenerativeFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGenerativeFallback = this._enableGenerativeFallback;
    }
    if (this._returnPartialResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnPartialResponses = this._returnPartialResponses;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._webhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook;
    }
    if (this._advancedSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSettings = this._advancedSettings?.internalValue;
    }
    if (this._conditionalCases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalCases = this._conditionalCases?.internalValue;
    }
    if (this._messages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages?.internalValue;
    }
    if (this._setParameterActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setParameterActions = this._setParameterActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableGenerativeFallback = undefined;
      this._returnPartialResponses = undefined;
      this._tag = undefined;
      this._webhook = undefined;
      this._advancedSettings.internalValue = undefined;
      this._conditionalCases.internalValue = undefined;
      this._messages.internalValue = undefined;
      this._setParameterActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableGenerativeFallback = value.enableGenerativeFallback;
      this._returnPartialResponses = value.returnPartialResponses;
      this._tag = value.tag;
      this._webhook = value.webhook;
      this._advancedSettings.internalValue = value.advancedSettings;
      this._conditionalCases.internalValue = value.conditionalCases;
      this._messages.internalValue = value.messages;
      this._setParameterActions.internalValue = value.setParameterActions;
    }
  }

  // enable_generative_fallback - computed: false, optional: true, required: false
  private _enableGenerativeFallback?: boolean | cdktf.IResolvable; 
  public get enableGenerativeFallback() {
    return this.getBooleanAttribute('enable_generative_fallback');
  }
  public set enableGenerativeFallback(value: boolean | cdktf.IResolvable) {
    this._enableGenerativeFallback = value;
  }
  public resetEnableGenerativeFallback() {
    this._enableGenerativeFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGenerativeFallbackInput() {
    return this._enableGenerativeFallback;
  }

  // return_partial_responses - computed: false, optional: true, required: false
  private _returnPartialResponses?: boolean | cdktf.IResolvable; 
  public get returnPartialResponses() {
    return this.getBooleanAttribute('return_partial_responses');
  }
  public set returnPartialResponses(value: boolean | cdktf.IResolvable) {
    this._returnPartialResponses = value;
  }
  public resetReturnPartialResponses() {
    this._returnPartialResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnPartialResponsesInput() {
    return this._returnPartialResponses;
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

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // conditional_cases - computed: false, optional: true, required: false
  private _conditionalCases = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentConditionalCases[] | cdktf.IResolvable) {
    this._conditionalCases.internalValue = value;
  }
  public resetConditionalCases() {
    this._conditionalCases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalCasesInput() {
    return this._conditionalCases.internalValue;
  }

  // messages - computed: false, optional: true, required: false
  private _messages = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentMessages[] | cdktf.IResolvable) {
    this._messages.internalValue = value;
  }
  public resetMessages() {
    this._messages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages.internalValue;
  }

  // set_parameter_actions - computed: false, optional: true, required: false
  private _setParameterActions = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable) {
    this._setParameterActions.internalValue = value;
  }
  public resetSetParameterActions() {
    this._setParameterActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setParameterActionsInput() {
    return this._setParameterActions.internalValue;
  }
}
export interface DialogflowCxFlowKnowledgeConnectorSettings {
  /**
  * Whether Knowledge Connector is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#enabled DialogflowCxFlow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The target flow to transition to. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/flows/<FlowID>.
  * This field is part of a union field 'target': Only one of 'targetPage' or 'targetFlow' may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#target_flow DialogflowCxFlow#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/flows/<FlowID>/pages/<PageID>.
  * The page must be in the same host flow (the flow that owns this 'KnowledgeConnectorSettings').
  * This field is part of a union field 'target': Only one of 'targetPage' or 'targetFlow' may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#target_page DialogflowCxFlow#target_page}
  */
  readonly targetPage?: string;
  /**
  * data_store_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#data_store_connections DialogflowCxFlow#data_store_connections}
  */
  readonly dataStoreConnections?: DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnections[] | cdktf.IResolvable;
  /**
  * trigger_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#trigger_fulfillment DialogflowCxFlow#trigger_fulfillment}
  */
  readonly triggerFulfillment?: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillment;
}

export function dialogflowCxFlowKnowledgeConnectorSettingsToTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsOutputReference | DialogflowCxFlowKnowledgeConnectorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    data_store_connections: cdktf.listMapper(dialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnectionsToTerraform, true)(struct!.dataStoreConnections),
    trigger_fulfillment: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentToTerraform(struct!.triggerFulfillment),
  }
}


export function dialogflowCxFlowKnowledgeConnectorSettingsToHclTerraform(struct?: DialogflowCxFlowKnowledgeConnectorSettingsOutputReference | DialogflowCxFlowKnowledgeConnectorSettings): any {
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
    target_flow: {
      value: cdktf.stringToHclTerraform(struct!.targetFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_page: {
      value: cdktf.stringToHclTerraform(struct!.targetPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store_connections: {
      value: cdktf.listMapperHcl(dialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnectionsToHclTerraform, true)(struct!.dataStoreConnections),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnectionsList",
    },
    trigger_fulfillment: {
      value: dialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentToHclTerraform(struct!.triggerFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowKnowledgeConnectorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowKnowledgeConnectorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._targetFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFlow = this._targetFlow;
    }
    if (this._targetPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPage = this._targetPage;
    }
    if (this._dataStoreConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreConnections = this._dataStoreConnections?.internalValue;
    }
    if (this._triggerFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerFulfillment = this._triggerFulfillment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowKnowledgeConnectorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._targetFlow = undefined;
      this._targetPage = undefined;
      this._dataStoreConnections.internalValue = undefined;
      this._triggerFulfillment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._targetFlow = value.targetFlow;
      this._targetPage = value.targetPage;
      this._dataStoreConnections.internalValue = value.dataStoreConnections;
      this._triggerFulfillment.internalValue = value.triggerFulfillment;
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

  // target_flow - computed: false, optional: true, required: false
  private _targetFlow?: string; 
  public get targetFlow() {
    return this.getStringAttribute('target_flow');
  }
  public set targetFlow(value: string) {
    this._targetFlow = value;
  }
  public resetTargetFlow() {
    this._targetFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFlowInput() {
    return this._targetFlow;
  }

  // target_page - computed: false, optional: true, required: false
  private _targetPage?: string; 
  public get targetPage() {
    return this.getStringAttribute('target_page');
  }
  public set targetPage(value: string) {
    this._targetPage = value;
  }
  public resetTargetPage() {
    this._targetPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPageInput() {
    return this._targetPage;
  }

  // data_store_connections - computed: false, optional: true, required: false
  private _dataStoreConnections = new DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnectionsList(this, "data_store_connections", false);
  public get dataStoreConnections() {
    return this._dataStoreConnections;
  }
  public putDataStoreConnections(value: DialogflowCxFlowKnowledgeConnectorSettingsDataStoreConnections[] | cdktf.IResolvable) {
    this._dataStoreConnections.internalValue = value;
  }
  public resetDataStoreConnections() {
    this._dataStoreConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreConnectionsInput() {
    return this._dataStoreConnections.internalValue;
  }

  // trigger_fulfillment - computed: false, optional: true, required: false
  private _triggerFulfillment = new DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillmentOutputReference(this, "trigger_fulfillment");
  public get triggerFulfillment() {
    return this._triggerFulfillment;
  }
  public putTriggerFulfillment(value: DialogflowCxFlowKnowledgeConnectorSettingsTriggerFulfillment) {
    this._triggerFulfillment.internalValue = value;
  }
  public resetTriggerFulfillment() {
    this._triggerFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerFulfillmentInput() {
    return this._triggerFulfillment.internalValue;
  }
}
export interface DialogflowCxFlowNluSettings {
  /**
  * To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.
  * If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#classification_threshold DialogflowCxFlow#classification_threshold}
  */
  readonly classificationThreshold?: number;
  /**
  * Indicates NLU model training mode.
  * * MODEL_TRAINING_MODE_AUTOMATIC: NLU model training is automatically triggered when a flow gets modified. User can also manually trigger model training in this mode.
  * * MODEL_TRAINING_MODE_MANUAL: User needs to manually trigger NLU model training. Best for large flows whose models take long time to train. Possible values: ["MODEL_TRAINING_MODE_AUTOMATIC", "MODEL_TRAINING_MODE_MANUAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#model_training_mode DialogflowCxFlow#model_training_mode}
  */
  readonly modelTrainingMode?: string;
  /**
  * Indicates the type of NLU model.
  * * MODEL_TYPE_STANDARD: Use standard NLU model.
  * * MODEL_TYPE_ADVANCED: Use advanced NLU model. Possible values: ["MODEL_TYPE_STANDARD", "MODEL_TYPE_ADVANCED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#model_type DialogflowCxFlow#model_type}
  */
  readonly modelType?: string;
}

export function dialogflowCxFlowNluSettingsToTerraform(struct?: DialogflowCxFlowNluSettingsOutputReference | DialogflowCxFlowNluSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification_threshold: cdktf.numberToTerraform(struct!.classificationThreshold),
    model_training_mode: cdktf.stringToTerraform(struct!.modelTrainingMode),
    model_type: cdktf.stringToTerraform(struct!.modelType),
  }
}


export function dialogflowCxFlowNluSettingsToHclTerraform(struct?: DialogflowCxFlowNluSettingsOutputReference | DialogflowCxFlowNluSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classification_threshold: {
      value: cdktf.numberToHclTerraform(struct!.classificationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_training_mode: {
      value: cdktf.stringToHclTerraform(struct!.modelTrainingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowNluSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowNluSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classificationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationThreshold = this._classificationThreshold;
    }
    if (this._modelTrainingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelTrainingMode = this._modelTrainingMode;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowNluSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classificationThreshold = undefined;
      this._modelTrainingMode = undefined;
      this._modelType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classificationThreshold = value.classificationThreshold;
      this._modelTrainingMode = value.modelTrainingMode;
      this._modelType = value.modelType;
    }
  }

  // classification_threshold - computed: false, optional: true, required: false
  private _classificationThreshold?: number; 
  public get classificationThreshold() {
    return this.getNumberAttribute('classification_threshold');
  }
  public set classificationThreshold(value: number) {
    this._classificationThreshold = value;
  }
  public resetClassificationThreshold() {
    this._classificationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationThresholdInput() {
    return this._classificationThreshold;
  }

  // model_training_mode - computed: false, optional: true, required: false
  private _modelTrainingMode?: string; 
  public get modelTrainingMode() {
    return this.getStringAttribute('model_training_mode');
  }
  public set modelTrainingMode(value: string) {
    this._modelTrainingMode = value;
  }
  public resetModelTrainingMode() {
    this._modelTrainingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTrainingModeInput() {
    return this._modelTrainingMode;
  }

  // model_type - computed: false, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }
}
export interface DialogflowCxFlowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#create DialogflowCxFlow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#delete DialogflowCxFlow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#update DialogflowCxFlow#update}
  */
  readonly update?: string;
}

export function dialogflowCxFlowTimeoutsToTerraform(struct?: DialogflowCxFlowTimeouts | cdktf.IResolvable): any {
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


export function dialogflowCxFlowTimeoutsToHclTerraform(struct?: DialogflowCxFlowTimeouts | cdktf.IResolvable): any {
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

export class DialogflowCxFlowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCxFlowTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxFlowTimeouts | cdktf.IResolvable | undefined) {
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
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#cases DialogflowCxFlow#cases}
  */
  readonly cases?: string;
}

export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesToHclTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cases: {
      value: cdktf.stringToHclTerraform(struct!.cases),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cases !== undefined) {
      hasAnyValues = true;
      internalValueResult.cases = this._cases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cases = value.cases;
    }
  }

  // cases - computed: false, optional: true, required: false
  private _cases?: string; 
  public get cases() {
    return this.getStringAttribute('cases');
  }
  public set cases(value: string) {
    this._cases = value;
  }
  public resetCases() {
    this._cases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casesInput() {
    return this._cases;
  }
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference {
    return new DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#metadata DialogflowCxFlow#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#metadata DialogflowCxFlow#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#ssml DialogflowCxFlow#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}
  */
  readonly text?: string;
}

export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssml: {
      value: cdktf.stringToHclTerraform(struct!.ssml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssml !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssml = this._ssml;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ssml = undefined;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ssml = value.ssml;
      this._text = value.text;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // ssml - computed: false, optional: true, required: false
  private _ssml?: string; 
  public get ssml() {
    return this.getStringAttribute('ssml');
  }
  public set ssml(value: string) {
    this._ssml = value;
  }
  public resetSsml() {
    this._ssml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlInput() {
    return this._ssml;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#audio_uri DialogflowCxFlow#audio_uri}
  */
  readonly audioUri: string;
}

export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_uri: {
      value: cdktf.stringToHclTerraform(struct!.audioUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioUri = value.audioUri;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // audio_uri - computed: false, optional: false, required: true
  private _audioUri?: string; 
  public get audioUri() {
    return this.getStringAttribute('audio_uri');
  }
  public set audioUri(value: string) {
    this._audioUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioUriInput() {
    return this._audioUri;
  }
}
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#phone_number DialogflowCxFlow#phone_number}
  */
  readonly phoneNumber: string;
}

export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._phoneNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}
  */
  readonly text?: string[];
}

export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextToHclTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.text),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // text - computed: false, optional: true, required: false
  private _text?: string[]; 
  public get text() {
    return this.getListAttribute('text');
  }
  public set text(value: string[]) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#channel DialogflowCxFlow#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#payload DialogflowCxFlow#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#conversation_success DialogflowCxFlow#conversation_success}
  */
  readonly conversationSuccess?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#live_agent_handoff DialogflowCxFlow#live_agent_handoff}
  */
  readonly liveAgentHandoff?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#output_audio_text DialogflowCxFlow#output_audio_text}
  */
  readonly outputAudioText?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#play_audio DialogflowCxFlow#play_audio}
  */
  readonly playAudio?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#telephony_transfer_call DialogflowCxFlow#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}
  */
  readonly text?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText;
}

export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesToHclTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conversation_success: {
      value: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._conversationSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationSuccess = this._conversationSuccess?.internalValue;
    }
    if (this._liveAgentHandoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveAgentHandoff = this._liveAgentHandoff?.internalValue;
    }
    if (this._outputAudioText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAudioText = this._outputAudioText?.internalValue;
    }
    if (this._playAudio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playAudio = this._playAudio?.internalValue;
    }
    if (this._telephonyTransferCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telephonyTransferCall = this._telephonyTransferCall?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._payload = undefined;
      this._conversationSuccess.internalValue = undefined;
      this._liveAgentHandoff.internalValue = undefined;
      this._outputAudioText.internalValue = undefined;
      this._playAudio.internalValue = undefined;
      this._telephonyTransferCall.internalValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._payload = value.payload;
      this._conversationSuccess.internalValue = value.conversationSuccess;
      this._liveAgentHandoff.internalValue = value.liveAgentHandoff;
      this._outputAudioText.internalValue = value.outputAudioText;
      this._playAudio.internalValue = value.playAudio;
      this._telephonyTransferCall.internalValue = value.telephonyTransferCall;
      this._text.internalValue = value.text;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // conversation_success - computed: false, optional: true, required: false
  private _conversationSuccess = new DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess) {
    this._conversationSuccess.internalValue = value;
  }
  public resetConversationSuccess() {
    this._conversationSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationSuccessInput() {
    return this._conversationSuccess.internalValue;
  }

  // live_agent_handoff - computed: false, optional: true, required: false
  private _liveAgentHandoff = new DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff) {
    this._liveAgentHandoff.internalValue = value;
  }
  public resetLiveAgentHandoff() {
    this._liveAgentHandoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveAgentHandoffInput() {
    return this._liveAgentHandoff.internalValue;
  }

  // output_audio_text - computed: false, optional: true, required: false
  private _outputAudioText = new DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText) {
    this._outputAudioText.internalValue = value;
  }
  public resetOutputAudioText() {
    this._outputAudioText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputAudioTextInput() {
    return this._outputAudioText.internalValue;
  }

  // play_audio - computed: false, optional: true, required: false
  private _playAudio = new DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio) {
    this._playAudio.internalValue = value;
  }
  public resetPlayAudio() {
    this._playAudio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playAudioInput() {
    return this._playAudio.internalValue;
  }

  // telephony_transfer_call - computed: false, optional: true, required: false
  private _telephonyTransferCall = new DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall) {
    this._telephonyTransferCall.internalValue = value;
  }
  public resetTelephonyTransferCall() {
    this._telephonyTransferCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telephonyTransferCallInput() {
    return this._telephonyTransferCall.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference {
    return new DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#parameter DialogflowCxFlow#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#value DialogflowCxFlow#value}
  */
  readonly value?: string;
}

export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsToHclTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameter = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameter = value.parameter;
      this._value = value.value;
    }
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference {
    return new DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#return_partial_responses DialogflowCxFlow#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#tag DialogflowCxFlow#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#webhook DialogflowCxFlow#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#conditional_cases DialogflowCxFlow#conditional_cases}
  */
  readonly conditionalCases?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#messages DialogflowCxFlow#messages}
  */
  readonly messages?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#set_parameter_actions DialogflowCxFlow#set_parameter_actions}
  */
  readonly setParameterActions?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(dialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(dialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentToHclTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_partial_responses: {
      value: cdktf.booleanToHclTerraform(struct!.returnPartialResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: cdktf.stringToHclTerraform(struct!.webhook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditional_cases: {
      value: cdktf.listMapperHcl(dialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(dialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxFlowTransitionRoutesTriggerFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnPartialResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnPartialResponses = this._returnPartialResponses;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._webhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook;
    }
    if (this._conditionalCases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalCases = this._conditionalCases?.internalValue;
    }
    if (this._messages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages?.internalValue;
    }
    if (this._setParameterActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setParameterActions = this._setParameterActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowTransitionRoutesTriggerFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnPartialResponses = undefined;
      this._tag = undefined;
      this._webhook = undefined;
      this._conditionalCases.internalValue = undefined;
      this._messages.internalValue = undefined;
      this._setParameterActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnPartialResponses = value.returnPartialResponses;
      this._tag = value.tag;
      this._webhook = value.webhook;
      this._conditionalCases.internalValue = value.conditionalCases;
      this._messages.internalValue = value.messages;
      this._setParameterActions.internalValue = value.setParameterActions;
    }
  }

  // return_partial_responses - computed: false, optional: true, required: false
  private _returnPartialResponses?: boolean | cdktf.IResolvable; 
  public get returnPartialResponses() {
    return this.getBooleanAttribute('return_partial_responses');
  }
  public set returnPartialResponses(value: boolean | cdktf.IResolvable) {
    this._returnPartialResponses = value;
  }
  public resetReturnPartialResponses() {
    this._returnPartialResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnPartialResponsesInput() {
    return this._returnPartialResponses;
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

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }

  // conditional_cases - computed: false, optional: true, required: false
  private _conditionalCases = new DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases[] | cdktf.IResolvable) {
    this._conditionalCases.internalValue = value;
  }
  public resetConditionalCases() {
    this._conditionalCases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalCasesInput() {
    return this._conditionalCases.internalValue;
  }

  // messages - computed: false, optional: true, required: false
  private _messages = new DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable) {
    this._messages.internalValue = value;
  }
  public resetMessages() {
    this._messages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages.internalValue;
  }

  // set_parameter_actions - computed: false, optional: true, required: false
  private _setParameterActions = new DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable) {
    this._setParameterActions.internalValue = value;
  }
  public resetSetParameterActions() {
    this._setParameterActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setParameterActionsInput() {
    return this._setParameterActions.internalValue;
  }
}
export interface DialogflowCxFlowTransitionRoutes {
  /**
  * The condition to evaluate against form parameters or session parameters.
  * At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#condition DialogflowCxFlow#condition}
  */
  readonly condition?: string;
  /**
  * The unique identifier of an Intent.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#intent DialogflowCxFlow#intent}
  */
  readonly intent?: string;
  /**
  * The target flow to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#target_flow DialogflowCxFlow#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#target_page DialogflowCxFlow#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#trigger_fulfillment DialogflowCxFlow#trigger_fulfillment}
  */
  readonly triggerFulfillment?: DialogflowCxFlowTransitionRoutesTriggerFulfillment;
}

export function dialogflowCxFlowTransitionRoutesToTerraform(struct?: DialogflowCxFlowTransitionRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    intent: cdktf.stringToTerraform(struct!.intent),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    trigger_fulfillment: dialogflowCxFlowTransitionRoutesTriggerFulfillmentToTerraform(struct!.triggerFulfillment),
  }
}


export function dialogflowCxFlowTransitionRoutesToHclTerraform(struct?: DialogflowCxFlowTransitionRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intent: {
      value: cdktf.stringToHclTerraform(struct!.intent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_flow: {
      value: cdktf.stringToHclTerraform(struct!.targetFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_page: {
      value: cdktf.stringToHclTerraform(struct!.targetPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_fulfillment: {
      value: dialogflowCxFlowTransitionRoutesTriggerFulfillmentToHclTerraform(struct!.triggerFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxFlowTransitionRoutesTriggerFulfillmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxFlowTransitionRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxFlowTransitionRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._intent !== undefined) {
      hasAnyValues = true;
      internalValueResult.intent = this._intent;
    }
    if (this._targetFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFlow = this._targetFlow;
    }
    if (this._targetPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPage = this._targetPage;
    }
    if (this._triggerFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerFulfillment = this._triggerFulfillment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowTransitionRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._intent = undefined;
      this._targetFlow = undefined;
      this._targetPage = undefined;
      this._triggerFulfillment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._intent = value.intent;
      this._targetFlow = value.targetFlow;
      this._targetPage = value.targetPage;
      this._triggerFulfillment.internalValue = value.triggerFulfillment;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // intent - computed: false, optional: true, required: false
  private _intent?: string; 
  public get intent() {
    return this.getStringAttribute('intent');
  }
  public set intent(value: string) {
    this._intent = value;
  }
  public resetIntent() {
    this._intent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_flow - computed: false, optional: true, required: false
  private _targetFlow?: string; 
  public get targetFlow() {
    return this.getStringAttribute('target_flow');
  }
  public set targetFlow(value: string) {
    this._targetFlow = value;
  }
  public resetTargetFlow() {
    this._targetFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFlowInput() {
    return this._targetFlow;
  }

  // target_page - computed: false, optional: true, required: false
  private _targetPage?: string; 
  public get targetPage() {
    return this.getStringAttribute('target_page');
  }
  public set targetPage(value: string) {
    this._targetPage = value;
  }
  public resetTargetPage() {
    this._targetPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPageInput() {
    return this._targetPage;
  }

  // trigger_fulfillment - computed: false, optional: true, required: false
  private _triggerFulfillment = new DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference(this, "trigger_fulfillment");
  public get triggerFulfillment() {
    return this._triggerFulfillment;
  }
  public putTriggerFulfillment(value: DialogflowCxFlowTransitionRoutesTriggerFulfillment) {
    this._triggerFulfillment.internalValue = value;
  }
  public resetTriggerFulfillment() {
    this._triggerFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerFulfillmentInput() {
    return this._triggerFulfillment.internalValue;
  }
}

export class DialogflowCxFlowTransitionRoutesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxFlowTransitionRoutes[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxFlowTransitionRoutesOutputReference {
    return new DialogflowCxFlowTransitionRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow google_dialogflow_cx_flow}
*/
export class DialogflowCxFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DialogflowCxFlow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCxFlow to import
  * @param importFromId The id of the existing DialogflowCxFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCxFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_flow google_dialogflow_cx_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxFlowConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_flow',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._isDefaultStartFlow = config.isDefaultStartFlow;
    this._languageCode = config.languageCode;
    this._parent = config.parent;
    this._transitionRouteGroups = config.transitionRouteGroups;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._eventHandlers.internalValue = config.eventHandlers;
    this._knowledgeConnectorSettings.internalValue = config.knowledgeConnectorSettings;
    this._nluSettings.internalValue = config.nluSettings;
    this._timeouts.internalValue = config.timeouts;
    this._transitionRoutes.internalValue = config.transitionRoutes;
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

  // is_default_start_flow - computed: false, optional: true, required: false
  private _isDefaultStartFlow?: boolean | cdktf.IResolvable; 
  public get isDefaultStartFlow() {
    return this.getBooleanAttribute('is_default_start_flow');
  }
  public set isDefaultStartFlow(value: boolean | cdktf.IResolvable) {
    this._isDefaultStartFlow = value;
  }
  public resetIsDefaultStartFlow() {
    this._isDefaultStartFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultStartFlowInput() {
    return this._isDefaultStartFlow;
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
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

  // transition_route_groups - computed: false, optional: true, required: false
  private _transitionRouteGroups?: string[]; 
  public get transitionRouteGroups() {
    return this.getListAttribute('transition_route_groups');
  }
  public set transitionRouteGroups(value: string[]) {
    this._transitionRouteGroups = value;
  }
  public resetTransitionRouteGroups() {
    this._transitionRouteGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionRouteGroupsInput() {
    return this._transitionRouteGroups;
  }

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new DialogflowCxFlowAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: DialogflowCxFlowAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // event_handlers - computed: false, optional: true, required: false
  private _eventHandlers = new DialogflowCxFlowEventHandlersList(this, "event_handlers", false);
  public get eventHandlers() {
    return this._eventHandlers;
  }
  public putEventHandlers(value: DialogflowCxFlowEventHandlers[] | cdktf.IResolvable) {
    this._eventHandlers.internalValue = value;
  }
  public resetEventHandlers() {
    this._eventHandlers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHandlersInput() {
    return this._eventHandlers.internalValue;
  }

  // knowledge_connector_settings - computed: false, optional: true, required: false
  private _knowledgeConnectorSettings = new DialogflowCxFlowKnowledgeConnectorSettingsOutputReference(this, "knowledge_connector_settings");
  public get knowledgeConnectorSettings() {
    return this._knowledgeConnectorSettings;
  }
  public putKnowledgeConnectorSettings(value: DialogflowCxFlowKnowledgeConnectorSettings) {
    this._knowledgeConnectorSettings.internalValue = value;
  }
  public resetKnowledgeConnectorSettings() {
    this._knowledgeConnectorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeConnectorSettingsInput() {
    return this._knowledgeConnectorSettings.internalValue;
  }

  // nlu_settings - computed: false, optional: true, required: false
  private _nluSettings = new DialogflowCxFlowNluSettingsOutputReference(this, "nlu_settings");
  public get nluSettings() {
    return this._nluSettings;
  }
  public putNluSettings(value: DialogflowCxFlowNluSettings) {
    this._nluSettings.internalValue = value;
  }
  public resetNluSettings() {
    this._nluSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nluSettingsInput() {
    return this._nluSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCxFlowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxFlowTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // transition_routes - computed: false, optional: true, required: false
  private _transitionRoutes = new DialogflowCxFlowTransitionRoutesList(this, "transition_routes", false);
  public get transitionRoutes() {
    return this._transitionRoutes;
  }
  public putTransitionRoutes(value: DialogflowCxFlowTransitionRoutes[] | cdktf.IResolvable) {
    this._transitionRoutes.internalValue = value;
  }
  public resetTransitionRoutes() {
    this._transitionRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionRoutesInput() {
    return this._transitionRoutes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_default_start_flow: cdktf.booleanToTerraform(this._isDefaultStartFlow),
      language_code: cdktf.stringToTerraform(this._languageCode),
      parent: cdktf.stringToTerraform(this._parent),
      transition_route_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitionRouteGroups),
      advanced_settings: dialogflowCxFlowAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      event_handlers: cdktf.listMapper(dialogflowCxFlowEventHandlersToTerraform, true)(this._eventHandlers.internalValue),
      knowledge_connector_settings: dialogflowCxFlowKnowledgeConnectorSettingsToTerraform(this._knowledgeConnectorSettings.internalValue),
      nlu_settings: dialogflowCxFlowNluSettingsToTerraform(this._nluSettings.internalValue),
      timeouts: dialogflowCxFlowTimeoutsToTerraform(this._timeouts.internalValue),
      transition_routes: cdktf.listMapper(dialogflowCxFlowTransitionRoutesToTerraform, true)(this._transitionRoutes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default_start_flow: {
        value: cdktf.booleanToHclTerraform(this._isDefaultStartFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      language_code: {
        value: cdktf.stringToHclTerraform(this._languageCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transition_route_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitionRouteGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      advanced_settings: {
        value: dialogflowCxFlowAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxFlowAdvancedSettingsList",
      },
      event_handlers: {
        value: cdktf.listMapperHcl(dialogflowCxFlowEventHandlersToHclTerraform, true)(this._eventHandlers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxFlowEventHandlersList",
      },
      knowledge_connector_settings: {
        value: dialogflowCxFlowKnowledgeConnectorSettingsToHclTerraform(this._knowledgeConnectorSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxFlowKnowledgeConnectorSettingsList",
      },
      nlu_settings: {
        value: dialogflowCxFlowNluSettingsToHclTerraform(this._nluSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxFlowNluSettingsList",
      },
      timeouts: {
        value: dialogflowCxFlowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCxFlowTimeouts",
      },
      transition_routes: {
        value: cdktf.listMapperHcl(dialogflowCxFlowTransitionRoutesToHclTerraform, true)(this._transitionRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxFlowTransitionRoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
