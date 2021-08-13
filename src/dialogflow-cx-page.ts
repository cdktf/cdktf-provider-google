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
  readonly entryFulfillment?: DialogflowCxPageEntryFulfillment[];
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
  readonly form?: DialogflowCxPageForm[];
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

function dialogflowCxPageEntryFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageEntryFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform)(struct!.text),
  }
}

export interface DialogflowCxPageEntryFulfillmentMessages {
  /**
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageEntryFulfillmentMessagesText[];
}

function dialogflowCxPageEntryFulfillmentMessagesToTerraform(struct?: DialogflowCxPageEntryFulfillmentMessages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text: cdktf.listMapper(dialogflowCxPageEntryFulfillmentMessagesTextToTerraform)(struct!.text),
  }
}

export interface DialogflowCxPageEntryFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean;
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

function dialogflowCxPageEntryFulfillmentToTerraform(struct?: DialogflowCxPageEntryFulfillment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    messages: cdktf.listMapper(dialogflowCxPageEntryFulfillmentMessagesToTerraform)(struct!.messages),
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

function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform)(struct!.text),
  }
}

export interface DialogflowCxPageEventHandlersTriggerFulfillmentMessages {
  /**
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText[];
}

function dialogflowCxPageEventHandlersTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillmentMessages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text: cdktf.listMapper(dialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextToTerraform)(struct!.text),
  }
}

export interface DialogflowCxPageEventHandlersTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean;
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

function dialogflowCxPageEventHandlersTriggerFulfillmentToTerraform(struct?: DialogflowCxPageEventHandlersTriggerFulfillment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    messages: cdktf.listMapper(dialogflowCxPageEventHandlersTriggerFulfillmentMessagesToTerraform)(struct!.messages),
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
  readonly triggerFulfillment?: DialogflowCxPageEventHandlersTriggerFulfillment[];
}

function dialogflowCxPageEventHandlersToTerraform(struct?: DialogflowCxPageEventHandlers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    trigger_fulfillment: cdktf.listMapper(dialogflowCxPageEventHandlersTriggerFulfillmentToTerraform)(struct!.triggerFulfillment),
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

function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform)(struct!.text),
  }
}

export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages {
  /**
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText[];
}

function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text: cdktf.listMapper(dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextToTerraform)(struct!.text),
  }
}

export interface DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean;
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

function dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentToTerraform(struct?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    messages: cdktf.listMapper(dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesToTerraform)(struct!.messages),
  }
}

export interface DialogflowCxPageFormParametersFillBehavior {
  /**
  * initial_prompt_fulfillment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#initial_prompt_fulfillment DialogflowCxPage#initial_prompt_fulfillment}
  */
  readonly initialPromptFulfillment?: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment[];
}

function dialogflowCxPageFormParametersFillBehaviorToTerraform(struct?: DialogflowCxPageFormParametersFillBehavior): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    initial_prompt_fulfillment: cdktf.listMapper(dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentToTerraform)(struct!.initialPromptFulfillment),
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
  readonly isList?: boolean;
  /**
  * Indicates whether the parameter content should be redacted in log. 
If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#redact DialogflowCxPage#redact}
  */
  readonly redact?: boolean;
  /**
  * Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. 
Required parameters must be filled before form filling concludes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#required DialogflowCxPage#required}
  */
  readonly required?: boolean;
  /**
  * fill_behavior block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#fill_behavior DialogflowCxPage#fill_behavior}
  */
  readonly fillBehavior?: DialogflowCxPageFormParametersFillBehavior[];
}

function dialogflowCxPageFormParametersToTerraform(struct?: DialogflowCxPageFormParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    is_list: cdktf.booleanToTerraform(struct!.isList),
    redact: cdktf.booleanToTerraform(struct!.redact),
    required: cdktf.booleanToTerraform(struct!.required),
    fill_behavior: cdktf.listMapper(dialogflowCxPageFormParametersFillBehaviorToTerraform)(struct!.fillBehavior),
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

function dialogflowCxPageFormToTerraform(struct?: DialogflowCxPageForm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(dialogflowCxPageFormParametersToTerraform)(struct!.parameters),
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

function dialogflowCxPageTimeoutsToTerraform(struct?: DialogflowCxPageTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
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

function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform)(struct!.text),
  }
}

export interface DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages {
  /**
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#text DialogflowCxPage#text}
  */
  readonly text?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText[];
}

function dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text: cdktf.listMapper(dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextToTerraform)(struct!.text),
  }
}

export interface DialogflowCxPageTransitionRoutesTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html#return_partial_responses DialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean;
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

function dialogflowCxPageTransitionRoutesTriggerFulfillmentToTerraform(struct?: DialogflowCxPageTransitionRoutesTriggerFulfillment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    messages: cdktf.listMapper(dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesToTerraform)(struct!.messages),
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
  readonly triggerFulfillment?: DialogflowCxPageTransitionRoutesTriggerFulfillment[];
}

function dialogflowCxPageTransitionRoutesToTerraform(struct?: DialogflowCxPageTransitionRoutes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    intent: cdktf.stringToTerraform(struct!.intent),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    trigger_fulfillment: cdktf.listMapper(dialogflowCxPageTransitionRoutesTriggerFulfillmentToTerraform)(struct!.triggerFulfillment),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page.html google_dialogflow_cx_page}
*/
export class DialogflowCxPage extends cdktf.TerraformResource {

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string;
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string ) {
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
  private _parent?: string;
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string ) {
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
  private _transitionRouteGroups?: string[];
  public get transitionRouteGroups() {
    return this.getListAttribute('transition_route_groups');
  }
  public set transitionRouteGroups(value: string[] ) {
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
  private _entryFulfillment?: DialogflowCxPageEntryFulfillment[];
  public get entryFulfillment() {
    return this.interpolationForAttribute('entry_fulfillment') as any;
  }
  public set entryFulfillment(value: DialogflowCxPageEntryFulfillment[] ) {
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
  private _eventHandlers?: DialogflowCxPageEventHandlers[];
  public get eventHandlers() {
    return this.interpolationForAttribute('event_handlers') as any;
  }
  public set eventHandlers(value: DialogflowCxPageEventHandlers[] ) {
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
  private _form?: DialogflowCxPageForm[];
  public get form() {
    return this.interpolationForAttribute('form') as any;
  }
  public set form(value: DialogflowCxPageForm[] ) {
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
  private _timeouts?: DialogflowCxPageTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DialogflowCxPageTimeouts ) {
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
  private _transitionRoutes?: DialogflowCxPageTransitionRoutes[];
  public get transitionRoutes() {
    return this.interpolationForAttribute('transition_routes') as any;
  }
  public set transitionRoutes(value: DialogflowCxPageTransitionRoutes[] ) {
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
      entry_fulfillment: cdktf.listMapper(dialogflowCxPageEntryFulfillmentToTerraform)(this._entryFulfillment),
      event_handlers: cdktf.listMapper(dialogflowCxPageEventHandlersToTerraform)(this._eventHandlers),
      form: cdktf.listMapper(dialogflowCxPageFormToTerraform)(this._form),
      timeouts: dialogflowCxPageTimeoutsToTerraform(this._timeouts),
      transition_routes: cdktf.listMapper(dialogflowCxPageTransitionRoutesToTerraform)(this._transitionRoutes),
    };
  }
}
