/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowConversationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required. Human readable name for this profile. Max length 1024 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#display_name DialogflowConversationProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#id DialogflowConversationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Language code for the conversation profile. This should be a BCP-47 language tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#language_code DialogflowConversationProfile#language_code}
  */
  readonly languageCode?: string;
  /**
  * desc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#location DialogflowConversationProfile#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#project DialogflowConversationProfile#project}
  */
  readonly project?: string;
  /**
  * Name of the CX SecuritySettings reference for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#security_settings DialogflowConversationProfile#security_settings}
  */
  readonly securitySettings?: string;
  /**
  * The time zone of this conversational profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#time_zone DialogflowConversationProfile#time_zone}
  */
  readonly timeZone?: string;
  /**
  * automated_agent_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#automated_agent_config DialogflowConversationProfile#automated_agent_config}
  */
  readonly automatedAgentConfig?: DialogflowConversationProfileAutomatedAgentConfig;
  /**
  * human_agent_assistant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#human_agent_assistant_config DialogflowConversationProfile#human_agent_assistant_config}
  */
  readonly humanAgentAssistantConfig?: DialogflowConversationProfileHumanAgentAssistantConfig;
  /**
  * human_agent_handoff_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#human_agent_handoff_config DialogflowConversationProfile#human_agent_handoff_config}
  */
  readonly humanAgentHandoffConfig?: DialogflowConversationProfileHumanAgentHandoffConfig;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#logging_config DialogflowConversationProfile#logging_config}
  */
  readonly loggingConfig?: DialogflowConversationProfileLoggingConfig;
  /**
  * new_message_event_notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#new_message_event_notification_config DialogflowConversationProfile#new_message_event_notification_config}
  */
  readonly newMessageEventNotificationConfig?: DialogflowConversationProfileNewMessageEventNotificationConfig;
  /**
  * notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#notification_config DialogflowConversationProfile#notification_config}
  */
  readonly notificationConfig?: DialogflowConversationProfileNotificationConfig;
  /**
  * stt_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#stt_config DialogflowConversationProfile#stt_config}
  */
  readonly sttConfig?: DialogflowConversationProfileSttConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#timeouts DialogflowConversationProfile#timeouts}
  */
  readonly timeouts?: DialogflowConversationProfileTimeouts;
  /**
  * tts_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#tts_config DialogflowConversationProfile#tts_config}
  */
  readonly ttsConfig?: DialogflowConversationProfileTtsConfig;
}
export interface DialogflowConversationProfileAutomatedAgentConfig {
  /**
  * ID of the Dialogflow agent environment to use.
  * Expects the format "projects/<Project ID>/locations/<Location ID>/agent/environments/<EnvironmentID>"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#agent DialogflowConversationProfile#agent}
  */
  readonly agent: string;
  /**
  * Configure lifetime of the Dialogflow session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#session_ttl DialogflowConversationProfile#session_ttl}
  */
  readonly sessionTtl?: string;
}

export function dialogflowConversationProfileAutomatedAgentConfigToTerraform(struct?: DialogflowConversationProfileAutomatedAgentConfigOutputReference | DialogflowConversationProfileAutomatedAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    session_ttl: cdktf.stringToTerraform(struct!.sessionTtl),
  }
}


