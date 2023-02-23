// https://www.terraform.io/docs/providers/google/d/cloudbuild_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleCloudbuildTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudbuild_trigger#id DataGoogleCloudbuildTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger.
If not specified, "global" is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudbuild_trigger#location DataGoogleCloudbuildTrigger#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudbuild_trigger#project DataGoogleCloudbuildTrigger#project}
  */
  readonly project?: string;
  /**
  * The unique identifier for the trigger.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudbuild_trigger#trigger_id DataGoogleCloudbuildTrigger#trigger_id}
  */
  readonly triggerId: string;
}
export interface DataGoogleCloudbuildTriggerApprovalConfig {
}

export function dataGoogleCloudbuildTriggerApprovalConfigToTerraform(struct?: DataGoogleCloudbuildTriggerApprovalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerApprovalConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerApprovalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerApprovalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approval_required - computed: true, optional: false, required: false
  public get approvalRequired() {
    return this.getBooleanAttribute('approval_required');
  }
}

export class DataGoogleCloudbuildTriggerApprovalConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerApprovalConfigOutputReference {
    return new DataGoogleCloudbuildTriggerApprovalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest {
}

export function dataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestToTerraform(struct?: DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // comment_control - computed: true, optional: false, required: false
  public get commentControl() {
    return this.getStringAttribute('comment_control');
  }

  // invert_regex - computed: true, optional: false, required: false
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }
}

export class DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference {
    return new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush {
}

export function dataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushToTerraform(struct?: DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // invert_regex - computed: true, optional: false, required: false
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }
}

export class DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference {
    return new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig {
}

export function dataGoogleCloudbuildTriggerBitbucketServerTriggerConfigToTerraform(struct?: DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bitbucket_server_config_resource - computed: true, optional: false, required: false
  public get bitbucketServerConfigResource() {
    return this.getStringAttribute('bitbucket_server_config_resource');
  }

  // project_key - computed: true, optional: false, required: false
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }

  // pull_request - computed: true, optional: false, required: false
  private _pullRequest = new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList(this, "pull_request", false);
  public get pullRequest() {
    return this._pullRequest;
  }

  // push - computed: true, optional: false, required: false
  private _push = new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList(this, "push", false);
  public get push() {
    return this._push;
  }

  // repo_slug - computed: true, optional: false, required: false
  public get repoSlug() {
    return this.getStringAttribute('repo_slug');
  }
}

