// https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleCloudfunctions2FunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function#id DataGoogleCloudfunctions2Function#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of this cloud function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function#location DataGoogleCloudfunctions2Function#location}
  */
  readonly location: string;
  /**
  * A user-defined name of the function. Function names must
be unique globally and match pattern 'projects/*\/locations/*\/functions/*'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function#name DataGoogleCloudfunctions2Function#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function#project DataGoogleCloudfunctions2Function#project}
  */
  readonly project?: string;
}
export interface DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource {
}

export function dataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceToTerraform(struct?: DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch_name - computed: true, optional: false, required: false
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }

  // commit_sha - computed: true, optional: false, required: false
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }

  // dir - computed: true, optional: false, required: false
  public get dir() {
    return this.getStringAttribute('dir');
  }

  // invert_regex - computed: true, optional: false, required: false
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
}

export class DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference {
    return new DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource {
}

export function dataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceToTerraform(struct?: DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export class DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference {
    return new DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudfunctions2FunctionBuildConfigSource {
}

export function dataGoogleCloudfunctions2FunctionBuildConfigSourceToTerraform(struct?: DataGoogleCloudfunctions2FunctionBuildConfigSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudfunctions2FunctionBuildConfigSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudfunctions2FunctionBuildConfigSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repo_source - computed: true, optional: false, required: false
  private _repoSource = new DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList(this, "repo_source", false);
  public get repoSource() {
    return this._repoSource;
  }

  // storage_source - computed: true, optional: false, required: false
  private _storageSource = new DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList(this, "storage_source", false);
  public get storageSource() {
    return this._storageSource;
  }
}

export class DataGoogleCloudfunctions2FunctionBuildConfigSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference {
    return new DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudfunctions2FunctionBuildConfig {
}

export function dataGoogleCloudfunctions2FunctionBuildConfigToTerraform(struct?: DataGoogleCloudfunctions2FunctionBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudfunctions2FunctionBuildConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudfunctions2FunctionBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudfunctions2FunctionBuildConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // docker_repository - computed: true, optional: false, required: false
  public get dockerRepository() {
    return this.getStringAttribute('docker_repository');
  }

  // entry_point - computed: true, optional: false, required: false
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktf.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataGoogleCloudfunctions2FunctionBuildConfigSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // worker_pool - computed: true, optional: false, required: false
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
}

export class DataGoogleCloudfunctions2FunctionBuildConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudfunctions2FunctionBuildConfigOutputReference {
    return new DataGoogleCloudfunctions2FunctionBuildConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudfunctions2FunctionEventTriggerEventFilters {
}

export function dataGoogleCloudfunctions2FunctionEventTriggerEventFiltersToTerraform(struct?: DataGoogleCloudfunctions2FunctionEventTriggerEventFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudfunctions2FunctionEventTriggerEventFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudfunctions2FunctionEventTriggerEventFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference {
    return new DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudfunctions2FunctionEventTrigger {
}

export function dataGoogleCloudfunctions2FunctionEventTriggerToTerraform(struct?: DataGoogleCloudfunctions2FunctionEventTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudfunctions2FunctionEventTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudfunctions2FunctionEventTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudfunctions2FunctionEventTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_filters - computed: true, optional: false, required: false
  private _eventFilters = new DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList(this, "event_filters", true);
  public get eventFilters() {
    return this._eventFilters;
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // pubsub_topic - computed: true, optional: false, required: false
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }

  // retry_policy - computed: true, optional: false, required: false
  public get retryPolicy() {
    return this.getStringAttribute('retry_policy');
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }

  // trigger - computed: true, optional: false, required: false
  public get trigger() {
    return this.getStringAttribute('trigger');
  }

  // trigger_region - computed: true, optional: false, required: false
  public get triggerRegion() {
    return this.getStringAttribute('trigger_region');
  }
}

export class DataGoogleCloudfunctions2FunctionEventTriggerList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudfunctions2FunctionEventTriggerOutputReference {
    return new DataGoogleCloudfunctions2FunctionEventTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables {
}

export function dataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesToTerraform(struct?: DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference {
    return new DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions {
}

export function dataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsToTerraform(struct?: DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference {
    return new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes {
}

export function dataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesToTerraform(struct?: DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
}

export class DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference {
    return new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudfunctions2FunctionServiceConfig {
}

export function dataGoogleCloudfunctions2FunctionServiceConfigToTerraform(struct?: DataGoogleCloudfunctions2FunctionServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudfunctions2FunctionServiceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudfunctions2FunctionServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudfunctions2FunctionServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_traffic_on_latest_revision - computed: true, optional: false, required: false
  public get allTrafficOnLatestRevision() {
    return this.getBooleanAttribute('all_traffic_on_latest_revision');
  }

  // available_memory - computed: true, optional: false, required: false
  public get availableMemory() {
    return this.getStringAttribute('available_memory');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktf.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // gcf_uri - computed: true, optional: false, required: false
  public get gcfUri() {
    return this.getStringAttribute('gcf_uri');
  }

  // ingress_settings - computed: true, optional: false, required: false
  public get ingressSettings() {
    return this.getStringAttribute('ingress_settings');
  }

  // max_instance_count - computed: true, optional: false, required: false
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }

  // min_instance_count - computed: true, optional: false, required: false
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }

  // secret_environment_variables - computed: true, optional: false, required: false
  private _secretEnvironmentVariables = new DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList(this, "secret_environment_variables", false);
  public get secretEnvironmentVariables() {
    return this._secretEnvironmentVariables;
  }

  // secret_volumes - computed: true, optional: false, required: false
  private _secretVolumes = new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList(this, "secret_volumes", false);
  public get secretVolumes() {
    return this._secretVolumes;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // vpc_connector - computed: true, optional: false, required: false
  public get vpcConnector() {
    return this.getStringAttribute('vpc_connector');
  }

  // vpc_connector_egress_settings - computed: true, optional: false, required: false
  public get vpcConnectorEgressSettings() {
    return this.getStringAttribute('vpc_connector_egress_settings');
  }
}

export class DataGoogleCloudfunctions2FunctionServiceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudfunctions2FunctionServiceConfigOutputReference {
    return new DataGoogleCloudfunctions2FunctionServiceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function google_cloudfunctions2_function}
*/
export class DataGoogleCloudfunctions2Function extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloudfunctions2_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function google_cloudfunctions2_function} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleCloudfunctions2FunctionConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleCloudfunctions2FunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudfunctions2_function',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.41.0',
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
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build_config - computed: true, optional: false, required: false
  private _buildConfig = new DataGoogleCloudfunctions2FunctionBuildConfigList(this, "build_config", false);
  public get buildConfig() {
    return this._buildConfig;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // event_trigger - computed: true, optional: false, required: false
  private _eventTrigger = new DataGoogleCloudfunctions2FunctionEventTriggerList(this, "event_trigger", false);
  public get eventTrigger() {
    return this._eventTrigger;
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
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

  // project - computed: false, optional: true, required: false
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

  // service_config - computed: true, optional: false, required: false
  private _serviceConfig = new DataGoogleCloudfunctions2FunctionServiceConfigList(this, "service_config", false);
  public get serviceConfig() {
    return this._serviceConfig;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
