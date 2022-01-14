// https://www.terraform.io/docs/providers/google/r/dialogflow_intent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowIntentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the action associated with the intent.
Note: The action name must not contain whitespaces.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#action DialogflowIntent#action}
  */
  readonly action?: string;
  /**
  * The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED
(i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#default_response_platforms DialogflowIntent#default_response_platforms}
  */
  readonly defaultResponsePlatforms?: string[];
  /**
  * The name of this intent to be displayed on the console.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#display_name DialogflowIntent#display_name}
  */
  readonly displayName: string;
  /**
  * The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the 
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#events DialogflowIntent#events}
  */
  readonly events?: string[];
  /**
  * The list of context names required for this intent to be triggered.
Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#input_context_names DialogflowIntent#input_context_names}
  */
  readonly inputContextNames?: string[];
  /**
  * Indicates whether this is a fallback intent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#is_fallback DialogflowIntent#is_fallback}
  */
  readonly isFallback?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether Machine Learning is disabled for the intent.
Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#ml_disabled DialogflowIntent#ml_disabled}
  */
  readonly mlDisabled?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of the parent intent in the chain of followup intents.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#parent_followup_intent_name DialogflowIntent#parent_followup_intent_name}
  */
  readonly parentFollowupIntentName?: string;
  /**
  * The priority of this intent. Higher numbers represent higher priorities.
  - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
  to the Normal priority in the console.
  - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#priority DialogflowIntent#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#project DialogflowIntent#project}
  */
  readonly project?: string;
  /**
  * Indicates whether to delete all contexts in the current session when this intent is matched.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#reset_contexts DialogflowIntent#reset_contexts}
  */
  readonly resetContexts?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether webhooks are enabled for the intent.
* WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
* WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
filling prompt is forwarded to the webhook. Possible values: ["WEBHOOK_STATE_ENABLED", "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#webhook_state DialogflowIntent#webhook_state}
  */
  readonly webhookState?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#timeouts DialogflowIntent#timeouts}
  */
  readonly timeouts?: DialogflowIntentTimeouts;
}
export class DialogflowIntentFollowupIntentInfo extends cdktf.ComplexComputedList {

  // followup_intent_name - computed: true, optional: false, required: false
  public get followupIntentName() {
    return this.getStringAttribute('followup_intent_name');
  }

  // parent_followup_intent_name - computed: true, optional: false, required: false
  public get parentFollowupIntentName() {
    return this.getStringAttribute('parent_followup_intent_name');
  }
}
export interface DialogflowIntentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#create DialogflowIntent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#delete DialogflowIntent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent#update DialogflowIntent#update}
  */
  readonly update?: string;
}

