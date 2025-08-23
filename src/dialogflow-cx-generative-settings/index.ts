/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxGenerativeSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#id DialogflowCxGenerativeSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Language for this settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#language_code DialogflowCxGenerativeSettings#language_code}
  */
  readonly languageCode: string;
  /**
  * The agent to create a flow for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#parent DialogflowCxGenerativeSettings#parent}
  */
  readonly parent?: string;
  /**
  * fallback_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#fallback_settings DialogflowCxGenerativeSettings#fallback_settings}
  */
  readonly fallbackSettings?: DialogflowCxGenerativeSettingsFallbackSettings;
  /**
  * generative_safety_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#generative_safety_settings DialogflowCxGenerativeSettings#generative_safety_settings}
  */
  readonly generativeSafetySettings?: DialogflowCxGenerativeSettingsGenerativeSafetySettings;
  /**
  * knowledge_connector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#knowledge_connector_settings DialogflowCxGenerativeSettings#knowledge_connector_settings}
  */
  readonly knowledgeConnectorSettings?: DialogflowCxGenerativeSettingsKnowledgeConnectorSettings;
  /**
  * llm_model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#llm_model_settings DialogflowCxGenerativeSettings#llm_model_settings}
  */
  readonly llmModelSettings?: DialogflowCxGenerativeSettingsLlmModelSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#timeouts DialogflowCxGenerativeSettings#timeouts}
  */
  readonly timeouts?: DialogflowCxGenerativeSettingsTimeouts;
}
export interface DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates {
  /**
  * Prompt name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#display_name DialogflowCxGenerativeSettings#display_name}
  */
  readonly displayName?: string;
  /**
  * If the flag is true, the prompt is frozen and cannot be modified by users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#frozen DialogflowCxGenerativeSettings#frozen}
  */
  readonly frozen?: boolean | cdktf.IResolvable;
  /**
  * Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream. For example: "Here is a conversation $conversation, a response is: "
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#prompt_text DialogflowCxGenerativeSettings#prompt_text}
  */
  readonly promptText?: string;
}

export function dialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesToTerraform(struct?: DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    frozen: cdktf.booleanToTerraform(struct!.frozen),
    prompt_text: cdktf.stringToTerraform(struct!.promptText),
  }
}


