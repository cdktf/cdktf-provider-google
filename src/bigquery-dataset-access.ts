// https://www.terraform.io/docs/providers/google/r/bigquery_dataset_access_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigqueryDatasetAccessAConfig extends TerraformMetaArguments {
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
member of the access object. Primitive, Predefined and custom
roles are supported. Predefined roles that have equivalent
primitive roles are swapped by the API to their Primitive
counterparts, and will show a diff post-create. See
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

// Resource

export class BigqueryDatasetAccessA extends TerraformResource {

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

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId: string;
  public get datasetId() {
    return this._datasetId;
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }

  // group_by_email - computed: false, optional: true, required: false
  private _groupByEmail?: string;
  public get groupByEmail() {
    return this._groupByEmail;
  }
  public set groupByEmail(value: string | undefined) {
    this._groupByEmail = value;
  }

  // iam_member - computed: false, optional: true, required: false
  private _iamMember?: string;
  public get iamMember() {
    return this._iamMember;
  }
  public set iamMember(value: string | undefined) {
    this._iamMember = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string;
  public get role() {
    return this._role;
  }
  public set role(value: string | undefined) {
    this._role = value;
  }

  // special_group - computed: false, optional: true, required: false
  private _specialGroup?: string;
  public get specialGroup() {
    return this._specialGroup;
  }
  public set specialGroup(value: string | undefined) {
    this._specialGroup = value;
  }

  // user_by_email - computed: false, optional: true, required: false
  private _userByEmail?: string;
  public get userByEmail() {
    return this._userByEmail;
  }
  public set userByEmail(value: string | undefined) {
    this._userByEmail = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BigqueryDatasetAccessTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BigqueryDatasetAccessTimeouts | undefined) {
    this._timeouts = value;
  }

  // view - computed: false, optional: true, required: false
  private _view?: BigqueryDatasetAccessViewA[];
  public get view() {
    return this._view;
  }
  public set view(value: BigqueryDatasetAccessViewA[] | undefined) {
    this._view = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset_id: this._datasetId,
      domain: this._domain,
      group_by_email: this._groupByEmail,
      iam_member: this._iamMember,
      project: this._project,
      role: this._role,
      special_group: this._specialGroup,
      user_by_email: this._userByEmail,
      timeouts: this._timeouts,
      view: this._view,
    };
  }
}
