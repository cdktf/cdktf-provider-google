// https://www.terraform.io/docs/providers/google/r/bigquery_dataset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryDatasetConfig extends cdktf.TerraformMetaArguments {
  /** A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters. */
  readonly datasetId: string;
  /** The default partition expiration for all partitioned tables in
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
over the default partition expiration time indicated by this property. */
  readonly defaultPartitionExpirationMs?: number;
  /** The default lifetime of all tables in the dataset, in milliseconds.
The minimum value is 3600000 milliseconds (one hour).


Once this property is set, all newly-created tables in the dataset
will have an 'expirationTime' property set to the creation time plus
the value in this property, and changing the value will only affect
new tables, not existing ones. When the 'expirationTime' for a given
table is reached, that table will be deleted automatically.
If a table's 'expirationTime' is modified or removed before the
table expires, or if you provide an explicit 'expirationTime' when
creating a table, that value takes precedence over the default
expiration time indicated by this property. */
  readonly defaultTableExpirationMs?: number;
  readonly deleteContentsOnDestroy?: boolean;
  /** A user-friendly description of the dataset */
  readonly description?: string;
  /** A descriptive name for the dataset */
  readonly friendlyName?: string;
  /** The labels associated with this dataset. You can use these to
organize and group your datasets */
  readonly labels?: { [key: string]: string };
  /** The geographic location where the dataset should reside.
See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).


There are two types of locations, regional or multi-regional. A regional
location is a specific geographic place, such as Tokyo, and a multi-regional
location is a large geographic area, such as the United States, that
contains at least two geographic places.


The default value is multi-regional location 'US'.
Changing this forces a new resource to be created. */
  readonly location?: string;
  readonly project?: string;
  /** access block */
  readonly access?: BigqueryDatasetAccess[];
  /** default_encryption_configuration block */
  readonly defaultEncryptionConfiguration?: BigqueryDatasetDefaultEncryptionConfiguration[];
  /** timeouts block */
  readonly timeouts?: BigqueryDatasetTimeouts;
}
export interface BigqueryDatasetAccessView {
  /** The ID of the dataset containing this table. */
  readonly datasetId: string;
  /** The ID of the project containing this table. */
  readonly projectId: string;
  /** The ID of the table. The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters. */
  readonly tableId: string;
}

function bigqueryDatasetAccessViewToTerraform(struct?: BigqueryDatasetAccessView): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export interface BigqueryDatasetAccess {
  /** A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access */
  readonly domain?: string;
  /** An email address of a Google Group to grant access to. */
  readonly groupByEmail?: string;
  /** Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles
are supported. Predefined roles that have equivalent basic roles
are swapped by the API to their basic counterparts. See
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
  /** view block */
  readonly view?: BigqueryDatasetAccessView[];
}

function bigqueryDatasetAccessToTerraform(struct?: BigqueryDatasetAccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    group_by_email: cdktf.stringToTerraform(struct!.groupByEmail),
    role: cdktf.stringToTerraform(struct!.role),
    special_group: cdktf.stringToTerraform(struct!.specialGroup),
    user_by_email: cdktf.stringToTerraform(struct!.userByEmail),
    view: cdktf.listMapper(bigqueryDatasetAccessViewToTerraform)(struct!.view),
  }
}

export interface BigqueryDatasetDefaultEncryptionConfiguration {
  /** Describes the Cloud KMS encryption key that will be used to protect destination
BigQuery table. The BigQuery Service Account associated with your project requires
access to this encryption key. */
  readonly kmsKeyName: string;
}

function bigqueryDatasetDefaultEncryptionConfigurationToTerraform(struct?: BigqueryDatasetDefaultEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export interface BigqueryDatasetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function bigqueryDatasetTimeoutsToTerraform(struct?: BigqueryDatasetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BigqueryDataset extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BigqueryDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_dataset',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._datasetId = config.datasetId;
    this._defaultPartitionExpirationMs = config.defaultPartitionExpirationMs;
    this._defaultTableExpirationMs = config.defaultTableExpirationMs;
    this._deleteContentsOnDestroy = config.deleteContentsOnDestroy;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._access = config.access;
    this._defaultEncryptionConfiguration = config.defaultEncryptionConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
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

  // default_partition_expiration_ms - computed: false, optional: true, required: false
  private _defaultPartitionExpirationMs?: number;
  public get defaultPartitionExpirationMs() {
    return this.getNumberAttribute('default_partition_expiration_ms');
  }
  public set defaultPartitionExpirationMs(value: number ) {
    this._defaultPartitionExpirationMs = value;
  }
  public resetDefaultPartitionExpirationMs() {
    this._defaultPartitionExpirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPartitionExpirationMsInput() {
    return this._defaultPartitionExpirationMs
  }

  // default_table_expiration_ms - computed: false, optional: true, required: false
  private _defaultTableExpirationMs?: number;
  public get defaultTableExpirationMs() {
    return this.getNumberAttribute('default_table_expiration_ms');
  }
  public set defaultTableExpirationMs(value: number ) {
    this._defaultTableExpirationMs = value;
  }
  public resetDefaultTableExpirationMs() {
    this._defaultTableExpirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTableExpirationMsInput() {
    return this._defaultTableExpirationMs
  }

  // delete_contents_on_destroy - computed: false, optional: true, required: false
  private _deleteContentsOnDestroy?: boolean;
  public get deleteContentsOnDestroy() {
    return this.getBooleanAttribute('delete_contents_on_destroy');
  }
  public set deleteContentsOnDestroy(value: boolean ) {
    this._deleteContentsOnDestroy = value;
  }
  public resetDeleteContentsOnDestroy() {
    this._deleteContentsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteContentsOnDestroyInput() {
    return this._deleteContentsOnDestroy
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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
  public set friendlyName(value: string ) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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
  public set location(value: string ) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // access - computed: false, optional: true, required: false
  private _access?: BigqueryDatasetAccess[];
  public get access() {
    return this.interpolationForAttribute('access') as any;
  }
  public set access(value: BigqueryDatasetAccess[] ) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access
  }

  // default_encryption_configuration - computed: false, optional: true, required: false
  private _defaultEncryptionConfiguration?: BigqueryDatasetDefaultEncryptionConfiguration[];
  public get defaultEncryptionConfiguration() {
    return this.interpolationForAttribute('default_encryption_configuration') as any;
  }
  public set defaultEncryptionConfiguration(value: BigqueryDatasetDefaultEncryptionConfiguration[] ) {
    this._defaultEncryptionConfiguration = value;
  }
  public resetDefaultEncryptionConfiguration() {
    this._defaultEncryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEncryptionConfigurationInput() {
    return this._defaultEncryptionConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BigqueryDatasetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BigqueryDatasetTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
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
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      access: cdktf.listMapper(bigqueryDatasetAccessToTerraform)(this._access),
      default_encryption_configuration: cdktf.listMapper(bigqueryDatasetDefaultEncryptionConfigurationToTerraform)(this._defaultEncryptionConfiguration),
      timeouts: bigqueryDatasetTimeoutsToTerraform(this._timeouts),
    };
  }
}
