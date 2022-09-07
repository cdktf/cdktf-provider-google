// https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLossPreventionStoredInfoTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the info type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#description DataLossPreventionStoredInfoType#description}
  */
  readonly description?: string;
  /**
  * User set display name of the info type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#display_name DataLossPreventionStoredInfoType#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#id DataLossPreventionStoredInfoType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The parent of the info type in any of the following formats:

* 'projects/{{project}}'
* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}'
* 'organizations/{{organization_id}}/locations/{{location}}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#parent DataLossPreventionStoredInfoType#parent}
  */
  readonly parent: string;
  /**
  * dictionary block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#dictionary DataLossPreventionStoredInfoType#dictionary}
  */
  readonly dictionary?: DataLossPreventionStoredInfoTypeDictionary;
  /**
  * large_custom_dictionary block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#large_custom_dictionary DataLossPreventionStoredInfoType#large_custom_dictionary}
  */
  readonly largeCustomDictionary?: DataLossPreventionStoredInfoTypeLargeCustomDictionary;
  /**
  * regex block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#regex DataLossPreventionStoredInfoType#regex}
  */
  readonly regex?: DataLossPreventionStoredInfoTypeRegex;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#timeouts DataLossPreventionStoredInfoType#timeouts}
  */
  readonly timeouts?: DataLossPreventionStoredInfoTypeTimeouts;
}
export interface DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#path DataLossPreventionStoredInfoType#path}
  */
  readonly path: string;
}

export function dataLossPreventionStoredInfoTypeDictionaryCloudStoragePathToTerraform(struct?: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference | DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath | undefined) {
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
export interface DataLossPreventionStoredInfoTypeDictionaryWordList {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#words DataLossPreventionStoredInfoType#words}
  */
  readonly words: string[];
}

export function dataLossPreventionStoredInfoTypeDictionaryWordListToTerraform(struct?: DataLossPreventionStoredInfoTypeDictionaryWordListOutputReference | DataLossPreventionStoredInfoTypeDictionaryWordList): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}

export class DataLossPreventionStoredInfoTypeDictionaryWordListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionStoredInfoTypeDictionaryWordList | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionStoredInfoTypeDictionaryWordList | undefined) {
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
export interface DataLossPreventionStoredInfoTypeDictionary {
  /**
  * cloud_storage_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#cloud_storage_path DataLossPreventionStoredInfoType#cloud_storage_path}
  */
  readonly cloudStoragePath?: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath;
  /**
  * word_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#word_list DataLossPreventionStoredInfoType#word_list}
  */
  readonly wordList?: DataLossPreventionStoredInfoTypeDictionaryWordList;
}

export function dataLossPreventionStoredInfoTypeDictionaryToTerraform(struct?: DataLossPreventionStoredInfoTypeDictionaryOutputReference | DataLossPreventionStoredInfoTypeDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_path: dataLossPreventionStoredInfoTypeDictionaryCloudStoragePathToTerraform(struct!.cloudStoragePath),
    word_list: dataLossPreventionStoredInfoTypeDictionaryWordListToTerraform(struct!.wordList),
  }
}

export class DataLossPreventionStoredInfoTypeDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionStoredInfoTypeDictionary | undefined {
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

