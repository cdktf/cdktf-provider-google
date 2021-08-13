// https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxEntityTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Represents kinds of entities.
* AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
* AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity. Possible values: ["AUTO_EXPANSION_MODE_DEFAULT", "AUTO_EXPANSION_MODE_UNSPECIFIED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#auto_expansion_mode DialogflowCxEntityType#auto_expansion_mode}
  */
  readonly autoExpansionMode?: string;
  /**
  * The human-readable name of the entity type, unique within the agent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#display_name DialogflowCxEntityType#display_name}
  */
  readonly displayName: string;
  /**
  * Enables fuzzy entity extraction during classification.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#enable_fuzzy_extraction DialogflowCxEntityType#enable_fuzzy_extraction}
  */
  readonly enableFuzzyExtraction?: boolean;
  /**
  * Indicates whether the entity type can be automatically expanded.
* KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
* KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#kind DialogflowCxEntityType#kind}
  */
  readonly kind: string;
  /**
  * The language of the following fields in entityType:
EntityType.entities.value
EntityType.entities.synonyms
EntityType.excluded_phrases.value
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#language_code DialogflowCxEntityType#language_code}
  */
  readonly languageCode?: string;
  /**
  * The agent to create a entity type for. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#parent DialogflowCxEntityType#parent}
  */
  readonly parent?: string;
  /**
  * Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#redact DialogflowCxEntityType#redact}
  */
  readonly redact?: boolean;
  /**
  * entities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#entities DialogflowCxEntityType#entities}
  */
  readonly entities: DialogflowCxEntityTypeEntities[];
  /**
  * excluded_phrases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#excluded_phrases DialogflowCxEntityType#excluded_phrases}
  */
  readonly excludedPhrases?: DialogflowCxEntityTypeExcludedPhrases[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#timeouts DialogflowCxEntityType#timeouts}
  */
  readonly timeouts?: DialogflowCxEntityTypeTimeouts;
}
export interface DialogflowCxEntityTypeEntities {
  /**
  * A collection of value synonyms. For example, if the entity type is vegetable, and value is scallions, a synonym could be green onions.
For KIND_LIST entity types: This collection must contain exactly one synonym equal to value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#synonyms DialogflowCxEntityType#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * The primary value associated with this entity entry. For example, if the entity type is vegetable, the value could be scallions.
For KIND_MAP entity types: A canonical value to be used in place of synonyms.
For KIND_LIST entity types: A string that can contain references to other entity types (with or without aliases).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#value DialogflowCxEntityType#value}
  */
  readonly value?: string;
}

function dialogflowCxEntityTypeEntitiesToTerraform(struct?: DialogflowCxEntityTypeEntities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    synonyms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.synonyms),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DialogflowCxEntityTypeExcludedPhrases {
  /**
  * The word or phrase to be excluded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#value DialogflowCxEntityType#value}
  */
  readonly value?: string;
}

function dialogflowCxEntityTypeExcludedPhrasesToTerraform(struct?: DialogflowCxEntityTypeExcludedPhrases): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DialogflowCxEntityTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#create DialogflowCxEntityType#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#delete DialogflowCxEntityType#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html#update DialogflowCxEntityType#update}
  */
  readonly update?: string;
}

function dialogflowCxEntityTypeTimeoutsToTerraform(struct?: DialogflowCxEntityTypeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html google_dialogflow_cx_entity_type}
*/
export class DialogflowCxEntityType extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type.html google_dialogflow_cx_entity_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxEntityTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxEntityTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_entity_type',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoExpansionMode = config.autoExpansionMode;
    this._displayName = config.displayName;
    this._enableFuzzyExtraction = config.enableFuzzyExtraction;
    this._kind = config.kind;
    this._languageCode = config.languageCode;
    this._parent = config.parent;
    this._redact = config.redact;
    this._entities = config.entities;
    this._excludedPhrases = config.excludedPhrases;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_expansion_mode - computed: false, optional: true, required: false
  private _autoExpansionMode?: string;
  public get autoExpansionMode() {
    return this.getStringAttribute('auto_expansion_mode');
  }
  public set autoExpansionMode(value: string ) {
    this._autoExpansionMode = value;
  }
  public resetAutoExpansionMode() {
    this._autoExpansionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExpansionModeInput() {
    return this._autoExpansionMode
  }

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

  // redact - computed: false, optional: true, required: false
  private _redact?: boolean;
  public get redact() {
    return this.getBooleanAttribute('redact');
  }
  public set redact(value: boolean ) {
    this._redact = value;
  }
  public resetRedact() {
    this._redact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactInput() {
    return this._redact
  }

  // entities - computed: false, optional: false, required: true
  private _entities: DialogflowCxEntityTypeEntities[];
  public get entities() {
    return this.interpolationForAttribute('entities') as any;
  }
  public set entities(value: DialogflowCxEntityTypeEntities[]) {
    this._entities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities
  }

  // excluded_phrases - computed: false, optional: true, required: false
  private _excludedPhrases?: DialogflowCxEntityTypeExcludedPhrases[];
  public get excludedPhrases() {
    return this.interpolationForAttribute('excluded_phrases') as any;
  }
  public set excludedPhrases(value: DialogflowCxEntityTypeExcludedPhrases[] ) {
    this._excludedPhrases = value;
  }
  public resetExcludedPhrases() {
    this._excludedPhrases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPhrasesInput() {
    return this._excludedPhrases
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DialogflowCxEntityTypeTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DialogflowCxEntityTypeTimeouts ) {
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
      auto_expansion_mode: cdktf.stringToTerraform(this._autoExpansionMode),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_fuzzy_extraction: cdktf.booleanToTerraform(this._enableFuzzyExtraction),
      kind: cdktf.stringToTerraform(this._kind),
      language_code: cdktf.stringToTerraform(this._languageCode),
      parent: cdktf.stringToTerraform(this._parent),
      redact: cdktf.booleanToTerraform(this._redact),
      entities: cdktf.listMapper(dialogflowCxEntityTypeEntitiesToTerraform)(this._entities),
      excluded_phrases: cdktf.listMapper(dialogflowCxEntityTypeExcludedPhrasesToTerraform)(this._excludedPhrases),
      timeouts: dialogflowCxEntityTypeTimeoutsToTerraform(this._timeouts),
    };
  }
}
