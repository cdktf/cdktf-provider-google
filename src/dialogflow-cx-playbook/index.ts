/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxPlaybookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable name of the playbook, unique within an agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#display_name DialogflowCxPlaybook#display_name}
  */
  readonly displayName: string;
  /**
  * High level description of the goal the playbook intend to accomplish. A goal should be concise since it's visible to other playbooks that may reference this playbook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#goal DialogflowCxPlaybook#goal}
  */
  readonly goal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#id DialogflowCxPlaybook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The agent to create a Playbook for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#parent DialogflowCxPlaybook#parent}
  */
  readonly parent?: string;
  /**
  * Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#playbook_type DialogflowCxPlaybook#playbook_type}
  */
  readonly playbookType?: string;
  /**
  * The resource name of tools referenced by the current playbook in the instructions. If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#referenced_tools DialogflowCxPlaybook#referenced_tools}
  */
  readonly referencedTools?: string[];
  /**
  * instruction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#instruction DialogflowCxPlaybook#instruction}
  */
  readonly instruction?: DialogflowCxPlaybookInstruction;
  /**
  * llm_model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#llm_model_settings DialogflowCxPlaybook#llm_model_settings}
  */
  readonly llmModelSettings?: DialogflowCxPlaybookLlmModelSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#timeouts DialogflowCxPlaybook#timeouts}
  */
  readonly timeouts?: DialogflowCxPlaybookTimeouts;
}
export interface DialogflowCxPlaybookInstructionSteps {
  /**
  * Sub-processing needed to execute the current step.
  * 
  * This field uses JSON data as a string. The value provided must be a valid JSON representation documented in [Step](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.playbooks#step).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#steps DialogflowCxPlaybook#steps}
  */
  readonly steps?: string;
  /**
  * Step instruction in text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#text DialogflowCxPlaybook#text}
  */
  readonly text?: string;
}

