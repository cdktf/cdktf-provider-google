// https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogEntryConfig extends cdktf.TerraformMetaArguments {
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
export class DataCatalogEntryBigqueryDateShardedSpec extends cdktf.ComplexComputedList {

  // dataset - computed: true, optional: false, required: false
  public get dataset() {
    return this.getStringAttribute('dataset');
  }

  // shard_count - computed: true, optional: false, required: false
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }

  // table_prefix - computed: true, optional: false, required: false
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
}
export class DataCatalogEntryBigqueryTableSpecTableSpec extends cdktf.ComplexComputedList {

  // grouped_entry - computed: true, optional: false, required: false
  public get groupedEntry() {
    return this.getStringAttribute('grouped_entry');
  }
}
export class DataCatalogEntryBigqueryTableSpecViewSpec extends cdktf.ComplexComputedList {

  // view_query - computed: true, optional: false, required: false
  public get viewQuery() {
    return this.getStringAttribute('view_query');
  }
}
export class DataCatalogEntryBigqueryTableSpec extends cdktf.ComplexComputedList {

  // table_source_type - computed: true, optional: false, required: false
  public get tableSourceType() {
    return this.getStringAttribute('table_source_type');
  }

  // table_spec - computed: true, optional: false, required: false
  public get tableSpec() {
    return this.interpolationForAttribute('table_spec') as any;
  }

  // view_spec - computed: true, optional: false, required: false
  public get viewSpec() {
    return this.interpolationForAttribute('view_spec') as any;
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

function dataCatalogEntryGcsFilesetSpecToTerraform(struct?: DataCatalogEntryGcsFilesetSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.filePatterns),
  }
}

export interface DataCatalogEntryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dataCatalogEntryTimeoutsToTerraform(struct?: DataCatalogEntryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DataCatalogEntry extends cdktf.TerraformResource {

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

  // bigquery_date_sharded_spec - computed: true, optional: false, required: false
  public bigqueryDateShardedSpec(index: string) {
    return new DataCatalogEntryBigqueryDateShardedSpec(this, 'bigquery_date_sharded_spec', index);
  }

  // bigquery_table_spec - computed: true, optional: false, required: false
  public bigqueryTableSpec(index: string) {
    return new DataCatalogEntryBigqueryTableSpec(this, 'bigquery_table_spec', index);
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // entry_group - computed: false, optional: false, required: true
  private _entryGroup: string;
  public get entryGroup() {
    return this.getStringAttribute('entry_group');
  }
  public set entryGroup(value: string) {
    this._entryGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryGroupInput() {
    return this._entryGroup
  }

  // entry_id - computed: false, optional: false, required: true
  private _entryId: string;
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }
  public set entryId(value: string) {
    this._entryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryIdInput() {
    return this._entryId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integrated_system - computed: true, optional: false, required: false
  public get integratedSystem() {
    return this.getStringAttribute('integrated_system');
  }

  // linked_resource - computed: true, optional: true, required: false
  private _linkedResource?: string;
  public get linkedResource() {
    return this.getStringAttribute('linked_resource');
  }
  public set linkedResource(value: string) {
    this._linkedResource = value;
  }
  public resetLinkedResource() {
    this._linkedResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedResourceInput() {
    return this._linkedResource
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string;
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string ) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // user_specified_system - computed: false, optional: true, required: false
  private _userSpecifiedSystem?: string;
  public get userSpecifiedSystem() {
    return this.getStringAttribute('user_specified_system');
  }
  public set userSpecifiedSystem(value: string ) {
    this._userSpecifiedSystem = value;
  }
  public resetUserSpecifiedSystem() {
    this._userSpecifiedSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSpecifiedSystemInput() {
    return this._userSpecifiedSystem
  }

  // user_specified_type - computed: false, optional: true, required: false
  private _userSpecifiedType?: string;
  public get userSpecifiedType() {
    return this.getStringAttribute('user_specified_type');
  }
  public set userSpecifiedType(value: string ) {
    this._userSpecifiedType = value;
  }
  public resetUserSpecifiedType() {
    this._userSpecifiedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSpecifiedTypeInput() {
    return this._userSpecifiedType
  }

  // gcs_fileset_spec - computed: false, optional: true, required: false
  private _gcsFilesetSpec?: DataCatalogEntryGcsFilesetSpec[];
  public get gcsFilesetSpec() {
    return this.interpolationForAttribute('gcs_fileset_spec') as any;
  }
  public set gcsFilesetSpec(value: DataCatalogEntryGcsFilesetSpec[] ) {
    this._gcsFilesetSpec = value;
  }
  public resetGcsFilesetSpec() {
    this._gcsFilesetSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsFilesetSpecInput() {
    return this._gcsFilesetSpec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataCatalogEntryTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataCatalogEntryTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      entry_group: cdktf.stringToTerraform(this._entryGroup),
      entry_id: cdktf.stringToTerraform(this._entryId),
      linked_resource: cdktf.stringToTerraform(this._linkedResource),
      schema: cdktf.stringToTerraform(this._schema),
      type: cdktf.stringToTerraform(this._type),
      user_specified_system: cdktf.stringToTerraform(this._userSpecifiedSystem),
      user_specified_type: cdktf.stringToTerraform(this._userSpecifiedType),
      gcs_fileset_spec: cdktf.listMapper(dataCatalogEntryGcsFilesetSpecToTerraform)(this._gcsFilesetSpec),
      timeouts: dataCatalogEntryTimeoutsToTerraform(this._timeouts),
    };
  }
}
