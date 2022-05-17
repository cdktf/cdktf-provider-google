// https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxIntentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#description DialogflowCxIntent#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the intent, unique within the agent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#display_name DialogflowCxIntent#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. 
Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#is_fallback DialogflowCxIntent#is_fallback}
  */
  readonly isFallback?: boolean | cdktf.IResolvable;
  /**
  * The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes.
Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#labels DialogflowCxIntent#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The language of the following fields in intent:
Intent.training_phrases.parts.text
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#language_code DialogflowCxIntent#language_code}
  */
  readonly languageCode?: string;
  /**
  * The agent to create an intent for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#parent DialogflowCxIntent#parent}
  */
  readonly parent?: string;
  /**
  * The priority of this intent. Higher numbers represent higher priorities.
If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the Normal priority in the console.
If the supplied value is negative, the intent is ignored in runtime detect intent requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#priority DialogflowCxIntent#priority}
  */
  readonly priority?: number;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#parameters DialogflowCxIntent#parameters}
  */
  readonly parameters?: DialogflowCxIntentParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#timeouts DialogflowCxIntent#timeouts}
  */
  readonly timeouts?: DialogflowCxIntentTimeouts;
  /**
  * training_phrases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#training_phrases DialogflowCxIntent#training_phrases}
  */
  readonly trainingPhrases?: DialogflowCxIntentTrainingPhrases[] | cdktf.IResolvable;
}
export interface DialogflowCxIntentParameters {
  /**
  * The entity type of the parameter. 
Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#entity_type DialogflowCxIntent#entity_type}
  */
  readonly entityType: string;
  /**
  * The unique identifier of the parameter. This field is used by training phrases to annotate their parts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#id DialogflowCxIntent#id}
  */
  readonly id: string;
  /**
  * Indicates whether the parameter represents a list of values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#is_list DialogflowCxIntent#is_list}
  */
  readonly isList?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. 
Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#redact DialogflowCxIntent#redact}
  */
  readonly redact?: boolean | cdktf.IResolvable;
}

export function dialogflowCxIntentParametersToTerraform(struct?: DialogflowCxIntentParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    id: cdktf.stringToTerraform(struct!.id),
    is_list: cdktf.booleanToTerraform(struct!.isList),
    redact: cdktf.booleanToTerraform(struct!.redact),
  }
}

export interface DialogflowCxIntentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#create DialogflowCxIntent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#delete DialogflowCxIntent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#update DialogflowCxIntent#update}
  */
  readonly update?: string;
}

export function dialogflowCxIntentTimeoutsToTerraform(struct?: DialogflowCxIntentTimeoutsOutputReference | DialogflowCxIntentTimeouts | cdktf.IResolvable): any {
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

export class DialogflowCxIntentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxIntentTimeouts | undefined {
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

  public set internalValue(value: DialogflowCxIntentTimeouts | undefined) {
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
export interface DialogflowCxIntentTrainingPhrasesParts {
  /**
  * The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#parameter_id DialogflowCxIntent#parameter_id}
  */
  readonly parameterId?: string;
  /**
  * The text for this part.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#text DialogflowCxIntent#text}
  */
  readonly text: string;
}

export function dialogflowCxIntentTrainingPhrasesPartsToTerraform(struct?: DialogflowCxIntentTrainingPhrasesParts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_id: cdktf.stringToTerraform(struct!.parameterId),
    text: cdktf.stringToTerraform(struct!.text),
  }
}

export interface DialogflowCxIntentTrainingPhrases {
  /**
  * Indicates how many times this example was added to the intent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#repeat_count DialogflowCxIntent#repeat_count}
  */
  readonly repeatCount?: number;
  /**
  * parts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent#parts DialogflowCxIntent#parts}
  */
  readonly parts: DialogflowCxIntentTrainingPhrasesParts[] | cdktf.IResolvable;
}

export function dialogflowCxIntentTrainingPhrasesToTerraform(struct?: DialogflowCxIntentTrainingPhrases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repeat_count: cdktf.numberToTerraform(struct!.repeatCount),
    parts: cdktf.listMapper(dialogflowCxIntentTrainingPhrasesPartsToTerraform)(struct!.parts),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent google_dialogflow_cx_intent}
*/
export class DialogflowCxIntent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_intent";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_intent google_dialogflow_cx_intent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxIntentConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxIntentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_intent',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.21.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._isFallback = config.isFallback;
    this._labels = config.labels;
    this._languageCode = config.languageCode;
    this._parent = config.parent;
    this._priority = config.priority;
    this._parameters = config.parameters;
    this._timeouts.internalValue = config.timeouts;
    this._trainingPhrases = config.trainingPhrases;
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_fallback - computed: false, optional: true, required: false
  private _isFallback?: boolean | cdktf.IResolvable; 
  public get isFallback() {
    return this.getBooleanAttribute('is_fallback');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // priority - computed: false, optional: true, required: false
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: DialogflowCxIntentParameters[] | cdktf.IResolvable; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters');
  }
  public set parameters(value: DialogflowCxIntentParameters[] | cdktf.IResolvable) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCxIntentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxIntentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // training_phrases - computed: false, optional: true, required: false
  private _trainingPhrases?: DialogflowCxIntentTrainingPhrases[] | cdktf.IResolvable; 
  public get trainingPhrases() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('training_phrases');
  }
  public set trainingPhrases(value: DialogflowCxIntentTrainingPhrases[] | cdktf.IResolvable) {
    this._trainingPhrases = value;
  }
  public resetTrainingPhrases() {
    this._trainingPhrases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPhrasesInput() {
    return this._trainingPhrases;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      is_fallback: cdktf.booleanToTerraform(this._isFallback),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      language_code: cdktf.stringToTerraform(this._languageCode),
      parent: cdktf.stringToTerraform(this._parent),
      priority: cdktf.numberToTerraform(this._priority),
      parameters: cdktf.listMapper(dialogflowCxIntentParametersToTerraform)(this._parameters),
      timeouts: dialogflowCxIntentTimeoutsToTerraform(this._timeouts.internalValue),
      training_phrases: cdktf.listMapper(dialogflowCxIntentTrainingPhrasesToTerraform)(this._trainingPhrases),
    };
  }
}