export function dialogflowCxPlaybookInstructionStepsToTerraform(struct?: DialogflowCxPlaybookInstructionSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    steps: cdktf.stringToTerraform(struct!.steps),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dialogflowCxPlaybookInstructionStepsToHclTerraform(struct?: DialogflowCxPlaybookInstructionSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    steps: {
      value: cdktf.stringToHclTerraform(struct!.steps),
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

export class DialogflowCxPlaybookInstructionStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxPlaybookInstructionSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._steps !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPlaybookInstructionSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._steps = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._steps = value.steps;
      this._text = value.text;
    }
  }

  // steps - computed: false, optional: true, required: false
  private _steps?: string; 
  public get steps() {
    return this.getStringAttribute('steps');
  }
  public set steps(value: string) {
    this._steps = value;
  }
  public resetSteps() {
    this._steps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps;
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

export class DialogflowCxPlaybookInstructionStepsList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxPlaybookInstructionSteps[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxPlaybookInstructionStepsOutputReference {
    return new DialogflowCxPlaybookInstructionStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxPlaybookInstruction {
  /**
  * General guidelines for the playbook. These are unstructured instructions that are not directly part of the goal, e.g. "Always be polite". It's valid for this text to be long and used instead of steps altogether.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#guidelines DialogflowCxPlaybook#guidelines}
  */
  readonly guidelines?: string;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#steps DialogflowCxPlaybook#steps}
  */
  readonly steps?: DialogflowCxPlaybookInstructionSteps[] | cdktf.IResolvable;
}

export function dialogflowCxPlaybookInstructionToTerraform(struct?: DialogflowCxPlaybookInstructionOutputReference | DialogflowCxPlaybookInstruction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guidelines: cdktf.stringToTerraform(struct!.guidelines),
    steps: cdktf.listMapper(dialogflowCxPlaybookInstructionStepsToTerraform, true)(struct!.steps),
  }
}


export function dialogflowCxPlaybookInstructionToHclTerraform(struct?: DialogflowCxPlaybookInstructionOutputReference | DialogflowCxPlaybookInstruction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guidelines: {
      value: cdktf.stringToHclTerraform(struct!.guidelines),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    steps: {
      value: cdktf.listMapperHcl(dialogflowCxPlaybookInstructionStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxPlaybookInstructionStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxPlaybookInstructionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPlaybookInstruction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guidelines !== undefined) {
      hasAnyValues = true;
      internalValueResult.guidelines = this._guidelines;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxPlaybookInstruction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._guidelines = undefined;
      this._steps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._guidelines = value.guidelines;
      this._steps.internalValue = value.steps;
    }
  }

  // guidelines - computed: false, optional: true, required: false
  private _guidelines?: string; 
  public get guidelines() {
    return this.getStringAttribute('guidelines');
  }
  public set guidelines(value: string) {
    this._guidelines = value;
  }
  public resetGuidelines() {
    this._guidelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidelinesInput() {
    return this._guidelines;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new DialogflowCxPlaybookInstructionStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: DialogflowCxPlaybookInstructionSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}
export interface DialogflowCxPlaybookLlmModelSettings {
  /**
  * The selected LLM model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#model DialogflowCxPlaybook#model}
  */
  readonly model?: string;
  /**
  * The custom prompt to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#prompt_text DialogflowCxPlaybook#prompt_text}
  */
  readonly promptText?: string;
}

export function dialogflowCxPlaybookLlmModelSettingsToTerraform(struct?: DialogflowCxPlaybookLlmModelSettingsOutputReference | DialogflowCxPlaybookLlmModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    prompt_text: cdktf.stringToTerraform(struct!.promptText),
  }
}


export function dialogflowCxPlaybookLlmModelSettingsToHclTerraform(struct?: DialogflowCxPlaybookLlmModelSettingsOutputReference | DialogflowCxPlaybookLlmModelSettings): any {
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

export class DialogflowCxPlaybookLlmModelSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxPlaybookLlmModelSettings | undefined {
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

  public set internalValue(value: DialogflowCxPlaybookLlmModelSettings | undefined) {
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
export interface DialogflowCxPlaybookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#create DialogflowCxPlaybook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#delete DialogflowCxPlaybook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#update DialogflowCxPlaybook#update}
  */
  readonly update?: string;
}

export function dialogflowCxPlaybookTimeoutsToTerraform(struct?: DialogflowCxPlaybookTimeouts | cdktf.IResolvable): any {
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


export function dialogflowCxPlaybookTimeoutsToHclTerraform(struct?: DialogflowCxPlaybookTimeouts | cdktf.IResolvable): any {
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

export class DialogflowCxPlaybookTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCxPlaybookTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxPlaybookTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook google_dialogflow_cx_playbook}
*/
export class DialogflowCxPlaybook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_playbook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DialogflowCxPlaybook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCxPlaybook to import
  * @param importFromId The id of the existing DialogflowCxPlaybook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCxPlaybook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_playbook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_playbook google_dialogflow_cx_playbook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxPlaybookConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxPlaybookConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_playbook',
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
    this._goal = config.goal;
    this._id = config.id;
    this._parent = config.parent;
    this._playbookType = config.playbookType;
    this._referencedTools = config.referencedTools;
    this._instruction.internalValue = config.instruction;
    this._llmModelSettings.internalValue = config.llmModelSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // goal - computed: false, optional: false, required: true
  private _goal?: string; 
  public get goal() {
    return this.getStringAttribute('goal');
  }
  public set goal(value: string) {
    this._goal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goalInput() {
    return this._goal;
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

  // playbook_type - computed: false, optional: true, required: false
  private _playbookType?: string; 
  public get playbookType() {
    return this.getStringAttribute('playbook_type');
  }
  public set playbookType(value: string) {
    this._playbookType = value;
  }
  public resetPlaybookType() {
    this._playbookType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playbookTypeInput() {
    return this._playbookType;
  }

  // referenced_flows - computed: true, optional: false, required: false
  public get referencedFlows() {
    return this.getListAttribute('referenced_flows');
  }

  // referenced_playbooks - computed: true, optional: false, required: false
  public get referencedPlaybooks() {
    return this.getListAttribute('referenced_playbooks');
  }

  // referenced_tools - computed: false, optional: true, required: false
  private _referencedTools?: string[]; 
  public get referencedTools() {
    return this.getListAttribute('referenced_tools');
  }
  public set referencedTools(value: string[]) {
    this._referencedTools = value;
  }
  public resetReferencedTools() {
    this._referencedTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedToolsInput() {
    return this._referencedTools;
  }

  // token_count - computed: true, optional: false, required: false
  public get tokenCount() {
    return this.getStringAttribute('token_count');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // instruction - computed: false, optional: true, required: false
  private _instruction = new DialogflowCxPlaybookInstructionOutputReference(this, "instruction");
  public get instruction() {
    return this._instruction;
  }
  public putInstruction(value: DialogflowCxPlaybookInstruction) {
    this._instruction.internalValue = value;
  }
  public resetInstruction() {
    this._instruction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction.internalValue;
  }

  // llm_model_settings - computed: false, optional: true, required: false
  private _llmModelSettings = new DialogflowCxPlaybookLlmModelSettingsOutputReference(this, "llm_model_settings");
  public get llmModelSettings() {
    return this._llmModelSettings;
  }
  public putLlmModelSettings(value: DialogflowCxPlaybookLlmModelSettings) {
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
  private _timeouts = new DialogflowCxPlaybookTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxPlaybookTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      goal: cdktf.stringToTerraform(this._goal),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      playbook_type: cdktf.stringToTerraform(this._playbookType),
      referenced_tools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._referencedTools),
      instruction: dialogflowCxPlaybookInstructionToTerraform(this._instruction.internalValue),
      llm_model_settings: dialogflowCxPlaybookLlmModelSettingsToTerraform(this._llmModelSettings.internalValue),
      timeouts: dialogflowCxPlaybookTimeoutsToTerraform(this._timeouts.internalValue),
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
      goal: {
        value: cdktf.stringToHclTerraform(this._goal),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      playbook_type: {
        value: cdktf.stringToHclTerraform(this._playbookType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      referenced_tools: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._referencedTools),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instruction: {
        value: dialogflowCxPlaybookInstructionToHclTerraform(this._instruction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxPlaybookInstructionList",
      },
      llm_model_settings: {
        value: dialogflowCxPlaybookLlmModelSettingsToHclTerraform(this._llmModelSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxPlaybookLlmModelSettingsList",
      },
      timeouts: {
        value: dialogflowCxPlaybookTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCxPlaybookTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
