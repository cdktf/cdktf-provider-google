// https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLossPreventionInspectTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the inspect template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#description DataLossPreventionInspectTemplate#description}
  */
  readonly description?: string;
  /**
  * User set display name of the inspect template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#display_name DataLossPreventionInspectTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#id DataLossPreventionInspectTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The parent of the inspect template in any of the following formats:

* 'projects/{{project}}'
* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}'
* 'organizations/{{organization_id}}/locations/{{location}}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#parent DataLossPreventionInspectTemplate#parent}
  */
  readonly parent: string;
  /**
  * inspect_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#inspect_config DataLossPreventionInspectTemplate#inspect_config}
  */
  readonly inspectConfig?: DataLossPreventionInspectTemplateInspectConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#timeouts DataLossPreventionInspectTemplate#timeouts}
  */
  readonly timeouts?: DataLossPreventionInspectTemplateTimeouts;
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#path DataLossPreventionInspectTemplate#path}
  */
  readonly path: string;
}

export function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference | DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
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
    return this._path;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#words DataLossPreventionInspectTemplate#words}
  */
  readonly words: string[];
}

export function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference | DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._words = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._words = value.words;
    }
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
    return this._words;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary {
  /**
  * cloud_storage_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#cloud_storage_path DataLossPreventionInspectTemplate#cloud_storage_path}
  */
  readonly cloudStoragePath?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath;
  /**
  * word_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#word_list DataLossPreventionInspectTemplate#word_list}
  */
  readonly wordList?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList;
}

export function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference | DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_path: dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathToTerraform(struct!.cloudStoragePath),
    word_list: dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListToTerraform(struct!.wordList),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStoragePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStoragePath = this._cloudStoragePath?.internalValue;
    }
    if (this._wordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordList = this._wordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStoragePath.internalValue = undefined;
      this._wordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStoragePath.internalValue = value.cloudStoragePath;
      this._wordList.internalValue = value.wordList;
    }
  }

  // cloud_storage_path - computed: false, optional: true, required: false
  private _cloudStoragePath = new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference(this, "cloud_storage_path");
  public get cloudStoragePath() {
    return this._cloudStoragePath;
  }
  public putCloudStoragePath(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath) {
    this._cloudStoragePath.internalValue = value;
  }
  public resetCloudStoragePath() {
    this._cloudStoragePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStoragePathInput() {
    return this._cloudStoragePath.internalValue;
  }

  // word_list - computed: false, optional: true, required: false
  private _wordList = new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList) {
    this._wordList.internalValue = value;
  }
  public resetWordList() {
    this._wordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList.internalValue;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names
listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}
  */
  readonly name: string;
}

export function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference | DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
    return this._name;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex {
  /**
  * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#group_indexes DataLossPreventionInspectTemplate#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression.
Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#pattern DataLossPreventionInspectTemplate#pattern}
  */
  readonly pattern: string;
}

export function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference | DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
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
    return this._pattern;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType {
  /**
  * Resource name of the requested StoredInfoType, for example 'organizations/433245324/storedInfoTypes/432452342'
or 'projects/project-id/storedInfoTypes/432452342'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}
  */
  readonly name: string;
}

export function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference | DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
    return this._name;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes {
  /**
  * If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. Possible values: ["EXCLUSION_TYPE_EXCLUDE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#exclusion_type DataLossPreventionInspectTemplate#exclusion_type}
  */
  readonly exclusionType?: string;
  /**
  * Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria
specified by the rule. Default value: "VERY_LIKELY" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#likelihood DataLossPreventionInspectTemplate#likelihood}
  */
  readonly likelihood?: string;
  /**
  * dictionary block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#dictionary DataLossPreventionInspectTemplate#dictionary}
  */
  readonly dictionary?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary;
  /**
  * info_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_type DataLossPreventionInspectTemplate#info_type}
  */
  readonly infoType: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType;
  /**
  * regex block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#regex DataLossPreventionInspectTemplate#regex}
  */
  readonly regex?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex;
  /**
  * stored_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#stored_type DataLossPreventionInspectTemplate#stored_type}
  */
  readonly storedType?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType;
}

