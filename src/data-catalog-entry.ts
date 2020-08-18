// https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataCatalogEntryConfig extends TerraformMetaArguments {
  /** Entry description, which can consist of several sentences or paragraphs that describe entry contents. */
  readonly description?: string;
  /** Display information such as title and description. A short name to identify the entry,
for example, "Analytics Data - Jan 2011". */
  readonly displayName?: string;
  /** The name of the entry group this entry is in. */
  readonly entryGroup: string;
  /** The id of the entry to create. */
  readonly entryId: string;
  /** The resource this metadata entry refers to.
For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string. */
  readonly linkedResource?: string;
  /** Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema
attached to it. See
https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema
for what fields this schema can contain. */
  readonly schema?: string;
  /** The type of the entry. Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType. Possible values: ["FILESET"] */
  readonly type?: string;
  /** This field indicates the entry's source system that Data Catalog does not integrate with.
userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long. */
  readonly userSpecifiedSystem?: string;
  /** Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.
When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long. */
  readonly userSpecifiedType?: string;
  /** gcs_fileset_spec block */
  readonly gcsFilesetSpec?: DataCatalogEntryGcsFilesetSpec[];
  /** timeouts block */
  readonly timeouts?: DataCatalogEntryTimeouts;
}
export class DataCatalogEntryBigqueryDateShardedSpec extends ComplexComputedList {

  // dataset - computed: true, optional: false, required: true
  public get dataset() {
    return this.getStringAttribute('dataset');
  }

  // shard_count - computed: true, optional: false, required: true
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }

  // table_prefix - computed: true, optional: false, required: true
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
}
export class DataCatalogEntryBigqueryTableSpecTableSpec extends ComplexComputedList {

  // grouped_entry - computed: true, optional: false, required: true
  public get groupedEntry() {
    return this.getStringAttribute('grouped_entry');
  }
}
export class DataCatalogEntryBigqueryTableSpecViewSpec extends ComplexComputedList {

  // view_query - computed: true, optional: false, required: true
  public get viewQuery() {
    return this.getStringAttribute('view_query');
  }
}
export class DataCatalogEntryBigqueryTableSpec extends ComplexComputedList {

  // table_source_type - computed: true, optional: false, required: true
  public get tableSourceType() {
    return this.getStringAttribute('table_source_type');
  }

  // table_spec - computed: true, optional: false, required: true
  public get tableSpec() {
    return 'not implemented' as any;
  }

  // view_spec - computed: true, optional: false, required: true
  public get viewSpec() {
    return 'not implemented' as any;
  }
}
export interface DataCatalogEntryGcsFilesetSpec {
  /** Patterns to identify a set of files in Google Cloud Storage.
See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames)
for more information. Note that bucket wildcards are currently not supported. Examples of valid filePatterns:

* gs://bucket_name/dir/*: matches all files within bucket_name/dir directory.
* gs://bucket_name/dir/**: matches all files in bucket_name/dir spanning all subdirectories.
* gs://bucket_name/file*: matches files prefixed by file in bucket_name
* gs://bucket_name/??.txt: matches files with two characters followed by .txt in bucket_name
* gs://bucket_name/[aeiou].txt: matches files that contain a single vowel character followed by .txt in bucket_name
* gs://bucket_name/[a-m].txt: matches files that contain a, b, ... or m followed by .txt in bucket_name
* gs://bucket_name/a/*\/b: matches all files in bucket_name that match a/*\/b pattern, such as a/c/b, a/d/b
* gs://another_bucket/a.txt: matches gs://another_bucket/a.txt */
  readonly filePatterns: string[];
}
export interface DataCatalogEntryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DataCatalogEntry extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataCatalogEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_entry',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._entryGroup = config.entryGroup;
    this._entryId = config.entryId;
    this._linkedResource = config.linkedResource;
    this._schema = config.schema;
    this._type = config.type;
    this._userSpecifiedSystem = config.userSpecifiedSystem;
    this._userSpecifiedType = config.userSpecifiedType;
    this._gcsFilesetSpec = config.gcsFilesetSpec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bigquery_date_sharded_spec - computed: true, optional: false, required: true
  public bigqueryDateShardedSpec(index: string) {
    return new DataCatalogEntryBigqueryDateShardedSpec(this, 'bigquery_date_sharded_spec', index);
  }

  // bigquery_table_spec - computed: true, optional: false, required: true
  public bigqueryTableSpec(index: string) {
    return new DataCatalogEntryBigqueryTableSpec(this, 'bigquery_table_spec', index);
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // entry_group - computed: false, optional: false, required: true
  private _entryGroup: string;
  public get entryGroup() {
    return this._entryGroup;
  }
  public set entryGroup(value: string) {
    this._entryGroup = value;
  }

  // entry_id - computed: false, optional: false, required: true
  private _entryId: string;
  public get entryId() {
    return this._entryId;
  }
  public set entryId(value: string) {
    this._entryId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // integrated_system - computed: true, optional: false, required: true
  public get integratedSystem() {
    return this.getStringAttribute('integrated_system');
  }

  // linked_resource - computed: true, optional: true, required: false
  private _linkedResource?: string;
  public get linkedResource() {
    return this._linkedResource ?? this.getStringAttribute('linked_resource');
  }
  public set linkedResource(value: string | undefined) {
    this._linkedResource = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string;
  public get schema() {
    return this._schema;
  }
  public set schema(value: string | undefined) {
    this._schema = value;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // user_specified_system - computed: false, optional: true, required: false
  private _userSpecifiedSystem?: string;
  public get userSpecifiedSystem() {
    return this._userSpecifiedSystem;
  }
  public set userSpecifiedSystem(value: string | undefined) {
    this._userSpecifiedSystem = value;
  }

  // user_specified_type - computed: false, optional: true, required: false
  private _userSpecifiedType?: string;
  public get userSpecifiedType() {
    return this._userSpecifiedType;
  }
  public set userSpecifiedType(value: string | undefined) {
    this._userSpecifiedType = value;
  }

  // gcs_fileset_spec - computed: false, optional: true, required: false
  private _gcsFilesetSpec?: DataCatalogEntryGcsFilesetSpec[];
  public get gcsFilesetSpec() {
    return this._gcsFilesetSpec;
  }
  public set gcsFilesetSpec(value: DataCatalogEntryGcsFilesetSpec[] | undefined) {
    this._gcsFilesetSpec = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataCatalogEntryTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataCatalogEntryTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      display_name: this._displayName,
      entry_group: this._entryGroup,
      entry_id: this._entryId,
      linked_resource: this._linkedResource,
      schema: this._schema,
      type: this._type,
      user_specified_system: this._userSpecifiedSystem,
      user_specified_type: this._userSpecifiedType,
      gcs_fileset_spec: this._gcsFilesetSpec,
      timeouts: this._timeouts,
    };
  }
}
