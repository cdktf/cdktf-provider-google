// https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLossPreventionInspectTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the inspect template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#description DataLossPreventionInspectTemplate#description}
  */
  readonly description?: string;
  /**
  * User set display name of the inspect template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#display_name DataLossPreventionInspectTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * The parent of the inspect template in any of the following formats:

* 'projects/{{project}}'
* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}'
* 'organizations/{{organization_id}}/locations/{{location}}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#parent DataLossPreventionInspectTemplate#parent}
  */
  readonly parent: string;
  /**
  * inspect_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#inspect_config DataLossPreventionInspectTemplate#inspect_config}
  */
  readonly inspectConfig?: DataLossPreventionInspectTemplateInspectConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#timeouts DataLossPreventionInspectTemplate#timeouts}
  */
  readonly timeouts?: DataLossPreventionInspectTemplateTimeouts;
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#path DataLossPreventionInspectTemplate#path}
  */
  readonly path: string;
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference | DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#words DataLossPreventionInspectTemplate#words}
  */
  readonly words: string[];
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference | DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform)(struct!.words),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // words - computed: false, optional: false, required: true
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary {
  /**
  * cloud_storage_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#cloud_storage_path DataLossPreventionInspectTemplate#cloud_storage_path}
  */
  readonly cloudStoragePath?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath;
  /**
  * word_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#word_list DataLossPreventionInspectTemplate#word_list}
  */
  readonly wordList?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList;
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference | DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_path: dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathToTerraform(struct!.cloudStoragePath),
    word_list: dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListToTerraform(struct!.wordList),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cloud_storage_path - computed: false, optional: true, required: false
  private _cloudStoragePath?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath | undefined; 
  private __cloudStoragePathOutput = new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference(this as any, "cloud_storage_path", true);
  public get cloudStoragePath() {
    return this.__cloudStoragePathOutput;
  }
  public putCloudStoragePath(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath | undefined) {
    this._cloudStoragePath = value;
  }
  public resetCloudStoragePath() {
    this._cloudStoragePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStoragePathInput() {
    return this._cloudStoragePath
  }

  // word_list - computed: false, optional: true, required: false
  private _wordList?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList | undefined; 
  private __wordListOutput = new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference(this as any, "word_list", true);
  public get wordList() {
    return this.__wordListOutput;
  }
  public putWordList(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList | undefined) {
    this._wordList = value;
  }
  public resetWordList() {
    this._wordList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names
listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#name DataLossPreventionInspectTemplate#name}
  */
  readonly name: string;
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference | DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex {
  /**
  * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#group_indexes DataLossPreventionInspectTemplate#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression.
Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#pattern DataLossPreventionInspectTemplate#pattern}
  */
  readonly pattern: string;
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference | DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[] | undefined; 
  public get groupIndexes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_indexes') as any;
  }
  public set groupIndexes(value: number[] | undefined) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType {
  /**
  * Resource name of the requested StoredInfoType, for example 'organizations/433245324/storedInfoTypes/432452342'
or 'projects/project-id/storedInfoTypes/432452342'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#name DataLossPreventionInspectTemplate#name}
  */
  readonly name: string;
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference | DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes {
  /**
  * If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. Possible values: ["EXCLUSION_TYPE_EXCLUDE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#exclusion_type DataLossPreventionInspectTemplate#exclusion_type}
  */
  readonly exclusionType?: string;
  /**
  * Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria
specified by the rule. Default value: "VERY_LIKELY" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#likelihood DataLossPreventionInspectTemplate#likelihood}
  */
  readonly likelihood?: string;
  /**
  * dictionary block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#dictionary DataLossPreventionInspectTemplate#dictionary}
  */
  readonly dictionary?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary;
  /**
  * info_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#info_type DataLossPreventionInspectTemplate#info_type}
  */
  readonly infoType: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType;
  /**
  * regex block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#regex DataLossPreventionInspectTemplate#regex}
  */
  readonly regex?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex;
  /**
  * stored_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#stored_type DataLossPreventionInspectTemplate#stored_type}
  */
  readonly storedType?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType;
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_type: cdktf.stringToTerraform(struct!.exclusionType),
    likelihood: cdktf.stringToTerraform(struct!.likelihood),
    dictionary: dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryToTerraform(struct!.dictionary),
    info_type: dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeToTerraform(struct!.infoType),
    regex: dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexToTerraform(struct!.regex),
    stored_type: dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeToTerraform(struct!.storedType),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#name DataLossPreventionInspectTemplate#name}
  */
  readonly name: string;
}

function dataLossPreventionInspectTemplateInspectConfigInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigInfoTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#name DataLossPreventionInspectTemplate#name}
  */
  readonly name: string;
}

function dataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference | DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType {
  /**
  * Max findings limit for the given infoType.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#max_findings DataLossPreventionInspectTemplate#max_findings}
  */
  readonly maxFindings: number;
  /**
  * info_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#info_type DataLossPreventionInspectTemplate#info_type}
  */
  readonly infoType: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;
}

function dataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_findings: cdktf.numberToTerraform(struct!.maxFindings),
    info_type: dataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToTerraform(struct!.infoType),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigLimits {
  /**
  * Max number of findings that will be returned for each item scanned. The maximum returned is 2000.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#max_findings_per_item DataLossPreventionInspectTemplate#max_findings_per_item}
  */
  readonly maxFindingsPerItem: number;
  /**
  * Max number of findings that will be returned per request/job. The maximum returned is 2000.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#max_findings_per_request DataLossPreventionInspectTemplate#max_findings_per_request}
  */
  readonly maxFindingsPerRequest: number;
  /**
  * max_findings_per_info_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#max_findings_per_info_type DataLossPreventionInspectTemplate#max_findings_per_info_type}
  */
  readonly maxFindingsPerInfoType?: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType[];
}

function dataLossPreventionInspectTemplateInspectConfigLimitsToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference | DataLossPreventionInspectTemplateInspectConfigLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_findings_per_item: cdktf.numberToTerraform(struct!.maxFindingsPerItem),
    max_findings_per_request: cdktf.numberToTerraform(struct!.maxFindingsPerRequest),
    max_findings_per_info_type: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeToTerraform)(struct!.maxFindingsPerInfoType),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_findings_per_item - computed: false, optional: false, required: true
  private _maxFindingsPerItem?: number; 
  public get maxFindingsPerItem() {
    return this.getNumberAttribute('max_findings_per_item');
  }
  public set maxFindingsPerItem(value: number) {
    this._maxFindingsPerItem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerItemInput() {
    return this._maxFindingsPerItem
  }

  // max_findings_per_request - computed: false, optional: false, required: true
  private _maxFindingsPerRequest?: number; 
  public get maxFindingsPerRequest() {
    return this.getNumberAttribute('max_findings_per_request');
  }
  public set maxFindingsPerRequest(value: number) {
    this._maxFindingsPerRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerRequestInput() {
    return this._maxFindingsPerRequest
  }

  // max_findings_per_info_type - computed: false, optional: true, required: false
  private _maxFindingsPerInfoType?: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType[] | undefined; 
  public get maxFindingsPerInfoType() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('max_findings_per_info_type') as any;
  }
  public set maxFindingsPerInfoType(value: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType[] | undefined) {
    this._maxFindingsPerInfoType = value;
  }
  public resetMaxFindingsPerInfoType() {
    this._maxFindingsPerInfoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerInfoTypeInput() {
    return this._maxFindingsPerInfoType
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#name DataLossPreventionInspectTemplate#name}
  */
  readonly name: string;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#path DataLossPreventionInspectTemplate#path}
  */
  readonly path: string;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#words DataLossPreventionInspectTemplate#words}
  */
  readonly words: string[];
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform)(struct!.words),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // words - computed: false, optional: false, required: true
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary {
  /**
  * cloud_storage_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#cloud_storage_path DataLossPreventionInspectTemplate#cloud_storage_path}
  */
  readonly cloudStoragePath?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath;
  /**
  * word_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#word_list DataLossPreventionInspectTemplate#word_list}
  */
  readonly wordList?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_path: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToTerraform(struct!.cloudStoragePath),
    word_list: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListToTerraform(struct!.wordList),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cloud_storage_path - computed: false, optional: true, required: false
  private _cloudStoragePath?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath | undefined; 
  private __cloudStoragePathOutput = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference(this as any, "cloud_storage_path", true);
  public get cloudStoragePath() {
    return this.__cloudStoragePathOutput;
  }
  public putCloudStoragePath(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath | undefined) {
    this._cloudStoragePath = value;
  }
  public resetCloudStoragePath() {
    this._cloudStoragePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStoragePathInput() {
    return this._cloudStoragePath
  }

  // word_list - computed: false, optional: true, required: false
  private _wordList?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList | undefined; 
  private __wordListOutput = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference(this as any, "word_list", true);
  public get wordList() {
    return this.__wordListOutput;
  }
  public putWordList(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList | undefined) {
    this._wordList = value;
  }
  public resetWordList() {
    this._wordList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#name DataLossPreventionInspectTemplate#name}
  */
  readonly name: string;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes {
  /**
  * info_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#info_types DataLossPreventionInspectTemplate#info_types}
  */
  readonly infoTypes: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[];
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToTerraform)(struct!.infoTypes),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // info_types - computed: false, optional: false, required: true
  private _infoTypes?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[]; 
  public get infoTypes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('info_types') as any;
  }
  public set infoTypes(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[]) {
    this._infoTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex {
  /**
  * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#group_indexes DataLossPreventionInspectTemplate#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression.
Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#pattern DataLossPreventionInspectTemplate#pattern}
  */
  readonly pattern: string;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[] | undefined; 
  public get groupIndexes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_indexes') as any;
  }
  public set groupIndexes(value: number[] | undefined) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule {
  /**
  * How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType Possible values: ["MATCHING_TYPE_FULL_MATCH", "MATCHING_TYPE_PARTIAL_MATCH", "MATCHING_TYPE_INVERSE_MATCH"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#matching_type DataLossPreventionInspectTemplate#matching_type}
  */
  readonly matchingType: string;
  /**
  * dictionary block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#dictionary DataLossPreventionInspectTemplate#dictionary}
  */
  readonly dictionary?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary;
  /**
  * exclude_info_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#exclude_info_types DataLossPreventionInspectTemplate#exclude_info_types}
  */
  readonly excludeInfoTypes?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes;
  /**
  * regex block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#regex DataLossPreventionInspectTemplate#regex}
  */
  readonly regex?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matching_type: cdktf.stringToTerraform(struct!.matchingType),
    dictionary: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryToTerraform(struct!.dictionary),
    exclude_info_types: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToTerraform(struct!.excludeInfoTypes),
    regex: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexToTerraform(struct!.regex),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // matching_type - computed: false, optional: false, required: true
  private _matchingType?: string; 
  public get matchingType() {
    return this.getStringAttribute('matching_type');
  }
  public set matchingType(value: string) {
    this._matchingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingTypeInput() {
    return this._matchingType
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary | undefined; 
  private __dictionaryOutput = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference(this as any, "dictionary", true);
  public get dictionary() {
    return this.__dictionaryOutput;
  }
  public putDictionary(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary | undefined) {
    this._dictionary = value;
  }
  public resetDictionary() {
    this._dictionary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary
  }

  // exclude_info_types - computed: false, optional: true, required: false
  private _excludeInfoTypes?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes | undefined; 
  private __excludeInfoTypesOutput = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference(this as any, "exclude_info_types", true);
  public get excludeInfoTypes() {
    return this.__excludeInfoTypesOutput;
  }
  public putExcludeInfoTypes(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes | undefined) {
    this._excludeInfoTypes = value;
  }
  public resetExcludeInfoTypes() {
    this._excludeInfoTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInfoTypesInput() {
    return this._excludeInfoTypes
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex | undefined; 
  private __regexOutput = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference(this as any, "regex", true);
  public get regex() {
    return this.__regexOutput;
  }
  public putRegex(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex | undefined) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex {
  /**
  * The index of the submatch to extract as findings. When not specified,
the entire match is returned. No more than 3 may be included.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#group_indexes DataLossPreventionInspectTemplate#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression. Its syntax
(https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#pattern DataLossPreventionInspectTemplate#pattern}
  */
  readonly pattern: string;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[] | undefined; 
  public get groupIndexes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_indexes') as any;
  }
  public set groupIndexes(value: number[] | undefined) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment {
  /**
  * Set the likelihood of a finding to a fixed value. Either this or relative_likelihood can be set. Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#fixed_likelihood DataLossPreventionInspectTemplate#fixed_likelihood}
  */
  readonly fixedLikelihood?: string;
  /**
  * Increase or decrease the likelihood by the specified number of levels. For example,
if a finding would be POSSIBLE without the detection rule and relativeLikelihood is 1,
then it is upgraded to LIKELY, while a value of -1 would downgrade it to UNLIKELY.
Likelihood may never drop below VERY_UNLIKELY or exceed VERY_LIKELY, so applying an
adjustment of 1 followed by an adjustment of -1 when base likelihood is VERY_LIKELY
will result in a final likelihood of LIKELY. Either this or fixed_likelihood can be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#relative_likelihood DataLossPreventionInspectTemplate#relative_likelihood}
  */
  readonly relativeLikelihood?: number;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_likelihood: cdktf.stringToTerraform(struct!.fixedLikelihood),
    relative_likelihood: cdktf.numberToTerraform(struct!.relativeLikelihood),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // fixed_likelihood - computed: false, optional: true, required: false
  private _fixedLikelihood?: string | undefined; 
  public get fixedLikelihood() {
    return this.getStringAttribute('fixed_likelihood');
  }
  public set fixedLikelihood(value: string | undefined) {
    this._fixedLikelihood = value;
  }
  public resetFixedLikelihood() {
    this._fixedLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLikelihoodInput() {
    return this._fixedLikelihood
  }

  // relative_likelihood - computed: false, optional: true, required: false
  private _relativeLikelihood?: number | undefined; 
  public get relativeLikelihood() {
    return this.getNumberAttribute('relative_likelihood');
  }
  public set relativeLikelihood(value: number | undefined) {
    this._relativeLikelihood = value;
  }
  public resetRelativeLikelihood() {
    this._relativeLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeLikelihoodInput() {
    return this._relativeLikelihood
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity {
  /**
  * Number of characters after the finding to consider. Either this or window_before must be specified
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#window_after DataLossPreventionInspectTemplate#window_after}
  */
  readonly windowAfter?: number;
  /**
  * Number of characters before the finding to consider. Either this or window_after must be specified
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#window_before DataLossPreventionInspectTemplate#window_before}
  */
  readonly windowBefore?: number;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_after: cdktf.numberToTerraform(struct!.windowAfter),
    window_before: cdktf.numberToTerraform(struct!.windowBefore),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // window_after - computed: false, optional: true, required: false
  private _windowAfter?: number | undefined; 
  public get windowAfter() {
    return this.getNumberAttribute('window_after');
  }
  public set windowAfter(value: number | undefined) {
    this._windowAfter = value;
  }
  public resetWindowAfter() {
    this._windowAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowAfterInput() {
    return this._windowAfter
  }

  // window_before - computed: false, optional: true, required: false
  private _windowBefore?: number | undefined; 
  public get windowBefore() {
    return this.getNumberAttribute('window_before');
  }
  public set windowBefore(value: number | undefined) {
    this._windowBefore = value;
  }
  public resetWindowBefore() {
    this._windowBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowBeforeInput() {
    return this._windowBefore
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule {
  /**
  * hotword_regex block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#hotword_regex DataLossPreventionInspectTemplate#hotword_regex}
  */
  readonly hotwordRegex: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex;
  /**
  * likelihood_adjustment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#likelihood_adjustment DataLossPreventionInspectTemplate#likelihood_adjustment}
  */
  readonly likelihoodAdjustment: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment;
  /**
  * proximity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#proximity DataLossPreventionInspectTemplate#proximity}
  */
  readonly proximity: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hotword_regex: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexToTerraform(struct!.hotwordRegex),
    likelihood_adjustment: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToTerraform(struct!.likelihoodAdjustment),
    proximity: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityToTerraform(struct!.proximity),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // hotword_regex - computed: false, optional: false, required: true
  private _hotwordRegex?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex; 
  private __hotwordRegexOutput = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference(this as any, "hotword_regex", true);
  public get hotwordRegex() {
    return this.__hotwordRegexOutput;
  }
  public putHotwordRegex(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex) {
    this._hotwordRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hotwordRegexInput() {
    return this._hotwordRegex
  }

  // likelihood_adjustment - computed: false, optional: false, required: true
  private _likelihoodAdjustment?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment; 
  private __likelihoodAdjustmentOutput = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference(this as any, "likelihood_adjustment", true);
  public get likelihoodAdjustment() {
    return this.__likelihoodAdjustmentOutput;
  }
  public putLikelihoodAdjustment(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment) {
    this._likelihoodAdjustment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get likelihoodAdjustmentInput() {
    return this._likelihoodAdjustment
  }

  // proximity - computed: false, optional: false, required: true
  private _proximity?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity; 
  private __proximityOutput = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference(this as any, "proximity", true);
  public get proximity() {
    return this.__proximityOutput;
  }
  public putProximity(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity) {
    this._proximity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityInput() {
    return this._proximity
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRules {
  /**
  * exclusion_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#exclusion_rule DataLossPreventionInspectTemplate#exclusion_rule}
  */
  readonly exclusionRule?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule;
  /**
  * hotword_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#hotword_rule DataLossPreventionInspectTemplate#hotword_rule}
  */
  readonly hotwordRule?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_rule: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleToTerraform(struct!.exclusionRule),
    hotword_rule: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleToTerraform(struct!.hotwordRule),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSet {
  /**
  * info_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#info_types DataLossPreventionInspectTemplate#info_types}
  */
  readonly infoTypes: DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes[];
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#rules DataLossPreventionInspectTemplate#rules}
  */
  readonly rules: DataLossPreventionInspectTemplateInspectConfigRuleSetRules[];
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesToTerraform)(struct!.infoTypes),
    rules: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesToTerraform)(struct!.rules),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfig {
  /**
  * List of options defining data content to scan. If empty, text, images, and other content will be included. Possible values: ["CONTENT_TEXT", "CONTENT_IMAGE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#content_options DataLossPreventionInspectTemplate#content_options}
  */
  readonly contentOptions?: string[];
  /**
  * When true, excludes type information of the findings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#exclude_info_types DataLossPreventionInspectTemplate#exclude_info_types}
  */
  readonly excludeInfoTypes?: boolean | cdktf.IResolvable;
  /**
  * When true, a contextual quote from the data that triggered a finding is included in the response.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#include_quote DataLossPreventionInspectTemplate#include_quote}
  */
  readonly includeQuote?: boolean | cdktf.IResolvable;
  /**
  * Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info Default value: "POSSIBLE" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#min_likelihood DataLossPreventionInspectTemplate#min_likelihood}
  */
  readonly minLikelihood?: string;
  /**
  * custom_info_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#custom_info_types DataLossPreventionInspectTemplate#custom_info_types}
  */
  readonly customInfoTypes?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes[];
  /**
  * info_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#info_types DataLossPreventionInspectTemplate#info_types}
  */
  readonly infoTypes?: DataLossPreventionInspectTemplateInspectConfigInfoTypes[];
  /**
  * limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#limits DataLossPreventionInspectTemplate#limits}
  */
  readonly limits?: DataLossPreventionInspectTemplateInspectConfigLimits;
  /**
  * rule_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#rule_set DataLossPreventionInspectTemplate#rule_set}
  */
  readonly ruleSet?: DataLossPreventionInspectTemplateInspectConfigRuleSet[];
}

function dataLossPreventionInspectTemplateInspectConfigToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigOutputReference | DataLossPreventionInspectTemplateInspectConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contentOptions),
    exclude_info_types: cdktf.booleanToTerraform(struct!.excludeInfoTypes),
    include_quote: cdktf.booleanToTerraform(struct!.includeQuote),
    min_likelihood: cdktf.stringToTerraform(struct!.minLikelihood),
    custom_info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesToTerraform)(struct!.customInfoTypes),
    info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigInfoTypesToTerraform)(struct!.infoTypes),
    limits: dataLossPreventionInspectTemplateInspectConfigLimitsToTerraform(struct!.limits),
    rule_set: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetToTerraform)(struct!.ruleSet),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content_options - computed: false, optional: true, required: false
  private _contentOptions?: string[] | undefined; 
  public get contentOptions() {
    return this.getListAttribute('content_options');
  }
  public set contentOptions(value: string[] | undefined) {
    this._contentOptions = value;
  }
  public resetContentOptions() {
    this._contentOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentOptionsInput() {
    return this._contentOptions
  }

  // exclude_info_types - computed: false, optional: true, required: false
  private _excludeInfoTypes?: boolean | cdktf.IResolvable | undefined; 
  public get excludeInfoTypes() {
    return this.getBooleanAttribute('exclude_info_types') as any;
  }
  public set excludeInfoTypes(value: boolean | cdktf.IResolvable | undefined) {
    this._excludeInfoTypes = value;
  }
  public resetExcludeInfoTypes() {
    this._excludeInfoTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInfoTypesInput() {
    return this._excludeInfoTypes
  }

  // include_quote - computed: false, optional: true, required: false
  private _includeQuote?: boolean | cdktf.IResolvable | undefined; 
  public get includeQuote() {
    return this.getBooleanAttribute('include_quote') as any;
  }
  public set includeQuote(value: boolean | cdktf.IResolvable | undefined) {
    this._includeQuote = value;
  }
  public resetIncludeQuote() {
    this._includeQuote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQuoteInput() {
    return this._includeQuote
  }

  // min_likelihood - computed: false, optional: true, required: false
  private _minLikelihood?: string | undefined; 
  public get minLikelihood() {
    return this.getStringAttribute('min_likelihood');
  }
  public set minLikelihood(value: string | undefined) {
    this._minLikelihood = value;
  }
  public resetMinLikelihood() {
    this._minLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLikelihoodInput() {
    return this._minLikelihood
  }

  // custom_info_types - computed: false, optional: true, required: false
  private _customInfoTypes?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes[] | undefined; 
  public get customInfoTypes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_info_types') as any;
  }
  public set customInfoTypes(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes[] | undefined) {
    this._customInfoTypes = value;
  }
  public resetCustomInfoTypes() {
    this._customInfoTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInfoTypesInput() {
    return this._customInfoTypes
  }

  // info_types - computed: false, optional: true, required: false
  private _infoTypes?: DataLossPreventionInspectTemplateInspectConfigInfoTypes[] | undefined; 
  public get infoTypes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('info_types') as any;
  }
  public set infoTypes(value: DataLossPreventionInspectTemplateInspectConfigInfoTypes[] | undefined) {
    this._infoTypes = value;
  }
  public resetInfoTypes() {
    this._infoTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: DataLossPreventionInspectTemplateInspectConfigLimits | undefined; 
  private __limitsOutput = new DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference(this as any, "limits", true);
  public get limits() {
    return this.__limitsOutput;
  }
  public putLimits(value: DataLossPreventionInspectTemplateInspectConfigLimits | undefined) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits
  }

  // rule_set - computed: false, optional: true, required: false
  private _ruleSet?: DataLossPreventionInspectTemplateInspectConfigRuleSet[] | undefined; 
  public get ruleSet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule_set') as any;
  }
  public set ruleSet(value: DataLossPreventionInspectTemplateInspectConfigRuleSet[] | undefined) {
    this._ruleSet = value;
  }
  public resetRuleSet() {
    this._ruleSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet
  }
}
export interface DataLossPreventionInspectTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#create DataLossPreventionInspectTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#delete DataLossPreventionInspectTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html#update DataLossPreventionInspectTemplate#update}
  */
  readonly update?: string;
}

function dataLossPreventionInspectTemplateTimeoutsToTerraform(struct?: DataLossPreventionInspectTemplateTimeoutsOutputReference | DataLossPreventionInspectTemplateTimeouts): any {
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

export class DataLossPreventionInspectTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html google_data_loss_prevention_inspect_template}
*/
export class DataLossPreventionInspectTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_data_loss_prevention_inspect_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html google_data_loss_prevention_inspect_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLossPreventionInspectTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataLossPreventionInspectTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_inspect_template',
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
    this._inspectConfig = config.inspectConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
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
  private _parent?: string; 
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

  // inspect_config - computed: false, optional: true, required: false
  private _inspectConfig?: DataLossPreventionInspectTemplateInspectConfig | undefined; 
  private __inspectConfigOutput = new DataLossPreventionInspectTemplateInspectConfigOutputReference(this as any, "inspect_config", true);
  public get inspectConfig() {
    return this.__inspectConfigOutput;
  }
  public putInspectConfig(value: DataLossPreventionInspectTemplateInspectConfig | undefined) {
    this._inspectConfig = value;
  }
  public resetInspectConfig() {
    this._inspectConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectConfigInput() {
    return this._inspectConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLossPreventionInspectTemplateTimeouts | undefined; 
  private __timeoutsOutput = new DataLossPreventionInspectTemplateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataLossPreventionInspectTemplateTimeouts | undefined) {
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
      inspect_config: dataLossPreventionInspectTemplateInspectConfigToTerraform(this._inspectConfig),
      timeouts: dataLossPreventionInspectTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
