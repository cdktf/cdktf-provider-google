// https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#description DialogflowCxFlow#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#display_name DialogflowCxFlow#display_name}
  */
  readonly displayName: string;
  /**
  * The language of the following fields in flow:
Flow.event_handlers.trigger_fulfillment.messages
Flow.event_handlers.trigger_fulfillment.conditional_cases
Flow.transition_routes.trigger_fulfillment.messages
Flow.transition_routes.trigger_fulfillment.conditional_cases
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#language_code DialogflowCxFlow#language_code}
  */
  readonly languageCode?: string;
  /**
  * The agent to create a flow for. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#parent DialogflowCxFlow#parent}
  */
  readonly parent?: string;
  /**
  * A flow's transition route group serve two purposes:
They are responsible for matching the user's first utterances in the flow.
They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#transition_route_groups DialogflowCxFlow#transition_route_groups}
  */
  readonly transitionRouteGroups?: string[];
  /**
  * event_handlers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#event_handlers DialogflowCxFlow#event_handlers}
  */
  readonly eventHandlers?: DialogflowCxFlowEventHandlers[];
  /**
  * nlu_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#nlu_settings DialogflowCxFlow#nlu_settings}
  */
  readonly nluSettings?: DialogflowCxFlowNluSettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#timeouts DialogflowCxFlow#timeouts}
  */
  readonly timeouts?: DialogflowCxFlowTimeouts;
  /**
  * transition_routes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#transition_routes DialogflowCxFlow#transition_routes}
  */
  readonly transitionRoutes?: DialogflowCxFlowTransitionRoutes[];
}
export interface DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#text DialogflowCxFlow#text}
  */
  readonly text?: string[];
}

function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform)(struct!.text),
  }
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
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
export interface DialogflowCxFlowEventHandlersTriggerFulfillmentMessages {
  /**
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#text DialogflowCxFlow#text}
  */
  readonly text?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText;
}

function dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}

export interface DialogflowCxFlowEventHandlersTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#return_partial_responses DialogflowCxFlow#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#tag DialogflowCxFlow#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#webhook DialogflowCxFlow#webhook}
  */
  readonly webhook?: string;
  /**
  * messages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#messages DialogflowCxFlow#messages}
  */
  readonly messages?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[];
}

function dialogflowCxFlowEventHandlersTriggerFulfillmentToTerraform(struct?: DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference | DialogflowCxFlowEventHandlersTriggerFulfillment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    messages: cdktf.listMapper(dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesToTerraform)(struct!.messages),
  }
}

export class DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
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
  private _messages?: DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[] | undefined; 
  public get messages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('messages') as any;
  }
  public set messages(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[] | undefined) {
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
export interface DialogflowCxFlowEventHandlers {
  /**
  * The name of the event to handle.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#event DialogflowCxFlow#event}
  */
  readonly event?: string;
  /**
  * The target flow to transition to. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#target_flow DialogflowCxFlow#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#target_page DialogflowCxFlow#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#trigger_fulfillment DialogflowCxFlow#trigger_fulfillment}
  */
  readonly triggerFulfillment?: DialogflowCxFlowEventHandlersTriggerFulfillment;
}

function dialogflowCxFlowEventHandlersToTerraform(struct?: DialogflowCxFlowEventHandlers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface DialogflowCxFlowNluSettings {
  /**
  * To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. 
If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#classification_threshold DialogflowCxFlow#classification_threshold}
  */
  readonly classificationThreshold?: number;
  /**
  * Indicates NLU model training mode.
* MODEL_TRAINING_MODE_AUTOMATIC: NLU model training is automatically triggered when a flow gets modified. User can also manually trigger model training in this mode.
* MODEL_TRAINING_MODE_MANUAL: User needs to manually trigger NLU model training. Best for large flows whose models take long time to train. Possible values: ["MODEL_TRAINING_MODE_AUTOMATIC", "MODEL_TRAINING_MODE_MANUAL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#model_training_mode DialogflowCxFlow#model_training_mode}
  */
  readonly modelTrainingMode?: string;
  /**
  * Indicates the type of NLU model.
* MODEL_TYPE_STANDARD: Use standard NLU model.
* MODEL_TYPE_ADVANCED: Use advanced NLU model. Possible values: ["MODEL_TYPE_STANDARD", "MODEL_TYPE_ADVANCED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#model_type DialogflowCxFlow#model_type}
  */
  readonly modelType?: string;
}

function dialogflowCxFlowNluSettingsToTerraform(struct?: DialogflowCxFlowNluSettingsOutputReference | DialogflowCxFlowNluSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // classification_threshold - computed: false, optional: true, required: false
  private _classificationThreshold?: number | undefined; 
  public get classificationThreshold() {
    return this.getNumberAttribute('classification_threshold');
  }
  public set classificationThreshold(value: number | undefined) {
    this._classificationThreshold = value;
  }
  public resetClassificationThreshold() {
    this._classificationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationThresholdInput() {
    return this._classificationThreshold
  }

  // model_training_mode - computed: false, optional: true, required: false
  private _modelTrainingMode?: string | undefined; 
  public get modelTrainingMode() {
    return this.getStringAttribute('model_training_mode');
  }
  public set modelTrainingMode(value: string | undefined) {
    this._modelTrainingMode = value;
  }
  public resetModelTrainingMode() {
    this._modelTrainingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTrainingModeInput() {
    return this._modelTrainingMode
  }

  // model_type - computed: false, optional: true, required: false
  private _modelType?: string | undefined; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string | undefined) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType
  }
}
export interface DialogflowCxFlowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#create DialogflowCxFlow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#delete DialogflowCxFlow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#update DialogflowCxFlow#update}
  */
  readonly update?: string;
}

function dialogflowCxFlowTimeoutsToTerraform(struct?: DialogflowCxFlowTimeoutsOutputReference | DialogflowCxFlowTimeouts): any {
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

export class DialogflowCxFlowTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#text DialogflowCxFlow#text}
  */
  readonly text?: string[];
}

function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform)(struct!.text),
  }
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
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
export interface DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages {
  /**
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#text DialogflowCxFlow#text}
  */
  readonly text?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText;
}

function dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}

export interface DialogflowCxFlowTransitionRoutesTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#return_partial_responses DialogflowCxFlow#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#tag DialogflowCxFlow#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#webhook DialogflowCxFlow#webhook}
  */
  readonly webhook?: string;
  /**
  * messages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#messages DialogflowCxFlow#messages}
  */
  readonly messages?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[];
}

function dialogflowCxFlowTransitionRoutesTriggerFulfillmentToTerraform(struct?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference | DialogflowCxFlowTransitionRoutesTriggerFulfillment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    messages: cdktf.listMapper(dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesToTerraform)(struct!.messages),
  }
}

export class DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
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
  private _messages?: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[] | undefined; 
  public get messages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('messages') as any;
  }
  public set messages(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[] | undefined) {
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
export interface DialogflowCxFlowTransitionRoutes {
  /**
  * The condition to evaluate against form parameters or session parameters.
At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#condition DialogflowCxFlow#condition}
  */
  readonly condition?: string;
  /**
  * The unique identifier of an Intent. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#intent DialogflowCxFlow#intent}
  */
  readonly intent?: string;
  /**
  * The target flow to transition to. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#target_flow DialogflowCxFlow#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#target_page DialogflowCxFlow#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html#trigger_fulfillment DialogflowCxFlow#trigger_fulfillment}
  */
  readonly triggerFulfillment?: DialogflowCxFlowTransitionRoutesTriggerFulfillment;
}

function dialogflowCxFlowTransitionRoutesToTerraform(struct?: DialogflowCxFlowTransitionRoutes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html google_dialogflow_cx_flow}
*/
export class DialogflowCxFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dialogflow_cx_flow";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_flow.html google_dialogflow_cx_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxFlowConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_flow',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._languageCode = config.languageCode;
    this._parent = config.parent;
    this._transitionRouteGroups = config.transitionRouteGroups;
    this._eventHandlers = config.eventHandlers;
    this._nluSettings = config.nluSettings;
    this._timeouts = config.timeouts;
    this._transitionRoutes = config.transitionRoutes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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

  // event_handlers - computed: false, optional: true, required: false
  private _eventHandlers?: DialogflowCxFlowEventHandlers[] | undefined; 
  public get eventHandlers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event_handlers') as any;
  }
  public set eventHandlers(value: DialogflowCxFlowEventHandlers[] | undefined) {
    this._eventHandlers = value;
  }
  public resetEventHandlers() {
    this._eventHandlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHandlersInput() {
    return this._eventHandlers
  }

  // nlu_settings - computed: false, optional: true, required: false
  private _nluSettings?: DialogflowCxFlowNluSettings | undefined; 
  private __nluSettingsOutput = new DialogflowCxFlowNluSettingsOutputReference(this as any, "nlu_settings", true);
  public get nluSettings() {
    return this.__nluSettingsOutput;
  }
  public putNluSettings(value: DialogflowCxFlowNluSettings | undefined) {
    this._nluSettings = value;
  }
  public resetNluSettings() {
    this._nluSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nluSettingsInput() {
    return this._nluSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DialogflowCxFlowTimeouts | undefined; 
  private __timeoutsOutput = new DialogflowCxFlowTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DialogflowCxFlowTimeouts | undefined) {
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
  private _transitionRoutes?: DialogflowCxFlowTransitionRoutes[] | undefined; 
  public get transitionRoutes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('transition_routes') as any;
  }
  public set transitionRoutes(value: DialogflowCxFlowTransitionRoutes[] | undefined) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      language_code: cdktf.stringToTerraform(this._languageCode),
      parent: cdktf.stringToTerraform(this._parent),
      transition_route_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._transitionRouteGroups),
      event_handlers: cdktf.listMapper(dialogflowCxFlowEventHandlersToTerraform)(this._eventHandlers),
      nlu_settings: dialogflowCxFlowNluSettingsToTerraform(this._nluSettings),
      timeouts: dialogflowCxFlowTimeoutsToTerraform(this._timeouts),
      transition_routes: cdktf.listMapper(dialogflowCxFlowTransitionRoutesToTerraform)(this._transitionRoutes),
    };
  }
}