export function dialogflowIntentTimeoutsToTerraform(struct?: DialogflowIntentTimeoutsOutputReference | DialogflowIntentTimeouts): any {
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

export class DialogflowIntentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DialogflowIntentTimeouts | undefined {
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

  public set internalValue(value: DialogflowIntentTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent google_dialogflow_intent}
*/
export class DialogflowIntent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dialogflow_intent";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dialogflow_intent google_dialogflow_intent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowIntentConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowIntentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_intent',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._defaultResponsePlatforms = config.defaultResponsePlatforms;
    this._displayName = config.displayName;
    this._events = config.events;
    this._inputContextNames = config.inputContextNames;
    this._isFallback = config.isFallback;
    this._mlDisabled = config.mlDisabled;
    this._parentFollowupIntentName = config.parentFollowupIntentName;
    this._priority = config.priority;
    this._project = config.project;
    this._resetContexts = config.resetContexts;
    this._webhookState = config.webhookState;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // default_response_platforms - computed: false, optional: true, required: false
  private _defaultResponsePlatforms?: string[]; 
  public get defaultResponsePlatforms() {
    return this.getListAttribute('default_response_platforms');
  }
  public set defaultResponsePlatforms(value: string[]) {
    this._defaultResponsePlatforms = value;
  }
  public resetDefaultResponsePlatforms() {
    this._defaultResponsePlatforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResponsePlatformsInput() {
    return this._defaultResponsePlatforms;
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

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // followup_intent_info - computed: true, optional: false, required: false
  public followupIntentInfo(index: string) {
    return new DialogflowIntentFollowupIntentInfo(this, 'followup_intent_info', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_context_names - computed: false, optional: true, required: false
  private _inputContextNames?: string[]; 
  public get inputContextNames() {
    return this.getListAttribute('input_context_names');
  }
  public set inputContextNames(value: string[]) {
    this._inputContextNames = value;
  }
  public resetInputContextNames() {
    this._inputContextNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputContextNamesInput() {
    return this._inputContextNames;
  }

  // is_fallback - computed: true, optional: true, required: false
  private _isFallback?: boolean | cdktf.IResolvable; 
  public get isFallback() {
    return this.getBooleanAttribute('is_fallback') as any;
  }
  public set isFallback(value: boolean | cdktf.IResolvable) {
    this._isFallback = value;
  }
  public resetIsFallback() {
    this._isFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFallbackInput() {
    return this._isFallback;
  }

  // ml_disabled - computed: true, optional: true, required: false
  private _mlDisabled?: boolean | cdktf.IResolvable; 
  public get mlDisabled() {
    return this.getBooleanAttribute('ml_disabled') as any;
  }
  public set mlDisabled(value: boolean | cdktf.IResolvable) {
    this._mlDisabled = value;
  }
  public resetMlDisabled() {
    this._mlDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlDisabledInput() {
    return this._mlDisabled;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_followup_intent_name - computed: true, optional: true, required: false
  private _parentFollowupIntentName?: string; 
  public get parentFollowupIntentName() {
    return this.getStringAttribute('parent_followup_intent_name');
  }
  public set parentFollowupIntentName(value: string) {
    this._parentFollowupIntentName = value;
  }
  public resetParentFollowupIntentName() {
    this._parentFollowupIntentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFollowupIntentNameInput() {
    return this._parentFollowupIntentName;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // reset_contexts - computed: true, optional: true, required: false
  private _resetContexts?: boolean | cdktf.IResolvable; 
  public get resetContexts() {
    return this.getBooleanAttribute('reset_contexts') as any;
  }
  public set resetContexts(value: boolean | cdktf.IResolvable) {
    this._resetContexts = value;
  }
  public resetResetContexts() {
    this._resetContexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetContextsInput() {
    return this._resetContexts;
  }

  // root_followup_intent_name - computed: true, optional: false, required: false
  public get rootFollowupIntentName() {
    return this.getStringAttribute('root_followup_intent_name');
  }

  // webhook_state - computed: true, optional: true, required: false
  private _webhookState?: string; 
  public get webhookState() {
    return this.getStringAttribute('webhook_state');
  }
  public set webhookState(value: string) {
    this._webhookState = value;
  }
  public resetWebhookState() {
    this._webhookState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookStateInput() {
    return this._webhookState;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowIntentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowIntentTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      default_response_platforms: cdktf.listMapper(cdktf.stringToTerraform)(this._defaultResponsePlatforms),
      display_name: cdktf.stringToTerraform(this._displayName),
      events: cdktf.listMapper(cdktf.stringToTerraform)(this._events),
      input_context_names: cdktf.listMapper(cdktf.stringToTerraform)(this._inputContextNames),
      is_fallback: cdktf.booleanToTerraform(this._isFallback),
      ml_disabled: cdktf.booleanToTerraform(this._mlDisabled),
      parent_followup_intent_name: cdktf.stringToTerraform(this._parentFollowupIntentName),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      reset_contexts: cdktf.booleanToTerraform(this._resetContexts),
      webhook_state: cdktf.stringToTerraform(this._webhookState),
      timeouts: dialogflowIntentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
