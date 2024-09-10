// https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryDatasetAccessAConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique ID for this dataset, without the project name. The ID
  * must contain only letters (a-z, A-Z), numbers (0-9), or
  * underscores (_). The maximum length is 1,024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}
  */
  readonly datasetId: string;
  /**
  * A domain to grant access to. Any users signed in with the
  * domain specified will be granted the specified access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#domain BigqueryDatasetAccessA#domain}
  */
  readonly domain?: string;
  /**
  * An email address of a Google Group to grant access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#group_by_email BigqueryDatasetAccessA#group_by_email}
  */
  readonly groupByEmail?: string;
  /**
  * Some other type of member that appears in the IAM Policy but isn't a user,
  * group, domain, or special group. For example: 'allUsers'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#iam_member BigqueryDatasetAccessA#iam_member}
  */
  readonly iamMember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#id BigqueryDatasetAccessA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#project BigqueryDatasetAccessA#project}
  */
  readonly project?: string;
  /**
  * Describes the rights granted to the user specified by the other
  * member of the access object. Basic, predefined, and custom roles are
  * supported. Predefined roles that have equivalent basic roles are
  * swapped by the API to their basic counterparts, and will show a diff
  * post-create. See
  * [official docs](https://cloud.google.com/bigquery/docs/access-control).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#role BigqueryDatasetAccessA#role}
  */
  readonly role?: string;
  /**
  * A special group to grant access to. Possible values include:
  * * 'projectOwners': Owners of the enclosing project.
  * * 'projectReaders': Readers of the enclosing project.
  * * 'projectWriters': Writers of the enclosing project.
  * * 'allAuthenticatedUsers': All authenticated BigQuery users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#special_group BigqueryDatasetAccessA#special_group}
  */
  readonly specialGroup?: string;
  /**
  * An email address of a user to grant access to. For example:
  * fred@example.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#user_by_email BigqueryDatasetAccessA#user_by_email}
  */
  readonly userByEmail?: string;
  /**
  * dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#dataset BigqueryDatasetAccessA#dataset}
  */
  readonly dataset?: BigqueryDatasetAccessDatasetA;
  /**
  * routine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#routine BigqueryDatasetAccessA#routine}
  */
  readonly routine?: BigqueryDatasetAccessRoutineA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#timeouts BigqueryDatasetAccessA#timeouts}
  */
  readonly timeouts?: BigqueryDatasetAccessTimeouts;
  /**
  * view block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#view BigqueryDatasetAccessA#view}
  */
  readonly view?: BigqueryDatasetAccessViewA;
}
export interface BigqueryDatasetAccessDatasetDatasetA {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#project_id BigqueryDatasetAccessA#project_id}
  */
  readonly projectId: string;
}

export function bigqueryDatasetAccessDatasetDatasetAToTerraform(struct?: BigqueryDatasetAccessDatasetDatasetAOutputReference | BigqueryDatasetAccessDatasetDatasetA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function bigqueryDatasetAccessDatasetDatasetAToHclTerraform(struct?: BigqueryDatasetAccessDatasetDatasetAOutputReference | BigqueryDatasetAccessDatasetDatasetA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetAccessDatasetDatasetAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetAccessDatasetDatasetA | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccessDatasetDatasetA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
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
}
export interface BigqueryDatasetAccessDatasetA {
  /**
  * Which resources in the dataset this entry applies to. Currently, only views are supported,
  * but additional target types may be added in the future. Possible values: VIEWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#target_types BigqueryDatasetAccessA#target_types}
  */
  readonly targetTypes: string[];
  /**
  * dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#dataset BigqueryDatasetAccessA#dataset}
  */
  readonly dataset: BigqueryDatasetAccessDatasetDatasetA;
}

export function bigqueryDatasetAccessDatasetAToTerraform(struct?: BigqueryDatasetAccessDatasetAOutputReference | BigqueryDatasetAccessDatasetA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetTypes),
    dataset: bigqueryDatasetAccessDatasetDatasetAToTerraform(struct!.dataset),
  }
}


