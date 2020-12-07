// https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLossPreventionStoredInfoTypeConfig extends cdktf.TerraformMetaArguments {
  /** A description of the info type. */
  readonly description?: string;
  /** User set display name of the info type. */
  readonly displayName?: string;
  /** The parent of the info type in any of the following formats:

* 'projects/{{project}}'
* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}'
* 'organizations/{{organization_id}}/locations/{{location}}' */
  readonly parent: string;
  /** dictionary block */
  readonly dictionary?: DataLossPreventionStoredInfoTypeDictionary[];
  /** large_custom_dictionary block */
  readonly largeCustomDictionary?: DataLossPreventionStoredInfoTypeLargeCustomDictionary[];
  /** regex block */
  readonly regex?: DataLossPreventionStoredInfoTypeRegex[];
  /** timeouts block */
  readonly timeouts?: DataLossPreventionStoredInfoTypeTimeouts;
}
export interface DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath {
  /** A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt' */
  readonly path: string;
}

function dataLossPreventionStoredInfoTypeDictionaryCloudStoragePathToTerraform(struct?: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DataLossPreventionStoredInfoTypeDictionaryWordList {
  /** Words or phrases defining the dictionary. The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits. */
  readonly words: string[];
}

function dataLossPreventionStoredInfoTypeDictionaryWordListToTerraform(struct?: DataLossPreventionStoredInfoTypeDictionaryWordList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform)(struct!.words),
  }
}

export interface DataLossPreventionStoredInfoTypeDictionary {
  /** cloud_storage_path block */
  readonly cloudStoragePath?: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath[];
  /** word_list block */
  readonly wordList?: DataLossPreventionStoredInfoTypeDictionaryWordList[];
}

function dataLossPreventionStoredInfoTypeDictionaryToTerraform(struct?: DataLossPreventionStoredInfoTypeDictionary): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloud_storage_path: cdktf.listMapper(dataLossPreventionStoredInfoTypeDictionaryCloudStoragePathToTerraform)(struct!.cloudStoragePath),
    word_list: cdktf.listMapper(dataLossPreventionStoredInfoTypeDictionaryWordListToTerraform)(struct!.wordList),
  }
}

export interface DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField {
  /** Name describing the field. */
  readonly name: string;
}

function dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldToTerraform(struct?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable {
  /** The dataset ID of the table. */
  readonly datasetId: string;
  /** The Google Cloud Platform project ID of the project containing the table. */
  readonly projectId: string;
  /** The name of the table. */
  readonly tableId: string;
}

function dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableToTerraform(struct?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export interface DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField {
  /** field block */
  readonly field: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField[];
  /** table block */
  readonly table: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable[];
}

function dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldToTerraform(struct?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field: cdktf.listMapper(dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldToTerraform)(struct!.field),
    table: cdktf.listMapper(dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableToTerraform)(struct!.table),
  }
}

export interface DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet {
  /** The url, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed. */
  readonly url: string;
}

function dataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetToTerraform(struct?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath {
  /** A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt' */
  readonly path: string;
}

function dataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathToTerraform(struct?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DataLossPreventionStoredInfoTypeLargeCustomDictionary {
  /** big_query_field block */
  readonly bigQueryField?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField[];
  /** cloud_storage_file_set block */
  readonly cloudStorageFileSet?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet[];
  /** output_path block */
  readonly outputPath: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath[];
}

function dataLossPreventionStoredInfoTypeLargeCustomDictionaryToTerraform(struct?: DataLossPreventionStoredInfoTypeLargeCustomDictionary): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    big_query_field: cdktf.listMapper(dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldToTerraform)(struct!.bigQueryField),
    cloud_storage_file_set: cdktf.listMapper(dataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetToTerraform)(struct!.cloudStorageFileSet),
    output_path: cdktf.listMapper(dataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathToTerraform)(struct!.outputPath),
  }
}

export interface DataLossPreventionStoredInfoTypeRegex {
  /** The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included. */
  readonly groupIndexes?: number[];
  /** Pattern defining the regular expression.
Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. */
  readonly pattern: string;
}

function dataLossPreventionStoredInfoTypeRegexToTerraform(struct?: DataLossPreventionStoredInfoTypeRegex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}

export interface DataLossPreventionStoredInfoTypeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dataLossPreventionStoredInfoTypeTimeoutsToTerraform(struct?: DataLossPreventionStoredInfoTypeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DataLossPreventionStoredInfoType extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataLossPreventionStoredInfoTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_stored_info_type',
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
    this._dictionary = config.dictionary;
    this._largeCustomDictionary = config.largeCustomDictionary;
    this._regex = config.regex;
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

  // dictionary - computed: false, optional: true, required: false
  private _dictionary?: DataLossPreventionStoredInfoTypeDictionary[];
  public get dictionary() {
    return this.interpolationForAttribute('dictionary') as any;
  }
  public set dictionary(value: DataLossPreventionStoredInfoTypeDictionary[] ) {
    this._dictionary = value;
  }
  public resetDictionary() {
    this._dictionary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary
  }

  // large_custom_dictionary - computed: false, optional: true, required: false
  private _largeCustomDictionary?: DataLossPreventionStoredInfoTypeLargeCustomDictionary[];
  public get largeCustomDictionary() {
    return this.interpolationForAttribute('large_custom_dictionary') as any;
  }
  public set largeCustomDictionary(value: DataLossPreventionStoredInfoTypeLargeCustomDictionary[] ) {
    this._largeCustomDictionary = value;
  }
  public resetLargeCustomDictionary() {
    this._largeCustomDictionary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCustomDictionaryInput() {
    return this._largeCustomDictionary
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: DataLossPreventionStoredInfoTypeRegex[];
  public get regex() {
    return this.interpolationForAttribute('regex') as any;
  }
  public set regex(value: DataLossPreventionStoredInfoTypeRegex[] ) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLossPreventionStoredInfoTypeTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataLossPreventionStoredInfoTypeTimeouts ) {
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
      dictionary: cdktf.listMapper(dataLossPreventionStoredInfoTypeDictionaryToTerraform)(this._dictionary),
      large_custom_dictionary: cdktf.listMapper(dataLossPreventionStoredInfoTypeLargeCustomDictionaryToTerraform)(this._largeCustomDictionary),
      regex: cdktf.listMapper(dataLossPreventionStoredInfoTypeRegexToTerraform)(this._regex),
      timeouts: dataLossPreventionStoredInfoTypeTimeoutsToTerraform(this._timeouts),
    };
  }
}
