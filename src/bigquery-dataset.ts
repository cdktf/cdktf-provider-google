// https://www.terraform.io/docs/providers/google/r/bigquery_dataset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigqueryDatasetConfig extends TerraformMetaArguments {
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


Possible regional values include: 'asia-east1', 'asia-northeast1',
'asia-southeast1', 'australia-southeast1', 'europe-north1',
'europe-west2' and 'us-east4'.


Possible multi-regional values: 'EU' and 'US'.


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
export interface BigqueryDatasetAccess {
  /** A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access */
  readonly domain?: string;
  /** An email address of a Google Group to grant access to. */
  readonly groupByEmail?: string;
  /** Describes the rights granted to the user specified by the other
member of the access object. Primitive, Predefined and custom
roles are supported. Predefined roles that have equivalent
primitive roles are swapped by the API to their Primitive
counterparts. See
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
export interface BigqueryDatasetDefaultEncryptionConfiguration {
  /** Describes the Cloud KMS encryption key that will be used to protect destination
BigQuery table. The BigQuery Service Account associated with your project requires
access to this encryption key. */
  readonly kmsKeyName: string;
}
export interface BigqueryDatasetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class BigqueryDataset extends TerraformResource {

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

  // creation_time - computed: true, optional: false, required: true
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId: string;
  public get datasetId() {
    return this._datasetId;
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }

  // default_partition_expiration_ms - computed: false, optional: true, required: false
  private _defaultPartitionExpirationMs?: number;
  public get defaultPartitionExpirationMs() {
    return this._defaultPartitionExpirationMs;
  }
  public set defaultPartitionExpirationMs(value: number | undefined) {
    this._defaultPartitionExpirationMs = value;
  }

  // default_table_expiration_ms - computed: false, optional: true, required: false
  private _defaultTableExpirationMs?: number;
  public get defaultTableExpirationMs() {
    return this._defaultTableExpirationMs;
  }
  public set defaultTableExpirationMs(value: number | undefined) {
    this._defaultTableExpirationMs = value;
  }

  // delete_contents_on_destroy - computed: false, optional: true, required: false
  private _deleteContentsOnDestroy?: boolean;
  public get deleteContentsOnDestroy() {
    return this._deleteContentsOnDestroy;
  }
  public set deleteContentsOnDestroy(value: boolean | undefined) {
    this._deleteContentsOnDestroy = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string;
  public get friendlyName() {
    return this._friendlyName;
  }
  public set friendlyName(value: string | undefined) {
    this._friendlyName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // last_modified_time - computed: true, optional: false, required: true
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location;
  }
  public set location(value: string | undefined) {
    this._location = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // access - computed: false, optional: true, required: false
  private _access?: BigqueryDatasetAccess[];
  public get access() {
    return this._access;
  }
  public set access(value: BigqueryDatasetAccess[] | undefined) {
    this._access = value;
  }

  // default_encryption_configuration - computed: false, optional: true, required: false
  private _defaultEncryptionConfiguration?: BigqueryDatasetDefaultEncryptionConfiguration[];
  public get defaultEncryptionConfiguration() {
    return this._defaultEncryptionConfiguration;
  }
  public set defaultEncryptionConfiguration(value: BigqueryDatasetDefaultEncryptionConfiguration[] | undefined) {
    this._defaultEncryptionConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BigqueryDatasetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BigqueryDatasetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset_id: this._datasetId,
      default_partition_expiration_ms: this._defaultPartitionExpirationMs,
      default_table_expiration_ms: this._defaultTableExpirationMs,
      delete_contents_on_destroy: this._deleteContentsOnDestroy,
      description: this._description,
      friendly_name: this._friendlyName,
      labels: this._labels,
      location: this._location,
      project: this._project,
      access: this._access,
      default_encryption_configuration: this._defaultEncryptionConfiguration,
      timeouts: this._timeouts,
    };
  }
}
