// https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable name of the page, unique within the agent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#display_name DialogflowCxPage#display_name}
  */
  readonly displayName: string;
  /**
  * The language of the following fields in page:

Page.entry_fulfillment.messages
Page.entry_fulfillment.conditional_cases
Page.event_handlers.trigger_fulfillment.messages
Page.event_handlers.trigger_fulfillment.conditional_cases
Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages
Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases
Page.form.parameters.fill_behavior.reprompt_event_handlers.messages
Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases
Page.transition_routes.trigger_fulfillment.messages
Page.transition_routes.trigger_fulfillment.conditional_cases
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#language_code DialogflowCxPage#language_code}
  */
  readonly languageCode?: string;
  /**
  * The flow to create a page for. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#parent DialogflowCxPage#parent}
  */
  readonly parent?: string;
  /**
  * Ordered list of TransitionRouteGroups associated with the page. Transition route groups must be unique within a page.
If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -> page's transition route group -> flow's transition routes.
If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#transition_route_groups DialogflowCxPage#transition_route_groups}
  */
  readonly transitionRouteGroups?: string[];
  /**
  * entry_fulfillment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#entry_fulfillment DialogflowCxPage#entry_fulfillment}
  */
  readonly entryFulfillment?: DialogflowCxPageEntryFulfillment;
  /**
  * event_handlers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#event_handlers DialogflowCxPage#event_handlers}
  */
  readonly eventHandlers?: DialogflowCxPageEventHandlers[];
  /**
  * form block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#form DialogflowCxPage#form}
  */
  readonly form?: DialogflowCxPageForm;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#timeouts DialogflowCxPage#timeouts}
  */
  readonly timeouts?: DialogflowCxPageTimeouts;
  /**
  * transition_routes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#transition_routes DialogflowCxPage#transition_routes}
  */
  readonly transitionRoutes?: DialogflowCxPageTransitionRoutes[];
}
export interface DialogflowCxPageEntryFulfillmentMessagesText {
  /**
  * A collection of text responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#text DialogflowCxPage#text}
  */
  readonly text?: string[];
}

function dialogflowCxPageEntryFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesTextOutputReference | DialogflowCxPageEntryFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform)(struct!.text),
  }
}

export class DialogflowCxPageEntryFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // text - computed: false, optional: true, required: false
  private _text?: string[] | undefined; 
  public get text() {
    return this.getListAttribute('text');
  }
  public set text(value: string[] | undefined) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text
  }
}
export interface DialogflowCxPageEntryFulfillmentMessages {
  /**
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageEntryFulfillmentMessagesText;
}

function dialogflowCxPageEntryFulfillmentMessagesToTerraform(struct?: DialogflowCxPageEntryFulfillmentMessages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: dialogflowCxPageEntryFulfillmentMessagesTextToTerraform(struct!.text),
  }
}

export interface DialogflowCxPageEntryFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#tag DialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#webhook DialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * messages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#messages DialogflowCxPage#messages}
  */
  readonly messages?: DialogflowCxPageEntryFulfillmentMessages[];
}

function dialogflowCxPageEntryFulfillmentToTerraform(struct?: DialogflowCxPageEntryFulfillmentOutputReference | DialogflowCxPageEntryFulfillment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    messages: cdktf.listMapper(dialogflowCxPageEntryFulfillmentMessagesToTerraform)(struct!.messages),
  }
}

export class DialogflowCxPageEntryFulfillmentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // return_partial_responses - computed: false, optional: true, required: false
  private _returnPartialResponses?: boolean | cdktf.IResolvable | undefined; 
  public get returnPartialResponses() {
    return this.getBooleanAttribute('return_partial_responses') as any;
  }
  public set returnPartialResponses(value: boolean | cdktf.IResolvable | undefined) {
    this._returnPartialResponses = value;
  }
  public resetReturnPartialResponses() {
    this._returnPartialResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnPartialResponsesInput() {
    return this._returnPartialResponses
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string | undefined; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string | undefined) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string | undefined; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string | undefined) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook
  }

  // messages - computed: false, optional: true, required: false
  private _messages?: DialogflowCxPageEntryFulfillmentMessages[] | undefined; 
  public get messages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('messages') as any;
  }
  public set messages(value: DialogflowCxPageEntryFulfillmentMessages[] | undefined) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages
  }
}
export interface DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#text DialogflowCxPage#text}
  */
  readonly text?: string[];
}

function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference | DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform)(struct!.text),
  }
}

