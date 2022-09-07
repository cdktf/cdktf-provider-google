// https://www.terraform.io/docs/providers/google/r/bigquery_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryDatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#dataset_id BigqueryDataset#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The default partition expiration for all partitioned tables in
the dataset, in milliseconds.


Once this property is set, all newly-created partitioned tables in
the dataset will have an 'expirationMs' property in the 'timePartitioning'
settings set to this value, and changing the value will only
affect new tables, not existing ones. The storage in a partition will
have an expiration time of its partition time plus this value.
Setting this property overrides the use of 'defaultTableExpirationMs'
for partitioned tables: only one of 'defaultTableExpirationMs' and
'defaultPartitionExpirationMs' will be used for any new partitioned
table. If you provide an explicit 'timePartitioning.expirationMs' when
creating or updating a partitioned table, that value takes precedence
over the default partition expiration time indicated by this property.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#default_partition_expiration_ms BigqueryDataset#default_partition_expiration_ms}
  */
  readonly defaultPartitionExpirationMs?: number;
  /**
  * The default lifetime of all tables in the dataset, in milliseconds.
The minimum value is 3600000 milliseconds (one hour).


Once this property is set, all newly-created tables in the dataset
will have an 'expirationTime' property set to the creation time plus
the value in this property, and changing the value will only affect
new tables, not existing ones. When the 'expirationTime' for a given
table is reached, that table will be deleted automatically.
If a table's 'expirationTime' is modified or removed before the
table expires, or if you provide an explicit 'expirationTime' when
creating a table, that value takes precedence over the default
expiration time indicated by this property.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#default_table_expiration_ms BigqueryDataset#default_table_expiration_ms}
  */
  readonly defaultTableExpirationMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#delete_contents_on_destroy BigqueryDataset#delete_contents_on_destroy}
  */
  readonly deleteContentsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * A user-friendly description of the dataset
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#description BigqueryDataset#description}
  */
  readonly description?: string;
  /**
  * A descriptive name for the dataset
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#friendly_name BigqueryDataset#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#id BigqueryDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels associated with this dataset. You can use these to
organize and group your datasets
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#labels BigqueryDataset#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The geographic location where the dataset should reside.
See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).


There are two types of locations, regional or multi-regional. A regional
location is a specific geographic place, such as Tokyo, and a multi-regional
location is a large geographic area, such as the United States, that
contains at least two geographic places.


The default value is multi-regional location 'US'.
Changing this forces a new resource to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#location BigqueryDataset#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#project BigqueryDataset#project}
  */
  readonly project?: string;
  /**
  * access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#access BigqueryDataset#access}
  */
  readonly access?: BigqueryDatasetAccess[] | cdktf.IResolvable;
  /**
  * default_encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#default_encryption_configuration BigqueryDataset#default_encryption_configuration}
  */
  readonly defaultEncryptionConfiguration?: BigqueryDatasetDefaultEncryptionConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#timeouts BigqueryDataset#timeouts}
  */
  readonly timeouts?: BigqueryDatasetTimeouts;
}
export interface BigqueryDatasetAccessDatasetDataset {
  /**
  * The ID of the dataset containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#dataset_id BigqueryDataset#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#project_id BigqueryDataset#project_id}
  */
  readonly projectId: string;
}