  public set internalValue(value: DataLossPreventionStoredInfoTypeDictionary | undefined) {
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
  private _cloudStoragePath = new DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference(this, "cloud_storage_path");
  public get cloudStoragePath() {
    return this._cloudStoragePath;
  }
  public putCloudStoragePath(value: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath) {
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
  private _wordList = new DataLossPreventionStoredInfoTypeDictionaryWordListOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: DataLossPreventionStoredInfoTypeDictionaryWordList) {
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
export interface DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField {
  /**
  * Name describing the field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#name DataLossPreventionStoredInfoType#name}
  */
  readonly name: string;
}

export function dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldToTerraform(struct?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference | DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField | undefined) {
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
export interface DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable {
  /**
  * The dataset ID of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#dataset_id DataLossPreventionStoredInfoType#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The Google Cloud Platform project ID of the project containing the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#project_id DataLossPreventionStoredInfoType#project_id}
  */
  readonly projectId: string;
  /**
  * The name of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#table_id DataLossPreventionStoredInfoType#table_id}
  */
  readonly tableId: string;
}

export function dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableToTerraform(struct?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference | DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export class DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField {
  /**
  * field block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#field DataLossPreventionStoredInfoType#field}
  */
  readonly field: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField;
  /**
  * table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#table DataLossPreventionStoredInfoType#table}
  */
  readonly table: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable;
}

export function dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldToTerraform(struct?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference | DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldToTerraform(struct!.field),
    table: dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableToTerraform(struct!.table),
  }
}

export class DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field.internalValue = undefined;
      this._table.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field.internalValue = value.field;
      this._table.internalValue = value.table;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field = new DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }

  // table - computed: false, optional: false, required: true
  private _table = new DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable) {
    this._table.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}
export interface DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet {
  /**
  * The url, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#url DataLossPreventionStoredInfoType#url}
  */
  readonly url: string;
}

export function dataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetToTerraform(struct?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference | DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#path DataLossPreventionStoredInfoType#path}
  */
  readonly path: string;
}

export function dataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathToTerraform(struct?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference | DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath | undefined) {
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
export interface DataLossPreventionStoredInfoTypeLargeCustomDictionary {
  /**
  * big_query_field block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#big_query_field DataLossPreventionStoredInfoType#big_query_field}
  */
  readonly bigQueryField?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField;
  /**
  * cloud_storage_file_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#cloud_storage_file_set DataLossPreventionStoredInfoType#cloud_storage_file_set}
  */
  readonly cloudStorageFileSet?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet;
  /**
  * output_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#output_path DataLossPreventionStoredInfoType#output_path}
  */
  readonly outputPath: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath;
}

export function dataLossPreventionStoredInfoTypeLargeCustomDictionaryToTerraform(struct?: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference | DataLossPreventionStoredInfoTypeLargeCustomDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    big_query_field: dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldToTerraform(struct!.bigQueryField),
    cloud_storage_file_set: dataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetToTerraform(struct!.cloudStorageFileSet),
    output_path: dataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathToTerraform(struct!.outputPath),
  }
}

export class DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionStoredInfoTypeLargeCustomDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigQueryField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigQueryField = this._bigQueryField?.internalValue;
    }
    if (this._cloudStorageFileSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageFileSet = this._cloudStorageFileSet?.internalValue;
    }
    if (this._outputPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPath = this._outputPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionStoredInfoTypeLargeCustomDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigQueryField.internalValue = undefined;
      this._cloudStorageFileSet.internalValue = undefined;
      this._outputPath.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigQueryField.internalValue = value.bigQueryField;
      this._cloudStorageFileSet.internalValue = value.cloudStorageFileSet;
      this._outputPath.internalValue = value.outputPath;
    }
  }

  // big_query_field - computed: false, optional: true, required: false
  private _bigQueryField = new DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference(this, "big_query_field");
  public get bigQueryField() {
    return this._bigQueryField;
  }
  public putBigQueryField(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField) {
    this._bigQueryField.internalValue = value;
  }
  public resetBigQueryField() {
    this._bigQueryField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryFieldInput() {
    return this._bigQueryField.internalValue;
  }

  // cloud_storage_file_set - computed: false, optional: true, required: false
  private _cloudStorageFileSet = new DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference(this, "cloud_storage_file_set");
  public get cloudStorageFileSet() {
    return this._cloudStorageFileSet;
  }
  public putCloudStorageFileSet(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet) {
    this._cloudStorageFileSet.internalValue = value;
  }
  public resetCloudStorageFileSet() {
    this._cloudStorageFileSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageFileSetInput() {
    return this._cloudStorageFileSet.internalValue;
  }

  // output_path - computed: false, optional: false, required: true
  private _outputPath = new DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference(this, "output_path");
  public get outputPath() {
    return this._outputPath;
  }
  public putOutputPath(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath) {
    this._outputPath.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPathInput() {
    return this._outputPath.internalValue;
  }
}
export interface DataLossPreventionStoredInfoTypeRegex {
  /**
  * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#group_indexes DataLossPreventionStoredInfoType#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression.
Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#pattern DataLossPreventionStoredInfoType#pattern}
  */
  readonly pattern: string;
}

export function dataLossPreventionStoredInfoTypeRegexToTerraform(struct?: DataLossPreventionStoredInfoTypeRegexOutputReference | DataLossPreventionStoredInfoTypeRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}

export class DataLossPreventionStoredInfoTypeRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionStoredInfoTypeRegex | undefined {
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

  public set internalValue(value: DataLossPreventionStoredInfoTypeRegex | undefined) {
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
export interface DataLossPreventionStoredInfoTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#create DataLossPreventionStoredInfoType#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#delete DataLossPreventionStoredInfoType#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type#update DataLossPreventionStoredInfoType#update}
  */
  readonly update?: string;
}

export function dataLossPreventionStoredInfoTypeTimeoutsToTerraform(struct?: DataLossPreventionStoredInfoTypeTimeoutsOutputReference | DataLossPreventionStoredInfoTypeTimeouts | cdktf.IResolvable): any {
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

export class DataLossPreventionStoredInfoTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionStoredInfoTypeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLossPreventionStoredInfoTypeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type google_data_loss_prevention_stored_info_type}
*/
export class DataLossPreventionStoredInfoType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_loss_prevention_stored_info_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_stored_info_type google_data_loss_prevention_stored_info_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLossPreventionStoredInfoTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataLossPreventionStoredInfoTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_stored_info_type',
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
    this._dictionary.internalValue = config.dictionary;
    this._largeCustomDictionary.internalValue = config.largeCustomDictionary;
    this._regex.internalValue = config.regex;
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

  // dictionary - computed: false, optional: true, required: false
  private _dictionary = new DataLossPreventionStoredInfoTypeDictionaryOutputReference(this, "dictionary");
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: DataLossPreventionStoredInfoTypeDictionary) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // large_custom_dictionary - computed: false, optional: true, required: false
  private _largeCustomDictionary = new DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference(this, "large_custom_dictionary");
  public get largeCustomDictionary() {
    return this._largeCustomDictionary;
  }
  public putLargeCustomDictionary(value: DataLossPreventionStoredInfoTypeLargeCustomDictionary) {
    this._largeCustomDictionary.internalValue = value;
  }
  public resetLargeCustomDictionary() {
    this._largeCustomDictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCustomDictionaryInput() {
    return this._largeCustomDictionary.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex = new DataLossPreventionStoredInfoTypeRegexOutputReference(this, "regex");
  public get regex() {
    return this._regex;
  }
  public putRegex(value: DataLossPreventionStoredInfoTypeRegex) {
    this._regex.internalValue = value;
  }
  public resetRegex() {
    this._regex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataLossPreventionStoredInfoTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataLossPreventionStoredInfoTypeTimeouts) {
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
      dictionary: dataLossPreventionStoredInfoTypeDictionaryToTerraform(this._dictionary.internalValue),
      large_custom_dictionary: dataLossPreventionStoredInfoTypeLargeCustomDictionaryToTerraform(this._largeCustomDictionary.internalValue),
      regex: dataLossPreventionStoredInfoTypeRegexToTerraform(this._regex.internalValue),
      timeouts: dataLossPreventionStoredInfoTypeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
