// https://www.terraform.io/docs/providers/google/r/dialogflow_intent.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DialogflowIntentConfig extends TerraformMetaArguments {
  /** The name of the action associated with the intent.
Note: The action name must not contain whitespaces. */
  readonly action?: string;
  /** The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED
(i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"] */
  readonly defaultResponsePlatforms?: string[];
  /** The name of this intent to be displayed on the console. */
  readonly displayName: string;
  /** The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the 
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details. */
  readonly events?: string[];
  /** The list of context names required for this intent to be triggered.
Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>. */
  readonly inputContextNames?: string[];
  /** Indicates whether this is a fallback intent. */
  readonly isFallback?: boolean;
  /** Indicates whether Machine Learning is disabled for the intent.
Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off. */
  readonly mlDisabled?: boolean;
  /** The unique identifier of the parent intent in the chain of followup intents.
Format: projects/<Project ID>/agent/intents/<Intent ID>. */
  readonly parentFollowupIntentName?: string;
  /** The priority of this intent. Higher numbers represent higher priorities.
  - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
  to the Normal priority in the console.
  - If the supplied value is negative, the intent is ignored in runtime detect intent requests. */
  readonly priority?: number;
  readonly project?: string;
  /** Indicates whether to delete all contexts in the current session when this intent is matched. */
  readonly resetContexts?: boolean;
  /** Indicates whether webhooks are enabled for the intent.
* WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
* WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
filling prompt is forwarded to the webhook. Possible values: ["WEBHOOK_STATE_ENABLED", "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"] */
  readonly webhookState?: string;
  /** timeouts block */
  readonly timeouts?: DialogflowIntentTimeouts;
}
export class DialogflowIntentFollowupIntentInfo extends ComplexComputedList {

  // followup_intent_name - computed: true, optional: false, required: true
  public get followupIntentName() {
    return this.getStringAttribute('followup_intent_name');
  }

  // parent_followup_intent_name - computed: true, optional: false, required: true
  public get parentFollowupIntentName() {
    return this.getStringAttribute('parent_followup_intent_name');
  }
}
export interface DialogflowIntentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DialogflowIntent extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string;
  public get action() {
    return this._action ?? this.getStringAttribute('action');
  }
  public set action(value: string | undefined) {
    this._action = value;
  }

  // default_response_platforms - computed: false, optional: true, required: false
  private _defaultResponsePlatforms?: string[];
  public get defaultResponsePlatforms() {
    return this._defaultResponsePlatforms;
  }
  public set defaultResponsePlatforms(value: string[] | undefined) {
    this._defaultResponsePlatforms = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[];
  public get events() {
    return this._events;
  }
  public set events(value: string[] | undefined) {
    this._events = value;
  }

  // followup_intent_info - computed: true, optional: false, required: true
  public followupIntentInfo(index: string) {
    return new DialogflowIntentFollowupIntentInfo(this, 'followup_intent_info', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // input_context_names - computed: false, optional: true, required: false
  private _inputContextNames?: string[];
  public get inputContextNames() {
    return this._inputContextNames;
  }
  public set inputContextNames(value: string[] | undefined) {
    this._inputContextNames = value;
  }

  // is_fallback - computed: true, optional: true, required: false
  private _isFallback?: boolean;
  public get isFallback() {
    return this._isFallback ?? this.getBooleanAttribute('is_fallback');
  }
  public set isFallback(value: boolean | undefined) {
    this._isFallback = value;
  }

  // ml_disabled - computed: true, optional: true, required: false
  private _mlDisabled?: boolean;
  public get mlDisabled() {
    return this._mlDisabled ?? this.getBooleanAttribute('ml_disabled');
  }
  public set mlDisabled(value: boolean | undefined) {
    this._mlDisabled = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_followup_intent_name - computed: true, optional: true, required: false
  private _parentFollowupIntentName?: string;
  public get parentFollowupIntentName() {
    return this._parentFollowupIntentName ?? this.getStringAttribute('parent_followup_intent_name');
  }
  public set parentFollowupIntentName(value: string | undefined) {
    this._parentFollowupIntentName = value;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this._priority ?? this.getNumberAttribute('priority');
  }
  public set priority(value: number | undefined) {
    this._priority = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // reset_contexts - computed: true, optional: true, required: false
  private _resetContexts?: boolean;
  public get resetContexts() {
    return this._resetContexts ?? this.getBooleanAttribute('reset_contexts');
  }
  public set resetContexts(value: boolean | undefined) {
    this._resetContexts = value;
  }

  // root_followup_intent_name - computed: true, optional: false, required: true
  public get rootFollowupIntentName() {
    return this.getStringAttribute('root_followup_intent_name');
  }

  // webhook_state - computed: true, optional: true, required: false
  private _webhookState?: string;
  public get webhookState() {
    return this._webhookState ?? this.getStringAttribute('webhook_state');
  }
  public set webhookState(value: string | undefined) {
    this._webhookState = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DialogflowIntentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DialogflowIntentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: this._action,
      default_response_platforms: this._defaultResponsePlatforms,
      display_name: this._displayName,
      events: this._events,
      input_context_names: this._inputContextNames,
      is_fallback: this._isFallback,
      ml_disabled: this._mlDisabled,
      parent_followup_intent_name: this._parentFollowupIntentName,
      priority: this._priority,
      project: this._project,
      reset_contexts: this._resetContexts,
      webhook_state: this._webhookState,
      timeouts: this._timeouts,
    };
  }
}