export function dialogflowConversationProfileAutomatedAgentConfigToHclTerraform(struct?: DialogflowConversationProfileAutomatedAgentConfigOutputReference | DialogflowConversationProfileAutomatedAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_ttl: {
      value: cdktf.stringToHclTerraform(struct!.sessionTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileAutomatedAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileAutomatedAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._sessionTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTtl = this._sessionTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileAutomatedAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
      this._sessionTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._sessionTtl = value.sessionTtl;
    }
  }

  // agent - computed: false, optional: false, required: true
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // session_ttl - computed: false, optional: true, required: false
  private _sessionTtl?: string; 
  public get sessionTtl() {
    return this.getStringAttribute('session_ttl');
  }
  public set sessionTtl(value: string) {
    this._sessionTtl = value;
  }
  public resetSessionTtl() {
    this._sessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTtlInput() {
    return this._sessionTtl;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig {
  /**
  * Version of current baseline model. It will be ignored if model is set. Valid versions are: Article Suggestion baseline model: - 0.9 - 1.0 (default) Summarization baseline model: - 1.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#baseline_model_version DialogflowConversationProfile#baseline_model_version}
  */
  readonly baselineModelVersion?: string;
  /**
  * Conversation model resource name. Format: projects/<Project ID>/conversationModels/<Model ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#model DialogflowConversationProfile#model}
  */
  readonly model?: string;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_model_version: cdktf.stringToTerraform(struct!.baselineModelVersion),
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline_model_version: {
      value: cdktf.stringToHclTerraform(struct!.baselineModelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineModelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineModelVersion = this._baselineModelVersion;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineModelVersion = undefined;
      this._model = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineModelVersion = value.baselineModelVersion;
      this._model = value.model;
    }
  }

  // baseline_model_version - computed: false, optional: true, required: false
  private _baselineModelVersion?: string; 
  public get baselineModelVersion() {
    return this.getStringAttribute('baseline_model_version');
  }
  public set baselineModelVersion(value: string) {
    this._baselineModelVersion = value;
  }
  public resetBaselineModelVersion() {
    this._baselineModelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineModelVersionInput() {
    return this._baselineModelVersion;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig {
  /**
  * Number of recent non-small-talk sentences to use as context for article and FAQ suggestion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#recent_sentences_count DialogflowConversationProfile#recent_sentences_count}
  */
  readonly recentSentencesCount?: number;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recent_sentences_count: cdktf.numberToTerraform(struct!.recentSentencesCount),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recent_sentences_count: {
      value: cdktf.numberToHclTerraform(struct!.recentSentencesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recentSentencesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.recentSentencesCount = this._recentSentencesCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recentSentencesCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recentSentencesCount = value.recentSentencesCount;
    }
  }

  // recent_sentences_count - computed: false, optional: true, required: false
  private _recentSentencesCount?: number; 
  public get recentSentencesCount() {
    return this.getNumberAttribute('recent_sentences_count');
  }
  public set recentSentencesCount(value: number) {
    this._recentSentencesCount = value;
  }
  public resetRecentSentencesCount() {
    this._recentSentencesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentSentencesCountInput() {
    return this._recentSentencesCount;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings {
  /**
  * If set to true, the last message from virtual agent (hand off message) and the message before it (trigger message of hand off) are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#drop_handoff_messages DialogflowConversationProfile#drop_handoff_messages}
  */
  readonly dropHandoffMessages?: boolean | cdktf.IResolvable;
  /**
  * If set to true, all messages from ivr stage are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#drop_ivr_messages DialogflowConversationProfile#drop_ivr_messages}
  */
  readonly dropIvrMessages?: boolean | cdktf.IResolvable;
  /**
  * If set to true, all messages from virtual agent are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#drop_virtual_agent_messages DialogflowConversationProfile#drop_virtual_agent_messages}
  */
  readonly dropVirtualAgentMessages?: boolean | cdktf.IResolvable;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_handoff_messages: cdktf.booleanToTerraform(struct!.dropHandoffMessages),
    drop_ivr_messages: cdktf.booleanToTerraform(struct!.dropIvrMessages),
    drop_virtual_agent_messages: cdktf.booleanToTerraform(struct!.dropVirtualAgentMessages),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_handoff_messages: {
      value: cdktf.booleanToHclTerraform(struct!.dropHandoffMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_ivr_messages: {
      value: cdktf.booleanToHclTerraform(struct!.dropIvrMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_virtual_agent_messages: {
      value: cdktf.booleanToHclTerraform(struct!.dropVirtualAgentMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropHandoffMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropHandoffMessages = this._dropHandoffMessages;
    }
    if (this._dropIvrMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropIvrMessages = this._dropIvrMessages;
    }
    if (this._dropVirtualAgentMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVirtualAgentMessages = this._dropVirtualAgentMessages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropHandoffMessages = undefined;
      this._dropIvrMessages = undefined;
      this._dropVirtualAgentMessages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropHandoffMessages = value.dropHandoffMessages;
      this._dropIvrMessages = value.dropIvrMessages;
      this._dropVirtualAgentMessages = value.dropVirtualAgentMessages;
    }
  }

  // drop_handoff_messages - computed: false, optional: true, required: false
  private _dropHandoffMessages?: boolean | cdktf.IResolvable; 
  public get dropHandoffMessages() {
    return this.getBooleanAttribute('drop_handoff_messages');
  }
  public set dropHandoffMessages(value: boolean | cdktf.IResolvable) {
    this._dropHandoffMessages = value;
  }
  public resetDropHandoffMessages() {
    this._dropHandoffMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropHandoffMessagesInput() {
    return this._dropHandoffMessages;
  }

  // drop_ivr_messages - computed: false, optional: true, required: false
  private _dropIvrMessages?: boolean | cdktf.IResolvable; 
  public get dropIvrMessages() {
    return this.getBooleanAttribute('drop_ivr_messages');
  }
  public set dropIvrMessages(value: boolean | cdktf.IResolvable) {
    this._dropIvrMessages = value;
  }
  public resetDropIvrMessages() {
    this._dropIvrMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropIvrMessagesInput() {
    return this._dropIvrMessages;
  }

  // drop_virtual_agent_messages - computed: false, optional: true, required: false
  private _dropVirtualAgentMessages?: boolean | cdktf.IResolvable; 
  public get dropVirtualAgentMessages() {
    return this.getBooleanAttribute('drop_virtual_agent_messages');
  }
  public set dropVirtualAgentMessages(value: boolean | cdktf.IResolvable) {
    this._dropVirtualAgentMessages = value;
  }
  public resetDropVirtualAgentMessages() {
    this._dropVirtualAgentMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVirtualAgentMessagesInput() {
    return this._dropVirtualAgentMessages;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig {
  /**
  * The name of a dialogflow virtual agent used for intent detection and suggestion triggered by human agent. Format: projects/<Project ID>/locations/<Location ID>/agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#agent DialogflowConversationProfile#agent}
  */
  readonly agent?: string;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource {
  /**
  * he name of a Dialogflow virtual agent used for end user side intent detection and suggestion. Format: projects/<Project ID>/locations/<Location ID>/agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#agent DialogflowConversationProfile#agent}
  */
  readonly agent: string;
  /**
  * human_agent_side_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#human_agent_side_config DialogflowConversationProfile#human_agent_side_config}
  */
  readonly humanAgentSideConfig?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    human_agent_side_config: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToTerraform(struct!.humanAgentSideConfig),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    human_agent_side_config: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToHclTerraform(struct!.humanAgentSideConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._humanAgentSideConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanAgentSideConfig = this._humanAgentSideConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
      this._humanAgentSideConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._humanAgentSideConfig.internalValue = value.humanAgentSideConfig;
    }
  }

  // agent - computed: false, optional: false, required: true
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // human_agent_side_config - computed: false, optional: true, required: false
  private _humanAgentSideConfig = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference(this, "human_agent_side_config");
  public get humanAgentSideConfig() {
    return this._humanAgentSideConfig;
  }
  public putHumanAgentSideConfig(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig) {
    this._humanAgentSideConfig.internalValue = value;
  }
  public resetHumanAgentSideConfig() {
    this._humanAgentSideConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanAgentSideConfigInput() {
    return this._humanAgentSideConfig.internalValue;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource {
  /**
  * Knowledge documents to query from. Format: projects/<Project ID>/locations/<Location ID>/knowledgeBases/<KnowledgeBase ID>/documents/<Document ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#documents DialogflowConversationProfile#documents}
  */
  readonly documents: string[];
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    documents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.documents),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    documents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.documents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documents !== undefined) {
      hasAnyValues = true;
      internalValueResult.documents = this._documents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._documents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._documents = value.documents;
    }
  }

  // documents - computed: false, optional: false, required: true
  private _documents?: string[]; 
  public get documents() {
    return this.getListAttribute('documents');
  }
  public set documents(value: string[]) {
    this._documents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentsInput() {
    return this._documents;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource {
  /**
  * Knowledge bases to query. Format: projects/<Project ID>/locations/<Location ID>/knowledgeBases/<Knowledge Base ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#knowledge_bases DialogflowConversationProfile#knowledge_bases}
  */
  readonly knowledgeBases: string[];
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    knowledge_bases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.knowledgeBases),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    knowledge_bases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.knowledgeBases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBases !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBases = this._knowledgeBases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._knowledgeBases = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._knowledgeBases = value.knowledgeBases;
    }
  }

  // knowledge_bases - computed: false, optional: false, required: true
  private _knowledgeBases?: string[]; 
  public get knowledgeBases() {
    return this.getListAttribute('knowledge_bases');
  }
  public set knowledgeBases(value: string[]) {
    this._knowledgeBases = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBasesInput() {
    return this._knowledgeBases;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections {
  /**
  * The selected sections chosen to return when requesting a summary of a conversation
  * If not provided the default selection will be "{SITUATION, ACTION, RESULT}". Possible values: ["SECTION_TYPE_UNSPECIFIED", "SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#section_types DialogflowConversationProfile#section_types}
  */
  readonly sectionTypes?: string[];
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    section_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sectionTypes),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    section_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sectionTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sectionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionTypes = this._sectionTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sectionTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sectionTypes = value.sectionTypes;
    }
  }

  // section_types - computed: false, optional: true, required: false
  private _sectionTypes?: string[]; 
  public get sectionTypes() {
    return this.getListAttribute('section_types');
  }
  public set sectionTypes(value: string[]) {
    this._sectionTypes = value;
  }
  public resetSectionTypes() {
    this._sectionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionTypesInput() {
    return this._sectionTypes;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig {
  /**
  * Confidence threshold of query result.
  * This feature is only supported for types: ARTICLE_SUGGESTION, FAQ, SMART_REPLY, SMART_COMPOSE, KNOWLEDGE_SEARCH, KNOWLEDGE_ASSIST, ENTITY_EXTRACTION.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#confidence_threshold DialogflowConversationProfile#confidence_threshold}
  */
  readonly confidenceThreshold?: number;
  /**
  * Maximum number of results to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#max_results DialogflowConversationProfile#max_results}
  */
  readonly maxResults?: number;
  /**
  * context_filter_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#context_filter_settings DialogflowConversationProfile#context_filter_settings}
  */
  readonly contextFilterSettings?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings;
  /**
  * dialogflow_query_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#dialogflow_query_source DialogflowConversationProfile#dialogflow_query_source}
  */
  readonly dialogflowQuerySource?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource;
  /**
  * document_query_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#document_query_source DialogflowConversationProfile#document_query_source}
  */
  readonly documentQuerySource?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource;
  /**
  * knowledge_base_query_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#knowledge_base_query_source DialogflowConversationProfile#knowledge_base_query_source}
  */
  readonly knowledgeBaseQuerySource?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource;
  /**
  * sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#sections DialogflowConversationProfile#sections}
  */
  readonly sections?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidence_threshold: cdktf.numberToTerraform(struct!.confidenceThreshold),
    max_results: cdktf.numberToTerraform(struct!.maxResults),
    context_filter_settings: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToTerraform(struct!.contextFilterSettings),
    dialogflow_query_source: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToTerraform(struct!.dialogflowQuerySource),
    document_query_source: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceToTerraform(struct!.documentQuerySource),
    knowledge_base_query_source: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceToTerraform(struct!.knowledgeBaseQuerySource),
    sections: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsToTerraform(struct!.sections),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidence_threshold: {
      value: cdktf.numberToHclTerraform(struct!.confidenceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_results: {
      value: cdktf.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    context_filter_settings: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToHclTerraform(struct!.contextFilterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsList",
    },
    dialogflow_query_source: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToHclTerraform(struct!.dialogflowQuerySource),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceList",
    },
    document_query_source: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceToHclTerraform(struct!.documentQuerySource),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceList",
    },
    knowledge_base_query_source: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceToHclTerraform(struct!.knowledgeBaseQuerySource),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceList",
    },
    sections: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsToHclTerraform(struct!.sections),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceThreshold = this._confidenceThreshold;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._contextFilterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextFilterSettings = this._contextFilterSettings?.internalValue;
    }
    if (this._dialogflowQuerySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialogflowQuerySource = this._dialogflowQuerySource?.internalValue;
    }
    if (this._documentQuerySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentQuerySource = this._documentQuerySource?.internalValue;
    }
    if (this._knowledgeBaseQuerySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseQuerySource = this._knowledgeBaseQuerySource?.internalValue;
    }
    if (this._sections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sections = this._sections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidenceThreshold = undefined;
      this._maxResults = undefined;
      this._contextFilterSettings.internalValue = undefined;
      this._dialogflowQuerySource.internalValue = undefined;
      this._documentQuerySource.internalValue = undefined;
      this._knowledgeBaseQuerySource.internalValue = undefined;
      this._sections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidenceThreshold = value.confidenceThreshold;
      this._maxResults = value.maxResults;
      this._contextFilterSettings.internalValue = value.contextFilterSettings;
      this._dialogflowQuerySource.internalValue = value.dialogflowQuerySource;
      this._documentQuerySource.internalValue = value.documentQuerySource;
      this._knowledgeBaseQuerySource.internalValue = value.knowledgeBaseQuerySource;
      this._sections.internalValue = value.sections;
    }
  }

  // confidence_threshold - computed: false, optional: true, required: false
  private _confidenceThreshold?: number; 
  public get confidenceThreshold() {
    return this.getNumberAttribute('confidence_threshold');
  }
  public set confidenceThreshold(value: number) {
    this._confidenceThreshold = value;
  }
  public resetConfidenceThreshold() {
    this._confidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceThresholdInput() {
    return this._confidenceThreshold;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // context_filter_settings - computed: false, optional: true, required: false
  private _contextFilterSettings = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference(this, "context_filter_settings");
  public get contextFilterSettings() {
    return this._contextFilterSettings;
  }
  public putContextFilterSettings(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings) {
    this._contextFilterSettings.internalValue = value;
  }
  public resetContextFilterSettings() {
    this._contextFilterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextFilterSettingsInput() {
    return this._contextFilterSettings.internalValue;
  }

  // dialogflow_query_source - computed: false, optional: true, required: false
  private _dialogflowQuerySource = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference(this, "dialogflow_query_source");
  public get dialogflowQuerySource() {
    return this._dialogflowQuerySource;
  }
  public putDialogflowQuerySource(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource) {
    this._dialogflowQuerySource.internalValue = value;
  }
  public resetDialogflowQuerySource() {
    this._dialogflowQuerySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogflowQuerySourceInput() {
    return this._dialogflowQuerySource.internalValue;
  }

  // document_query_source - computed: false, optional: true, required: false
  private _documentQuerySource = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceOutputReference(this, "document_query_source");
  public get documentQuerySource() {
    return this._documentQuerySource;
  }
  public putDocumentQuerySource(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource) {
    this._documentQuerySource.internalValue = value;
  }
  public resetDocumentQuerySource() {
    this._documentQuerySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentQuerySourceInput() {
    return this._documentQuerySource.internalValue;
  }

  // knowledge_base_query_source - computed: false, optional: true, required: false
  private _knowledgeBaseQuerySource = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceOutputReference(this, "knowledge_base_query_source");
  public get knowledgeBaseQuerySource() {
    return this._knowledgeBaseQuerySource;
  }
  public putKnowledgeBaseQuerySource(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource) {
    this._knowledgeBaseQuerySource.internalValue = value;
  }
  public resetKnowledgeBaseQuerySource() {
    this._knowledgeBaseQuerySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseQuerySourceInput() {
    return this._knowledgeBaseQuerySource.internalValue;
  }

  // sections - computed: false, optional: true, required: false
  private _sections = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference(this, "sections");
  public get sections() {
    return this._sections;
  }
  public putSections(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections) {
    this._sections.internalValue = value;
  }
  public resetSections() {
    this._sections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionsInput() {
    return this._sections.internalValue;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature {
  /**
  * Type of Human Agent Assistant API feature to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#type DialogflowConversationProfile#type}
  */
  readonly type?: string;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings {
  /**
  * Do not trigger if last utterance is small talk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#no_small_talk DialogflowConversationProfile#no_small_talk}
  */
  readonly noSmallTalk?: boolean | cdktf.IResolvable;
  /**
  * Only trigger suggestion if participant role of last utterance is END_USER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#only_end_user DialogflowConversationProfile#only_end_user}
  */
  readonly onlyEndUser?: boolean | cdktf.IResolvable;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_small_talk: cdktf.booleanToTerraform(struct!.noSmallTalk),
    only_end_user: cdktf.booleanToTerraform(struct!.onlyEndUser),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_small_talk: {
      value: cdktf.booleanToHclTerraform(struct!.noSmallTalk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_end_user: {
      value: cdktf.booleanToHclTerraform(struct!.onlyEndUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noSmallTalk !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSmallTalk = this._noSmallTalk;
    }
    if (this._onlyEndUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyEndUser = this._onlyEndUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noSmallTalk = undefined;
      this._onlyEndUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noSmallTalk = value.noSmallTalk;
      this._onlyEndUser = value.onlyEndUser;
    }
  }

  // no_small_talk - computed: false, optional: true, required: false
  private _noSmallTalk?: boolean | cdktf.IResolvable; 
  public get noSmallTalk() {
    return this.getBooleanAttribute('no_small_talk');
  }
  public set noSmallTalk(value: boolean | cdktf.IResolvable) {
    this._noSmallTalk = value;
  }
  public resetNoSmallTalk() {
    this._noSmallTalk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSmallTalkInput() {
    return this._noSmallTalk;
  }

  // only_end_user - computed: false, optional: true, required: false
  private _onlyEndUser?: boolean | cdktf.IResolvable; 
  public get onlyEndUser() {
    return this.getBooleanAttribute('only_end_user');
  }
  public set onlyEndUser(value: boolean | cdktf.IResolvable) {
    this._onlyEndUser = value;
  }
  public resetOnlyEndUser() {
    this._onlyEndUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyEndUserInput() {
    return this._onlyEndUser;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs {
  /**
  * Disable the logging of search queries sent by human agents. It can prevent those queries from being stored at answer records.
  * This feature is only supported for types: KNOWLEDGE_SEARCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#disable_agent_query_logging DialogflowConversationProfile#disable_agent_query_logging}
  */
  readonly disableAgentQueryLogging?: boolean | cdktf.IResolvable;
  /**
  * Enable including conversation context during query answer generation.
  * This feature is only supported for types: KNOWLEDGE_SEARCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#enable_conversation_augmented_query DialogflowConversationProfile#enable_conversation_augmented_query}
  */
  readonly enableConversationAugmentedQuery?: boolean | cdktf.IResolvable;
  /**
  * Automatically iterates all participants and tries to compile suggestions.
  * This feature is only supported for types: ARTICLE_SUGGESTION, FAQ, DIALOGFLOW_ASSIST, KNOWLEDGE_ASSIST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#enable_event_based_suggestion DialogflowConversationProfile#enable_event_based_suggestion}
  */
  readonly enableEventBasedSuggestion?: boolean | cdktf.IResolvable;
  /**
  * Enable query suggestion only.
  * This feature is only supported for types: KNOWLEDGE_ASSIST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#enable_query_suggestion_only DialogflowConversationProfile#enable_query_suggestion_only}
  */
  readonly enableQuerySuggestionOnly?: boolean | cdktf.IResolvable;
  /**
  * Enable query suggestion even if we can't find its answer. By default, queries are suggested only if we find its answer.
  * This feature is only supported for types: KNOWLEDGE_ASSIST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#enable_query_suggestion_when_no_answer DialogflowConversationProfile#enable_query_suggestion_when_no_answer}
  */
  readonly enableQuerySuggestionWhenNoAnswer?: boolean | cdktf.IResolvable;
  /**
  * conversation_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#conversation_model_config DialogflowConversationProfile#conversation_model_config}
  */
  readonly conversationModelConfig?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig;
  /**
  * conversation_process_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#conversation_process_config DialogflowConversationProfile#conversation_process_config}
  */
  readonly conversationProcessConfig?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig;
  /**
  * query_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#query_config DialogflowConversationProfile#query_config}
  */
  readonly queryConfig?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig;
  /**
  * suggestion_feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#suggestion_feature DialogflowConversationProfile#suggestion_feature}
  */
  readonly suggestionFeature?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature;
  /**
  * suggestion_trigger_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#suggestion_trigger_settings DialogflowConversationProfile#suggestion_trigger_settings}
  */
  readonly suggestionTriggerSettings?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_agent_query_logging: cdktf.booleanToTerraform(struct!.disableAgentQueryLogging),
    enable_conversation_augmented_query: cdktf.booleanToTerraform(struct!.enableConversationAugmentedQuery),
    enable_event_based_suggestion: cdktf.booleanToTerraform(struct!.enableEventBasedSuggestion),
    enable_query_suggestion_only: cdktf.booleanToTerraform(struct!.enableQuerySuggestionOnly),
    enable_query_suggestion_when_no_answer: cdktf.booleanToTerraform(struct!.enableQuerySuggestionWhenNoAnswer),
    conversation_model_config: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigToTerraform(struct!.conversationModelConfig),
    conversation_process_config: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigToTerraform(struct!.conversationProcessConfig),
    query_config: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigToTerraform(struct!.queryConfig),
    suggestion_feature: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureToTerraform(struct!.suggestionFeature),
    suggestion_trigger_settings: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToTerraform(struct!.suggestionTriggerSettings),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_agent_query_logging: {
      value: cdktf.booleanToHclTerraform(struct!.disableAgentQueryLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_conversation_augmented_query: {
      value: cdktf.booleanToHclTerraform(struct!.enableConversationAugmentedQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_event_based_suggestion: {
      value: cdktf.booleanToHclTerraform(struct!.enableEventBasedSuggestion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_query_suggestion_only: {
      value: cdktf.booleanToHclTerraform(struct!.enableQuerySuggestionOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_query_suggestion_when_no_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableQuerySuggestionWhenNoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conversation_model_config: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigToHclTerraform(struct!.conversationModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigList",
    },
    conversation_process_config: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigToHclTerraform(struct!.conversationProcessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigList",
    },
    query_config: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigToHclTerraform(struct!.queryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigList",
    },
    suggestion_feature: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureToHclTerraform(struct!.suggestionFeature),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureList",
    },
    suggestion_trigger_settings: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToHclTerraform(struct!.suggestionTriggerSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAgentQueryLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAgentQueryLogging = this._disableAgentQueryLogging;
    }
    if (this._enableConversationAugmentedQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConversationAugmentedQuery = this._enableConversationAugmentedQuery;
    }
    if (this._enableEventBasedSuggestion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEventBasedSuggestion = this._enableEventBasedSuggestion;
    }
    if (this._enableQuerySuggestionOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQuerySuggestionOnly = this._enableQuerySuggestionOnly;
    }
    if (this._enableQuerySuggestionWhenNoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQuerySuggestionWhenNoAnswer = this._enableQuerySuggestionWhenNoAnswer;
    }
    if (this._conversationModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationModelConfig = this._conversationModelConfig?.internalValue;
    }
    if (this._conversationProcessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationProcessConfig = this._conversationProcessConfig?.internalValue;
    }
    if (this._queryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryConfig = this._queryConfig?.internalValue;
    }
    if (this._suggestionFeature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestionFeature = this._suggestionFeature?.internalValue;
    }
    if (this._suggestionTriggerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestionTriggerSettings = this._suggestionTriggerSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableAgentQueryLogging = undefined;
      this._enableConversationAugmentedQuery = undefined;
      this._enableEventBasedSuggestion = undefined;
      this._enableQuerySuggestionOnly = undefined;
      this._enableQuerySuggestionWhenNoAnswer = undefined;
      this._conversationModelConfig.internalValue = undefined;
      this._conversationProcessConfig.internalValue = undefined;
      this._queryConfig.internalValue = undefined;
      this._suggestionFeature.internalValue = undefined;
      this._suggestionTriggerSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableAgentQueryLogging = value.disableAgentQueryLogging;
      this._enableConversationAugmentedQuery = value.enableConversationAugmentedQuery;
      this._enableEventBasedSuggestion = value.enableEventBasedSuggestion;
      this._enableQuerySuggestionOnly = value.enableQuerySuggestionOnly;
      this._enableQuerySuggestionWhenNoAnswer = value.enableQuerySuggestionWhenNoAnswer;
      this._conversationModelConfig.internalValue = value.conversationModelConfig;
      this._conversationProcessConfig.internalValue = value.conversationProcessConfig;
      this._queryConfig.internalValue = value.queryConfig;
      this._suggestionFeature.internalValue = value.suggestionFeature;
      this._suggestionTriggerSettings.internalValue = value.suggestionTriggerSettings;
    }
  }

  // disable_agent_query_logging - computed: false, optional: true, required: false
  private _disableAgentQueryLogging?: boolean | cdktf.IResolvable; 
  public get disableAgentQueryLogging() {
    return this.getBooleanAttribute('disable_agent_query_logging');
  }
  public set disableAgentQueryLogging(value: boolean | cdktf.IResolvable) {
    this._disableAgentQueryLogging = value;
  }
  public resetDisableAgentQueryLogging() {
    this._disableAgentQueryLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAgentQueryLoggingInput() {
    return this._disableAgentQueryLogging;
  }

  // enable_conversation_augmented_query - computed: false, optional: true, required: false
  private _enableConversationAugmentedQuery?: boolean | cdktf.IResolvable; 
  public get enableConversationAugmentedQuery() {
    return this.getBooleanAttribute('enable_conversation_augmented_query');
  }
  public set enableConversationAugmentedQuery(value: boolean | cdktf.IResolvable) {
    this._enableConversationAugmentedQuery = value;
  }
  public resetEnableConversationAugmentedQuery() {
    this._enableConversationAugmentedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConversationAugmentedQueryInput() {
    return this._enableConversationAugmentedQuery;
  }

  // enable_event_based_suggestion - computed: false, optional: true, required: false
  private _enableEventBasedSuggestion?: boolean | cdktf.IResolvable; 
  public get enableEventBasedSuggestion() {
    return this.getBooleanAttribute('enable_event_based_suggestion');
  }
  public set enableEventBasedSuggestion(value: boolean | cdktf.IResolvable) {
    this._enableEventBasedSuggestion = value;
  }
  public resetEnableEventBasedSuggestion() {
    this._enableEventBasedSuggestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventBasedSuggestionInput() {
    return this._enableEventBasedSuggestion;
  }

  // enable_query_suggestion_only - computed: false, optional: true, required: false
  private _enableQuerySuggestionOnly?: boolean | cdktf.IResolvable; 
  public get enableQuerySuggestionOnly() {
    return this.getBooleanAttribute('enable_query_suggestion_only');
  }
  public set enableQuerySuggestionOnly(value: boolean | cdktf.IResolvable) {
    this._enableQuerySuggestionOnly = value;
  }
  public resetEnableQuerySuggestionOnly() {
    this._enableQuerySuggestionOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQuerySuggestionOnlyInput() {
    return this._enableQuerySuggestionOnly;
  }

  // enable_query_suggestion_when_no_answer - computed: false, optional: true, required: false
  private _enableQuerySuggestionWhenNoAnswer?: boolean | cdktf.IResolvable; 
  public get enableQuerySuggestionWhenNoAnswer() {
    return this.getBooleanAttribute('enable_query_suggestion_when_no_answer');
  }
  public set enableQuerySuggestionWhenNoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableQuerySuggestionWhenNoAnswer = value;
  }
  public resetEnableQuerySuggestionWhenNoAnswer() {
    this._enableQuerySuggestionWhenNoAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQuerySuggestionWhenNoAnswerInput() {
    return this._enableQuerySuggestionWhenNoAnswer;
  }

  // conversation_model_config - computed: false, optional: true, required: false
  private _conversationModelConfig = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigOutputReference(this, "conversation_model_config");
  public get conversationModelConfig() {
    return this._conversationModelConfig;
  }
  public putConversationModelConfig(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig) {
    this._conversationModelConfig.internalValue = value;
  }
  public resetConversationModelConfig() {
    this._conversationModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationModelConfigInput() {
    return this._conversationModelConfig.internalValue;
  }

  // conversation_process_config - computed: false, optional: true, required: false
  private _conversationProcessConfig = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference(this, "conversation_process_config");
  public get conversationProcessConfig() {
    return this._conversationProcessConfig;
  }
  public putConversationProcessConfig(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig) {
    this._conversationProcessConfig.internalValue = value;
  }
  public resetConversationProcessConfig() {
    this._conversationProcessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationProcessConfigInput() {
    return this._conversationProcessConfig.internalValue;
  }

  // query_config - computed: false, optional: true, required: false
  private _queryConfig = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigOutputReference(this, "query_config");
  public get queryConfig() {
    return this._queryConfig;
  }
  public putQueryConfig(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig) {
    this._queryConfig.internalValue = value;
  }
  public resetQueryConfig() {
    this._queryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryConfigInput() {
    return this._queryConfig.internalValue;
  }

  // suggestion_feature - computed: false, optional: true, required: false
  private _suggestionFeature = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference(this, "suggestion_feature");
  public get suggestionFeature() {
    return this._suggestionFeature;
  }
  public putSuggestionFeature(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature) {
    this._suggestionFeature.internalValue = value;
  }
  public resetSuggestionFeature() {
    this._suggestionFeature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestionFeatureInput() {
    return this._suggestionFeature.internalValue;
  }

  // suggestion_trigger_settings - computed: false, optional: true, required: false
  private _suggestionTriggerSettings = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference(this, "suggestion_trigger_settings");
  public get suggestionTriggerSettings() {
    return this._suggestionTriggerSettings;
  }
  public putSuggestionTriggerSettings(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings) {
    this._suggestionTriggerSettings.internalValue = value;
  }
  public resetSuggestionTriggerSettings() {
    this._suggestionTriggerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestionTriggerSettingsInput() {
    return this._suggestionTriggerSettings.internalValue;
  }
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsList extends cdktf.ComplexList {
  public internalValue? : DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs[] | cdktf.IResolvable

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
  public get(index: number): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsOutputReference {
    return new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig {
  /**
  * When disableHighLatencyFeaturesSyncDelivery is true and using the AnalyzeContent API, we will not deliver the responses from high latency features in the API response. The humanAgentAssistantConfig.notification_config must be configured and enableEventBasedSuggestion must be set to true to receive the responses from high latency features in Pub/Sub. High latency feature(s): KNOWLEDGE_ASSIST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#disable_high_latency_features_sync_delivery DialogflowConversationProfile#disable_high_latency_features_sync_delivery}
  */
  readonly disableHighLatencyFeaturesSyncDelivery?: boolean | cdktf.IResolvable;
  /**
  * List of various generator resource names used in the conversation profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#generators DialogflowConversationProfile#generators}
  */
  readonly generators?: string[];
  /**
  * If groupSuggestionResponses is false, and there are multiple featureConfigs in event based suggestion or StreamingAnalyzeContent, we will try to deliver suggestions to customers as soon as we get new suggestion. Different type of suggestions based on the same context will be in separate Pub/Sub event or StreamingAnalyzeContentResponse.
  * 
  * If groupSuggestionResponses set to true. All the suggestions to the same participant based on the same context will be grouped into a single Pub/Sub event or StreamingAnalyzeContentResponse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#group_suggestion_responses DialogflowConversationProfile#group_suggestion_responses}
  */
  readonly groupSuggestionResponses?: boolean | cdktf.IResolvable;
  /**
  * feature_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#feature_configs DialogflowConversationProfile#feature_configs}
  */
  readonly featureConfigs?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs[] | cdktf.IResolvable;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_high_latency_features_sync_delivery: cdktf.booleanToTerraform(struct!.disableHighLatencyFeaturesSyncDelivery),
    generators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.generators),
    group_suggestion_responses: cdktf.booleanToTerraform(struct!.groupSuggestionResponses),
    feature_configs: cdktf.listMapper(dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsToTerraform, true)(struct!.featureConfigs),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_high_latency_features_sync_delivery: {
      value: cdktf.booleanToHclTerraform(struct!.disableHighLatencyFeaturesSyncDelivery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generators: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.generators),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_suggestion_responses: {
      value: cdktf.booleanToHclTerraform(struct!.groupSuggestionResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feature_configs: {
      value: cdktf.listMapperHcl(dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsToHclTerraform, true)(struct!.featureConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableHighLatencyFeaturesSyncDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHighLatencyFeaturesSyncDelivery = this._disableHighLatencyFeaturesSyncDelivery;
    }
    if (this._generators !== undefined) {
      hasAnyValues = true;
      internalValueResult.generators = this._generators;
    }
    if (this._groupSuggestionResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSuggestionResponses = this._groupSuggestionResponses;
    }
    if (this._featureConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureConfigs = this._featureConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableHighLatencyFeaturesSyncDelivery = undefined;
      this._generators = undefined;
      this._groupSuggestionResponses = undefined;
      this._featureConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableHighLatencyFeaturesSyncDelivery = value.disableHighLatencyFeaturesSyncDelivery;
      this._generators = value.generators;
      this._groupSuggestionResponses = value.groupSuggestionResponses;
      this._featureConfigs.internalValue = value.featureConfigs;
    }
  }

  // disable_high_latency_features_sync_delivery - computed: false, optional: true, required: false
  private _disableHighLatencyFeaturesSyncDelivery?: boolean | cdktf.IResolvable; 
  public get disableHighLatencyFeaturesSyncDelivery() {
    return this.getBooleanAttribute('disable_high_latency_features_sync_delivery');
  }
  public set disableHighLatencyFeaturesSyncDelivery(value: boolean | cdktf.IResolvable) {
    this._disableHighLatencyFeaturesSyncDelivery = value;
  }
  public resetDisableHighLatencyFeaturesSyncDelivery() {
    this._disableHighLatencyFeaturesSyncDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHighLatencyFeaturesSyncDeliveryInput() {
    return this._disableHighLatencyFeaturesSyncDelivery;
  }

  // generators - computed: false, optional: true, required: false
  private _generators?: string[]; 
  public get generators() {
    return this.getListAttribute('generators');
  }
  public set generators(value: string[]) {
    this._generators = value;
  }
  public resetGenerators() {
    this._generators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorsInput() {
    return this._generators;
  }

  // group_suggestion_responses - computed: false, optional: true, required: false
  private _groupSuggestionResponses?: boolean | cdktf.IResolvable; 
  public get groupSuggestionResponses() {
    return this.getBooleanAttribute('group_suggestion_responses');
  }
  public set groupSuggestionResponses(value: boolean | cdktf.IResolvable) {
    this._groupSuggestionResponses = value;
  }
  public resetGroupSuggestionResponses() {
    this._groupSuggestionResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSuggestionResponsesInput() {
    return this._groupSuggestionResponses;
  }

  // feature_configs - computed: false, optional: true, required: false
  private _featureConfigs = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsList(this, "feature_configs", false);
  public get featureConfigs() {
    return this._featureConfigs;
  }
  public putFeatureConfigs(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs[] | cdktf.IResolvable) {
    this._featureConfigs.internalValue = value;
  }
  public resetFeatureConfigs() {
    this._featureConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureConfigsInput() {
    return this._featureConfigs.internalValue;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig {
  /**
  * Version of current baseline model. It will be ignored if model is set. Valid versions are: Article Suggestion baseline model: - 0.9 - 1.0 (default) Summarization baseline model: - 1.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#baseline_model_version DialogflowConversationProfile#baseline_model_version}
  */
  readonly baselineModelVersion?: string;
  /**
  * Conversation model resource name. Format: projects/<Project ID>/conversationModels/<Model ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#model DialogflowConversationProfile#model}
  */
  readonly model?: string;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_model_version: cdktf.stringToTerraform(struct!.baselineModelVersion),
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline_model_version: {
      value: cdktf.stringToHclTerraform(struct!.baselineModelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineModelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineModelVersion = this._baselineModelVersion;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineModelVersion = undefined;
      this._model = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineModelVersion = value.baselineModelVersion;
      this._model = value.model;
    }
  }

  // baseline_model_version - computed: false, optional: true, required: false
  private _baselineModelVersion?: string; 
  public get baselineModelVersion() {
    return this.getStringAttribute('baseline_model_version');
  }
  public set baselineModelVersion(value: string) {
    this._baselineModelVersion = value;
  }
  public resetBaselineModelVersion() {
    this._baselineModelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineModelVersionInput() {
    return this._baselineModelVersion;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig {
  /**
  * Number of recent non-small-talk sentences to use as context for article and FAQ suggestion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#recent_sentences_count DialogflowConversationProfile#recent_sentences_count}
  */
  readonly recentSentencesCount?: number;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recent_sentences_count: cdktf.numberToTerraform(struct!.recentSentencesCount),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recent_sentences_count: {
      value: cdktf.numberToHclTerraform(struct!.recentSentencesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recentSentencesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.recentSentencesCount = this._recentSentencesCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recentSentencesCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recentSentencesCount = value.recentSentencesCount;
    }
  }

  // recent_sentences_count - computed: false, optional: true, required: false
  private _recentSentencesCount?: number; 
  public get recentSentencesCount() {
    return this.getNumberAttribute('recent_sentences_count');
  }
  public set recentSentencesCount(value: number) {
    this._recentSentencesCount = value;
  }
  public resetRecentSentencesCount() {
    this._recentSentencesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentSentencesCountInput() {
    return this._recentSentencesCount;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings {
  /**
  * If set to true, the last message from virtual agent (hand off message) and the message before it (trigger message of hand off) are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#drop_handoff_messages DialogflowConversationProfile#drop_handoff_messages}
  */
  readonly dropHandoffMessages?: boolean | cdktf.IResolvable;
  /**
  * If set to true, all messages from ivr stage are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#drop_ivr_messages DialogflowConversationProfile#drop_ivr_messages}
  */
  readonly dropIvrMessages?: boolean | cdktf.IResolvable;
  /**
  * If set to true, all messages from virtual agent are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#drop_virtual_agent_messages DialogflowConversationProfile#drop_virtual_agent_messages}
  */
  readonly dropVirtualAgentMessages?: boolean | cdktf.IResolvable;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_handoff_messages: cdktf.booleanToTerraform(struct!.dropHandoffMessages),
    drop_ivr_messages: cdktf.booleanToTerraform(struct!.dropIvrMessages),
    drop_virtual_agent_messages: cdktf.booleanToTerraform(struct!.dropVirtualAgentMessages),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_handoff_messages: {
      value: cdktf.booleanToHclTerraform(struct!.dropHandoffMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_ivr_messages: {
      value: cdktf.booleanToHclTerraform(struct!.dropIvrMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_virtual_agent_messages: {
      value: cdktf.booleanToHclTerraform(struct!.dropVirtualAgentMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropHandoffMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropHandoffMessages = this._dropHandoffMessages;
    }
    if (this._dropIvrMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropIvrMessages = this._dropIvrMessages;
    }
    if (this._dropVirtualAgentMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVirtualAgentMessages = this._dropVirtualAgentMessages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropHandoffMessages = undefined;
      this._dropIvrMessages = undefined;
      this._dropVirtualAgentMessages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropHandoffMessages = value.dropHandoffMessages;
      this._dropIvrMessages = value.dropIvrMessages;
      this._dropVirtualAgentMessages = value.dropVirtualAgentMessages;
    }
  }

  // drop_handoff_messages - computed: false, optional: true, required: false
  private _dropHandoffMessages?: boolean | cdktf.IResolvable; 
  public get dropHandoffMessages() {
    return this.getBooleanAttribute('drop_handoff_messages');
  }
  public set dropHandoffMessages(value: boolean | cdktf.IResolvable) {
    this._dropHandoffMessages = value;
  }
  public resetDropHandoffMessages() {
    this._dropHandoffMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropHandoffMessagesInput() {
    return this._dropHandoffMessages;
  }

  // drop_ivr_messages - computed: false, optional: true, required: false
  private _dropIvrMessages?: boolean | cdktf.IResolvable; 
  public get dropIvrMessages() {
    return this.getBooleanAttribute('drop_ivr_messages');
  }
  public set dropIvrMessages(value: boolean | cdktf.IResolvable) {
    this._dropIvrMessages = value;
  }
  public resetDropIvrMessages() {
    this._dropIvrMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropIvrMessagesInput() {
    return this._dropIvrMessages;
  }

  // drop_virtual_agent_messages - computed: false, optional: true, required: false
  private _dropVirtualAgentMessages?: boolean | cdktf.IResolvable; 
  public get dropVirtualAgentMessages() {
    return this.getBooleanAttribute('drop_virtual_agent_messages');
  }
  public set dropVirtualAgentMessages(value: boolean | cdktf.IResolvable) {
    this._dropVirtualAgentMessages = value;
  }
  public resetDropVirtualAgentMessages() {
    this._dropVirtualAgentMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVirtualAgentMessagesInput() {
    return this._dropVirtualAgentMessages;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig {
  /**
  * The name of a dialogflow virtual agent used for intent detection and suggestion triggered by human agent. Format: projects/<Project ID>/locations/<Location ID>/agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#agent DialogflowConversationProfile#agent}
  */
  readonly agent?: string;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource {
  /**
  * he name of a Dialogflow virtual agent used for end user side intent detection and suggestion. Format: projects/<Project ID>/locations/<Location ID>/agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#agent DialogflowConversationProfile#agent}
  */
  readonly agent: string;
  /**
  * human_agent_side_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#human_agent_side_config DialogflowConversationProfile#human_agent_side_config}
  */
  readonly humanAgentSideConfig?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    human_agent_side_config: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToTerraform(struct!.humanAgentSideConfig),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    human_agent_side_config: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToHclTerraform(struct!.humanAgentSideConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._humanAgentSideConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanAgentSideConfig = this._humanAgentSideConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
      this._humanAgentSideConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._humanAgentSideConfig.internalValue = value.humanAgentSideConfig;
    }
  }

  // agent - computed: false, optional: false, required: true
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // human_agent_side_config - computed: false, optional: true, required: false
  private _humanAgentSideConfig = new DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference(this, "human_agent_side_config");
  public get humanAgentSideConfig() {
    return this._humanAgentSideConfig;
  }
  public putHumanAgentSideConfig(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig) {
    this._humanAgentSideConfig.internalValue = value;
  }
  public resetHumanAgentSideConfig() {
    this._humanAgentSideConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanAgentSideConfigInput() {
    return this._humanAgentSideConfig.internalValue;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections {
  /**
  * The selected sections chosen to return when requesting a summary of a conversation
  * If not provided the default selection will be "{SITUATION, ACTION, RESULT}". Possible values: ["SECTION_TYPE_UNSPECIFIED", "SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#section_types DialogflowConversationProfile#section_types}
  */
  readonly sectionTypes?: string[];
}

export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    section_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sectionTypes),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    section_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sectionTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sectionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionTypes = this._sectionTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sectionTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sectionTypes = value.sectionTypes;
    }
  }

  // section_types - computed: false, optional: true, required: false
  private _sectionTypes?: string[]; 
  public get sectionTypes() {
    return this.getListAttribute('section_types');
  }
  public set sectionTypes(value: string[]) {
    this._sectionTypes = value;
  }
  public resetSectionTypes() {
    this._sectionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionTypesInput() {
    return this._sectionTypes;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig {
  /**
  * Confidence threshold of query result.
  * This feature is only supported for types: ARTICLE_SUGGESTION, FAQ, SMART_REPLY, SMART_COMPOSE, KNOWLEDGE_SEARCH, KNOWLEDGE_ASSIST, ENTITY_EXTRACTION.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#confidence_threshold DialogflowConversationProfile#confidence_threshold}
  */
  readonly confidenceThreshold?: number;
  /**
  * Maximum number of results to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#max_results DialogflowConversationProfile#max_results}
  */
  readonly maxResults?: number;
  /**
  * context_filter_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#context_filter_settings DialogflowConversationProfile#context_filter_settings}
  */
  readonly contextFilterSettings?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings;
  /**
  * dialogflow_query_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#dialogflow_query_source DialogflowConversationProfile#dialogflow_query_source}
  */
  readonly dialogflowQuerySource?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource;
  /**
  * sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#sections DialogflowConversationProfile#sections}
  */
  readonly sections?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidence_threshold: cdktf.numberToTerraform(struct!.confidenceThreshold),
    max_results: cdktf.numberToTerraform(struct!.maxResults),
    context_filter_settings: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToTerraform(struct!.contextFilterSettings),
    dialogflow_query_source: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToTerraform(struct!.dialogflowQuerySource),
    sections: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsToTerraform(struct!.sections),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidence_threshold: {
      value: cdktf.numberToHclTerraform(struct!.confidenceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_results: {
      value: cdktf.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    context_filter_settings: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToHclTerraform(struct!.contextFilterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsList",
    },
    dialogflow_query_source: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToHclTerraform(struct!.dialogflowQuerySource),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceList",
    },
    sections: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsToHclTerraform(struct!.sections),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceThreshold = this._confidenceThreshold;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._contextFilterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextFilterSettings = this._contextFilterSettings?.internalValue;
    }
    if (this._dialogflowQuerySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialogflowQuerySource = this._dialogflowQuerySource?.internalValue;
    }
    if (this._sections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sections = this._sections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidenceThreshold = undefined;
      this._maxResults = undefined;
      this._contextFilterSettings.internalValue = undefined;
      this._dialogflowQuerySource.internalValue = undefined;
      this._sections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidenceThreshold = value.confidenceThreshold;
      this._maxResults = value.maxResults;
      this._contextFilterSettings.internalValue = value.contextFilterSettings;
      this._dialogflowQuerySource.internalValue = value.dialogflowQuerySource;
      this._sections.internalValue = value.sections;
    }
  }

  // confidence_threshold - computed: false, optional: true, required: false
  private _confidenceThreshold?: number; 
  public get confidenceThreshold() {
    return this.getNumberAttribute('confidence_threshold');
  }
  public set confidenceThreshold(value: number) {
    this._confidenceThreshold = value;
  }
  public resetConfidenceThreshold() {
    this._confidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceThresholdInput() {
    return this._confidenceThreshold;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // context_filter_settings - computed: false, optional: true, required: false
  private _contextFilterSettings = new DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference(this, "context_filter_settings");
  public get contextFilterSettings() {
    return this._contextFilterSettings;
  }
  public putContextFilterSettings(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings) {
    this._contextFilterSettings.internalValue = value;
  }
  public resetContextFilterSettings() {
    this._contextFilterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextFilterSettingsInput() {
    return this._contextFilterSettings.internalValue;
  }

  // dialogflow_query_source - computed: false, optional: true, required: false
  private _dialogflowQuerySource = new DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference(this, "dialogflow_query_source");
  public get dialogflowQuerySource() {
    return this._dialogflowQuerySource;
  }
  public putDialogflowQuerySource(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource) {
    this._dialogflowQuerySource.internalValue = value;
  }
  public resetDialogflowQuerySource() {
    this._dialogflowQuerySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogflowQuerySourceInput() {
    return this._dialogflowQuerySource.internalValue;
  }

  // sections - computed: false, optional: true, required: false
  private _sections = new DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference(this, "sections");
  public get sections() {
    return this._sections;
  }
  public putSections(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections) {
    this._sections.internalValue = value;
  }
  public resetSections() {
    this._sections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionsInput() {
    return this._sections.internalValue;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature {
  /**
  * Type of Human Agent Assistant API feature to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#type DialogflowConversationProfile#type}
  */
  readonly type?: string;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings {
  /**
  * Do not trigger if last utterance is small talk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#no_small_talk DialogflowConversationProfile#no_small_talk}
  */
  readonly noSmallTalk?: boolean | cdktf.IResolvable;
  /**
  * Only trigger suggestion if participant role of last utterance is END_USER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#only_end_user DialogflowConversationProfile#only_end_user}
  */
  readonly onlyEndUser?: boolean | cdktf.IResolvable;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_small_talk: cdktf.booleanToTerraform(struct!.noSmallTalk),
    only_end_user: cdktf.booleanToTerraform(struct!.onlyEndUser),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_small_talk: {
      value: cdktf.booleanToHclTerraform(struct!.noSmallTalk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_end_user: {
      value: cdktf.booleanToHclTerraform(struct!.onlyEndUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noSmallTalk !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSmallTalk = this._noSmallTalk;
    }
    if (this._onlyEndUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyEndUser = this._onlyEndUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noSmallTalk = undefined;
      this._onlyEndUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noSmallTalk = value.noSmallTalk;
      this._onlyEndUser = value.onlyEndUser;
    }
  }

  // no_small_talk - computed: false, optional: true, required: false
  private _noSmallTalk?: boolean | cdktf.IResolvable; 
  public get noSmallTalk() {
    return this.getBooleanAttribute('no_small_talk');
  }
  public set noSmallTalk(value: boolean | cdktf.IResolvable) {
    this._noSmallTalk = value;
  }
  public resetNoSmallTalk() {
    this._noSmallTalk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSmallTalkInput() {
    return this._noSmallTalk;
  }

  // only_end_user - computed: false, optional: true, required: false
  private _onlyEndUser?: boolean | cdktf.IResolvable; 
  public get onlyEndUser() {
    return this.getBooleanAttribute('only_end_user');
  }
  public set onlyEndUser(value: boolean | cdktf.IResolvable) {
    this._onlyEndUser = value;
  }
  public resetOnlyEndUser() {
    this._onlyEndUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyEndUserInput() {
    return this._onlyEndUser;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs {
  /**
  * Disable the logging of search queries sent by human agents. It can prevent those queries from being stored at answer records.
  * This feature is only supported for types: KNOWLEDGE_SEARCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#disable_agent_query_logging DialogflowConversationProfile#disable_agent_query_logging}
  */
  readonly disableAgentQueryLogging?: boolean | cdktf.IResolvable;
  /**
  * Enable including conversation context during query answer generation.
  * This feature is only supported for types: KNOWLEDGE_SEARCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#enable_conversation_augmented_query DialogflowConversationProfile#enable_conversation_augmented_query}
  */
  readonly enableConversationAugmentedQuery?: boolean | cdktf.IResolvable;
  /**
  * Automatically iterates all participants and tries to compile suggestions.
  * This feature is only supported for types: ARTICLE_SUGGESTION, FAQ, DIALOGFLOW_ASSIST, KNOWLEDGE_ASSIST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#enable_event_based_suggestion DialogflowConversationProfile#enable_event_based_suggestion}
  */
  readonly enableEventBasedSuggestion?: boolean | cdktf.IResolvable;
  /**
  * Enable query suggestion only.
  * This feature is only supported for types: KNOWLEDGE_ASSIST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#enable_query_suggestion_only DialogflowConversationProfile#enable_query_suggestion_only}
  */
  readonly enableQuerySuggestionOnly?: boolean | cdktf.IResolvable;
  /**
  * Enable query suggestion even if we can't find its answer. By default, queries are suggested only if we find its answer.
  * This feature is only supported for types: KNOWLEDGE_ASSIST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#enable_query_suggestion_when_no_answer DialogflowConversationProfile#enable_query_suggestion_when_no_answer}
  */
  readonly enableQuerySuggestionWhenNoAnswer?: boolean | cdktf.IResolvable;
  /**
  * conversation_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#conversation_model_config DialogflowConversationProfile#conversation_model_config}
  */
  readonly conversationModelConfig?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig;
  /**
  * conversation_process_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#conversation_process_config DialogflowConversationProfile#conversation_process_config}
  */
  readonly conversationProcessConfig?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig;
  /**
  * query_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#query_config DialogflowConversationProfile#query_config}
  */
  readonly queryConfig?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig;
  /**
  * suggestion_feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#suggestion_feature DialogflowConversationProfile#suggestion_feature}
  */
  readonly suggestionFeature?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature;
  /**
  * suggestion_trigger_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#suggestion_trigger_settings DialogflowConversationProfile#suggestion_trigger_settings}
  */
  readonly suggestionTriggerSettings?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_agent_query_logging: cdktf.booleanToTerraform(struct!.disableAgentQueryLogging),
    enable_conversation_augmented_query: cdktf.booleanToTerraform(struct!.enableConversationAugmentedQuery),
    enable_event_based_suggestion: cdktf.booleanToTerraform(struct!.enableEventBasedSuggestion),
    enable_query_suggestion_only: cdktf.booleanToTerraform(struct!.enableQuerySuggestionOnly),
    enable_query_suggestion_when_no_answer: cdktf.booleanToTerraform(struct!.enableQuerySuggestionWhenNoAnswer),
    conversation_model_config: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigToTerraform(struct!.conversationModelConfig),
    conversation_process_config: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigToTerraform(struct!.conversationProcessConfig),
    query_config: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigToTerraform(struct!.queryConfig),
    suggestion_feature: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureToTerraform(struct!.suggestionFeature),
    suggestion_trigger_settings: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToTerraform(struct!.suggestionTriggerSettings),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_agent_query_logging: {
      value: cdktf.booleanToHclTerraform(struct!.disableAgentQueryLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_conversation_augmented_query: {
      value: cdktf.booleanToHclTerraform(struct!.enableConversationAugmentedQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_event_based_suggestion: {
      value: cdktf.booleanToHclTerraform(struct!.enableEventBasedSuggestion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_query_suggestion_only: {
      value: cdktf.booleanToHclTerraform(struct!.enableQuerySuggestionOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_query_suggestion_when_no_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableQuerySuggestionWhenNoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conversation_model_config: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigToHclTerraform(struct!.conversationModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigList",
    },
    conversation_process_config: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigToHclTerraform(struct!.conversationProcessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigList",
    },
    query_config: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigToHclTerraform(struct!.queryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigList",
    },
    suggestion_feature: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureToHclTerraform(struct!.suggestionFeature),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureList",
    },
    suggestion_trigger_settings: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToHclTerraform(struct!.suggestionTriggerSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAgentQueryLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAgentQueryLogging = this._disableAgentQueryLogging;
    }
    if (this._enableConversationAugmentedQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConversationAugmentedQuery = this._enableConversationAugmentedQuery;
    }
    if (this._enableEventBasedSuggestion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEventBasedSuggestion = this._enableEventBasedSuggestion;
    }
    if (this._enableQuerySuggestionOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQuerySuggestionOnly = this._enableQuerySuggestionOnly;
    }
    if (this._enableQuerySuggestionWhenNoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQuerySuggestionWhenNoAnswer = this._enableQuerySuggestionWhenNoAnswer;
    }
    if (this._conversationModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationModelConfig = this._conversationModelConfig?.internalValue;
    }
    if (this._conversationProcessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationProcessConfig = this._conversationProcessConfig?.internalValue;
    }
    if (this._queryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryConfig = this._queryConfig?.internalValue;
    }
    if (this._suggestionFeature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestionFeature = this._suggestionFeature?.internalValue;
    }
    if (this._suggestionTriggerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestionTriggerSettings = this._suggestionTriggerSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableAgentQueryLogging = undefined;
      this._enableConversationAugmentedQuery = undefined;
      this._enableEventBasedSuggestion = undefined;
      this._enableQuerySuggestionOnly = undefined;
      this._enableQuerySuggestionWhenNoAnswer = undefined;
      this._conversationModelConfig.internalValue = undefined;
      this._conversationProcessConfig.internalValue = undefined;
      this._queryConfig.internalValue = undefined;
      this._suggestionFeature.internalValue = undefined;
      this._suggestionTriggerSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableAgentQueryLogging = value.disableAgentQueryLogging;
      this._enableConversationAugmentedQuery = value.enableConversationAugmentedQuery;
      this._enableEventBasedSuggestion = value.enableEventBasedSuggestion;
      this._enableQuerySuggestionOnly = value.enableQuerySuggestionOnly;
      this._enableQuerySuggestionWhenNoAnswer = value.enableQuerySuggestionWhenNoAnswer;
      this._conversationModelConfig.internalValue = value.conversationModelConfig;
      this._conversationProcessConfig.internalValue = value.conversationProcessConfig;
      this._queryConfig.internalValue = value.queryConfig;
      this._suggestionFeature.internalValue = value.suggestionFeature;
      this._suggestionTriggerSettings.internalValue = value.suggestionTriggerSettings;
    }
  }

  // disable_agent_query_logging - computed: false, optional: true, required: false
  private _disableAgentQueryLogging?: boolean | cdktf.IResolvable; 
  public get disableAgentQueryLogging() {
    return this.getBooleanAttribute('disable_agent_query_logging');
  }
  public set disableAgentQueryLogging(value: boolean | cdktf.IResolvable) {
    this._disableAgentQueryLogging = value;
  }
  public resetDisableAgentQueryLogging() {
    this._disableAgentQueryLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAgentQueryLoggingInput() {
    return this._disableAgentQueryLogging;
  }

  // enable_conversation_augmented_query - computed: false, optional: true, required: false
  private _enableConversationAugmentedQuery?: boolean | cdktf.IResolvable; 
  public get enableConversationAugmentedQuery() {
    return this.getBooleanAttribute('enable_conversation_augmented_query');
  }
  public set enableConversationAugmentedQuery(value: boolean | cdktf.IResolvable) {
    this._enableConversationAugmentedQuery = value;
  }
  public resetEnableConversationAugmentedQuery() {
    this._enableConversationAugmentedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConversationAugmentedQueryInput() {
    return this._enableConversationAugmentedQuery;
  }

  // enable_event_based_suggestion - computed: false, optional: true, required: false
  private _enableEventBasedSuggestion?: boolean | cdktf.IResolvable; 
  public get enableEventBasedSuggestion() {
    return this.getBooleanAttribute('enable_event_based_suggestion');
  }
  public set enableEventBasedSuggestion(value: boolean | cdktf.IResolvable) {
    this._enableEventBasedSuggestion = value;
  }
  public resetEnableEventBasedSuggestion() {
    this._enableEventBasedSuggestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventBasedSuggestionInput() {
    return this._enableEventBasedSuggestion;
  }

  // enable_query_suggestion_only - computed: false, optional: true, required: false
  private _enableQuerySuggestionOnly?: boolean | cdktf.IResolvable; 
  public get enableQuerySuggestionOnly() {
    return this.getBooleanAttribute('enable_query_suggestion_only');
  }
  public set enableQuerySuggestionOnly(value: boolean | cdktf.IResolvable) {
    this._enableQuerySuggestionOnly = value;
  }
  public resetEnableQuerySuggestionOnly() {
    this._enableQuerySuggestionOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQuerySuggestionOnlyInput() {
    return this._enableQuerySuggestionOnly;
  }

  // enable_query_suggestion_when_no_answer - computed: false, optional: true, required: false
  private _enableQuerySuggestionWhenNoAnswer?: boolean | cdktf.IResolvable; 
  public get enableQuerySuggestionWhenNoAnswer() {
    return this.getBooleanAttribute('enable_query_suggestion_when_no_answer');
  }
  public set enableQuerySuggestionWhenNoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableQuerySuggestionWhenNoAnswer = value;
  }
  public resetEnableQuerySuggestionWhenNoAnswer() {
    this._enableQuerySuggestionWhenNoAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQuerySuggestionWhenNoAnswerInput() {
    return this._enableQuerySuggestionWhenNoAnswer;
  }

  // conversation_model_config - computed: false, optional: true, required: false
  private _conversationModelConfig = new DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigOutputReference(this, "conversation_model_config");
  public get conversationModelConfig() {
    return this._conversationModelConfig;
  }
  public putConversationModelConfig(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig) {
    this._conversationModelConfig.internalValue = value;
  }
  public resetConversationModelConfig() {
    this._conversationModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationModelConfigInput() {
    return this._conversationModelConfig.internalValue;
  }

  // conversation_process_config - computed: false, optional: true, required: false
  private _conversationProcessConfig = new DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference(this, "conversation_process_config");
  public get conversationProcessConfig() {
    return this._conversationProcessConfig;
  }
  public putConversationProcessConfig(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig) {
    this._conversationProcessConfig.internalValue = value;
  }
  public resetConversationProcessConfig() {
    this._conversationProcessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationProcessConfigInput() {
    return this._conversationProcessConfig.internalValue;
  }

  // query_config - computed: false, optional: true, required: false
  private _queryConfig = new DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigOutputReference(this, "query_config");
  public get queryConfig() {
    return this._queryConfig;
  }
  public putQueryConfig(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig) {
    this._queryConfig.internalValue = value;
  }
  public resetQueryConfig() {
    this._queryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryConfigInput() {
    return this._queryConfig.internalValue;
  }

  // suggestion_feature - computed: false, optional: true, required: false
  private _suggestionFeature = new DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference(this, "suggestion_feature");
  public get suggestionFeature() {
    return this._suggestionFeature;
  }
  public putSuggestionFeature(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature) {
    this._suggestionFeature.internalValue = value;
  }
  public resetSuggestionFeature() {
    this._suggestionFeature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestionFeatureInput() {
    return this._suggestionFeature.internalValue;
  }

  // suggestion_trigger_settings - computed: false, optional: true, required: false
  private _suggestionTriggerSettings = new DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference(this, "suggestion_trigger_settings");
  public get suggestionTriggerSettings() {
    return this._suggestionTriggerSettings;
  }
  public putSuggestionTriggerSettings(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings) {
    this._suggestionTriggerSettings.internalValue = value;
  }
  public resetSuggestionTriggerSettings() {
    this._suggestionTriggerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestionTriggerSettingsInput() {
    return this._suggestionTriggerSettings.internalValue;
  }
}

export class DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsList extends cdktf.ComplexList {
  public internalValue? : DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs[] | cdktf.IResolvable

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
  public get(index: number): DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsOutputReference {
    return new DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig {
  /**
  * When disableHighLatencyFeaturesSyncDelivery is true and using the AnalyzeContent API, we will not deliver the responses from high latency features in the API response. The humanAgentAssistantConfig.notification_config must be configured and enableEventBasedSuggestion must be set to true to receive the responses from high latency features in Pub/Sub. High latency feature(s): KNOWLEDGE_ASSIST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#disable_high_latency_features_sync_delivery DialogflowConversationProfile#disable_high_latency_features_sync_delivery}
  */
  readonly disableHighLatencyFeaturesSyncDelivery?: boolean | cdktf.IResolvable;
  /**
  * List of various generator resource names used in the conversation profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#generators DialogflowConversationProfile#generators}
  */
  readonly generators?: string[];
  /**
  * If groupSuggestionResponses is false, and there are multiple featureConfigs in event based suggestion or StreamingAnalyzeContent, we will try to deliver suggestions to customers as soon as we get new suggestion. Different type of suggestions based on the same context will be in separate Pub/Sub event or StreamingAnalyzeContentResponse.
  * 
  * If groupSuggestionResponses set to true. All the suggestions to the same participant based on the same context will be grouped into a single Pub/Sub event or StreamingAnalyzeContentResponse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#group_suggestion_responses DialogflowConversationProfile#group_suggestion_responses}
  */
  readonly groupSuggestionResponses?: boolean | cdktf.IResolvable;
  /**
  * feature_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#feature_configs DialogflowConversationProfile#feature_configs}
  */
  readonly featureConfigs?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs[] | cdktf.IResolvable;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_high_latency_features_sync_delivery: cdktf.booleanToTerraform(struct!.disableHighLatencyFeaturesSyncDelivery),
    generators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.generators),
    group_suggestion_responses: cdktf.booleanToTerraform(struct!.groupSuggestionResponses),
    feature_configs: cdktf.listMapper(dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsToTerraform, true)(struct!.featureConfigs),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_high_latency_features_sync_delivery: {
      value: cdktf.booleanToHclTerraform(struct!.disableHighLatencyFeaturesSyncDelivery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generators: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.generators),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_suggestion_responses: {
      value: cdktf.booleanToHclTerraform(struct!.groupSuggestionResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feature_configs: {
      value: cdktf.listMapperHcl(dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsToHclTerraform, true)(struct!.featureConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableHighLatencyFeaturesSyncDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHighLatencyFeaturesSyncDelivery = this._disableHighLatencyFeaturesSyncDelivery;
    }
    if (this._generators !== undefined) {
      hasAnyValues = true;
      internalValueResult.generators = this._generators;
    }
    if (this._groupSuggestionResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSuggestionResponses = this._groupSuggestionResponses;
    }
    if (this._featureConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureConfigs = this._featureConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableHighLatencyFeaturesSyncDelivery = undefined;
      this._generators = undefined;
      this._groupSuggestionResponses = undefined;
      this._featureConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableHighLatencyFeaturesSyncDelivery = value.disableHighLatencyFeaturesSyncDelivery;
      this._generators = value.generators;
      this._groupSuggestionResponses = value.groupSuggestionResponses;
      this._featureConfigs.internalValue = value.featureConfigs;
    }
  }

  // disable_high_latency_features_sync_delivery - computed: false, optional: true, required: false
  private _disableHighLatencyFeaturesSyncDelivery?: boolean | cdktf.IResolvable; 
  public get disableHighLatencyFeaturesSyncDelivery() {
    return this.getBooleanAttribute('disable_high_latency_features_sync_delivery');
  }
  public set disableHighLatencyFeaturesSyncDelivery(value: boolean | cdktf.IResolvable) {
    this._disableHighLatencyFeaturesSyncDelivery = value;
  }
  public resetDisableHighLatencyFeaturesSyncDelivery() {
    this._disableHighLatencyFeaturesSyncDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHighLatencyFeaturesSyncDeliveryInput() {
    return this._disableHighLatencyFeaturesSyncDelivery;
  }

  // generators - computed: false, optional: true, required: false
  private _generators?: string[]; 
  public get generators() {
    return this.getListAttribute('generators');
  }
  public set generators(value: string[]) {
    this._generators = value;
  }
  public resetGenerators() {
    this._generators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorsInput() {
    return this._generators;
  }

  // group_suggestion_responses - computed: false, optional: true, required: false
  private _groupSuggestionResponses?: boolean | cdktf.IResolvable; 
  public get groupSuggestionResponses() {
    return this.getBooleanAttribute('group_suggestion_responses');
  }
  public set groupSuggestionResponses(value: boolean | cdktf.IResolvable) {
    this._groupSuggestionResponses = value;
  }
  public resetGroupSuggestionResponses() {
    this._groupSuggestionResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSuggestionResponsesInput() {
    return this._groupSuggestionResponses;
  }

  // feature_configs - computed: false, optional: true, required: false
  private _featureConfigs = new DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsList(this, "feature_configs", false);
  public get featureConfigs() {
    return this._featureConfigs;
  }
  public putFeatureConfigs(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs[] | cdktf.IResolvable) {
    this._featureConfigs.internalValue = value;
  }
  public resetFeatureConfigs() {
    this._featureConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureConfigsInput() {
    return this._featureConfigs.internalValue;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig {
  /**
  * Enable entity extraction in conversation messages on agent assist stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#enable_entity_extraction DialogflowConversationProfile#enable_entity_extraction}
  */
  readonly enableEntityExtraction?: boolean | cdktf.IResolvable;
  /**
  * Enable sentiment analysis in conversation messages on agent assist stage. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#enable_sentiment_analysis DialogflowConversationProfile#enable_sentiment_analysis}
  */
  readonly enableSentimentAnalysis?: boolean | cdktf.IResolvable;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_entity_extraction: cdktf.booleanToTerraform(struct!.enableEntityExtraction),
    enable_sentiment_analysis: cdktf.booleanToTerraform(struct!.enableSentimentAnalysis),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_entity_extraction: {
      value: cdktf.booleanToHclTerraform(struct!.enableEntityExtraction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_sentiment_analysis: {
      value: cdktf.booleanToHclTerraform(struct!.enableSentimentAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableEntityExtraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEntityExtraction = this._enableEntityExtraction;
    }
    if (this._enableSentimentAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSentimentAnalysis = this._enableSentimentAnalysis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableEntityExtraction = undefined;
      this._enableSentimentAnalysis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableEntityExtraction = value.enableEntityExtraction;
      this._enableSentimentAnalysis = value.enableSentimentAnalysis;
    }
  }

  // enable_entity_extraction - computed: false, optional: true, required: false
  private _enableEntityExtraction?: boolean | cdktf.IResolvable; 
  public get enableEntityExtraction() {
    return this.getBooleanAttribute('enable_entity_extraction');
  }
  public set enableEntityExtraction(value: boolean | cdktf.IResolvable) {
    this._enableEntityExtraction = value;
  }
  public resetEnableEntityExtraction() {
    this._enableEntityExtraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEntityExtractionInput() {
    return this._enableEntityExtraction;
  }

  // enable_sentiment_analysis - computed: false, optional: true, required: false
  private _enableSentimentAnalysis?: boolean | cdktf.IResolvable; 
  public get enableSentimentAnalysis() {
    return this.getBooleanAttribute('enable_sentiment_analysis');
  }
  public set enableSentimentAnalysis(value: boolean | cdktf.IResolvable) {
    this._enableSentimentAnalysis = value;
  }
  public resetEnableSentimentAnalysis() {
    this._enableSentimentAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSentimentAnalysisInput() {
    return this._enableSentimentAnalysis;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig {
  /**
  * Format of the message Possible values: ["MESSAGE_FORMAT_UNSPECIFIED", "PROTO", "JSON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#message_format DialogflowConversationProfile#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Name of the Pub/Sub topic to publish conversation events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#topic DialogflowConversationProfile#topic}
  */
  readonly topic?: string;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_format: {
      value: cdktf.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageFormat = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageFormat = value.messageFormat;
      this._topic = value.topic;
    }
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DialogflowConversationProfileHumanAgentAssistantConfig {
  /**
  * end_user_suggestion_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#end_user_suggestion_config DialogflowConversationProfile#end_user_suggestion_config}
  */
  readonly endUserSuggestionConfig?: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig;
  /**
  * human_agent_suggestion_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#human_agent_suggestion_config DialogflowConversationProfile#human_agent_suggestion_config}
  */
  readonly humanAgentSuggestionConfig?: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig;
  /**
  * message_analysis_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#message_analysis_config DialogflowConversationProfile#message_analysis_config}
  */
  readonly messageAnalysisConfig?: DialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig;
  /**
  * notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#notification_config DialogflowConversationProfile#notification_config}
  */
  readonly notificationConfig?: DialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig;
}

export function dialogflowConversationProfileHumanAgentAssistantConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_user_suggestion_config: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigToTerraform(struct!.endUserSuggestionConfig),
    human_agent_suggestion_config: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigToTerraform(struct!.humanAgentSuggestionConfig),
    message_analysis_config: dialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigToTerraform(struct!.messageAnalysisConfig),
    notification_config: dialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigToTerraform(struct!.notificationConfig),
  }
}


export function dialogflowConversationProfileHumanAgentAssistantConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentAssistantConfigOutputReference | DialogflowConversationProfileHumanAgentAssistantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_user_suggestion_config: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigToHclTerraform(struct!.endUserSuggestionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigList",
    },
    human_agent_suggestion_config: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigToHclTerraform(struct!.humanAgentSuggestionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigList",
    },
    message_analysis_config: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigToHclTerraform(struct!.messageAnalysisConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigList",
    },
    notification_config: {
      value: dialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigToHclTerraform(struct!.notificationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentAssistantConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentAssistantConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endUserSuggestionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endUserSuggestionConfig = this._endUserSuggestionConfig?.internalValue;
    }
    if (this._humanAgentSuggestionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanAgentSuggestionConfig = this._humanAgentSuggestionConfig?.internalValue;
    }
    if (this._messageAnalysisConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageAnalysisConfig = this._messageAnalysisConfig?.internalValue;
    }
    if (this._notificationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationConfig = this._notificationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentAssistantConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endUserSuggestionConfig.internalValue = undefined;
      this._humanAgentSuggestionConfig.internalValue = undefined;
      this._messageAnalysisConfig.internalValue = undefined;
      this._notificationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endUserSuggestionConfig.internalValue = value.endUserSuggestionConfig;
      this._humanAgentSuggestionConfig.internalValue = value.humanAgentSuggestionConfig;
      this._messageAnalysisConfig.internalValue = value.messageAnalysisConfig;
      this._notificationConfig.internalValue = value.notificationConfig;
    }
  }

  // end_user_suggestion_config - computed: false, optional: true, required: false
  private _endUserSuggestionConfig = new DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigOutputReference(this, "end_user_suggestion_config");
  public get endUserSuggestionConfig() {
    return this._endUserSuggestionConfig;
  }
  public putEndUserSuggestionConfig(value: DialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig) {
    this._endUserSuggestionConfig.internalValue = value;
  }
  public resetEndUserSuggestionConfig() {
    this._endUserSuggestionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserSuggestionConfigInput() {
    return this._endUserSuggestionConfig.internalValue;
  }

  // human_agent_suggestion_config - computed: false, optional: true, required: false
  private _humanAgentSuggestionConfig = new DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigOutputReference(this, "human_agent_suggestion_config");
  public get humanAgentSuggestionConfig() {
    return this._humanAgentSuggestionConfig;
  }
  public putHumanAgentSuggestionConfig(value: DialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig) {
    this._humanAgentSuggestionConfig.internalValue = value;
  }
  public resetHumanAgentSuggestionConfig() {
    this._humanAgentSuggestionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanAgentSuggestionConfigInput() {
    return this._humanAgentSuggestionConfig.internalValue;
  }

  // message_analysis_config - computed: false, optional: true, required: false
  private _messageAnalysisConfig = new DialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigOutputReference(this, "message_analysis_config");
  public get messageAnalysisConfig() {
    return this._messageAnalysisConfig;
  }
  public putMessageAnalysisConfig(value: DialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig) {
    this._messageAnalysisConfig.internalValue = value;
  }
  public resetMessageAnalysisConfig() {
    this._messageAnalysisConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageAnalysisConfigInput() {
    return this._messageAnalysisConfig.internalValue;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new DialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: DialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }
}
export interface DialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig {
  /**
  * Account number of the LivePerson account to connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#account_number DialogflowConversationProfile#account_number}
  */
  readonly accountNumber: string;
}

export function dialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigOutputReference | DialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_number: cdktf.stringToTerraform(struct!.accountNumber),
  }
}


export function dialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigOutputReference | DialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_number: {
      value: cdktf.stringToHclTerraform(struct!.accountNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNumber = this._accountNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountNumber = value.accountNumber;
    }
  }

  // account_number - computed: false, optional: false, required: true
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }
}
export interface DialogflowConversationProfileHumanAgentHandoffConfig {
  /**
  * live_person_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#live_person_config DialogflowConversationProfile#live_person_config}
  */
  readonly livePersonConfig?: DialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig;
}

export function dialogflowConversationProfileHumanAgentHandoffConfigToTerraform(struct?: DialogflowConversationProfileHumanAgentHandoffConfigOutputReference | DialogflowConversationProfileHumanAgentHandoffConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    live_person_config: dialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigToTerraform(struct!.livePersonConfig),
  }
}


export function dialogflowConversationProfileHumanAgentHandoffConfigToHclTerraform(struct?: DialogflowConversationProfileHumanAgentHandoffConfigOutputReference | DialogflowConversationProfileHumanAgentHandoffConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    live_person_config: {
      value: dialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigToHclTerraform(struct!.livePersonConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileHumanAgentHandoffConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileHumanAgentHandoffConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._livePersonConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livePersonConfig = this._livePersonConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileHumanAgentHandoffConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._livePersonConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._livePersonConfig.internalValue = value.livePersonConfig;
    }
  }

  // live_person_config - computed: false, optional: true, required: false
  private _livePersonConfig = new DialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigOutputReference(this, "live_person_config");
  public get livePersonConfig() {
    return this._livePersonConfig;
  }
  public putLivePersonConfig(value: DialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig) {
    this._livePersonConfig.internalValue = value;
  }
  public resetLivePersonConfig() {
    this._livePersonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livePersonConfigInput() {
    return this._livePersonConfig.internalValue;
  }
}
export interface DialogflowConversationProfileLoggingConfig {
  /**
  * Whether to log conversation events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#enable_stackdriver_logging DialogflowConversationProfile#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
}

export function dialogflowConversationProfileLoggingConfigToTerraform(struct?: DialogflowConversationProfileLoggingConfigOutputReference | DialogflowConversationProfileLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_stackdriver_logging: cdktf.booleanToTerraform(struct!.enableStackdriverLogging),
  }
}


export function dialogflowConversationProfileLoggingConfigToHclTerraform(struct?: DialogflowConversationProfileLoggingConfigOutputReference | DialogflowConversationProfileLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DialogflowConversationProfileLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableStackdriverLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStackdriverLogging = this._enableStackdriverLogging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableStackdriverLogging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableStackdriverLogging = value.enableStackdriverLogging;
    }
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
export interface DialogflowConversationProfileNewMessageEventNotificationConfig {
  /**
  * Format of the message Possible values: ["MESSAGE_FORMAT_UNSPECIFIED", "PROTO", "JSON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#message_format DialogflowConversationProfile#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Name of the Pub/Sub topic to publish conversation events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#topic DialogflowConversationProfile#topic}
  */
  readonly topic?: string;
}

export function dialogflowConversationProfileNewMessageEventNotificationConfigToTerraform(struct?: DialogflowConversationProfileNewMessageEventNotificationConfigOutputReference | DialogflowConversationProfileNewMessageEventNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dialogflowConversationProfileNewMessageEventNotificationConfigToHclTerraform(struct?: DialogflowConversationProfileNewMessageEventNotificationConfigOutputReference | DialogflowConversationProfileNewMessageEventNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_format: {
      value: cdktf.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileNewMessageEventNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileNewMessageEventNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileNewMessageEventNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageFormat = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageFormat = value.messageFormat;
      this._topic = value.topic;
    }
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DialogflowConversationProfileNotificationConfig {
  /**
  * Format of the message Possible values: ["MESSAGE_FORMAT_UNSPECIFIED", "PROTO", "JSON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#message_format DialogflowConversationProfile#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Name of the Pub/Sub topic to publish conversation events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#topic DialogflowConversationProfile#topic}
  */
  readonly topic?: string;
}

export function dialogflowConversationProfileNotificationConfigToTerraform(struct?: DialogflowConversationProfileNotificationConfigOutputReference | DialogflowConversationProfileNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dialogflowConversationProfileNotificationConfigToHclTerraform(struct?: DialogflowConversationProfileNotificationConfigOutputReference | DialogflowConversationProfileNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_format: {
      value: cdktf.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageFormat = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageFormat = value.messageFormat;
      this._topic = value.topic;
    }
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DialogflowConversationProfileSttConfig {
  /**
  * Audio encoding of the audio content to process. Possible values: ["AUDIO_ENCODING_UNSPECIFIED", "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR", "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIOENCODING_SPEEX_WITH_HEADER_BYTE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#audio_encoding DialogflowConversationProfile#audio_encoding}
  */
  readonly audioEncoding?: string;
  /**
  * If true, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#enable_word_info DialogflowConversationProfile#enable_word_info}
  */
  readonly enableWordInfo?: boolean | cdktf.IResolvable;
  /**
  * The language of the supplied audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#language_code DialogflowConversationProfile#language_code}
  */
  readonly languageCode?: string;
  /**
  * Which Speech model to select.
  * Leave this field unspecified to use Agent Speech settings for model selection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#model DialogflowConversationProfile#model}
  */
  readonly model?: string;
  /**
  * Sample rate (in Hertz) of the audio content sent in the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#sample_rate_hertz DialogflowConversationProfile#sample_rate_hertz}
  */
  readonly sampleRateHertz?: number;
  /**
  * The speech model used in speech to text. Possible values: ["SPEECH_MODEL_VARIANT_UNSPECIFIED", "USE_BEST_AVAILABLE", "USE_STANDARD", "USE_ENHANCED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#speech_model_variant DialogflowConversationProfile#speech_model_variant}
  */
  readonly speechModelVariant?: string;
  /**
  * Use timeout based endpointing, interpreting endpointer sensitivy as seconds of timeout value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#use_timeout_based_endpointing DialogflowConversationProfile#use_timeout_based_endpointing}
  */
  readonly useTimeoutBasedEndpointing?: boolean | cdktf.IResolvable;
}

export function dialogflowConversationProfileSttConfigToTerraform(struct?: DialogflowConversationProfileSttConfigOutputReference | DialogflowConversationProfileSttConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_encoding: cdktf.stringToTerraform(struct!.audioEncoding),
    enable_word_info: cdktf.booleanToTerraform(struct!.enableWordInfo),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    model: cdktf.stringToTerraform(struct!.model),
    sample_rate_hertz: cdktf.numberToTerraform(struct!.sampleRateHertz),
    speech_model_variant: cdktf.stringToTerraform(struct!.speechModelVariant),
    use_timeout_based_endpointing: cdktf.booleanToTerraform(struct!.useTimeoutBasedEndpointing),
  }
}


export function dialogflowConversationProfileSttConfigToHclTerraform(struct?: DialogflowConversationProfileSttConfigOutputReference | DialogflowConversationProfileSttConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_encoding: {
      value: cdktf.stringToHclTerraform(struct!.audioEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_word_info: {
      value: cdktf.booleanToHclTerraform(struct!.enableWordInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    language_code: {
      value: cdktf.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate_hertz: {
      value: cdktf.numberToHclTerraform(struct!.sampleRateHertz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    speech_model_variant: {
      value: cdktf.stringToHclTerraform(struct!.speechModelVariant),
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

export class DialogflowConversationProfileSttConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileSttConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioEncoding = this._audioEncoding;
    }
    if (this._enableWordInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWordInfo = this._enableWordInfo;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._sampleRateHertz !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRateHertz = this._sampleRateHertz;
    }
    if (this._speechModelVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.speechModelVariant = this._speechModelVariant;
    }
    if (this._useTimeoutBasedEndpointing !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTimeoutBasedEndpointing = this._useTimeoutBasedEndpointing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileSttConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioEncoding = undefined;
      this._enableWordInfo = undefined;
      this._languageCode = undefined;
      this._model = undefined;
      this._sampleRateHertz = undefined;
      this._speechModelVariant = undefined;
      this._useTimeoutBasedEndpointing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioEncoding = value.audioEncoding;
      this._enableWordInfo = value.enableWordInfo;
      this._languageCode = value.languageCode;
      this._model = value.model;
      this._sampleRateHertz = value.sampleRateHertz;
      this._speechModelVariant = value.speechModelVariant;
      this._useTimeoutBasedEndpointing = value.useTimeoutBasedEndpointing;
    }
  }

  // audio_encoding - computed: false, optional: true, required: false
  private _audioEncoding?: string; 
  public get audioEncoding() {
    return this.getStringAttribute('audio_encoding');
  }
  public set audioEncoding(value: string) {
    this._audioEncoding = value;
  }
  public resetAudioEncoding() {
    this._audioEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioEncodingInput() {
    return this._audioEncoding;
  }

  // enable_word_info - computed: false, optional: true, required: false
  private _enableWordInfo?: boolean | cdktf.IResolvable; 
  public get enableWordInfo() {
    return this.getBooleanAttribute('enable_word_info');
  }
  public set enableWordInfo(value: boolean | cdktf.IResolvable) {
    this._enableWordInfo = value;
  }
  public resetEnableWordInfo() {
    this._enableWordInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWordInfoInput() {
    return this._enableWordInfo;
  }

  // language_code - computed: true, optional: true, required: false
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

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // sample_rate_hertz - computed: false, optional: true, required: false
  private _sampleRateHertz?: number; 
  public get sampleRateHertz() {
    return this.getNumberAttribute('sample_rate_hertz');
  }
  public set sampleRateHertz(value: number) {
    this._sampleRateHertz = value;
  }
  public resetSampleRateHertz() {
    this._sampleRateHertz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateHertzInput() {
    return this._sampleRateHertz;
  }

  // speech_model_variant - computed: false, optional: true, required: false
  private _speechModelVariant?: string; 
  public get speechModelVariant() {
    return this.getStringAttribute('speech_model_variant');
  }
  public set speechModelVariant(value: string) {
    this._speechModelVariant = value;
  }
  public resetSpeechModelVariant() {
    this._speechModelVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speechModelVariantInput() {
    return this._speechModelVariant;
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
export interface DialogflowConversationProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#create DialogflowConversationProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#delete DialogflowConversationProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#update DialogflowConversationProfile#update}
  */
  readonly update?: string;
}

export function dialogflowConversationProfileTimeoutsToTerraform(struct?: DialogflowConversationProfileTimeouts | cdktf.IResolvable): any {
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


export function dialogflowConversationProfileTimeoutsToHclTerraform(struct?: DialogflowConversationProfileTimeouts | cdktf.IResolvable): any {
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

export class DialogflowConversationProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowConversationProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowConversationProfileTimeouts | cdktf.IResolvable | undefined) {
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
export interface DialogflowConversationProfileTtsConfigVoice {
  /**
  * The name of the voice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#name DialogflowConversationProfile#name}
  */
  readonly name?: string;
  /**
  * The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#ssml_gender DialogflowConversationProfile#ssml_gender}
  */
  readonly ssmlGender?: string;
}

export function dialogflowConversationProfileTtsConfigVoiceToTerraform(struct?: DialogflowConversationProfileTtsConfigVoiceOutputReference | DialogflowConversationProfileTtsConfigVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ssml_gender: cdktf.stringToTerraform(struct!.ssmlGender),
  }
}


export function dialogflowConversationProfileTtsConfigVoiceToHclTerraform(struct?: DialogflowConversationProfileTtsConfigVoiceOutputReference | DialogflowConversationProfileTtsConfigVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssml_gender: {
      value: cdktf.stringToHclTerraform(struct!.ssmlGender),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileTtsConfigVoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileTtsConfigVoice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ssmlGender !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlGender = this._ssmlGender;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileTtsConfigVoice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._ssmlGender = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._ssmlGender = value.ssmlGender;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ssml_gender - computed: false, optional: true, required: false
  private _ssmlGender?: string; 
  public get ssmlGender() {
    return this.getStringAttribute('ssml_gender');
  }
  public set ssmlGender(value: string) {
    this._ssmlGender = value;
  }
  public resetSsmlGender() {
    this._ssmlGender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlGenderInput() {
    return this._ssmlGender;
  }
}
export interface DialogflowConversationProfileTtsConfig {
  /**
  * An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#effects_profile_id DialogflowConversationProfile#effects_profile_id}
  */
  readonly effectsProfileId?: string[];
  /**
  * Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#pitch DialogflowConversationProfile#pitch}
  */
  readonly pitch?: number;
  /**
  * Speaking rate/speed, in the range [0.25, 4.0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#speaking_rate DialogflowConversationProfile#speaking_rate}
  */
  readonly speakingRate?: number;
  /**
  * Volume gain (in dB) of the normal native volume supported by the specific voice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#volume_gain_db DialogflowConversationProfile#volume_gain_db}
  */
  readonly volumeGainDb?: number;
  /**
  * voice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#voice DialogflowConversationProfile#voice}
  */
  readonly voice?: DialogflowConversationProfileTtsConfigVoice;
}

export function dialogflowConversationProfileTtsConfigToTerraform(struct?: DialogflowConversationProfileTtsConfigOutputReference | DialogflowConversationProfileTtsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effects_profile_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.effectsProfileId),
    pitch: cdktf.numberToTerraform(struct!.pitch),
    speaking_rate: cdktf.numberToTerraform(struct!.speakingRate),
    volume_gain_db: cdktf.numberToTerraform(struct!.volumeGainDb),
    voice: dialogflowConversationProfileTtsConfigVoiceToTerraform(struct!.voice),
  }
}


export function dialogflowConversationProfileTtsConfigToHclTerraform(struct?: DialogflowConversationProfileTtsConfigOutputReference | DialogflowConversationProfileTtsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effects_profile_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.effectsProfileId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pitch: {
      value: cdktf.numberToHclTerraform(struct!.pitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    speaking_rate: {
      value: cdktf.numberToHclTerraform(struct!.speakingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_gain_db: {
      value: cdktf.numberToHclTerraform(struct!.volumeGainDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    voice: {
      value: dialogflowConversationProfileTtsConfigVoiceToHclTerraform(struct!.voice),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowConversationProfileTtsConfigVoiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowConversationProfileTtsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowConversationProfileTtsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effectsProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectsProfileId = this._effectsProfileId;
    }
    if (this._pitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pitch = this._pitch;
    }
    if (this._speakingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.speakingRate = this._speakingRate;
    }
    if (this._volumeGainDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGainDb = this._volumeGainDb;
    }
    if (this._voice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.voice = this._voice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowConversationProfileTtsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._effectsProfileId = undefined;
      this._pitch = undefined;
      this._speakingRate = undefined;
      this._volumeGainDb = undefined;
      this._voice.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._effectsProfileId = value.effectsProfileId;
      this._pitch = value.pitch;
      this._speakingRate = value.speakingRate;
      this._volumeGainDb = value.volumeGainDb;
      this._voice.internalValue = value.voice;
    }
  }

  // effects_profile_id - computed: false, optional: true, required: false
  private _effectsProfileId?: string[]; 
  public get effectsProfileId() {
    return this.getListAttribute('effects_profile_id');
  }
  public set effectsProfileId(value: string[]) {
    this._effectsProfileId = value;
  }
  public resetEffectsProfileId() {
    this._effectsProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectsProfileIdInput() {
    return this._effectsProfileId;
  }

  // pitch - computed: false, optional: true, required: false
  private _pitch?: number; 
  public get pitch() {
    return this.getNumberAttribute('pitch');
  }
  public set pitch(value: number) {
    this._pitch = value;
  }
  public resetPitch() {
    this._pitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitchInput() {
    return this._pitch;
  }

  // speaking_rate - computed: false, optional: true, required: false
  private _speakingRate?: number; 
  public get speakingRate() {
    return this.getNumberAttribute('speaking_rate');
  }
  public set speakingRate(value: number) {
    this._speakingRate = value;
  }
  public resetSpeakingRate() {
    this._speakingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speakingRateInput() {
    return this._speakingRate;
  }

  // volume_gain_db - computed: false, optional: true, required: false
  private _volumeGainDb?: number; 
  public get volumeGainDb() {
    return this.getNumberAttribute('volume_gain_db');
  }
  public set volumeGainDb(value: number) {
    this._volumeGainDb = value;
  }
  public resetVolumeGainDb() {
    this._volumeGainDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGainDbInput() {
    return this._volumeGainDb;
  }

  // voice - computed: false, optional: true, required: false
  private _voice = new DialogflowConversationProfileTtsConfigVoiceOutputReference(this, "voice");
  public get voice() {
    return this._voice;
  }
  public putVoice(value: DialogflowConversationProfileTtsConfigVoice) {
    this._voice.internalValue = value;
  }
  public resetVoice() {
    this._voice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceInput() {
    return this._voice.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile google_dialogflow_conversation_profile}
*/
export class DialogflowConversationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_conversation_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DialogflowConversationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowConversationProfile to import
  * @param importFromId The id of the existing DialogflowConversationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowConversationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_conversation_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_conversation_profile google_dialogflow_conversation_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowConversationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowConversationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_conversation_profile',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.1',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._languageCode = config.languageCode;
    this._location = config.location;
    this._project = config.project;
    this._securitySettings = config.securitySettings;
    this._timeZone = config.timeZone;
    this._automatedAgentConfig.internalValue = config.automatedAgentConfig;
    this._humanAgentAssistantConfig.internalValue = config.humanAgentAssistantConfig;
    this._humanAgentHandoffConfig.internalValue = config.humanAgentHandoffConfig;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._newMessageEventNotificationConfig.internalValue = config.newMessageEventNotificationConfig;
    this._notificationConfig.internalValue = config.notificationConfig;
    this._sttConfig.internalValue = config.sttConfig;
    this._timeouts.internalValue = config.timeouts;
    this._ttsConfig.internalValue = config.ttsConfig;
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

  // language_code - computed: true, optional: true, required: false
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

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // automated_agent_config - computed: false, optional: true, required: false
  private _automatedAgentConfig = new DialogflowConversationProfileAutomatedAgentConfigOutputReference(this, "automated_agent_config");
  public get automatedAgentConfig() {
    return this._automatedAgentConfig;
  }
  public putAutomatedAgentConfig(value: DialogflowConversationProfileAutomatedAgentConfig) {
    this._automatedAgentConfig.internalValue = value;
  }
  public resetAutomatedAgentConfig() {
    this._automatedAgentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedAgentConfigInput() {
    return this._automatedAgentConfig.internalValue;
  }

  // human_agent_assistant_config - computed: false, optional: true, required: false
  private _humanAgentAssistantConfig = new DialogflowConversationProfileHumanAgentAssistantConfigOutputReference(this, "human_agent_assistant_config");
  public get humanAgentAssistantConfig() {
    return this._humanAgentAssistantConfig;
  }
  public putHumanAgentAssistantConfig(value: DialogflowConversationProfileHumanAgentAssistantConfig) {
    this._humanAgentAssistantConfig.internalValue = value;
  }
  public resetHumanAgentAssistantConfig() {
    this._humanAgentAssistantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanAgentAssistantConfigInput() {
    return this._humanAgentAssistantConfig.internalValue;
  }

  // human_agent_handoff_config - computed: false, optional: true, required: false
  private _humanAgentHandoffConfig = new DialogflowConversationProfileHumanAgentHandoffConfigOutputReference(this, "human_agent_handoff_config");
  public get humanAgentHandoffConfig() {
    return this._humanAgentHandoffConfig;
  }
  public putHumanAgentHandoffConfig(value: DialogflowConversationProfileHumanAgentHandoffConfig) {
    this._humanAgentHandoffConfig.internalValue = value;
  }
  public resetHumanAgentHandoffConfig() {
    this._humanAgentHandoffConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanAgentHandoffConfigInput() {
    return this._humanAgentHandoffConfig.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new DialogflowConversationProfileLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DialogflowConversationProfileLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // new_message_event_notification_config - computed: false, optional: true, required: false
  private _newMessageEventNotificationConfig = new DialogflowConversationProfileNewMessageEventNotificationConfigOutputReference(this, "new_message_event_notification_config");
  public get newMessageEventNotificationConfig() {
    return this._newMessageEventNotificationConfig;
  }
  public putNewMessageEventNotificationConfig(value: DialogflowConversationProfileNewMessageEventNotificationConfig) {
    this._newMessageEventNotificationConfig.internalValue = value;
  }
  public resetNewMessageEventNotificationConfig() {
    this._newMessageEventNotificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newMessageEventNotificationConfigInput() {
    return this._newMessageEventNotificationConfig.internalValue;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new DialogflowConversationProfileNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: DialogflowConversationProfileNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // stt_config - computed: false, optional: true, required: false
  private _sttConfig = new DialogflowConversationProfileSttConfigOutputReference(this, "stt_config");
  public get sttConfig() {
    return this._sttConfig;
  }
  public putSttConfig(value: DialogflowConversationProfileSttConfig) {
    this._sttConfig.internalValue = value;
  }
  public resetSttConfig() {
    this._sttConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sttConfigInput() {
    return this._sttConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowConversationProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowConversationProfileTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tts_config - computed: false, optional: true, required: false
  private _ttsConfig = new DialogflowConversationProfileTtsConfigOutputReference(this, "tts_config");
  public get ttsConfig() {
    return this._ttsConfig;
  }
  public putTtsConfig(value: DialogflowConversationProfileTtsConfig) {
    this._ttsConfig.internalValue = value;
  }
  public resetTtsConfig() {
    this._ttsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttsConfigInput() {
    return this._ttsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      language_code: cdktf.stringToTerraform(this._languageCode),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      security_settings: cdktf.stringToTerraform(this._securitySettings),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      automated_agent_config: dialogflowConversationProfileAutomatedAgentConfigToTerraform(this._automatedAgentConfig.internalValue),
      human_agent_assistant_config: dialogflowConversationProfileHumanAgentAssistantConfigToTerraform(this._humanAgentAssistantConfig.internalValue),
      human_agent_handoff_config: dialogflowConversationProfileHumanAgentHandoffConfigToTerraform(this._humanAgentHandoffConfig.internalValue),
      logging_config: dialogflowConversationProfileLoggingConfigToTerraform(this._loggingConfig.internalValue),
      new_message_event_notification_config: dialogflowConversationProfileNewMessageEventNotificationConfigToTerraform(this._newMessageEventNotificationConfig.internalValue),
      notification_config: dialogflowConversationProfileNotificationConfigToTerraform(this._notificationConfig.internalValue),
      stt_config: dialogflowConversationProfileSttConfigToTerraform(this._sttConfig.internalValue),
      timeouts: dialogflowConversationProfileTimeoutsToTerraform(this._timeouts.internalValue),
      tts_config: dialogflowConversationProfileTtsConfigToTerraform(this._ttsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      language_code: {
        value: cdktf.stringToHclTerraform(this._languageCode),
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
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automated_agent_config: {
        value: dialogflowConversationProfileAutomatedAgentConfigToHclTerraform(this._automatedAgentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowConversationProfileAutomatedAgentConfigList",
      },
      human_agent_assistant_config: {
        value: dialogflowConversationProfileHumanAgentAssistantConfigToHclTerraform(this._humanAgentAssistantConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowConversationProfileHumanAgentAssistantConfigList",
      },
      human_agent_handoff_config: {
        value: dialogflowConversationProfileHumanAgentHandoffConfigToHclTerraform(this._humanAgentHandoffConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowConversationProfileHumanAgentHandoffConfigList",
      },
      logging_config: {
        value: dialogflowConversationProfileLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowConversationProfileLoggingConfigList",
      },
      new_message_event_notification_config: {
        value: dialogflowConversationProfileNewMessageEventNotificationConfigToHclTerraform(this._newMessageEventNotificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowConversationProfileNewMessageEventNotificationConfigList",
      },
      notification_config: {
        value: dialogflowConversationProfileNotificationConfigToHclTerraform(this._notificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowConversationProfileNotificationConfigList",
      },
      stt_config: {
        value: dialogflowConversationProfileSttConfigToHclTerraform(this._sttConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowConversationProfileSttConfigList",
      },
      timeouts: {
        value: dialogflowConversationProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowConversationProfileTimeouts",
      },
      tts_config: {
        value: dialogflowConversationProfileTtsConfigToHclTerraform(this._ttsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowConversationProfileTtsConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
