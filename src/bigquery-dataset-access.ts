// https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryDatasetAccessAConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#dataset_id BigqueryDatasetAccessA#dataset_id}
  */
  readonly datasetId: string;
  /**
  * A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#domain BigqueryDatasetAccessA#domain}
  */
  readonly domain?: string;
  /**
  * An email address of a Google Group to grant access to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#group_by_email BigqueryDatasetAccessA#group_by_email}
  */
  readonly groupByEmail?: string;
  /**
  * Some other type of member that appears in the IAM Policy but isn't a user,
group, domain, or special group. For example: 'allUsers'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#iam_member BigqueryDatasetAccessA#iam_member}
  */
  readonly iamMember?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#project BigqueryDatasetAccessA#project}
  */
  readonly project?: string;
  /**
  * Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#role BigqueryDatasetAccessA#role}
  */
  readonly role?: string;
  /**
  * A special group to grant access to. Possible values include:


* 'projectOwners': Owners of the enclosing project.


* 'projectReaders': Readers of the enclosing project.


* 'projectWriters': Writers of the enclosing project.


* 'allAuthenticatedUsers': All authenticated BigQuery users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#special_group BigqueryDatasetAccessA#special_group}
  */
  readonly specialGroup?: string;
  /**
  * An email address of a user to grant access to. For example:
fred@example.com
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#user_by_email BigqueryDatasetAccessA#user_by_email}
  */
  readonly userByEmail?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#timeouts BigqueryDatasetAccessA#timeouts}
  */
  readonly timeouts?: BigqueryDatasetAccessTimeouts;
  /**
  * view block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#view BigqueryDatasetAccessA#view}
  */
  readonly view?: BigqueryDatasetAccessViewA;
}
export interface BigqueryDatasetAccessTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#create BigqueryDatasetAccessA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#delete BigqueryDatasetAccessA#delete}
  */
  readonly delete?: string;
}

export function bigqueryDatasetAccessTimeoutsToTerraform(struct?: BigqueryDatasetAccessTimeoutsOutputReference | BigqueryDatasetAccessTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class BigqueryDatasetAccessTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BigqueryDatasetAccessTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccessTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
    }
    else {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#dataset_id BigqueryDatasetAccessA#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#project_id BigqueryDatasetAccessA#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the table. The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html#table_id BigqueryDatasetAccessA#table_id}
  */
  readonly tableId: string;
}

export function bigqueryDatasetAccessViewAToTerraform(struct?: BigqueryDatasetAccessViewAOutputReference | BigqueryDatasetAccessViewA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export class BigqueryDatasetAccessViewAOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BigqueryDatasetAccessViewA | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._datasetId) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccessViewA | undefined) {
    if (value === undefined) {
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html google_bigquery_dataset_access}
*/
export class BigqueryDatasetAccessA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_bigquery_dataset_access";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access.html google_bigquery_dataset_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryDatasetAccessAConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryDatasetAccessAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_dataset_access',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._datasetId = config.datasetId;
    this._domain = config.domain;
    this._groupByEmail = config.groupByEmail;
    this._iamMember = config.iamMember;
    this._project = config.project;
    this._role = config.role;
    this._specialGroup = config.specialGroup;
    this._userByEmail = config.userByEmail;
    this._timeouts.internalValue = config.timeouts;
    this._view.internalValue = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_updated_member - computed: true, optional: false, required: false
  public get apiUpdatedMember() {
    return this.getBooleanAttribute('api_updated_member') as any;
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
  public get id() {
    return this.getStringAttribute('id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryDatasetAccessTimeoutsOutputReference(this as any, "timeouts", true);
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
  private _view = new BigqueryDatasetAccessViewAOutputReference(this as any, "view", true);
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
      project: cdktf.stringToTerraform(this._project),
      role: cdktf.stringToTerraform(this._role),
      special_group: cdktf.stringToTerraform(this._specialGroup),
      user_by_email: cdktf.stringToTerraform(this._userByEmail),
      timeouts: bigqueryDatasetAccessTimeoutsToTerraform(this._timeouts.internalValue),
      view: bigqueryDatasetAccessViewAToTerraform(this._view.internalValue),
    };
  }
}