export function bigqueryDatasetAccessDatasetAToHclTerraform(struct?: BigqueryDatasetAccessDatasetAOutputReference | BigqueryDatasetAccessDatasetA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dataset: {
      value: bigqueryDatasetAccessDatasetDatasetAToHclTerraform(struct!.dataset),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryDatasetAccessDatasetDatasetAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetAccessDatasetAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetAccessDatasetA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTypes = this._targetTypes;
    }
    if (this._dataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccessDatasetA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetTypes = undefined;
      this._dataset.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetTypes = value.targetTypes;
      this._dataset.internalValue = value.dataset;
    }
  }

  // target_types - computed: false, optional: false, required: true
  private _targetTypes?: string[]; 
  public get targetTypes() {
    return this.getListAttribute('target_types');
  }
  public set targetTypes(value: string[]) {
    this._targetTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypesInput() {
    return this._targetTypes;
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset = new BigqueryDatasetAccessDatasetDatasetAOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: BigqueryDatasetAccessDatasetDatasetA) {
    this._dataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }
}
export interface BigqueryDatasetAccessRoutineA {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#project_id BigqueryDatasetAccessA#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the routine. The ID must contain only letters (a-z,
  * A-Z), numbers (0-9), or underscores (_). The maximum length
  * is 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#routine_id BigqueryDatasetAccessA#routine_id}
  */
  readonly routineId: string;
}

export function bigqueryDatasetAccessRoutineAToTerraform(struct?: BigqueryDatasetAccessRoutineAOutputReference | BigqueryDatasetAccessRoutineA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    routine_id: cdktf.stringToTerraform(struct!.routineId),
  }
}