export function bigqueryDatasetAccessDatasetDatasetToTerraform(struct?: BigqueryDatasetAccessDatasetDatasetOutputReference | BigqueryDatasetAccessDatasetDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export class BigqueryDatasetAccessDatasetDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetAccessDatasetDataset | undefined {
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

  public set internalValue(value: BigqueryDatasetAccessDatasetDataset | undefined) {
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
export interface BigqueryDatasetAccessDataset {
  /**
  * Which resources in the dataset this entry applies to. Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#target_types BigqueryDataset#target_types}
  */
  readonly targetTypes: string[];
  /**
  * dataset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#dataset BigqueryDataset#dataset}
  */
  readonly dataset: BigqueryDatasetAccessDatasetDataset;
}

export function bigqueryDatasetAccessDatasetToTerraform(struct?: BigqueryDatasetAccessDatasetOutputReference | BigqueryDatasetAccessDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetTypes),
    dataset: bigqueryDatasetAccessDatasetDatasetToTerraform(struct!.dataset),
  }
}

export class BigqueryDatasetAccessDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetAccessDataset | undefined {
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

  public set internalValue(value: BigqueryDatasetAccessDataset | undefined) {
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
  private _dataset = new BigqueryDatasetAccessDatasetDatasetOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: BigqueryDatasetAccessDatasetDataset) {
    this._dataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }
}
export interface BigqueryDatasetAccessView {
  /**
  * The ID of the dataset containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#dataset_id BigqueryDataset#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#project_id BigqueryDataset#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the table. The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#table_id BigqueryDataset#table_id}
  */
  readonly tableId: string;
}

export function bigqueryDatasetAccessViewToTerraform(struct?: BigqueryDatasetAccessViewOutputReference | BigqueryDatasetAccessView): any {
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

export class BigqueryDatasetAccessViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetAccessView | undefined {
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

  public set internalValue(value: BigqueryDatasetAccessView | undefined) {
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
export interface BigqueryDatasetAccess {
  /**
  * A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#domain BigqueryDataset#domain}
  */
  readonly domain?: string;
  /**
  * An email address of a Google Group to grant access to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#group_by_email BigqueryDataset#group_by_email}
  */
  readonly groupByEmail?: string;
  /**
  * Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles
are supported. Predefined roles that have equivalent basic roles
are swapped by the API to their basic counterparts. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#role BigqueryDataset#role}
  */
  readonly role?: string;
  /**
  * A special group to grant access to. Possible values include:


* 'projectOwners': Owners of the enclosing project.


* 'projectReaders': Readers of the enclosing project.


* 'projectWriters': Writers of the enclosing project.


* 'allAuthenticatedUsers': All authenticated BigQuery users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#special_group BigqueryDataset#special_group}
  */
  readonly specialGroup?: string;
  /**
  * An email address of a user to grant access to. For example:
fred@example.com
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#user_by_email BigqueryDataset#user_by_email}
  */
  readonly userByEmail?: string;
  /**
  * dataset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#dataset BigqueryDataset#dataset}
  */
  readonly dataset?: BigqueryDatasetAccessDataset;
  /**
  * view block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#view BigqueryDataset#view}
  */
  readonly view?: BigqueryDatasetAccessView;
}

export function bigqueryDatasetAccessToTerraform(struct?: BigqueryDatasetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    group_by_email: cdktf.stringToTerraform(struct!.groupByEmail),
    role: cdktf.stringToTerraform(struct!.role),
    special_group: cdktf.stringToTerraform(struct!.specialGroup),
    user_by_email: cdktf.stringToTerraform(struct!.userByEmail),
    dataset: bigqueryDatasetAccessDatasetToTerraform(struct!.dataset),
    view: bigqueryDatasetAccessViewToTerraform(struct!.view),
  }
}

export class BigqueryDatasetAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BigqueryDatasetAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._groupByEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByEmail = this._groupByEmail;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._specialGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialGroup = this._specialGroup;
    }
    if (this._userByEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.userByEmail = this._userByEmail;
    }
    if (this._dataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset?.internalValue;
    }
    if (this._view?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._groupByEmail = undefined;
      this._role = undefined;
      this._specialGroup = undefined;
      this._userByEmail = undefined;
      this._dataset.internalValue = undefined;
      this._view.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._groupByEmail = value.groupByEmail;
      this._role = value.role;
      this._specialGroup = value.specialGroup;
      this._userByEmail = value.userByEmail;
      this._dataset.internalValue = value.dataset;
      this._view.internalValue = value.view;
    }
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
  private _dataset = new BigqueryDatasetAccessDatasetOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: BigqueryDatasetAccessDataset) {
    this._dataset.internalValue = value;
  }
  public resetDataset() {
    this._dataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }

  // view - computed: false, optional: true, required: false
  private _view = new BigqueryDatasetAccessViewOutputReference(this, "view");
  public get view() {
    return this._view;
  }
  public putView(value: BigqueryDatasetAccessView) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }
}