export class DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // text - computed: false, optional: true, required: false
  private _text?: string[] | undefined; 
  public get text() {
    return this.getListAttribute('text');
  }
  public set text(value: string[] | undefined) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text
  }
}
export interface DialogflowCxPageEventHandlersTriggerFulfillmentMessages {
  /**
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText;
}

function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: dialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}

export interface DialogflowCxPageEventHandlersTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#tag DialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#webhook DialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * messages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#messages DialogflowCxPage#messages}
  */
  readonly messages?: DialogflowCxPageEventHandlersTriggerFulfillmentMessages[];
}

function dialogflowCxPageEventHandlersTriggerFulfillmentToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference | DialogflowCxPageEventHandlersTriggerFulfillment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    messages: cdktf.listMapper(dialogflowCxPageEventHandlersTriggerFulfillmentMessagesToTerraform)(struct!.messages),
  }
}

export class DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // return_partial_responses - computed: false, optional: true, required: false
  private _returnPartialResponses?: boolean | cdktf.IResolvable | undefined; 
  public get returnPartialResponses() {
    return this.getBooleanAttribute('return_partial_responses') as any;
  }
  public set returnPartialResponses(value: boolean | cdktf.IResolvable | undefined) {
    this._returnPartialResponses = value;
  }
  public resetReturnPartialResponses() {
    this._returnPartialResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnPartialResponsesInput() {
    return this._returnPartialResponses
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string | undefined; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string | undefined) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string | undefined; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string | undefined) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook
  }

  // messages - computed: false, optional: true, required: false
  private _messages?: DialogflowCxPageEventHandlersTriggerFulfillmentMessages[] | undefined; 
  public get messages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('messages') as any;
  }
  public set messages(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessages[] | undefined) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages
  }
}
export interface DialogflowCxPageEventHandlers {
  /**
  * The name of the event to handle.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#event DialogflowCxPage#event}
  */
  readonly event?: string;
  /**
  * The target flow to transition to. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#target_flow DialogflowCxPage#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#target_page DialogflowCxPage#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#trigger_fulfillment DialogflowCxPage#trigger_fulfillment}
  */
  readonly triggerFulfillment?: DialogflowCxPageEventHandlersTriggerFulfillment;
}

function dialogflowCxPageEventHandlersToTerraform(struct?: DialogflowCxPageEventHandlers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText {
  /**
  * A collection of text responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#text DialogflowCxPage#text}
  */
  readonly text?: string[];
}

function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform)(struct!.text),
  }
}

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // text - computed: false, optional: true, required: false
  private _text?: string[] | undefined; 
  public get text() {
    return this.getListAttribute('text');
  }
  public set text(value: string[] | undefined) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text
  }
}
export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages {
  /**
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText;
}

function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextToTerraform(struct!.text),
  }
}

export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#tag DialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#webhook DialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * messages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#messages DialogflowCxPage#messages}
  */
  readonly messages?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[];
}

function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    messages: cdktf.listMapper(dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesToTerraform)(struct!.messages),
  }
}

export class DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // return_partial_responses - computed: false, optional: true, required: false
  private _returnPartialResponses?: boolean | cdktf.IResolvable | undefined; 
  public get returnPartialResponses() {
    return this.getBooleanAttribute('return_partial_responses') as any;
  }
  public set returnPartialResponses(value: boolean | cdktf.IResolvable | undefined) {
    this._returnPartialResponses = value;
  }
  public resetReturnPartialResponses() {
    this._returnPartialResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnPartialResponsesInput() {
    return this._returnPartialResponses
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string | undefined; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string | undefined) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string | undefined; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string | undefined) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook
  }

  // messages - computed: false, optional: true, required: false
  private _messages?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[] | undefined; 
  public get messages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('messages') as any;
  }
  public set messages(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[] | undefined) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages
  }
}
export interface DialogflowCxPageFormParametersFillBehavior {
  /**
  * initial_prompt_fulfillment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#initial_prompt_fulfillment DialogflowCxPage#initial_prompt_fulfillment}
  */
  readonly initialPromptFulfillment?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment;
}

function dialogflowCxPageFormParametersFillBehaviorToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorOutputReference | DialogflowCxPageFormParametersFillBehavior): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_prompt_fulfillment: dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentToTerraform(struct!.initialPromptFulfillment),
  }
}