export function bigqueryDatasetAccessRoutineAToHclTerraform(struct?: BigqueryDatasetAccessRoutineAOutputReference | BigqueryDatasetAccessRoutineA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_id: {
      value: cdktf.stringToHclTerraform(struct!.routineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetAccessRoutineAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetAccessRoutineA | undefined {
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
    if (this._routineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineId = this._routineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccessRoutineA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._routineId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._routineId = value.routineId;
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

  // routine_id - computed: false, optional: false, required: true
  private _routineId?: string; 
  public get routineId() {
    return this.getStringAttribute('routine_id');
  }
  public set routineId(value: string) {
    this._routineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routineIdInput() {
    return this._routineId;
  }
}
export interface BigqueryDatasetAccessTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#create BigqueryDatasetAccessA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#delete BigqueryDatasetAccessA#delete}
  */
  readonly delete?: string;
}

export function bigqueryDatasetAccessTimeoutsToTerraform(struct?: BigqueryDatasetAccessTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function bigqueryDatasetAccessTimeoutsToHclTerraform(struct?: BigqueryDatasetAccessTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetAccessTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigqueryDatasetAccessTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccessTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface BigqueryDatasetAccessViewA {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#dataset_id BigqueryDatasetAccessA#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#project_id BigqueryDatasetAccessA#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the table. The ID must contain only letters (a-z,
  * A-Z), numbers (0-9), or underscores (_). The maximum length
  * is 1,024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#table_id BigqueryDatasetAccessA#table_id}
  */
  readonly tableId: string;
}

export function bigqueryDatasetAccessViewAToTerraform(struct?: BigqueryDatasetAccessViewAOutputReference | BigqueryDatasetAccessViewA): any {
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


export function bigqueryDatasetAccessViewAToHclTerraform(struct?: BigqueryDatasetAccessViewAOutputReference | BigqueryDatasetAccessViewA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetAccessViewAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetAccessViewA | undefined {
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

  public set internalValue(value: BigqueryDatasetAccessViewA | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access google_bigquery_dataset_access}
*/
export class BigqueryDatasetAccessA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_dataset_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigqueryDatasetAccessA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryDatasetAccessA to import
  * @param importFromId The id of the existing BigqueryDatasetAccessA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryDatasetAccessA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_dataset_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/bigquery_dataset_access google_bigquery_dataset_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryDatasetAccessAConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryDatasetAccessAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_dataset_access',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.2.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datasetId = config.datasetId;
    this._domain = config.domain;
    this._groupByEmail = config.groupByEmail;
    this._iamMember = config.iamMember;
    this._id = config.id;
    this._project = config.project;
    this._role = config.role;
    this._specialGroup = config.specialGroup;
    this._userByEmail = config.userByEmail;
    this._dataset.internalValue = config.dataset;
    this._routine.internalValue = config.routine;
    this._timeouts.internalValue = config.timeouts;
    this._view.internalValue = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_updated_member - computed: true, optional: false, required: false
  public get apiUpdatedMember() {
    return this.getBooleanAttribute('api_updated_member');
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

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // group_by_email - computed: false, optional: true, required: false
  private _groupByEmail?: string; 
  public get groupByEmail() {
    return this.getStringAttribute('group_by_email');
  }
  public set groupByEmail(value: string) {
    this._groupByEmail = value;
  }
  public resetGroupByEmail() {
    this._groupByEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByEmailInput() {
    return this._groupByEmail;
  }

  // iam_member - computed: false, optional: true, required: false
  private _iamMember?: string; 
  public get iamMember() {
    return this.getStringAttribute('iam_member');
  }
  public set iamMember(value: string) {
    this._iamMember = value;
  }
  public resetIamMember() {
    this._iamMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamMemberInput() {
    return this._iamMember;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // special_group - computed: false, optional: true, required: false
  private _specialGroup?: string; 
  public get specialGroup() {
    return this.getStringAttribute('special_group');
  }
  public set specialGroup(value: string) {
    this._specialGroup = value;
  }
  public resetSpecialGroup() {
    this._specialGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialGroupInput() {
    return this._specialGroup;
  }

  // user_by_email - computed: false, optional: true, required: false
  private _userByEmail?: string; 
  public get userByEmail() {
    return this.getStringAttribute('user_by_email');
  }
  public set userByEmail(value: string) {
    this._userByEmail = value;
  }
  public resetUserByEmail() {
    this._userByEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userByEmailInput() {
    return this._userByEmail;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset = new BigqueryDatasetAccessDatasetAOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: BigqueryDatasetAccessDatasetA) {
    this._dataset.internalValue = value;
  }
  public resetDataset() {
    this._dataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }

  // routine - computed: false, optional: true, required: false
  private _routine = new BigqueryDatasetAccessRoutineAOutputReference(this, "routine");
  public get routine() {
    return this._routine;
  }
  public putRoutine(value: BigqueryDatasetAccessRoutineA) {
    this._routine.internalValue = value;
  }
  public resetRoutine() {
    this._routine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineInput() {
    return this._routine.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryDatasetAccessTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryDatasetAccessTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // view - computed: false, optional: true, required: false
  private _view = new BigqueryDatasetAccessViewAOutputReference(this, "view");
  public get view() {
    return this._view;
  }
  public putView(value: BigqueryDatasetAccessViewA) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset_id: cdktf.stringToTerraform(this._datasetId),
      domain: cdktf.stringToTerraform(this._domain),
      group_by_email: cdktf.stringToTerraform(this._groupByEmail),
      iam_member: cdktf.stringToTerraform(this._iamMember),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      role: cdktf.stringToTerraform(this._role),
      special_group: cdktf.stringToTerraform(this._specialGroup),
      user_by_email: cdktf.stringToTerraform(this._userByEmail),
      dataset: bigqueryDatasetAccessDatasetAToTerraform(this._dataset.internalValue),
      routine: bigqueryDatasetAccessRoutineAToTerraform(this._routine.internalValue),
      timeouts: bigqueryDatasetAccessTimeoutsToTerraform(this._timeouts.internalValue),
      view: bigqueryDatasetAccessViewAToTerraform(this._view.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataset_id: {
        value: cdktf.stringToHclTerraform(this._datasetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_by_email: {
        value: cdktf.stringToHclTerraform(this._groupByEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_member: {
        value: cdktf.stringToHclTerraform(this._iamMember),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      special_group: {
        value: cdktf.stringToHclTerraform(this._specialGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_by_email: {
        value: cdktf.stringToHclTerraform(this._userByEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset: {
        value: bigqueryDatasetAccessDatasetAToHclTerraform(this._dataset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryDatasetAccessDatasetAList",
      },
      routine: {
        value: bigqueryDatasetAccessRoutineAToHclTerraform(this._routine.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryDatasetAccessRoutineAList",
      },
      timeouts: {
        value: bigqueryDatasetAccessTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigqueryDatasetAccessTimeouts",
      },
      view: {
        value: bigqueryDatasetAccessViewAToHclTerraform(this._view.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryDatasetAccessViewAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
