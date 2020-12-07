// https://www.terraform.io/docs/providers/google/r/dialogflow_entity_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowEntityTypeConfig extends cdktf.TerraformMetaArguments {
  /** The name of this entity type to be displayed on the console. */
  readonly displayName: string;
  /** Enables fuzzy entity extraction during classification. */
  readonly enableFuzzyExtraction?: boolean;
  /** Indicates the kind of entity type.
* KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.
* KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity
types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"] */
  readonly kind: string;
  readonly project?: string;
  /** entities block */
  readonly entities?: DialogflowEntityTypeEntities[];
  /** timeouts block */
  readonly timeouts?: DialogflowEntityTypeTimeouts;
}
export interface DialogflowEntityTypeEntities {
  /** A collection of value synonyms. For example, if the entity type is vegetable, and value is scallions, a synonym
could be green onions.
For KIND_LIST entity types:
* This collection must contain exactly one synonym equal to value. */
  readonly synonyms: string[];
  /** The primary value associated with this entity entry. For example, if the entity type is vegetable, the value
could be scallions.
For KIND_MAP entity types:
* A reference value to be used in place of synonyms.
For KIND_LIST entity types:
* A string that can contain references to other entity types (with or without aliases). */
  readonly value: string;
}

function dialogflowEntityTypeEntitiesToTerraform(struct?: DialogflowEntityTypeEntities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    synonyms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.synonyms),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DialogflowEntityTypeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dialogflowEntityTypeTimeoutsToTerraform(struct?: DialogflowEntityTypeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DialogflowEntityType extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DialogflowEntityTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_entity_type',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._enableFuzzyExtraction = config.enableFuzzyExtraction;
    this._kind = config.kind;
    this._project = config.project;
    this._entities = config.entities;
    this._timeouts = config.timeouts;
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

  // enable_fuzzy_extraction - computed: false, optional: true, required: false
  private _enableFuzzyExtraction?: boolean;
  public get enableFuzzyExtraction() {
    return this.getBooleanAttribute('enable_fuzzy_extraction');
  }
  public set enableFuzzyExtraction(value: boolean ) {
    this._enableFuzzyExtraction = value;
  }
  public resetEnableFuzzyExtraction() {
    this._enableFuzzyExtraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFuzzyExtractionInput() {
    return this._enableFuzzyExtraction
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind: string;
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
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
    return this._project
  }

  // entities - computed: false, optional: true, required: false
  private _entities?: DialogflowEntityTypeEntities[];
  public get entities() {
    return this.interpolationForAttribute('entities') as any;
  }
  public set entities(value: DialogflowEntityTypeEntities[] ) {
    this._entities = value;
  }
  public resetEntities() {
    this._entities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DialogflowEntityTypeTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DialogflowEntityTypeTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_fuzzy_extraction: cdktf.booleanToTerraform(this._enableFuzzyExtraction),
      kind: cdktf.stringToTerraform(this._kind),
      project: cdktf.stringToTerraform(this._project),
      entities: cdktf.listMapper(dialogflowEntityTypeEntitiesToTerraform)(this._entities),
      timeouts: dialogflowEntityTypeTimeoutsToTerraform(this._timeouts),
    };
  }
}