export function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionType = this._exclusionType;
    }
    if (this._likelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.likelihood = this._likelihood;
    }
    if (this._dictionary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary?.internalValue;
    }
    if (this._infoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoType = this._infoType?.internalValue;
    }
    if (this._regex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex?.internalValue;
    }
    if (this._storedType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storedType = this._storedType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionType = undefined;
      this._likelihood = undefined;
      this._dictionary.internalValue = undefined;
      this._infoType.internalValue = undefined;
      this._regex.internalValue = undefined;
      this._storedType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionType = value.exclusionType;
      this._likelihood = value.likelihood;
      this._dictionary.internalValue = value.dictionary;
      this._infoType.internalValue = value.infoType;
      this._regex.internalValue = value.regex;
      this._storedType.internalValue = value.storedType;
    }
  }

  // exclusion_type - computed: false, optional: true, required: false
  private _exclusionType?: string; 
  public get exclusionType() {
    return this.getStringAttribute('exclusion_type');
  }
  public set exclusionType(value: string) {
    this._exclusionType = value;
  }
  public resetExclusionType() {
    this._exclusionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionTypeInput() {
    return this._exclusionType;
  }

  // likelihood - computed: false, optional: true, required: false
  private _likelihood?: string; 
  public get likelihood() {
    return this.getStringAttribute('likelihood');
  }
  public set likelihood(value: string) {
    this._likelihood = value;
  }
  public resetLikelihood() {
    this._likelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likelihoodInput() {
    return this._likelihood;
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary = new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference(this, "dictionary");
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // info_type - computed: false, optional: false, required: true
  private _infoType = new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference(this, "info_type");
  public get infoType() {
    return this._infoType;
  }
  public putInfoType(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType) {
    this._infoType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeInput() {
    return this._infoType.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex = new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference(this, "regex");
  public get regex() {
    return this._regex;
  }
  public putRegex(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex) {
    this._regex.internalValue = value;
  }
  public resetRegex() {
    this._regex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex.internalValue;
  }

  // stored_type - computed: false, optional: true, required: false
  private _storedType = new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference(this, "stored_type");
  public get storedType() {
    return this._storedType;
  }
  public putStoredType(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType) {
    this._storedType.internalValue = value;
  }
  public resetStoredType() {
    this._storedType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedTypeInput() {
    return this._storedType.internalValue;
  }
}

export class DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference {
    return new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}
  */
  readonly name: string;
}

export function dataLossPreventionInspectTemplateInspectConfigInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
    return this._name;
  }
}

export class DataLossPreventionInspectTemplateInspectConfigInfoTypesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionInspectTemplateInspectConfigInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference {
    return new DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}
  */
  readonly name: string;
}

export function dataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference | DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
    return this._name;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType {
  /**
  * Max findings limit for the given infoType.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#max_findings DataLossPreventionInspectTemplate#max_findings}
  */
  readonly maxFindings: number;
  /**
  * info_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_type DataLossPreventionInspectTemplate#info_type}
  */
  readonly infoType: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;
}

export function dataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_findings: cdktf.numberToTerraform(struct!.maxFindings),
    info_type: dataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToTerraform(struct!.infoType),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFindings !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindings = this._maxFindings;
    }
    if (this._infoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoType = this._infoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxFindings = undefined;
      this._infoType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxFindings = value.maxFindings;
      this._infoType.internalValue = value.infoType;
    }
  }

  // max_findings - computed: false, optional: false, required: true
  private _maxFindings?: number; 
  public get maxFindings() {
    return this.getNumberAttribute('max_findings');
  }
  public set maxFindings(value: number) {
    this._maxFindings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsInput() {
    return this._maxFindings;
  }

  // info_type - computed: false, optional: false, required: true
  private _infoType = new DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference(this, "info_type");
  public get infoType() {
    return this._infoType;
  }
  public putInfoType(value: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType) {
    this._infoType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeInput() {
    return this._infoType.internalValue;
  }
}

export class DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference {
    return new DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigLimits {
  /**
  * Max number of findings that will be returned for each item scanned. The maximum returned is 2000.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#max_findings_per_item DataLossPreventionInspectTemplate#max_findings_per_item}
  */
  readonly maxFindingsPerItem: number;
  /**
  * Max number of findings that will be returned per request/job. The maximum returned is 2000.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#max_findings_per_request DataLossPreventionInspectTemplate#max_findings_per_request}
  */
  readonly maxFindingsPerRequest: number;
  /**
  * max_findings_per_info_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#max_findings_per_info_type DataLossPreventionInspectTemplate#max_findings_per_info_type}
  */
  readonly maxFindingsPerInfoType?: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType[] | cdktf.IResolvable;
}

export function dataLossPreventionInspectTemplateInspectConfigLimitsToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference | DataLossPreventionInspectTemplateInspectConfigLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_findings_per_item: cdktf.numberToTerraform(struct!.maxFindingsPerItem),
    max_findings_per_request: cdktf.numberToTerraform(struct!.maxFindingsPerRequest),
    max_findings_per_info_type: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeToTerraform, true)(struct!.maxFindingsPerInfoType),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFindingsPerItem !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindingsPerItem = this._maxFindingsPerItem;
    }
    if (this._maxFindingsPerRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindingsPerRequest = this._maxFindingsPerRequest;
    }
    if (this._maxFindingsPerInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindingsPerInfoType = this._maxFindingsPerInfoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxFindingsPerItem = undefined;
      this._maxFindingsPerRequest = undefined;
      this._maxFindingsPerInfoType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxFindingsPerItem = value.maxFindingsPerItem;
      this._maxFindingsPerRequest = value.maxFindingsPerRequest;
      this._maxFindingsPerInfoType.internalValue = value.maxFindingsPerInfoType;
    }
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
    return this._maxFindingsPerItem;
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
    return this._maxFindingsPerRequest;
  }

  // max_findings_per_info_type - computed: false, optional: true, required: false
  private _maxFindingsPerInfoType = new DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList(this, "max_findings_per_info_type", false);
  public get maxFindingsPerInfoType() {
    return this._maxFindingsPerInfoType;
  }
  public putMaxFindingsPerInfoType(value: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType[] | cdktf.IResolvable) {
    this._maxFindingsPerInfoType.internalValue = value;
  }
  public resetMaxFindingsPerInfoType() {
    this._maxFindingsPerInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerInfoTypeInput() {
    return this._maxFindingsPerInfoType.internalValue;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}
  */
  readonly name: string;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
    return this._name;
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference {
    return new DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#path DataLossPreventionInspectTemplate#path}
  */
  readonly path: string;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
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
    return this._path;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#words DataLossPreventionInspectTemplate#words}
  */
  readonly words: string[];
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._words = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._words = value.words;
    }
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
    return this._words;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary {
  /**
  * cloud_storage_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#cloud_storage_path DataLossPreventionInspectTemplate#cloud_storage_path}
  */
  readonly cloudStoragePath?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath;
  /**
  * word_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#word_list DataLossPreventionInspectTemplate#word_list}
  */
  readonly wordList?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_path: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToTerraform(struct!.cloudStoragePath),
    word_list: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListToTerraform(struct!.wordList),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStoragePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStoragePath = this._cloudStoragePath?.internalValue;
    }
    if (this._wordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordList = this._wordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStoragePath.internalValue = undefined;
      this._wordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStoragePath.internalValue = value.cloudStoragePath;
      this._wordList.internalValue = value.wordList;
    }
  }

  // cloud_storage_path - computed: false, optional: true, required: false
  private _cloudStoragePath = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference(this, "cloud_storage_path");
  public get cloudStoragePath() {
    return this._cloudStoragePath;
  }
  public putCloudStoragePath(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath) {
    this._cloudStoragePath.internalValue = value;
  }
  public resetCloudStoragePath() {
    this._cloudStoragePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStoragePathInput() {
    return this._cloudStoragePath.internalValue;
  }

  // word_list - computed: false, optional: true, required: false
  private _wordList = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList) {
    this._wordList.internalValue = value;
  }
  public resetWordList() {
    this._wordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList.internalValue;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}
  */
  readonly name: string;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
    return this._name;
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference {
    return new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes {
  /**
  * info_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_types DataLossPreventionInspectTemplate#info_types}
  */
  readonly infoTypes: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[] | cdktf.IResolvable;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToTerraform, true)(struct!.infoTypes),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infoTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infoTypes.internalValue = value.infoTypes;
    }
  }

  // info_types - computed: false, optional: false, required: true
  private _infoTypes = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex {
  /**
  * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#group_indexes DataLossPreventionInspectTemplate#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression.
Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#pattern DataLossPreventionInspectTemplate#pattern}
  */
  readonly pattern: string;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
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
    return this._pattern;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule {
  /**
  * How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType Possible values: ["MATCHING_TYPE_FULL_MATCH", "MATCHING_TYPE_PARTIAL_MATCH", "MATCHING_TYPE_INVERSE_MATCH"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#matching_type DataLossPreventionInspectTemplate#matching_type}
  */
  readonly matchingType: string;
  /**
  * dictionary block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#dictionary DataLossPreventionInspectTemplate#dictionary}
  */
  readonly dictionary?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary;
  /**
  * exclude_info_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#exclude_info_types DataLossPreventionInspectTemplate#exclude_info_types}
  */
  readonly excludeInfoTypes?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes;
  /**
  * regex block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#regex DataLossPreventionInspectTemplate#regex}
  */
  readonly regex?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingType = this._matchingType;
    }
    if (this._dictionary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary?.internalValue;
    }
    if (this._excludeInfoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInfoTypes = this._excludeInfoTypes?.internalValue;
    }
    if (this._regex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchingType = undefined;
      this._dictionary.internalValue = undefined;
      this._excludeInfoTypes.internalValue = undefined;
      this._regex.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchingType = value.matchingType;
      this._dictionary.internalValue = value.dictionary;
      this._excludeInfoTypes.internalValue = value.excludeInfoTypes;
      this._regex.internalValue = value.regex;
    }
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
    return this._matchingType;
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference(this, "dictionary");
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // exclude_info_types - computed: false, optional: true, required: false
  private _excludeInfoTypes = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference(this, "exclude_info_types");
  public get excludeInfoTypes() {
    return this._excludeInfoTypes;
  }
  public putExcludeInfoTypes(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes) {
    this._excludeInfoTypes.internalValue = value;
  }
  public resetExcludeInfoTypes() {
    this._excludeInfoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInfoTypesInput() {
    return this._excludeInfoTypes.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference(this, "regex");
  public get regex() {
    return this._regex;
  }
  public putRegex(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex) {
    this._regex.internalValue = value;
  }
  public resetRegex() {
    this._regex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex.internalValue;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex {
  /**
  * The index of the submatch to extract as findings. When not specified,
the entire match is returned. No more than 3 may be included.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#group_indexes DataLossPreventionInspectTemplate#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression. Its syntax
(https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#pattern DataLossPreventionInspectTemplate#pattern}
  */
  readonly pattern: string;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
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
    return this._pattern;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment {
  /**
  * Set the likelihood of a finding to a fixed value. Either this or relative_likelihood can be set. Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#fixed_likelihood DataLossPreventionInspectTemplate#fixed_likelihood}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#relative_likelihood DataLossPreventionInspectTemplate#relative_likelihood}
  */
  readonly relativeLikelihood?: number;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_likelihood: cdktf.stringToTerraform(struct!.fixedLikelihood),
    relative_likelihood: cdktf.numberToTerraform(struct!.relativeLikelihood),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLikelihood = this._fixedLikelihood;
    }
    if (this._relativeLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeLikelihood = this._relativeLikelihood;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedLikelihood = undefined;
      this._relativeLikelihood = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedLikelihood = value.fixedLikelihood;
      this._relativeLikelihood = value.relativeLikelihood;
    }
  }

  // fixed_likelihood - computed: false, optional: true, required: false
  private _fixedLikelihood?: string; 
  public get fixedLikelihood() {
    return this.getStringAttribute('fixed_likelihood');
  }
  public set fixedLikelihood(value: string) {
    this._fixedLikelihood = value;
  }
  public resetFixedLikelihood() {
    this._fixedLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLikelihoodInput() {
    return this._fixedLikelihood;
  }

  // relative_likelihood - computed: false, optional: true, required: false
  private _relativeLikelihood?: number; 
  public get relativeLikelihood() {
    return this.getNumberAttribute('relative_likelihood');
  }
  public set relativeLikelihood(value: number) {
    this._relativeLikelihood = value;
  }
  public resetRelativeLikelihood() {
    this._relativeLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeLikelihoodInput() {
    return this._relativeLikelihood;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity {
  /**
  * Number of characters after the finding to consider. Either this or window_before must be specified
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#window_after DataLossPreventionInspectTemplate#window_after}
  */
  readonly windowAfter?: number;
  /**
  * Number of characters before the finding to consider. Either this or window_after must be specified
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#window_before DataLossPreventionInspectTemplate#window_before}
  */
  readonly windowBefore?: number;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_after: cdktf.numberToTerraform(struct!.windowAfter),
    window_before: cdktf.numberToTerraform(struct!.windowBefore),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowAfter = this._windowAfter;
    }
    if (this._windowBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowBefore = this._windowBefore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._windowAfter = undefined;
      this._windowBefore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._windowAfter = value.windowAfter;
      this._windowBefore = value.windowBefore;
    }
  }

  // window_after - computed: false, optional: true, required: false
  private _windowAfter?: number; 
  public get windowAfter() {
    return this.getNumberAttribute('window_after');
  }
  public set windowAfter(value: number) {
    this._windowAfter = value;
  }
  public resetWindowAfter() {
    this._windowAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowAfterInput() {
    return this._windowAfter;
  }

  // window_before - computed: false, optional: true, required: false
  private _windowBefore?: number; 
  public get windowBefore() {
    return this.getNumberAttribute('window_before');
  }
  public set windowBefore(value: number) {
    this._windowBefore = value;
  }
  public resetWindowBefore() {
    this._windowBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowBeforeInput() {
    return this._windowBefore;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule {
  /**
  * hotword_regex block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#hotword_regex DataLossPreventionInspectTemplate#hotword_regex}
  */
  readonly hotwordRegex: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex;
  /**
  * likelihood_adjustment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#likelihood_adjustment DataLossPreventionInspectTemplate#likelihood_adjustment}
  */
  readonly likelihoodAdjustment: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment;
  /**
  * proximity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#proximity DataLossPreventionInspectTemplate#proximity}
  */
  readonly proximity: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference | DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hotwordRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotwordRegex = this._hotwordRegex?.internalValue;
    }
    if (this._likelihoodAdjustment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.likelihoodAdjustment = this._likelihoodAdjustment?.internalValue;
    }
    if (this._proximity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximity = this._proximity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hotwordRegex.internalValue = undefined;
      this._likelihoodAdjustment.internalValue = undefined;
      this._proximity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hotwordRegex.internalValue = value.hotwordRegex;
      this._likelihoodAdjustment.internalValue = value.likelihoodAdjustment;
      this._proximity.internalValue = value.proximity;
    }
  }

  // hotword_regex - computed: false, optional: false, required: true
  private _hotwordRegex = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference(this, "hotword_regex");
  public get hotwordRegex() {
    return this._hotwordRegex;
  }
  public putHotwordRegex(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex) {
    this._hotwordRegex.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hotwordRegexInput() {
    return this._hotwordRegex.internalValue;
  }

  // likelihood_adjustment - computed: false, optional: false, required: true
  private _likelihoodAdjustment = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference(this, "likelihood_adjustment");
  public get likelihoodAdjustment() {
    return this._likelihoodAdjustment;
  }
  public putLikelihoodAdjustment(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment) {
    this._likelihoodAdjustment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get likelihoodAdjustmentInput() {
    return this._likelihoodAdjustment.internalValue;
  }

  // proximity - computed: false, optional: false, required: true
  private _proximity = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference(this, "proximity");
  public get proximity() {
    return this._proximity;
  }
  public putProximity(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity) {
    this._proximity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityInput() {
    return this._proximity.internalValue;
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRules {
  /**
  * exclusion_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#exclusion_rule DataLossPreventionInspectTemplate#exclusion_rule}
  */
  readonly exclusionRule?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule;
  /**
  * hotword_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#hotword_rule DataLossPreventionInspectTemplate#hotword_rule}
  */
  readonly hotwordRule?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_rule: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleToTerraform(struct!.exclusionRule),
    hotword_rule: dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleToTerraform(struct!.hotwordRule),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionRule = this._exclusionRule?.internalValue;
    }
    if (this._hotwordRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotwordRule = this._hotwordRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionRule.internalValue = undefined;
      this._hotwordRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionRule.internalValue = value.exclusionRule;
      this._hotwordRule.internalValue = value.hotwordRule;
    }
  }

  // exclusion_rule - computed: false, optional: true, required: false
  private _exclusionRule = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference(this, "exclusion_rule");
  public get exclusionRule() {
    return this._exclusionRule;
  }
  public putExclusionRule(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule) {
    this._exclusionRule.internalValue = value;
  }
  public resetExclusionRule() {
    this._exclusionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionRuleInput() {
    return this._exclusionRule.internalValue;
  }

  // hotword_rule - computed: false, optional: true, required: false
  private _hotwordRule = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference(this, "hotword_rule");
  public get hotwordRule() {
    return this._hotwordRule;
  }
  public putHotwordRule(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule) {
    this._hotwordRule.internalValue = value;
  }
  public resetHotwordRule() {
    this._hotwordRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotwordRuleInput() {
    return this._hotwordRule.internalValue;
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionInspectTemplateInspectConfigRuleSetRules[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference {
    return new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionInspectTemplateInspectConfigRuleSet {
  /**
  * info_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_types DataLossPreventionInspectTemplate#info_types}
  */
  readonly infoTypes: DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes[] | cdktf.IResolvable;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#rules DataLossPreventionInspectTemplate#rules}
  */
  readonly rules: DataLossPreventionInspectTemplateInspectConfigRuleSetRules[] | cdktf.IResolvable;
}

export function dataLossPreventionInspectTemplateInspectConfigRuleSetToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesToTerraform, true)(struct!.infoTypes),
    rules: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesToTerraform, true)(struct!.rules),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfigRuleSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfigRuleSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._infoTypes.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._infoTypes.internalValue = value.infoTypes;
      this._rules.internalValue = value.rules;
    }
  }

  // info_types - computed: false, optional: false, required: true
  private _infoTypes = new DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataLossPreventionInspectTemplateInspectConfigRuleSetRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class DataLossPreventionInspectTemplateInspectConfigRuleSetList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionInspectTemplateInspectConfigRuleSet[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference {
    return new DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionInspectTemplateInspectConfig {
  /**
  * List of options defining data content to scan. If empty, text, images, and other content will be included. Possible values: ["CONTENT_TEXT", "CONTENT_IMAGE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#content_options DataLossPreventionInspectTemplate#content_options}
  */
  readonly contentOptions?: string[];
  /**
  * When true, excludes type information of the findings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#exclude_info_types DataLossPreventionInspectTemplate#exclude_info_types}
  */
  readonly excludeInfoTypes?: boolean | cdktf.IResolvable;
  /**
  * When true, a contextual quote from the data that triggered a finding is included in the response.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#include_quote DataLossPreventionInspectTemplate#include_quote}
  */
  readonly includeQuote?: boolean | cdktf.IResolvable;
  /**
  * Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info Default value: "POSSIBLE" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#min_likelihood DataLossPreventionInspectTemplate#min_likelihood}
  */
  readonly minLikelihood?: string;
  /**
  * custom_info_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#custom_info_types DataLossPreventionInspectTemplate#custom_info_types}
  */
  readonly customInfoTypes?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes[] | cdktf.IResolvable;
  /**
  * info_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_types DataLossPreventionInspectTemplate#info_types}
  */
  readonly infoTypes?: DataLossPreventionInspectTemplateInspectConfigInfoTypes[] | cdktf.IResolvable;
  /**
  * limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#limits DataLossPreventionInspectTemplate#limits}
  */
  readonly limits?: DataLossPreventionInspectTemplateInspectConfigLimits;
  /**
  * rule_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#rule_set DataLossPreventionInspectTemplate#rule_set}
  */
  readonly ruleSet?: DataLossPreventionInspectTemplateInspectConfigRuleSet[] | cdktf.IResolvable;
}

export function dataLossPreventionInspectTemplateInspectConfigToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigOutputReference | DataLossPreventionInspectTemplateInspectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentOptions),
    exclude_info_types: cdktf.booleanToTerraform(struct!.excludeInfoTypes),
    include_quote: cdktf.booleanToTerraform(struct!.includeQuote),
    min_likelihood: cdktf.stringToTerraform(struct!.minLikelihood),
    custom_info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesToTerraform, true)(struct!.customInfoTypes),
    info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigInfoTypesToTerraform, true)(struct!.infoTypes),
    limits: dataLossPreventionInspectTemplateInspectConfigLimitsToTerraform(struct!.limits),
    rule_set: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetToTerraform, true)(struct!.ruleSet),
  }
}

export class DataLossPreventionInspectTemplateInspectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateInspectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentOptions = this._contentOptions;
    }
    if (this._excludeInfoTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInfoTypes = this._excludeInfoTypes;
    }
    if (this._includeQuote !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQuote = this._includeQuote;
    }
    if (this._minLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLikelihood = this._minLikelihood;
    }
    if (this._customInfoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customInfoTypes = this._customInfoTypes?.internalValue;
    }
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._ruleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSet = this._ruleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionInspectTemplateInspectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentOptions = undefined;
      this._excludeInfoTypes = undefined;
      this._includeQuote = undefined;
      this._minLikelihood = undefined;
      this._customInfoTypes.internalValue = undefined;
      this._infoTypes.internalValue = undefined;
      this._limits.internalValue = undefined;
      this._ruleSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentOptions = value.contentOptions;
      this._excludeInfoTypes = value.excludeInfoTypes;
      this._includeQuote = value.includeQuote;
      this._minLikelihood = value.minLikelihood;
      this._customInfoTypes.internalValue = value.customInfoTypes;
      this._infoTypes.internalValue = value.infoTypes;
      this._limits.internalValue = value.limits;
      this._ruleSet.internalValue = value.ruleSet;
    }
  }

  // content_options - computed: false, optional: true, required: false
  private _contentOptions?: string[]; 
  public get contentOptions() {
    return this.getListAttribute('content_options');
  }
  public set contentOptions(value: string[]) {
    this._contentOptions = value;
  }
  public resetContentOptions() {
    this._contentOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentOptionsInput() {
    return this._contentOptions;
  }

  // exclude_info_types - computed: false, optional: true, required: false
  private _excludeInfoTypes?: boolean | cdktf.IResolvable; 
  public get excludeInfoTypes() {
    return this.getBooleanAttribute('exclude_info_types');
  }
  public set excludeInfoTypes(value: boolean | cdktf.IResolvable) {
    this._excludeInfoTypes = value;
  }
  public resetExcludeInfoTypes() {
    this._excludeInfoTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInfoTypesInput() {
    return this._excludeInfoTypes;
  }

  // include_quote - computed: false, optional: true, required: false
  private _includeQuote?: boolean | cdktf.IResolvable; 
  public get includeQuote() {
    return this.getBooleanAttribute('include_quote');
  }
  public set includeQuote(value: boolean | cdktf.IResolvable) {
    this._includeQuote = value;
  }
  public resetIncludeQuote() {
    this._includeQuote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQuoteInput() {
    return this._includeQuote;
  }

  // min_likelihood - computed: false, optional: true, required: false
  private _minLikelihood?: string; 
  public get minLikelihood() {
    return this.getStringAttribute('min_likelihood');
  }
  public set minLikelihood(value: string) {
    this._minLikelihood = value;
  }
  public resetMinLikelihood() {
    this._minLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLikelihoodInput() {
    return this._minLikelihood;
  }

  // custom_info_types - computed: false, optional: true, required: false
  private _customInfoTypes = new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList(this, "custom_info_types", false);
  public get customInfoTypes() {
    return this._customInfoTypes;
  }
  public putCustomInfoTypes(value: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes[] | cdktf.IResolvable) {
    this._customInfoTypes.internalValue = value;
  }
  public resetCustomInfoTypes() {
    this._customInfoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInfoTypesInput() {
    return this._customInfoTypes.internalValue;
  }

  // info_types - computed: false, optional: true, required: false
  private _infoTypes = new DataLossPreventionInspectTemplateInspectConfigInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: DataLossPreventionInspectTemplateInspectConfigInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  public resetInfoTypes() {
    this._infoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataLossPreventionInspectTemplateInspectConfigLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // rule_set - computed: false, optional: true, required: false
  private _ruleSet = new DataLossPreventionInspectTemplateInspectConfigRuleSetList(this, "rule_set", false);
  public get ruleSet() {
    return this._ruleSet;
  }
  public putRuleSet(value: DataLossPreventionInspectTemplateInspectConfigRuleSet[] | cdktf.IResolvable) {
    this._ruleSet.internalValue = value;
  }
  public resetRuleSet() {
    this._ruleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet.internalValue;
  }
}
export interface DataLossPreventionInspectTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#create DataLossPreventionInspectTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#delete DataLossPreventionInspectTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#update DataLossPreventionInspectTemplate#update}
  */
  readonly update?: string;
}

export function dataLossPreventionInspectTemplateTimeoutsToTerraform(struct?: DataLossPreventionInspectTemplateTimeoutsOutputReference | DataLossPreventionInspectTemplateTimeouts | cdktf.IResolvable): any {
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

export class DataLossPreventionInspectTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionInspectTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLossPreventionInspectTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template google_data_loss_prevention_inspect_template}
*/
export class DataLossPreventionInspectTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_loss_prevention_inspect_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template google_data_loss_prevention_inspect_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLossPreventionInspectTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataLossPreventionInspectTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_inspect_template',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._parent = config.parent;
    this._inspectConfig.internalValue = config.inspectConfig;
    this._timeouts.internalValue = config.timeouts;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
    return this._parent;
  }

  // inspect_config - computed: false, optional: true, required: false
  private _inspectConfig = new DataLossPreventionInspectTemplateInspectConfigOutputReference(this, "inspect_config");
  public get inspectConfig() {
    return this._inspectConfig;
  }
  public putInspectConfig(value: DataLossPreventionInspectTemplateInspectConfig) {
    this._inspectConfig.internalValue = value;
  }
  public resetInspectConfig() {
    this._inspectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectConfigInput() {
    return this._inspectConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataLossPreventionInspectTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataLossPreventionInspectTemplateTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      inspect_config: dataLossPreventionInspectTemplateInspectConfigToTerraform(this._inspectConfig.internalValue),
      timeouts: dataLossPreventionInspectTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