export function dialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesToHclTerraform(struct?: DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frozen: {
      value: cdktf.booleanToHclTerraform(struct!.frozen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prompt_text: {
      value: cdktf.stringToHclTerraform(struct!.promptText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._frozen !== undefined) {
      hasAnyValues = true;
      internalValueResult.frozen = this._frozen;
    }
    if (this._promptText !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptText = this._promptText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._frozen = undefined;
      this._promptText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._frozen = value.frozen;
      this._promptText = value.promptText;
    }
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

  // frozen - computed: false, optional: true, required: false
  private _frozen?: boolean | cdktf.IResolvable; 
  public get frozen() {
    return this.getBooleanAttribute('frozen');
  }
  public set frozen(value: boolean | cdktf.IResolvable) {
    this._frozen = value;
  }
  public resetFrozen() {
    this._frozen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frozenInput() {
    return this._frozen;
  }

  // prompt_text - computed: false, optional: true, required: false
  private _promptText?: string; 
  public get promptText() {
    return this.getStringAttribute('prompt_text');
  }
  public set promptText(value: string) {
    this._promptText = value;
  }
  public resetPromptText() {
    this._promptText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTextInput() {
    return this._promptText;
  }
}

export class DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference {
    return new DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxGenerativeSettingsFallbackSettings {
  /**
  * Display name of the selected prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#selected_prompt DialogflowCxGenerativeSettings#selected_prompt}
  */
  readonly selectedPrompt?: string;
  /**
  * prompt_templates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#prompt_templates DialogflowCxGenerativeSettings#prompt_templates}
  */
  readonly promptTemplates?: DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[] | cdktf.IResolvable;
}

export function dialogflowCxGenerativeSettingsFallbackSettingsToTerraform(struct?: DialogflowCxGenerativeSettingsFallbackSettingsOutputReference | DialogflowCxGenerativeSettingsFallbackSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_prompt: cdktf.stringToTerraform(struct!.selectedPrompt),
    prompt_templates: cdktf.listMapper(dialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesToTerraform, true)(struct!.promptTemplates),
  }
}


export function dialogflowCxGenerativeSettingsFallbackSettingsToHclTerraform(struct?: DialogflowCxGenerativeSettingsFallbackSettingsOutputReference | DialogflowCxGenerativeSettingsFallbackSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selected_prompt: {
      value: cdktf.stringToHclTerraform(struct!.selectedPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt_templates: {
      value: cdktf.listMapperHcl(dialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesToHclTerraform, true)(struct!.promptTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxGenerativeSettingsFallbackSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxGenerativeSettingsFallbackSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedPrompt = this._selectedPrompt;
    }
    if (this._promptTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptTemplates = this._promptTemplates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxGenerativeSettingsFallbackSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectedPrompt = undefined;
      this._promptTemplates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectedPrompt = value.selectedPrompt;
      this._promptTemplates.internalValue = value.promptTemplates;
    }
  }

  // selected_prompt - computed: false, optional: true, required: false
  private _selectedPrompt?: string; 
  public get selectedPrompt() {
    return this.getStringAttribute('selected_prompt');
  }
  public set selectedPrompt(value: string) {
    this._selectedPrompt = value;
  }
  public resetSelectedPrompt() {
    this._selectedPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedPromptInput() {
    return this._selectedPrompt;
  }

  // prompt_templates - computed: false, optional: true, required: false
  private _promptTemplates = new DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList(this, "prompt_templates", false);
  public get promptTemplates() {
    return this._promptTemplates;
  }
  public putPromptTemplates(value: DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[] | cdktf.IResolvable) {
    this._promptTemplates.internalValue = value;
  }
  public resetPromptTemplates() {
    this._promptTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTemplatesInput() {
    return this._promptTemplates.internalValue;
  }
}
export interface DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases {
  /**
  * Language code of the phrase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#language_code DialogflowCxGenerativeSettings#language_code}
  */
  readonly languageCode: string;
  /**
  * Text input which can be used for prompt or banned phrases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#text DialogflowCxGenerativeSettings#text}
  */
  readonly text: string;
}

export function dialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesToTerraform(struct?: DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesToHclTerraform(struct?: DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    language_code: {
      value: cdktf.stringToHclTerraform(struct!.languageCode),
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

export class DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._languageCode = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._languageCode = value.languageCode;
      this._text = value.text;
    }
  }

  // language_code - computed: false, optional: false, required: true
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference {
    return new DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxGenerativeSettingsGenerativeSafetySettings {
  /**
  * Optional. Default phrase match strategy for banned phrases.
  * See [PhraseMatchStrategy](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings#phrasematchstrategy) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#default_banned_phrase_match_strategy DialogflowCxGenerativeSettings#default_banned_phrase_match_strategy}
  */
  readonly defaultBannedPhraseMatchStrategy?: string;
  /**
  * banned_phrases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#banned_phrases DialogflowCxGenerativeSettings#banned_phrases}
  */
  readonly bannedPhrases?: DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[] | cdktf.IResolvable;
}

export function dialogflowCxGenerativeSettingsGenerativeSafetySettingsToTerraform(struct?: DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference | DialogflowCxGenerativeSettingsGenerativeSafetySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_banned_phrase_match_strategy: cdktf.stringToTerraform(struct!.defaultBannedPhraseMatchStrategy),
    banned_phrases: cdktf.listMapper(dialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesToTerraform, true)(struct!.bannedPhrases),
  }
}


export function dialogflowCxGenerativeSettingsGenerativeSafetySettingsToHclTerraform(struct?: DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference | DialogflowCxGenerativeSettingsGenerativeSafetySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_banned_phrase_match_strategy: {
      value: cdktf.stringToHclTerraform(struct!.defaultBannedPhraseMatchStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    banned_phrases: {
      value: cdktf.listMapperHcl(dialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesToHclTerraform, true)(struct!.bannedPhrases),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxGenerativeSettingsGenerativeSafetySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBannedPhraseMatchStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBannedPhraseMatchStrategy = this._defaultBannedPhraseMatchStrategy;
    }
    if (this._bannedPhrases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannedPhrases = this._bannedPhrases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxGenerativeSettingsGenerativeSafetySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultBannedPhraseMatchStrategy = undefined;
      this._bannedPhrases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultBannedPhraseMatchStrategy = value.defaultBannedPhraseMatchStrategy;
      this._bannedPhrases.internalValue = value.bannedPhrases;
    }
  }

  // default_banned_phrase_match_strategy - computed: false, optional: true, required: false
  private _defaultBannedPhraseMatchStrategy?: string; 
  public get defaultBannedPhraseMatchStrategy() {
    return this.getStringAttribute('default_banned_phrase_match_strategy');
  }
  public set defaultBannedPhraseMatchStrategy(value: string) {
    this._defaultBannedPhraseMatchStrategy = value;
  }
  public resetDefaultBannedPhraseMatchStrategy() {
    this._defaultBannedPhraseMatchStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBannedPhraseMatchStrategyInput() {
    return this._defaultBannedPhraseMatchStrategy;
  }

  // banned_phrases - computed: false, optional: true, required: false
  private _bannedPhrases = new DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList(this, "banned_phrases", false);
  public get bannedPhrases() {
    return this._bannedPhrases;
  }
  public putBannedPhrases(value: DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[] | cdktf.IResolvable) {
    this._bannedPhrases.internalValue = value;
  }
  public resetBannedPhrases() {
    this._bannedPhrases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannedPhrasesInput() {
    return this._bannedPhrases.internalValue;
  }
}
export interface DialogflowCxGenerativeSettingsKnowledgeConnectorSettings {
  /**
  * Name of the virtual agent. Used for LLM prompt. Can be left empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#agent DialogflowCxGenerativeSettings#agent}
  */
  readonly agent?: string;
  /**
  * Identity of the agent, e.g. "virtual agent", "AI assistant".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#agent_identity DialogflowCxGenerativeSettings#agent_identity}
  */
  readonly agentIdentity?: string;
  /**
  * Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#agent_scope DialogflowCxGenerativeSettings#agent_scope}
  */
  readonly agentScope?: string;
  /**
  * Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#business DialogflowCxGenerativeSettings#business}
  */
  readonly business?: string;
  /**
  * Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#business_description DialogflowCxGenerativeSettings#business_description}
  */
  readonly businessDescription?: string;
  /**
  * Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer). Per default the feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#disable_data_store_fallback DialogflowCxGenerativeSettings#disable_data_store_fallback}
  */
  readonly disableDataStoreFallback?: boolean | cdktf.IResolvable;
}

export function dialogflowCxGenerativeSettingsKnowledgeConnectorSettingsToTerraform(struct?: DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference | DialogflowCxGenerativeSettingsKnowledgeConnectorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    agent_identity: cdktf.stringToTerraform(struct!.agentIdentity),
    agent_scope: cdktf.stringToTerraform(struct!.agentScope),
    business: cdktf.stringToTerraform(struct!.business),
    business_description: cdktf.stringToTerraform(struct!.businessDescription),
    disable_data_store_fallback: cdktf.booleanToTerraform(struct!.disableDataStoreFallback),
  }
}


export function dialogflowCxGenerativeSettingsKnowledgeConnectorSettingsToHclTerraform(struct?: DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference | DialogflowCxGenerativeSettingsKnowledgeConnectorSettings): any {
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
    agent_identity: {
      value: cdktf.stringToHclTerraform(struct!.agentIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_scope: {
      value: cdktf.stringToHclTerraform(struct!.agentScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    business: {
      value: cdktf.stringToHclTerraform(struct!.business),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    business_description: {
      value: cdktf.stringToHclTerraform(struct!.businessDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_data_store_fallback: {
      value: cdktf.booleanToHclTerraform(struct!.disableDataStoreFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxGenerativeSettingsKnowledgeConnectorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._agentIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentIdentity = this._agentIdentity;
    }
    if (this._agentScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentScope = this._agentScope;
    }
    if (this._business !== undefined) {
      hasAnyValues = true;
      internalValueResult.business = this._business;
    }
    if (this._businessDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessDescription = this._businessDescription;
    }
    if (this._disableDataStoreFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDataStoreFallback = this._disableDataStoreFallback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxGenerativeSettingsKnowledgeConnectorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
      this._agentIdentity = undefined;
      this._agentScope = undefined;
      this._business = undefined;
      this._businessDescription = undefined;
      this._disableDataStoreFallback = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._agentIdentity = value.agentIdentity;
      this._agentScope = value.agentScope;
      this._business = value.business;
      this._businessDescription = value.businessDescription;
      this._disableDataStoreFallback = value.disableDataStoreFallback;
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

  // agent_identity - computed: false, optional: true, required: false
  private _agentIdentity?: string; 
  public get agentIdentity() {
    return this.getStringAttribute('agent_identity');
  }
  public set agentIdentity(value: string) {
    this._agentIdentity = value;
  }
  public resetAgentIdentity() {
    this._agentIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdentityInput() {
    return this._agentIdentity;
  }

  // agent_scope - computed: false, optional: true, required: false
  private _agentScope?: string; 
  public get agentScope() {
    return this.getStringAttribute('agent_scope');
  }
  public set agentScope(value: string) {
    this._agentScope = value;
  }
  public resetAgentScope() {
    this._agentScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentScopeInput() {
    return this._agentScope;
  }

  // business - computed: false, optional: true, required: false
  private _business?: string; 
  public get business() {
    return this.getStringAttribute('business');
  }
  public set business(value: string) {
    this._business = value;
  }
  public resetBusiness() {
    this._business = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessInput() {
    return this._business;
  }

  // business_description - computed: false, optional: true, required: false
  private _businessDescription?: string; 
  public get businessDescription() {
    return this.getStringAttribute('business_description');
  }
  public set businessDescription(value: string) {
    this._businessDescription = value;
  }
  public resetBusinessDescription() {
    this._businessDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessDescriptionInput() {
    return this._businessDescription;
  }

  // disable_data_store_fallback - computed: false, optional: true, required: false
  private _disableDataStoreFallback?: boolean | cdktf.IResolvable; 
  public get disableDataStoreFallback() {
    return this.getBooleanAttribute('disable_data_store_fallback');
  }
  public set disableDataStoreFallback(value: boolean | cdktf.IResolvable) {
    this._disableDataStoreFallback = value;
  }
  public resetDisableDataStoreFallback() {
    this._disableDataStoreFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDataStoreFallbackInput() {
    return this._disableDataStoreFallback;
  }
}
export interface DialogflowCxGenerativeSettingsLlmModelSettings {
  /**
  * The selected LLM model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#model DialogflowCxGenerativeSettings#model}
  */
  readonly model?: string;
  /**
  * The custom prompt to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#prompt_text DialogflowCxGenerativeSettings#prompt_text}
  */
  readonly promptText?: string;
}

export function dialogflowCxGenerativeSettingsLlmModelSettingsToTerraform(struct?: DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference | DialogflowCxGenerativeSettingsLlmModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    prompt_text: cdktf.stringToTerraform(struct!.promptText),
  }
}


export function dialogflowCxGenerativeSettingsLlmModelSettingsToHclTerraform(struct?: DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference | DialogflowCxGenerativeSettingsLlmModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt_text: {
      value: cdktf.stringToHclTerraform(struct!.promptText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxGenerativeSettingsLlmModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._promptText !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptText = this._promptText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxGenerativeSettingsLlmModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._promptText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._promptText = value.promptText;
    }
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

  // prompt_text - computed: false, optional: true, required: false
  private _promptText?: string; 
  public get promptText() {
    return this.getStringAttribute('prompt_text');
  }
  public set promptText(value: string) {
    this._promptText = value;
  }
  public resetPromptText() {
    this._promptText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTextInput() {
    return this._promptText;
  }
}
export interface DialogflowCxGenerativeSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#create DialogflowCxGenerativeSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#delete DialogflowCxGenerativeSettings#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#update DialogflowCxGenerativeSettings#update}
  */
  readonly update?: string;
}

export function dialogflowCxGenerativeSettingsTimeoutsToTerraform(struct?: DialogflowCxGenerativeSettingsTimeouts | cdktf.IResolvable): any {
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


export function dialogflowCxGenerativeSettingsTimeoutsToHclTerraform(struct?: DialogflowCxGenerativeSettingsTimeouts | cdktf.IResolvable): any {
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

export class DialogflowCxGenerativeSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCxGenerativeSettingsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxGenerativeSettingsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings google_dialogflow_cx_generative_settings}
*/
export class DialogflowCxGenerativeSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_generative_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DialogflowCxGenerativeSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCxGenerativeSettings to import
  * @param importFromId The id of the existing DialogflowCxGenerativeSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCxGenerativeSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_generative_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_generative_settings google_dialogflow_cx_generative_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxGenerativeSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxGenerativeSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_generative_settings',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.2',
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
    this._id = config.id;
    this._languageCode = config.languageCode;
    this._parent = config.parent;
    this._fallbackSettings.internalValue = config.fallbackSettings;
    this._generativeSafetySettings.internalValue = config.generativeSafetySettings;
    this._knowledgeConnectorSettings.internalValue = config.knowledgeConnectorSettings;
    this._llmModelSettings.internalValue = config.llmModelSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // language_code - computed: false, optional: false, required: true
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
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

  // fallback_settings - computed: false, optional: true, required: false
  private _fallbackSettings = new DialogflowCxGenerativeSettingsFallbackSettingsOutputReference(this, "fallback_settings");
  public get fallbackSettings() {
    return this._fallbackSettings;
  }
  public putFallbackSettings(value: DialogflowCxGenerativeSettingsFallbackSettings) {
    this._fallbackSettings.internalValue = value;
  }
  public resetFallbackSettings() {
    this._fallbackSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackSettingsInput() {
    return this._fallbackSettings.internalValue;
  }

  // generative_safety_settings - computed: false, optional: true, required: false
  private _generativeSafetySettings = new DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference(this, "generative_safety_settings");
  public get generativeSafetySettings() {
    return this._generativeSafetySettings;
  }
  public putGenerativeSafetySettings(value: DialogflowCxGenerativeSettingsGenerativeSafetySettings) {
    this._generativeSafetySettings.internalValue = value;
  }
  public resetGenerativeSafetySettings() {
    this._generativeSafetySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeSafetySettingsInput() {
    return this._generativeSafetySettings.internalValue;
  }

  // knowledge_connector_settings - computed: false, optional: true, required: false
  private _knowledgeConnectorSettings = new DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference(this, "knowledge_connector_settings");
  public get knowledgeConnectorSettings() {
    return this._knowledgeConnectorSettings;
  }
  public putKnowledgeConnectorSettings(value: DialogflowCxGenerativeSettingsKnowledgeConnectorSettings) {
    this._knowledgeConnectorSettings.internalValue = value;
  }
  public resetKnowledgeConnectorSettings() {
    this._knowledgeConnectorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeConnectorSettingsInput() {
    return this._knowledgeConnectorSettings.internalValue;
  }

  // llm_model_settings - computed: false, optional: true, required: false
  private _llmModelSettings = new DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference(this, "llm_model_settings");
  public get llmModelSettings() {
    return this._llmModelSettings;
  }
  public putLlmModelSettings(value: DialogflowCxGenerativeSettingsLlmModelSettings) {
    this._llmModelSettings.internalValue = value;
  }
  public resetLlmModelSettings() {
    this._llmModelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmModelSettingsInput() {
    return this._llmModelSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCxGenerativeSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxGenerativeSettingsTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      language_code: cdktf.stringToTerraform(this._languageCode),
      parent: cdktf.stringToTerraform(this._parent),
      fallback_settings: dialogflowCxGenerativeSettingsFallbackSettingsToTerraform(this._fallbackSettings.internalValue),
      generative_safety_settings: dialogflowCxGenerativeSettingsGenerativeSafetySettingsToTerraform(this._generativeSafetySettings.internalValue),
      knowledge_connector_settings: dialogflowCxGenerativeSettingsKnowledgeConnectorSettingsToTerraform(this._knowledgeConnectorSettings.internalValue),
      llm_model_settings: dialogflowCxGenerativeSettingsLlmModelSettingsToTerraform(this._llmModelSettings.internalValue),
      timeouts: dialogflowCxGenerativeSettingsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_settings: {
        value: dialogflowCxGenerativeSettingsFallbackSettingsToHclTerraform(this._fallbackSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxGenerativeSettingsFallbackSettingsList",
      },
      generative_safety_settings: {
        value: dialogflowCxGenerativeSettingsGenerativeSafetySettingsToHclTerraform(this._generativeSafetySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxGenerativeSettingsGenerativeSafetySettingsList",
      },
      knowledge_connector_settings: {
        value: dialogflowCxGenerativeSettingsKnowledgeConnectorSettingsToHclTerraform(this._knowledgeConnectorSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsList",
      },
      llm_model_settings: {
        value: dialogflowCxGenerativeSettingsLlmModelSettingsToHclTerraform(this._llmModelSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxGenerativeSettingsLlmModelSettingsList",
      },
      timeouts: {
        value: dialogflowCxGenerativeSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCxGenerativeSettingsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
