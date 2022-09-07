// https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowEntityTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of this entity type to be displayed on the console.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type#display_name DialogflowEntityType#display_name}
  */
  readonly displayName: string;
  /**
  * Enables fuzzy entity extraction during classification.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type#enable_fuzzy_extraction DialogflowEntityType#enable_fuzzy_extraction}
  */
  readonly enableFuzzyExtraction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type#id DialogflowEntityType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates the kind of entity type.
* KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.
* KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity
types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type#kind DialogflowEntityType#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type#project DialogflowEntityType#project}
  */
  readonly project?: string;
  /**
  * entities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type#entities DialogflowEntityType#entities}
  */
  readonly entities?: DialogflowEntityTypeEntities[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type#timeouts DialogflowEntityType#timeouts}
  */
  readonly timeouts?: DialogflowEntityTypeTimeouts;
}
export interface DialogflowEntityTypeEntities {
  /**
  * A collection of value synonyms. For example, if the entity type is vegetable, and value is scallions, a synonym
could be green onions.
For KIND_LIST entity types:
* This collection must contain exactly one synonym equal to value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type#synonyms DialogflowEntityType#synonyms}
  */
  readonly synonyms: string[];
  /**
  * The primary value associated with this entity entry. For example, if the entity type is vegetable, the value
could be scallions.
For KIND_MAP entity types:
* A reference value to be used in place of synonyms.
For KIND_LIST entity types:
* A string that can contain references to other entity types (with or without aliases).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type#value DialogflowEntityType#value}
  */
  readonly value: string;
}

export function dialogflowEntityTypeEntitiesToTerraform(struct?: DialogflowEntityTypeEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    synonyms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.synonyms),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DialogflowEntityTypeEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowEntityTypeEntities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowEntityTypeEntities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._synonyms = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._synonyms = value.synonyms;
      this._value = value.value;
    }
  }

  // synonyms - computed: false, optional: false, required: true
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DialogflowEntityTypeEntitiesList extends cdktf.ComplexList {
  public internalValue? : DialogflowEntityTypeEntities[] | cdktf.IResolvable

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
  public get(index: number): DialogflowEntityTypeEntitiesOutputReference {
    return new DialogflowEntityTypeEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowEntityTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type#create DialogflowEntityType#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type#delete DialogflowEntityType#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type#update DialogflowEntityType#update}
  */
  readonly update?: string;
}

export function dialogflowEntityTypeTimeoutsToTerraform(struct?: DialogflowEntityTypeTimeoutsOutputReference | DialogflowEntityTypeTimeouts | cdktf.IResolvable): any {
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

export class DialogflowEntityTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowEntityTypeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowEntityTypeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type google_dialogflow_entity_type}
*/
export class DialogflowEntityType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_entity_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type google_dialogflow_entity_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowEntityTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowEntityTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_entity_type',
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
    this._displayName = config.displayName;
    this._enableFuzzyExtraction = config.enableFuzzyExtraction;
    this._id = config.id;
    this._kind = config.kind;
    this._project = config.project;
    this._entities.internalValue = config.entities;
    this._timeouts.internalValue = config.timeouts;
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

  // enable_fuzzy_extraction - computed: false, optional: true, required: false
  private _enableFuzzyExtraction?: boolean | cdktf.IResolvable; 
  public get enableFuzzyExtraction() {
    return this.getBooleanAttribute('enable_fuzzy_extraction');
  }
  public set enableFuzzyExtraction(value: boolean | cdktf.IResolvable) {
    this._enableFuzzyExtraction = value;
  }
  public resetEnableFuzzyExtraction() {
    this._enableFuzzyExtraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFuzzyExtractionInput() {
    return this._enableFuzzyExtraction;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // entities - computed: false, optional: true, required: false
  private _entities = new DialogflowEntityTypeEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
  }
  public putEntities(value: DialogflowEntityTypeEntities[] | cdktf.IResolvable) {
    this._entities.internalValue = value;
  }
  public resetEntities() {
    this._entities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowEntityTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowEntityTypeTimeouts) {
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
      enable_fuzzy_extraction: cdktf.booleanToTerraform(this._enableFuzzyExtraction),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      project: cdktf.stringToTerraform(this._project),
      entities: cdktf.listMapper(dialogflowEntityTypeEntitiesToTerraform, true)(this._entities.internalValue),
      timeouts: dialogflowEntityTypeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