export class DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference {
    return new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming {
}

export function dataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingToTerraform(struct?: DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference {
    return new DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildArtifactsObjects {
}

export function dataGoogleCloudbuildTriggerBuildArtifactsObjectsToTerraform(struct?: DataGoogleCloudbuildTriggerBuildArtifactsObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildArtifactsObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildArtifactsObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return this.getListAttribute('paths');
  }

  // timing - computed: true, optional: false, required: false
  private _timing = new DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList(this, "timing", false);
  public get timing() {
    return this._timing;
  }
}

export class DataGoogleCloudbuildTriggerBuildArtifactsObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference {
    return new DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildArtifacts {
}

export function dataGoogleCloudbuildTriggerBuildArtifactsToTerraform(struct?: DataGoogleCloudbuildTriggerBuildArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // images - computed: true, optional: false, required: false
  public get images() {
    return this.getListAttribute('images');
  }

  // objects - computed: true, optional: false, required: false
  private _objects = new DataGoogleCloudbuildTriggerBuildArtifactsObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
}

export class DataGoogleCloudbuildTriggerBuildArtifactsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildArtifactsOutputReference {
    return new DataGoogleCloudbuildTriggerBuildArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager {
}

export function dataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerToTerraform(struct?: DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // env - computed: true, optional: false, required: false
  public get env() {
    return this.getStringAttribute('env');
  }

  // version_name - computed: true, optional: false, required: false
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
}

export class DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference {
    return new DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildAvailableSecrets {
}

export function dataGoogleCloudbuildTriggerBuildAvailableSecretsToTerraform(struct?: DataGoogleCloudbuildTriggerBuildAvailableSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildAvailableSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildAvailableSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_manager - computed: true, optional: false, required: false
  private _secretManager = new DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList(this, "secret_manager", false);
  public get secretManager() {
    return this._secretManager;
  }
}

export class DataGoogleCloudbuildTriggerBuildAvailableSecretsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference {
    return new DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildOptionsVolumes {
}

export function dataGoogleCloudbuildTriggerBuildOptionsVolumesToTerraform(struct?: DataGoogleCloudbuildTriggerBuildOptionsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildOptionsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildOptionsVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataGoogleCloudbuildTriggerBuildOptionsVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference {
    return new DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildOptions {
}

export function dataGoogleCloudbuildTriggerBuildOptionsToTerraform(struct?: DataGoogleCloudbuildTriggerBuildOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // dynamic_substitutions - computed: true, optional: false, required: false
  public get dynamicSubstitutions() {
    return this.getBooleanAttribute('dynamic_substitutions');
  }

  // env - computed: true, optional: false, required: false
  public get env() {
    return this.getListAttribute('env');
  }

  // log_streaming_option - computed: true, optional: false, required: false
  public get logStreamingOption() {
    return this.getStringAttribute('log_streaming_option');
  }

  // logging - computed: true, optional: false, required: false
  public get logging() {
    return this.getStringAttribute('logging');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // requested_verify_option - computed: true, optional: false, required: false
  public get requestedVerifyOption() {
    return this.getStringAttribute('requested_verify_option');
  }

  // secret_env - computed: true, optional: false, required: false
  public get secretEnv() {
    return this.getListAttribute('secret_env');
  }

  // source_provenance_hash - computed: true, optional: false, required: false
  public get sourceProvenanceHash() {
    return this.getListAttribute('source_provenance_hash');
  }

  // substitution_option - computed: true, optional: false, required: false
  public get substitutionOption() {
    return this.getStringAttribute('substitution_option');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataGoogleCloudbuildTriggerBuildOptionsVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }

  // worker_pool - computed: true, optional: false, required: false
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
}

export class DataGoogleCloudbuildTriggerBuildOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildOptionsOutputReference {
    return new DataGoogleCloudbuildTriggerBuildOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildSecret {
}

export function dataGoogleCloudbuildTriggerBuildSecretToTerraform(struct?: DataGoogleCloudbuildTriggerBuildSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_name - computed: true, optional: false, required: false
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }

  // secret_env - computed: true, optional: false, required: false
  private _secretEnv = new cdktf.StringMap(this, "secret_env");
  public get secretEnv() {
    return this._secretEnv;
  }
}

export class DataGoogleCloudbuildTriggerBuildSecretList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildSecretOutputReference {
    return new DataGoogleCloudbuildTriggerBuildSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildSourceRepoSource {
}

export function dataGoogleCloudbuildTriggerBuildSourceRepoSourceToTerraform(struct?: DataGoogleCloudbuildTriggerBuildSourceRepoSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildSourceRepoSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildSourceRepoSource | undefined) {
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

  // substitutions - computed: true, optional: false, required: false
  private _substitutions = new cdktf.StringMap(this, "substitutions");
  public get substitutions() {
    return this._substitutions;
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
}

export class DataGoogleCloudbuildTriggerBuildSourceRepoSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference {
    return new DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildSourceStorageSource {
}

export function dataGoogleCloudbuildTriggerBuildSourceStorageSourceToTerraform(struct?: DataGoogleCloudbuildTriggerBuildSourceStorageSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildSourceStorageSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildSourceStorageSource | undefined) {
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
    return this.getStringAttribute('generation');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export class DataGoogleCloudbuildTriggerBuildSourceStorageSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference {
    return new DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildSource {
}

export function dataGoogleCloudbuildTriggerBuildSourceToTerraform(struct?: DataGoogleCloudbuildTriggerBuildSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repo_source - computed: true, optional: false, required: false
  private _repoSource = new DataGoogleCloudbuildTriggerBuildSourceRepoSourceList(this, "repo_source", false);
  public get repoSource() {
    return this._repoSource;
  }

  // storage_source - computed: true, optional: false, required: false
  private _storageSource = new DataGoogleCloudbuildTriggerBuildSourceStorageSourceList(this, "storage_source", false);
  public get storageSource() {
    return this._storageSource;
  }
}

export class DataGoogleCloudbuildTriggerBuildSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildSourceOutputReference {
    return new DataGoogleCloudbuildTriggerBuildSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildStepVolumes {
}

export function dataGoogleCloudbuildTriggerBuildStepVolumesToTerraform(struct?: DataGoogleCloudbuildTriggerBuildStepVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildStepVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildStepVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataGoogleCloudbuildTriggerBuildStepVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference {
    return new DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuildStep {
}

export function dataGoogleCloudbuildTriggerBuildStepToTerraform(struct?: DataGoogleCloudbuildTriggerBuildStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuildStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuildStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // dir - computed: true, optional: false, required: false
  public get dir() {
    return this.getStringAttribute('dir');
  }

  // entrypoint - computed: true, optional: false, required: false
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }

  // env - computed: true, optional: false, required: false
  public get env() {
    return this.getListAttribute('env');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }

  // secret_env - computed: true, optional: false, required: false
  public get secretEnv() {
    return this.getListAttribute('secret_env');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // timing - computed: true, optional: false, required: false
  public get timing() {
    return this.getStringAttribute('timing');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataGoogleCloudbuildTriggerBuildStepVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }

  // wait_for - computed: true, optional: false, required: false
  public get waitFor() {
    return this.getListAttribute('wait_for');
  }
}

export class DataGoogleCloudbuildTriggerBuildStepList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildStepOutputReference {
    return new DataGoogleCloudbuildTriggerBuildStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerBuild {
}

export function dataGoogleCloudbuildTriggerBuildToTerraform(struct?: DataGoogleCloudbuildTriggerBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerBuildOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifacts - computed: true, optional: false, required: false
  private _artifacts = new DataGoogleCloudbuildTriggerBuildArtifactsList(this, "artifacts", false);
  public get artifacts() {
    return this._artifacts;
  }

  // available_secrets - computed: true, optional: false, required: false
  private _availableSecrets = new DataGoogleCloudbuildTriggerBuildAvailableSecretsList(this, "available_secrets", false);
  public get availableSecrets() {
    return this._availableSecrets;
  }

  // images - computed: true, optional: false, required: false
  public get images() {
    return this.getListAttribute('images');
  }

  // logs_bucket - computed: true, optional: false, required: false
  public get logsBucket() {
    return this.getStringAttribute('logs_bucket');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataGoogleCloudbuildTriggerBuildOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }

  // queue_ttl - computed: true, optional: false, required: false
  public get queueTtl() {
    return this.getStringAttribute('queue_ttl');
  }

  // secret - computed: true, optional: false, required: false
  private _secret = new DataGoogleCloudbuildTriggerBuildSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataGoogleCloudbuildTriggerBuildSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // step - computed: true, optional: false, required: false
  private _step = new DataGoogleCloudbuildTriggerBuildStepList(this, "step", false);
  public get step() {
    return this._step;
  }

  // substitutions - computed: true, optional: false, required: false
  private _substitutions = new cdktf.StringMap(this, "substitutions");
  public get substitutions() {
    return this._substitutions;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
}

export class DataGoogleCloudbuildTriggerBuildList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerBuildOutputReference {
    return new DataGoogleCloudbuildTriggerBuildOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerGitFileSource {
}

export function dataGoogleCloudbuildTriggerGitFileSourceToTerraform(struct?: DataGoogleCloudbuildTriggerGitFileSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerGitFileSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerGitFileSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerGitFileSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // github_enterprise_config - computed: true, optional: false, required: false
  public get githubEnterpriseConfig() {
    return this.getStringAttribute('github_enterprise_config');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // repo_type - computed: true, optional: false, required: false
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataGoogleCloudbuildTriggerGitFileSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerGitFileSourceOutputReference {
    return new DataGoogleCloudbuildTriggerGitFileSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerGithubPullRequest {
}

export function dataGoogleCloudbuildTriggerGithubPullRequestToTerraform(struct?: DataGoogleCloudbuildTriggerGithubPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerGithubPullRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerGithubPullRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerGithubPullRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // comment_control - computed: true, optional: false, required: false
  public get commentControl() {
    return this.getStringAttribute('comment_control');
  }

  // invert_regex - computed: true, optional: false, required: false
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }
}

export class DataGoogleCloudbuildTriggerGithubPullRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerGithubPullRequestOutputReference {
    return new DataGoogleCloudbuildTriggerGithubPullRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerGithubPush {
}

export function dataGoogleCloudbuildTriggerGithubPushToTerraform(struct?: DataGoogleCloudbuildTriggerGithubPush): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerGithubPushOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerGithubPush | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerGithubPush | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // invert_regex - computed: true, optional: false, required: false
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }
}

export class DataGoogleCloudbuildTriggerGithubPushList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerGithubPushOutputReference {
    return new DataGoogleCloudbuildTriggerGithubPushOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerGithub {
}

export function dataGoogleCloudbuildTriggerGithubToTerraform(struct?: DataGoogleCloudbuildTriggerGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enterprise_config_resource_name - computed: true, optional: false, required: false
  public get enterpriseConfigResourceName() {
    return this.getStringAttribute('enterprise_config_resource_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // pull_request - computed: true, optional: false, required: false
  private _pullRequest = new DataGoogleCloudbuildTriggerGithubPullRequestList(this, "pull_request", false);
  public get pullRequest() {
    return this._pullRequest;
  }

  // push - computed: true, optional: false, required: false
  private _push = new DataGoogleCloudbuildTriggerGithubPushList(this, "push", false);
  public get push() {
    return this._push;
  }
}

export class DataGoogleCloudbuildTriggerGithubList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerGithubOutputReference {
    return new DataGoogleCloudbuildTriggerGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerPubsubConfig {
}

export function dataGoogleCloudbuildTriggerPubsubConfigToTerraform(struct?: DataGoogleCloudbuildTriggerPubsubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerPubsubConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerPubsubConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerPubsubConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription - computed: true, optional: false, required: false
  public get subscription() {
    return this.getStringAttribute('subscription');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}

export class DataGoogleCloudbuildTriggerPubsubConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerPubsubConfigOutputReference {
    return new DataGoogleCloudbuildTriggerPubsubConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerSourceToBuild {
}

export function dataGoogleCloudbuildTriggerSourceToBuildToTerraform(struct?: DataGoogleCloudbuildTriggerSourceToBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerSourceToBuildOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerSourceToBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerSourceToBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // github_enterprise_config - computed: true, optional: false, required: false
  public get githubEnterpriseConfig() {
    return this.getStringAttribute('github_enterprise_config');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // repo_type - computed: true, optional: false, required: false
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataGoogleCloudbuildTriggerSourceToBuildList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerSourceToBuildOutputReference {
    return new DataGoogleCloudbuildTriggerSourceToBuildOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerTriggerTemplate {
}

export function dataGoogleCloudbuildTriggerTriggerTemplateToTerraform(struct?: DataGoogleCloudbuildTriggerTriggerTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerTriggerTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerTriggerTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerTriggerTemplate | undefined) {
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

export class DataGoogleCloudbuildTriggerTriggerTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerTriggerTemplateOutputReference {
    return new DataGoogleCloudbuildTriggerTriggerTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudbuildTriggerWebhookConfig {
}

export function dataGoogleCloudbuildTriggerWebhookConfigToTerraform(struct?: DataGoogleCloudbuildTriggerWebhookConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleCloudbuildTriggerWebhookConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudbuildTriggerWebhookConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudbuildTriggerWebhookConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataGoogleCloudbuildTriggerWebhookConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudbuildTriggerWebhookConfigOutputReference {
    return new DataGoogleCloudbuildTriggerWebhookConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/cloudbuild_trigger google_cloudbuild_trigger}
*/
export class DataGoogleCloudbuildTrigger extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloudbuild_trigger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/cloudbuild_trigger google_cloudbuild_trigger} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleCloudbuildTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleCloudbuildTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudbuild_trigger',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.54.0',
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
    this._project = config.project;
    this._triggerId = config.triggerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_config - computed: true, optional: false, required: false
  private _approvalConfig = new DataGoogleCloudbuildTriggerApprovalConfigList(this, "approval_config", false);
  public get approvalConfig() {
    return this._approvalConfig;
  }

  // bitbucket_server_trigger_config - computed: true, optional: false, required: false
  private _bitbucketServerTriggerConfig = new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList(this, "bitbucket_server_trigger_config", false);
  public get bitbucketServerTriggerConfig() {
    return this._bitbucketServerTriggerConfig;
  }

  // build - computed: true, optional: false, required: false
  private _build = new DataGoogleCloudbuildTriggerBuildList(this, "build", false);
  public get buildAttribute() {
    return this._build;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // git_file_source - computed: true, optional: false, required: false
  private _gitFileSource = new DataGoogleCloudbuildTriggerGitFileSourceList(this, "git_file_source", false);
  public get gitFileSource() {
    return this._gitFileSource;
  }

  // github - computed: true, optional: false, required: false
  private _github = new DataGoogleCloudbuildTriggerGithubList(this, "github", false);
  public get github() {
    return this._github;
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

  // ignored_files - computed: true, optional: false, required: false
  public get ignoredFiles() {
    return this.getListAttribute('ignored_files');
  }

  // include_build_logs - computed: true, optional: false, required: false
  public get includeBuildLogs() {
    return this.getStringAttribute('include_build_logs');
  }

  // included_files - computed: true, optional: false, required: false
  public get includedFiles() {
    return this.getListAttribute('included_files');
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

  // pubsub_config - computed: true, optional: false, required: false
  private _pubsubConfig = new DataGoogleCloudbuildTriggerPubsubConfigList(this, "pubsub_config", false);
  public get pubsubConfig() {
    return this._pubsubConfig;
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // source_to_build - computed: true, optional: false, required: false
  private _sourceToBuild = new DataGoogleCloudbuildTriggerSourceToBuildList(this, "source_to_build", false);
  public get sourceToBuild() {
    return this._sourceToBuild;
  }

  // substitutions - computed: true, optional: false, required: false
  private _substitutions = new cdktf.StringMap(this, "substitutions");
  public get substitutions() {
    return this._substitutions;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // trigger_id - computed: false, optional: false, required: true
  private _triggerId?: string; 
  public get triggerId() {
    return this.getStringAttribute('trigger_id');
  }
  public set triggerId(value: string) {
    this._triggerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerIdInput() {
    return this._triggerId;
  }

  // trigger_template - computed: true, optional: false, required: false
  private _triggerTemplate = new DataGoogleCloudbuildTriggerTriggerTemplateList(this, "trigger_template", false);
  public get triggerTemplate() {
    return this._triggerTemplate;
  }

  // webhook_config - computed: true, optional: false, required: false
  private _webhookConfig = new DataGoogleCloudbuildTriggerWebhookConfigList(this, "webhook_config", false);
  public get webhookConfig() {
    return this._webhookConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      trigger_id: cdktf.stringToTerraform(this._triggerId),
    };
  }
}
