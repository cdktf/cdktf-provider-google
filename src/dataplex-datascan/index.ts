// https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataplexDatascanConfig extends cdktf.TerraformMetaArguments {
  /**
  * DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#data_scan_id DataplexDatascan#data_scan_id}
  */
  readonly dataScanId: string;
  /**
  * Description of the scan.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#description DataplexDatascan#description}
  */
  readonly description?: string;
  /**
  * User friendly display name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#display_name DataplexDatascan#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#id DataplexDatascan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for the scan. A list of key->value pairs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#labels DataplexDatascan#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the data scan should reside.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#location DataplexDatascan#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#project DataplexDatascan#project}
  */
  readonly project?: string;
  /**
  * data block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#data DataplexDatascan#data}
  */
  readonly data: DataplexDatascanData;
  /**
  * data_profile_spec block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#data_profile_spec DataplexDatascan#data_profile_spec}
  */
  readonly dataProfileSpec?: DataplexDatascanDataProfileSpec;
  /**
  * data_quality_spec block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#data_quality_spec DataplexDatascan#data_quality_spec}
  */
  readonly dataQualitySpec?: DataplexDatascanDataQualitySpec;
  /**
  * execution_spec block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#execution_spec DataplexDatascan#execution_spec}
  */
  readonly executionSpec: DataplexDatascanExecutionSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#timeouts DataplexDatascan#timeouts}
  */
  readonly timeouts?: DataplexDatascanTimeouts;
}
export interface DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile {
}

export function dataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileToTerraform(struct?: DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // average - computed: true, optional: false, required: false
  public get average() {
    return this.getNumberAttribute('average');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getStringAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getStringAttribute('min');
  }

  // quartiles - computed: true, optional: false, required: false
  public get quartiles() {
    return this.getStringAttribute('quartiles');
  }

  // standard_deviation - computed: true, optional: false, required: false
  public get standardDeviation() {
    return this.getNumberAttribute('standard_deviation');
  }
}

