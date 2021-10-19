// https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Entry description, which can consist of several sentences or paragraphs that describe entry contents.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#description DataCatalogEntry#description}
  */
  readonly description?: string;
  /**
  * Display information such as title and description. A short name to identify the entry,
for example, "Analytics Data - Jan 2011".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#display_name DataCatalogEntry#display_name}
  */
  readonly displayName?: string;
  /**
  * The name of the entry group this entry is in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#entry_group DataCatalogEntry#entry_group}
  */
  readonly entryGroup: string;
  /**
  * The id of the entry to create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#entry_id DataCatalogEntry#entry_id}
  */
  readonly entryId: string;
  /**
  * The resource this metadata entry refers to.
For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#linked_resource DataCatalogEntry#linked_resource}
  */
  readonly linkedResource?: string;
  /**
  * Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema
attached to it. See
https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema
for what fields this schema can contain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#schema DataCatalogEntry#schema}
  */
  readonly schema?: string;
  /**
  * The type of the entry. Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType. Possible values: ["FILESET"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#type DataCatalogEntry#type}
  */
  readonly type?: string;
  /**
  * This field indicates the entry's source system that Data Catalog does not integrate with.
userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#user_specified_system DataCatalogEntry#user_specified_system}
  */
  readonly userSpecifiedSystem?: string;
  /**
  * Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.
When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#user_specified_type DataCatalogEntry#user_specified_type}
  */
  readonly userSpecifiedType?: string;
  /**
  * gcs_fileset_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#gcs_fileset_spec DataCatalogEntry#gcs_fileset_spec}
  */
  readonly gcsFilesetSpec?: DataCatalogEntryGcsFilesetSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#timeouts DataCatalogEntry#timeouts}
  */
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('table_spec') as any;
  }

  // view_spec - computed: true, optional: false, required: false
  public get viewSpec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('view_spec') as any;
  }
}
export interface DataCatalogEntryGcsFilesetSpec {
  /**
  * Patterns to identify a set of files in Google Cloud Storage.
See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames)
for more information. Note that bucket wildcards are currently not supported. Examples of valid filePatterns:

* gs://bucket_name/dir/*: matches all files within bucket_name/dir directory.
* gs://bucket_name/dir/**: matches all files in bucket_name/dir spanning all subdirectories.
* gs://bucket_name/file*: matches files prefixed by file in bucket_name
* gs://bucket_name/??.txt: matches files with two characters followed by .txt in bucket_name
* gs://bucket_name/[aeiou].txt: matches files that contain a single vowel character followed by .txt in bucket_name
* gs://bucket_name/[a-m].txt: matches files that contain a, b, ... or m followed by .txt in bucket_name
* gs://bucket_name/a/*\/b: matches all files in bucket_name that match a/*\/b pattern, such as a/c/b, a/d/b
* gs://another_bucket/a.txt: matches gs://another_bucket/a.txt
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#file_patterns DataCatalogEntry#file_patterns}
  */
  readonly filePatterns: string[];
}

function dataCatalogEntryGcsFilesetSpecToTerraform(struct?: DataCatalogEntryGcsFilesetSpecOutputReference | DataCatalogEntryGcsFilesetSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.filePatterns),
  }
}

export class DataCatalogEntryGcsFilesetSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // file_patterns - computed: false, optional: false, required: true
  private _filePatterns?: string[]; 
  public get filePatterns() {
    return this.getListAttribute('file_patterns');
  }
  public set filePatterns(value: string[]) {
    this._filePatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePatternsInput() {
    return this._filePatterns
  }
}
export interface DataCatalogEntryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#create DataCatalogEntry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#delete DataCatalogEntry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html#update DataCatalogEntry#update}
  */
  readonly update?: string;
}

function dataCatalogEntryTimeoutsToTerraform(struct?: DataCatalogEntryTimeoutsOutputReference | DataCatalogEntryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DataCatalogEntryTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html google_data_catalog_entry}
*/
export class DataCatalogEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_data_catalog_entry";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry.html google_data_catalog_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalogEntryConfig
  */
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
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
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
  private _entryGroup?: string; 
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
  private _entryId?: string; 
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
  private _linkedResource?: string | undefined; 
  public get linkedResource() {
    return this.getStringAttribute('linked_resource');
  }
  public set linkedResource(value: string | undefined) {
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
  private _schema?: string | undefined; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string | undefined) {
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
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
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
  private _userSpecifiedSystem?: string | undefined; 
  public get userSpecifiedSystem() {
    return this.getStringAttribute('user_specified_system');
  }
  public set userSpecifiedSystem(value: string | undefined) {
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
  private _userSpecifiedType?: string | undefined; 
  public get userSpecifiedType() {
    return this.getStringAttribute('user_specified_type');
  }
  public set userSpecifiedType(value: string | undefined) {
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
  private _gcsFilesetSpec?: DataCatalogEntryGcsFilesetSpec | undefined; 
  private __gcsFilesetSpecOutput = new DataCatalogEntryGcsFilesetSpecOutputReference(this as any, "gcs_fileset_spec", true);
  public get gcsFilesetSpec() {
    return this.__gcsFilesetSpecOutput;
  }
  public putGcsFilesetSpec(value: DataCatalogEntryGcsFilesetSpec | undefined) {
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
  private _timeouts?: DataCatalogEntryTimeouts | undefined; 
  private __timeoutsOutput = new DataCatalogEntryTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataCatalogEntryTimeouts | undefined) {
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
      gcs_fileset_spec: dataCatalogEntryGcsFilesetSpecToTerraform(this._gcsFilesetSpec),
      timeouts: dataCatalogEntryTimeoutsToTerraform(this._timeouts),
    };
  }
}
