// https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxIntentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#description DialogflowCxIntent#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the intent, unique within the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#display_name DialogflowCxIntent#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#id DialogflowCxIntent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Marks this as the [Default Negative Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#negative) for an agent. When you create an agent, a Default Negative Intent is created automatically.
  * The Default Negative Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources.
  * 
  * ~> Avoid having multiple 'google_dialogflow_cx_intent' resources linked to the same agent with 'is_default_negative_intent = true' because they will compete to control a single Default Negative Intent resource in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#is_default_negative_intent DialogflowCxIntent#is_default_negative_intent}
  */
  readonly isDefaultNegativeIntent?: boolean | cdktf.IResolvable;
  /**
  * Marks this as the [Default Welcome Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#welcome) for an agent. When you create an agent, a Default Welcome Intent is created automatically.
  * The Default Welcome Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources.
  * 
  * ~> Avoid having multiple 'google_dialogflow_cx_intent' resources linked to the same agent with 'is_default_welcome_intent = true' because they will compete to control a single Default Welcome Intent resource in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#is_default_welcome_intent DialogflowCxIntent#is_default_welcome_intent}
  */
  readonly isDefaultWelcomeIntent?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation.
  * Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
  * To manage the fallback intent, set 'is_default_negative_intent = true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#is_fallback DialogflowCxIntent#is_fallback}
  */
  readonly isFallback?: boolean | cdktf.IResolvable;
  /**
  * The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes.
  * Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.
  * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#labels DialogflowCxIntent#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The language of the following fields in intent:
  * Intent.training_phrases.parts.text
  * If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#language_code DialogflowCxIntent#language_code}
  */
  readonly languageCode?: string;
  /**
  * The agent to create an intent for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#parent DialogflowCxIntent#parent}
  */
  readonly parent?: string;
  /**
  * The priority of this intent. Higher numbers represent higher priorities.
  * If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the Normal priority in the console.
  * If the supplied value is negative, the intent is ignored in runtime detect intent requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#priority DialogflowCxIntent#priority}
  */
  readonly priority?: number;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#parameters DialogflowCxIntent#parameters}
  */
  readonly parameters?: DialogflowCxIntentParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#timeouts DialogflowCxIntent#timeouts}
  */
  readonly timeouts?: DialogflowCxIntentTimeouts;
  /**
  * training_phrases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#training_phrases DialogflowCxIntent#training_phrases}
  */
  readonly trainingPhrases?: DialogflowCxIntentTrainingPhrases[] | cdktf.IResolvable;
}
export interface DialogflowCxIntentParameters {
  /**
  * The entity type of the parameter.
  * Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#entity_type DialogflowCxIntent#entity_type}
  */
  readonly entityType: string;
  /**
  * The unique identifier of the parameter. This field is used by training phrases to annotate their parts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#id DialogflowCxIntent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Indicates whether the parameter represents a list of values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#is_list DialogflowCxIntent#is_list}
  */
  readonly isList?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging.
  * Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#redact DialogflowCxIntent#redact}
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


export function dialogflowCxIntentParametersToHclTerraform(struct?: DialogflowCxIntentParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxIntentParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxIntentParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isList !== undefined) {
      hasAnyValues = true;
      internalValueResult.isList = this._isList;
    }
    if (this._redact !== undefined) {
      hasAnyValues = true;
      internalValueResult.redact = this._redact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxIntentParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
      this._id = undefined;
      this._isList = undefined;
      this._redact = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
      this._id = value.id;
      this._isList = value.isList;
      this._redact = value.redact;
    }
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class DialogflowCxIntentParametersList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxIntentParameters[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxIntentParametersOutputReference {
    return new DialogflowCxIntentParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxIntentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#create DialogflowCxIntent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#delete DialogflowCxIntent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#update DialogflowCxIntent#update}
  */
  readonly update?: string;
}

export function dialogflowCxIntentTimeoutsToTerraform(struct?: DialogflowCxIntentTimeouts | cdktf.IResolvable): any {
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


export function dialogflowCxIntentTimeoutsToHclTerraform(struct?: DialogflowCxIntentTimeouts | cdktf.IResolvable): any {
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

export class DialogflowCxIntentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCxIntentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxIntentTimeouts | cdktf.IResolvable | undefined) {
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
export interface DialogflowCxIntentTrainingPhrasesParts {
  /**
  * The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#parameter_id DialogflowCxIntent#parameter_id}
  */
  readonly parameterId?: string;
  /**
  * The text for this part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#text DialogflowCxIntent#text}
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


export function dialogflowCxIntentTrainingPhrasesPartsToHclTerraform(struct?: DialogflowCxIntentTrainingPhrasesParts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterId),
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

export class DialogflowCxIntentTrainingPhrasesPartsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxIntentTrainingPhrasesParts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterId = this._parameterId;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxIntentTrainingPhrasesParts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterId = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterId = value.parameterId;
      this._text = value.text;
    }
  }

  // parameter_id - computed: false, optional: true, required: false
  private _parameterId?: string; 
  public get parameterId() {
    return this.getStringAttribute('parameter_id');
  }
  public set parameterId(value: string) {
    this._parameterId = value;
  }
  public resetParameterId() {
    this._parameterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterIdInput() {
    return this._parameterId;
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

export class DialogflowCxIntentTrainingPhrasesPartsList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxIntentTrainingPhrasesParts[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxIntentTrainingPhrasesPartsOutputReference {
    return new DialogflowCxIntentTrainingPhrasesPartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxIntentTrainingPhrases {
  /**
  * Indicates how many times this example was added to the intent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#repeat_count DialogflowCxIntent#repeat_count}
  */
  readonly repeatCount?: number;
  /**
  * parts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#parts DialogflowCxIntent#parts}
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
    parts: cdktf.listMapper(dialogflowCxIntentTrainingPhrasesPartsToTerraform, true)(struct!.parts),
  }
}


export function dialogflowCxIntentTrainingPhrasesToHclTerraform(struct?: DialogflowCxIntentTrainingPhrases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repeat_count: {
      value: cdktf.numberToHclTerraform(struct!.repeatCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parts: {
      value: cdktf.listMapperHcl(dialogflowCxIntentTrainingPhrasesPartsToHclTerraform, true)(struct!.parts),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxIntentTrainingPhrasesPartsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxIntentTrainingPhrasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowCxIntentTrainingPhrases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repeatCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatCount = this._repeatCount;
    }
    if (this._parts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parts = this._parts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxIntentTrainingPhrases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repeatCount = undefined;
      this._parts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repeatCount = value.repeatCount;
      this._parts.internalValue = value.parts;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // repeat_count - computed: false, optional: true, required: false
  private _repeatCount?: number; 
  public get repeatCount() {
    return this.getNumberAttribute('repeat_count');
  }
  public set repeatCount(value: number) {
    this._repeatCount = value;
  }
  public resetRepeatCount() {
    this._repeatCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCountInput() {
    return this._repeatCount;
  }

  // parts - computed: false, optional: false, required: true
  private _parts = new DialogflowCxIntentTrainingPhrasesPartsList(this, "parts", false);
  public get parts() {
    return this._parts;
  }
  public putParts(value: DialogflowCxIntentTrainingPhrasesParts[] | cdktf.IResolvable) {
    this._parts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partsInput() {
    return this._parts.internalValue;
  }
}

export class DialogflowCxIntentTrainingPhrasesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxIntentTrainingPhrases[] | cdktf.IResolvable

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
  public get(index: number): DialogflowCxIntentTrainingPhrasesOutputReference {
    return new DialogflowCxIntentTrainingPhrasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent google_dialogflow_cx_intent}
*/
export class DialogflowCxIntent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_intent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DialogflowCxIntent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCxIntent to import
  * @param importFromId The id of the existing DialogflowCxIntent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCxIntent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_intent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dialogflow_cx_intent google_dialogflow_cx_intent} Resource
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
        providerVersion: '6.4.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._isDefaultNegativeIntent = config.isDefaultNegativeIntent;
    this._isDefaultWelcomeIntent = config.isDefaultWelcomeIntent;
    this._isFallback = config.isFallback;
    this._labels = config.labels;
    this._languageCode = config.languageCode;
    this._parent = config.parent;
    this._priority = config.priority;
    this._parameters.internalValue = config.parameters;
    this._timeouts.internalValue = config.timeouts;
    this._trainingPhrases.internalValue = config.trainingPhrases;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // is_default_negative_intent - computed: false, optional: true, required: false
  private _isDefaultNegativeIntent?: boolean | cdktf.IResolvable; 
  public get isDefaultNegativeIntent() {
    return this.getBooleanAttribute('is_default_negative_intent');
  }
  public set isDefaultNegativeIntent(value: boolean | cdktf.IResolvable) {
    this._isDefaultNegativeIntent = value;
  }
  public resetIsDefaultNegativeIntent() {
    this._isDefaultNegativeIntent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultNegativeIntentInput() {
    return this._isDefaultNegativeIntent;
  }

  // is_default_welcome_intent - computed: false, optional: true, required: false
  private _isDefaultWelcomeIntent?: boolean | cdktf.IResolvable; 
  public get isDefaultWelcomeIntent() {
    return this.getBooleanAttribute('is_default_welcome_intent');
  }
  public set isDefaultWelcomeIntent(value: boolean | cdktf.IResolvable) {
    this._isDefaultWelcomeIntent = value;
  }
  public resetIsDefaultWelcomeIntent() {
    this._isDefaultWelcomeIntent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultWelcomeIntentInput() {
    return this._isDefaultWelcomeIntent;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DialogflowCxIntentParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DialogflowCxIntentParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
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
  private _trainingPhrases = new DialogflowCxIntentTrainingPhrasesList(this, "training_phrases", false);
  public get trainingPhrases() {
    return this._trainingPhrases;
  }
  public putTrainingPhrases(value: DialogflowCxIntentTrainingPhrases[] | cdktf.IResolvable) {
    this._trainingPhrases.internalValue = value;
  }
  public resetTrainingPhrases() {
    this._trainingPhrases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPhrasesInput() {
    return this._trainingPhrases.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_default_negative_intent: cdktf.booleanToTerraform(this._isDefaultNegativeIntent),
      is_default_welcome_intent: cdktf.booleanToTerraform(this._isDefaultWelcomeIntent),
      is_fallback: cdktf.booleanToTerraform(this._isFallback),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      language_code: cdktf.stringToTerraform(this._languageCode),
      parent: cdktf.stringToTerraform(this._parent),
      priority: cdktf.numberToTerraform(this._priority),
      parameters: cdktf.listMapper(dialogflowCxIntentParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: dialogflowCxIntentTimeoutsToTerraform(this._timeouts.internalValue),
      training_phrases: cdktf.listMapper(dialogflowCxIntentTrainingPhrasesToTerraform, true)(this._trainingPhrases.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      is_default_negative_intent: {
        value: cdktf.booleanToHclTerraform(this._isDefaultNegativeIntent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_default_welcome_intent: {
        value: cdktf.booleanToHclTerraform(this._isDefaultWelcomeIntent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_fallback: {
        value: cdktf.booleanToHclTerraform(this._isFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parameters: {
        value: cdktf.listMapperHcl(dialogflowCxIntentParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxIntentParametersList",
      },
      timeouts: {
        value: dialogflowCxIntentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCxIntentTimeouts",
      },
      training_phrases: {
        value: cdktf.listMapperHcl(dialogflowCxIntentTrainingPhrasesToHclTerraform, true)(this._trainingPhrases.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxIntentTrainingPhrasesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