export class BigqueryDatasetAccessList extends cdktf.ComplexList {
  public internalValue? : BigqueryDatasetAccess[] | cdktf.IResolvable

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
  public get(index: number): BigqueryDatasetAccessOutputReference {
    return new BigqueryDatasetAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryDatasetDefaultEncryptionConfiguration {
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination
BigQuery table. The BigQuery Service Account associated with your project requires
access to this encryption key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#kms_key_name BigqueryDataset#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function bigqueryDatasetDefaultEncryptionConfigurationToTerraform(struct?: BigqueryDatasetDefaultEncryptionConfigurationOutputReference | BigqueryDatasetDefaultEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class BigqueryDatasetDefaultEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetDefaultEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetDefaultEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface BigqueryDatasetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#create BigqueryDataset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#delete BigqueryDataset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset#update BigqueryDataset#update}
  */
  readonly update?: string;
}

export function bigqueryDatasetTimeoutsToTerraform(struct?: BigqueryDatasetTimeoutsOutputReference | BigqueryDatasetTimeouts | cdktf.IResolvable): any {
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

export class BigqueryDatasetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BigqueryDatasetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset google_bigquery_dataset}
*/
export class BigqueryDataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_dataset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset google_bigquery_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_dataset',
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
    this._datasetId = config.datasetId;
    this._defaultPartitionExpirationMs = config.defaultPartitionExpirationMs;
    this._defaultTableExpirationMs = config.defaultTableExpirationMs;
    this._deleteContentsOnDestroy = config.deleteContentsOnDestroy;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._access.internalValue = config.access;
    this._defaultEncryptionConfiguration.internalValue = config.defaultEncryptionConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
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

  // default_partition_expiration_ms - computed: false, optional: true, required: false
  private _defaultPartitionExpirationMs?: number; 
  public get defaultPartitionExpirationMs() {
    return this.getNumberAttribute('default_partition_expiration_ms');
  }
  public set defaultPartitionExpirationMs(value: number) {
    this._defaultPartitionExpirationMs = value;
  }
  public resetDefaultPartitionExpirationMs() {
    this._defaultPartitionExpirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPartitionExpirationMsInput() {
    return this._defaultPartitionExpirationMs;
  }

  // default_table_expiration_ms - computed: false, optional: true, required: false
  private _defaultTableExpirationMs?: number; 
  public get defaultTableExpirationMs() {
    return this.getNumberAttribute('default_table_expiration_ms');
  }
  public set defaultTableExpirationMs(value: number) {
    this._defaultTableExpirationMs = value;
  }
  public resetDefaultTableExpirationMs() {
    this._defaultTableExpirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTableExpirationMsInput() {
    return this._defaultTableExpirationMs;
  }

  // delete_contents_on_destroy - computed: false, optional: true, required: false
  private _deleteContentsOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteContentsOnDestroy() {
    return this.getBooleanAttribute('delete_contents_on_destroy');
  }
  public set deleteContentsOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteContentsOnDestroy = value;
  }
  public resetDeleteContentsOnDestroy() {
    this._deleteContentsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteContentsOnDestroyInput() {
    return this._deleteContentsOnDestroy;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // access - computed: false, optional: true, required: false
  private _access = new BigqueryDatasetAccessList(this, "access", true);
  public get access() {
    return this._access;
  }
  public putAccess(value: BigqueryDatasetAccess[] | cdktf.IResolvable) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // default_encryption_configuration - computed: false, optional: true, required: false
  private _defaultEncryptionConfiguration = new BigqueryDatasetDefaultEncryptionConfigurationOutputReference(this, "default_encryption_configuration");
  public get defaultEncryptionConfiguration() {
    return this._defaultEncryptionConfiguration;
  }
  public putDefaultEncryptionConfiguration(value: BigqueryDatasetDefaultEncryptionConfiguration) {
    this._defaultEncryptionConfiguration.internalValue = value;
  }
  public resetDefaultEncryptionConfiguration() {
    this._defaultEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEncryptionConfigurationInput() {
    return this._defaultEncryptionConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryDatasetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryDatasetTimeouts) {
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
      dataset_id: cdktf.stringToTerraform(this._datasetId),
      default_partition_expiration_ms: cdktf.numberToTerraform(this._defaultPartitionExpirationMs),
      default_table_expiration_ms: cdktf.numberToTerraform(this._defaultTableExpirationMs),
      delete_contents_on_destroy: cdktf.booleanToTerraform(this._deleteContentsOnDestroy),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      access: cdktf.listMapper(bigqueryDatasetAccessToTerraform, true)(this._access.internalValue),
      default_encryption_configuration: bigqueryDatasetDefaultEncryptionConfigurationToTerraform(this._defaultEncryptionConfiguration.internalValue),
      timeouts: bigqueryDatasetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
