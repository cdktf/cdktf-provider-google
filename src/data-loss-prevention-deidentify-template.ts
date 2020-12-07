// https://www.terraform.io/docs/providers/google/r/data_loss_prevention_deidentify_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLossPreventionDeidentifyTemplateConfig extends cdktf.TerraformMetaArguments {
  /** A description of the template. */
  readonly description?: string;
  /** User set display name of the template. */
  readonly displayName?: string;
  /** The parent of the template in any of the following formats:

* 'projects/{{project}}'
* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}'
* 'organizations/{{organization_id}}/locations/{{location}}' */
  readonly parent: string;
  /** deidentify_config block */
  readonly deidentifyConfig: DataLossPreventionDeidentifyTemplateDeidentifyConfig[];
  /** timeouts block */
  readonly timeouts?: DataLossPreventionDeidentifyTemplateTimeouts;
}
export interface DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypes {
  /** Name of the information type. */
  readonly name: string;
}

function dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesToTerraform(struct?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore {
  /** Characters to not transform when masking. */
  readonly characterToSkip?: string;
  /** Common characters to not transform when masking. Useful to avoid removing punctuation. Possible values: ["NUMERIC", "ALPHA_UPPER_CASE", "ALPHA_LOWER_CASE", "PUNCTUATION", "WHITESPACE"] */
  readonly commonCharactersToIgnore?: string;
}

function dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToTerraform(struct?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    character_to_skip: cdktf.stringToTerraform(struct!.characterToSkip),
    common_characters_to_ignore: cdktf.stringToTerraform(struct!.commonCharactersToIgnore),
  }
}

export interface DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig {
  /** Character to use to mask the sensitive values—for example, * for an alphabetic string such as a name, or 0 for a numeric string
such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to * for
strings, and 0 for digits. */
  readonly maskingCharacter?: string;
  /** Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally. */
  readonly numberToMask?: number;
  /** Mask characters in reverse order. For example, if masking_character is 0, number_to_mask is 14, and reverse_order is 'false', then the
input string '1234-5678-9012-3456' is masked as '00000000000000-3456'. */
  readonly reverseOrder?: boolean;
  /** characters_to_ignore block */
  readonly charactersToIgnore?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore[];
}

function dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigToTerraform(struct?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    masking_character: cdktf.stringToTerraform(struct!.maskingCharacter),
    number_to_mask: cdktf.numberToTerraform(struct!.numberToMask),
    reverse_order: cdktf.booleanToTerraform(struct!.reverseOrder),
    characters_to_ignore: cdktf.listMapper(dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToTerraform)(struct!.charactersToIgnore),
  }
}

export interface DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue {
  /** Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a
year by itself or a year and month where the day is not significant. */
  readonly day?: number;
  /** Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day. */
  readonly month?: number;
  /** Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year. */
  readonly year?: number;
}

function dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToTerraform(struct?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}

export interface DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue {
  /** Hours of day in 24 hour format. Should be from 0 to 23. */
  readonly hours?: number;
  /** Minutes of hour of day. Must be from 0 to 59. */
  readonly minutes?: number;
  /** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
  readonly nanos?: number;
  /** Seconds of minutes of the time. Must normally be from 0 to 59. */
  readonly seconds?: number;
}

function dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToTerraform(struct?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export interface DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue {
  /** A boolean value. */
  readonly booleanValue?: boolean;
  /** Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"] */
  readonly dayOfWeekValue?: string;
  /** A float value. */
  readonly floatValue?: number;
  /** An integer value. */
  readonly integerValue?: number;
  /** A string value. */
  readonly stringValue?: string;
  /** A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
  readonly timestampValue?: string;
  /** date_value block */
  readonly dateValue?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue[];
  /** time_value block */
  readonly timeValue?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue[];
}

function dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueToTerraform(struct?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: cdktf.listMapper(dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToTerraform)(struct!.dateValue),
    time_value: cdktf.listMapper(dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToTerraform)(struct!.timeValue),
  }
}

export interface DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig {
  /** new_value block */
  readonly newValue: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue[];
}

function dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigToTerraform(struct?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    new_value: cdktf.listMapper(dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueToTerraform)(struct!.newValue),
  }
}

export interface DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformation {
  /** character_mask_config block */
  readonly characterMaskConfig?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig[];
  /** replace_config block */
  readonly replaceConfig?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig[];
}

function dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationToTerraform(struct?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    character_mask_config: cdktf.listMapper(dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigToTerraform)(struct!.characterMaskConfig),
    replace_config: cdktf.listMapper(dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigToTerraform)(struct!.replaceConfig),
  }
}

export interface DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformations {
  /** info_types block */
  readonly infoTypes?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypes[];
  /** primitive_transformation block */
  readonly primitiveTransformation: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformation[];
}

function dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsToTerraform(struct?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    info_types: cdktf.listMapper(dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesToTerraform)(struct!.infoTypes),
    primitive_transformation: cdktf.listMapper(dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationToTerraform)(struct!.primitiveTransformation),
  }
}

export interface DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations {
  /** transformations block */
  readonly transformations: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformations[];
}

function dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsToTerraform(struct?: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    transformations: cdktf.listMapper(dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsToTerraform)(struct!.transformations),
  }
}

export interface DataLossPreventionDeidentifyTemplateDeidentifyConfig {
  /** info_type_transformations block */
  readonly infoTypeTransformations: DataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations[];
}

function dataLossPreventionDeidentifyTemplateDeidentifyConfigToTerraform(struct?: DataLossPreventionDeidentifyTemplateDeidentifyConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    info_type_transformations: cdktf.listMapper(dataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsToTerraform)(struct!.infoTypeTransformations),
  }
}

export interface DataLossPreventionDeidentifyTemplateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dataLossPreventionDeidentifyTemplateTimeoutsToTerraform(struct?: DataLossPreventionDeidentifyTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DataLossPreventionDeidentifyTemplate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataLossPreventionDeidentifyTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_deidentify_template',
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
    this._parent = config.parent;
    this._deidentifyConfig = config.deidentifyConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent
  }

  // deidentify_config - computed: false, optional: false, required: true
  private _deidentifyConfig: DataLossPreventionDeidentifyTemplateDeidentifyConfig[];
  public get deidentifyConfig() {
    return this.interpolationForAttribute('deidentify_config') as any;
  }
  public set deidentifyConfig(value: DataLossPreventionDeidentifyTemplateDeidentifyConfig[]) {
    this._deidentifyConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deidentifyConfigInput() {
    return this._deidentifyConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLossPreventionDeidentifyTemplateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataLossPreventionDeidentifyTemplateTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      parent: cdktf.stringToTerraform(this._parent),
      deidentify_config: cdktf.listMapper(dataLossPreventionDeidentifyTemplateDeidentifyConfigToTerraform)(this._deidentifyConfig),
      timeouts: dataLossPreventionDeidentifyTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
