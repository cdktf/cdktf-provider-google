// https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryDatasetAccessAConfig extends cdktf.TerraformMetaArguments {
  /** A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters. */
  readonly datasetId: string;
  /** A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access */
  readonly domain?: string;
  /** An email address of a Google Group to grant access to. */
  readonly groupByEmail?: string;
  /** Some other type of member that appears in the IAM Policy but isn't a user,
group, domain, or special group. For example: 'allUsers' */
  readonly iamMember?: string;
  readonly project?: string;
  /** Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control). */
  readonly role?: string;
  /** A special group to grant access to. Possible values include:


* 'projectOwners': Owners of the enclosing project.


* 'projectReaders': Readers of the enclosing project.


* 'projectWriters': Writers of the enclosing project.


* 'allAuthenticatedUsers': All authenticated BigQuery users. */
  readonly specialGroup?: string;
  /** An email address of a user to grant access to. For example:
fred@example.com */
  readonly userByEmail?: string;
  /** timeouts block */
  readonly timeouts?: BigqueryDatasetAccessTimeouts;
  /** view block */
  readonly view?: BigqueryDatasetAccessViewA[];
}
export interface BigqueryDatasetAccessTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function bigqueryDatasetAccessTimeoutsToTerraform(struct?: BigqueryDatasetAccessTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export interface BigqueryDatasetAccessViewA {
  /** The ID of the dataset containing this table. */
  readonly datasetId: string;
  /** The ID of the project containing this table. */
  readonly projectId: string;
  /** The ID of the table. The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters. */
  readonly tableId: string;
}

function bigqueryDatasetAccessViewAToTerraform(struct?: BigqueryDatasetAccessViewA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


// Resource

export class BigqueryDatasetAccessA extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._timeouts = config.timeouts;
    this._view = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_updated_member - computed: true, optional: false, required: false
  public get apiUpdatedMember() {
    return this.getBooleanAttribute('api_updated_member');
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId: string;
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string ) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
  }

  // group_by_email - computed: false, optional: true, required: false
  private _groupByEmail?: string;
  public get groupByEmail() {
    return this.getStringAttribute('group_by_email');
  }
  public set groupByEmail(value: string ) {
    this._groupByEmail = value;
  }
  public resetGroupByEmail() {
    this._groupByEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByEmailInput() {
    return this._groupByEmail
  }

  // iam_member - computed: false, optional: true, required: false
  private _iamMember?: string;
  public get iamMember() {
    return this.getStringAttribute('iam_member');
  }
  public set iamMember(value: string ) {
    this._iamMember = value;
  }
  public resetIamMember() {
    this._iamMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamMemberInput() {
    return this._iamMember
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
    return this._project
  }

  // role - computed: false, optional: true, required: false
  private _role?: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string ) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // special_group - computed: false, optional: true, required: false
  private _specialGroup?: string;
  public get specialGroup() {
    return this.getStringAttribute('special_group');
  }
  public set specialGroup(value: string ) {
    this._specialGroup = value;
  }
  public resetSpecialGroup() {
    this._specialGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialGroupInput() {
    return this._specialGroup
  }

  // user_by_email - computed: false, optional: true, required: false
  private _userByEmail?: string;
  public get userByEmail() {
    return this.getStringAttribute('user_by_email');
  }
  public set userByEmail(value: string ) {
    this._userByEmail = value;
  }
  public resetUserByEmail() {
    this._userByEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userByEmailInput() {
    return this._userByEmail
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BigqueryDatasetAccessTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BigqueryDatasetAccessTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // view - computed: false, optional: true, required: false
  private _view?: BigqueryDatasetAccessViewA[];
  public get view() {
    return this.interpolationForAttribute('view') as any;
  }
  public set view(value: BigqueryDatasetAccessViewA[] ) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view
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
      timeouts: bigqueryDatasetAccessTimeoutsToTerraform(this._timeouts),
      view: cdktf.listMapper(bigqueryDatasetAccessViewAToTerraform)(this._view),
    };
  }
}
