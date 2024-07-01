/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable name of the page, unique within the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#display_name DialogflowCxPage#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#id DialogflowCxPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The language of the following fields in page:
  * 
  * Page.entry_fulfillment.messages
  * Page.entry_fulfillment.conditional_cases
  * Page.event_handlers.trigger_fulfillment.messages
  * Page.event_handlers.trigger_fulfillment.conditional_cases
  * Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages
  * Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases
  * Page.form.parameters.fill_behavior.reprompt_event_handlers.messages
  * Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases
  * Page.transition_routes.trigger_fulfillment.messages
  * Page.transition_routes.trigger_fulfillment.conditional_cases
  * If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#language_code DialogflowCxPage#language_code}
  */
  readonly languageCode?: string;
  /**
  * The flow to create a page for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#parent DialogflowCxPage#parent}
  */
  readonly parent?: string;
  /**
  * Ordered list of TransitionRouteGroups associated with the page. Transition route groups must be unique within a page.
  * If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -> page's transition route group -> flow's transition routes.
  * If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.
  * Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#transition_route_groups DialogflowCxPage#transition_route_groups}
  */
  readonly transitionRouteGroups?: string[];
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#advanced_settings DialogflowCxPage#advanced_settings}
  */
  readonly advancedSettings?: DialogflowCxPageAdvancedSettings;
  /**
  * entry_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#entry_fulfillment DialogflowCxPage#entry_fulfillment}
  */
  readonly entryFulfillment?: DialogflowCxPageEntryFulfillment;
  /**
  * event_handlers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#event_handlers DialogflowCxPage#event_handlers}
  */
  readonly eventHandlers?: DialogflowCxPageEventHandlers[] | cdktf.IResolvable;
  /**
  * form block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#form DialogflowCxPage#form}
  */
  readonly form?: DialogflowCxPageForm;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#timeouts DialogflowCxPage#timeouts}
  */
  readonly timeouts?: DialogflowCxPageTimeouts;
  /**
  * transition_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#transition_routes DialogflowCxPage#transition_routes}
  */
  readonly transitionRoutes?: DialogflowCxPageTransitionRoutes[] | cdktf.IResolvable;
}
export interface DialogflowCxPageAdvancedSettingsDtmfSettings {
  /**
  * If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#enabled DialogflowCxPage#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The digit that terminates a DTMF digit sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#finish_digit DialogflowCxPage#finish_digit}
  */
  readonly finishDigit?: string;
  /**
  * Max length of DTMF digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#max_digits DialogflowCxPage#max_digits}
  */
  readonly maxDigits?: number;
}