export class DialogflowCxPageFormParametersFillBehaviorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // initial_prompt_fulfillment - computed: false, optional: true, required: false
  private _initialPromptFulfillment?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment | undefined; 
  private __initialPromptFulfillmentOutput = new DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference(this as any, "initial_prompt_fulfillment", true);
  public get initialPromptFulfillment() {
    return this.__initialPromptFulfillmentOutput;
  }
  public putInitialPromptFulfillment(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment | undefined) {
    this._initialPromptFulfillment = value;
  }
  public resetInitialPromptFulfillment() {
    this._initialPromptFulfillment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPromptFulfillmentInput() {
    return this._initialPromptFulfillment
  }
}
export interface DialogflowCxPageFormParameters {
  /**
  * The human-readable name of the parameter, unique within the form.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#display_name DialogflowCxPage#display_name}
  */
  readonly displayName?: string;
  /**
  * The entity type of the parameter. 
Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#entity_type DialogflowCxPage#entity_type}
  */
  readonly entityType?: string;
  /**
  * Indicates whether the parameter represents a list of values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#is_list DialogflowCxPage#is_list}
  */
  readonly isList?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the parameter content should be redacted in log. 
If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#redact DialogflowCxPage#redact}
  */
  readonly redact?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. 
Required parameters must be filled before form filling concludes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#required DialogflowCxPage#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * fill_behavior block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#fill_behavior DialogflowCxPage#fill_behavior}
  */
  readonly fillBehavior?: DialogflowCxPageFormParametersFillBehavior;
}

function dialogflowCxPageFormParametersToTerraform(struct?: DialogflowCxPageFormParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    is_list: cdktf.booleanToTerraform(struct!.isList),
    redact: cdktf.booleanToTerraform(struct!.redact),
    required: cdktf.booleanToTerraform(struct!.required),
    fill_behavior: dialogflowCxPageFormParametersFillBehaviorToTerraform(struct!.fillBehavior),
  }
}

export interface DialogflowCxPageForm {
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#parameters DialogflowCxPage#parameters}
  */
  readonly parameters?: DialogflowCxPageFormParameters[];
}

function dialogflowCxPageFormToTerraform(struct?: DialogflowCxPageFormOutputReference | DialogflowCxPageForm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(dialogflowCxPageFormParametersToTerraform)(struct!.parameters),
  }
}

export class DialogflowCxPageFormOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: DialogflowCxPageFormParameters[] | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: DialogflowCxPageFormParameters[] | undefined) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }
}
export interface DialogflowCxPageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#create DialogflowCxPage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#delete DialogflowCxPage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#update DialogflowCxPage#update}
  */
  readonly update?: string;
}

function dialogflowCxPageTimeoutsToTerraform(struct?: DialogflowCxPageTimeoutsOutputReference | DialogflowCxPageTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DialogflowCxPageTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}
export interface DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#text DialogflowCxPage#text}
  */
  readonly text?: string[];
}

function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform)(struct!.text),
  }
}

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // text - computed: false, optional: true, required: false
  private _text?: string[] | undefined; 
  public get text() {
    return this.getListAttribute('text');
  }
  public set text(value: string[] | undefined) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text
  }
}
export interface DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages {
  /**
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText;
}

function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}

export interface DialogflowCxPageTransitionRoutesTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#tag DialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#webhook DialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * messages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#messages DialogflowCxPage#messages}
  */
  readonly messages?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[];
}

function dialogflowCxPageTransitionRoutesTriggerFulfillmentToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference | DialogflowCxPageTransitionRoutesTriggerFulfillment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    messages: cdktf.listMapper(dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesToTerraform)(struct!.messages),
  }
}

export class DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // return_partial_responses - computed: false, optional: true, required: false
  private _returnPartialResponses?: boolean | cdktf.IResolvable | undefined; 
  public get returnPartialResponses() {
    return this.getBooleanAttribute('return_partial_responses') as any;
  }
  public set returnPartialResponses(value: boolean | cdktf.IResolvable | undefined) {
    this._returnPartialResponses = value;
  }
  public resetReturnPartialResponses() {
    this._returnPartialResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnPartialResponsesInput() {
    return this._returnPartialResponses
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string | undefined; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string | undefined) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string | undefined; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string | undefined) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook
  }

  // messages - computed: false, optional: true, required: false
  private _messages?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[] | undefined; 
  public get messages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('messages') as any;
  }
  public set messages(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[] | undefined) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages
  }
}
export interface DialogflowCxPageTransitionRoutes {
  /**
  * The condition to evaluate against form parameters or session parameters.
At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#condition DialogflowCxPage#condition}
  */
  readonly condition?: string;
  /**
  * The unique identifier of an Intent. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#intent DialogflowCxPage#intent}
  */
  readonly intent?: string;
  /**
  * The target flow to transition to. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#target_flow DialogflowCxPage#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#target_page DialogflowCxPage#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#trigger_fulfillment DialogflowCxPage#trigger_fulfillment}
  */
  readonly triggerFulfillment?: DialogflowCxPageTransitionRoutesTriggerFulfillment;
}