export class DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference {
    return new DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile {
}

export function dataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileToTerraform(struct?: DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // average - computed: true, optional: false, required: false
  public get average() {
    return this.getNumberAttribute('average');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getStringAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getStringAttribute('min');
  }

  // quartiles - computed: true, optional: false, required: false
  public get quartiles() {
    return this.getStringAttribute('quartiles');
  }

  // standard_deviation - computed: true, optional: false, required: false
  public get standardDeviation() {
    return this.getNumberAttribute('standard_deviation');
  }
}

export class DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference {
    return new DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile {
}

export function dataplexDatascanDataProfileResultProfileFieldsProfileStringProfileToTerraform(struct?: DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileResultProfileFieldsProfileStringProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // average_length - computed: true, optional: false, required: false
  public get averageLength() {
    return this.getNumberAttribute('average_length');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getStringAttribute('max_length');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getStringAttribute('min_length');
  }
}

export class DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference {
    return new DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues {
}

export function dataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesToTerraform(struct?: DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileResultProfileFieldsProfileTopNValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference {
    return new DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataProfileResultProfileFieldsProfile {
}

export function dataplexDatascanDataProfileResultProfileFieldsProfileToTerraform(struct?: DataplexDatascanDataProfileResultProfileFieldsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataProfileResultProfileFieldsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileResultProfileFieldsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // distinct_ratio - computed: true, optional: false, required: false
  public get distinctRatio() {
    return this.getNumberAttribute('distinct_ratio');
  }

  // double_profile - computed: true, optional: false, required: false
  private _doubleProfile = new DataplexDatascanDataProfileResultProfileFieldsProfileDoubleProfileList(this, "double_profile", false);
  public get doubleProfile() {
    return this._doubleProfile;
  }

  // integer_profile - computed: true, optional: false, required: false
  private _integerProfile = new DataplexDatascanDataProfileResultProfileFieldsProfileIntegerProfileList(this, "integer_profile", false);
  public get integerProfile() {
    return this._integerProfile;
  }

  // null_ratio - computed: true, optional: false, required: false
  public get nullRatio() {
    return this.getNumberAttribute('null_ratio');
  }

  // string_profile - computed: true, optional: false, required: false
  private _stringProfile = new DataplexDatascanDataProfileResultProfileFieldsProfileStringProfileList(this, "string_profile", false);
  public get stringProfile() {
    return this._stringProfile;
  }

  // top_n_values - computed: true, optional: false, required: false
  private _topNValues = new DataplexDatascanDataProfileResultProfileFieldsProfileTopNValuesList(this, "top_n_values", false);
  public get topNValues() {
    return this._topNValues;
  }
}

export class DataplexDatascanDataProfileResultProfileFieldsProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference {
    return new DataplexDatascanDataProfileResultProfileFieldsProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataProfileResultProfileFields {
}

export function dataplexDatascanDataProfileResultProfileFieldsToTerraform(struct?: DataplexDatascanDataProfileResultProfileFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataProfileResultProfileFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataProfileResultProfileFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileResultProfileFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // profile - computed: true, optional: false, required: false
  private _profile = new DataplexDatascanDataProfileResultProfileFieldsProfileList(this, "profile", false);
  public get profile() {
    return this._profile;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataplexDatascanDataProfileResultProfileFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataProfileResultProfileFieldsOutputReference {
    return new DataplexDatascanDataProfileResultProfileFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataProfileResultProfile {
}

export function dataplexDatascanDataProfileResultProfileToTerraform(struct?: DataplexDatascanDataProfileResultProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataProfileResultProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataProfileResultProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileResultProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataplexDatascanDataProfileResultProfileFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
}

export class DataplexDatascanDataProfileResultProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataProfileResultProfileOutputReference {
    return new DataplexDatascanDataProfileResultProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataProfileResultScannedDataIncrementalField {
}

export function dataplexDatascanDataProfileResultScannedDataIncrementalFieldToTerraform(struct?: DataplexDatascanDataProfileResultScannedDataIncrementalField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataProfileResultScannedDataIncrementalField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileResultScannedDataIncrementalField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}

export class DataplexDatascanDataProfileResultScannedDataIncrementalFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference {
    return new DataplexDatascanDataProfileResultScannedDataIncrementalFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataProfileResultScannedData {
}

export function dataplexDatascanDataProfileResultScannedDataToTerraform(struct?: DataplexDatascanDataProfileResultScannedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataProfileResultScannedDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataProfileResultScannedData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileResultScannedData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // incremental_field - computed: true, optional: false, required: false
  private _incrementalField = new DataplexDatascanDataProfileResultScannedDataIncrementalFieldList(this, "incremental_field", false);
  public get incrementalField() {
    return this._incrementalField;
  }
}

export class DataplexDatascanDataProfileResultScannedDataList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataProfileResultScannedDataOutputReference {
    return new DataplexDatascanDataProfileResultScannedDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataProfileResult {
}

export function dataplexDatascanDataProfileResultToTerraform(struct?: DataplexDatascanDataProfileResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataProfileResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataProfileResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profile - computed: true, optional: false, required: false
  private _profile = new DataplexDatascanDataProfileResultProfileList(this, "profile", false);
  public get profile() {
    return this._profile;
  }

  // row_count - computed: true, optional: false, required: false
  public get rowCount() {
    return this.getStringAttribute('row_count');
  }

  // scanned_data - computed: true, optional: false, required: false
  private _scannedData = new DataplexDatascanDataProfileResultScannedDataList(this, "scanned_data", false);
  public get scannedData() {
    return this._scannedData;
  }
}

export class DataplexDatascanDataProfileResultList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataProfileResultOutputReference {
    return new DataplexDatascanDataProfileResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultDimensions {
}

export function dataplexDatascanDataQualityResultDimensionsToTerraform(struct?: DataplexDatascanDataQualityResultDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passed - computed: true, optional: false, required: false
  public get passed() {
    return this.getBooleanAttribute('passed');
  }
}

export class DataplexDatascanDataQualityResultDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultDimensionsOutputReference {
    return new DataplexDatascanDataQualityResultDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultRulesRuleNonNullExpectation {
}

export function dataplexDatascanDataQualityResultRulesRuleNonNullExpectationToTerraform(struct?: DataplexDatascanDataQualityResultRulesRuleNonNullExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultRulesRuleNonNullExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultRulesRuleNonNullExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference {
    return new DataplexDatascanDataQualityResultRulesRuleNonNullExpectationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultRulesRuleRangeExpectation {
}

export function dataplexDatascanDataQualityResultRulesRuleRangeExpectationToTerraform(struct?: DataplexDatascanDataQualityResultRulesRuleRangeExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultRulesRuleRangeExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultRulesRuleRangeExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getStringAttribute('min_value');
  }

  // strict_max_enabled - computed: true, optional: false, required: false
  public get strictMaxEnabled() {
    return this.getBooleanAttribute('strict_max_enabled');
  }

  // strict_min_enabled - computed: true, optional: false, required: false
  public get strictMinEnabled() {
    return this.getBooleanAttribute('strict_min_enabled');
  }
}

export class DataplexDatascanDataQualityResultRulesRuleRangeExpectationList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference {
    return new DataplexDatascanDataQualityResultRulesRuleRangeExpectationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultRulesRuleRegexExpectation {
}

export function dataplexDatascanDataQualityResultRulesRuleRegexExpectationToTerraform(struct?: DataplexDatascanDataQualityResultRulesRuleRegexExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultRulesRuleRegexExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultRulesRuleRegexExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export class DataplexDatascanDataQualityResultRulesRuleRegexExpectationList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference {
    return new DataplexDatascanDataQualityResultRulesRuleRegexExpectationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation {
}

export function dataplexDatascanDataQualityResultRulesRuleRowConditionExpectationToTerraform(struct?: DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultRulesRuleRowConditionExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sql_expression - computed: true, optional: false, required: false
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
}

export class DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference {
    return new DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultRulesRuleSetExpectation {
}

export function dataplexDatascanDataQualityResultRulesRuleSetExpectationToTerraform(struct?: DataplexDatascanDataQualityResultRulesRuleSetExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultRulesRuleSetExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultRulesRuleSetExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataplexDatascanDataQualityResultRulesRuleSetExpectationList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference {
    return new DataplexDatascanDataQualityResultRulesRuleSetExpectationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation {
}

export function dataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationToTerraform(struct?: DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getStringAttribute('min_value');
  }

  // statistic - computed: true, optional: false, required: false
  public get statistic() {
    return this.getStringAttribute('statistic');
  }

  // strict_max_enabled - computed: true, optional: false, required: false
  public get strictMaxEnabled() {
    return this.getBooleanAttribute('strict_max_enabled');
  }

  // strict_min_enabled - computed: true, optional: false, required: false
  public get strictMinEnabled() {
    return this.getBooleanAttribute('strict_min_enabled');
  }
}

export class DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference {
    return new DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation {
}

export function dataplexDatascanDataQualityResultRulesRuleTableConditionExpectationToTerraform(struct?: DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultRulesRuleTableConditionExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sql_expression - computed: true, optional: false, required: false
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
}

export class DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference {
    return new DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation {
}

export function dataplexDatascanDataQualityResultRulesRuleUniquenessExpectationToTerraform(struct?: DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultRulesRuleUniquenessExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference {
    return new DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultRulesRule {
}

export function dataplexDatascanDataQualityResultRulesRuleToTerraform(struct?: DataplexDatascanDataQualityResultRulesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultRulesRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultRulesRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultRulesRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  public get column() {
    return this.getStringAttribute('column');
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getStringAttribute('dimension');
  }

  // ignore_null - computed: true, optional: false, required: false
  public get ignoreNull() {
    return this.getBooleanAttribute('ignore_null');
  }

  // non_null_expectation - computed: true, optional: false, required: false
  private _nonNullExpectation = new DataplexDatascanDataQualityResultRulesRuleNonNullExpectationList(this, "non_null_expectation", false);
  public get nonNullExpectation() {
    return this._nonNullExpectation;
  }

  // range_expectation - computed: true, optional: false, required: false
  private _rangeExpectation = new DataplexDatascanDataQualityResultRulesRuleRangeExpectationList(this, "range_expectation", false);
  public get rangeExpectation() {
    return this._rangeExpectation;
  }

  // regex_expectation - computed: true, optional: false, required: false
  private _regexExpectation = new DataplexDatascanDataQualityResultRulesRuleRegexExpectationList(this, "regex_expectation", false);
  public get regexExpectation() {
    return this._regexExpectation;
  }

  // row_condition_expectation - computed: true, optional: false, required: false
  private _rowConditionExpectation = new DataplexDatascanDataQualityResultRulesRuleRowConditionExpectationList(this, "row_condition_expectation", false);
  public get rowConditionExpectation() {
    return this._rowConditionExpectation;
  }

  // set_expectation - computed: true, optional: false, required: false
  private _setExpectation = new DataplexDatascanDataQualityResultRulesRuleSetExpectationList(this, "set_expectation", false);
  public get setExpectation() {
    return this._setExpectation;
  }

  // statistic_range_expectation - computed: true, optional: false, required: false
  private _statisticRangeExpectation = new DataplexDatascanDataQualityResultRulesRuleStatisticRangeExpectationList(this, "statistic_range_expectation", false);
  public get statisticRangeExpectation() {
    return this._statisticRangeExpectation;
  }

  // table_condition_expectation - computed: true, optional: false, required: false
  private _tableConditionExpectation = new DataplexDatascanDataQualityResultRulesRuleTableConditionExpectationList(this, "table_condition_expectation", false);
  public get tableConditionExpectation() {
    return this._tableConditionExpectation;
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // uniqueness_expectation - computed: true, optional: false, required: false
  private _uniquenessExpectation = new DataplexDatascanDataQualityResultRulesRuleUniquenessExpectationList(this, "uniqueness_expectation", false);
  public get uniquenessExpectation() {
    return this._uniquenessExpectation;
  }
}

export class DataplexDatascanDataQualityResultRulesRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultRulesRuleOutputReference {
    return new DataplexDatascanDataQualityResultRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultRules {
}

export function dataplexDatascanDataQualityResultRulesToTerraform(struct?: DataplexDatascanDataQualityResultRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluated_count - computed: true, optional: false, required: false
  public get evaluatedCount() {
    return this.getStringAttribute('evaluated_count');
  }

  // failing_rows_query - computed: true, optional: false, required: false
  public get failingRowsQuery() {
    return this.getStringAttribute('failing_rows_query');
  }

  // null_count - computed: true, optional: false, required: false
  public get nullCount() {
    return this.getStringAttribute('null_count');
  }

  // pass_ratio - computed: true, optional: false, required: false
  public get passRatio() {
    return this.getNumberAttribute('pass_ratio');
  }

  // passed - computed: true, optional: false, required: false
  public get passed() {
    return this.getBooleanAttribute('passed');
  }

  // passed_count - computed: true, optional: false, required: false
  public get passedCount() {
    return this.getStringAttribute('passed_count');
  }

  // rule - computed: true, optional: false, required: false
  private _rule = new DataplexDatascanDataQualityResultRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
}

export class DataplexDatascanDataQualityResultRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultRulesOutputReference {
    return new DataplexDatascanDataQualityResultRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultScannedDataIncrementalField {
}

export function dataplexDatascanDataQualityResultScannedDataIncrementalFieldToTerraform(struct?: DataplexDatascanDataQualityResultScannedDataIncrementalField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultScannedDataIncrementalField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultScannedDataIncrementalField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}

export class DataplexDatascanDataQualityResultScannedDataIncrementalFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference {
    return new DataplexDatascanDataQualityResultScannedDataIncrementalFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResultScannedData {
}

export function dataplexDatascanDataQualityResultScannedDataToTerraform(struct?: DataplexDatascanDataQualityResultScannedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultScannedDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResultScannedData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResultScannedData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // incremental_field - computed: true, optional: false, required: false
  private _incrementalField = new DataplexDatascanDataQualityResultScannedDataIncrementalFieldList(this, "incremental_field", false);
  public get incrementalField() {
    return this._incrementalField;
  }
}

export class DataplexDatascanDataQualityResultScannedDataList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultScannedDataOutputReference {
    return new DataplexDatascanDataQualityResultScannedDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualityResult {
}

export function dataplexDatascanDataQualityResultToTerraform(struct?: DataplexDatascanDataQualityResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualityResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanDataQualityResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualityResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataplexDatascanDataQualityResultDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // passed - computed: true, optional: false, required: false
  public get passed() {
    return this.getBooleanAttribute('passed');
  }

  // row_count - computed: true, optional: false, required: false
  public get rowCount() {
    return this.getStringAttribute('row_count');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataplexDatascanDataQualityResultRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // scanned_data - computed: true, optional: false, required: false
  private _scannedData = new DataplexDatascanDataQualityResultScannedDataList(this, "scanned_data", false);
  public get scannedData() {
    return this._scannedData;
  }
}

export class DataplexDatascanDataQualityResultList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanDataQualityResultOutputReference {
    return new DataplexDatascanDataQualityResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanExecutionStatus {
}

export function dataplexDatascanExecutionStatusToTerraform(struct?: DataplexDatascanExecutionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanExecutionStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataplexDatascanExecutionStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanExecutionStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // latest_job_end_time - computed: true, optional: false, required: false
  public get latestJobEndTime() {
    return this.getStringAttribute('latest_job_end_time');
  }

  // latest_job_start_time - computed: true, optional: false, required: false
  public get latestJobStartTime() {
    return this.getStringAttribute('latest_job_start_time');
  }
}

export class DataplexDatascanExecutionStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanExecutionStatusOutputReference {
    return new DataplexDatascanExecutionStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanData {
  /**
  * The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#entity DataplexDatascan#entity}
  */
  readonly entity?: string;
  /**
  * The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be:
(Cloud Storage bucket for DataDiscoveryScan)BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#resource DataplexDatascan#resource}
  */
  readonly resource?: string;
}

export function dataplexDatascanDataToTerraform(struct?: DataplexDatascanDataOutputReference | DataplexDatascanData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity: cdktf.stringToTerraform(struct!.entity),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export class DataplexDatascanDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entity !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entity = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entity = value.entity;
      this._resource = value.resource;
    }
  }

  // entity - computed: false, optional: true, required: false
  private _entity?: string; 
  public get entity() {
    return this.getStringAttribute('entity');
  }
  public set entity(value: string) {
    this._entity = value;
  }
  public resetEntity() {
    this._entity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataplexDatascanDataProfileSpec {
  /**
  * A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#row_filter DataplexDatascan#row_filter}
  */
  readonly rowFilter?: string;
  /**
  * The percentage of the records to be selected from the dataset for DataScan.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#sampling_percent DataplexDatascan#sampling_percent}
  */
  readonly samplingPercent?: number;
}

export function dataplexDatascanDataProfileSpecToTerraform(struct?: DataplexDatascanDataProfileSpecOutputReference | DataplexDatascanDataProfileSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    row_filter: cdktf.stringToTerraform(struct!.rowFilter),
    sampling_percent: cdktf.numberToTerraform(struct!.samplingPercent),
  }
}

export class DataplexDatascanDataProfileSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataProfileSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rowFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFilter = this._rowFilter;
    }
    if (this._samplingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingPercent = this._samplingPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rowFilter = undefined;
      this._samplingPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rowFilter = value.rowFilter;
      this._samplingPercent = value.samplingPercent;
    }
  }

  // row_filter - computed: false, optional: true, required: false
  private _rowFilter?: string; 
  public get rowFilter() {
    return this.getStringAttribute('row_filter');
  }
  public set rowFilter(value: string) {
    this._rowFilter = value;
  }
  public resetRowFilter() {
    this._rowFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilterInput() {
    return this._rowFilter;
  }

  // sampling_percent - computed: false, optional: true, required: false
  private _samplingPercent?: number; 
  public get samplingPercent() {
    return this.getNumberAttribute('sampling_percent');
  }
  public set samplingPercent(value: number) {
    this._samplingPercent = value;
  }
  public resetSamplingPercent() {
    this._samplingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentInput() {
    return this._samplingPercent;
  }
}
export interface DataplexDatascanDataQualitySpecRulesNonNullExpectation {
}

export function dataplexDatascanDataQualitySpecRulesNonNullExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference | DataplexDatascanDataQualitySpecRulesNonNullExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesNonNullExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesNonNullExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataplexDatascanDataQualitySpecRulesRangeExpectation {
  /**
  * The maximum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#max_value DataplexDatascan#max_value}
  */
  readonly maxValue?: string;
  /**
  * The minimum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#min_value DataplexDatascan#min_value}
  */
  readonly minValue?: string;
  /**
  * Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.
Only relevant if a maxValue has been defined. Default = false.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#strict_max_enabled DataplexDatascan#strict_max_enabled}
  */
  readonly strictMaxEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.
Only relevant if a minValue has been defined. Default = false.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#strict_min_enabled DataplexDatascan#strict_min_enabled}
  */
  readonly strictMinEnabled?: boolean | cdktf.IResolvable;
}

export function dataplexDatascanDataQualitySpecRulesRangeExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference | DataplexDatascanDataQualitySpecRulesRangeExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    strict_max_enabled: cdktf.booleanToTerraform(struct!.strictMaxEnabled),
    strict_min_enabled: cdktf.booleanToTerraform(struct!.strictMinEnabled),
  }
}

export class DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesRangeExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._strictMaxEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictMaxEnabled = this._strictMaxEnabled;
    }
    if (this._strictMinEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictMinEnabled = this._strictMinEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesRangeExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._strictMaxEnabled = undefined;
      this._strictMinEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._strictMaxEnabled = value.strictMaxEnabled;
      this._strictMinEnabled = value.strictMinEnabled;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }

  // strict_max_enabled - computed: false, optional: true, required: false
  private _strictMaxEnabled?: boolean | cdktf.IResolvable; 
  public get strictMaxEnabled() {
    return this.getBooleanAttribute('strict_max_enabled');
  }
  public set strictMaxEnabled(value: boolean | cdktf.IResolvable) {
    this._strictMaxEnabled = value;
  }
  public resetStrictMaxEnabled() {
    this._strictMaxEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMaxEnabledInput() {
    return this._strictMaxEnabled;
  }

  // strict_min_enabled - computed: false, optional: true, required: false
  private _strictMinEnabled?: boolean | cdktf.IResolvable; 
  public get strictMinEnabled() {
    return this.getBooleanAttribute('strict_min_enabled');
  }
  public set strictMinEnabled(value: boolean | cdktf.IResolvable) {
    this._strictMinEnabled = value;
  }
  public resetStrictMinEnabled() {
    this._strictMinEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMinEnabledInput() {
    return this._strictMinEnabled;
  }
}
export interface DataplexDatascanDataQualitySpecRulesRegexExpectation {
  /**
  * A regular expression the column value is expected to match.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#regex DataplexDatascan#regex}
  */
  readonly regex: string;
}

export function dataplexDatascanDataQualitySpecRulesRegexExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference | DataplexDatascanDataQualitySpecRulesRegexExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}

export class DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesRegexExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesRegexExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regex = value.regex;
    }
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataplexDatascanDataQualitySpecRulesRowConditionExpectation {
  /**
  * The SQL expression.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#sql_expression DataplexDatascan#sql_expression}
  */
  readonly sqlExpression: string;
}

export function dataplexDatascanDataQualitySpecRulesRowConditionExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference | DataplexDatascanDataQualitySpecRulesRowConditionExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sql_expression: cdktf.stringToTerraform(struct!.sqlExpression),
  }
}

export class DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesRowConditionExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sqlExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlExpression = this._sqlExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesRowConditionExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sqlExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sqlExpression = value.sqlExpression;
    }
  }

  // sql_expression - computed: false, optional: false, required: true
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
  }
}
export interface DataplexDatascanDataQualitySpecRulesSetExpectation {
  /**
  * Expected values for the column value.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#values DataplexDatascan#values}
  */
  readonly values: string[];
}

export function dataplexDatascanDataQualitySpecRulesSetExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference | DataplexDatascanDataQualitySpecRulesSetExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesSetExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesSetExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation {
  /**
  * The maximum column statistic value allowed for a row to pass this validation.
At least one of minValue and maxValue need to be provided.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#max_value DataplexDatascan#max_value}
  */
  readonly maxValue?: string;
  /**
  * The minimum column statistic value allowed for a row to pass this validation.
At least one of minValue and maxValue need to be provided.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#min_value DataplexDatascan#min_value}
  */
  readonly minValue?: string;
  /**
  * column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#statistic DataplexDatascan#statistic}
  */
  readonly statistic: string;
  /**
  * Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.
Only relevant if a maxValue has been defined. Default = false.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#strict_max_enabled DataplexDatascan#strict_max_enabled}
  */
  readonly strictMaxEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.
Only relevant if a minValue has been defined. Default = false.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#strict_min_enabled DataplexDatascan#strict_min_enabled}
  */
  readonly strictMinEnabled?: boolean | cdktf.IResolvable;
}

export function dataplexDatascanDataQualitySpecRulesStatisticRangeExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference | DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    strict_max_enabled: cdktf.booleanToTerraform(struct!.strictMaxEnabled),
    strict_min_enabled: cdktf.booleanToTerraform(struct!.strictMinEnabled),
  }
}

export class DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._strictMaxEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictMaxEnabled = this._strictMaxEnabled;
    }
    if (this._strictMinEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictMinEnabled = this._strictMinEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._statistic = undefined;
      this._strictMaxEnabled = undefined;
      this._strictMinEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._statistic = value.statistic;
      this._strictMaxEnabled = value.strictMaxEnabled;
      this._strictMinEnabled = value.strictMinEnabled;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }

  // statistic - computed: false, optional: false, required: true
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // strict_max_enabled - computed: false, optional: true, required: false
  private _strictMaxEnabled?: boolean | cdktf.IResolvable; 
  public get strictMaxEnabled() {
    return this.getBooleanAttribute('strict_max_enabled');
  }
  public set strictMaxEnabled(value: boolean | cdktf.IResolvable) {
    this._strictMaxEnabled = value;
  }
  public resetStrictMaxEnabled() {
    this._strictMaxEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMaxEnabledInput() {
    return this._strictMaxEnabled;
  }

  // strict_min_enabled - computed: false, optional: true, required: false
  private _strictMinEnabled?: boolean | cdktf.IResolvable; 
  public get strictMinEnabled() {
    return this.getBooleanAttribute('strict_min_enabled');
  }
  public set strictMinEnabled(value: boolean | cdktf.IResolvable) {
    this._strictMinEnabled = value;
  }
  public resetStrictMinEnabled() {
    this._strictMinEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMinEnabledInput() {
    return this._strictMinEnabled;
  }
}
export interface DataplexDatascanDataQualitySpecRulesTableConditionExpectation {
  /**
  * The SQL expression.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#sql_expression DataplexDatascan#sql_expression}
  */
  readonly sqlExpression: string;
}

export function dataplexDatascanDataQualitySpecRulesTableConditionExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference | DataplexDatascanDataQualitySpecRulesTableConditionExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sql_expression: cdktf.stringToTerraform(struct!.sqlExpression),
  }
}

export class DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesTableConditionExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sqlExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlExpression = this._sqlExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesTableConditionExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sqlExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sqlExpression = value.sqlExpression;
    }
  }

  // sql_expression - computed: false, optional: false, required: true
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
  }
}
export interface DataplexDatascanDataQualitySpecRulesUniquenessExpectation {
}

export function dataplexDatascanDataQualitySpecRulesUniquenessExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference | DataplexDatascanDataQualitySpecRulesUniquenessExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesUniquenessExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesUniquenessExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataplexDatascanDataQualitySpecRules {
  /**
  * The unnested column which this rule is evaluated against.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#column DataplexDatascan#column}
  */
  readonly column?: string;
  /**
  * The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are ["COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#dimension DataplexDatascan#dimension}
  */
  readonly dimension: string;
  /**
  * Rows with null values will automatically fail a rule, unless ignoreNull is true. In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#ignore_null DataplexDatascan#ignore_null}
  */
  readonly ignoreNull?: boolean | cdktf.IResolvable;
  /**
  * The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#threshold DataplexDatascan#threshold}
  */
  readonly threshold?: number;
  /**
  * non_null_expectation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#non_null_expectation DataplexDatascan#non_null_expectation}
  */
  readonly nonNullExpectation?: DataplexDatascanDataQualitySpecRulesNonNullExpectation;
  /**
  * range_expectation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#range_expectation DataplexDatascan#range_expectation}
  */
  readonly rangeExpectation?: DataplexDatascanDataQualitySpecRulesRangeExpectation;
  /**
  * regex_expectation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#regex_expectation DataplexDatascan#regex_expectation}
  */
  readonly regexExpectation?: DataplexDatascanDataQualitySpecRulesRegexExpectation;
  /**
  * row_condition_expectation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#row_condition_expectation DataplexDatascan#row_condition_expectation}
  */
  readonly rowConditionExpectation?: DataplexDatascanDataQualitySpecRulesRowConditionExpectation;
  /**
  * set_expectation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#set_expectation DataplexDatascan#set_expectation}
  */
  readonly setExpectation?: DataplexDatascanDataQualitySpecRulesSetExpectation;
  /**
  * statistic_range_expectation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#statistic_range_expectation DataplexDatascan#statistic_range_expectation}
  */
  readonly statisticRangeExpectation?: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation;
  /**
  * table_condition_expectation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#table_condition_expectation DataplexDatascan#table_condition_expectation}
  */
  readonly tableConditionExpectation?: DataplexDatascanDataQualitySpecRulesTableConditionExpectation;
  /**
  * uniqueness_expectation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#uniqueness_expectation DataplexDatascan#uniqueness_expectation}
  */
  readonly uniquenessExpectation?: DataplexDatascanDataQualitySpecRulesUniquenessExpectation;
}

export function dataplexDatascanDataQualitySpecRulesToTerraform(struct?: DataplexDatascanDataQualitySpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    dimension: cdktf.stringToTerraform(struct!.dimension),
    ignore_null: cdktf.booleanToTerraform(struct!.ignoreNull),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    non_null_expectation: dataplexDatascanDataQualitySpecRulesNonNullExpectationToTerraform(struct!.nonNullExpectation),
    range_expectation: dataplexDatascanDataQualitySpecRulesRangeExpectationToTerraform(struct!.rangeExpectation),
    regex_expectation: dataplexDatascanDataQualitySpecRulesRegexExpectationToTerraform(struct!.regexExpectation),
    row_condition_expectation: dataplexDatascanDataQualitySpecRulesRowConditionExpectationToTerraform(struct!.rowConditionExpectation),
    set_expectation: dataplexDatascanDataQualitySpecRulesSetExpectationToTerraform(struct!.setExpectation),
    statistic_range_expectation: dataplexDatascanDataQualitySpecRulesStatisticRangeExpectationToTerraform(struct!.statisticRangeExpectation),
    table_condition_expectation: dataplexDatascanDataQualitySpecRulesTableConditionExpectationToTerraform(struct!.tableConditionExpectation),
    uniqueness_expectation: dataplexDatascanDataQualitySpecRulesUniquenessExpectationToTerraform(struct!.uniquenessExpectation),
  }
}

export class DataplexDatascanDataQualitySpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplexDatascanDataQualitySpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._ignoreNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNull = this._ignoreNull;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._nonNullExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonNullExpectation = this._nonNullExpectation?.internalValue;
    }
    if (this._rangeExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeExpectation = this._rangeExpectation?.internalValue;
    }
    if (this._regexExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexExpectation = this._regexExpectation?.internalValue;
    }
    if (this._rowConditionExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowConditionExpectation = this._rowConditionExpectation?.internalValue;
    }
    if (this._setExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExpectation = this._setExpectation?.internalValue;
    }
    if (this._statisticRangeExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticRangeExpectation = this._statisticRangeExpectation?.internalValue;
    }
    if (this._tableConditionExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConditionExpectation = this._tableConditionExpectation?.internalValue;
    }
    if (this._uniquenessExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniquenessExpectation = this._uniquenessExpectation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dimension = undefined;
      this._ignoreNull = undefined;
      this._threshold = undefined;
      this._nonNullExpectation.internalValue = undefined;
      this._rangeExpectation.internalValue = undefined;
      this._regexExpectation.internalValue = undefined;
      this._rowConditionExpectation.internalValue = undefined;
      this._setExpectation.internalValue = undefined;
      this._statisticRangeExpectation.internalValue = undefined;
      this._tableConditionExpectation.internalValue = undefined;
      this._uniquenessExpectation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._dimension = value.dimension;
      this._ignoreNull = value.ignoreNull;
      this._threshold = value.threshold;
      this._nonNullExpectation.internalValue = value.nonNullExpectation;
      this._rangeExpectation.internalValue = value.rangeExpectation;
      this._regexExpectation.internalValue = value.regexExpectation;
      this._rowConditionExpectation.internalValue = value.rowConditionExpectation;
      this._setExpectation.internalValue = value.setExpectation;
      this._statisticRangeExpectation.internalValue = value.statisticRangeExpectation;
      this._tableConditionExpectation.internalValue = value.tableConditionExpectation;
      this._uniquenessExpectation.internalValue = value.uniquenessExpectation;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // ignore_null - computed: false, optional: true, required: false
  private _ignoreNull?: boolean | cdktf.IResolvable; 
  public get ignoreNull() {
    return this.getBooleanAttribute('ignore_null');
  }
  public set ignoreNull(value: boolean | cdktf.IResolvable) {
    this._ignoreNull = value;
  }
  public resetIgnoreNull() {
    this._ignoreNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNullInput() {
    return this._ignoreNull;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // non_null_expectation - computed: false, optional: true, required: false
  private _nonNullExpectation = new DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference(this, "non_null_expectation");
  public get nonNullExpectation() {
    return this._nonNullExpectation;
  }
  public putNonNullExpectation(value: DataplexDatascanDataQualitySpecRulesNonNullExpectation) {
    this._nonNullExpectation.internalValue = value;
  }
  public resetNonNullExpectation() {
    this._nonNullExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonNullExpectationInput() {
    return this._nonNullExpectation.internalValue;
  }

  // range_expectation - computed: false, optional: true, required: false
  private _rangeExpectation = new DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference(this, "range_expectation");
  public get rangeExpectation() {
    return this._rangeExpectation;
  }
  public putRangeExpectation(value: DataplexDatascanDataQualitySpecRulesRangeExpectation) {
    this._rangeExpectation.internalValue = value;
  }
  public resetRangeExpectation() {
    this._rangeExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeExpectationInput() {
    return this._rangeExpectation.internalValue;
  }

  // regex_expectation - computed: false, optional: true, required: false
  private _regexExpectation = new DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference(this, "regex_expectation");
  public get regexExpectation() {
    return this._regexExpectation;
  }
  public putRegexExpectation(value: DataplexDatascanDataQualitySpecRulesRegexExpectation) {
    this._regexExpectation.internalValue = value;
  }
  public resetRegexExpectation() {
    this._regexExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexExpectationInput() {
    return this._regexExpectation.internalValue;
  }

  // row_condition_expectation - computed: false, optional: true, required: false
  private _rowConditionExpectation = new DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference(this, "row_condition_expectation");
  public get rowConditionExpectation() {
    return this._rowConditionExpectation;
  }
  public putRowConditionExpectation(value: DataplexDatascanDataQualitySpecRulesRowConditionExpectation) {
    this._rowConditionExpectation.internalValue = value;
  }
  public resetRowConditionExpectation() {
    this._rowConditionExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowConditionExpectationInput() {
    return this._rowConditionExpectation.internalValue;
  }

  // set_expectation - computed: false, optional: true, required: false
  private _setExpectation = new DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference(this, "set_expectation");
  public get setExpectation() {
    return this._setExpectation;
  }
  public putSetExpectation(value: DataplexDatascanDataQualitySpecRulesSetExpectation) {
    this._setExpectation.internalValue = value;
  }
  public resetSetExpectation() {
    this._setExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExpectationInput() {
    return this._setExpectation.internalValue;
  }

  // statistic_range_expectation - computed: false, optional: true, required: false
  private _statisticRangeExpectation = new DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference(this, "statistic_range_expectation");
  public get statisticRangeExpectation() {
    return this._statisticRangeExpectation;
  }
  public putStatisticRangeExpectation(value: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation) {
    this._statisticRangeExpectation.internalValue = value;
  }
  public resetStatisticRangeExpectation() {
    this._statisticRangeExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticRangeExpectationInput() {
    return this._statisticRangeExpectation.internalValue;
  }

  // table_condition_expectation - computed: false, optional: true, required: false
  private _tableConditionExpectation = new DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference(this, "table_condition_expectation");
  public get tableConditionExpectation() {
    return this._tableConditionExpectation;
  }
  public putTableConditionExpectation(value: DataplexDatascanDataQualitySpecRulesTableConditionExpectation) {
    this._tableConditionExpectation.internalValue = value;
  }
  public resetTableConditionExpectation() {
    this._tableConditionExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConditionExpectationInput() {
    return this._tableConditionExpectation.internalValue;
  }

  // uniqueness_expectation - computed: false, optional: true, required: false
  private _uniquenessExpectation = new DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference(this, "uniqueness_expectation");
  public get uniquenessExpectation() {
    return this._uniquenessExpectation;
  }
  public putUniquenessExpectation(value: DataplexDatascanDataQualitySpecRulesUniquenessExpectation) {
    this._uniquenessExpectation.internalValue = value;
  }
  public resetUniquenessExpectation() {
    this._uniquenessExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniquenessExpectationInput() {
    return this._uniquenessExpectation.internalValue;
  }
}

export class DataplexDatascanDataQualitySpecRulesList extends cdktf.ComplexList {
  public internalValue? : DataplexDatascanDataQualitySpecRules[] | cdktf.IResolvable

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
  public get(index: number): DataplexDatascanDataQualitySpecRulesOutputReference {
    return new DataplexDatascanDataQualitySpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualitySpec {
  /**
  * A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#row_filter DataplexDatascan#row_filter}
  */
  readonly rowFilter?: string;
  /**
  * The percentage of the records to be selected from the dataset for DataScan.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#sampling_percent DataplexDatascan#sampling_percent}
  */
  readonly samplingPercent?: number;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#rules DataplexDatascan#rules}
  */
  readonly rules?: DataplexDatascanDataQualitySpecRules[] | cdktf.IResolvable;
}

export function dataplexDatascanDataQualitySpecToTerraform(struct?: DataplexDatascanDataQualitySpecOutputReference | DataplexDatascanDataQualitySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    row_filter: cdktf.stringToTerraform(struct!.rowFilter),
    sampling_percent: cdktf.numberToTerraform(struct!.samplingPercent),
    rules: cdktf.listMapper(dataplexDatascanDataQualitySpecRulesToTerraform, true)(struct!.rules),
  }
}

export class DataplexDatascanDataQualitySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rowFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFilter = this._rowFilter;
    }
    if (this._samplingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingPercent = this._samplingPercent;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rowFilter = undefined;
      this._samplingPercent = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rowFilter = value.rowFilter;
      this._samplingPercent = value.samplingPercent;
      this._rules.internalValue = value.rules;
    }
  }

  // row_filter - computed: false, optional: true, required: false
  private _rowFilter?: string; 
  public get rowFilter() {
    return this.getStringAttribute('row_filter');
  }
  public set rowFilter(value: string) {
    this._rowFilter = value;
  }
  public resetRowFilter() {
    this._rowFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilterInput() {
    return this._rowFilter;
  }

  // sampling_percent - computed: false, optional: true, required: false
  private _samplingPercent?: number; 
  public get samplingPercent() {
    return this.getNumberAttribute('sampling_percent');
  }
  public set samplingPercent(value: number) {
    this._samplingPercent = value;
  }
  public resetSamplingPercent() {
    this._samplingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentInput() {
    return this._samplingPercent;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataplexDatascanDataQualitySpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataplexDatascanDataQualitySpecRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface DataplexDatascanExecutionSpecTriggerOnDemand {
}

export function dataplexDatascanExecutionSpecTriggerOnDemandToTerraform(struct?: DataplexDatascanExecutionSpecTriggerOnDemandOutputReference | DataplexDatascanExecutionSpecTriggerOnDemand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexDatascanExecutionSpecTriggerOnDemandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanExecutionSpecTriggerOnDemand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanExecutionSpecTriggerOnDemand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataplexDatascanExecutionSpecTriggerSchedule {
  /**
  * Cron schedule for running scans periodically. This field is required for Schedule scans.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#cron DataplexDatascan#cron}
  */
  readonly cron: string;
}

export function dataplexDatascanExecutionSpecTriggerScheduleToTerraform(struct?: DataplexDatascanExecutionSpecTriggerScheduleOutputReference | DataplexDatascanExecutionSpecTriggerSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron: cdktf.stringToTerraform(struct!.cron),
  }
}

export class DataplexDatascanExecutionSpecTriggerScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanExecutionSpecTriggerSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanExecutionSpecTriggerSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cron = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cron = value.cron;
    }
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }
}
export interface DataplexDatascanExecutionSpecTrigger {
  /**
  * on_demand block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#on_demand DataplexDatascan#on_demand}
  */
  readonly onDemand?: DataplexDatascanExecutionSpecTriggerOnDemand;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#schedule DataplexDatascan#schedule}
  */
  readonly schedule?: DataplexDatascanExecutionSpecTriggerSchedule;
}

export function dataplexDatascanExecutionSpecTriggerToTerraform(struct?: DataplexDatascanExecutionSpecTriggerOutputReference | DataplexDatascanExecutionSpecTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_demand: dataplexDatascanExecutionSpecTriggerOnDemandToTerraform(struct!.onDemand),
    schedule: dataplexDatascanExecutionSpecTriggerScheduleToTerraform(struct!.schedule),
  }
}

export class DataplexDatascanExecutionSpecTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanExecutionSpecTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDemand?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemand = this._onDemand?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanExecutionSpecTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDemand.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDemand.internalValue = value.onDemand;
      this._schedule.internalValue = value.schedule;
    }
  }

  // on_demand - computed: false, optional: true, required: false
  private _onDemand = new DataplexDatascanExecutionSpecTriggerOnDemandOutputReference(this, "on_demand");
  public get onDemand() {
    return this._onDemand;
  }
  public putOnDemand(value: DataplexDatascanExecutionSpecTriggerOnDemand) {
    this._onDemand.internalValue = value;
  }
  public resetOnDemand() {
    this._onDemand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandInput() {
    return this._onDemand.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DataplexDatascanExecutionSpecTriggerScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataplexDatascanExecutionSpecTriggerSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface DataplexDatascanExecutionSpec {
  /**
  * The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. If not specified, a data scan will run for all data in the table.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#field DataplexDatascan#field}
  */
  readonly field?: string;
  /**
  * trigger block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#trigger DataplexDatascan#trigger}
  */
  readonly trigger: DataplexDatascanExecutionSpecTrigger;
}

export function dataplexDatascanExecutionSpecToTerraform(struct?: DataplexDatascanExecutionSpecOutputReference | DataplexDatascanExecutionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    trigger: dataplexDatascanExecutionSpecTriggerToTerraform(struct!.trigger),
  }
}

export class DataplexDatascanExecutionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanExecutionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanExecutionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._trigger.internalValue = value.trigger;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new DataplexDatascanExecutionSpecTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: DataplexDatascanExecutionSpecTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}
export interface DataplexDatascanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#create DataplexDatascan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#delete DataplexDatascan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan#update DataplexDatascan#update}
  */
  readonly update?: string;
}

export function dataplexDatascanTimeoutsToTerraform(struct?: DataplexDatascanTimeouts | cdktf.IResolvable): any {
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

export class DataplexDatascanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplexDatascanTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataplexDatascanTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan google_dataplex_datascan}
*/
export class DataplexDatascan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataplex_datascan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/dataplex_datascan google_dataplex_datascan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataplexDatascanConfig
  */
  public constructor(scope: Construct, id: string, config: DataplexDatascanConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataplex_datascan',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.79.0',
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
    this._dataScanId = config.dataScanId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._data.internalValue = config.data;
    this._dataProfileSpec.internalValue = config.dataProfileSpec;
    this._dataQualitySpec.internalValue = config.dataQualitySpec;
    this._executionSpec.internalValue = config.executionSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_profile_result - computed: true, optional: false, required: false
  private _dataProfileResult = new DataplexDatascanDataProfileResultList(this, "data_profile_result", false);
  public get dataProfileResult() {
    return this._dataProfileResult;
  }

  // data_quality_result - computed: true, optional: false, required: false
  private _dataQualityResult = new DataplexDatascanDataQualityResultList(this, "data_quality_result", false);
  public get dataQualityResult() {
    return this._dataQualityResult;
  }

  // data_scan_id - computed: false, optional: false, required: true
  private _dataScanId?: string; 
  public get dataScanId() {
    return this.getStringAttribute('data_scan_id');
  }
  public set dataScanId(value: string) {
    this._dataScanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataScanIdInput() {
    return this._dataScanId;
  }

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

  // execution_status - computed: true, optional: false, required: false
  private _executionStatus = new DataplexDatascanExecutionStatusList(this, "execution_status", false);
  public get executionStatus() {
    return this._executionStatus;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // data - computed: false, optional: false, required: true
  private _data = new DataplexDatascanDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataplexDatascanData) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // data_profile_spec - computed: false, optional: true, required: false
  private _dataProfileSpec = new DataplexDatascanDataProfileSpecOutputReference(this, "data_profile_spec");
  public get dataProfileSpec() {
    return this._dataProfileSpec;
  }
  public putDataProfileSpec(value: DataplexDatascanDataProfileSpec) {
    this._dataProfileSpec.internalValue = value;
  }
  public resetDataProfileSpec() {
    this._dataProfileSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProfileSpecInput() {
    return this._dataProfileSpec.internalValue;
  }

  // data_quality_spec - computed: false, optional: true, required: false
  private _dataQualitySpec = new DataplexDatascanDataQualitySpecOutputReference(this, "data_quality_spec");
  public get dataQualitySpec() {
    return this._dataQualitySpec;
  }
  public putDataQualitySpec(value: DataplexDatascanDataQualitySpec) {
    this._dataQualitySpec.internalValue = value;
  }
  public resetDataQualitySpec() {
    this._dataQualitySpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualitySpecInput() {
    return this._dataQualitySpec.internalValue;
  }

  // execution_spec - computed: false, optional: false, required: true
  private _executionSpec = new DataplexDatascanExecutionSpecOutputReference(this, "execution_spec");
  public get executionSpec() {
    return this._executionSpec;
  }
  public putExecutionSpec(value: DataplexDatascanExecutionSpec) {
    this._executionSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionSpecInput() {
    return this._executionSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataplexDatascanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataplexDatascanTimeouts) {
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
      data_scan_id: cdktf.stringToTerraform(this._dataScanId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      data: dataplexDatascanDataToTerraform(this._data.internalValue),
      data_profile_spec: dataplexDatascanDataProfileSpecToTerraform(this._dataProfileSpec.internalValue),
      data_quality_spec: dataplexDatascanDataQualitySpecToTerraform(this._dataQualitySpec.internalValue),
      execution_spec: dataplexDatascanExecutionSpecToTerraform(this._executionSpec.internalValue),
      timeouts: dataplexDatascanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