export function dialogflowCxPageAdvancedSettingsDtmfSettingsToTerraform(struct?: DialogflowCxPageAdvancedSettingsDtmfSettingsOutputReference | DialogflowCxPageAdvancedSettingsDtmfSettings): any {
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


export function dialogflowCxPageAdvancedSettingsDtmfSettingsToHclTerraform(struct?: DialogflowCxPageAdvancedSettingsDtmfSettingsOutputReference | DialogflowCxPageAdvancedSettingsDtmfSettings): any {
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

export class DialogflowCxPageAdvancedSettingsDtmfSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageAdvancedSettingsDtmfSettings | undefined {
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

  public set internalValue(value: DialogflowCxPageAdvancedSettingsDtmfSettings | undefined) {
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
export interface DialogflowCxPageAdvancedSettings {
  /**
  * dtmf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#dtmf_settings DialogflowCxPage#dtmf_settings}
  */
  readonly dtmfSettings?: DialogflowCxPageAdvancedSettingsDtmfSettings;
}

export function dialogflowCxPageAdvancedSettingsToTerraform(struct?: DialogflowCxPageAdvancedSettingsOutputReference | DialogflowCxPageAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dtmf_settings: dialogflowCxPageAdvancedSettingsDtmfSettingsToTerraform(struct!.dtmfSettings),
  }
}


export function dialogflowCxPageAdvancedSettingsToHclTerraform(struct?: DialogflowCxPageAdvancedSettingsOutputReference | DialogflowCxPageAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dtmf_settings: {
      value: dialogflowCxPageAdvancedSettingsDtmfSettingsToHclTerraform(struct!.dtmfSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageAdvancedSettingsDtmfSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dtmfSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtmfSettings = this._dtmfSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dtmfSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dtmfSettings.internalValue = value.dtmfSettings;
    }
  }

  // dtmf_settings - computed: false, optional: true, required: false
  private _dtmfSettings = new DialogflowCxPageAdvancedSettingsDtmfSettingsOutputReference(this, "dtmf_settings");
  public get dtmfSettings() {
    return this._dtmfSettings;
  }
  public putDtmfSettings(value: DialogflowCxPageAdvancedSettingsDtmfSettings) {
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
export interface DialogflowCxPageEntryFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#cases DialogflowCxPage#cases}
  */
  readonly cases?: string;
}

export function dialogflowCxPageEntryFulfillmentConditionalCasesToTerraform(struct?: DialogflowCxPageEntryFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function dialogflowCxPageEntryFulfillmentConditionalCasesToHclTerraform(struct?: DialogflowCxPageEntryFulfillmentConditionalCases | cdktf.IResolvable): any {
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

export class DialogflowCxPageEntryFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageEntryFulfillmentConditionalCases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageEntryFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
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

export class DialogflowCxPageEntryFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageEntryFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageEntryFulfillmentConditionalCasesOutputReference {
    return new DialogflowCxPageEntryFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageEntryFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#metadata DialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxPageEntryFulfillmentMessagesConversationSuccessToTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxPageEntryFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxPageEntryFulfillmentMessagesConversationSuccessToHclTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxPageEntryFulfillmentMessagesConversationSuccess): any {
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

export class DialogflowCxPageEntryFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEntryFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageEntryFulfillmentMessagesConversationSuccess | undefined) {
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
export interface DialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#metadata DialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff): any {
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

export class DialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff | undefined) {
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
export interface DialogflowCxPageEntryFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#ssml DialogflowCxPage#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: string;
}

export function dialogflowCxPageEntryFulfillmentMessagesOutputAudioTextToTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxPageEntryFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dialogflowCxPageEntryFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxPageEntryFulfillmentMessagesOutputAudioText): any {
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

export class DialogflowCxPageEntryFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEntryFulfillmentMessagesOutputAudioText | undefined {
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

  public set internalValue(value: DialogflowCxPageEntryFulfillmentMessagesOutputAudioText | undefined) {
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
export interface DialogflowCxPageEntryFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#audio_uri DialogflowCxPage#audio_uri}
  */
  readonly audioUri: string;
}

export function dialogflowCxPageEntryFulfillmentMessagesPlayAudioToTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesPlayAudioOutputReference | DialogflowCxPageEntryFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function dialogflowCxPageEntryFulfillmentMessagesPlayAudioToHclTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesPlayAudioOutputReference | DialogflowCxPageEntryFulfillmentMessagesPlayAudio): any {
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

export class DialogflowCxPageEntryFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEntryFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageEntryFulfillmentMessagesPlayAudio | undefined) {
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
export interface DialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#phone_number DialogflowCxPage#phone_number}
  */
  readonly phoneNumber: string;
}

export function dialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function dialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall): any {
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

export class DialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall | undefined) {
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
export interface DialogflowCxPageEntryFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: string[];
}

export function dialogflowCxPageEntryFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesTextOutputReference | DialogflowCxPageEntryFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function dialogflowCxPageEntryFulfillmentMessagesTextToHclTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesTextOutputReference | DialogflowCxPageEntryFulfillmentMessagesText): any {
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

export class DialogflowCxPageEntryFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEntryFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageEntryFulfillmentMessagesText | undefined) {
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
export interface DialogflowCxPageEntryFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#channel DialogflowCxPage#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#payload DialogflowCxPage#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#conversation_success DialogflowCxPage#conversation_success}
  */
  readonly conversationSuccess?: DialogflowCxPageEntryFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#live_agent_handoff DialogflowCxPage#live_agent_handoff}
  */
  readonly liveAgentHandoff?: DialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#output_audio_text DialogflowCxPage#output_audio_text}
  */
  readonly outputAudioText?: DialogflowCxPageEntryFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#play_audio DialogflowCxPage#play_audio}
  */
  readonly playAudio?: DialogflowCxPageEntryFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#telephony_transfer_call DialogflowCxPage#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: DialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageEntryFulfillmentMessagesText;
}

export function dialogflowCxPageEntryFulfillmentMessagesToTerraform(struct?: DialogflowCxPageEntryFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: dialogflowCxPageEntryFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: dialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: dialogflowCxPageEntryFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: dialogflowCxPageEntryFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: dialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: dialogflowCxPageEntryFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function dialogflowCxPageEntryFulfillmentMessagesToHclTerraform(struct?: DialogflowCxPageEntryFulfillmentMessages | cdktf.IResolvable): any {
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
      value: dialogflowCxPageEntryFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEntryFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: dialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: dialogflowCxPageEntryFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEntryFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: dialogflowCxPageEntryFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEntryFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: dialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: dialogflowCxPageEntryFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEntryFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageEntryFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageEntryFulfillmentMessages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageEntryFulfillmentMessages | cdktf.IResolvable | undefined) {
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
  private _conversationSuccess = new DialogflowCxPageEntryFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: DialogflowCxPageEntryFulfillmentMessagesConversationSuccess) {
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
  private _liveAgentHandoff = new DialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: DialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff) {
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
  private _outputAudioText = new DialogflowCxPageEntryFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: DialogflowCxPageEntryFulfillmentMessagesOutputAudioText) {
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
  private _playAudio = new DialogflowCxPageEntryFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: DialogflowCxPageEntryFulfillmentMessagesPlayAudio) {
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
  private _telephonyTransferCall = new DialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: DialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall) {
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
  private _text = new DialogflowCxPageEntryFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: DialogflowCxPageEntryFulfillmentMessagesText) {
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

export class DialogflowCxPageEntryFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageEntryFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageEntryFulfillmentMessagesOutputReference {
    return new DialogflowCxPageEntryFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageEntryFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#parameter DialogflowCxPage#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#value DialogflowCxPage#value}
  */
  readonly value?: string;
}

export function dialogflowCxPageEntryFulfillmentSetParameterActionsToTerraform(struct?: DialogflowCxPageEntryFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dialogflowCxPageEntryFulfillmentSetParameterActionsToHclTerraform(struct?: DialogflowCxPageEntryFulfillmentSetParameterActions | cdktf.IResolvable): any {
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

export class DialogflowCxPageEntryFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageEntryFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageEntryFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
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

export class DialogflowCxPageEntryFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageEntryFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageEntryFulfillmentSetParameterActionsOutputReference {
    return new DialogflowCxPageEntryFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageEntryFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#tag DialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#webhook DialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#conditional_cases DialogflowCxPage#conditional_cases}
  */
  readonly conditionalCases?: DialogflowCxPageEntryFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#messages DialogflowCxPage#messages}
  */
  readonly messages?: DialogflowCxPageEntryFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#set_parameter_actions DialogflowCxPage#set_parameter_actions}
  */
  readonly setParameterActions?: DialogflowCxPageEntryFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function dialogflowCxPageEntryFulfillmentToTerraform(struct?: DialogflowCxPageEntryFulfillmentOutputReference | DialogflowCxPageEntryFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(dialogflowCxPageEntryFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(dialogflowCxPageEntryFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(dialogflowCxPageEntryFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function dialogflowCxPageEntryFulfillmentToHclTerraform(struct?: DialogflowCxPageEntryFulfillmentOutputReference | DialogflowCxPageEntryFulfillment): any {
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
      value: cdktf.listMapperHcl(dialogflowCxPageEntryFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEntryFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(dialogflowCxPageEntryFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEntryFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(dialogflowCxPageEntryFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEntryFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageEntryFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEntryFulfillment | undefined {
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

  public set internalValue(value: DialogflowCxPageEntryFulfillment | undefined) {
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
  private _conditionalCases = new DialogflowCxPageEntryFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: DialogflowCxPageEntryFulfillmentConditionalCases[] | cdktf.IResolvable) {
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
  private _messages = new DialogflowCxPageEntryFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: DialogflowCxPageEntryFulfillmentMessages[] | cdktf.IResolvable) {
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
  private _setParameterActions = new DialogflowCxPageEntryFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: DialogflowCxPageEntryFulfillmentSetParameterActions[] | cdktf.IResolvable) {
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
export interface DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#cases DialogflowCxPage#cases}
  */
  readonly cases?: string;
}

export function dialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function dialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesToHclTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
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

export class DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
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

export class DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesOutputReference {
    return new DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#metadata DialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess): any {
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

export class DialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess | undefined) {
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
export interface DialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#metadata DialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): any {
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

export class DialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff | undefined) {
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
export interface DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#ssml DialogflowCxPage#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: string;
}

export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText): any {
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

export class DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText | undefined {
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

  public set internalValue(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText | undefined) {
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
export interface DialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#audio_uri DialogflowCxPage#audio_uri}
  */
  readonly audioUri: string;
}

export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio): any {
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

export class DialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio | undefined) {
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
export interface DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#phone_number DialogflowCxPage#phone_number}
  */
  readonly phoneNumber: string;
}

export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): any {
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

export class DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall | undefined) {
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
export interface DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: string[];
}

export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextToHclTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText): any {
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

export class DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText | undefined) {
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
export interface DialogflowCxPageEventHandlersTriggerFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#channel DialogflowCxPage#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#payload DialogflowCxPage#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#conversation_success DialogflowCxPage#conversation_success}
  */
  readonly conversationSuccess?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#live_agent_handoff DialogflowCxPage#live_agent_handoff}
  */
  readonly liveAgentHandoff?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#output_audio_text DialogflowCxPage#output_audio_text}
  */
  readonly outputAudioText?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#play_audio DialogflowCxPage#play_audio}
  */
  readonly playAudio?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#telephony_transfer_call DialogflowCxPage#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText;
}

export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesToHclTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
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
      value: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable | undefined) {
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
  private _conversationSuccess = new DialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess) {
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
  private _liveAgentHandoff = new DialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff) {
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
  private _outputAudioText = new DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText) {
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
  private _playAudio = new DialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio) {
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
  private _telephonyTransferCall = new DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall) {
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
  private _text = new DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText) {
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

export class DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference {
    return new DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#parameter DialogflowCxPage#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#value DialogflowCxPage#value}
  */
  readonly value?: string;
}

export function dialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsToHclTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
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

export class DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
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

export class DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsOutputReference {
    return new DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageEventHandlersTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#tag DialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#webhook DialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#conditional_cases DialogflowCxPage#conditional_cases}
  */
  readonly conditionalCases?: DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#messages DialogflowCxPage#messages}
  */
  readonly messages?: DialogflowCxPageEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#set_parameter_actions DialogflowCxPage#set_parameter_actions}
  */
  readonly setParameterActions?: DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function dialogflowCxPageEventHandlersTriggerFulfillmentToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference | DialogflowCxPageEventHandlersTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(dialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(dialogflowCxPageEventHandlersTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(dialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function dialogflowCxPageEventHandlersTriggerFulfillmentToHclTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference | DialogflowCxPageEventHandlersTriggerFulfillment): any {
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
      value: cdktf.listMapperHcl(dialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(dialogflowCxPageEventHandlersTriggerFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(dialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageEventHandlersTriggerFulfillment | undefined {
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

  public set internalValue(value: DialogflowCxPageEventHandlersTriggerFulfillment | undefined) {
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
  private _conditionalCases = new DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: DialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable) {
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
  private _messages = new DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable) {
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
  private _setParameterActions = new DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: DialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable) {
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
export interface DialogflowCxPageEventHandlers {
  /**
  * The name of the event to handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#event DialogflowCxPage#event}
  */
  readonly event?: string;
  /**
  * The target flow to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#target_flow DialogflowCxPage#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#target_page DialogflowCxPage#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#trigger_fulfillment DialogflowCxPage#trigger_fulfillment}
  */
  readonly triggerFulfillment?: DialogflowCxPageEventHandlersTriggerFulfillment;
}

export function dialogflowCxPageEventHandlersToTerraform(struct?: DialogflowCxPageEventHandlers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    trigger_fulfillment: dialogflowCxPageEventHandlersTriggerFulfillmentToTerraform(struct!.triggerFulfillment),
  }
}


export function dialogflowCxPageEventHandlersToHclTerraform(struct?: DialogflowCxPageEventHandlers | cdktf.IResolvable): any {
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
      value: dialogflowCxPageEventHandlersTriggerFulfillmentToHclTerraform(struct!.triggerFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageEventHandlersTriggerFulfillmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageEventHandlersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageEventHandlers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageEventHandlers | cdktf.IResolvable | undefined) {
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
  private _triggerFulfillment = new DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference(this, "trigger_fulfillment");
  public get triggerFulfillment() {
    return this._triggerFulfillment;
  }
  public putTriggerFulfillment(value: DialogflowCxPageEventHandlersTriggerFulfillment) {
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

export class DialogflowCxPageEventHandlersList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageEventHandlers[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageEventHandlersOutputReference {
    return new DialogflowCxPageEventHandlersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageFormParametersAdvancedSettingsDtmfSettings {
  /**
  * If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#enabled DialogflowCxPage#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The digit that terminates a DTMF digit sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#finish_digit DialogflowCxPage#finish_digit}
  */
  readonly finishDigit?: string;
  /**
  * Max length of DTMF digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#max_digits DialogflowCxPage#max_digits}
  */
  readonly maxDigits?: number;
}

export function dialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsToTerraform(struct?: DialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsOutputReference | DialogflowCxPageFormParametersAdvancedSettingsDtmfSettings): any {
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


export function dialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsToHclTerraform(struct?: DialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsOutputReference | DialogflowCxPageFormParametersAdvancedSettingsDtmfSettings): any {
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

export class DialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersAdvancedSettingsDtmfSettings | undefined {
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

  public set internalValue(value: DialogflowCxPageFormParametersAdvancedSettingsDtmfSettings | undefined) {
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
export interface DialogflowCxPageFormParametersAdvancedSettings {
  /**
  * dtmf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#dtmf_settings DialogflowCxPage#dtmf_settings}
  */
  readonly dtmfSettings?: DialogflowCxPageFormParametersAdvancedSettingsDtmfSettings;
}

export function dialogflowCxPageFormParametersAdvancedSettingsToTerraform(struct?: DialogflowCxPageFormParametersAdvancedSettingsOutputReference | DialogflowCxPageFormParametersAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dtmf_settings: dialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsToTerraform(struct!.dtmfSettings),
  }
}


export function dialogflowCxPageFormParametersAdvancedSettingsToHclTerraform(struct?: DialogflowCxPageFormParametersAdvancedSettingsOutputReference | DialogflowCxPageFormParametersAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dtmf_settings: {
      value: dialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsToHclTerraform(struct!.dtmfSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageFormParametersAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dtmfSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtmfSettings = this._dtmfSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParametersAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dtmfSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dtmfSettings.internalValue = value.dtmfSettings;
    }
  }

  // dtmf_settings - computed: false, optional: true, required: false
  private _dtmfSettings = new DialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsOutputReference(this, "dtmf_settings");
  public get dtmfSettings() {
    return this._dtmfSettings;
  }
  public putDtmfSettings(value: DialogflowCxPageFormParametersAdvancedSettingsDtmfSettings) {
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
export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#cases DialogflowCxPage#cases}
  */
  readonly cases?: string;
}

export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases | cdktf.IResolvable): any {
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

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
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

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesOutputReference {
    return new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#metadata DialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess): any {
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

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess | undefined) {
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
export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#metadata DialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff): any {
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

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff | undefined) {
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
export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#ssml DialogflowCxPage#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: string;
}

export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText): any {
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

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText | undefined {
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

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText | undefined) {
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
export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#audio_uri DialogflowCxPage#audio_uri}
  */
  readonly audioUri: string;
}

export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio): any {
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

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio | undefined) {
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
export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#phone_number DialogflowCxPage#phone_number}
  */
  readonly phoneNumber: string;
}

export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall): any {
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

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall | undefined) {
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
export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: string[];
}

export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText): any {
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

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText | undefined) {
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
export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#channel DialogflowCxPage#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#payload DialogflowCxPage#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#conversation_success DialogflowCxPage#conversation_success}
  */
  readonly conversationSuccess?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#live_agent_handoff DialogflowCxPage#live_agent_handoff}
  */
  readonly liveAgentHandoff?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#output_audio_text DialogflowCxPage#output_audio_text}
  */
  readonly outputAudioText?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#play_audio DialogflowCxPage#play_audio}
  */
  readonly playAudio?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#telephony_transfer_call DialogflowCxPage#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText;
}

export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages | cdktf.IResolvable): any {
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
      value: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages | cdktf.IResolvable | undefined) {
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
  private _conversationSuccess = new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess) {
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
  private _liveAgentHandoff = new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff) {
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
  private _outputAudioText = new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText) {
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
  private _playAudio = new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio) {
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
  private _telephonyTransferCall = new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall) {
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
  private _text = new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText) {
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

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference {
    return new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#parameter DialogflowCxPage#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#value DialogflowCxPage#value}
  */
  readonly value?: string;
}

export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions | cdktf.IResolvable): any {
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

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
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

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsOutputReference {
    return new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#tag DialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#webhook DialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#conditional_cases DialogflowCxPage#conditional_cases}
  */
  readonly conditionalCases?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#messages DialogflowCxPage#messages}
  */
  readonly messages?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#set_parameter_actions DialogflowCxPage#set_parameter_actions}
  */
  readonly setParameterActions?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment): any {
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
      value: cdktf.listMapperHcl(dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment | undefined {
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

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment | undefined) {
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
  private _conditionalCases = new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases[] | cdktf.IResolvable) {
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
  private _messages = new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[] | cdktf.IResolvable) {
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
  private _setParameterActions = new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions[] | cdktf.IResolvable) {
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
export interface DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#cases DialogflowCxPage#cases}
  */
  readonly cases?: string;
}

export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
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

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
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

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesOutputReference {
    return new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#metadata DialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess): any {
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

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess | undefined) {
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
export interface DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#metadata DialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): any {
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

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff | undefined) {
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
export interface DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#ssml DialogflowCxPage#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: string;
}

export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText): any {
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

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText | undefined {
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

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText | undefined) {
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
export interface DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#audio_uri DialogflowCxPage#audio_uri}
  */
  readonly audioUri: string;
}

export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio): any {
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

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio | undefined) {
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
export interface DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#phone_number DialogflowCxPage#phone_number}
  */
  readonly phoneNumber: string;
}

export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): any {
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

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall | undefined) {
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
export interface DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: string[];
}

export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText): any {
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

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText | undefined) {
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
export interface DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#channel DialogflowCxPage#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#payload DialogflowCxPage#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#conversation_success DialogflowCxPage#conversation_success}
  */
  readonly conversationSuccess?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#live_agent_handoff DialogflowCxPage#live_agent_handoff}
  */
  readonly liveAgentHandoff?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#output_audio_text DialogflowCxPage#output_audio_text}
  */
  readonly outputAudioText?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#play_audio DialogflowCxPage#play_audio}
  */
  readonly playAudio?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#telephony_transfer_call DialogflowCxPage#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText;
}

export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
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
      value: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable | undefined) {
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
  private _conversationSuccess = new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess) {
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
  private _liveAgentHandoff = new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff) {
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
  private _outputAudioText = new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText) {
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
  private _playAudio = new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio) {
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
  private _telephonyTransferCall = new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall) {
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
  private _text = new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText) {
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

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputReference {
    return new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#parameter DialogflowCxPage#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#value DialogflowCxPage#value}
  */
  readonly value?: string;
}

export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
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

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
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

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsOutputReference {
    return new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#tag DialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#webhook DialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#conditional_cases DialogflowCxPage#conditional_cases}
  */
  readonly conditionalCases?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#messages DialogflowCxPage#messages}
  */
  readonly messages?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#set_parameter_actions DialogflowCxPage#set_parameter_actions}
  */
  readonly setParameterActions?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentOutputReference | DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment): any {
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
      value: cdktf.listMapperHcl(dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment | undefined {
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

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment | undefined) {
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
  private _conditionalCases = new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable) {
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
  private _messages = new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable) {
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
  private _setParameterActions = new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable) {
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
export interface DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers {
  /**
  * The name of the event to handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#event DialogflowCxPage#event}
  */
  readonly event?: string;
  /**
  * The target flow to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#target_flow DialogflowCxPage#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#target_page DialogflowCxPage#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#trigger_fulfillment DialogflowCxPage#trigger_fulfillment}
  */
  readonly triggerFulfillment?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment;
}

export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    trigger_fulfillment: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentToTerraform(struct!.triggerFulfillment),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers | cdktf.IResolvable): any {
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
      value: dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentToHclTerraform(struct!.triggerFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers | cdktf.IResolvable | undefined) {
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
  private _triggerFulfillment = new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentOutputReference(this, "trigger_fulfillment");
  public get triggerFulfillment() {
    return this._triggerFulfillment;
  }
  public putTriggerFulfillment(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment) {
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

export class DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersOutputReference {
    return new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageFormParametersFillBehavior {
  /**
  * initial_prompt_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#initial_prompt_fulfillment DialogflowCxPage#initial_prompt_fulfillment}
  */
  readonly initialPromptFulfillment?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment;
  /**
  * reprompt_event_handlers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#reprompt_event_handlers DialogflowCxPage#reprompt_event_handlers}
  */
  readonly repromptEventHandlers?: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers[] | cdktf.IResolvable;
}

export function dialogflowCxPageFormParametersFillBehaviorToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorOutputReference | DialogflowCxPageFormParametersFillBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_prompt_fulfillment: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentToTerraform(struct!.initialPromptFulfillment),
    reprompt_event_handlers: cdktf.listMapper(dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersToTerraform, true)(struct!.repromptEventHandlers),
  }
}


export function dialogflowCxPageFormParametersFillBehaviorToHclTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorOutputReference | DialogflowCxPageFormParametersFillBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial_prompt_fulfillment: {
      value: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentToHclTerraform(struct!.initialPromptFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentList",
    },
    reprompt_event_handlers: {
      value: cdktf.listMapperHcl(dialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersToHclTerraform, true)(struct!.repromptEventHandlers),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageFormParametersFillBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageFormParametersFillBehavior | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialPromptFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialPromptFulfillment = this._initialPromptFulfillment?.internalValue;
    }
    if (this._repromptEventHandlers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repromptEventHandlers = this._repromptEventHandlers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParametersFillBehavior | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._initialPromptFulfillment.internalValue = undefined;
      this._repromptEventHandlers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._initialPromptFulfillment.internalValue = value.initialPromptFulfillment;
      this._repromptEventHandlers.internalValue = value.repromptEventHandlers;
    }
  }

  // initial_prompt_fulfillment - computed: false, optional: true, required: false
  private _initialPromptFulfillment = new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference(this, "initial_prompt_fulfillment");
  public get initialPromptFulfillment() {
    return this._initialPromptFulfillment;
  }
  public putInitialPromptFulfillment(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment) {
    this._initialPromptFulfillment.internalValue = value;
  }
  public resetInitialPromptFulfillment() {
    this._initialPromptFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPromptFulfillmentInput() {
    return this._initialPromptFulfillment.internalValue;
  }

  // reprompt_event_handlers - computed: false, optional: true, required: false
  private _repromptEventHandlers = new DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersList(this, "reprompt_event_handlers", false);
  public get repromptEventHandlers() {
    return this._repromptEventHandlers;
  }
  public putRepromptEventHandlers(value: DialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers[] | cdktf.IResolvable) {
    this._repromptEventHandlers.internalValue = value;
  }
  public resetRepromptEventHandlers() {
    this._repromptEventHandlers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repromptEventHandlersInput() {
    return this._repromptEventHandlers.internalValue;
  }
}
export interface DialogflowCxPageFormParameters {
  /**
  * The default value of an optional parameter. If the parameter is required, the default value will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#default_value DialogflowCxPage#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The human-readable name of the parameter, unique within the form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#display_name DialogflowCxPage#display_name}
  */
  readonly displayName?: string;
  /**
  * The entity type of the parameter.
  * Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#entity_type DialogflowCxPage#entity_type}
  */
  readonly entityType?: string;
  /**
  * Indicates whether the parameter represents a list of values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#is_list DialogflowCxPage#is_list}
  */
  readonly isList?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the parameter content should be redacted in log.
  * If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#redact DialogflowCxPage#redact}
  */
  readonly redact?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them.
  * Required parameters must be filled before form filling concludes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#required DialogflowCxPage#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#advanced_settings DialogflowCxPage#advanced_settings}
  */
  readonly advancedSettings?: DialogflowCxPageFormParametersAdvancedSettings;
  /**
  * fill_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#fill_behavior DialogflowCxPage#fill_behavior}
  */
  readonly fillBehavior?: DialogflowCxPageFormParametersFillBehavior;
}

export function dialogflowCxPageFormParametersToTerraform(struct?: DialogflowCxPageFormParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    is_list: cdktf.booleanToTerraform(struct!.isList),
    redact: cdktf.booleanToTerraform(struct!.redact),
    required: cdktf.booleanToTerraform(struct!.required),
    advanced_settings: dialogflowCxPageFormParametersAdvancedSettingsToTerraform(struct!.advancedSettings),
    fill_behavior: dialogflowCxPageFormParametersFillBehaviorToTerraform(struct!.fillBehavior),
  }
}


export function dialogflowCxPageFormParametersToHclTerraform(struct?: DialogflowCxPageFormParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_list: {
      value: cdktf.booleanToHclTerraform(struct!.isList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redact: {
      value: cdktf.booleanToHclTerraform(struct!.redact),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advanced_settings: {
      value: dialogflowCxPageFormParametersAdvancedSettingsToHclTerraform(struct!.advancedSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersAdvancedSettingsList",
    },
    fill_behavior: {
      value: dialogflowCxPageFormParametersFillBehaviorToHclTerraform(struct!.fillBehavior),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersFillBehaviorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageFormParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageFormParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._isList !== undefined) {
      hasAnyValues = true;
      internalValueResult.isList = this._isList;
    }
    if (this._redact !== undefined) {
      hasAnyValues = true;
      internalValueResult.redact = this._redact;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._advancedSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSettings = this._advancedSettings?.internalValue;
    }
    if (this._fillBehavior?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillBehavior = this._fillBehavior?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageFormParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._displayName = undefined;
      this._entityType = undefined;
      this._isList = undefined;
      this._redact = undefined;
      this._required = undefined;
      this._advancedSettings.internalValue = undefined;
      this._fillBehavior.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._displayName = value.displayName;
      this._entityType = value.entityType;
      this._isList = value.isList;
      this._redact = value.redact;
      this._required = value.required;
      this._advancedSettings.internalValue = value.advancedSettings;
      this._fillBehavior.internalValue = value.fillBehavior;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // entity_type - computed: false, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // is_list - computed: false, optional: true, required: false
  private _isList?: boolean | cdktf.IResolvable; 
  public get isList() {
    return this.getBooleanAttribute('is_list');
  }
  public set isList(value: boolean | cdktf.IResolvable) {
    this._isList = value;
  }
  public resetIsList() {
    this._isList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isListInput() {
    return this._isList;
  }

  // redact - computed: false, optional: true, required: false
  private _redact?: boolean | cdktf.IResolvable; 
  public get redact() {
    return this.getBooleanAttribute('redact');
  }
  public set redact(value: boolean | cdktf.IResolvable) {
    this._redact = value;
  }
  public resetRedact() {
    this._redact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactInput() {
    return this._redact;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new DialogflowCxPageFormParametersAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: DialogflowCxPageFormParametersAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // fill_behavior - computed: false, optional: true, required: false
  private _fillBehavior = new DialogflowCxPageFormParametersFillBehaviorOutputReference(this, "fill_behavior");
  public get fillBehavior() {
    return this._fillBehavior;
  }
  public putFillBehavior(value: DialogflowCxPageFormParametersFillBehavior) {
    this._fillBehavior.internalValue = value;
  }
  public resetFillBehavior() {
    this._fillBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillBehaviorInput() {
    return this._fillBehavior.internalValue;
  }
}

export class DialogflowCxPageFormParametersList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageFormParameters[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageFormParametersOutputReference {
    return new DialogflowCxPageFormParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageForm {
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#parameters DialogflowCxPage#parameters}
  */
  readonly parameters?: DialogflowCxPageFormParameters[] | cdktf.IResolvable;
}

export function dialogflowCxPageFormToTerraform(struct?: DialogflowCxPageFormOutputReference | DialogflowCxPageForm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(dialogflowCxPageFormParametersToTerraform, true)(struct!.parameters),
  }
}


export function dialogflowCxPageFormToHclTerraform(struct?: DialogflowCxPageFormOutputReference | DialogflowCxPageForm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(dialogflowCxPageFormParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageFormParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageFormOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageForm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageForm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters.internalValue = value.parameters;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DialogflowCxPageFormParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DialogflowCxPageFormParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface DialogflowCxPageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#create DialogflowCxPage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#delete DialogflowCxPage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#update DialogflowCxPage#update}
  */
  readonly update?: string;
}

export function dialogflowCxPageTimeoutsToTerraform(struct?: DialogflowCxPageTimeouts | cdktf.IResolvable): any {
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


export function dialogflowCxPageTimeoutsToHclTerraform(struct?: DialogflowCxPageTimeouts | cdktf.IResolvable): any {
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

export class DialogflowCxPageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCxPageTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageTimeouts | cdktf.IResolvable | undefined) {
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
export interface DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#cases DialogflowCxPage#cases}
  */
  readonly cases?: string;
}

export function dialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function dialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesToHclTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
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

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
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

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference {
    return new DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#metadata DialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess): any {
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

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess | undefined) {
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
export interface DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#metadata DialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff): any {
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

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff | undefined) {
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
export interface DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#ssml DialogflowCxPage#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: string;
}

export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText): any {
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

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText | undefined {
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

  public set internalValue(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText | undefined) {
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
export interface DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#audio_uri DialogflowCxPage#audio_uri}
  */
  readonly audioUri: string;
}

export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio): any {
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

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio | undefined) {
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
export interface DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#phone_number DialogflowCxPage#phone_number}
  */
  readonly phoneNumber: string;
}

export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall): any {
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

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall | undefined) {
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
export interface DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: string[];
}

export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextToHclTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText): any {
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

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText | undefined) {
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
export interface DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#channel DialogflowCxPage#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#payload DialogflowCxPage#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#conversation_success DialogflowCxPage#conversation_success}
  */
  readonly conversationSuccess?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#live_agent_handoff DialogflowCxPage#live_agent_handoff}
  */
  readonly liveAgentHandoff?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#output_audio_text DialogflowCxPage#output_audio_text}
  */
  readonly outputAudioText?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#play_audio DialogflowCxPage#play_audio}
  */
  readonly playAudio?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#telephony_transfer_call DialogflowCxPage#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText;
}

export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesToHclTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable): any {
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
      value: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable | undefined) {
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
  private _conversationSuccess = new DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess) {
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
  private _liveAgentHandoff = new DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff) {
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
  private _outputAudioText = new DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText) {
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
  private _playAudio = new DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio) {
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
  private _telephonyTransferCall = new DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall) {
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
  private _text = new DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText) {
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

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference {
    return new DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#parameter DialogflowCxPage#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#value DialogflowCxPage#value}
  */
  readonly value?: string;
}

export function dialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsToHclTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
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

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
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

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference {
    return new DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPageTransitionRoutesTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#tag DialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#webhook DialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#conditional_cases DialogflowCxPage#conditional_cases}
  */
  readonly conditionalCases?: DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#messages DialogflowCxPage#messages}
  */
  readonly messages?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#set_parameter_actions DialogflowCxPage#set_parameter_actions}
  */
  readonly setParameterActions?: DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function dialogflowCxPageTransitionRoutesTriggerFulfillmentToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(dialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(dialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function dialogflowCxPageTransitionRoutesTriggerFulfillmentToHclTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillment): any {
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
      value: cdktf.listMapperHcl(dialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(dialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPageTransitionRoutesTriggerFulfillment | undefined {
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

  public set internalValue(value: DialogflowCxPageTransitionRoutesTriggerFulfillment | undefined) {
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
  private _conditionalCases = new DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases[] | cdktf.IResolvable) {
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
  private _messages = new DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable) {
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
  private _setParameterActions = new DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable) {
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
export interface DialogflowCxPageTransitionRoutes {
  /**
  * The condition to evaluate against form parameters or session parameters.
  * At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#condition DialogflowCxPage#condition}
  */
  readonly condition?: string;
  /**
  * The unique identifier of an Intent.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#intent DialogflowCxPage#intent}
  */
  readonly intent?: string;
  /**
  * The target flow to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#target_flow DialogflowCxPage#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#target_page DialogflowCxPage#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#trigger_fulfillment DialogflowCxPage#trigger_fulfillment}
  */
  readonly triggerFulfillment?: DialogflowCxPageTransitionRoutesTriggerFulfillment;
}

export function dialogflowCxPageTransitionRoutesToTerraform(struct?: DialogflowCxPageTransitionRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    intent: cdktf.stringToTerraform(struct!.intent),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    trigger_fulfillment: dialogflowCxPageTransitionRoutesTriggerFulfillmentToTerraform(struct!.triggerFulfillment),
  }
}


export function dialogflowCxPageTransitionRoutesToHclTerraform(struct?: DialogflowCxPageTransitionRoutes | cdktf.IResolvable): any {
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
      value: dialogflowCxPageTransitionRoutesTriggerFulfillmentToHclTerraform(struct!.triggerFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPageTransitionRoutesTriggerFulfillmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPageTransitionRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPageTransitionRoutes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPageTransitionRoutes | cdktf.IResolvable | undefined) {
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
  private _triggerFulfillment = new DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference(this, "trigger_fulfillment");
  public get triggerFulfillment() {
    return this._triggerFulfillment;
  }
  public putTriggerFulfillment(value: DialogflowCxPageTransitionRoutesTriggerFulfillment) {
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

export class DialogflowCxPageTransitionRoutesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPageTransitionRoutes[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPageTransitionRoutesOutputReference {
    return new DialogflowCxPageTransitionRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page google_dialogflow_cx_page}
*/
export class DialogflowCxPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DialogflowCxPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCxPage to import
  * @param importFromId The id of the existing DialogflowCxPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCxPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/dialogflow_cx_page google_dialogflow_cx_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxPageConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxPageConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_page',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.35.0',
        providerVersionConstraint: '~> 5.0'
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
    this._parent = config.parent;
    this._transitionRouteGroups = config.transitionRouteGroups;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._entryFulfillment.internalValue = config.entryFulfillment;
    this._eventHandlers.internalValue = config.eventHandlers;
    this._form.internalValue = config.form;
    this._timeouts.internalValue = config.timeouts;
    this._transitionRoutes.internalValue = config.transitionRoutes;
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
  private _advancedSettings = new DialogflowCxPageAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: DialogflowCxPageAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // entry_fulfillment - computed: false, optional: true, required: false
  private _entryFulfillment = new DialogflowCxPageEntryFulfillmentOutputReference(this, "entry_fulfillment");
  public get entryFulfillment() {
    return this._entryFulfillment;
  }
  public putEntryFulfillment(value: DialogflowCxPageEntryFulfillment) {
    this._entryFulfillment.internalValue = value;
  }
  public resetEntryFulfillment() {
    this._entryFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryFulfillmentInput() {
    return this._entryFulfillment.internalValue;
  }

  // event_handlers - computed: false, optional: true, required: false
  private _eventHandlers = new DialogflowCxPageEventHandlersList(this, "event_handlers", false);
  public get eventHandlers() {
    return this._eventHandlers;
  }
  public putEventHandlers(value: DialogflowCxPageEventHandlers[] | cdktf.IResolvable) {
    this._eventHandlers.internalValue = value;
  }
  public resetEventHandlers() {
    this._eventHandlers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHandlersInput() {
    return this._eventHandlers.internalValue;
  }

  // form - computed: false, optional: true, required: false
  private _form = new DialogflowCxPageFormOutputReference(this, "form");
  public get form() {
    return this._form;
  }
  public putForm(value: DialogflowCxPageForm) {
    this._form.internalValue = value;
  }
  public resetForm() {
    this._form.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formInput() {
    return this._form.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCxPageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxPageTimeouts) {
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
  private _transitionRoutes = new DialogflowCxPageTransitionRoutesList(this, "transition_routes", false);
  public get transitionRoutes() {
    return this._transitionRoutes;
  }
  public putTransitionRoutes(value: DialogflowCxPageTransitionRoutes[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      language_code: cdktf.stringToTerraform(this._languageCode),
      parent: cdktf.stringToTerraform(this._parent),
      transition_route_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitionRouteGroups),
      advanced_settings: dialogflowCxPageAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      entry_fulfillment: dialogflowCxPageEntryFulfillmentToTerraform(this._entryFulfillment.internalValue),
      event_handlers: cdktf.listMapper(dialogflowCxPageEventHandlersToTerraform, true)(this._eventHandlers.internalValue),
      form: dialogflowCxPageFormToTerraform(this._form.internalValue),
      timeouts: dialogflowCxPageTimeoutsToTerraform(this._timeouts.internalValue),
      transition_routes: cdktf.listMapper(dialogflowCxPageTransitionRoutesToTerraform, true)(this._transitionRoutes.internalValue),
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
        value: dialogflowCxPageAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxPageAdvancedSettingsList",
      },
      entry_fulfillment: {
        value: dialogflowCxPageEntryFulfillmentToHclTerraform(this._entryFulfillment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxPageEntryFulfillmentList",
      },
      event_handlers: {
        value: cdktf.listMapperHcl(dialogflowCxPageEventHandlersToHclTerraform, true)(this._eventHandlers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxPageEventHandlersList",
      },
      form: {
        value: dialogflowCxPageFormToHclTerraform(this._form.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxPageFormList",
      },
      timeouts: {
        value: dialogflowCxPageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCxPageTimeouts",
      },
      transition_routes: {
        value: cdktf.listMapperHcl(dialogflowCxPageTransitionRoutesToHclTerraform, true)(this._transitionRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxPageTransitionRoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