function dialogflowCxPageTransitionRoutesToTerraform(struct?: DialogflowCxPageTransitionRoutes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html google_dialogflow_cx_page}
*/
export class DialogflowCxPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dialogflow_cx_page";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html google_dialogflow_cx_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxPageConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxPageConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_page',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._languageCode = config.languageCode;
    this._parent = config.parent;
    this._transitionRouteGroups = config.transitionRouteGroups;
    this._entryFulfillment = config.entryFulfillment;
    this._eventHandlers = config.eventHandlers;
    this._form = config.form;
    this._timeouts = config.timeouts;
    this._transitionRoutes = config.transitionRoutes;
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
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string | undefined; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string | undefined) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string | undefined; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string | undefined) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent
  }

  // transition_route_groups - computed: false, optional: true, required: false
  private _transitionRouteGroups?: string[] | undefined; 
  public get transitionRouteGroups() {
    return this.getListAttribute('transition_route_groups');
  }
  public set transitionRouteGroups(value: string[] | undefined) {
    this._transitionRouteGroups = value;
  }
  public resetTransitionRouteGroups() {
    this._transitionRouteGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionRouteGroupsInput() {
    return this._transitionRouteGroups
  }

  // entry_fulfillment - computed: false, optional: true, required: false
  private _entryFulfillment?: DialogflowCxPageEntryFulfillment | undefined; 
  private __entryFulfillmentOutput = new DialogflowCxPageEntryFulfillmentOutputReference(this as any, "entry_fulfillment", true);
  public get entryFulfillment() {
    return this.__entryFulfillmentOutput;
  }
  public putEntryFulfillment(value: DialogflowCxPageEntryFulfillment | undefined) {
    this._entryFulfillment = value;
  }
  public resetEntryFulfillment() {
    this._entryFulfillment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryFulfillmentInput() {
    return this._entryFulfillment
  }

  // event_handlers - computed: false, optional: true, required: false
  private _eventHandlers?: DialogflowCxPageEventHandlers[] | undefined; 
  public get eventHandlers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event_handlers') as any;
  }
  public set eventHandlers(value: DialogflowCxPageEventHandlers[] | undefined) {
    this._eventHandlers = value;
  }
  public resetEventHandlers() {
    this._eventHandlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHandlersInput() {
    return this._eventHandlers
  }

  // form - computed: false, optional: true, required: false
  private _form?: DialogflowCxPageForm | undefined; 
  private __formOutput = new DialogflowCxPageFormOutputReference(this as any, "form", true);
  public get form() {
    return this.__formOutput;
  }
  public putForm(value: DialogflowCxPageForm | undefined) {
    this._form = value;
  }
  public resetForm() {
    this._form = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formInput() {
    return this._form
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DialogflowCxPageTimeouts | undefined; 
  private __timeoutsOutput = new DialogflowCxPageTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DialogflowCxPageTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // transition_routes - computed: false, optional: true, required: false
  private _transitionRoutes?: DialogflowCxPageTransitionRoutes[] | undefined; 
  public get transitionRoutes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('transition_routes') as any;
  }
  public set transitionRoutes(value: DialogflowCxPageTransitionRoutes[] | undefined) {
    this._transitionRoutes = value;
  }
  public resetTransitionRoutes() {
    this._transitionRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionRoutesInput() {
    return this._transitionRoutes
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      language_code: cdktf.stringToTerraform(this._languageCode),
      parent: cdktf.stringToTerraform(this._parent),
      transition_route_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._transitionRouteGroups),
      entry_fulfillment: dialogflowCxPageEntryFulfillmentToTerraform(this._entryFulfillment),
      event_handlers: cdktf.listMapper(dialogflowCxPageEventHandlersToTerraform)(this._eventHandlers),
      form: dialogflowCxPageFormToTerraform(this._form),
      timeouts: dialogflowCxPageTimeoutsToTerraform(this._timeouts),
      transition_routes: cdktf.listMapper(dialogflowCxPageTransitionRoutesToTerraform)(this._transitionRoutes),
    };
  }
}
