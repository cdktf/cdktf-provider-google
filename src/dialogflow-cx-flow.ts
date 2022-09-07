// https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#description DialogflowCxFlow#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#display_name DialogflowCxFlow#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#id DialogflowCxFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The language of the following fields in flow:
Flow.event_handlers.trigger_fulfillment.messages
Flow.event_handlers.trigger_fulfillment.conditional_cases
Flow.transition_routes.trigger_fulfillment.messages
Flow.transition_routes.trigger_fulfillment.conditional_cases
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#language_code DialogflowCxFlow#language_code}
  */
  readonly languageCode?: string;
  /**
  * The agent to create a flow for. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#parent DialogflowCxFlow#parent}
  */
  readonly parent?: string;
  /**
  * A flow's transition route group serve two purposes:
They are responsible for matching the user's first utterances in the flow.
They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#transition_route_groups DialogflowCxFlow#transition_route_groups}
  */
  readonly transitionRouteGroups?: string[];
  /**
  * event_handlers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#event_handlers DialogflowCxFlow#event_handlers}
  */
  readonly eventHandlers?: DialogflowCxFlowEventHandlers[] | cdktf.IResolvable;
  /**
  * nlu_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#nlu_settings DialogflowCxFlow#nlu_settings}
  */
  readonly nluSettings?: DialogflowCxFlowNluSettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#timeouts DialogflowCxFlow#timeouts}
  */
  readonly timeouts?: DialogflowCxFlowTimeouts;
  /**
  * transition_routes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#transition_routes DialogflowCxFlow#transition_routes}
  */
  readonly transitionRoutes?: DialogflowCxFlowTransitionRoutes[] | cdktf.IResolvable;
}
export interface DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#text DialogflowCxFlow#text}
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
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#text DialogflowCxFlow#text}
  */
  readonly text?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText;
}

export function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
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
      this._text.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text.internalValue = value.text;
    }
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
export interface DialogflowCxFlowEventHandlersTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#return_partial_responses DialogflowCxFlow#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#tag DialogflowCxFlow#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#webhook DialogflowCxFlow#webhook}
  */
  readonly webhook?: string;
  /**
  * messages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#messages DialogflowCxFlow#messages}
  */
  readonly messages?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable;
}

export function dialogflowCxFlowEventHandlersTriggerFulfillmentToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    messages: cdktf.listMapper(dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
  }
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
    if (this._messages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowEventHandlersTriggerFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnPartialResponses = undefined;
      this._tag = undefined;
      this._webhook = undefined;
      this._messages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnPartialResponses = value.returnPartialResponses;
      this._tag = value.tag;
      this._webhook = value.webhook;
      this._messages.internalValue = value.messages;
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
}
export interface DialogflowCxFlowEventHandlers {
  /**
  * The name of the event to handle.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#event DialogflowCxFlow#event}
  */
  readonly event?: string;
  /**
  * The target flow to transition to. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#target_flow DialogflowCxFlow#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#target_page DialogflowCxFlow#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#trigger_fulfillment DialogflowCxFlow#trigger_fulfillment}
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
export interface DialogflowCxFlowNluSettings {
  /**
  * To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. 
If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#classification_threshold DialogflowCxFlow#classification_threshold}
  */
  readonly classificationThreshold?: number;
  /**
  * Indicates NLU model training mode.
* MODEL_TRAINING_MODE_AUTOMATIC: NLU model training is automatically triggered when a flow gets modified. User can also manually trigger model training in this mode.
* MODEL_TRAINING_MODE_MANUAL: User needs to manually trigger NLU model training. Best for large flows whose models take long time to train. Possible values: ["MODEL_TRAINING_MODE_AUTOMATIC", "MODEL_TRAINING_MODE_MANUAL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#model_training_mode DialogflowCxFlow#model_training_mode}
  */
  readonly modelTrainingMode?: string;
  /**
  * Indicates the type of NLU model.
* MODEL_TYPE_STANDARD: Use standard NLU model.
* MODEL_TYPE_ADVANCED: Use advanced NLU model. Possible values: ["MODEL_TYPE_STANDARD", "MODEL_TYPE_ADVANCED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#model_type DialogflowCxFlow#model_type}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#create DialogflowCxFlow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#delete DialogflowCxFlow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#update DialogflowCxFlow#update}
  */
  readonly update?: string;
}

export function dialogflowCxFlowTimeoutsToTerraform(struct?: DialogflowCxFlowTimeoutsOutputReference | DialogflowCxFlowTimeouts | cdktf.IResolvable): any {
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

export class DialogflowCxFlowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#text DialogflowCxFlow#text}
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
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#text DialogflowCxFlow#text}
  */
  readonly text?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText;
}

export function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
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
      this._text.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text.internalValue = value.text;
    }
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
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#return_partial_responses DialogflowCxFlow#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#tag DialogflowCxFlow#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#webhook DialogflowCxFlow#webhook}
  */
  readonly webhook?: string;
  /**
  * messages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#messages DialogflowCxFlow#messages}
  */
  readonly messages?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable;
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
    messages: cdktf.listMapper(dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
  }
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
    if (this._messages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxFlowTransitionRoutesTriggerFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnPartialResponses = undefined;
      this._tag = undefined;
      this._webhook = undefined;
      this._messages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnPartialResponses = value.returnPartialResponses;
      this._tag = value.tag;
      this._webhook = value.webhook;
      this._messages.internalValue = value.messages;
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
}
export interface DialogflowCxFlowTransitionRoutes {
  /**
  * The condition to evaluate against form parameters or session parameters.
At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#condition DialogflowCxFlow#condition}
  */
  readonly condition?: string;
  /**
  * The unique identifier of an Intent. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#intent DialogflowCxFlow#intent}
  */
  readonly intent?: string;
  /**
  * The target flow to transition to. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#target_flow DialogflowCxFlow#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#target_page DialogflowCxFlow#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow#trigger_fulfillment DialogflowCxFlow#trigger_fulfillment}
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow google_dialogflow_cx_flow}
*/
export class DialogflowCxFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_flow";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow google_dialogflow_cx_flow} Resource
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
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
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
    this._languageCode = config.languageCode;
    this._parent = config.parent;
    this._transitionRouteGroups = config.transitionRouteGroups;
    this._eventHandlers.internalValue = config.eventHandlers;
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
      language_code: cdktf.stringToTerraform(this._languageCode),
      parent: cdktf.stringToTerraform(this._parent),
      transition_route_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitionRouteGroups),
      event_handlers: cdktf.listMapper(dialogflowCxFlowEventHandlersToTerraform, true)(this._eventHandlers.internalValue),
      nlu_settings: dialogflowCxFlowNluSettingsToTerraform(this._nluSettings.internalValue),
      timeouts: dialogflowCxFlowTimeoutsToTerraform(this._timeouts.internalValue),
      transition_routes: cdktf.listMapper(dialogflowCxFlowTransitionRoutesToTerraform, true)(this._transitionRoutes.internalValue),
    };
  }
}
